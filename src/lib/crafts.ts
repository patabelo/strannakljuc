export type Craft = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  trade: string;
  headline: string;
  lead: string;
  phone: string;
  phoneDisplay: string;
  cta: string;
  accent: string;
  services: string[];
};

export const CRAFTS: Craft[] = [
  {
    slug: "kovinarstvo-meznaric",
    name: "Kovinarstvo Meznarič",
    category: "Kovinska dela",
    description:
      "Varjenje, ograje in kovinske konstrukcije. Temno ozadje delavnice in jekla.",
    image: "/demos/kovinarstvo.jpg",
    imageAlt: "Zvar in jeklene konstrukcije v kovinarski delavnici",
    trade: "Kovinarska obrt",
    headline: "Kovina, ki zdrži desetletja.",
    lead: "Ograje, nadstreški, vrata in konstrukcije. Varjenje, rezanje in montaža na terenu.",
    phone: "+38631222333",
    phoneDisplay: "031 222 333",
    cta: "Ponudba za konstrukcijo",
    accent: "#f97316",
    services: [
      "Varjenje in kovinske konstrukcije",
      "Ograje, vrata in nadstreški",
      "Kovinska stopnišča",
      "Ključavničarska dela",
      "Popravila kmetijske mehanizacije",
      "Montaža na terenu",
    ],
  },
  {
    slug: "mizarstvo-horvat",
    name: "Mizarstvo Horvat",
    category: "Mizarska dela",
    description:
      "Pohištvo in les po meri. Toplo ozadje mizarske delavnice.",
    image: "/demos/mizarstvo.jpg",
    imageAlt: "Hrastove deske in oblanci v mizarski delavnici",
    trade: "Mizarska obrt",
    headline: "Les, obdelan po meri prostora.",
    lead: "Kuhinje, omare, mize in vrata iz masivnega lesa. Od izmere do vgradnje.",
    phone: "+38641333222",
    phoneDisplay: "041 333 222",
    cta: "Brezplačna izmera",
    accent: "#e7c27a",
    services: [
      "Kuhinje po meri",
      "Pohištvo po naročilu",
      "Vgradne omare",
      "Terase in lesene ograje",
      "Notranja vrata",
      "Obnova starega pohištva",
    ],
  },
  {
    slug: "frizerski-salon-nika",
    name: "Frizerski salon Nika",
    category: "Lepotne storitve",
    description:
      "Striženje, barvanje in termini. Ozadje je notranjost salona.",
    image: "/demos/frizer.jpg",
    imageAlt: "Svetel frizerski salon z ogledalom in stolom",
    trade: "Frizerski salon",
    headline: "Videz, ki ostane urejen.",
    lead: "Striženje, barvanje in nega. Termin se rezervira po telefonu, cenik je na strani.",
    phone: "+38651444555",
    phoneDisplay: "051 444 555",
    cta: "Rezervirajte termin",
    accent: "#e7c4b0",
    services: [
      "Striženje in styling",
      "Barvanje",
      "Pramenčki in balayage",
      "Nega las",
      "Pričeska za posebne priložnosti",
    ],
  },
  {
    slug: "fasaderstvo-kocbek",
    name: "Fasaderstvo Kocbek",
    category: "Fasaderska dela",
    description:
      "Toplotna izolacija in zaključni ometi. Ozadje je sveža fasada.",
    image: "/demos/fasada.jpg",
    imageAlt: "Sveže ometana fasada hiše v dnevni svetlobi",
    trade: "Fasaderska dela",
    headline: "Fasada, ki hišo zapre in polepša.",
    lead: "Izolacija, omet in sanacija vlage. Od ogleda objekta do zaključnega sloja.",
    phone: "+38641555666",
    phoneDisplay: "041 555 666",
    cta: "Ogled objekta",
    accent: "#e6d3b3",
    services: [
      "Toplotna izolacija fasad",
      "Silikatni in silikonski ometi",
      "Sanacija razpok in vlage",
      "Dekorativni ometi",
      "Energetske sanacije",
    ],
  },
  {
    slug: "suhomontaza-vogrinec",
    name: "Suhomontaža Vogrinec",
    category: "Suhomontažna dela",
    description:
      "Predelne stene in stropovi. Ozadje je čist, sveže obdelan prostor.",
    image: "/demos/suhomontaza.jpg",
    imageAlt: "Svetel prostor s sveže obdelanimi mavčnimi stenami",
    trade: "Suhomontažna dela",
    headline: "Ravne stene. Čist prostor.",
    lead: "Predelne stene, spuščeni stropovi in mansarde. Meritev, izvedba in zaključna obdelava.",
    phone: "+38631777888",
    phoneDisplay: "031 777 888",
    cta: "Zahtevajte izmero",
    accent: "#d5e4f2",
    services: [
      "Predelne stene",
      "Spuščeni stropovi",
      "Izolacija mansard",
      "Protipožarne stene",
      "Akustične obloge",
    ],
  },
  {
    slug: "gradbenistvo-krajnc",
    name: "Gradbeništvo Krajnc",
    category: "Gradbena dela",
    description:
      "Novogradnje, adaptacije in zemeljska dela. Ozadje je gradbišče.",
    image: "/demos/gradbenistvo.jpg",
    imageAlt: "Gradbišče z betonom in lesenim opažem v večerni svetlobi",
    trade: "Gradbena dela",
    headline: "Od temeljev do strehe.",
    lead: "Novogradnje, adaptacije in zemeljska dela. En izvajalec vodi celoten potek.",
    phone: "+38641666777",
    phoneDisplay: "041 666 777",
    cta: "Povprašajte za objekt",
    accent: "#f0c14a",
    services: [
      "Novogradnje",
      "Adaptacije in prenove",
      "Zemeljska in betonska dela",
      "Ostrešja",
      "Zunanja ureditev",
    ],
  },
  {
    slug: "avtolicarstvo-kovacic",
    name: "Avtoličarstvo Kovačič",
    category: "Avtoličarska dela",
    description:
      "Kleparska in ličarska dela. Ozadje je lakirnica z avtomobilom.",
    image: "/demos/avtolicarstvo.jpg",
    imageAlt: "Karoserija v lakirnici, temno rdeč lak",
    trade: "Avtoličarska delavnica",
    headline: "Lak, ki spet izgleda nov.",
    lead: "Kleparska popravila, barvanje in škoda po nesreči. Sodelovanje z zavarovalnicami.",
    phone: "+38651888999",
    phoneDisplay: "051 888 999",
    cta: "Prijavite škodo",
    accent: "#f05252",
    services: [
      "Kleparska popravila",
      "Ličarska dela in barvanje",
      "Poliranje laka",
      "Popravilo po nesreči",
      "Sodelovanje z zavarovalnicami",
    ],
  },
];

export function getCraft(slug: string) {
  return CRAFTS.find((craft) => craft.slug === slug);
}

/** Fields the rest of the site needs: cards, sitemap, index. */
export const DEMOS = CRAFTS.map((craft) => ({
  slug: craft.slug,
  name: craft.name,
  category: craft.category,
  description: craft.description,
  image: craft.image,
  imageAlt: craft.imageAlt,
}));
