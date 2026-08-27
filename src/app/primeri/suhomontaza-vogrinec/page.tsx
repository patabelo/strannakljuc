import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { CheckCircle2, LayoutPanelTop, Layers, ShieldHalf, SquareStack, Volume2 } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Suhomontaža Vogrinec — primer strani za suhomontažna dela",
  description:
    "Primer tehnične, pregledne spletne strani za suhomontažna dela — predelne stene in spuščeni stropovi. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/suhomontaza-vogrinec" },
  openGraph: {
    title: "Primer: Suhomontaža Vogrinec",
    description: "Tehnična stran za suhomontažna dela — primer izdelave pri Stran na ključ.",
    type: "website",
    locale: "sl_SI",
  },
};

const SERVICES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <SquareStack className="size-5" />,
    title: "Predelne stene",
    text: "Postavitev predelnih sten iz mavčnih plošč za nov razpored prostora.",
  },
  {
    icon: <LayoutPanelTop className="size-5" />,
    title: "Spuščeni stropovi",
    text: "Ravni in stopničasti stropovi z vgrajeno razsvetljavo.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "Izolacija mansard",
    text: "Toplotna in zvočna izolacija podstrešnih prostorov.",
  },
  {
    icon: <ShieldHalf className="size-5" />,
    title: "Protipožarne stene",
    text: "Izvedba po veljavnih požarnih standardih in certifikatih.",
  },
  {
    icon: <Volume2 className="size-5" />,
    title: "Akustične rešitve",
    text: "Zmanjšanje hrupa v pisarnah, studiih in stanovanjih.",
  },
  {
    icon: <CheckCircle2 className="size-5" />,
    title: "Suhomontaža na ključ",
    text: "Od načrta do zaključne obdelave — brez gradbenega kaosa.",
  },
];

export default function SuhomontazaVogrinecPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Suhomontaža Vogrinec", path: "/primeri/suhomontaza-vogrinec" },
        ]}
      />
      <DemoBanner name="Suhomontaža Vogrinec" />

      <div className="min-h-svh bg-[#f3f5f7] text-[#1c2733]">
        <header className="border-b border-[#d6dee6] bg-[#f3f5f7]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
            <span className="text-lg font-bold tracking-tight">
              Suhomontaža <span className="text-[#2b6ca3]">Vogrinec</span>
            </span>
            <a
              href="#ocena"
              className="rounded-md bg-[#2b6ca3] px-4 py-2 text-sm font-semibold text-white"
            >
              Brezplačna ocena
            </a>
          </div>
        </header>

        <main>
          <section
            aria-hidden
            className="bg-[linear-gradient(#d6dee6_1px,transparent_1px),linear-gradient(90deg,#d6dee6_1px,transparent_1px)] bg-[size:24px_24px] border-b border-[#d6dee6]"
          >
            <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
              <p className="text-sm font-semibold tracking-wide text-[#2b6ca3] uppercase">
                Suhomontažna dela
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
                Prostor, kot si ga zamislite.
              </h1>
              <p className="mt-5 max-w-lg text-[#4a5a68]">
                Postavitev predelnih sten, spuščenih stropov in mansardnih
                izolacij — hitro, čisto in brez gradbenega kaosa.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ocena"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#2b6ca3] px-6 text-sm font-semibold text-white"
                >
                  Naročite oceno del
                </a>
                <a
                  href="#storitve"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#2b6ca3] px-6 text-sm font-semibold text-[#2b6ca3]"
                >
                  Storitve
                </a>
              </div>
            </div>
          </section>

          <section className="border-b border-[#d6dee6] bg-white">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
              <Info value="1 dan" label="za manjše prostore" />
              <Info value="100%" label="čisto delovišče po zaključku" />
              <Info value="0 €" label="ocena in svetovanje" />
            </div>
          </section>

          <section id="storitve" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-3xl font-bold tracking-tight">Storitve</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <div key={service.title} className="rounded-lg border border-[#d6dee6] bg-white p-6">
                  <span className="flex size-10 items-center justify-center rounded-md bg-[#2b6ca3]/10 text-[#2b6ca3]">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-semibold">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-[#4a5a68]">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="ocena"
            className="border-t border-[#d6dee6] bg-[#1c2733] px-4 py-20 text-center text-white"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Naročite brezplačno oceno
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#9fb0be]">
              Opišite nam prostor, pošljemo okvirno oceno del in časovnico
              izvedbe še isti dan.
            </p>
            <a
              href="tel:+38630777888"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#2b6ca3] px-8 text-sm font-semibold text-white"
            >
              Pokličite 030 777 888
            </a>
            <p className="mt-10 text-xs text-[#6b7c8a]">
              Primer izdelave ·{" "}
              <Link href="/" className="text-[#5b9bd0] underline">
                strannakljuc.si
              </Link>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

function Info({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-[#2b6ca3]">{value}</p>
      <p className="mt-1 text-sm text-[#4a5a68]">{label}</p>
    </div>
  );
}
