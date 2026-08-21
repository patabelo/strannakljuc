import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/services";
import { DEMOS } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="referencie" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Primeri sloga"
        title="Oglejte si, kako izgleda živa stran"
        description="To niso izmišljene stranke — so trije popolnoma izdelani primeri, da vidite kakovost, mobilno prilagoditev in različne sloge. Vaša stran bo seveda po meri vaše dejavnosti."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEMOS.map((project) => (
          <Link
            key={project.slug}
            href={`/primeri/${project.slug}`}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div
              className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              <span className="text-2xl font-semibold text-white/95 drop-shadow-sm">
                {project.name}
              </span>
              <div className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                <ArrowUpRight className="size-4" />
              </div>
            </div>
            <div className="p-5">
              <Badge variant="secondary" className="mb-2">
                {project.category}
              </Badge>
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-3 text-sm font-medium text-indigo-400">
                Odpri primer →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
