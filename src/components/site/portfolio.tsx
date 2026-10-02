import Link from "next/link";

import { SectionHeading } from "@/components/site/services";
import { DEMOS } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="referencie" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="04"
        eyebrow="Primeri"
        title="Tako lahko izgleda vaša stran"
        description="Zgledi sloga za obrtnike in lokalna podjetja. Vaša stran nastane po meri dejavnosti: vsebina, barve in zgradba so vaše, ne predloga."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DEMOS.map((project) => (
          <li key={project.slug} className={project.slug === "kovinarstvo-meznaric" ? "sm:col-span-2 lg:col-span-2" : ""}>
            <Link
              href={`/primeri/${project.slug}`}
              className="group flex h-full flex-col border border-foreground/12 bg-card transition-colors hover:border-foreground/40"
            >
              <span
                className="flex min-h-40 items-end p-6"
                style={{ background: project.swatch }}
              >
                <span className="font-display text-3xl tracking-[-0.03em] text-white">
                  {project.name}
                </span>
              </span>
              <span className="flex flex-1 flex-col p-5">
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {project.category}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </span>
                <span className="mt-5 text-sm">
                  Odpri primer
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    {" →"}
                  </span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
