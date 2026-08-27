import { FAQS, MAPS_LINK_URL, SITE, SOCIAL_LINKS } from "@/lib/site";

const BUSINESS_ID = `${SITE.url}/#business`;
const PERSON_ID = `${SITE.url}/#patrick-belcl`;
const WEBSITE_ID = `${SITE.url}/#website`;
const SERVICE_ID = `${SITE.url}/#izdelava-spletnih-strani`;
const CATALOG_ID = `${SITE.url}/#ponudba`;
const FAQ_ID = `${SITE.url}/#pogosta-vprasanja`;

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide graph: local business, person, service, website.
 * FAQ markup is separate — Google only wants FAQPage on pages that
 * actually show the questions. */
export function JsonLd() {
  const sameAs = SOCIAL_LINKS.map((link) => link.href);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
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
        slogan: "Spletne strani, ki spremenijo obiskovalce v stranke.",
        knowsLanguage: ["sl", "en"],
        hasMap: MAPS_LINK_URL,
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
          contactType: "sales",
          email: SITE.email,
          telephone: SITE.phoneTel,
          areaServed: "SI",
          availableLanguage: ["Slovenian", "English"],
        },
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        ...(sameAs.length > 0 ? { sameAs } : {}),
        hasOfferCatalog: { "@id": CATALOG_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE.person.name,
        jobTitle: "Oblikovalec in izdelovalec spletnih strani",
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phoneTel,
        worksFor: { "@id": BUSINESS_ID },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
        knowsAbout: [
          "Izdelava spletnih strani",
          "Spletno oblikovanje",
          "Mobilna prilagoditev",
          "Tehnična optimizacija za iskalnike",
        ],
        knowsLanguage: ["sl", "en"],
      },
      {
        "@type": "OfferCatalog",
        "@id": CATALOG_ID,
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
      {
        "@type": "Service",
        "@id": SERVICE_ID,
        name: "Izdelava spletnih strani za mala podjetja in obrtnike",
        serviceType: "Oblikovanje in izdelava spletnih strani",
        description: SITE.description,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "Country", name: "Slovenija" },
        audience: {
          "@type": "Audience",
          audienceType: "Mala podjetja, obrtniki in lokalne storitve",
        },
        hasOfferCatalog: { "@id": CATALOG_ID },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "sl-SI",
        description: SITE.description,
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}

/** FAQ rich results — only render on the homepage where the questions appear. */
export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": FAQ_ID,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLdScript data={data} />;
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

  return <JsonLdScript data={data} />;
}
