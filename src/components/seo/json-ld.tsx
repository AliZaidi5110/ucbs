import React from "react";
import { HOME_FAQS, SITE, absoluteUrl } from "@/lib/seo";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.legalName,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: absoluteUrl("/logo.png"),
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  sameAs: [] as string[],
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.legalName,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/logo.png"),
  description: SITE.defaultDescription,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.8028,
    longitude: -4.9622,
  },
  areaServed: "GB",
  priceRange: "$$",
  parentOrganization: {
    "@id": `${SITE.url}/#organization`,
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.defaultDescription,
  inLanguage: "en-GB",
  publisher: {
    "@id": `${SITE.url}/#organization`,
  },
};

export const globalSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, localBusinessSchema, websiteSchema],
};

export function generateServiceSchema(
  title: string,
  description: string,
  url: string,
  imagePath?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: {
      "@id": `${SITE.url}/#localbusiness`,
    },
    serviceType: title,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    url,
    ...(imagePath ? { image: absoluteUrl(imagePath) } : {}),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function generateFaqSchema(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
    about: {
      "@id": `${SITE.url}/#organization`,
    },
    inLanguage: "en-GB",
  };
}

export const homeFaqSchema = generateFaqSchema(HOME_FAQS);

export function generateItemListSchema(
  items: { name: string; url: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UCBS Business Services",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}
