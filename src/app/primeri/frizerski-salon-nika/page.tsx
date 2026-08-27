import Link from "next/link";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { createDemoMetadata } from "@/lib/metadata";

export const metadata = createDemoMetadata({
  title: "Frizerski salon Nika — primer strani za frizerski salon",
  description:
    "Primer elegantne spletne strani za frizerski salon s cenikom storitev in rezervacijo termina. Izdelava: Stran na ključ.",
  path: "/primeri/frizerski-salon-nika",
  openGraphTitle: "Primer: Frizerski salon Nika",
});

const SERVICES = [
  { name: "Striženje in styling", price: "od 26 €" },
  { name: "Barvanje", price: "od 42 €" },
  { name: "Pramenčki / Balayage", price: "od 78 €" },
  { name: "Nega in regeneracija las", price: "od 22 €" },
  { name: "Pričeska za posebne priložnosti", price: "od 55 €" },
];

export default function FrizerskiSalonNikaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Frizerski salon Nika", path: "/primeri/frizerski-salon-nika" },
        ]}
      />
      <DemoBanner name="Frizerski salon Nika" />

      <div className="min-h-svh bg-[#241521] font-serif text-[#f6ece9]">
        <header className="border-b border-[#d9b48f]/20">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
            <span className="text-xl tracking-wide italic">Salon Nika</span>
            <a
              href="#termin"
              className="rounded-full border border-[#d9b48f] px-4 py-1.5 text-sm text-[#d9b48f]"
            >
              Rezerviraj termin
            </a>
          </div>
        </header>

        <main>
          <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
            <p className="text-xs tracking-[0.35em] text-[#d9b48f] uppercase">
              Frizerski salon
            </p>
            <h1 className="mt-5 text-5xl leading-tight italic sm:text-6xl">
              Vaš novi videz vas čaka.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[#e8d9d3]/80">
              Striženje, barvanje in nega las v sproščenem salonu v središču
              mesta. Prisluhnemo, kaj si želite, in poskrbimo za rezultat, s
              katerim boste zares zadovoljni.
            </p>
            <a
              href="#termin"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[#d9b48f] px-7 text-sm font-medium text-[#241521]"
            >
              Rezervirajte termin
            </a>
          </section>

          <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 pb-10 sm:grid-cols-3">
            <div className="h-48 rounded-3xl bg-gradient-to-br from-[#d9b48f]/70 to-[#7a3b52]/60" />
            <div className="h-48 rounded-3xl bg-gradient-to-br from-[#a9647c]/70 to-[#d9b48f]/50" />
            <div className="h-48 rounded-3xl bg-gradient-to-br from-[#5c2a3f]/80 to-[#a9647c]/50" />
          </section>

          <section className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-center text-3xl italic">Cenik storitev</h2>
            <ul className="mt-8 space-y-4">
              {SERVICES.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between border-b border-[#d9b48f]/20 py-3"
                >
                  <span>{item.name}</span>
                  <span className="text-sm text-[#d9b48f]">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="termin" className="px-4 pb-20">
            <div className="mx-auto max-w-xl rounded-3xl border border-[#d9b48f]/20 bg-white/5 p-8 text-center">
              <h2 className="text-3xl italic">Vaš termin</h2>
              <p className="mt-3 text-sm text-[#e8d9d3]/70">
                Pišite nam ali pokličite. Odgovorimo v nekaj urah in
                predlagamo proste termine.
              </p>
              <a
                href="tel:+38651444555"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#d9b48f] px-6 text-sm font-medium text-[#241521]"
              >
                051 444 555
              </a>
              <p className="mt-8 text-xs text-[#e8d9d3]/50">
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
