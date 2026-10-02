import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/site-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kako delam spletne strani",
  description:
    "Spletne strani izdelam vnaprej, brez WordPressa in vtičnikov. Zato se odprejo hitreje, kar Google upošteva pri uvrstitvi.",
  alternates: { canonical: "/kako-delam" },
  openGraph: {
    title: "Kako delam spletne strani",
    description:
      "Kaj točno dobite: končano stran, ne sistema z vtičniki. Hitrejše odpiranje in jasen signal za Google.",
    url: "/kako-delam",
  },
};

const STACK = [
  {
    name: "HTML",
    text: "Jezik, v katerem je zapisano besedilo in zgradba strani. To bere brskalnik.",
  },
  {
    name: "CSS",
    text: "Jezik videza: barve, razmiki, pisava in kako se stran prilagodi telefonu.",
  },
  {
    name: "TypeScript",
    text: "Programski jezik, v katerem zapišem delovanje strani. Napake ulovim, preden stran objavim.",
  },
  {
    name: "React",
    text: "Način, kako stran sestavim iz kosov: naslov, cenik, obrazec. Vsak kos ima eno nalogo.",
  },
  {
    name: "Next.js",
    text: "Orodje, ki iz teh kosov naredi končne strani, pripravljene za objavo.",
  },
  {
    name: "Cloudflare",
    text: "Gostovanje. Stran stoji blizu obiskovalca, povezava je varna (https).",
  },
];

export default function HowIBuildPage() {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] text-primary uppercase">
          Kako delam
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Kako so narejene moje spletne strani
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Dobite končano spletno stran, ne programa, ki ga je treba vsakič
          znova sestavljati. Stran je pripravljena vnaprej, zato se na
          telefonu odpre hitro. To je tudi tisto, kar Google meri.
        </p>

        <section className="mt-14 space-y-3">
          <h2 className="font-display text-2xl tracking-[-0.03em]">Kaj točno dobite</h2>
          <p className="leading-relaxed text-muted-foreground">
            Stran z vašo vsebino, prilagojeno telefonu, z naslovom, opisom in
            kontaktom. Ni skritega sistema v ozadju, ki bi ga morali
            vzdrževati z vtičniki. Če kasneje želite spremembo, jo naredim
            jaz — to je dolgoročno sodelovanje, ne dodatna šola za vas.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            Iz česa je stran narejena
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            To so jeziki in orodja. Imena niso pomembna zato, da bi jih
            znali. Pomembna so zato, da veste, kaj je v strani in česa v njej
            ni.
          </p>
          <dl className="mt-6 border-t border-white/15">
            {STACK.map((item) => (
              <div
                key={item.name}
                className="grid gap-1 border-b border-white/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="font-medium text-foreground">{item.name}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            Zakaj je to hitreje od običajnega WordPressa
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Običajna WordPress stran ob vsakem obisku delo opravi na
            strežniku: odpre bazo, požene vtičnike in šele nato pošlje stran
            brskalniku. Več vtičnikov pomeni več čakanja.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Moja stran je sestavljena vnaprej. Strežnik pošlje že narejeno
            stran. Ni baze, ki bi se odpirala ob vsakem kliku, in ni
            vtičnikov, ki bi se nalagali za vsakega obiskovalca.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Razlika, ki jo stranka občuti: stran se pokaže takoj, ne po
            praznem zaslonu.
          </p>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            Kaj to pomeni za Google
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Google meri, kako hitro se stran pokaže, posebej na telefonu.
            Hitrejša stran je plus pri uvrstitvi. Ni obljuba, da boste prvi
            na seznamu — na to vplivajo tudi vsebina, konkurenca in to, ali
            na vas kdo poveže. Hitrost pa je eden od signalov, ki jih Google
            upošteva, in je pri meni vgrajena že v način izdelave.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Poleg hitrosti uredim naslov strani, kratek opis in zgradbo, da
            Google ve, o čem stran govori. To je osnova, brez katere vas
            iskalnik težko pravilno pokaže.
          </p>
        </section>

        <section className="mt-12 border-t border-white/15 pt-8">
          <h2 className="font-display text-2xl tracking-[-0.03em]">Česa ne obljubim</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ne obljubim prvega mesta na Googlu. Obljubim stran, ki se naloži
            hitro, je jasna vašim strankam in je tehnično pripravljena, da jo
            Google lahko prebere.
          </p>
          <Link
            href="/#kontakt"
            className="mt-8 inline-block bg-foreground px-5 py-3 text-sm text-background"
          >
            Naročite posvet
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            {SITE.person.name} · {SITE.phoneDisplay}
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
