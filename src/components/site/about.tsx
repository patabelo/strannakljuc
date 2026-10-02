import Link from "next/link";

import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="o-meni" className="border-y border-white/10 bg-black/50 text-foreground backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-foreground/55 uppercase">
            O meni
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
          <h2 className="max-w-[18ch] font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-[2.7rem]">
            Spletne strani izdelujem, ker me to veseli
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-foreground/78">
            <p>
              Sem Patrick. Strani sestavljam zato, ker mi je všeč spremeniti
              zmedeno idejo v nekaj, kar stranka razume v treh sekundah — in
              ker vem, kako težko je malemu poslu sploh priti na splet.
            </p>
            <p>
              Delam za vse. Za male podjetnike in zasebnike, za d.o.o. in za
              večja podjetja, ki še nimajo strani ali imajo staro, počasno
              stran. Cilj ni “imeti spletno stran”. Cilj je, da vas ljudje
              najdejo, razumejo kaj ponujate, in vas kontaktirajo.
            </p>
            <p>
              Sem popoldanski s.p. iz Ljutomera. Ni klicnega centra in ni
              posrednikov — pišete in kličete mene. Delam po celi Sloveniji.
              Po objavi lahko sodelovanje nadaljujeva dolgoročno.
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
