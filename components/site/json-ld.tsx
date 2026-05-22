import { site } from "@/lib/site";

export function LegalServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${site.url}#legalservice`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.telephone,
    email: site.email,
    image: `${site.url}/og-default.jpg`,
    priceRange: "Free Consultation — Contingency Fee",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(site.social),
    serviceType: [
      "Motorcycle Accident Litigation",
      "Personal Injury",
      "Wrongful Death",
      "Catastrophic Injury",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe here — values are static and trusted from site config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type JsonLdProps = { data: Record<string, unknown> };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
