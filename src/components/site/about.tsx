import Link from "next/link";
import { MapPin, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function About() {
  return (
    <section
      id="o-meni"
      className="border-t border-border bg-muted/30 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div
            aria-hidden
            className="flex size-36 rotate-[-3deg] items-center justify-center rounded-full border-2 border-ink bg-card font-display text-4xl font-medium text-primary italic shadow-[4px_4px_0_0_var(--ink)] sm:size-44"
          >
            {SITE.person.initials}
          </div>
          <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
            {SITE.person.name}
          </h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            {SITE.person.legalName} · {SITE.name}
          </p>
        </div>

        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {"// O meni"}
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Spletne strani izdelujem, ker me to veseli
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground sm:text-lg">
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

          <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              Ljutomer, Pomurje · sodelovanje po vsej Sloveniji
            </li>
            <li className="flex items-center gap-2">
              <User className="size-4 text-primary" />
              Popoldanski s.p. — odgovorim sam, običajno v istem dnevu
            </li>
          </ul>

          <Button
            className="shine-hover mt-8 border-[1.5px] border-ink bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--ink)]"
            nativeButton={false}
            render={<Link href="/#kontakt" />}
          >
            Pišite mi
          </Button>
        </div>
      </div>
    </section>
  );
}
