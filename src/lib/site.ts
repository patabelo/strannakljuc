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
    "Izdelava hitrih spletnih strani za mala podjetja v Sloveniji. Od ideje do objavljene strani na spletu v enem tednu.",
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
      "Cene se trenutno začnejo pri 290 € za enostransko spletno stran. Paket Standard do 5 podstrani stane 490 €, Premium do 10 podstrani pa 890 €. Končna cena je odvisna od vsebine in funkcij, zato pred začetkom vedno pripravim jasno ponudbo.",
  },
  {
    question: "Koliko časa traja izdelava spletne strani?",
    answer:
      "Enostavna spletna stran je običajno pripravljena v 5–7 delovnih dneh po tem, ko potrdimo vsebino in vizualni osnutek. Večje spletne strani z več podstranmi lahko trajajo od dva do tri tedne.",
  },
  {
    question: "Kako poteka sodelovanje na daljavo?",
    answer:
      "Uvodni pogovor opravimo po telefonu ali videoklicu. Osnutke vam pošljem v pregled, komentarje pa uskladimo po e-pošti ali na kratkem klicu, zato osebni obisk ni potreben.",
  },
  {
    question: "Ali imam potem možnost sam urejati vsebino?",
    answer:
      "Da. Glede na paket lahko stran opremim z enostavnim urejevalnikom vsebine, ali pa vam po objavi razložim, kako sami posodobite besedila in slike.",
  },
  {
    question: "Ali skrbite tudi za domeno in gostovanje?",
    answer:
      "Da. Po izdelavi lahko stran gostujem za vas z mesečno (29 €) ali letno (290 €) naročnino, ki vključuje gostovanje, .si domeno, varno povezavo (https), varnostne kopije in manjše popravke. Stran lahko gostujete tudi sami.",
  },
  {
    question: "Kaj če potrebujem samo eno stran, ne celotne spletne strani?",
    answer:
      "To je prav tiste vrste projekt, s katerim se največ ukvarjam. Enostranske spletne strani so primerne za promocijo enega izdelka, storitve ali dogodka in jih izdelam hitro ter učinkovito.",
  },
  {
    question: "Ali je stran prilagojena za mobilne telefone?",
    answer:
      "Vsaka stran, ki jo izdelam, je zasnovana najprej za mobilne naprave, saj tam prihaja večina obiskovalcev. Nato jo prilagodim za tablice in velike zaslone.",
  },
  {
    question: "Kako poteka plačilo?",
    answer:
      "Običajno se dogovorimo za predplačilo 50 % ob začetku projekta in preostanek ob predaji delujoče spletne strani. Za manjše projekte je možno tudi plačilo v celoti ob zaključku.",
  },
] as const;

export const DEMOS = [
  {
    slug: "kovinarstvo-meznaric",
    name: "Kovinarstvo Meznarič",
    category: "Kovinska dela",
    description:
      "Robustna stran za kovinarsko obrt — varjenje, ograje in kovinske konstrukcije po meri.",
    gradient: "from-zinc-500 via-slate-600 to-orange-500",
  },
  {
    slug: "mizarstvo-horvat",
    name: "Mizarstvo Horvat",
    category: "Mizarska dela",
    description:
      "Topla, lesena estetika za mizarstvo — pohištvo in izdelki po meri za dom.",
    gradient: "from-amber-700 via-amber-600 to-yellow-600",
  },
  {
    slug: "frizerski-salon-nika",
    name: "Frizerski salon Nika",
    category: "Lepotne storitve",
    description:
      "Eleganten frizerski salon s spletno rezervacijo termina in preglednim cenikom storitev.",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
  },
  {
    slug: "fasaderstvo-kocbek",
    name: "Fasaderstvo Kocbek",
    category: "Fasaderska dela",
    description:
      "Čista, arhitekturna stran za fasaderstvo — od toplotne izolacije do zaključnih ometov.",
    gradient: "from-stone-400 via-orange-400 to-amber-500",
  },
  {
    slug: "suhomontaza-vogrinec",
    name: "Suhomontaža Vogrinec",
    category: "Suhomontažna dela",
    description:
      "Pregledna, tehnična stran za suhomontažna dela, predelne stene in spuščene stropove.",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    slug: "gradbenistvo-krajnc",
    name: "Gradbeništvo Krajnc",
    category: "Gradbena dela",
    description:
      "Zanesljiva stran za gradbeno podjetje — od novogradenj do adaptacij in zemeljskih del.",
    gradient: "from-yellow-400 via-amber-500 to-zinc-700",
  },
  {
    slug: "avtolicarstvo-kovacic",
    name: "Avtoličarstvo Kovačič",
    category: "Avtoličarska dela",
    description:
      "Dinamična stran za avtoličarsko delavnico s sodelovanjem z zavarovalnicami.",
    gradient: "from-red-600 via-rose-600 to-zinc-800",
  },
] as const;
