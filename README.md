# ZagonStudio — Landing Page

Predstavitvena (landing) spletna stran za samostojnega izdelovalca spletnih
strani in landing strani. Zgrajena z [Next.js](https://nextjs.org),
TypeScript, Tailwind CSS in [shadcn/ui](https://ui.shadcn.com).

## Kaj vsebuje stran

- **Hero sekcija** z jasno ponudbo, statistiko in klici k dejanju
- **Storitve** — pregled ponudbe (landing strani, spletne strani, prenove, SEO, vzdrževanje)
- **Kako deluje** — proces sodelovanja v 4 korakih
- **Primeri dela** — vitrina primerov projektov
- **Cenik** — trije paketi (Osnovni, Standard, Premium)
- **Mnenja strank** — pričevanja
- **Pogosta vprašanja** — raztegljiv seznam (accordion)
- **Kontakt** — obrazec za povpraševanje in kontaktni podatki
- Popolnoma odzivna zasnova (mobitel, tablica, namizje) z mobilnim meniem

## Tehnologije

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (komponente na osnovi [Base UI](https://base-ui.com))
- [lucide-react](https://lucide.dev) za ikone

## Zagon lokalno

```bash
npm install
npm run dev
```

Stran bo na voljo na [http://localhost:4127](http://localhost:4127).

Ostali ukazi:

```bash
npm run build   # produkcijski build
npm run start   # zagon produkcijskega buila
npm run lint    # ESLint preverjanje
```

## Struktura projekta

```
src/
  app/
    layout.tsx       # osnovni layout, metapodatki, pisave
    page.tsx          # sestavlja vse sekcije strani
    globals.css       # Tailwind + shadcn tokeni in tematika
  components/
    site/             # sekcije strani (Hero, Storitve, Cenik, ...)
    ui/               # shadcn/ui gradniki (Button, Card, Sheet, ...)
  lib/
    utils.ts          # pomožne funkcije (npr. `cn`)
```

## Prilagajanje vsebine

Vsa vsebina (besedila, cene, primeri projektov, pogosta vprašanja) je v
komponentah znotraj `src/components/site/`. Vsako sekcijo lahko urejate
neodvisno od drugih — vsaka je svoja datoteka s podatki na vrhu (npr.
`SERVICES`, `PLANS`, `FAQS`), ki jih preprosto prilagodite svoji ponudbi.

Barvna shema (indigo → fuksija gradient) je nastavljena preko Tailwind
razredov neposredno v komponentah, osnovne barve vmesnika (ozadje,
obroba, besedilo) pa preko CSS spremenljivk v `src/app/globals.css`.
