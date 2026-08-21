import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/services";

const PLANS = [
  {
    name: "Osnovni",
    price: "290 €",
    originalPrice: "390 €",
    tagline: "Za samostojne podjetnike in mikro podjetja",
    features: [
      "1 landing stran (do 5 sekcij)",
      "Prilagojeno mobilnim napravam",
      "Osnovna SEO nastavitev",
      "Obrazec za kontakt",
      "Dostava v 5–7 dneh",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "490 €",
    originalPrice: "690 €",
    tagline: "Najbolj priljubljena izbira za mala podjetja",
    features: [
      "Spletna stran do 5 podstrani",
      "Prilagojeno mobilnim napravam",
      "Napredna SEO nastavitev",
      "Povezava z Google Analytics",
      "Osnovna animacija in interakcije",
      "30 dni podpore po zagonu",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "890 €",
    originalPrice: "1190 €",
    tagline: "Za podjetja, ki želijo rasti dolgoročno",
    features: [
      "Spletna stran do 10 podstrani",
      "Individualen design po meri",
      "Napredna SEO in hitrostna optimizacija",
      "Blog ali novice",
      "Večjezičnost (SLO/EN)",
      "90 dni podpore in vzdrževanja",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="cenik"
      className="border-t border-border bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cenik"
          title="Pregledne cene, brez skritih stroškov"
          description="Vsak projekt je unikaten, zato so cene okvirne izhodišče za pogovor. Skupaj poiščemo paket, ki ustreza vašemu proračunu."
        />

        <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-center text-sm text-indigo-300">
          <span className="font-semibold">Uvodna cena</span>
          <span className="hidden sm:inline">—</span>
          <span className="hidden sm:inline">
            znižano za prve stranke, dokler zbiram začetni portfelj
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative border-indigo-500/50 ring-2 ring-indigo-500/60 shadow-lg"
                  : "relative"
              }
            >
              {plan.highlighted ? (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white">
                  Priporočeno
                </Badge>
              ) : null}
              <CardHeader>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className="text-base text-muted-foreground line-through">
                    {plan.originalPrice}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-indigo-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    plan.highlighted
                      ? "mt-6 w-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-90"
                      : "mt-6 w-full"
                  }
                  variant={plan.highlighted ? "default" : "outline"}
                  nativeButton={false}
                  render={<a href="#kontakt" />}
                >
                  Izberi paket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
