import Link from "next/link";

import { SectionHeading } from "@/components/site/services";
import { DEMOS } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="referencie" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="05"
        eyebrow="Primeri"
        title="Oglejte si, kako izgleda delujoča spletna stran"
        description="To so izmišljeni primeri, ki sem jih izdelal sam, da pokažem kakovost izdelave, mobilno prilagoditev in različne sloge — resničnih strank (še) nimam, zato gre za zglede sloga, ne pretekle projekte. Vaša stran bo seveda po meri vaše dejavnosti."
      />

      <ul className="mt-12 border-t border-foreground/15">
        {DEMOS.map((project, index) => (
          <li key={project.slug}>
            <Link
              href={`/primeri/${project.slug}`}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-foreground/15 py-5 sm:grid-cols-[3rem_7rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden
                className="hidden h-px w-full sm:block"
                style={{ background: project.swatch, height: 3 }}
              />
              <span className="min-w-0">
                <span className="block font-display text-xl tracking-[-0.02em] group-hover:text-primary">
                  {project.name}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {project.category}
                  <span className="hidden sm:inline"> — {project.description}</span>
                </span>
              </span>
              <span className="col-start-2 text-sm text-muted-foreground sm:col-start-auto">
                Odpri
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  {" →"}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
