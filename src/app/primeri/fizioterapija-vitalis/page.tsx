import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CalendarCheck, Leaf, Shield } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";

export const metadata: Metadata = {
  title: "Fizioterapija Vitalis — primer spletne strani za ordinacijo",
  description:
    "Primer mirne, zaupanja vredne spletne strani za fizioterapijo z jasnimi storitvami in naročanjem. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/fizioterapija-vitalis" },
};

const TREATMENTS = [
  {
    title: "Individualna fizioterapija",
    text: "Obravnava po meri — bolečine v hrbtu, sklepih, po poškodbi ali operaciji.",
  },
  {
    title: "Športna rehabilitacija",
    text: "Vrnitev v aktivnost z jasnimi koraki in merljivim napredkom.",
  },
  {
    title: "Terapevtska masaža",
    text: "Sproščanje mišičnih napetosti in izboljšanje gibljivosti.",
  },
  {
    title: "Svetovanje za domače vaje",
    text: "Kratek, izvedljiv načrt, ki ga zmorete izvajati tudi sami.",
  },
];

export default function VitalisPage() {
  return (
    <>
      <DemoBanner name="Fizioterapija Vitalis" />
      <header className="border-b border-teal-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-semibold tracking-tight text-teal-950">
            Vitalis
          </span>
          <a
            href="#narocanje"
            className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white"
          >
            Naročite se
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-teal-50 to-white">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
              Fizioterapija · Ljutomer
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-teal-950 sm:text-5xl">
              Gibanje brez bolečine, korak za korakom.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-teal-900/70">
              V ordinaciji Vitalis združujemo strokovno obravnavo in miren
              prostor, kjer vas poslušamo. Prvi termin je običajno na voljo v
              istem tednu.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#narocanje"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-teal-700 px-5 text-sm font-medium text-white"
              >
                Naročite termin
              </a>
              <a
                href="#storitve"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-teal-200 px-5 text-sm font-medium text-teal-950"
              >
                Storitve
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 pb-8 sm:grid-cols-3">
          <Pill
            icon={<Shield className="size-4" />}
            text="Diplomirani fizioterapevt"
          />
          <Pill
            icon={<Leaf className="size-4" />}
            text="Neinvazivne metode"
          />
          <Pill
            icon={<CalendarCheck className="size-4" />}
            text="Naročanje v 24 urah"
          />
        </section>

        <section id="storitve" className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-teal-950">
            Kako vam lahko pomagamo
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TREATMENTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-teal-100 bg-white p-6"
              >
                <h3 className="font-semibold text-teal-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-900/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="narocanje"
          className="border-t border-teal-100 bg-teal-50 px-4 py-16"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold text-teal-950">
              Naročite se na prvi pregled
            </h2>
            <p className="mt-3 text-teal-900/70">
              Pokličite nas ali pošljite sporočilo. Odgovorimo v istem delovnem
              dnevu in predlagamo termin, ki vam ustreza.
            </p>
            <a
              href="tel:+38625123456"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-teal-700 px-6 text-sm font-medium text-white"
            >
              02 512 34 56
            </a>
            <p className="mt-8 text-xs text-teal-800/60">
              Primer izdelave ·{" "}
              <Link href="/" className="underline">
                strannakljuc.si
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

function Pill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-teal-100 bg-white px-4 py-3 text-sm font-medium text-teal-950">
      <span className="text-teal-700">{icon}</span>
      {text}
    </div>
  );
}
