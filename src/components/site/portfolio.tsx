import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/services";
import { DEMOS } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="referencie" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Primeri spletnih strani"
        title="Oglejte si, kako izgleda delujoča spletna stran"
        description="To so izmišljeni primeri, ki sem jih izdelal sam, da pokažem kakovost izdelave, mobilno prilagoditev in različne sloge — resničnih strank (še) nimam, zato gre za zglede sloga, ne pretekle projekte. Vaša stran bo seveda po meri vaše dejavnosti."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEMOS.map((project) => (
          <Link
            key={project.slug}
            href={`/primeri/${project.slug}`}
            className="group overflow-hidden rounded-sm border-[1.5px] border-ink/20 bg-card shadow-none transition-all hover:-translate-y-1 hover:border-ink/40 hover:shadow-[4px_4px_0_0_var(--ink)]"
          >
            <div
              className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              <span className="font-display text-2xl font-medium text-white/95 italic drop-shadow-sm">
                {project.name}
              </span>
              <div className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                <ArrowUpRight className="size-4" />
              </div>
            </div>
            <div className="p-5">
              <Badge
                variant="secondary"
                className="mb-2 font-mono text-[0.65rem] tracking-wide uppercase"
              >
                {project.category}
              </Badge>
              <h3 className="font-display font-medium">{project.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-3 font-mono text-sm font-medium text-primary">
                Odpri primer →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
