import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Fence, Hammer, ShieldCheck, Truck, Wrench } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Kovinarstvo Meznarič — primer strani za kovinarsko obrt",
  description:
    "Primer robustne, industrijske spletne strani za kovinarsko obrt — varjenje, ograje in kovinske konstrukcije. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/kovinarstvo-meznaric" },
  openGraph: {
    title: "Primer: Kovinarstvo Meznarič",
    description: "Industrijska stran za kovinarsko obrt — primer izdelave pri Stran na ključ.",
    type: "website",
    locale: "sl_SI",
  },
};

const SERVICES = [
  { icon: <Flame className="size-5" />, name: "Varjenje in kovinske konstrukcije" },
  { icon: <Fence className="size-5" />, name: "Ograje, vrata in nadstreški" },
  { icon: <Hammer className="size-5" />, name: "Kovinska stopnišča in ograje" },
  { icon: <Wrench className="size-5" />, name: "Popravila kmetijske mehanizacije" },
  { icon: <ShieldCheck className="size-5" />, name: "Ključavničarska dela" },
  { icon: <Truck className="size-5" />, name: "Izdelava na terenu in montaža" },
];

export default function KovinarstvoMeznaricPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Kovinarstvo Meznarič", path: "/primeri/kovinarstvo-meznaric" },
        ]}
      />
      <DemoBanner name="Kovinarstvo Meznarič" />

      <div className="min-h-svh bg-zinc-950 font-sans text-zinc-100">
        <header className="border-b border-orange-500/20 bg-zinc-950">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <span className="text-lg font-black tracking-widest text-white uppercase">
              Kovinarstvo <span className="text-orange-500">Meznarič</span>
            </span>
            <a
              href="tel:+38631222333"
              className="rounded-sm bg-orange-500 px-4 py-2 text-sm font-bold tracking-wide text-zinc-950 uppercase"
            >
              031 222 333
            </a>
          </div>
        </header>

        <main>
          <section
            aria-hidden
            className="h-1.5 w-full bg-[repeating-linear-gradient(45deg,#f97316_0,#f97316_14px,#18181b_14px,#18181b_28px)]"
          />
          <section className="relative overflow-hidden bg-zinc-900">
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:grid-cols-2 sm:py-28">
              <div>
                <p className="text-sm font-bold tracking-[0.25em] text-orange-500 uppercase">
                  Kovinarska obrt · Pomurje
                </p>
                <h1 className="mt-4 text-4xl leading-[1.05] font-black tracking-tight text-white uppercase sm:text-5xl">
                  Kovina, ki zdrži desetletja.
                </h1>
                <p className="mt-5 max-w-md text-lg text-zinc-400">
                  Izdelava ograj, nadstreškov, vrat in kovinskih konstrukcij za
                  dom, kmetijo in podjetje. Varimo, režemo in montiramo —
                  natančno, zanesljivo in v dogovorjenem roku.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#povprasevanje"
                    className="inline-flex h-12 items-center justify-center rounded-sm bg-orange-500 px-6 text-sm font-bold tracking-wide text-zinc-950 uppercase"
                  >
                    Povprašajte za ponudbo
                  </a>
                  <a
                    href="#storitve"
                    className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-700 px-6 text-sm font-bold tracking-wide text-zinc-200 uppercase"
                  >
                    Naše storitve
                  </a>
                </div>
              </div>
              <div className="aspect-square rounded-sm border border-orange-500/30 bg-[repeating-linear-gradient(135deg,#27272a_0,#27272a_18px,#18181b_18px,#18181b_36px)] shadow-2xl" />
            </div>
          </section>

          <section className="border-y border-zinc-800 bg-zinc-950">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
              <Stat value="20+" label="let izkušenj v stroki" />
              <Stat value="100%" label="delo na terenu po dogovoru" />
              <Stat value="0 €" label="ogled in okvirna ponudba" />
            </div>
          </section>

          <section id="storitve" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">
              Storitve
            </h2>
            <p className="mt-2 max-w-xl text-zinc-400">
              Od manjših popravil do celotnih kovinskih konstrukcij — vse pod
              eno streho.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-4 rounded-sm border border-zinc-800 bg-zinc-900 p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-orange-500/15 text-orange-500">
                    {service.icon}
                  </span>
                  <span className="font-semibold text-zinc-100">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="povprasevanje"
            className="border-t border-zinc-800 bg-zinc-900 px-4 py-20 text-center"
          >
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">
              Povprašajte za ponudbo
            </h2>
            <p className="mx-auto mt-3 max-w-md text-zinc-400">
              Pošljite nam mere ali skico, pridemo na ogled in pripravimo
              okvirno ponudbo brez obveznosti.
            </p>
            <a
              href="tel:+38631222333"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-orange-500 px-8 text-sm font-bold tracking-wide text-zinc-950 uppercase"
            >
              Pokličite 031 222 333
            </a>
            <p className="mt-10 text-xs text-zinc-500">
              Primer izdelave ·{" "}
              <Link href="/" className="text-orange-500 underline">
                strannakljuc.si
              </Link>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-black text-orange-500">{value}</p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
