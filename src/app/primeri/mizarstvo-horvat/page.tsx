import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Hammer, Home, Sofa, TreePine, Warehouse, Wrench } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = {
  title: "Mizarstvo Horvat — primer strani za mizarsko obrt",
  description:
    "Primer tople, lesene spletne strani za mizarstvo — pohištvo in izdelki po meri. Izdelava: Stran na ključ.",
  alternates: { canonical: "/primeri/mizarstvo-horvat" },
  openGraph: {
    title: "Primer: Mizarstvo Horvat",
    description: "Topla stran za mizarsko obrt — primer izdelave pri Stran na ključ.",
  },
};

const SERVICES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <Home className="size-5" />,
    title: "Kuhinje po meri",
    text: "Načrtovanje in izdelava kuhinj, prilagojenih vašemu prostoru in slogu.",
  },
  {
    icon: <Sofa className="size-5" />,
    title: "Pohištvo po naročilu",
    text: "Mize, omare in police, izdelane iz masivnega lesa po vaših željah.",
  },
  {
    icon: <Warehouse className="size-5" />,
    title: "Vgradne omare",
    text: "Izkoristimo vsak kot prostora z omarami, prilagojenimi do milimetra.",
  },
  {
    icon: <TreePine className="size-5" />,
    title: "Terase in lesene ograje",
    text: "Zunanji leseni elementi, obdelani za dolgo življenjsko dobo.",
  },
  {
    icon: <Hammer className="size-5" />,
    title: "Notranja vrata in okna",
    text: "Izdelava in vgradnja lesenih vrat in oken po meri prostora.",
  },
  {
    icon: <Wrench className="size-5" />,
    title: "Restavracija starega pohištva",
    text: "Obnovimo družinske dediščine v kos, ki bo služil še generacije.",
  },
];

export default function MizarstvoHorvatPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: "Mizarstvo Horvat", path: "/primeri/mizarstvo-horvat" },
        ]}
      />
      <DemoBanner name="Mizarstvo Horvat" />

      <div className="min-h-svh bg-[#faf6ef] font-serif text-[#3e2a1c]">
        <header className="border-b border-[#e2d3bb] bg-[#faf6ef]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
            <span className="text-xl tracking-tight italic">
              Mizarstvo Horvat
            </span>
            <a
              href="#povprasevanje"
              className="rounded-full bg-[#3e2a1c] px-5 py-2 text-sm font-medium text-[#faf6ef]"
            >
              Povprašajte
            </a>
          </div>
        </header>

        <main>
          <section className="bg-gradient-to-b from-[#f0e6d3] to-[#faf6ef]">
            <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:grid-cols-2 sm:py-28">
              <div>
                <p className="text-sm font-medium tracking-widest text-[#8a6a3f] uppercase">
                  Mizarska obrt · po vsej Sloveniji
                </p>
                <h1 className="mt-4 text-4xl leading-tight italic sm:text-5xl">
                  Les, obdelan z roko mojstra.
                </h1>
                <p className="mt-5 max-w-md text-lg text-[#6b5540]">
                  Izdelava kuhinj, pohištva, vrat in oken po meri — od zamisli
                  do zadnjega detajla, v naravnih materialih, ki trajajo
                  generacije.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#povprasevanje"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#3e2a1c] px-6 text-sm font-medium text-[#faf6ef]"
                  >
                    Brezplačna izmera
                  </a>
                  <a
                    href="#storitve"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#c9b48f] px-6 text-sm font-medium text-[#3e2a1c]"
                  >
                    Naše storitve
                  </a>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#c9a876] via-[#a9824f] to-[#7a5a34] shadow-xl" />
            </div>
          </section>

          <section className="border-y border-[#e2d3bb] bg-white">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
              <Info title="Domači les" text="Kvaliteten, lokalno pridobljen les" />
              <Info title="Brezplačna izmera" text="Pridemo na dom ali v poslovni prostor" />
              <Info title="Garancija" text="Na vse izdelke in vgradnjo" />
            </div>
          </section>

          <section id="storitve" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-3xl italic">Storitve</h2>
            <p className="mt-2 max-w-xl text-[#6b5540]">
              Vsak kos izdelamo po meri prostora in vaših želja.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#e2d3bb] bg-white p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#f0e6d3] text-[#8a6a3f]">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-semibold not-italic">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#6b5540]">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="povprasevanje"
            className="border-t border-[#e2d3bb] bg-[#3e2a1c] px-4 py-20 text-center text-[#faf6ef]"
          >
            <h2 className="text-3xl italic">Povprašajte za izmero</h2>
            <p className="mx-auto mt-3 max-w-md text-[#d8c6a8]">
              Pišite ali pokličite — brezplačno si ogledamo prostor in
              pripravimo predlog rešitve.
            </p>
            <a
              href="tel:+38641333222"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#faf6ef] px-8 text-sm font-medium text-[#3e2a1c]"
            >
              Pokličite 041 333 222
            </a>
            <p className="mt-10 text-xs text-[#b39c78]">
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

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-center">
      <p className="font-semibold text-[#3e2a1c]">{title}</p>
      <p className="mt-1 text-sm text-[#6b5540]">{text}</p>
    </div>
  );
}
