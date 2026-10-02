const SERVICES = [
  {
    title: "Enostranske spletne strani",
    description:
      "Ena osredotočena stran za vaš izdelek, storitev ali dogodek — zasnovana tako, da obiskovalce pripelje do povpraševanja ali nakupa.",
  },
  {
    title: "Spletne strani za podjetja",
    description:
      "Predstavitvena spletna stran z več podstranmi: O nas, Storitve, Reference, Kontakt — urejena, hitra in enostavna za posodabljanje.",
  },
  {
    title: "Prenova obstoječe strani",
    description:
      "Vašo staro stran posodobim v sodoben, hiter in mobilno prijazen izgled — brez izgube vsebine, ki jo že imate.",
  },
  {
    title: "Strani za pred-naročila in dogodke",
    description:
      "Kratke, udarne strani za predstavitev novega izdelka, akcijo ali dogodek — z odštevalnikom, obrazcem in jasnim gumbom za kontakt.",
  },
  {
    title: "Vidnost na Googlu",
    description:
      "Poskrbim za naslove, opise strani, hitrost nalaganja in strukturo, da vas lažje najdejo na Googlu.",
  },
  {
    title: "Vzdrževanje in dopolnitve",
    description:
      "Po objavi strani pomagam z manjšimi spremembami, novo vsebino ali dodatnimi funkcijami, ko jih potrebujete.",
  },
];

export function Services() {
  return (
    <section id="storitve" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow="Storitve"
        title="Vse, kar potrebujete za nastop na spletu"
        description="Od prve ideje do objavljene strani na spletu — vodim vas skozi celoten postopek, brez tehničnega žargona. Za mala podjetja, velika podjetja in vse vmes."
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
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              {service.description}
            </p>
          </li>
        ))}
      </ol>
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
