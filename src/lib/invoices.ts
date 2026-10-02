export interface ScannedInvoice {
  izdajatelj: string;
  znesek: string;
  iban: string;
  sklic: string;
}

export interface SavedInvoice extends ScannedInvoice {
  id: string;
  filename: string;
  savedAt: string;
}

export interface ScanResponse {
  ok: boolean;
  error?: string;
  invoice?: ScannedInvoice;
}

const STORAGE_KEY = "strannakljuc-racuni";
const EMPTY: SavedInvoice[] = [];

let memory: SavedInvoice[] | null = null;
const listeners = new Set<() => void>();

export function subscribeInvoices(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getInvoiceSnapshot() {
  if (memory) return memory;
  memory = readStored();
  return memory;
}

export function getInvoiceServerSnapshot() {
  return EMPTY;
}

export function commitInvoices(next: SavedInvoice[]) {
  memory = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((listener) => listener());
}

function readStored(): SavedInvoice[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed.filter(isSavedInvoice);
  } catch {
    return EMPTY;
  }
}

function isSavedInvoice(value: unknown): value is SavedInvoice {
  if (!value || typeof value !== "object") return false;
  const invoice = value as Partial<SavedInvoice>;
  return (
    typeof invoice.id === "string" &&
    typeof invoice.izdajatelj === "string" &&
    typeof invoice.znesek === "string" &&
    typeof invoice.iban === "string" &&
    typeof invoice.sklic === "string" &&
    typeof invoice.filename === "string" &&
    typeof invoice.savedAt === "string"
  );
}
