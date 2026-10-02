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
 * Skupna cena fasadnega sistema je Primerjam.si 2026 (material in delo):
 * stiropor 15 cm 50–56, 20 cm 56–65; kamena volna 15 cm 71–80, 20 cm 81–94 €/m².
 * Razdelitev material:delo je 30:40, kot v primeru na fasada.si, da je delo vidna postavka.
 * Posebej so prišteti oder 5–8 €/m², zaščita odprtin 1–2 €/m² (fasaderji.si 2026)
 * in odvoz odpadkov 100–200 € na objekt.
 */
function quoteFacade(input: FacadeInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  const [systemLow, systemHigh] =
    input.material === "stiropor"
      ? input.thickness === "15cm"
        ? [50, 56]
        : [56, 65]
      : input.thickness === "15cm"
        ? [71, 80]
        : [81, 94];
  const [materialLow, laborLow, materialHigh, laborHigh] = splitShare(systemLow, systemHigh, 30 / 70);

  return finish(
    `${formatMeasure(area)} m², izolacija ${input.thickness.replace("cm", " cm")}, ${FACADE_MATERIAL[input.material]}`,
    [
      perM(area, "Material: izolacija, lepilo, mrežica, zaključni sloj", materialLow, materialHigh),
      perM(area, "Delo: vgradnja, omet in barvanje", laborLow, laborHigh),
      perM(area, "Gradbeni oder, postavitev in snemanje", 5, 8),
      perM(area, "Zaščita oken in vrat", 1, 2),
      fixed("Odvoz odpadkov", 100, 200),
    ],
  );
}

function quoteMetal(input: MetalInput): QuoteResult | null {
  const quantity = parseMeasure(input.quantity);
  if (quantity === null) return null;

  // Skupaj ostane objavljeni razpon. Razdeljen je na material in delo, da sta obe postavki vidni.
  // Ograja: Omisli.si 60–90 €/m (prašno barvano železo), Mojmojster 150–220 €/m (inox z montažo).
  // Nadstrešek: Mojmojster 180–220 €/m² (jeklo), Primerjam.si 200–380 €/m² (kovinski, tudi višji razred).
  // Temelji nadstreška: Mojmojster, okoli 300 € na objekt.
  const unit = input.kind === "ograja" ? "m" : "m²";
  const [totalLow, totalHigh] =
    input.kind === "ograja"
      ? input.material === "inox"
        ? [150, 220]
        : [60, 90]
      : input.material === "inox"
        ? [200, 380]
        : [180, 220];
  const [materialLow, laborLow, materialHigh, laborHigh] = splitShare(totalLow, totalHigh, 0.6);

  const lines =
    input.kind === "ograja"
      ? [
          perM(quantity, "Material: profili, polnilo in zaščita", materialLow, materialHigh),
          perM(quantity, "Delo: izdelava, varjenje in montaža", laborLow, laborHigh),
        ]
      : [
          perM(quantity, "Material: konstrukcija, zaščita in kritina", materialLow, materialHigh),
          perM(quantity, "Delo: izdelava in montaža", laborLow, laborHigh),
          fixed("Temelji stebrov", 300, 300),
        ];

  return finish(
    `${METAL_KIND[input.kind]}, ${formatMeasure(quantity)} ${unit}, ${METAL_MATERIAL[input.material]}`,
    lines,
  );
}

function quoteDrywall(input: DrywallInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  // Skupaj je Mojmojster: navadne 21–32 €/m² (strop do enoslojne stene), vlagoodporne 26–32 €/m².
  // Material je plošča, profili in fugiranje; ostanek je delo, da je vsota enak objavljeni razpon.
  const [materialLow, materialHigh, laborLow, laborHigh] =
    input.kind === "navadne" ? [8, 12, 13, 20] : [11, 14, 15, 18];

  return finish(`${formatMeasure(area)} m², ${DRYWALL_KIND[input.kind].toLowerCase()}`, [
    perM(area, "Material: plošče, profili, vijaki in fugirna masa", materialLow, materialHigh),
    perM(area, "Delo: montaža, kitanje in bandažiranje", laborLow, laborHigh),
  ]);
}

function quoteRoof(input: RoofInput): QuoteResult | null {
  const area = parseMeasure(input.area);
  if (area === null) return null;

  // Prekrivanje z DDV, Strehar.si / emedia 2025: pločevina 50–75, opeka 60–90 €/m².
  // Znotraj tega so demontaža (Strehar, od 6 €/m²), letve in folija (Strehar, od 5,50 €/m²),
  // material kritine (Primerjam: pločevina 13–25, opeka 11–31 €/m²) in delo kot ostanek.
  // Ostrešje, Mojmojster 38–46 €/m², se prišteje samo ob menjavi.
  const removal: [number, number] = [6, 8];
  const battens: [number, number] = [6, 9];
  const material: [number, number] = input.covering === "opeka" ? [11, 31] : [13, 25];
  const cover: [number, number] = input.covering === "opeka" ? [60, 90] : [50, 75];
  const labor: [number, number] = [
    cover[0] - removal[0] - battens[0] - material[0],
    cover[1] - removal[1] - battens[1] - material[1],
  ];

  const lines = [
    perM(area, "Demontaža stare kritine in odvoz", removal[0], removal[1]),
    perM(area, "Letve, kontraletve in sekundarna kritina", battens[0], battens[1]),
    perM(area, `Material: ${ROOF_COVERING[input.covering].toLowerCase()}`, material[0], material[1]),
    perM(area, "Delo: polaganje, obrobe in žlebovi", labor[0], labor[1]),
  ];

  if (input.frame === "da") {
    lines.push(perM(area, "Ostrešje: les, izdelava in montaža", 38, 46));
  }

  return finish(
    `${formatMeasure(area)} m², ${ROOF_COVERING[input.covering].toLowerCase()}, menjava ostrešja: ${input.frame === "da" ? "da" : "ne"}`,
    lines,
  );
}

function perM(quantity: number, label: string, lowPer: number, highPer: number): QuoteLine {
  return {
    label,
    low: Math.round(quantity * lowPer),
    high: Math.round(quantity * highPer),
  };
}

function fixed(label: string, low: number, high: number): QuoteLine {
  return { label, low, high };
}

function splitShare(totalLow: number, totalHigh: number, materialShare: number) {
  const materialLow = Math.round(totalLow * materialShare);
  const materialHigh = Math.round(totalHigh * materialShare);
  return [materialLow, totalLow - materialLow, materialHigh, totalHigh - materialHigh] as const;
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
  return `Okvirna cena ponudbe: od ${formatEuroAmount(result.low)} do ${formatEuroAmount(result.high)} €`;
}
