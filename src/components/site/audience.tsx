import { Coffee, HeartPulse, Scissors } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/services";

const AUDIENCE = [
  {
    icon: <Coffee className="size-5" />,
    title: "Gostinstvo in lokalne storitve",
    description:
      "Kavarne, restavracije, saloni in obrtniki, ki potrebujejo jasno stran z urnikom, ponudbo in spodbudo k povpraševanju.",
  },
  {
    icon: <HeartPulse className="size-5" />,
    title: "Ordinacije in svetovalci",
    description:
      "Fizioterapevti, trenerji, pravniki in drugi strokovnjaki, kjer je zaupanje na prvem mestu — in enostavno naročanje.",
  },
  {
    icon: <Scissors className="size-5" />,
    title: "Podjetniki, ki šele začenjajo",
    description:
      "Če še nimate spletne strani ali je stara in počasna, pripravim sodoben nastop, ki na mobitelu deluje enako dobro kot na računalniku.",
  },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Za koga"
        title="Strani, ki jih razume vsakodnevni obiskovalec"
        description="Ne izdelujem zapletenih spletnih sistemov. Osredotočam se na male podjetnike, ki potrebujejo lepo, hitro in razumljivo spletno stran — brez odvečnega žargona."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE.map((item) => (
          <Card key={item.title} className="border-[1.5px] border-ink/15 shadow-none">
            <CardContent className="flex h-full flex-col">
              <div className="mb-3 flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink bg-secondary text-secondary-foreground">
                {item.icon}
              </div>
              <h3 className="font-display text-base font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
