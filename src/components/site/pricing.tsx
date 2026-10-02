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
    tagline: "Najbolj priljubljena izbira",
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

export function Pricing() {
  return (
    <section id="cenik" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="05"
        eyebrow="Cenik"
        title="Pregledne cene, brez skritih stroškov"
        description="Vsak projekt je unikaten, zato so cene okvirne izhodišče za pogovor. Skupaj poiščemo paket, ki ustreza vašemu proračunu — za podjetnika, zasebnika ali d.o.o."
      />

      <p className="mt-10 text-sm text-muted-foreground">
        Uvodna cena — znižano za prve stranke, dokler zbiram začetne primere del.
      </p>

      <div className="mt-6 grid border border-foreground/15 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.highlighted
                ? "bg-foreground px-6 py-8 text-background lg:border-x lg:border-foreground"
                : "border-b border-foreground/15 px-6 py-8 last:border-b-0 lg:border-b-0"
            }
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl tracking-[-0.03em]">{plan.name}</h3>
              {plan.highlighted ? (
                <span className="font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                  Najpogosteje
                </span>
              ) : null}
            </div>
            <p
              className={
                plan.highlighted
                  ? "mt-2 text-sm text-background/70"
                  : "mt-2 text-sm text-muted-foreground"
              }
            >
              {plan.tagline}
            </p>
            <p className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl tracking-[-0.04em]">{plan.price}</span>
              <span
                className={
                  plan.highlighted
                    ? "text-sm text-background/50 line-through"
                    : "text-sm text-muted-foreground line-through"
                }
              >
                {plan.originalPrice}
              </span>
            </p>
            <ul className="mt-6">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={
                    plan.highlighted
                      ? "border-t border-background/15 py-2.5 text-sm"
                      : "border-t border-foreground/10 py-2.5 text-sm"
                  }
                >
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
