export interface ScannedInvoice {
  izdajatelj: string;
  davcnaStevilka: string;
  idZaDdv: string;
  stevilkaRacuna: string;
  datumIzdaje: string;
  osnova: string;
  ddv: string;
  znesek: string;
  iban: string;
  sklic: string;
  eor: string;
  zoi: string;
}

export const EMPTY_INVOICE: ScannedInvoice = {
  izdajatelj: "",
  davcnaStevilka: "",
  idZaDdv: "",
  stevilkaRacuna: "",
  datumIzdaje: "",
  osnova: "",
  ddv: "",
  znesek: "",
  iban: "",
  sklic: "",
  eor: "",
  zoi: "",
};

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
    return parsed.flatMap((item) => {
      const invoice = asSavedInvoice(item);
      return invoice ? [invoice] : [];
    });
  } catch {
    return EMPTY;
  }
}

function asSavedInvoice(value: unknown): SavedInvoice | null {
  if (!value || typeof value !== "object") return null;
  const invoice = value as Partial<SavedInvoice>;
  if (
    typeof invoice.id !== "string" ||
    typeof invoice.izdajatelj !== "string" ||
    typeof invoice.znesek !== "string" ||
    typeof invoice.filename !== "string" ||
    typeof invoice.savedAt !== "string"
  ) {
    return null;
  }

  return {
    ...EMPTY_INVOICE,
    id: invoice.id,
    filename: invoice.filename,
    savedAt: invoice.savedAt,
    izdajatelj: invoice.izdajatelj,
    znesek: invoice.znesek,
    davcnaStevilka: text(invoice.davcnaStevilka),
    idZaDdv: text(invoice.idZaDdv),
    stevilkaRacuna: text(invoice.stevilkaRacuna),
    datumIzdaje: text(invoice.datumIzdaje),
    osnova: text(invoice.osnova),
    ddv: text(invoice.ddv),
    iban: text(invoice.iban),
    sklic: text(invoice.sklic),
    eor: text(invoice.eor),
    zoi: text(invoice.zoi),
  };
}

function text(value: unknown) {
  return typeof value === "string" ? value : "";
}
