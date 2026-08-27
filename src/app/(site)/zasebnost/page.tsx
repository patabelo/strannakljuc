import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/footer";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Politika zasebnosti",
  description: `Kako ${SITE.name} obdeluje osebne podatke ob povpraševanju prek spletne strani.`,
  path: "/zasebnost",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          {"// Pravno"}
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Politika zasebnosti
        </h1>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          Zadnja posodobitev: 27. avgust 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">Upravljavec</h2>
            <p>
              Upravljavec osebnih podatkov je {SITE.person.legalName},{" "}
              {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city},{" "}
              {SITE.address.countryName}. Ni davčni zavezanec za DDV. Kontakt:{" "}
              <a className="text-foreground underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              , tel. {SITE.phoneDisplay}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Katere podatke zbiram
            </h2>
            <p>
              Če izpolnite obrazec za povpraševanje, obdelam ime, e-poštni naslov
              in vsebino sporočila. Če me pokličete ali pišete neposredno, obdelam
              podatke, ki jih prostovoljno posredujete. Če dovolite analitiko,
              Google Analytics obdela tehnične podatke o obisku, kot so obiskana
              stran, vrsta naprave, približna lokacija in vir obiska.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Namen in pravna podlaga
            </h2>
            <p>
              Kontaktne podatke uporabljam za odgovor na vaše povpraševanje in
              pripravo ponudbe. Analitične podatke uporabljam samo za razumevanje
              uporabe strani in izboljšanje vsebine. Pravna podlaga je vaše
              soglasje in/ali ukrepi pred sklenitvijo pogodbe (člen 6(1)(a) in
              6(1)(b) GDPR).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Dostava sporočil
            </h2>
            <p>
              Za tehnično dostavo kontaktnih sporočil uporabljam storitev{" "}
              <a
                className="text-foreground underline"
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </a>
              . Podatki iz obrazca se tej storitvi posredujejo izključno za
              dostavo e-pošte in odgovor na vaše povpraševanje.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Spletna analitika
            </h2>
            <p>
              Google Analytics 4 se naloži šele, ko izrecno dovolite analitične
              piškotke. Brez soglasja se Googlova oznaka ne prenese in podatki o
              obisku se Googlu ne pošljejo. Oglaševalsko shranjevanje in
              prilagajanje oglasov ostaneta izklopljena.
            </p>
            <p>
              Več o Googlovi obdelavi podatkov najdete v{" "}
              <a
                className="text-foreground underline"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googlovi politiki zasebnosti
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">Hramba</h2>
            <p>
              Sporočila hranim toliko časa, kolikor je potrebno za komunikacijo o
              projektu, nato pa jih zbrišem, razen če zakon zahteva daljšo hrambo
              (npr. računovodski dokumenti po sklenjenem poslu).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">
              Vaše pravice
            </h2>
            <p>
              Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave,
              ugovora in prenosljivosti podatkov ter pravico, da soglasje
              prekličete. Pritožbo lahko vložite tudi pri Informacijskem
              pooblaščencu RS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-medium text-foreground">Piškotki</h2>
            <p>
              Brez vašega soglasja stran ne uporablja analitičnih piškotkov. Če
              analitiko dovolite, lahko Google Analytics nastavi piškotke
              <code className="mx-1 text-foreground">_ga</code> in
              <code className="mx-1 text-foreground">_ga_*</code>. Vaša izbira
              se shrani v lokalni pomnilnik brskalnika. Kadarkoli jo lahko
              spremenite prek povezave »Nastavitve analitike« v nogi strani.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm">
          <Link href="/" className="text-primary hover:underline">
            ← Nazaj na domačo stran
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
