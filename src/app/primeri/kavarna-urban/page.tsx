import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";

export const metadata: Metadata = {
  title: "Kavarna Urban — primer landing strani za gostinstvo",
  description:
    "Primer tople, mobilno prilagojene landing strani za lokalno kavarno. Izdelava: Stran na ključ (strannakljuc.si).",
  alternates: { canonical: "/primeri/kavarna-urban" },
  openGraph: {
    title: "Primer: Kavarna Urban",
    description: "Landing stran za gostinstvo — primer izdelave pri Stran na ključ.",
  },
};

const MENU = [
  { name: "Espresso", price: "1,80 €" },
  { name: "Cappuccino", price: "2,40 €" },
  { name: "Filter kava dneva", price: "3,20 €" },
  { name: "Croissant z maslom", price: "2,90 €" },
  { name: "Jajca Benedikt", price: "8,50 €" },
  { name: "Torta tedna", price: "4,20 €" },
];

export default function KavarnaUrbanPage() {
  return (
    <>
      <DemoBanner name="Kavarna Urban" />
      <header className="border-b border-amber-100 bg-[#faf6f1]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="font-serif text-xl tracking-tight text-amber-950">
            Kavarna Urban
          </span>
          <a
            href="#rezervacija"
            className="rounded-full bg-amber-900 px-4 py-2 text-sm font-medium text-amber-50"
          >
            Rezerviraj mizo
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#faf6f1]">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:grid-cols-2 sm:py-24">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-amber-800">
                Ljutomer · od 7.00
              </p>
              <h1 className="mt-3 font-serif text-4xl leading-tight text-amber-950 sm:text-5xl">
                Dobra kava, miren kotiček in dišeč croissants.
              </h1>
              <p className="mt-4 text-lg text-amber-900/80">
                Sosedska kavarna za jutranji zagon, popoldanski sestanek ali
                kolač z družino. Sveže zrna, lokalni pecivo, prijazna postrežba.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#rezervacija"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-amber-900 px-5 text-sm font-medium text-amber-50"
                >
                  Rezerviraj mizo
                </a>
                <a
                  href="#jedilnik"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-amber-300 px-5 text-sm font-medium text-amber-950"
                >
                  Oglej jedilnik
                </a>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200 shadow-inner" />
          </div>
        </section>

        <section className="border-y border-amber-100 bg-white">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
            <Info
              icon={<Clock className="size-4" />}
              title="Odprto vsak dan"
              text="Pon–Pet 7.00–18.00 · Sob–Ned 8.00–16.00"
            />
            <Info
              icon={<MapPin className="size-4" />}
              title="V središču"
              text="Glavni trg 12, 9240 Ljutomer"
            />
            <Info
              icon={<Phone className="size-4" />}
              title="Pokličite nas"
              text="02 123 45 67"
            />
          </div>
        </section>

        <section id="jedilnik" className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="font-serif text-3xl text-amber-950">Jedilnik</h2>
          <p className="mt-2 text-amber-900/70">
            Kratek, sezonski izbor. Vse spečemo zjutraj.
          </p>
          <ul className="mt-8 divide-y divide-amber-100">
            {MENU.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <span className="text-amber-950">{item.name}</span>
                <span className="text-sm text-amber-800">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="rezervacija"
          className="bg-amber-950 px-4 py-16 text-center text-amber-50"
        >
          <h2 className="font-serif text-3xl">Pridite na kavo</h2>
          <p className="mx-auto mt-3 max-w-md text-amber-100/80">
            Mizo rezervirate po telefonu ali prek sporočila. Za skupine nad 6
            oseb prosimo za dan vnaprej.
          </p>
          <a
            href="tel:+38621234567"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-amber-100 px-6 text-sm font-medium text-amber-950"
          >
            Pokličite 02 123 45 67
          </a>
          <p className="mt-8 text-xs text-amber-200/70">
            Primer izdelave ·{" "}
            <Link href="/" className="underline">
              strannakljuc.si
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

function Info({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-amber-800">{icon}</span>
      <div>
        <p className="font-medium text-amber-950">{title}</p>
        <p className="text-sm text-amber-900/70">{text}</p>
      </div>
    </div>
  );
}
