import { parseInvoiceText } from "@/lib/parse-invoice";
import type { ScanResponse } from "@/lib/invoices";

export async function readInvoiceImage(file: File): Promise<ScanResponse> {
  const prepared = await prepare(file);
  const { createWorker } = await import("tesseract.js");
  const worker = await createWorker("slv+eng");
  try {
    const result = await worker.recognize(prepared);
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
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return file;
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    return blob ?? file;
  } catch {
    return file;
  }
}
