import Link from "next/link";

import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="o-meni" className="border-y border-white/10 text-foreground">
      <div className="glass-panel mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-foreground/60 uppercase">
            O meni
          </p>
          <p className="mt-6 font-display text-4xl leading-none tracking-[-0.04em] sm:text-5xl">
            {SITE.person.name}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/72">
            {SITE.person.legalName}
            <br />
            Ljutomer · naročila po vsej Sloveniji
          </p>
        </div>

        <div>
          <h2 className="max-w-[18ch] font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-[2.7rem]">
            Kdo sem?
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-foreground/84">
            <p>
              Sem <strong className="font-semibold text-foreground">Patrick Belcl s.p.</strong> iz
              Ljutomera (Mota 51e, 9240). Spletne strani izdelujem pod imenom Stran
              na ključ. Stran naredim sam, brez agencije in brez posrednika.
            </p>
            <p>
              Delam za samostojne podjetnike, zasebnike, d.o.o. in večja
              podjetja, ki strani še nimajo ali imajo staro. Dobite stran, na
              kateri je ponudba razumljiva in je kontakt na telefonu dosegljiv.
            </p>
            <p>
              Sem popoldanski s.p. Ni klicnega centra. Telefon je 070 914 756,
              e-pošta patrick@strannakljuc.si. Delam po vsej Sloveniji. Nisem
              davčni zavezanec za DDV.
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
