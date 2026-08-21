# Stran na ključ (strannakljuc.si)

Predstavitvena spletna stran za izdelavo landing strani in spletnih strani.
Zgrajena z [Next.js](https://nextjs.org), TypeScript, Tailwind CSS in
[shadcn/ui](https://ui.shadcn.com).

## Kaj vsebuje

- Temna, mobilno prilagojena predstavitvena stran
- Storitve, postopek, cenik (izdelava + mesečno/letno gostovanje)
- Trije živi **primeri sloga**: kavarna, fizioterapija, frizerski salon
- Kontakt z obrazcem, zemljevidom in politiko zasebnosti
- SEO: metapodatki, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD

## Zagon lokalno

```bash
npm install
npm run dev
```

Stran teče na [http://localhost:4127](http://localhost:4127).

```bash
npm run build
npm run start
npm run lint
```

## Struktura

```
src/app/(site)/          # glavna stran in politika zasebnosti (temna tema)
src/app/primeri/         # živi primeri sloga
src/components/site/     # sekcije glavne strani
src/lib/site.ts          # ime, kontakt, naslov, FAQ, demos
```

Kontakt, cene in primeri se urejajo v `src/lib/site.ts` ter
`src/components/site/pricing.tsx`.
