import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site/footer";
import { RichText } from "@/components/site/rich-text";
import { SiteHeader } from "@/components/site/site-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kako je narejena spletna stran",
  description:
    "Strani ne delam v WordPressu. Next.js stran sestavim vnaprej in jo objavim na Cloudflare, zato ob obisku ni baze in ni vtičnikov.",
  alternates: { canonical: "/kako-delam" },
  openGraph: {
    title: "Kako je narejena spletna stran",
    description:
      "Next.js stran sestavim vnaprej in jo objavim na Cloudflare. Običajni WordPress stran zgradi ob vsakem obisku.",
    url: "/kako-delam",
  },
};

const TAKEAWAYS = [
  "Stran sestavim vnaprej. Ob obisku strežnik pošlje že narejeno stran.",
  "V strani ni **WordPressa**, ni vtičnikov in ni baze, ki bi se odpirala ob vsakem kliku.",
  "Izdelana je z **HTML**, **CSS**, **TypeScript**, **React** in **Next.js**. Gostuje na **Cloudflare**.",
  "Hitrost je eden od signalov, ki jih Google upošteva. Prvega mesta na Googlu ne obljubim.",
];

const STACK = [
  {
    name: "HTML",
    text: "Jezik zgradbe. V njem so naslovi, odstavki, cenik in obrazec. To bere brskalnik.",
  },
  {
    name: "CSS",
    text: "Jezik videza: barve, razmiki, pisava in prelom za telefon, tablico in velik zaslon.",
  },
  {
    name: "TypeScript",
    text: "Jezik, v katerem je zapisano delovanje. Napake se pokažejo pred objavo, ne pri obiskovalcu.",
  },
  {
    name: "React",
    text: "Način sestavljanja strani iz kosov. Naslov, cenik in obrazec imajo vsak svojo nalogo.",
  },
  {
    name: "Next.js",
    text: "Orodje, ki iz teh kosov naredi končne strani, pripravljene za objavo, preden jih kdo odpre.",
  },
  {
    name: "Cloudflare",
    text: "Gostovanje. Stran stoji blizu obiskovalca, povezava je https.",
  },
];

const COMPARE = [
  ["Kdaj nastane stran", "Vnaprej, ob izdelavi", "Ob vsakem obisku na strežniku"],
  ["Baza ob kliku", "Ne", "Da, običajno"],
  ["Vtičniki ob obisku", "Ne", "Da, vsak doda delo"],
  ["Gostovanje", "Cloudflare", "Odvisno od ponudnika"],
  ["Kaj obiskovalec občuti", "Stran se pokaže takoj", "Pogosto kratek prazen zaslon"],
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
          Kako je narejena spletna stran
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          <RichText text="Strani ne delam v WordPressu. Stran sestavim vnaprej z **Next.js** in jo objavim na **Cloudflare**. Ob obisku strežnik pošlje že narejeno stran, zato na telefonu ni čakanja na bazo in vtičnike." />
        </p>

        <section className="mt-10" aria-labelledby="poudarki-izdelave">
          <h2 id="poudarki-izdelave" className="font-display text-2xl tracking-[-0.03em]">
            Ključni poudarki
          </h2>
          <ul className="mt-4 space-y-3">
            {TAKEAWAYS.map((item) => (
              <li key={item} className="border-t border-white/15 pt-3 text-sm leading-relaxed text-muted-foreground">
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="font-display text-2xl tracking-[-0.03em]">Zakaj stran ni v WordPressu?</h2>
          <p className="leading-relaxed text-muted-foreground">
            Običajna WordPress stran ob vsakem obisku delo opravi na strežniku:
            odpre bazo, požene vtičnike in šele nato pošlje stran brskalniku.
            Več vtičnikov pomeni več čakanja.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Stran sestavim vnaprej. Strežnik pošlje že narejen
            HTML. Ni baze, ki bi se odpirala ob vsakem kliku, in ni vtičnikov,
            ki bi se nalagali za vsakega obiskovalca.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            Kako se to razlikuje od običajnega WordPressa?
          </h2>
          <div className="mt-4 overflow-x-auto border border-white/15">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Primerjava vnaprej sestavljene strani in običajnega WordPressa
              </caption>
              <thead>
                <tr className="border-b border-white/15 font-mono text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase">
                  <th scope="col" className="px-4 py-3 font-medium"> </th>
                  <th scope="col" className="px-4 py-3 font-medium">Stran na ključ</th>
                  <th scope="col" className="px-4 py-3 font-medium">Običajni WordPress</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 last:border-b-0">
                    <th scope="row" className="px-4 py-3 font-medium text-foreground">{row[0]}</th>
                    <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="font-display text-2xl tracking-[-0.03em]">Kaj dobite ob predaji?</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
            <li>Končano stran z vašo vsebino, naslovom, opisom in kontaktom.</li>
            <li>Prilagoditev najprej za telefon, nato za tablico in velik zaslon.</li>
            <li>Objavo na vaši domeni z https.</li>
            <li>Brez skritega sistema, ki bi ga morali vzdrževati z vtičniki.</li>
          </ul>
          <p className="leading-relaxed text-muted-foreground">
            Kasnejšo spremembo naredim jaz. To je gostovanje za 29 € na
            mesec, z do 2 manjšima popravkoma, ne tečaj za urejanje WordPressa.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            Iz česa je stran narejena?
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Imena orodij povedo, kaj je v strani in česa v njej ni. Naročniku
            jih ni treba znati uporabljati.
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
            Kaj od hitrosti dobi Google?
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Google meri, kako hitro se stran pokaže, posebej na telefonu.
            Hitrejša stran je plus pri uvrstitvi. Na mesto vplivajo tudi
            vsebina, konkurenca in to, ali na stran kdo poveže.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Poleg hitrosti uredim naslov, kratek opis in zgradbo, da Google ve,
            o čem stran govori. To je osnova, brez katere iskalnik stran težko
            pravilno pokaže.
          </p>
        </section>

        <section className="mt-12 border-t border-white/15 pt-8">
          <h2 className="font-display text-2xl tracking-[-0.03em]">Česa ne obljubim?</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Ne obljubim prvega mesta na Googlu. Obljubim stran, ki se naloži
            hitro, je jasna stranki in je tehnično pripravljena, da jo Google
            lahko prebere.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block bg-foreground px-5 py-3 text-sm text-background"
          >
            Naročite posvet
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            {SITE.person.legalName} · {SITE.phoneDisplay} · {SITE.email}
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
