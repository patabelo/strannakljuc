# Stran na ključ (strannakljuc.si)

Predstavitvena spletna stran za izdelavo spletnih strani.
Zgrajena z [Next.js](https://nextjs.org), TypeScript, Tailwind CSS in
[shadcn/ui](https://ui.shadcn.com).

## Kaj vsebuje

- Temna, mobilno prilagojena predstavitvena stran
- Storitve, postopek, cenik (izdelava + mesečno/letno gostovanje)
- Sedem **primerov sloga** za obrtnike in lokalna podjetja
- Kontakt z obrazcem, zemljevidom in politiko zasebnosti
- Vidnost na Googlu: metapodatki, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD

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
gostovati na katerikoli storitvi za statične strani. Ko poganjaš `npm run build`,
dobiš v mapi `out/` vse HTML/CSS/JS datoteke.

Projekt je povezan s Cloudflare Workerjem **`strannakljuc`** preko
[Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) (Git
integracija) — vsak push na `main` samodejno sproži nov build in deploy.
Konfiguracija je v `wrangler.jsonc`, ki poganja Worker s statičnimi datotekami
iz `./out` (brez ločenega Worker skripta).

Da Workers Builds deploy uspe, mora biti v Cloudflare nadzorni plošči pod
**Worker `strannakljuc` → Settings → Builds → Build configuration** nastavljen:

| Nastavitev | Vrednost |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` (privzeto) |

Za vezavo domene:

1. Dodaj domeno `strannakljuc.si` v svoj Cloudflare račun (Cloudflare postane
   avtoritativni DNS strežnik).
2. Pri registrarju domene nastavi Cloudflare-jeve nameserverje, ki jih dobiš
   po dodajanju domene.
3. Pod Worker `strannakljuc` → **Settings → Domains & Routes** dodaj
   `strannakljuc.si` (in po želji `www.strannakljuc.si`) kot custom domain —
   Cloudflare samodejno uredi DNS zapise in izda SSL certifikat.

Za lokalni preizkus deploya (potrebna prijava `npx wrangler login`):

```bash
npm run build
npx wrangler deploy
```

## Struktura

```
src/app/(site)/          # glavna stran in politika zasebnosti (temna tema)
src/app/primeri/         # živi primeri sloga
src/components/site/     # vsebinski razdelki glavne strani
src/lib/site.ts          # ime, kontakt, naslov, FAQ, demos
```

Kontakt, cene in primeri se urejajo v `src/lib/site.ts` ter
`src/components/site/pricing.tsx`.
