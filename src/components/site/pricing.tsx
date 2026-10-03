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
        title="Koliko stane spletna stran?"
        description="Uvodna cena enostranske strani je 290 €. Do 5 podstrani stane 490 €, do 10 podstrani 890 €. Enostranska stran z obema orodjema stane 780 €. Cene spodaj so uvodne, dokler zbiram prve objavljene strani."
      />

      <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">
        Primerjava cen
      </h3>
      <PriceTable />
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        Črtica pomeni, da za to postavko ni posebej objavljene višje cene. Letno
        gostovanje <strong className="font-semibold text-foreground">290 €</strong> zamenja
        12 mesecev po 29 €, to je <strong className="font-semibold text-foreground">348 €</strong>,
        zato je prihranek <strong className="font-semibold text-foreground">58 €</strong>.
      </p>

      <p className="mt-10 text-sm text-muted-foreground">
        Na karticah je uvodna cena. Prečrtana številka je redna cena.
      </p>

      <PlanGrid plans={PLANS} />

      <div className="mt-16 max-w-2xl">
        <h3 className="font-display text-2xl tracking-[-0.03em]">
          Kaj vključuje enostranska stran z orodjem?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">Kalkulator ponudbe</strong> stranki
          pokaže okvirno ceno in zbere kontakt.{" "}
          <strong className="font-semibold text-foreground">Zajem računov</strong> iz
          fotografije ali PDF pripravi znesek, DDV in TRR. Obe orodji lahko
          stojita na paketu Osnovni. K že obstoječi strani ali k paketu Standard
          in Premium orodje dodam posebej: kalkulator{" "}
          <strong className="font-semibold text-foreground">250 €</strong>, zajem računov{" "}
          <strong className="font-semibold text-foreground">350 €</strong>, oboje{" "}
          <strong className="font-semibold text-foreground">490 €</strong>.
        </p>
      </div>

      <PlanGrid plans={TOOL_PLANS} />

    </section>
  );
}

const PRICE_ROWS: { name: string; scope: string; intro: string; regular: string }[] = [
  { name: "Osnovni", scope: "1 stran, do 5 razdelkov, obrazec, 5–7 dni", intro: "290 €", regular: "390 €" },
  { name: "Standard", scope: "Do 5 podstrani, 30 dni podpore", intro: "490 €", regular: "690 €" },
  { name: "Premium", scope: "Do 10 podstrani, SLO/EN, 90 dni podpore", intro: "890 €", regular: "1190 €" },
  { name: "Stran in ponudba", scope: "Osnovni + kalkulator ponudbe", intro: "540 €", regular: "740 €" },
  { name: "Stran in računi", scope: "Osnovni + zajem računov", intro: "640 €", regular: "840 €" },
  { name: "Stran in oboje", scope: "Osnovni + kalkulator in zajem računov", intro: "780 €", regular: "1080 €" },
  { name: "Kalkulator ponudbe", scope: "Dodatek k že obstoječi strani", intro: "250 €", regular: "—" },
  { name: "Zajem računov", scope: "Dodatek k že obstoječi strani", intro: "350 €", regular: "—" },
  { name: "Obe orodji", scope: "Dodatek k že obstoječi strani", intro: "490 €", regular: "—" },
  { name: "Gostovanje, mesečno", scope: ".si domena, https, kopije, do 2 popravka", intro: "29 €/mesec", regular: "—" },
  { name: "Gostovanje, letno", scope: "Isto kot mesečno, prednostni popravki, letni pregled", intro: "290 €/leto", regular: "348 €" },
];

function PriceTable() {
  return (
    <div className="mt-4 border border-foreground/15">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Uvodne in redne cene paketov Stran na ključ, orodij in gostovanja
        </caption>
        <thead className="hidden md:table-header-group">
          <tr className="border-b border-foreground/15 font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
            <th scope="col" className="px-4 py-3 font-medium">Paket</th>
            <th scope="col" className="px-4 py-3 font-medium">Obseg</th>
            <th scope="col" className="px-4 py-3 font-medium">Uvodna cena</th>
            <th scope="col" className="px-4 py-3 font-medium">Redna cena</th>
          </tr>
        </thead>
        <tbody>
          {PRICE_ROWS.map((row) => (
            <tr
              key={row.name}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 border-b border-foreground/10 px-4 py-3 last:border-b-0 md:table-row md:px-0"
            >
              <th scope="row" className="col-start-1 row-start-1 font-medium text-foreground md:table-cell md:px-4 md:py-3">
                {row.name}
              </th>
              <td className="col-span-2 row-start-2 pt-1 text-muted-foreground md:table-cell md:px-4 md:py-3 md:pt-0">
                {row.scope}
              </td>
              <td className="col-start-2 row-start-1 text-right font-medium text-foreground md:table-cell md:px-4 md:py-3 md:text-left">
                {row.intro}
              </td>
              <td className="col-span-2 row-start-3 text-muted-foreground md:table-cell md:px-4 md:py-3">
                <span className="md:hidden">Redna cena </span>
                {row.regular}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
