import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/services";

const PROJECTS = [
  {
    name: "Kavarna Urban",
    category: "Gostinstvo",
    description: "Landing stran za lokalno kavarno z online rezervacijo miz.",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
  },
  {
    name: "Fizioterapija Vitalis",
    category: "Zdravstvene storitve",
    description: "Predstavitvena stran s koledarjem za naročanje pacientov.",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    name: "Studio Lucia",
    category: "Lepotne storitve",
    description: "Elegantna stran za frizerski salon s galerijo storitev.",
    gradient: "from-fuchsia-400 via-pink-400 to-rose-400",
  },
  {
    name: "NordFit Oprema",
    category: "Spletna trgovina",
    description: "Landing stran za predstavitev nove linije športne opreme.",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
  },
  {
    name: "Pravna pisarna Novak",
    category: "Poslovne storitve",
    description: "Zaupanja vredna stran s poudarkom na strokovnosti in izkušnjah.",
    gradient: "from-slate-500 via-slate-400 to-zinc-400",
  },
  {
    name: "EkoDom Gradnje",
    category: "Gradbeništvo",
    description: "Predstavitev projektov in referenc z galerijo pred/po.",
    gradient: "from-lime-400 via-green-400 to-emerald-400",
  },
];

export function Portfolio() {
  return (
    <section id="referencie" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Primeri dela"
        title="Zgledi projektov, podobnih vašemu"
        description="Nekaj primerov strani, ki ponazarjajo slog in kakovost izdelave. Vsak projekt prilagodim vaši dejavnosti."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div
              className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              <span className="text-2xl font-semibold text-white/95 drop-shadow-sm">
                {project.name}
              </span>
              <div className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
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
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Primeri so ilustrativni prikazi slogov izdelave. Za resnične referenc
        in žive povezave me kontaktirajte.
      </p>
    </section>
  );
}
