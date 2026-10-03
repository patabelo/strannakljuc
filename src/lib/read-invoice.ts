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
    const maxSide = 1800;
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return file;
    context.drawImage(bitmap, 0, 0, width, height);
    const image = context.getImageData(0, 0, width, height);
    const pixels = image.data;
    for (let index = 0; index < pixels.length; index += 4) {
      const gray = pixels[index] * 0.3 + pixels[index + 1] * 0.59 + pixels[index + 2] * 0.11;
      const contrasted = Math.min(255, Math.max(0, (gray - 128) * 1.35 + 128));
      pixels[index] = contrasted;
      pixels[index + 1] = contrasted;
      pixels[index + 2] = contrasted;
    }
    context.putImageData(image, 0, 0);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    return blob ?? file;
  } catch {
    return file;
  }
}
