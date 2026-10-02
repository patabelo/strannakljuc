export type TradeId = "fasaderstvo" | "kovinarstvo" | "gipsarija" | "strehe";

export type InsulationThickness = "15cm" | "20cm";
export type FacadeMaterial = "stiropor" | "kamena-volna";
export type MetalKind = "ograja" | "nadstresek";
export type MetalMaterial = "inox" | "prasno";
export type DrywallKind = "navadne" | "vlagoodporne";
export type RoofCovering = "opeka" | "plocevina";
export type YesNo = "da" | "ne";

export interface FacadeInput {
  area: string;
  thickness: InsulationThickness;
  material: FacadeMaterial;
}

export interface MetalInput {
  kind: MetalKind;
  quantity: string;
  material: MetalMaterial;
}

export interface DrywallInput {
  area: string;
  kind: DrywallKind;
}

export interface RoofInput {
  area: string;
  covering: RoofCovering;
  frame: YesNo;
}

export interface QuoteInputs {
  fasaderstvo: FacadeInput;
  kovinarstvo: MetalInput;
  gipsarija: DrywallInput;
  strehe: RoofInput;
}

export interface QuoteResult {
  low: number;
  high: number;
  summary: string;
}

export const INITIAL_INPUTS: QuoteInputs = {
  fasaderstvo: { area: "", thickness: "15cm", material: "stiropor" },
  kovinarstvo: { kind: "ograja", quantity: "", material: "prasno" },
  gipsarija: { area: "", kind: "navadne" },
  strehe: { area: "", covering: "opeka", frame: "ne" },
};

const TRADE_LABEL: Record<TradeId, string> = {
  fasaderstvo: "Fasaderstvo",
  kovinarstvo: "Kovinarstvo",
  gipsarija: "Gipsarija",
  strehe: "Strehe",
};

const FACADE_MATERIAL: Record<FacadeMaterial, string> = {
  stiropor: "Stiropor",
  "kamena-volna": "Kamena volna",
};

const METAL_KIND: Record<MetalKind, string> = {
  ograja: "Ograja",
  nadstresek: "Nadstrešek",
};

const METAL_MATERIAL: Record<MetalMaterial, string> = {
  inox: "Inox",
  prasno: "Prašno barvano",
};

const DRYWALL_KIND: Record<DrywallKind, string> = {
  navadne: "Navadne plošče",
  vlagoodporne: "Vlagoodporne plošče",
};

const ROOF_COVERING: Record<RoofCovering, string> = {
  opeka: "Opeka",
  plocevina: "Pločevina",
};

export function tradeLabel(trade: TradeId) {
  return TRADE_LABEL[trade];
}

export function quoteFor(trade: TradeId, inputs: QuoteInputs): QuoteResult | null {
  switch (trade) {
    case "fasaderstvo":
      return quoteFacade(inputs.fasaderstvo);
    case "kovinarstvo":
      return quoteMetal(inputs.kovinarstvo);
    case "gipsarija":
      return quoteDrywall(inputs.gipsarija);
    case "strehe":
      return quoteRoof(inputs.strehe);
  }
}

/**
 * Fasada z materialom in delom (izolacija, omet, barvanje).
 * Primerjam.si, cenik 2026, €/m²:
 * stiropor 15 cm 50–56, 20 cm 56–65;
 * kamena volna 15 cm 71–80, 20 cm 81–94.
 */
function quoteFacade(input: FacadeInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  const [lowPer, highPer] =
    input.material === "stiropor"
      ? input.thickness === "15cm"
        ? [50, 56]
        : [56, 65]
      : input.thickness === "15cm"
        ? [71, 80]
        : [81, 94];

  return {
    ...priced(area, lowPer, highPer),
    summary: `${formatMeasure(area)} m², izolacija ${input.thickness.replace("cm", " cm")}, ${FACADE_MATERIAL[input.material]}`,
  };
}

function quoteMetal(input: MetalInput): QuoteResult | null {
  const quantity = parseMeasure(input.quantity);
  if (quantity === null) return null;

  // Ograja: Omisli.si 60–90 €/m (železo, prašno barvanje), Mojmojster 150–220 €/m (inox, višina 1 m, z montažo).
  // Nadstrešek: Mojmojster 180–220 €/m² (jeklo). Primerjam.si 200–380 €/m² za kovinski nadstrešek;
  // ločene cene za inox na m² ni, zato inox vzame ta širši objavljeni razpon.
  const [lowPer, highPer] =
    input.kind === "ograja"
      ? input.material === "inox"
        ? [150, 220]
        : [60, 90]
      : input.material === "inox"
        ? [200, 380]
        : [180, 220];
  const unit = input.kind === "ograja" ? "m" : "m²";

  return {
    ...priced(quantity, lowPer, highPer),
    summary: `${METAL_KIND[input.kind]}, ${formatMeasure(quantity)} ${unit}, ${METAL_MATERIAL[input.material]}`,
  };
}

function quoteDrywall(input: DrywallInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  // Mojmojster: strop 21–27 €/m², enoslojna stena 28–32 €/m².
  // Vlagoodporna obloga je v istem članku 26–29 €/m², zato je spodnja meja višja.
  const [lowPer, highPer] = input.kind === "navadne" ? [21, 32] : [26, 32];

  return {
    ...priced(area, lowPer, highPer),
    summary: `${formatMeasure(area)} m², ${DRYWALL_KIND[input.kind].toLowerCase()}`,
  };
}

function quoteRoof(input: RoofInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  // Prekrivanje z DDV, Strehar.si / emedia 2025: pločevina 50–75, opeka 60–90 €/m².
  // Leseno ostrešje z dobavo in montažo, Mojmojster: 38–46 €/m², prišteje se le ob menjavi.
  const [coverLow, coverHigh] = input.covering === "opeka" ? [60, 90] : [50, 75];
  const [frameLow, frameHigh] = input.frame === "da" ? [38, 46] : [0, 0];

  return {
    ...priced(area, coverLow + frameLow, coverHigh + frameHigh),
    summary: `${formatMeasure(area)} m², ${ROOF_COVERING[input.covering].toLowerCase()}, menjava ostrešja: ${input.frame === "da" ? "da" : "ne"}`,
  };
}

function priced(quantity: number, lowPer: number, highPer: number) {
  return {
    low: Math.round(quantity * lowPer),
    high: Math.round(quantity * highPer),
  };
}

function parseMeasure(value: string) {
  const parsed = Number(value.trim().replace(",", "."));
  if (!Number.isFinite(parsed) || parsed <= 0 || parsed > 100_000) return null;
  return parsed;
}

function formatMeasure(value: number) {
  return new Intl.NumberFormat("sl-SI", {
    maximumFractionDigits: 1,
    useGrouping: "always",
  }).format(value);
}

export function formatEuroAmount(value: number) {
  return new Intl.NumberFormat("sl-SI", {
    maximumFractionDigits: 0,
    useGrouping: "always",
  }).format(value);
}

export function priceLine(result: QuoteResult) {
  return `Okvirna cena ponudbe: od ${formatEuroAmount(result.low)} do ${formatEuroAmount(result.high)} €`;
}
