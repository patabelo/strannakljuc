import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ClipboardCheck, Home, Layers3, Shovel, TreeDeciduous, Truck } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Gradbeništvo Krajnc — primer strani za gradbeno podjetje",
  description:
    "Primer zanesljive spletne strani za gradbeno podjetje — novogradnje, adaptacije in zemeljska dela. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/gradbenistvo-krajnc" },
  openGraph: {
    title: "Primer: Gradbeništvo Krajnc",
    description: "Stran za gradbeno podjetje — primer izdelave pri Stran na ključ.",
  },
};

const SERVICES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <Home className="size-5" />,
    title: "Novogradnje na ključ",
    text: "Gradnja hiš in poslovnih objektov od temeljev do strehe.",
  },
  {
    icon: <Layers3 className="size-5" />,
    title: "Adaptacije in prenove",
    text: "Posodobitev obstoječih objektov brez odvečnega stresa.",
  },
  {
    icon: <Shovel className="size-5" />,
    title: "Zemeljska in betonska dela",
    text: "Izkopi, temelji in betoniranje z lastno mehanizacijo.",
  },
  {
    icon: <Truck className="size-5" />,
    title: "Ostrešja in krovska dela",
    text: "Postavitev ostrešja in kritine za novogradnje in prenove.",
  },
  {
    icon: <TreeDeciduous className="size-5" />,
    title: "Zunanja ureditev",
    text: "Dovozi, tlakovanje in ureditev okolice po zaključku gradnje.",
  },
  {
    icon: <ClipboardCheck className="size-5" />,
    title: "Gradbeni nadzor",
    text: "Spremljanje kakovosti in rokov skozi celoten potek gradnje.",
  },
];

export default function GradbenistvoKrajncPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Gradbeništvo Krajnc", path: "/primeri/gradbenistvo-krajnc" },
        ]}
      />
      <DemoBanner name="Gradbeništvo Krajnc" />

      <div className="min-h-svh bg-[#161616] font-sans text-[#f2f2f0]">
        <header className="border-b border-[#f5c400]/25 bg-[#161616]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <span className="text-lg font-black tracking-wide uppercase">
              Gradbeništvo <span className="text-[#f5c400]">Krajnc</span>
            </span>
            <a
              href="tel:+38651888999"
              className="rounded-sm bg-[#f5c400] px-4 py-2 text-sm font-bold text-[#161616] uppercase"
            >
              051 888 999
            </a>
          </div>
        </header>

        <main>
          <section
            aria-hidden
            className="h-2 w-full bg-[repeating-linear-gradient(-45deg,#f5c400_0,#f5c400_16px,#161616_16px,#161616_32px)]"
          />

          <section className="bg-[#1f1f1f]">
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:grid-cols-2 sm:py-28">
              <div>
                <p className="text-sm font-bold tracking-[0.25em] text-[#f5c400] uppercase">
                  Gradbeno podjetje
                </p>
                <h1 className="mt-4 text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-5xl">
                  Vaša gradnja v zanesljivih rokah.
                </h1>
                <p className="mt-5 max-w-md text-lg text-[#b7b7b2]">
                  Novogradnje, adaptacije in zemeljska dela — celostna
                  gradbena podpora za hiše, kmetije in poslovne objekte.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#ponudba"
                    className="inline-flex h-12 items-center justify-center rounded-sm bg-[#f5c400] px-6 text-sm font-bold tracking-wide text-[#161616] uppercase"
                  >
                    Brezplačna ponudba
                  </a>
                  <a
                    href="#storitve"
                    className="inline-flex h-12 items-center justify-center rounded-sm border border-[#4a4a46] px-6 text-sm font-bold tracking-wide text-[#e6e6e0] uppercase"
                  >
                    Storitve
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square rounded-sm bg-[#3a3a36]" />
                <div className="aspect-square rounded-sm bg-[#f5c400]" />
                <div className="aspect-square rounded-sm bg-[#2a2a27]" />
                <div className="aspect-square rounded-sm bg-[#2a2a27]" />
                <div className="aspect-square rounded-sm bg-[#3a3a36]" />
                <div className="aspect-square rounded-sm bg-[#f5c400]" />
              </div>
            </div>
          </section>

          <section className="border-y border-[#2a2a27] bg-[#161616]">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
              <Stat value="25+" label="zaključenih projektov" />
              <Stat value="100%" label="lastna mehanizacija" />
              <Stat value="Fix" label="cena pred začetkom del" />
            </div>
          </section>

          <section id="storitve" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-3xl font-black tracking-tight uppercase">
              Storitve
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <div key={service.title} className="rounded-sm border border-[#2a2a27] bg-[#1f1f1f] p-6">
                  <span className="flex size-10 items-center justify-center rounded-sm bg-[#f5c400]/15 text-[#f5c400]">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-bold">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-[#b7b7b2]">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="ponudba"
            className="border-t border-[#2a2a27] bg-[#f5c400] px-4 py-20 text-center text-[#161616]"
          >
            <h2 className="text-3xl font-black tracking-tight uppercase">
              Zahtevajte brezplačno ponudbo
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#161616]/75">
              Povejte nam za kakšen projekt gre — pripravimo fiksno ponudbo
              še pred začetkom del.
            </p>
            <a
              href="tel:+38651888999"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-[#161616] px-8 text-sm font-bold tracking-wide text-[#f5c400] uppercase"
            >
              Pokličite 051 888 999
            </a>
            <p className="mt-10 text-xs text-[#161616]/60">
              Primer izdelave ·{" "}
              <Link href="/" className="underline">
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
      <p className="text-3xl font-black text-[#f5c400]">{value}</p>
      <p className="mt-1 text-sm text-[#b7b7b2]">{label}</p>
    </div>
  );
}
