"use client";

import { useState, useSyncExternalStore } from "react";

import {
  getSettingsServerSnapshot,
  getSettingsSnapshot,
  saveSettings,
  subscribeSettings,
  type BusinessSettings,
} from "@/lib/business-settings";
import type { UnitPrices } from "@/lib/quotes";

const GROUPS: { title: string; group: keyof UnitPrices; rows: { key: string; label: string; unit: string }[] }[] = [
  {
    title: "Fasaderstvo",
    group: "facade",
    rows: [
      { key: "stiropor15Material", label: "Stiropor 15 cm, material", unit: "€/m²" },
      { key: "stiropor15Labor", label: "Stiropor 15 cm, delo", unit: "€/m²" },
      { key: "stiropor20Material", label: "Stiropor 20 cm, material", unit: "€/m²" },
      { key: "stiropor20Labor", label: "Stiropor 20 cm, delo", unit: "€/m²" },
      { key: "volna15Material", label: "Kamena volna 15 cm, material", unit: "€/m²" },
      { key: "volna15Labor", label: "Kamena volna 15 cm, delo", unit: "€/m²" },
      { key: "volna20Material", label: "Kamena volna 20 cm, material", unit: "€/m²" },
      { key: "volna20Labor", label: "Kamena volna 20 cm, delo", unit: "€/m²" },
      { key: "scaffold", label: "Gradbeni oder", unit: "€/m²" },
      { key: "protection", label: "Zaščita oken in vrat", unit: "€/m²" },
      { key: "waste", label: "Odvoz odpadkov", unit: "€ / objekt" },
    ],
  },
  {
    title: "Kovinarstvo",
    group: "metal",
    rows: [
      { key: "fencePowderMaterial", label: "Ograja, prašno barvano, material", unit: "€/m" },
      { key: "fencePowderLabor", label: "Ograja, prašno barvano, delo", unit: "€/m" },
      { key: "fenceInoxMaterial", label: "Ograja, inox, material", unit: "€/m" },
      { key: "fenceInoxLabor", label: "Ograja, inox, delo", unit: "€/m" },
      { key: "canopyPowderMaterial", label: "Nadstrešek, prašno barvano, material", unit: "€/m²" },
      { key: "canopyPowderLabor", label: "Nadstrešek, prašno barvano, delo", unit: "€/m²" },
      { key: "canopyInoxMaterial", label: "Nadstrešek, inox, material", unit: "€/m²" },
      { key: "canopyInoxLabor", label: "Nadstrešek, inox, delo", unit: "€/m²" },
      { key: "foundations", label: "Temelji nadstreška", unit: "€ / objekt" },
    ],
  },
  {
    title: "Gipsarija",
    group: "drywall",
    rows: [
      { key: "plainMaterial", label: "Navadne plošče, material", unit: "€/m²" },
      { key: "plainLabor", label: "Navadne plošče, delo", unit: "€/m²" },
      { key: "wetMaterial", label: "Vlagoodporne plošče, material", unit: "€/m²" },
      { key: "wetLabor", label: "Vlagoodporne plošče, delo", unit: "€/m²" },
    ],
  },
  {
    title: "Strehe",
    group: "roof",
    rows: [
      { key: "removal", label: "Demontaža in odvoz", unit: "€/m²" },
      { key: "battens", label: "Letve in folija", unit: "€/m²" },
      { key: "tileMaterial", label: "Opeka, material", unit: "€/m²" },
      { key: "tileLabor", label: "Opeka, delo", unit: "€/m²" },
      { key: "sheetMaterial", label: "Pločevina, material", unit: "€/m²" },
      { key: "sheetLabor", label: "Pločevina, delo", unit: "€/m²" },
      { key: "frame", label: "Ostrešje, material in delo", unit: "€/m²" },
    ],
  },
];

export function SettingsDesk() {
  const stored = useSyncExternalStore(subscribeSettings, getSettingsSnapshot, getSettingsServerSnapshot);
  const [override, setOverride] = useState<BusinessSettings | null>(null);
  const draft = override ?? stored;
  const [saved, setSaved] = useState(false);

  function updatePrice(group: keyof UnitPrices, key: string, value: string) {
    const parsed = Number(value.replace(",", "."));
    setOverride((current) => {
      const base = current ?? stored;
      return {
        ...base,
        prices: {
          ...base.prices,
          [group]: {
            ...base.prices[group],
            [key]: Number.isFinite(parsed) && parsed >= 0 ? parsed : 0,
          },
        },
      };
    });
    setSaved(false);
  }

  return (
    <div>
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-[#f2792c] uppercase">Nastavitve</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] sm:text-5xl">
        Vaš cenik.
      </h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Vpišite svoje cene. Kalkulator ponudbe jih uporabi namesto slovenskega povprečja. Stranka vpiše
        svoj e-poštni naslov; povpraševanje pride na patrick@strannakljuc.si.
      </p>

      <form
        className="mt-8 grid gap-8"
        onSubmit={(event) => {
          event.preventDefault();
          saveSettings(draft);
          setSaved(true);
        }}
      >
        <section className="grid gap-4 border border-white/10 bg-[#10151f] p-5 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">Ime podjetja</span>
            <input
              value={draft.companyName}
              onChange={(event) => setOverride({ ...draft, companyName: event.target.value })}
              className="mt-1.5 w-full border border-white/15 bg-[#0c111b] px-3 py-2.5 text-sm outline-none focus:border-[#f2792c]"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">Telefon</span>
            <input
              value={draft.phone}
              onChange={(event) => setOverride({ ...draft, phone: event.target.value })}
              className="mt-1.5 w-full border border-white/15 bg-[#0c111b] px-3 py-2.5 text-sm outline-none focus:border-[#f2792c]"
            />
          </label>
        </section>

        {GROUPS.map((group) => (
          <section key={group.group}>
            <h2 className="font-display text-2xl tracking-[-0.03em]">{group.title}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {group.rows.map((row) => (
                <label key={row.key} className="block border border-white/10 bg-[#10151f] px-3 py-3">
                  <span className="text-sm">{row.label}</span>
                  <span className="mt-1 flex items-center gap-2">
                    <input
                      inputMode="decimal"
                      value={String(draft.prices[group.group][row.key as keyof (typeof draft.prices)[typeof group.group]])}
                      onChange={(event) => updatePrice(group.group, row.key, event.target.value)}
                      className="w-full border border-white/15 bg-[#0c111b] px-3 py-2 text-sm outline-none focus:border-[#f2792c]"
                    />
                    <span className="shrink-0 text-xs text-white/45">{row.unit}</span>
                  </span>
                </label>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="bg-[#f2792c] px-4 py-2.5 text-sm font-medium text-[#1a1008]">
            Shrani cenik
          </button>
          {saved ? <p className="text-sm text-[#d9ffe8]">Cenik je shranjen v tem brskalniku.</p> : null}
        </div>
      </form>
    </div>
  );
}
