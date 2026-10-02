import Link from "next/link";

import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="o-meni" className="border-y border-foreground/15 bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-background/55 uppercase">
            04 — O meni
          </p>
          <p className="mt-6 font-display text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
            {SITE.person.initials}
          </p>
          <p className="mt-6 font-display text-2xl tracking-[-0.03em]">
            {SITE.person.name}
          </p>
          <p className="mt-2 text-sm text-background/65">
            {SITE.person.legalName}
            <br />
            Ljutomer · delo po vsej Sloveniji
          </p>
        </div>

        <div>
          <h2 className="max-w-[18ch] font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-4xl">
            Spletne strani izdelujem, ker me to veseli
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[0.98rem] leading-relaxed text-background/75">
            <p>
              Sem Patrick. Strani sestavljam zato, ker mi je všeč spremeniti
              zmedeno idejo v nekaj, kar stranka razume v treh sekundah — in
              ker vem, kako težko je malemu poslu sploh priti na splet.
            </p>
            <p>
              Delam za podjetnike, obrtnike in lokalne storitve, ki še nimajo
              strani na spletu ali imajo staro, počasno stran. Cilj ni
              “imeti spletno stran”. Cilj je, da vas ljudje najdejo, razumejo
              kaj ponujate, in vas kontaktirajo.
            </p>
            <p>
              Sem popoldanski s.p. iz Ljutomera. Ni klicnega centra in ni
              posrednikov — pišete in kličete mene. Delam po celi Sloveniji.
            </p>
          </div>
          <Link
            href="/#kontakt"
            className="mt-8 inline-block border-b border-background/40 pb-0.5 text-sm hover:border-background"
          >
            Pišite mi
          </Link>
        </div>
      </div>
    </section>
  );
}
