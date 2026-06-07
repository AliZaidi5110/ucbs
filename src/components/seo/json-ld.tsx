import React from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Ready-to-use Local Business schema for UCBS
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Utility Concepts Business Solutions Ltd",
  "alternateName": "UCBS",
  "url": "https://www.ucbsltd.co.uk/",
  "logo": "https://www.ucbsltd.co.uk/logo.png",
  "image": "https://www.ucbsltd.co.uk/og-image.jpg",
  "description": "Utility Concepts Business Solutions (UCBS) helps small and growing UK businesses compare, review, and manage business utilities, card payments, telecoms, funding, insurance, and banking.",
  "telephone": "+44 1437 957009",
  "email": "info@ucbsltd.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Scotchwell View",
    "addressLocality": "Haverfordwest",
    "addressRegion": "Pembrokeshire, Wales",
    "postalCode": "SA61 2RE",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.8028,
    "longitude": -4.9622
  },
  "areaServed": "GB",
  "priceRange": "$$"
};

// Generates dynamic Service schema for SEO
export function generateServiceSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Utility Concepts Business Solutions Ltd",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Scotchwell View",
        "addressLocality": "Haverfordwest",
        "addressRegion": "Pembrokeshire, Wales",
        "postalCode": "SA61 2RE",
        "addressCountry": "GB"
      }
    },
    "serviceType": "Business Consultation",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "url": url
  };
}

// Generates dynamic Article schema for Blog SEO
export function generateArticleSchema(
  title: string,
  excerpt: string,
  url: string,
  datePublished: string,
  authorName: string = "Himadhar Alahari",
  imageUrl: string = "https://www.ucbsltd.co.uk/og-image.jpg"
) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": title,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Utility Concepts Business Solutions Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ucbsltd.co.uk/logo.png"
      }
    },
    "description": excerpt
  };
}
