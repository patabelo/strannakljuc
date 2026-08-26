import { FAQS, SITE } from "@/lib/site";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
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
    paymentAccepted: "Bank transfer",
    description: SITE.description,
    slogan: "Prodajne spletne strani, ki spremenijo obiskovalce v stranke.",
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
      contactType: "customer service",
      email: SITE.email,
      telephone: SITE.phoneTel,
      areaServed: "SI",
      availableLanguage: ["Slovenian", "English"],
    },
    founder: {
      "@type": "Person",
      name: SITE.person.name,
      jobTitle: "Izdelovalec spletnih strani",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Izdelava spletnih strani",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Osnovni — ena prodajna spletna stran",
            description:
              "Ena osredotočena prodajna spletna stran (do 5 vsebinskih razdelkov), prilagojena mobilnim napravam, z osnovno optimizacijo za Google iskalnik in kontaktnim obrazcem.",
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

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "sl-SI",
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
