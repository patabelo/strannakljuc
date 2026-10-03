import Link from "next/link";

import { RichText } from "@/components/site/rich-text";

const SERVICES: {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    title: "Enostranske spletne strani",
    description:
      "Ena stran z do **5 razdelki**: ponudba, območje in kontakt na istem zaslonu. To je paket **Osnovni**, uvodna cena **290 €**, rok **5–7 delovnih dni**.",
  },
  {
    title: "Spletne strani za podjetja",
    description:
      "Več podstrani: O nas, Storitve, Reference in Kontakt. **Standard** gre do **5 podstrani** za **490 €**. **Premium** gre do **10 podstrani**, z videzom po meri in jezikoma SLO/EN, za **890 €**.",
  },
  {
    title: "Prenova obstoječe strani",
    description:
      "Obstoječe besedilo in slike ohranimo. Zamenjam počasno ali neprilagojeno stran z novo, ki je najprej narejena za telefon.",
  },
  {
    title: "Strani za pred-naročila in dogodke",
    description:
      "Kratka stran za en izdelek, akcijo ali dogodek. Na njej sta odštevalnik, obrazec in en gumb za kontakt.",
  },
  {
    title: "Vidnost na Googlu",
    description:
      "**SEO** je optimizacija za Google. Poveča vidnost strani med klasičnimi iskalnimi zadetki. Poskrbim, da vas stranke najdejo prve, ko iščejo vaše storitve.",
  },
  {
    title: "Vidnost v odgovorih AI",
    description:
      "**GEO** je optimizacija za umetno inteligenco. Vsebino prilagodim, da ChatGPT, Gemini in Perplexity vaše podjetje izpostavijo v odgovorih in priporočilih.",
  },
  {
    title: "Vzdrževanje in dopolnitve",
    description:
      "Po objavi gostovanje vključuje do **2 manjša popravka na mesec** za **29 €**. Večja dopolnitev, na primer novo orodje, je ločena ponudba.",
  },
  {
    title: "Kalkulator ponudbe",
    description:
      "Stranka izbere fasaderstvo, kovinarstvo, gipsarijo ali strehe, vnese mere in vidi ceno po vašem ceniku. Ime in telefon ostaneta v obrazcu, povpraševanje pride na vaš e-naslov. Samo orodje stane **250 €**, z enostransko stranjo **540 €**.",
    href: "/aplikacija/kalkulatorji",
    linkLabel: "Odpri kalkulator ponudbe",
  },
  {
    title: "Zajem računov",
    description:
      "Fotografija ali PDF (do **20 MB**) se v brskalniku odpre v znesek, DDV, TRR in sklic, če so na dokumentu. Datoteka ne gre na strežnik. Podatke preverite in izvozite CSV za računovodjo. To ni oddaja na FURS. Samo orodje stane **350 €**, z enostransko stranjo **640 €**.",
    href: "/aplikacija/racuni",
    linkLabel: "Odpri zajem računov",
  },
];

export function Services() {
  return (
    <section id="storitve" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow="Storitve"
        title="Katere strani in orodja izdelam?"
        description="Osnovni paket je ena stran za 290 € v 5–7 dneh. Standard do 5 podstrani stane 490 €, Premium do 10 podstrani 890 €. Kalkulator ponudbe in zajem računov se dodata k novi ali že obstoječi strani."
      />

      <ol className="mt-12 border-t border-foreground/15">
        {SERVICES.map((service, index) => (
          <li
            key={service.title}
            className="grid gap-3 border-b border-foreground/15 py-6 sm:grid-cols-[4.5rem_minmax(0,0.8fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-8"
          >
            <span className="font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl tracking-[-0.02em]">{service.title}</h3>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                <RichText text={service.description} />
              </p>
              {service.href && service.linkLabel ? (
                <Link
                  href={service.href}
                  className="mt-2 inline-block text-sm text-primary underline-offset-4 hover:underline"
                >
                  {service.linkLabel}
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        <RichText text="**SEO** poskrbi za ljudi, ki guglajo. **GEO** za ljudi, ki odgovore iščejo z umetno inteligenco." />
      </p>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-6 border-t border-foreground/15 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
      <div>
        <p className="font-mono text-[0.72rem] tracking-[0.16em] text-primary uppercase">
          {index ? `${index} — ` : ""}
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl leading-[1.05] font-medium tracking-[-0.03em] text-balance sm:text-[2.6rem]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground lg:justify-self-end lg:pb-1">
          {description}
        </p>
      ) : null}
    </div>
  );
}
