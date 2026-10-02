import Link from "next/link";
import Image from "next/image";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import type { Craft } from "@/lib/crafts";

function BackToSite() {
  return (
    <Link
      href="/"
      className="inline-flex items-center bg-white px-4 py-2.5 text-sm font-medium text-black"
    >
      ← Nazaj na mojo stran
    </Link>
  );
}

export function CraftSite({ craft }: { craft: Craft }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
          { name: craft.name, path: `/primeri/${craft.slug}` },
        ]}
      />
      <DemoBanner name={craft.name} />

      <div className="relative min-h-svh text-white">
        <div className="fixed inset-0 z-0">
          <Image
            src={craft.image}
            alt={craft.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/68" />
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/15">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
              <p className="font-display text-xl tracking-[-0.03em]">{craft.name}</p>
              <div className="flex flex-wrap items-center gap-4">
                <BackToSite />
                <a href={`tel:${craft.phone}`} className="text-sm" style={{ color: craft.accent }}>
                  {craft.phoneDisplay}
                </a>
              </div>
            </div>
          </header>

          <main>
            <section className="mx-auto flex min-h-[70svh] max-w-5xl flex-col justify-end px-5 py-16">
              <p
                className="font-mono text-[0.72rem] tracking-[0.16em] uppercase"
                style={{ color: craft.accent }}
              >
                {craft.trade}
              </p>
              <h1 className="mt-4 max-w-[14ch] font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                {craft.headline}
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">{craft.lead}</p>
              <a
                href="#storitve"
                className="mt-8 w-fit px-5 py-3 text-sm text-black"
                style={{ background: craft.accent }}
              >
                {craft.cta}
              </a>
            </section>

            <section id="storitve" className="border-t border-white/15">
              <div className="mx-auto max-w-5xl px-5 py-16">
                <h2 className="font-display text-3xl tracking-[-0.03em]">Storitve</h2>
                <ul className="mt-8 grid gap-px bg-white/15 sm:grid-cols-2">
                  {craft.services.map((service) => (
                    <li key={service} className="bg-black/45 px-5 py-4 text-sm backdrop-blur-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="border-t border-white/15">
              <div className="mx-auto max-w-5xl px-5 py-16">
                <h2 className="font-display text-3xl tracking-[-0.03em]">Pokličite</h2>
                <p className="mt-3 max-w-md text-white/75">
                  Ogled in okvirna ponudba sta brez obveznosti.
                </p>
                <a
                  href={`tel:${craft.phone}`}
                  className="mt-8 inline-block px-5 py-3 text-sm text-black"
                  style={{ background: craft.accent }}
                >
                  {craft.phoneDisplay}
                </a>
                <div className="mt-10">
                  <BackToSite />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
