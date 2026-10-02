import Link from "next/link";

import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="o-meni" className="border-y border-white/10 bg-black/50 text-foreground backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-foreground/55 uppercase">
            Studio
          </p>
          <p className="mt-6 font-display text-4xl leading-none tracking-[-0.04em] sm:text-5xl">
            {SITE.person.name}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/65">
            {SITE.person.legalName}
            <br />
            Ljutomer · naročila po vsej Sloveniji
          </p>
        </div>

        <div>
          <h2 className="max-w-[16ch] font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-[2.7rem]">
            Ena oseba. Celotna izdelava.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-foreground/78">
            <p>
              Stran na ključ je studio za mala podjetja in obrtnike. Naročilo
              ne gre skozi agencijo: pogovor, osnutek, izdelava in objava
              ostanejo pri meni.
            </p>
            <p>
              Stran je narejena zato, da vas ljudje najdejo, v nekaj sekundah
              razumejo ponudbo in vas kontaktirajo. Na mobitelu enako jasno
              kot na računalniku.
            </p>
            <p>
              Kot s.p. sem vaš neposredni izvajalec. Pišete in kličete mene.
              Odgovorim sam, običajno še isti dan.
            </p>
          </div>
          <Link
            href="/#sodelovanje"
            className="mt-8 inline-block border-b border-foreground/40 pb-0.5 text-sm hover:border-foreground"
          >
            Dolgoročno sodelovanje
          </Link>
        </div>
      </div>
    </section>
  );
}
