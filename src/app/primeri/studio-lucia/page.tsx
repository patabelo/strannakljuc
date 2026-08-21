import type { Metadata } from "next";
import Link from "next/link";

import { DemoBanner } from "@/components/demos/demo-banner";

export const metadata: Metadata = {
  title: "Studio Lucia — primer spletne strani za frizerski salon",
  description:
    "Primer elegantne spletne strani za frizerski salon s storitvami in rezervacijo termina. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/studio-lucia" },
};

const SERVICES = [
  { name: "Striženje in styling", price: "od 28 €" },
  { name: "Barvanje", price: "od 45 €" },
  { name: "Balayage / blond", price: "od 85 €" },
  { name: "Nega in obnova las", price: "od 35 €" },
];

export default function StudioLuciaPage() {
  return (
    <>
      <DemoBanner name="Studio Lucia" />
      <div className="min-h-svh bg-[#1a1216] text-[#f6ecef]">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
            <span className="font-serif text-xl italic tracking-wide">
              Studio Lucia
            </span>
            <a
              href="#termin"
              className="rounded-full border border-rose-300/40 px-4 py-1.5 text-sm text-rose-100"
            >
              Rezerviraj
            </a>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">
              Frizerski salon
            </p>
            <h1 className="mt-4 font-serif text-5xl italic leading-tight sm:text-6xl">
              Lasje, ki govorijo namesto vas.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-rose-100/70">
              Osebni pristop, miren studio in natančno delo. V studiu Lucia
              vsak termin traja, kolikor je treba — brez hitenja.
            </p>
            <a
              href="#termin"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-rose-200 px-6 text-sm font-medium text-rose-950"
            >
              Rezervirajte termin
            </a>
          </section>

          <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 pb-8 sm:grid-cols-3">
            <div className="h-48 rounded-3xl bg-gradient-to-br from-rose-300/80 to-fuchsia-400/50" />
            <div className="h-48 rounded-3xl bg-gradient-to-br from-amber-200/70 to-rose-300/60" />
            <div className="h-48 rounded-3xl bg-gradient-to-br from-zinc-400/40 to-rose-200/40" />
          </section>

          <section className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-center font-serif text-3xl italic">Storitve</h2>
            <ul className="mt-8 space-y-4">
              {SERVICES.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between border-b border-white/10 py-3"
                >
                  <span>{item.name}</span>
                  <span className="text-sm text-rose-200/80">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="termin" className="px-4 pb-20">
            <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="font-serif text-3xl italic">Vaš termin</h2>
              <p className="mt-3 text-sm text-rose-100/70">
                Pišite nam ali pokličite. Odgovorimo v nekaj urah in predlagamo
                proste termine.
              </p>
              <a
                href="tel:+38640111222"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-rose-200 px-6 text-sm font-medium text-rose-950"
              >
                040 111 222
              </a>
              <p className="mt-8 text-xs text-rose-100/50">
                Primer izdelave ·{" "}
                <Link href="/" className="underline">
                  strannakljuc.si
                </Link>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
