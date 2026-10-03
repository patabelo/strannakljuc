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

export interface QuoteLine {
  label: string;
  low: number;
  high: number;
}

export interface QuoteResult {
  low: number;
  high: number;
  summary: string;
  lines: QuoteLine[];
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

export interface UnitPrices {
  facade: {
    stiropor15Material: number;
    stiropor15Labor: number;
    stiropor20Material: number;
    stiropor20Labor: number;
    volna15Material: number;
    volna15Labor: number;
    volna20Material: number;
    volna20Labor: number;
    scaffold: number;
    protection: number;
    waste: number;
  };
  metal: {
    fencePowderMaterial: number;
    fencePowderLabor: number;
    fenceInoxMaterial: number;
    fenceInoxLabor: number;
    canopyPowderMaterial: number;
    canopyPowderLabor: number;
    canopyInoxMaterial: number;
    canopyInoxLabor: number;
    foundations: number;
  };
  drywall: {
    plainMaterial: number;
    plainLabor: number;
    wetMaterial: number;
    wetLabor: number;
  };
  roof: {
    removal: number;
    battens: number;
    tileMaterial: number;
    tileLabor: number;
    sheetMaterial: number;
    sheetLabor: number;
    frame: number;
  };
}

/** Starting prices are midpoints of published Slovenian ranges. The owner replaces them. */
export const DEFAULT_UNIT_PRICES: UnitPrices = {
  facade: {
    stiropor15Material: 23,
    stiropor15Labor: 31,
    stiropor20Material: 26,
    stiropor20Labor: 35,
    volna15Material: 32,
    volna15Labor: 44,
    volna20Material: 38,
    volna20Labor: 50,
    scaffold: 7,
    protection: 2,
    waste: 150,
  },
  metal: {
    fencePowderMaterial: 45,
    fencePowderLabor: 30,
    fenceInoxMaterial: 111,
    fenceInoxLabor: 74,
    canopyPowderMaterial: 120,
    canopyPowderLabor: 80,
    canopyInoxMaterial: 174,
    canopyInoxLabor: 116,
    foundations: 300,
  },
  drywall: {
    plainMaterial: 10,
    plainLabor: 17,
    wetMaterial: 13,
    wetLabor: 16,
  },
  roof: {
    removal: 7,
    battens: 8,
    tileMaterial: 21,
    tileLabor: 40,
    sheetMaterial: 19,
    sheetLabor: 29,
    frame: 42,
  },
};

export function tradeLabel(trade: TradeId) {
  return TRADE_LABEL[trade];
}

export function quoteFor(
  trade: TradeId,
  inputs: QuoteInputs,
  prices: UnitPrices = DEFAULT_UNIT_PRICES,
): QuoteResult | null {
  switch (trade) {
    case "fasaderstvo":
      return quoteFacade(inputs.fasaderstvo, prices);
    case "kovinarstvo":
      return quoteMetal(inputs.kovinarstvo, prices);
    case "gipsarija":
      return quoteDrywall(inputs.gipsarija, prices);
    case "strehe":
      return quoteRoof(inputs.strehe, prices);
  }
}

function quoteFacade(input: FacadeInput, prices: UnitPrices): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;
  const facade = prices.facade;
  const [material, labor] =
    input.material === "stiropor"
      ? input.thickness === "15cm"
        ? [facade.stiropor15Material, facade.stiropor15Labor]
        : [facade.stiropor20Material, facade.stiropor20Labor]
      : input.thickness === "15cm"
        ? [facade.volna15Material, facade.volna15Labor]
        : [facade.volna20Material, facade.volna20Labor];

  return finish(
    `${formatMeasure(area)} m², izolacija ${input.thickness.replace("cm", " cm")}, ${FACADE_MATERIAL[input.material]}`,
    [
      rate(area, "Material: izolacija, lepilo, mrežica, zaključni sloj", material),
      rate(area, "Delo: vgradnja, omet in barvanje", labor),
      rate(area, "Gradbeni oder, postavitev in snemanje", facade.scaffold),
      rate(area, "Zaščita oken in vrat", facade.protection),
      fixedAmount("Odvoz odpadkov", facade.waste),
    ],
  );
}

function quoteMetal(input: MetalInput, prices: UnitPrices): QuoteResult | null {
  const quantity = parseMeasure(input.quantity);
  if (quantity === null) return null;

  const metal = prices.metal;
  const unit = input.kind === "ograja" ? "m" : "m²";
  const [material, labor] =
    input.kind === "ograja"
      ? input.material === "inox"
        ? [metal.fenceInoxMaterial, metal.fenceInoxLabor]
        : [metal.fencePowderMaterial, metal.fencePowderLabor]
      : input.material === "inox"
        ? [metal.canopyInoxMaterial, metal.canopyInoxLabor]
        : [metal.canopyPowderMaterial, metal.canopyPowderLabor];

  const lines = [
    rate(quantity, "Material", material),
    rate(quantity, "Delo: izdelava in montaža", labor),
  ];
  if (input.kind === "nadstresek") lines.push(fixedAmount("Temelji stebrov", metal.foundations));

  return finish(
    `${METAL_KIND[input.kind]}, ${formatMeasure(quantity)} ${unit}, ${METAL_MATERIAL[input.material]}`,
    lines,
  );
}

function quoteDrywall(input: DrywallInput, prices: UnitPrices): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;
  const drywall = prices.drywall;
  const [material, labor] =
    input.kind === "navadne"
      ? [drywall.plainMaterial, drywall.plainLabor]
      : [drywall.wetMaterial, drywall.wetLabor];

  return finish(`${formatMeasure(area)} m², ${DRYWALL_KIND[input.kind].toLowerCase()}`, [
    rate(area, "Material: plošče, profili, vijaki in fugirna masa", material),
    rate(area, "Delo: montaža, kitanje in bandažiranje", labor),
  ]);
}

function quoteRoof(input: RoofInput, prices: UnitPrices): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;
  const roof = prices.roof;
  const [material, labor] =
    input.covering === "opeka"
      ? [roof.tileMaterial, roof.tileLabor]
      : [roof.sheetMaterial, roof.sheetLabor];

  const lines = [
    rate(area, "Demontaža stare kritine in odvoz", roof.removal),
    rate(area, "Letve, kontraletve in sekundarna kritina", roof.battens),
    rate(area, `Material: ${ROOF_COVERING[input.covering].toLowerCase()}`, material),
    rate(area, "Delo: polaganje, obrobe in žlebovi", labor),
  ];
  if (input.frame === "da") lines.push(rate(area, "Ostrešje: les, izdelava in montaža", roof.frame));

  return finish(
    `${formatMeasure(area)} m², ${ROOF_COVERING[input.covering].toLowerCase()}, menjava ostrešja: ${input.frame === "da" ? "da" : "ne"}`,
    lines,
  );
}

function rate(quantity: number, label: string, unitPrice: number): QuoteLine {
  const amount = Math.round(quantity * unitPrice);
  return { label, low: amount, high: amount };
}

function fixedAmount(label: string, amount: number): QuoteLine {
  const value = Math.round(amount);
  return { label, low: value, high: value };
}

function finish(summary: string, lines: QuoteLine[]): QuoteResult {
  return {
    low: lines.reduce((sum, line) => sum + line.low, 0),
    high: lines.reduce((sum, line) => sum + line.high, 0),
    summary,
    lines,
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
  if (result.low === result.high) return `Okvirna cena: ${formatEuroAmount(result.low)} €`;
  return `Okvirna cena ponudbe: od ${formatEuroAmount(result.low)} do ${formatEuroAmount(result.high)} €`;
}

export function lineAmount(line: QuoteLine) {
  if (line.low === line.high) return `${formatEuroAmount(line.low)} €`;
  return `${formatEuroAmount(line.low)}–${formatEuroAmount(line.high)} €`;
}
