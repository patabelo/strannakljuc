import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Car, FileCheck, Paintbrush, Sparkle, Timer, Wrench } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Avtoličarstvo Kovačič — primer strani za avtoličarsko delavnico",
  description:
    "Primer dinamične spletne strani za avtoličarsko delavnico — kleparska, ličarska dela in sodelovanje z zavarovalnicami. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/avtolicarstvo-kovacic" },
  openGraph: {
    title: "Primer: Avtoličarstvo Kovačič",
    description: "Stran za avtoličarsko delavnico — primer izdelave pri Stran na ključ.",
    type: "website",
    locale: "sl_SI",
  },
};

const SERVICES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <Wrench className="size-5" />,
    title: "Kleparska popravila",
    text: "Odpravimo udrtine, praske in poškodbe karoserije.",
  },
  {
    icon: <Paintbrush className="size-5" />,
    title: "Ličarska dela in barvanje",
    text: "Računalniško mešanje barv za popoln ujemajoč ton.",
  },
  {
    icon: <Sparkle className="size-5" />,
    title: "Poliranje in zaščita laka",
    text: "Obnovimo sijaj in zaščitimo lak pred novimi poškodbami.",
  },
  {
    icon: <Car className="size-5" />,
    title: "Popravilo po prometni nesreči",
    text: "Celostna obnova vozila po nezgodi, po potrebi z vlečno službo.",
  },
  {
    icon: <FileCheck className="size-5" />,
    title: "Sodelovanje z zavarovalnicami",
    text: "Uredimo vso dokumentacijo neposredno z vašo zavarovalnico.",
  },
  {
    icon: <Timer className="size-5" />,
    title: "Nadomestno vozilo",
    text: "Na voljo za čas, ko je vaš avto na popravilu pri nas.",
  },
];

export default function AvtolicarstvoKovacicPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Avtoličarstvo Kovačič", path: "/primeri/avtolicarstvo-kovacic" },
        ]}
      />
      <DemoBanner name="Avtoličarstvo Kovačič" />

      <div className="min-h-svh bg-black font-sans text-zinc-100">
        <header className="border-b border-red-600/25 bg-black">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <span className="text-lg font-extrabold tracking-tight italic">
              Avtoličarstvo <span className="text-red-600">Kovačič</span>
            </span>
            <a
              href="tel:+38661999000"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white"
            >
              061 999 000
            </a>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.25),transparent_45%)]"
            />
            <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
              <p className="text-sm font-bold tracking-[0.3em] text-red-600 uppercase">
                Kleparstvo &amp; ličarstvo
              </p>
              <h1 className="mt-4 max-w-2xl text-5xl leading-[1.05] font-extrabold tracking-tight italic sm:text-6xl">
                Vaš avto, kot nov.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-zinc-400">
                Kleparska in ličarska popravila, barvanje in poliranje — od
                manjših prask do celotne prenove karoserije.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#povprasevanje"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-7 text-sm font-bold text-white"
                >
                  Naročite pregled
                </a>
                <a
                  href="#storitve"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-7 text-sm font-bold text-zinc-200"
                >
                  Storitve
                </a>
              </div>
            </div>
          </section>

          <section className="border-y border-zinc-800 bg-zinc-950">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
              <Stat value="Vse" label="zavarovalnice sprejete" />
              <Stat value="Garancija" label="na izvedena ličarska dela" />
              <Stat value="Hitro" label="povprečno 2–4 dni izvedbe" />
            </div>
          </section>

          <section id="storitve" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-3xl font-extrabold tracking-tight italic">
              Storitve
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <div key={service.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-red-600/15 text-red-600">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-bold not-italic">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-400">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="povprasevanje"
            className="border-t border-zinc-800 bg-red-600 px-4 py-20 text-center text-white"
          >
            <h2 className="text-3xl font-extrabold tracking-tight italic">
              Naročite brezplačen pregled škode
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/85">
              Pošljite nam nekaj fotografij poškodbe — pripravimo okvirno
              oceno še isti dan.
            </p>
            <a
              href="tel:+38661999000"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-bold text-white"
            >
              Pokličite 061 999 000
            </a>
            <p className="mt-10 text-xs text-white/70">
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
      <p className="text-2xl font-extrabold text-red-600 italic">{value}</p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
