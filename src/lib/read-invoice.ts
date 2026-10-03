import type { PDFPageProxy } from "pdfjs-dist";

import { parseInvoiceText } from "@/lib/parse-invoice";
import type { ScanResponse } from "@/lib/invoices";

const MAX_PDF_PAGES = 3;

export function isPdfFile(file: File) {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

export async function readInvoiceImage(file: File): Promise<ScanResponse> {
  if (isPdfFile(file)) return readPdf(file);
  const prepared = await prepare(file);
  return recognize(prepared);
}

export async function renderPdfPreview(file: File) {
  const pdf = await openPdf(file);
  const page = await pdf.getPage(1);
  const canvas = await renderPage(page, 1.4);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return null;
  return URL.createObjectURL(blob);
}

async function readPdf(file: File): Promise<ScanResponse> {
  const pdf = await openPdf(file);
  const pageCount = Math.min(pdf.numPages, MAX_PDF_PAGES);
  let text = "";

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    text +=
      content.items
        .map((item) => ("str" in item ? item.str : ""))
        .join(" ") + "\n";
  }

  const fromText = parseInvoiceText(text);
  if (fromText.ok) return fromText;

  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("slv+eng");
  try {
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const canvas = await renderPage(page, 2);
      const result = await worker.recognize(canvas);
      text += `\n${result.data.text}`;
    }
  } finally {
    await worker.terminate();
  }

  return parseInvoiceText(text);
}

async function openPdf(file: File) {
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  const data = new Uint8Array(await file.arrayBuffer());
  return pdfjs.getDocument({
    data,
    cMapUrl: "https://unpkg.com/pdfjs-dist@4.10.38/cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "https://unpkg.com/pdfjs-dist@4.10.38/standard_fonts/",
  }).promise;
}

async function renderPage(page: PDFPageProxy, scale: number) {
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Kanvasa ni bilo mogoče pripraviti.");
  await page.render({ canvasContext: context, viewport }).promise;
  return canvas;
}

async function recognize(source: Blob | HTMLCanvasElement): Promise<ScanResponse> {
  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("slv+eng");
  try {
    const result = await worker.recognize(source);
    return parseInvoiceText(result.data.text);
  } finally {
    await worker.terminate();
  }
}

async function prepare(file: File): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);
    const longest = Math.max(bitmap.width, bitmap.height);
    const scale = longest < 1600 ? 1600 / longest : longest > 2400 ? 2400 / longest : 1;
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return file;
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    return blob ?? file;
  } catch {
    return file;
  }
}
