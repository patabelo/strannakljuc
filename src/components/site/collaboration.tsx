import Link from "next/link";

import { SectionHeading } from "@/components/site/services";

const POINTS = [
  {
    title: "Isti izvajalec",
    text: "Stran vodi človek, ki jo je izdelal. Ni predaje drugi ekipi in ni čakanja na projektnega vodjo.",
  },
  {
    title: "Dogovor s s.p.",
    text: "Sodelujete neposredno s Patrick Belcl, s.p. Račun, domena in gostovanje so urejeni na enem mestu.",
  },
  {
    title: "Stran ostane živa",
    text: "Popravki besedila, nove slike, varnostne kopije in skrb, da povezava in domena ne potečeta.",
  },
];

const PLANS = [
  {
    name: "Mesečno",
    price: "29 €",
    period: "/ mesec",
    tagline: "Brez vezave. Sodelovanje prekinete, kadar želite.",
    features: [
      "Gostovanje strani in .si domena",
      "Varna povezava https",
      "Redne varnostne kopije",
      "Do 2 manjša popravka na mesec",
      "Podpora po e-pošti",
    ],
    note: null,
  },
  {
    name: "Letno",
    price: "290 €",
    period: "/ leto",
    tagline: "Eno plačilo za celo leto sodelovanja.",
    features: [
      "Vse iz mesečnega sodelovanja",
      "Plačate za 10 mesecev, dobite 12",
      "Prednostna obravnava popravkov",
      "Letni pregled in posodobitev vsebine",
    ],
    note: "Prihranite 58 €",
  },
];

export function Collaboration() {
  return (
    <section id="sodelovanje" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="06"
        eyebrow="Sodelovanje"
        title="Koliko stane gostovanje po objavi?"
        description="Gostovanje stane 29 € na mesec ali 290 € na leto. V ceni so .si domena, https, varnostne kopije in do 2 manjša popravka na mesec. Izdelava strani je ločeno, enkratno naročilo. Sodelovanje ni pogoj."
      />

      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        {POINTS.map((point, index) => (
          <li key={point.title} className="border-t border-foreground pt-5">
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-primary uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-[-0.03em]">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid border border-foreground/15 sm:grid-cols-2">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className="border-b border-foreground/15 px-6 py-8 last:border-b-0 sm:border-b-0 sm:odd:border-r"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl tracking-[-0.03em]">{plan.name}</h3>
              {plan.note ? (
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-primary uppercase">
                  {plan.note}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl tracking-[-0.04em]">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </p>
            <ul className="mt-6">
              {plan.features.map((feature) => (
                <li key={feature} className="border-t border-foreground/10 py-2.5 text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Sodelovanje ni pogoj za izdelavo. Stran lahko gostujete sami. Če
        ostanete pri Patrick Belcl s.p., sta domena, gostovanje in do 2
        manjša popravka na mesec na istem računu. Letno plačilo 290 € prihrani
        58 € glede na 12 mesecev po 29 €.
      </p>
      <Link
        href="/#kontakt"
        className="mt-8 inline-block bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-primary"
      >
        Dogovorite sodelovanje
      </Link>
    </section>
  );
}
