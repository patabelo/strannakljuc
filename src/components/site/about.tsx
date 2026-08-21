import Link from "next/link";
import { Languages, MapPin, User } from "lucide-react";

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
            className="flex size-36 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-4xl font-semibold text-white shadow-lg sm:size-44"
          >
            {SITE.person.initials}
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight">
            {SITE.person.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {SITE.person.legalName} · {SITE.name}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
            {SITE.person.languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium capitalize"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
            O meni
          </span>
          <h3 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Spletne strani izdelujem, ker me to veseli
          </h3>
          <div className="mt-5 space-y-4 text-muted-foreground sm:text-lg">
            <p>
              Sem Patrick. Strani sestavljam zato, ker mi je všeč spremeniti
              zmedeno idejo v nekaj, kar stranka razume v treh sekundah — in
              ker vem, kako težko je malemu poslu sploh priti na splet.
            </p>
            <p>
              Delam za podjetnike, obrtnike in lokalne storitve, ki še nimajo
              digitalne prisotnosti ali imajo staro, počasno stran. Cilj ni
              “imeti spletno stran”. Cilj je, da vas ljudje najdejo, razumejo
              kaj ponujate, in vas kontaktirajo.
            </p>
            <p>
              Sem popoldanski s.p. iz Ljutomera. Ni klicnega centra in ni
              posrednikov — pišete in kličete mene. Delam po celi Sloveniji,
              pogovorimo se lahko v slovenščini, nemščini ali angleščini.
            </p>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-indigo-400" />
              Mota, 9240 Ljutomer · delo po vsej Sloveniji
            </li>
            <li className="flex items-center gap-2">
              <Languages className="size-4 text-indigo-400" />
              SL · DE · EN
            </li>
            <li className="flex items-center gap-2">
              <User className="size-4 text-indigo-400" />
              Popoldanski s.p. — odgovorim sam, običajno v istem dnevu
            </li>
          </ul>

          <Button
            className="mt-8 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-90"
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
