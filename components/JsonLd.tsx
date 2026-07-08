import { SERVICE_AREAS, SITE } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    image: `${SITE.domain}/logo.svg`,
    url: SITE.domain,
    telephone: SITE.phoneHref,
    email: SITE.email,
    priceRange: "$$",
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
