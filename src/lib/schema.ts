import { SITE_URL, PHONE_NUMBER, FIRM_ADDRESS, type Locale } from "./constants";

export function localBusinessSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Times Up",
    description:
      locale === "en"
        ? "Woman-led Texas sexual assault and abuse law firm representing survivors in confidential civil cases."
        : "Firma de abogadas en Texas dirigida por una mujer que representa a sobrevivientes de agresión y abuso sexual en casos civiles confidenciales.",
    url: locale === "en" ? SITE_URL : `${SITE_URL}/es`,
    telephone: `+1${PHONE_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${FIRM_ADDRESS.street}, ${FIRM_ADDRESS.street2}`,
      addressLocality: FIRM_ADDRESS.city,
      addressRegion: FIRM_ADDRESS.state,
      postalCode: FIRM_ADDRESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: Replace with actual coordinates
      latitude: 30.2672,
      longitude: -97.7431,
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    priceRange: "Free Consultation",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    employee: [
      {
        "@type": "Attorney",
        name: "Laura Ramos James",
        jobTitle: locale === "en" ? "Sexual Assault Attorney" : "Abogada de Agresión Sexual",
      },
    ],
inLanguage: locale === "en" ? "en-US" : "es",
  };
}

export function cityLegalServiceSchema(city: string, state: string, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Times Up, ${city} Sexual Assault Lawyer`,
    description:
      locale === "en"
        ? `Sexual assault lawyer serving ${city}, ${state}. Free, confidential consultations for survivors of sexual assault and abuse.`
        : `Abogada de agresión sexual en ${city}, ${state}. Consultas gratuitas y confidenciales para sobrevivientes de agresión y abuso sexual.`,
    url: locale === "en" ? SITE_URL : `${SITE_URL}/es`,
    telephone: `+1${PHONE_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    priceRange: "Free Consultation",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    inLanguage: locale === "en" ? "en-US" : "es",
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
