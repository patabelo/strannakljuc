import Link from "next/link";

const FACTS = [
  { value: "5–7 dni", label: "do objavljene strani" },
  { value: "Ljutomer", label: "delo po vsej Sloveniji" },
  { value: "od 290 €", label: "uvodna cena za prve stranke" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-24">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.4fr)_16rem]">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-primary uppercase">
            01 — Izdelava
          </p>
          <h1 className="mt-5 max-w-[12ch] font-display text-[3.1rem] leading-[0.92] font-medium tracking-[-0.035em] text-balance sm:text-7xl">
            Spletne strani, ki spremenijo obiskovalce v stranke.
          </h1>
          <p className="mt-8 max-w-[38ch] text-lg leading-relaxed text-muted-foreground">
            Izdelam vam hitro in lepo spletno stran — eno stran ali več —
            brez odvečnih zapletov, s poudarkom na rezultatih in izkušnji na
            mobitelu.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#kontakt"
              className="bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              Naročite posvet
            </Link>
            <Link
              href="/#referencie"
              className="text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              Primeri strani
            </Link>
          </div>
        </div>

        <aside className="border-t border-foreground/20 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="font-display text-2xl leading-snug tracking-[-0.03em]">
            Na voljo za nove projekte v tem mesecu.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Delam sam. Pišete in kličete mene, ne posrednika. Odgovorim
            običajno v istem dnevu.
          </p>
        </aside>
      </div>

      <dl className="mt-16 grid border-y border-foreground/15 sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-foreground/15 py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:not-first:border-l"
          >
            <dt className="font-display text-2xl tracking-[-0.03em]">{fact.value}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
