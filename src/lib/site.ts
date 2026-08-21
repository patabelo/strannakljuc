export const SITE = {
  name: "Stran na ključ",
  shortName: "StranNaključ",
  domain: "strannakljuc.si",
  url: "https://strannakljuc.si",
  email: "patrick.belcl.web@gmail.com",
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
    country: "SI",
    countryName: "Slovenija",
  },
  mapsQuery: "Mota 51e, 9240 Ljutomer, Slovenija",
  description:
    "Izdelava hitrih, lepih in prodajno usmerjenih landing strani ter spletnih strani za mala podjetja in podjetnike v Sloveniji. Od ideje do žive strani v nekaj dneh.",
} as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;

export const FAQS = [
  {
    question: "Koliko časa traja izdelava spletne strani?",
    answer:
      "Enostavna landing stran je običajno pripravljena v 5–7 delovnih dneh po tem, ko potrdimo vsebino in design. Večje spletne strani z več podstranmi lahko trajajo od dva do tri tedne.",
  },
  {
    question: "Ali imam potem možnost sam urejati vsebino?",
    answer:
      "Da. Glede na paket lahko stran opremim z enostavnim urejevalnikom vsebine, ali pa vam po zagonu razložim, kako sami posodobite besedila in slike.",
  },
  {
    question: "Ali skrbite tudi za domeno in gostovanje?",
    answer:
      "Da. Po izdelavi lahko stran gostujem za vas z mesečno (29 €) ali letno (290 €) naročnino, ki vključuje gostovanje, .si domeno, SSL certifikat, varnostne kopije in manjše popravke. Stran lahko gostujete tudi sami.",
  },
  {
    question: "Kaj če potrebujem samo eno stran, ne celotne spletne strani?",
    answer:
      "To je prav tiste vrste projekt, s katerim se največ ukvarjam. Landing strani so idealne za promocijo enega izdelka, storitve ali dogodka in jih izdelam hitro in učinkovito.",
  },
  {
    question: "Ali je stran prilagojena za mobilne telefone?",
    answer:
      "Vsaka stran, ki jo izdelam, je zasnovana najprej za mobilne naprave, saj tam prihaja večina obiskovalcev. Nato jo prilagodim za tablice in velike zaslone.",
  },
  {
    question: "Kako poteka plačilo?",
    answer:
      "Običajno se dogovorimo za predplačilo 50 % ob začetku projekta in preostanek ob predaji žive strani. Za manjše projekte je možno tudi plačilo v celoti ob zaključku.",
  },
] as const;

export const DEMOS = [
  {
    slug: "kavarna-urban",
    name: "Kavarna Urban",
    category: "Gostinstvo",
    description:
      "Topla landing stran za lokalno kavarno z jutranjo ponudbo, urami in rezervacijo mize.",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
  },
  {
    slug: "fizioterapija-vitalis",
    name: "Fizioterapija Vitalis",
    category: "Zdravstvene storitve",
    description:
      "Mirna, zaupanja vredna predstavitvena stran za ordinacijo z jasnimi storitvami in naročanjem.",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    slug: "studio-lucia",
    name: "Studio Lucia",
    category: "Lepotne storitve",
    description:
      "Elegantna stran za frizerski salon s storitvami, ceniki in klicem k rezervaciji termina.",
    gradient: "from-fuchsia-400 via-pink-400 to-rose-400",
  },
] as const;
