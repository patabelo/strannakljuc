import { FAQS, SITE } from "@/lib/site";

function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function HomepageJsonLd() {
  const business = {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    image: `${SITE.url}/opengraph-image`,
    email: SITE.email,
    telephone: SITE.phoneTel,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Bančno nakazilo",
    description: SITE.description,
    slogan: "Spletne strani, ki spremenijo obiskovalce v stranke.",
    knowsLanguage: ["sl", "en"],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Ljutomer" },
      { "@type": "AdministrativeArea", name: "Pomurje" },
      { "@type": "Country", name: "Slovenija" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Prodaja in podpora",
      email: SITE.email,
      telephone: SITE.phoneTel,
      areaServed: "SI",
      availableLanguage: ["sl", "en"],
    },
    founder: { "@id": `${SITE.url}/#patrick-belcl` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${SITE.url}/#ponudba`,
      name: "Izdelava spletnih strani",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Osnovni — ena spletna stran",
            description:
              "Ena osredotočena spletna stran (do 5 vsebinskih razdelkov), prilagojena mobilnim napravam, z osnovno optimizacijo za Google iskalnik in kontaktnim obrazcem.",
          },
          price: "290",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard — spletna stran za podjetje",
            description:
              "Spletna stran do 5 podstrani z boljšo vidnostjo na Googlu, pregledom obiskov in 30 dni podpore po objavi.",
          },
          price: "490",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium — spletna stran po meri",
            description:
              "Spletna stran do 10 podstrani z videzom po meri, vidnostjo na Googlu, hitrejšim nalaganjem in 90 dni podpore.",
          },
          price: "890",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mesečno gostovanje in vzdrževanje",
            description:
              "Gostovanje, .si domena, varna povezava (https), varnostne kopije in manjši mesečni popravki vsebine.",
          },
          price: "29",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "29",
            priceCurrency: "EUR",
            billingDuration: "P1M",
          },
        },
      ],
    },
  };

  const person = {
    "@type": "Person",
    "@id": `${SITE.url}/#patrick-belcl`,
    name: SITE.person.name,
    jobTitle: "Oblikovalec in izdelovalec spletnih strani",
    worksFor: { "@id": `${SITE.url}/#business` },
    knowsAbout: [
      "Izdelava spletnih strani",
      "Spletno oblikovanje",
      "Mobilna prilagoditev",
      "Tehnična optimizacija za iskalnike",
    ],
  };

  const service = {
    "@type": "Service",
    "@id": `${SITE.url}/#izdelava-spletnih-strani`,
    name: "Izdelava spletnih strani za mala podjetja in obrtnike",
    serviceType: "Oblikovanje in izdelava spletnih strani",
    description: SITE.description,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "Country", name: "Slovenija" },
    audience: {
      "@type": "Audience",
      audienceType: "Mala podjetja, obrtniki in lokalne storitve",
    },
    hasOfferCatalog: { "@id": `${SITE.url}/#ponudba` },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#pogosta-vprasanja`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "sl-SI",
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#business` },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [business, person, service, website, faq],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

/** Renders a BreadcrumbList so Google can show a breadcrumb trail in
 * search results instead of the raw URL — used on /primeri and each
 * individual example page. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
