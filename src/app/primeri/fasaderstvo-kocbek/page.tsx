import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Droplets, Palette, Ruler, ShieldCheck, Sparkles, Thermometer } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Fasaderstvo Kocbek — primer strani za fasadersko obrt",
  description:
    "Primer čiste, arhitekturne spletne strani za fasadersko obrt — izolacija, ometi in sanacije. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/fasaderstvo-kocbek" },
  openGraph: {
    title: "Primer: Fasaderstvo Kocbek",
    description: "Arhitekturna stran za fasadersko obrt — primer izdelave pri Stran na ključ.",
  },
};

const SERVICES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <Thermometer className="size-5" />,
    title: "Toplotna izolacija fasad",
    text: "Kontaktne fasade s certificiranimi izolacijskimi sistemi.",
  },
  {
    icon: <Palette className="size-5" />,
    title: "Silikatne in silikonske fasade",
    text: "Obstojni zaključni ometi v barvi po vaši izbiri.",
  },
  {
    icon: <Droplets className="size-5" />,
    title: "Sanacija razpok in vlage",
    text: "Odpravimo vzrok težave, ne le posledice na površini.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Dekorativni ometi",
    text: "Fine strukture in barvni toni za poseben videz fasade.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Energetske sanacije",
    text: "Izvedba v skladu s pogoji za nepovratna sredstva Eko sklada.",
  },
  {
    icon: <Ruler className="size-5" />,
    title: "Postavitev odrov in zaščite",
    text: "Poskrbimo za varno in urejeno delovišče od začetka do konca.",
  },
];

export default function FasaderstvoKocbekPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Fasaderstvo Kocbek", path: "/primeri/fasaderstvo-kocbek" },
        ]}
      />
      <DemoBanner name="Fasaderstvo Kocbek" />

      <div className="min-h-svh bg-[#f1efe9] text-[#2b2b28]">
        <header className="border-b border-[#d8d3c6] bg-[#f1efe9]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
            <span className="text-lg font-semibold tracking-[0.1em] uppercase">
              Fasaderstvo <span className="text-[#c1683c]">Kocbek</span>
            </span>
            <a
              href="#ponudba"
              className="rounded-none border border-[#2b2b28] px-4 py-2 text-sm font-medium tracking-wide uppercase"
            >
              Povprašajte
            </a>
          </div>
        </header>

        <main>
          <section className="border-b border-[#d8d3c6]">
            <div className="mx-auto grid max-w-5xl items-stretch sm:grid-cols-2">
              <div className="flex flex-col justify-center px-4 py-20 sm:py-28">
                <p className="text-sm font-medium tracking-[0.3em] text-[#c1683c] uppercase">
                  Fasaderska dela · Slovenija
                </p>
                <h1 className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
                  Nova fasada, nova podoba doma.
                </h1>
                <p className="mt-5 max-w-md text-[#5a564d]">
                  Izvedba fasadnih oblog, toplotne izolacije in sanacij — čisto,
                  natančno in v dogovorjenem roku.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#ponudba"
                    className="inline-flex h-12 items-center justify-center bg-[#2b2b28] px-6 text-sm font-medium tracking-wide text-[#f1efe9] uppercase"
                  >
                    Brezplačen ogled
                  </a>
                  <a
                    href="#storitve"
                    className="inline-flex h-12 items-center justify-center border border-[#2b2b28] px-6 text-sm font-medium tracking-wide uppercase"
                  >
                    Storitve
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2">
                <div className="bg-[#c1683c]" />
                <div className="bg-[#8a8577]" />
                <div className="bg-[#d8d3c6]" />
                <div className="bg-[#2b2b28]" />
              </div>
            </div>
          </section>

          <section className="border-b border-[#d8d3c6] bg-white">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
              <Info title="Energetska izkaznica" text="Vključena v ponudbo za sanacije" />
              <Info title="Garancija 10 let" text="Na izvedena fasaderska dela" />
              <Info title="Delo po vsej Sloveniji" text="Lastna ekipa in mehanizacija" />
            </div>
          </section>

          <section id="storitve" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-3xl font-medium tracking-tight">Storitve</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <div key={service.title} className="border border-[#d8d3c6] bg-white p-6">
                  <span className="flex size-10 items-center justify-center bg-[#c1683c]/10 text-[#c1683c]">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-medium">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-[#5a564d]">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="ponudba"
            className="border-t border-[#d8d3c6] bg-[#2b2b28] px-4 py-20 text-center text-[#f1efe9]"
          >
            <h2 className="text-3xl font-medium tracking-tight">
              Povprašajte za brezplačno ponudbo
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#c9c4b6]">
              Pridemo na ogled, izmerimo fasado in pripravimo pisno ponudbo
              brez obveznosti.
            </p>
            <a
              href="tel:+38640555666"
              className="mt-8 inline-flex h-12 items-center justify-center bg-[#c1683c] px-8 text-sm font-medium tracking-wide text-[#2b2b28] uppercase"
            >
              Pokličite 040 555 666
            </a>
            <p className="mt-10 text-xs text-[#8a8577]">
              Primer izdelave ·{" "}
              <Link href="/" className="text-[#c1683c] underline">
                strannakljuc.si
              </Link>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-center">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-[#5a564d]">{text}</p>
    </div>
  );
}
