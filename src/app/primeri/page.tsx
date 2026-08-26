import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { DemoBanner } from "@/components/demos/demo-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { Badge } from "@/components/ui/badge";
import { DEMOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primeri izdelave spletnih strani",
  description:
    "Sedem primerov sloga za obrtnike in lokalna podjetja. Oglejte si, kako izgledajo strani, ki jih izdelujem pri Stran na ključ.",
  alternates: { canonical: "/primeri" },
};

export default function DemosIndexPage() {
  return (
    <div className="paper-grain min-h-svh bg-background text-foreground">
      <BreadcrumbJsonLd
        items={[
          { name: "Domov", path: "/" },
          { name: "Primeri izdelave", path: "/primeri" },
        ]}
      />
      <DemoBanner name="primeri sloga" />
      <div aria-hidden className="bg-grid fixed inset-0 -z-10 opacity-50" />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          {"// Primeri spletnih strani"}
        </span>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Primeri izdelave
        </h1>
        <p className="mt-3 text-muted-foreground">
          To so izmišljeni primeri, ki sem jih izdelal sam — resničnih strank
          (še) nimam, zato so to zgledi sloga in kakovosti, ne pretekli
          projekti.
        </p>
        <ul className="mt-10 flex flex-col gap-4">
          {DEMOS.map((demo) => (
            <li key={demo.slug}>
              <Link
                href={`/primeri/${demo.slug}`}
                className="group block rounded-sm border-[1.5px] border-ink/20 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ink/40 hover:shadow-[4px_4px_0_0_var(--ink)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge
                      variant="secondary"
                      className="mb-2 font-mono text-[0.65rem] tracking-wide uppercase"
                    >
                      {demo.category}
                    </Badge>
                    <h2 className="font-display text-lg font-medium">
                      {demo.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {demo.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
