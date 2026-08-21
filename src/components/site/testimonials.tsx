import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/services";

const TESTIMONIALS = [
  {
    quote:
      "Stran je bila pripravljena v manj kot tednu dni, komunikacija pa je bila ves čas jasna. Povpraševanja preko strani so se podvojila že v prvem mesecu.",
    name: "Maja K.",
    role: "lastnica, Kavarna Urban",
  },
  {
    quote:
      "Končno spletna stran, ki na mobitelu deluje enako dobro kot na računalniku. Naročanje pacientov je zdaj veliko enostavnejše.",
    name: "Domen P.",
    role: "Fizioterapija Vitalis",
  },
  {
    quote:
      "Všeč mi je, da ni bilo nepotrebnega tehničnega žargona — samo jasna vprašanja in hitre rešitve. Priporočam vsakomur, ki šele začenja.",
    name: "Ana Novak",
    role: "Studio Lucia",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Mnenja strank"
        title="Kaj pravijo tisti, ki so že sodelovali z mano"
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardContent className="flex h-full flex-col">
              <div className="mb-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
