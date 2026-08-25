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
npm run build   # generira statično stran v mapi `out/`
npm run start   # predogled izvoza iz `out/` na http://localhost:3000
npm run lint
```

## Objava na strannakljuc.si

Stran je 100 % statična (`output: "export"` v `next.config.ts`), zato jo je mogoče
gostovati na katerikoli storitvi za statične strani (Cloudflare Pages, Vercel,
Netlify, GitHub Pages ...). Ko poganjaš `npm run build`, dobiš v mapi `out/`
vse HTML/CSS/JS datoteke, ki jih naložiš na gostovanje.

Primer za **Cloudflare Pages**:

```bash
npm run build
npx wrangler pages deploy out --project-name strannakljuc
```

Nato v Cloudflare nadzorni plošči:

1. Dodaj domeno `strannakljuc.si` v svoj Cloudflare račun (Cloudflare postane
   avtoritativni DNS strežnik).
2. Pri registrarju domene nastavi Cloudflare-jeve nameserverje, ki jih dobiš
   po dodajanju domene.
3. V projektu Pages pod **Custom domains** dodaj `strannakljuc.si` (in po
   želji `www.strannakljuc.si`) — Cloudflare samodejno uredi DNS zapise in
   izda SSL certifikat.

Enak `out/` izvoz lahko naložiš tudi na Vercel/Netlify in tam v nastavitvah
projekta dodaš domeno `strannakljuc.si` ter pri registrarju usmeriš DNS
zapise (A/CNAME) v skladu z njihovimi navodili.

## Struktura

```
src/app/(site)/          # glavna stran in politika zasebnosti (temna tema)
src/app/primeri/         # živi primeri sloga
src/components/site/     # sekcije glavne strani
src/lib/site.ts          # ime, kontakt, naslov, FAQ, demos
```

Kontakt, cene in primeri se urejajo v `src/lib/site.ts` ter
`src/components/site/pricing.tsx`.
