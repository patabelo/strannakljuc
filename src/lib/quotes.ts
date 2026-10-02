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

/** m² × osnovna cena (po debelini) + dodatek za material (na m²). */
function quoteFacade(input: FacadeInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  const base = input.thickness === "15cm" ? 48 : 58;
  const materialAddon = input.material === "stiropor" ? 14 : 36;
  const mid = area * base + area * materialAddon;

  return {
    ...spread(mid),
    summary: `${formatMeasure(area)} m², izolacija ${input.thickness.replace("cm", " cm")}, ${FACADE_MATERIAL[input.material]}`,
  };
}

function quoteMetal(input: MetalInput): QuoteResult | null {
  const quantity = parseMeasure(input.quantity);
  if (quantity === null) return null;

  const perUnit =
    input.kind === "ograja"
      ? input.material === "inox"
        ? 220
        : 120
      : input.material === "inox"
        ? 380
        : 240;
  const unit = input.kind === "ograja" ? "m" : "m²";

  return {
    ...spread(quantity * perUnit),
    summary: `${METAL_KIND[input.kind]}, ${formatMeasure(quantity)} ${unit}, ${METAL_MATERIAL[input.material]}`,
  };
}

function quoteDrywall(input: DrywallInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  const perM2 = input.kind === "navadne" ? 36 : 48;

  return {
    ...spread(area * perM2),
    summary: `${formatMeasure(area)} m², ${DRYWALL_KIND[input.kind].toLowerCase()}`,
  };
}

function quoteRoof(input: RoofInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  const covering = input.covering === "opeka" ? 95 : 70;
  const frame = input.frame === "da" ? 55 : 0;

  return {
    ...spread(area * (covering + frame)),
    summary: `${formatMeasure(area)} m², ${ROOF_COVERING[input.covering].toLowerCase()}, menjava ostrešja: ${input.frame === "da" ? "da" : "ne"}`,
  };
}

function spread(mid: number) {
  return {
    low: Math.round(mid * 0.9),
    high: Math.round(mid * 1.16),
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
