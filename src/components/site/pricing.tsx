import { SectionHeading } from "@/components/site/services";

type Plan = {
  name: string;
  price: string;
  originalPrice: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
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

const TOOL_PLANS: Plan[] = [
  {
    name: "Stran in ponudba",
    price: "540 €",
    originalPrice: "740 €",
    tagline: "Enostranska stran in kalkulator ponudbe",
    features: [
      "Enostranska spletna stran (paket Osnovni)",
      "Kalkulator ponudbe z vašim cenikom",
      "Stranka vidi okvirno ceno in pusti kontakt",
      "Povpraševanje pride na vaš e-naslov",
    ],
    highlighted: false,
  },
  {
    name: "Stran in oboje",
    price: "780 €",
    originalPrice: "1080 €",
    tagline: "Enostranska stran, kalkulator in zajem računov",
    features: [
      "Enostranska spletna stran (paket Osnovni)",
      "Kalkulator ponudbe z vašim cenikom",
      "Zajem računov iz fotografije ali PDF",
      "Obe orodji v enem paketu",
    ],
    highlighted: true,
    badge: "Za obrtnika",
  },
  {
    name: "Stran in računi",
    price: "640 €",
    originalPrice: "840 €",
    tagline: "Enostranska stran in zajem računov",
    features: [
      "Enostranska spletna stran (paket Osnovni)",
      "Zajem računov iz fotografije ali PDF",
      "Znesek, DDV, TRR in sklic, kadar so na dokumentu",
      "Izvoz preglednice za računovodjo",
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

      <PlanGrid plans={PLANS} />

      <div className="mt-16 max-w-2xl">
        <h3 className="font-display text-2xl tracking-[-0.03em]">
          Enostranska stran z orodjem
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Kalkulator ponudbe stranki takoj pokaže okvirno ceno in zbere kontakt.
          Zajem računov iz fotografije ali PDF pripravi znesek, DDV in TRR za
          računovodjo. Obe orodji lahko stojita na isti enostranski strani.
        </p>
      </div>

      <PlanGrid plans={TOOL_PLANS} />

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Če stran že imate, ali izberete paket Standard ali Premium, orodje dodam
        posebej: kalkulator ponudbe 250 €, zajem računov 350 €, oboje skupaj 490 €.
      </p>
    </section>
  );
}

function PlanGrid({ plans }: { plans: Plan[] }) {
  return (
    <div className="mt-6 grid border border-foreground/15 lg:grid-cols-3">
      {plans.map((plan) => (
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
                {plan.badge ?? "Najpogosteje"}
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
  );
}
