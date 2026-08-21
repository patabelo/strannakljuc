import type { ReactNode } from "react";
import {
  LayoutTemplate,
  Building2,
  RefreshCw,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const SERVICES: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <LayoutTemplate className="size-5" />,
    title: "Landing strani",
    description:
      "Ena osredotočena stran za vaš izdelek, storitev ali dogodek — zasnovana tako, da obiskovalce pripelje do povpraševanja ali nakupa.",
  },
  {
    icon: <Building2 className="size-5" />,
    title: "Spletne strani za podjetja",
    description:
      "Predstavitvena spletna stran z več podstranmi: O nas, Storitve, Referenc, Kontakt — urejena, hitra in enostavna za posodabljanje.",
  },
  {
    icon: <RefreshCw className="size-5" />,
    title: "Prenova obstoječe strani",
    description:
      "Vašo staro stran posodobim v sodoben, hiter in mobilno prijazen izgled — brez izgube vsebine, ki jo že imate.",
  },
  {
    icon: <Rocket className="size-5" />,
    title: "Strani za pred-naročila in dogodke",
    description:
      "Kratke, udarne strani za lansiranje novega izdelka, akcijo ali dogodek — z odštevalnikom, obrazcem in jasnim CTA.",
  },
  {
    icon: <Search className="size-5" />,
    title: "Osnovna SEO optimizacija",
    description:
      "Poskrbim za naslove, meta opise, hitrost nalaganja in strukturo, da vas lažje najdejo na Googlu.",
  },
  {
    icon: <Wrench className="size-5" />,
    title: "Vzdrževanje in dopolnitve",
    description:
      "Po zagonu strani pomagam z manjšimi spremembami, novo vsebino ali dodatnimi funkcijami, ko jih potrebujete.",
  },
];

export function Services() {
  return (
    <section id="storitve" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Storitve"
        title="Vse, kar potrebujete za nastop na spletu"
        description="Od prve ideje do žive strani — vodim vas skozi celoten postopek, brez tehničnega žargona."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Card key={service.title} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-white">
                {service.icon}
              </div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[0.925rem] leading-relaxed">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
