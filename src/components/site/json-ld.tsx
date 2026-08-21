import { ADDRESS_LINE, FAQS, SITE } from "@/lib/site";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    email: SITE.email,
    telephone: SITE.phoneTel,
    priceRange: "€€",
    description: SITE.description,
    areaServed: {
      "@type": "Country",
      name: "Slovenia",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    founder: {
      "@type": "Person",
      name: SITE.person.name,
      email: SITE.email,
      telephone: SITE.phoneTel,
      jobTitle: "Izdelovalec spletnih strani",
      knowsLanguage: ["sl", "de", "en"],
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Izdelava spletnih strani",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Osnovni — landing stran",
          price: "290",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Standard — spletna stran",
          price: "490",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Premium — spletna stran po meri",
          price: "890",
          priceCurrency: "EUR",
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
    name: SITE.name,
    url: SITE.url,
    inLanguage: "sl-SI",
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      email: SITE.email,
      telephone: SITE.phoneTel,
      address: ADDRESS_LINE,
    },
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
