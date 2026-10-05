import { DEFAULT_UNIT_PRICES, type UnitPrices } from "@/lib/quotes";
import { SITE } from "@/lib/site";

export interface BusinessSettings {
  companyName: string;
  notifyEmail: string;
  phone: string;
  customized: boolean;
  prices: UnitPrices;
}

const STORAGE_KEY = "strannakljuc-nastavitve";
const listeners = new Set<() => void>();

export const DEFAULT_SETTINGS: BusinessSettings = {
  companyName: SITE.name,
  notifyEmail: SITE.email,
  phone: SITE.phoneDisplay,
  customized: false,
  prices: DEFAULT_UNIT_PRICES,
};

let memory: BusinessSettings | null = null;

export function subscribeSettings(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSettingsSnapshot() {
  if (memory) return memory;
  memory = readStored();
  return memory;
}

export function getSettingsServerSnapshot() {
  return DEFAULT_SETTINGS;
}

export function saveSettings(next: BusinessSettings) {
  memory = { ...next, customized: true, prices: sanitizePrices(next.prices) };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
  listeners.forEach((listener) => listener());
}

function readStored(): BusinessSettings {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<BusinessSettings>;
    return {
      companyName:
        typeof parsed.companyName === "string" && parsed.companyName.trim()
          ? parsed.companyName
          : DEFAULT_SETTINGS.companyName,
      notifyEmail:
        typeof parsed.notifyEmail === "string" && parsed.notifyEmail.trim()
          ? parsed.notifyEmail
          : DEFAULT_SETTINGS.notifyEmail,
      phone:
        typeof parsed.phone === "string" && parsed.phone.trim()
          ? parsed.phone
          : DEFAULT_SETTINGS.phone,
      customized: parsed.customized === true,
      prices: sanitizePrices(parsed.prices),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function sanitizePrices(value: unknown): UnitPrices {
  const source = (value ?? {}) as Partial<UnitPrices>;
  return {
    facade: { ...DEFAULT_UNIT_PRICES.facade, ...numbers(source.facade) },
    metal: { ...DEFAULT_UNIT_PRICES.metal, ...numbers(source.metal) },
    drywall: { ...DEFAULT_UNIT_PRICES.drywall, ...numbers(source.drywall) },
    roof: { ...DEFAULT_UNIT_PRICES.roof, ...numbers(source.roof) },
  };
}

function numbers<T extends object>(value: T | undefined) {
  if (!value) return {};
  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, number] => typeof entry[1] === "number" && entry[1] >= 0),
  );
}
