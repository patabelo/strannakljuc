import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { DEMOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primeri izdelave spletnih strani",
  description:
    "Sedem primerov sloga za obrtnike in lokalna podjetja. Oglejte si, kako izgledajo strani, ki jih izdelujem pri Stran na ključ.",
  alternates: { canonical: "/primeri" },
};

export default function DemosIndexPage() {
  return (
    <div className="min-h-svh text-foreground">
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
        ]}
      />
      <DemoBanner name="primeri sloga" />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] text-primary uppercase">
          Primeri
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-[-0.03em]">
          Primeri izdelave
        </h1>
        <p className="mt-3 text-muted-foreground">
          To so izmišljeni primeri, ki sem jih izdelal sam — resničnih strank
          (še) nimam, zato so to zgledi sloga in kakovosti, ne pretekli
          projekti.
        </p>
        <ul className="mt-10 border-t border-white/15">
          {DEMOS.map((demo) => (
            <li key={demo.slug}>
              <Link
                href={`/primeri/${demo.slug}`}
                className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b border-white/15 py-4"
              >
                <Image
                  src={demo.image}
                  alt={demo.imageAlt}
                  width={128}
                  height={128}
                  className="size-16 object-cover"
                />
                <span>
                  <span className="font-mono text-[0.68rem] tracking-[0.12em] text-white/60 uppercase">
                    {demo.category}
                  </span>
                  <span className="mt-1 block font-display text-xl tracking-[-0.02em] group-hover:text-primary">
                    {demo.name}
                  </span>
                  <span className="mt-1 block text-sm text-white/70">
                    {demo.description}
                  </span>
                </span>
                <span className="text-sm text-white/70">Odpri</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
