"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Check } from "lucide-react";

import {
  getSettingsServerSnapshot,
  getSettingsSnapshot,
  subscribeSettings,
} from "@/lib/business-settings";
import {
  INITIAL_INPUTS,
  formatEuroAmount,
  lineAmount,
  priceLine,
  quoteFor,
  tradeLabel,
  type DrywallKind,
  type FacadeMaterial,
  type InsulationThickness,
  type MetalKind,
  type MetalMaterial,
  type QuoteInputs,
  type RoofCovering,
  type TradeId,
  type YesNo,
} from "@/lib/quotes";

const TRADES: { id: TradeId; label: string; note: string }[] = [
  { id: "fasaderstvo", label: "Fasaderstvo", note: "Fasada z izolacijo" },
  { id: "kovinarstvo", label: "Kovinarstvo", note: "Ograje in nadstreški" },
  { id: "gipsarija", label: "Gipsarija", note: "Suhomontaža sten in stropov" },
  { id: "strehe", label: "Strehe", note: "Kritina in ostrešje" },
];

interface LeadForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  consent: boolean;
  company: string;
}

const EMPTY_LEAD: LeadForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  consent: false,
  company: "",
};

export function QuoteDesk() {
  const settings = useSyncExternalStore(subscribeSettings, getSettingsSnapshot, getSettingsServerSnapshot);
  const [trade, setTrade] = useState<TradeId>("fasaderstvo");
  const [inputs, setInputs] = useState<QuoteInputs>(INITIAL_INPUTS);
  const [lead, setLead] = useState<LeadForm>(EMPTY_LEAD);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const quote = useMemo(
    () => quoteFor(trade, inputs, settings.prices),
    [trade, inputs, settings.prices],
  );

  function patch<K extends TradeId>(id: K, next: Partial<QuoteInputs[K]>) {
    setInputs((current) => ({ ...current, [id]: { ...current[id], ...next } }));
    setStatus("idle");
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!quote) {
      setStatus("error");
      setError("Najprej vnesite mere, da se izračuna okvirna cena.");
      return;
    }
    if (!lead.firstName.trim() || !lead.lastName.trim() || !lead.phone.trim() || !lead.email.trim()) {
      setStatus("error");
      setError("Izpolnite ime, priimek, telefon in e-pošto.");
      return;
    }
    if (!lead.consent) {
      setStatus("error");
      setError("Potrdite, da vas lahko kontaktiramo glede ponudbe.");
      return;
    }

    setStatus("sending");
    setError(null);
    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: lead.firstName.trim(),
          lastName: lead.lastName.trim(),
          phone: lead.phone.trim(),
          email: lead.email.trim(),
          trade,
          tradeLabel: tradeLabel(trade),
          summary: [quote.summary, ...quote.lines.map((line) => `${line.label}: ${lineAmount(line)}`)].join(
            "\n",
          ),
          priceLow: quote.low,
          priceHigh: quote.high,
          priceLabel: priceLine(quote),
          notifyEmail: settings.notifyEmail,
          companyName: settings.companyName,
          consent: true,
          company: lead.company,
        }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setStatus("error");
        setError(result.error ?? "Povpraševanja ni bilo mogoče poslati.");
        return;
      }
      setStatus("sent");
      setLead(EMPTY_LEAD);
    } catch {
      setStatus("error");
      setError("Povpraševanja ni bilo mogoče poslati. Poskusite znova.");
    }
  }

  return (
    <div>
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-[#f2792c] uppercase">
        Kalkulator ponudbe
      </p>
      <h1 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] sm:text-5xl">
        Izračunajte si okvirno ceno.
      </h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Izberite dejavnost in vnesite mere, da takoj pridobite informativno
        ponudbo. Za natančen izračun nam pošljite neobvezujoče povpraševanje.
      </p>

      <div
        role="tablist"
        aria-label="Dejavnost"
        className="mt-8 grid grid-cols-2 gap-2 sm:flex"
      >
        {TRADES.map((item) => {
          const selected = item.id === trade;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              onClick={() => {
                setTrade(item.id);
                setStatus("idle");
                setError(null);
              }}
              className={`border px-4 py-3 text-left sm:shrink-0 ${
                selected
                  ? "border-[#f2792c] bg-[#f2792c] text-[#1a1008]"
                  : "border-white/15 bg-[#10151f] text-[#f6f1e8]"
              }`}
            >
              <span className="block text-sm font-medium">{item.label}</span>
              <span className={`mt-0.5 block text-xs ${selected ? "text-[#1a1008]/70" : "text-white/50"}`}>
                {item.note}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-start">
        <div
          role="tabpanel"
          id={`panel-${trade}`}
          aria-labelledby={`tab-${trade}`}
          className="border border-white/10 bg-[#10151f] p-5 sm:p-6"
        >
          {trade === "fasaderstvo" ? (
            <div className="grid gap-5">
              <NumberField
                label="Kvadratura (m²)"
                value={inputs.fasaderstvo.area}
                onChange={(area) => patch("fasaderstvo", { area })}
              />
              <SelectField
                label="Debelina izolacije"
                value={inputs.fasaderstvo.thickness}
                onChange={(thickness) =>
                  patch("fasaderstvo", { thickness: thickness as InsulationThickness })
                }
                options={[
                  { value: "15cm", label: "15 cm" },
                  { value: "20cm", label: "20 cm" },
                ]}
              />
              <ChoiceField
                label="Material"
                value={inputs.fasaderstvo.material}
                onChange={(material) =>
                  patch("fasaderstvo", { material: material as FacadeMaterial })
                }
                options={[
                  { value: "stiropor", label: "Stiropor" },
                  { value: "kamena-volna", label: "Kamena volna" },
                ]}
              />
            </div>
          ) : null}

          {trade === "kovinarstvo" ? (
            <div className="grid gap-5">
              <ChoiceField
                label="Vrsta"
                value={inputs.kovinarstvo.kind}
                onChange={(kind) => patch("kovinarstvo", { kind: kind as MetalKind })}
                options={[
                  { value: "ograja", label: "Ograja" },
                  { value: "nadstresek", label: "Nadstrešek" },
                ]}
              />
              <NumberField
                label={inputs.kovinarstvo.kind === "ograja" ? "Dolžina (m)" : "Kvadratura (m²)"}
                value={inputs.kovinarstvo.quantity}
                onChange={(quantity) => patch("kovinarstvo", { quantity })}
              />
              <ChoiceField
                label="Material"
                value={inputs.kovinarstvo.material}
                onChange={(material) =>
                  patch("kovinarstvo", { material: material as MetalMaterial })
                }
                options={[
                  { value: "inox", label: "Inox" },
                  { value: "prasno", label: "Prašno barvano" },
                ]}
              />
            </div>
          ) : null}

          {trade === "gipsarija" ? (
            <div className="grid gap-5">
              <NumberField
                label="Kvadratura sten ali stropa (m²)"
                value={inputs.gipsarija.area}
                onChange={(area) => patch("gipsarija", { area })}
              />
              <ChoiceField
                label="Vrsta plošč"
                value={inputs.gipsarija.kind}
                onChange={(kind) => patch("gipsarija", { kind: kind as DrywallKind })}
                options={[
                  { value: "navadne", label: "Navadne" },
                  { value: "vlagoodporne", label: "Vlagoodporne" },
                ]}
              />
            </div>
          ) : null}

          {trade === "strehe" ? (
            <div className="grid gap-5">
              <NumberField
                label="Kvadratura (m²)"
                value={inputs.strehe.area}
                onChange={(area) => patch("strehe", { area })}
              />
              <ChoiceField
                label="Vrsta kritine"
                value={inputs.strehe.covering}
                onChange={(covering) => patch("strehe", { covering: covering as RoofCovering })}
                options={[
                  { value: "opeka", label: "Opeka" },
                  { value: "plocevina", label: "Pločevina" },
                ]}
              />
              <ChoiceField
                label="Menjava ostrešja"
                value={inputs.strehe.frame}
                onChange={(frame) => patch("strehe", { frame: frame as YesNo })}
                options={[
                  { value: "da", label: "Da" },
                  { value: "ne", label: "Ne" },
                ]}
              />
            </div>
          ) : null}
        </div>

        <aside className="border border-[#f2792c]/40 bg-[#1a120c] p-5 sm:p-6 lg:sticky lg:top-6">
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[#f2792c] uppercase">
            {tradeLabel(trade)}
          </p>
          {quote ? (
            <>
              <p className="mt-3 text-sm text-white/60">{quote.summary}</p>
              <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {quote.lines.map((line) => (
                  <li key={line.label} className="flex items-start justify-between gap-3 py-2 text-sm">
                    <span>{line.label}</span>
                    <span className="shrink-0 text-white/70">{lineAmount(line)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-display text-[1.65rem] leading-tight tracking-[-0.03em]">
                <span className="text-[#ffe1c4]">Okvirna cena:</span>
                <span className="mt-1 block text-[#f2792c]">
                  {quote.low === quote.high
                    ? `${formatEuroAmount(quote.low)} €`
                    : `od ${formatEuroAmount(quote.low)} do ${formatEuroAmount(quote.high)} €`}
                </span>
              </p>
              <p className="mt-2 text-xs text-white/45">
                {settings.customized
                  ? `Cene so iz cenika${settings.companyName ? ` ${settings.companyName}` : ""}. Ni zavezujoča ponudba.`
                  : "Začetne cene so slovensko povprečje. Svoje vpišite v nastavitvah. Ni zavezujoča ponudba."}
              </p>
            </>
          ) : (
            <p className="mt-3 text-white/70">Vnesite mere, da se izpiše okvirna cena.</p>
          )}

          {status === "sent" ? (
            <p
              className="mt-6 border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-[#d9ffe8]"
              role="status"
            >
              <Check className="mr-2 inline size-4" />
              Hvala! Povpraševanje je poslano
              {settings.companyName ? ` podjetju ${settings.companyName}` : ""}. Odgovor sledi v kratkem.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-6 grid gap-3">
              <p className="text-sm font-medium">Potrdi in pošlji povpraševanje</p>
              <LeadInput
                label="Ime"
                value={lead.firstName}
                autoComplete="given-name"
                onChange={(firstName) => setLead({ ...lead, firstName })}
              />
              <LeadInput
                label="Priimek"
                value={lead.lastName}
                autoComplete="family-name"
                onChange={(lastName) => setLead({ ...lead, lastName })}
              />
              <LeadInput
                label="Telefon"
                value={lead.phone}
                type="tel"
                autoComplete="tel"
                onChange={(phone) => setLead({ ...lead, phone })}
              />
              <LeadInput
                label="Email"
                value={lead.email}
                type="email"
                autoComplete="email"
                onChange={(email) => setLead({ ...lead, email })}
              />
              <label className="flex items-start gap-2 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={lead.consent}
                  onChange={(event) => setLead({ ...lead, consent: event.target.checked })}
                  className="mt-1"
                />
                <span>Strinjam se, da me kontaktirate glede te ponudbe.</span>
              </label>
              <input
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                value={lead.company}
                onChange={(event) => setLead({ ...lead, company: event.target.value })}
                className="hidden"
              />
              {error ? (
                <p className="text-sm text-[#ffb4a8]" role="alert">
                  {error}
                </p>
              ) : null}
              <p className="text-xs text-gray-400">Pošiljanje povpraševanja je popolnoma neobvezujoče.</p>
              <button
                type="submit"
                disabled={status === "sending" || !quote}
                className="mt-1 bg-[#f2792c] px-4 py-2.5 text-sm font-medium text-[#1a1008] transition-colors hover:bg-[#ff9340] disabled:opacity-40"
              >
                {status === "sending" ? "Pošiljam…" : "Pošlji"}
              </button>
            </form>
          )}
        </aside>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">{label}</span>
      <input
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="npr. 85"
        className="mt-1.5 w-full border border-white/15 bg-[#0c111b] px-3 py-2.5 text-sm outline-none focus:border-[#f2792c]"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full border border-white/15 bg-[#0c111b] px-3 py-2.5 text-sm outline-none focus:border-[#f2792c]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ChoiceField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">
        {label}
      </legend>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.value)}
              className={`border px-3 py-2 text-sm ${
                selected
                  ? "border-[#f2792c] bg-[#f2792c]/15 text-[#ffe1c4]"
                  : "border-white/15 text-white/75"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function LeadInput({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={label}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border border-white/15 bg-[#0c111b] px-3 py-2.5 text-sm outline-none placeholder:text-white/35 focus:border-[#f2792c]"
      />
    </label>
  );
}
