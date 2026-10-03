import type { ScanResponse, ScannedInvoice } from "@/lib/invoices";

const NOT_AN_INVOICE =
  "Na fotografiji ni računa. Posnemite celoten račun, da so vidni izdajatelj, znesek ali IBAN. Podatkov ne izmišljujemo.";

const MONEY = String.raw`\d{1,3}(?:\.\d{3})+,\d{2}|\d+,\d{2}|\d+\.\d{2}`;

export function parseInvoiceText(raw: string): ScanResponse {
  const text = raw
    .replace(/\u00a0/g, " ")
    .replace(/\(\s*(gmail|outlook|yahoo|hotmail|siol)\b/gi, "@$1")
    .replace(/\bSl(?=\d{8}\b)/g, "SI")
    .replace(/\bS1(?=\d{8}\b)/g, "SI");
  const flat = text.replace(/[ \t]+/g, " ");
  const compact = flat.replace(/\s/g, "");
  const lines = text
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const iban = formatIban(compact);
  const idZaDdv = findVatId(compact, iban);
  const davcnaStevilka = findTaxNumber(flat, idZaDdv);
  const zoi = findMarked(flat, /zoi/i, /[0-9a-f]{32}/i);
  const eor = findEor(flat);
  const sklic = findSklic(flat);
  const stevilkaRacuna = findInvoiceNumber(flat);
  const datumIzdaje = findDate(flat);
  const osnova =
    moneyAfter(flat, /osnova(?:\s*za\s*ddv)?/i) ||
    moneyAfter(flat, /vrednost\s*brez\s*ddv|brez\s*ddv/i);
  const ddv = findVatAmount(flat);
  const labeledTotal = moneyAfter(
    flat,
    /za\s*pla[čc]ilo|skupaj|skupni\s*znesek|znesek\s*z\s*ddv|total/i,
  );
  const znesek = labeledTotal || lastMoney(flat);
  const izdajatelj = findIssuer(lines);
  const hasInvoiceWord = /ra[čc]un|faktura|invoice|blagajn|ponudba|predra[čc]un/i.test(flat);

  const strong = [iban, idZaDdv, davcnaStevilka, zoi, eor, sklic, stevilkaRacuna].filter(Boolean);
  const looksLikeInvoice = (hasInvoiceWord && (Boolean(znesek) || strong.length > 0)) || strong.length >= 2;

  if (!looksLikeInvoice || (!znesek && !iban && !stevilkaRacuna)) {
    return { ok: false, error: NOT_AN_INVOICE };
  }

  const invoice: ScannedInvoice = {
    izdajatelj,
    naslov: findAddress(lines),
    telefon: findPhone(flat),
    email: findEmail(flat),
    kupec: findCustomer(lines, izdajatelj),
    davcnaStevilka,
    idZaDdv,
    stevilkaRacuna,
    datumIzdaje,
    osnova,
    ddv,
    znesek,
    iban,
    sklic,
    eor,
    zoi,
  };

  return { ok: true, invoice };
}

function formatIban(compact: string) {
  const match = compact.match(/SI\d{17}/i);
  if (!match) return "";
  return match[0]
    .toUpperCase()
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function findVatId(compact: string, iban: string) {
  const withoutIban = iban ? compact.replace(iban.replace(/\s/g, ""), "") : compact;
  const match = withoutIban.match(/SI\d{8}(?!\d)/i);
  return match ? match[0].toUpperCase() : "";
}

function findTaxNumber(flat: string, vatId: string) {
  const labeled = flat.match(/dav[čc]n[ae]\s*[šs]tevilk[ao][:\s]*(\d{8})/i);
  if (labeled) return labeled[1];
  return vatId.startsWith("SI") ? vatId.slice(2) : "";
}

function findMarked(flat: string, label: RegExp, value: RegExp) {
  const match = new RegExp(`${label.source}[:\\s]*([0-9a-f-]{32,40})`, "i").exec(flat);
  if (!match) return "";
  const hex = match[1].replace(/-/g, "").toLowerCase();
  return value.test(hex) ? hex : "";
}

function findEor(flat: string) {
  const labeled = flat.match(
    /eor[:\s]*([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i,
  );
  if (labeled) return labeled[1].toLowerCase();
  return "";
}

function findSklic(flat: string) {
  const labeled = flat.match(
    /sklic(?:\s*na\s*[šs]tevilko)?\s*[:.]?\s*((?:SI|RF)?\s*\d{2}(?:[\s-]*\d{2,}){1,4})/i,
  );
  if (!labeled) return "";
  return labeled[1].replace(/\s+/g, " ").trim().toUpperCase();
}

function findInvoiceNumber(flat: string) {
  const match = flat.match(
    /(?:ponudba|predra[čc]un|ra[čc]un)\s*(?:[šs]t\.?|[šs]tevilka)?\s*[:.]?\s*([A-Za-z0-9][A-Za-z0-9./-]{1,30})/i,
  );
  if (!match) return "";
  const value = match[1].replace(/[.,;:]$/, "");
  if (!/\d/.test(value)) return "";
  if (/^(poravnate|valute|za|od|in|na|do)$/i.test(value)) return "";
  return value;
}

function findDate(flat: string) {
  const issued = flat.match(/(?:datum\s*izdaje|\bdne)\s*[:.]?\s*(\d{1,2}\.\s*\d{1,2}\.\s*\d{4})/i);
  if (issued) return issued[1].replace(/\s/g, "");
  const withoutExpiry = flat.replace(/velja\s*do\s*[:.]?\s*\d{1,2}\.\s*\d{1,2}\.\s*\d{4}/gi, "");
  const any = withoutExpiry.match(/(\d{1,2}\.\s*\d{1,2}\.\s*\d{4})/);
  return any ? any[1].replace(/\s/g, "") : "";
}

function findVatAmount(flat: string) {
  const pattern =
    /(?<![\p{L}])ddv\s+\d{1,2}(?:[,.]\d+)?\s*%?\s*:?\s*(\d{1,3}(?:\.\d{3})*,\d{2}|\d+,\d{2}|\d+\.\d{2})/giu;
  let found = "";
  for (const match of flat.matchAll(pattern)) {
    const start = match.index ?? 0;
    const before = flat.slice(Math.max(0, start - 16), start);
    if (/za\s*$|brez\s*$|id\s*$/i.test(before)) continue;
    found = normalizeMoney(match[1]);
  }
  return found;
}

function findPhone(flat: string) {
  const match = flat.match(/(?:telefon|tel\.?|gsm)\s*[:.]?\s*(\+?\d[\d\s/+()-]{6,18}\d)/i);
  return match ? match[1].replace(/\s+/g, "").trim() : "";
}

function findEmail(flat: string) {
  const match = flat.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0].toLowerCase() : "";
}

function findAddress(lines: string[]) {
  const line = lines.find(
    (item) =>
      /\d+[a-z]?\s*,\s*\d{4}\s+\p{L}/iu.test(item) &&
      !/ponudba|ra[čc]un|iban|trr|sklic|ddv/i.test(item),
  );
  return line ? clip(line) : "";
}

function findCustomer(lines: string[], issuer: string) {
  for (const line of lines) {
    const head = line.split(/\s+(?=dokument|naro[čc]ilnica|na[čc]in\s+pla)/i)[0]?.trim() ?? "";
    if (isPerson(head, issuer)) return clip(head);
  }
  return "";
}

function isPerson(line: string, issuer: string) {
  const issuerKey = issuer.slice(0, 12).toLowerCase();
  if (!line || (issuerKey && line.toLowerCase().includes(issuerKey))) return false;
  if (/\d|@|telefon|e-?mail|ponudba|ra[čc]un|ddv|iban|trr|sklic|s\.?\s*p\.?/i.test(line)) return false;
  const words = line.split(/\s+/).filter((word) => word.toLowerCase() !== "in");
  if (words.filter((word) => word.replace(/[.]/g, "").length >= 4).length < 2) return false;
  return /^[\p{Lu}][\p{L}'’.-]+(?:\s+(?:in\s+)?[\p{Lu}][\p{L}'’.-]+){1,8}$/u.test(line);
}

function moneyAfter(flat: string, label: RegExp) {
  const match = new RegExp(
    `(?:${label.source})(?:[^\\d]{0,12}\\d{1,2}(?:[,.]\\d+)?\\s*(?:%|pct))?[^\\d]{0,16}(${MONEY})`,
    "i",
  ).exec(flat);
  return match ? normalizeMoney(match[1]) : "";
}

function normalizeMoney(value: string) {
  if (/^\d+\.\d{2}$/.test(value)) return value.replace(".", ",");
  return value;
}

function lastMoney(flat: string) {
  const all = flat.match(new RegExp(MONEY, "g"));
  return all?.at(-1) ?? "";
}

function findIssuer(lines: string[]) {
  for (let index = 0; index < lines.length; index += 1) {
    if (!/izdajatelj/i.test(lines[index])) continue;
    const sameLine = lines[index].split(/izdajatelj[:\s]*/i)[1]?.trim();
    if (sameLine && sameLine.length > 2) return clip(sameLine);
    if (lines[index + 1]) return clip(lines[index + 1]);
  }

  const company = lines.find((line) =>
    /(?:d\.?\s*o\.?\s*o\.?|s\.?\s*p\.?|d\.?\s*d\.?)/i.test(line),
  );
  if (!company) return "";
  const trimmed = company.match(/^(.+?(?:d\.?\s*o\.?\s*o\.?|s\.?\s*p\.?|d\.?\s*d\.?))/i);
  return clip(trimmed?.[1] ?? company);
}

function clip(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, 80);
}
