export const SITE = {
  name: "Stran na ključ",
  shortName: "StranNaključ",
  domain: "strannakljuc.si",
  url: "https://strannakljuc.si",
  email: "patrick@strannakljuc.si",
  phoneDisplay: "070 914 756",
  phoneTel: "+38670914756",
  person: {
    name: "Patrick Belcl",
    legalName: "Patrick Belcl s.p.",
    vatPayer: false,
    initials: "PB",
  },
  address: {
    street: "Mota 51e",
    postalCode: "9240",
    city: "Ljutomer",
    region: "Pomurje",
    country: "SI",
    countryName: "Slovenija",
  },
  description:
    "Patrick Belcl s.p. iz Ljutomera izdela spletno stran v 5–7 dneh. Uvodna cena od 290 €. Kalkulator ponudbe in zajem računov.",
  // Leave empty until the profile exists — dummy "#" links hurt trust and SEO.
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
} as const;

export const SOCIAL_LINKS = (
  [
    { name: "Instagram", href: SITE.social.instagram },
    { name: "LinkedIn", href: SITE.social.linkedin },
    { name: "Facebook", href: SITE.social.facebook },
  ] as const
).filter((link) => link.href.length > 0);

export const FAQS = [
  {
    question: "Koliko stane izdelava spletne strani?",
    answer:
      "**Patrick Belcl s.p.** (Stran na ključ, Ljutomer) ima uvodne cene, dokler zbiram prve objavljene strani. **Osnovni** paket, ena stran z do 5 razdelki, stane **290 €** (redna cena 390 €). **Standard**, do 5 podstrani, stane **490 €** (690 €). **Premium**, do 10 podstrani, stane **890 €** (1190 €). Enostranska stran s kalkulatorjem ponudbe stane **540 €**, s zajemom računov **640 €**, z obema orodjema **780 €**. K že obstoječi strani kalkulator ponudbe stane **250 €**, zajem računov **350 €**, oboje **490 €**. Pred začetkom pripravim pisno ponudbo.",
  },
  {
    question: "Koliko časa traja izdelava spletne strani?",
    answer:
      "Enostranska stran je pripravljena v **5–7 delovnih dneh** po potrditvi vsebine in vizualnega osnutka. Stran z več podstranmi traja **2–3 tedne**.",
  },
  {
    question: "Kdo izdela spletno stran?",
    answer:
      "Stran izdela **Patrick Belcl s.p.**, Mota 51e, **9240 Ljutomer**. Telefon je **070 914 756**, e-pošta **patrick@strannakljuc.si**. Pišete in kličete njega, brez posrednika. Odgovor je običajno isti dan. Delo je po vsej Sloveniji, tudi na daljavo.",
  },
  {
    question: "Kaj je kalkulator ponudbe?",
    answer:
      "**Kalkulator ponudbe** stoji na strani obrtnika. Stranka izbere **fasaderstvo, kovinarstvo, gipsarijo ali strehe**, vnese mere in vidi okvirno ceno po ceniku, ki ga vnese lastnik. Nato pusti ime, telefon in e-pošto. Povpraševanje pride na e-pošto podjetja. Dokler lastnik ne shrani svojih cen, kalkulator pokaže slovensko povprečje in to tudi napiše. Orodje k obstoječi strani stane **250 €**, skupaj z enostransko stranjo **540 €**.",
  },
  {
    question: "Kaj je zajem računov?",
    answer:
      "**Zajem računov** prebere prejeti račun iz fotografije ali PDF (JPG, PNG, WEBP, HEIC ali PDF, do **20 MB**). Besedilo se prebere v brskalniku, datoteka ne gre na strežnik. Če so na dokumentu, izpiše izdajatelja, znesek, DDV, TRR in sklic. Praznih polj ne pokaže in manjkajočih podatkov ne doda. Lastnik znesek preveri in izvozi CSV za računovodjo. To ni oddaja na FURS. Orodje k obstoječi strani stane **350 €**, z enostransko stranjo **640 €**.",
  },
  {
    question: "Ali je stran narejena v WordPressu?",
    answer:
      "Ne. Stran je sestavljena vnaprej z **Next.js**, **React** in **TypeScript** ter gostuje na **Cloudflare**. Ob obisku strežnik pošlje že narejeno stran. Ni WordPressa, ni vtičnikov in ni baze, ki bi se odpirala ob vsakem kliku. Hitrost je eden od signalov, ki jih Google upošteva. Prvega mesta na Googlu ne obljubim.",
  },
  {
    question: "Kako poteka sodelovanje na daljavo?",
    answer:
      "Uvodni pogovor je po telefonu **070 914 756** ali po videoklicu z **Patrickom Belclom**. Osnutek pride v pregled, popravki po e-pošti **patrick@strannakljuc.si** ali na kratkem klicu. Obisk v Ljutomeru ni potreben.",
  },
  {
    question: "Ali lahko vsebino urejam sam?",
    answer:
      "Da. Glede na paket lahko vključim preprost urejevalnik, ali pa po objavi pokažem, kako zamenjate besedilo in slike. V gostovanju za **29 € na mesec** sta vključena do **2 manjša popravka**, ki jih naredim jaz.",
  },
  {
    question: "Ali skrbite tudi za domeno in gostovanje?",
    answer:
      "Da. Po objavi gostovanje stane **29 € na mesec** ali **290 € na leto**. Letno plačilo prihrani **58 €** glede na 12 mesecev po 29 €. Vključuje gostovanje, **.si domeno**, https, varnostne kopije in do 2 manjša popravka na mesec. Letni plan doda prednostno obravnavo popravkov in letni pregled vsebine. Stran lahko gostujete tudi sami. Sodelovanje ni pogoj za izdelavo.",
  },
  {
    question: "Kaj če potrebujem samo eno stran?",
    answer:
      "Paket **Osnovni** je ena stran z do **5 vsebinskih razdelkov**, kontaktnim obrazcem in osnovno pripravo za Google. Uvodna cena je **290 €**, rok je **5–7 delovnih dni**.",
  },
  {
    question: "Ali je stran prilagojena za mobilne telefone?",
    answer:
      "Da. Vsaka stran je najprej narejena za telefon, nato za tablico in velik zaslon. Večina obiskov pride z mobitela.",
  },
  {
    question: "Kako poteka plačilo?",
    answer:
      "Običajno je **50 %** ob začetku in **50 %** ob predaji delujoče strani. Manjši projekt se lahko plača v celoti ob zaključku. Plačilo je z nakazilom. **Patrick Belcl s.p.** ni davčni zavezanec za DDV.",
  },
] as const;

export { DEMOS } from "@/lib/crafts";
