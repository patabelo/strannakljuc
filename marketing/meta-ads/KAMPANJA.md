# Meta Ads kampanja — Stran na ključ

Profesionalni studio paket za zagon oglaševanja na Facebooku in Instagramu.

| Polje | Vrednost |
| --- | --- |
| Blagovna znamka | Stran na ključ (Patrick Belcl s.p.) |
| Cilj kampanje | Leads — povpraševanja prek spletnega obrazca |
| Landing | https://strannakljuc.si/#kontakt |
| Alternativa | https://strannakljuc.si/#cenik |
| Jezik | Slovenščina |
| Geografija | Slovenija (+ opcijsko 25 km okoli Ljutomera za lokalni test) |

---

## 1. Struktura računa (Campaign → Ad set → Ad)

### Kampanja A — `SNK \| Leads \| Cold \| SLO`

- **Objective:** Leads (Website) ali Traffic → Landing page views, če Pixel še ni zrel
- **Buying type:** Auction
- **Special ad categories:** None (razen če Meta zahteva housing/employment — tukaj ne)
- **Budget tip:** Campaign Budget Optimization (CBO) ali ABO na ad setih

### Ad seti

| Ad set | Namen | Optimizacija | Dnevni proračun (priporočilo) |
| --- | --- | --- | --- |
| `AS1 \| Advantage+ / Broad SLO` | Učenje, široka dostava — **zaženi najprej** | Landing page views → po 15+ konverzijah Leads | 8–10 € |
| `AS2 \| Obrtniki & lokalne storitve` | Interesi — vključite po 7–10 dneh, če AS1 dela | Landing page views | 4–5 € |
| `AS3 \| Remarketing 7–30 dni` | Obiskovalci strani — šele ko je nekaj prometa | Landing page views / Leads | 2–3 € |

**Skupaj za zagon:** **8–10 €/dan** (samo AS1 + 3 oglasi) · prvih 10–14 dni.  
Kasneje, če želite razširiti: do ~15 €/dan z AS2/AS3.

### Adi (ustvarjalni testi)

V vsakem cold ad setu zaženite 3 oglase (1 vizual × 1 kot), nato po 5–7 dneh izklopite najslabša 2.

| Ad | Kot | Creative | Format |
| --- | --- | --- | --- |
| `AD1 \| Cena 290` | Ponudba / cena | `creatives/meta-oglas-cena-1x1.jpg` | Feed 1:1 |
| `AD2 \| Hitrost 5–7 dni` | Rok / zaupanje | `creatives/meta-oglas-hitrost-4x5.jpg` | Feed 4:5 |
| `AD3 \| Kalkulator` | Produkt / orodje | `creatives/meta-oglas-kalkulator-9x16.jpg` | Stories / Reels 9:16 |

---

## 2. Ciljne publike

### AS1 — Broad (priporočeni prvi zagon)

- Lokacija: Slovenija
- Starost: 28–55
- Spol: Vsi
- Jezik: Slovenščina
- Detailed targeting: **off** (Advantage+ audience)
- Placements: Advantage+ (Feed + Stories + Reels)

### AS2 — Obrtniki & mala podjetja

- Lokacija: Slovenija
- Starost: 30–60
- Interesi / vedenja (stack OR):
  - Small business owners
  - Entrepreneurship
  - Web design / Website builders
  - Construction / Home improvement (za kalkulator kot)
  - Online advertising (lastniki, ki že oglašujejo)
- Exclusion: obiskovalci zadnjih 7 dni (da ne kanibalizira remarketinga)

### AS3 — Remarketing

- Custom audience: Website visitors 7 / 14 / 30 dni
- Exclusion: Purchase / Lead (če boste imeli event)
- Frequency cap občutek: ne bombardirajte (Meta sam omejuje; ne podvajajte ad setov)

### Kasneje (po 30+ leadih)

- Lookalike 1 % SLO iz seznama leadov / konverzij
- Value lookalike, če je dovolj podatkov

---

## 3. Besedila oglasov (pripravljeno za paste)

### AD1 — Cena (primary)

**Primary text**

```
Spletna stran, ki jo stranka razume v treh sekundah.

Sem Patrick Belcl s.p. — Stran na ključ.
Enostransko stran izdelam v 5–7 dneh.
Uvodna cena: od 290 €.

Pišete mene. Brez agencije. Brez posrednika.
Odgovorim običajno isti dan.
```

**Headline:** Spletna stran od 290 €  
**Description:** 5–7 dni do objave · po vsej Sloveniji  
**CTA:** Learn more / Contact us → „Naročite posvet“ (če na voljo)

### AD2 — Hitrost

**Primary text**

```
Od zamisli do objavljene strani v enem tednu.

Ni WordPressa. Ni vtičnikov.
Stran sestavim vnaprej (Next.js) in jo objavim na Cloudflare.

Primerno za s.p., zasebnike in mala podjetja,
ki potrebujejo jasno ponudbo in kontakt, ki dela na telefonu.
```

**Headline:** Od zamisli do objave v 5–7 dneh  
**Description:** Patrick Belcl · Ljutomer · delo po Sloveniji  
**CTA:** Learn more

### AD3 — Kalkulator ponudbe

**Primary text**

```
Stranka na vaši strani vnese mere in vidi okvirno ceno.
Vi dobite ime, telefon in e-pošto.

Kalkulator ponudbe za fasaderstvo, kovinarstvo, gipsarijo in strehe.
Samo orodje: 250 € · z enostransko stranjo: 540 €.

Povpraševanje pride neposredno vam.
```

**Headline:** Kalkulator ponudbe na vaši strani  
**Description:** Stranka vidi ceno · vi dobite kontakt  
**CTA:** Learn more  
**Link (opcijsko):** https://strannakljuc.si/aplikacija/kalkulatorji

---

## 4. UTM in merjenje

### URL-ji z UTM

```
https://strannakljuc.si/?utm_source=meta&utm_medium=paid_social&utm_campaign=snk_leads_cold&utm_content=ad1_cena#kontakt
https://strannakljuc.si/?utm_source=meta&utm_medium=paid_social&utm_campaign=snk_leads_cold&utm_content=ad2_hitrost#kontakt
https://strannakljuc.si/?utm_source=meta&utm_medium=paid_social&utm_campaign=snk_leads_cold&utm_content=ad3_kalkulator#kontakt
```

### Pixel / Events (nujno pred skaliranjem)

1. Meta Pixel na `strannakljuc.si` (Cloudflare / Meta Pixel Helper preverba)
2. Standard event: `Lead` ob uspešnem pošiljanju `/api/povprasevanje`
3. PageView na vseh straneh
4. ViewContent na `#cenik` (opcijsko)

### KPI za prvih 14 dni

| Metrika | Cilj (orientacija) |
| --- | --- |
| CPM | spremljajte, ne optimizirajte prenaglo |
| CTR (link) | > 1,0 % |
| CPC | < 0,80 € (SLO cold) |
| CPL (cena na lead) | < 25–40 € na začetku |
| Kakovost leada | odgovor v 24 h, ≥ 1 kvalifikni posvet / teden |

Če je CTR < 0,7 % po 3.000 prikazih → zamenjajte creative.  
Če je CTR OK, a CPL visok → preverite landing / obrazec / hitrost odgovora.

---

## 5. Studio pravila (kakovost)

1. **En oglas = eno sporočilo.** Ne mešajte cene, orodij in gostovanja v istem oglasu.
2. **Prva vrstica mora delati na mobitelu** — 125 znakov pred „Več“.
3. **Brez lažnih obljub** („1. mesto na Googlu“, „garantiran ROI“).
4. **Isti vizualni jezik kot splet** — temno nebo, topel papirnati tekst, oranžni poudarek, brez vijolične neon estetike.
5. **Frekvenca:** po 7+ frekvenci na cold → osvežite creative.
6. **Odgovorite leadom isti dan** — Meta traffic brez hitrega odgovora zgori denar.

---

## 6. Checklist za zagon v Ads Managerju

- [ ] Business Manager + Facebook Page + Instagram povezava
- [ ] Domains verified (strannakljuc.si) za iOS tracking
- [ ] Pixel nameščen + Lead event testiran
- [ ] Payment method aktiven
- [ ] Naloženi creativi iz `creatives/`
- [ ] 3 oglasi z besedili zgoraj
- [ ] UTM na vseh URL-jih
- [ ] Proračun 25–40 €/dan, 10–14 dni brez večjih posegov
- [ ] Tedenski pregled: CTR, CPC, CPL, kakovost leadov

---

## 7. Datoteke

| Datoteka | Namen |
| --- | --- |
| `creatives/meta-oglas-cena-1x1.jpg` | Feed / carousel square |
| `creatives/meta-oglas-hitrost-4x5.jpg` | Feed portrait |
| `creatives/meta-oglas-kalkulator-9x16.jpg` | Stories / Reels |
| `oglasi-copy.txt` | Besedila za hitro kopiranje |
| `utm-povezave.txt` | Pripravljene UTM povezave |

---

## 8. Naslednji korak (po zagonu)

Ko pride prvih 10–15 povpraševanj: sporočite, kateri oglas je zmagal — pripravim drugo generacijo creativov (A/B) in lookalike setup.
