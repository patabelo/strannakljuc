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
  CardDescription,
} from "@/components/ui/card";

const SERVICES: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <LayoutTemplate className="size-5" />,
    title: "Enostranske spletne strani",
    description:
      "Ena osredotočena stran za vaš izdelek, storitev ali dogodek — zasnovana tako, da obiskovalce pripelje do povpraševanja ali nakupa.",
  },
  {
    icon: <Building2 className="size-5" />,
    title: "Spletne strani za podjetja",
    description:
      "Predstavitvena spletna stran z več podstranmi: O nas, Storitve, Reference, Kontakt — urejena, hitra in enostavna za posodabljanje.",
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
      "Kratke, udarne strani za predstavitev novega izdelka, akcijo ali dogodek — z odštevalnikom, obrazcem in jasnim gumbom za kontakt.",
  },
  {
    icon: <Search className="size-5" />,
    title: "Vidnost na Googlu",
    description:
      "Poskrbim za naslove, opise strani, hitrost nalaganja in strukturo, da vas lažje najdejo na Googlu.",
  },
  {
    icon: <Wrench className="size-5" />,
    title: "Vzdrževanje in dopolnitve",
    description:
      "Po objavi strani pomagam z manjšimi spremembami, novo vsebino ali dodatnimi funkcijami, ko jih potrebujete.",
  },
];

export function Services() {
  return (
    <section id="storitve" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Storitve"
        title="Vse, kar potrebujete za nastop na spletu"
        description="Od prve ideje do objavljene strani na spletu — vodim vas skozi celoten postopek, brez tehničnega žargona."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Card
            key={service.title}
            className="border-[1.5px] border-ink/15 shadow-none ring-0 transition-transform hover:-translate-y-0.5 hover:border-ink/30"
          >
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink bg-accent text-primary">
                {service.icon}
              </div>
              <h3 className="font-display text-lg leading-snug font-medium">
                {service.title}
              </h3>
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
      <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
        {`// ${eyebrow}`}
      </span>
      <h2 className="mt-2 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
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
