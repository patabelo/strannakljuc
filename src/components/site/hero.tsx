import Link from "next/link";

const FACTS = [
  { value: "5–7 dni", label: "od potrditve do objave" },
  { value: "Slovenija", label: "delo na daljavo, sedež v Ljutomeru" },
  { value: "od 290 €", label: "uvodna izdelava za prve naročnike" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-6 sm:px-8 sm:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.18em] text-primary uppercase">
            Studio za spletne strani
          </p>
          <h1 className="mt-5 max-w-[11em] font-display text-[2.7rem] leading-[0.96] font-medium tracking-[-0.04em] sm:text-6xl lg:text-[4.15rem]">
            Stran, ki vaše podjetje naredi vidno.
          </h1>
          <p className="mt-7 max-w-[40ch] text-lg leading-relaxed text-muted-foreground">
            Oblikujem in izdelam spletno stran, ki na mobitelu deluje, se
            hitro odpre in obiskovalca pripelje do klica ali povpraševanja.
            Od ideje do objave, brez posrednikov.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#kontakt"
              className="bg-foreground px-5 py-3.5 text-sm text-background transition-colors hover:bg-primary"
            >
              Naročite stran
            </Link>
            <Link
              href="/#referencie"
              className="text-sm underline decoration-foreground/30 underline-offset-[5px] hover:decoration-foreground"
            >
              Oglejte si primere
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Novi projekti ta mesec. Odgovor običajno še isti dan.
          </p>
        </div>

        <PreviewFrame />
      </div>

      <dl className="mt-16 grid border-y border-foreground/15 sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-foreground/15 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:not-first:border-l"
          >
            <dt className="font-display text-[1.7rem] tracking-[-0.03em]">{fact.value}</dt>
            <dd className="mt-1 max-w-[22ch] text-sm leading-snug text-muted-foreground">
              {fact.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function PreviewFrame() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -top-6 -right-3 hidden h-24 w-24 border border-primary/40 sm:block"
      />
      <div className="relative overflow-hidden border border-foreground/15 bg-[#f7f3ec] shadow-[0_30px_70px_-36px_rgba(28,22,16,0.55)]">
        <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="ml-3 font-mono text-[0.65rem] tracking-wide text-muted-foreground">
            vase-podjetje.si
          </span>
        </div>
        <div className="grid sm:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="font-mono text-[0.62rem] tracking-[0.16em] text-primary uppercase">
              Lokalna storitev
            </p>
            <p className="mt-4 font-display text-3xl leading-[1.02] tracking-[-0.03em] sm:text-4xl">
              Delo, ki ga stranka razume v treh sekundah.
            </p>
            <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
              Ponudba, območje in klic na enem zaslonu. Brez iskanja po meniju.
            </p>
            <div className="mt-6 inline-block bg-foreground px-3 py-2 text-xs text-background">
              Pokličite
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[#1c1916] px-6 py-8 text-[#f4efe6]">
            <p className="font-mono text-[0.62rem] tracking-[0.16em] text-[#f4efe6]/50 uppercase">
              Na strani
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="border-t border-white/15 pt-3">Storitve, jasno razložene</li>
              <li className="border-t border-white/15 pt-3">Cene brez drobnega tiska</li>
              <li className="border-t border-white/15 pt-3">Kontakt, ki dela na mobitelu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
