import { Check, Info } from "lucide-react";

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
      "1 spletna stran (do 5 vsebinskih razdelkov)",
      "Prilagojeno mobilnim napravam",
      "Osnovna optimizacija za Google iskalnik",
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
      "Boljša vidnost na Googlu",
      "Pregled, koliko ljudi pride na stran",
      "Osnovno gibanje in odzivi na strani",
      "30 dni podpore po objavi",
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
      "Videz po meri vaše dejavnosti",
      "Vidnost na Googlu in hitrejše nalaganje",
      "Novice ali spletni dnevnik",
      "Več jezikov (SLO/EN)",
      "90 dni podpore in vzdrževanja",
    ],
    highlighted: false,
  },
];

const MAINTENANCE_PLANS = [
  {
    name: "Mesečno",
    price: "29 €",
    period: "/ mesec",
    tagline: "Plačujte sproti, brez vezave — prekinete lahko kadarkoli",
    features: [
      "Gostovanje strani in .si domena",
      "SSL certifikat (varna povezava https)",
      "Redne varnostne kopije",
      "Do 2 manjši popravki na mesec (besedilo, slike)",
      "Podpora po e-pošti",
    ],
    badge: null,
  },
  {
    name: "Letno",
    price: "290 €",
    period: "/ leto",
    tagline: "Enkratno letno plačilo — 2 meseca gostovanja podarjena",
    features: [
      "Vse iz mesečnega paketa",
      "Plačate za 10 mesecev, dobite 12",
      "Prednostna obravnava popravkov",
      "1x letni pregled in posodobitev vsebine",
    ],
    badge: "Prihranite 58 €/leto",
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

        <div className="mx-auto mt-6 flex max-w-xl -rotate-1 items-center justify-center gap-2 rounded-sm border-[1.5px] border-dashed border-primary/60 bg-accent px-4 py-2 text-center font-mono text-sm text-primary">
          <span className="font-semibold">Uvodna cena</span>
          <span className="hidden sm:inline">—</span>
          <span className="hidden text-foreground/70 sm:inline">
            znižano za prve stranke, dokler zbiram začetne primere del
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative overflow-visible border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]"
                  : "relative border-[1.5px] border-ink/20 shadow-none"
              }
            >
              {plan.highlighted ? (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] border-[1.5px] border-ink bg-primary font-mono text-[0.65rem] tracking-wide text-primary-foreground uppercase">
                  Priporočeno
                </Badge>
              ) : null}
              <CardHeader>
                <h3 className="font-display text-lg font-medium">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-3 flex items-baseline gap-2 font-mono">
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
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <div className="text-center">
            <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Redno vzdrževanje in gostovanje
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Cene zgoraj so za izdelavo strani. Ko je stran objavljena na
              spletu, jo je treba gostovati, obnavljati domeno in skrbeti za
              varnost — to urejam za vas z mesečno ali letno naročnino.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {MAINTENANCE_PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.badge
                    ? "relative overflow-visible border-[1.5px] border-ink/20 shadow-none"
                    : "relative border-[1.5px] border-ink/20 shadow-none"
                }
              >
                {plan.badge ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-2deg] border-[1.5px] border-ink bg-secondary font-mono text-[0.65rem] tracking-wide text-secondary-foreground uppercase">
                    {plan.badge}
                  </Badge>
                ) : null}
                <CardHeader>
                  <h4 className="font-display text-lg font-medium">{plan.name}</h4>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                  <div className="mt-3 flex items-baseline gap-1.5 font-mono">
                    <span className="text-3xl font-semibold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-sm border-[1.5px] border-dashed border-ink/25 bg-card/50 p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" />
            <p>
              Naročnina ni obvezna — stran lahko po objavi gostujete tudi
              sami. Priporočam pa jo, saj vključuje obnovo domene, gostovanje,
              varnostne kopije in manjše sprotne popravke, brez skrbi, da bi
              kaj potekel ali nehalo delovati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
