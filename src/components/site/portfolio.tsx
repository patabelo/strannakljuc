import Link from "next/link";
import Image from "next/image";

import { SectionHeading } from "@/components/site/services";
import { DEMOS } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="referencie" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="04"
        eyebrow="Primeri"
        title="Tako lahko izgleda vaša stran"
        description="To so izmišljeni primeri, ki sem jih izdelal sam, da pokažem kakovost izdelave, mobilno prilagoditev in različne sloge — resničnih strank (še) nimam, zato gre za zglede sloga, ne pretekle projekte. Vaša stran bo seveda po meri vaše dejavnosti."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DEMOS.map((project) => (
          <li key={project.slug} className={project.slug === "kovinarstvo-meznaric" ? "sm:col-span-2 lg:col-span-2" : ""}>
            <Link
              href={`/primeri/${project.slug}`}
              className="group flex h-full flex-col border border-white/15 bg-black/35 transition-colors hover:border-white/40"
            >
              <span className="relative flex min-h-44 items-end overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                <span className="relative p-6 font-display text-3xl tracking-[-0.03em] text-white">
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
