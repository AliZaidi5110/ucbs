import type { Metadata } from "next";

const siteUrl = "https://www.ucbsltd.co.uk";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UCBS | UK Card Machines & Fast Business Funding £5k–£500k",
    template: "%s | UCBS Ltd",
  },
  description:
    "Cut card processing fees by up to 40% with £0 upfront terminals and access flexible UK business funding from £5,000 to £500,000 approved in 24 hours. Repayments flex with your sales.",
  keywords: [
    "card machines UK",
    "merchant cash advance",
    "business funding UK",
    "card terminal business loans",
    "cut card processing fees",
    "unsecured SME loans",
    "next day payout card machine",
    "portable card machine 4G",
    "business telecoms",
    "commercial energy",
  ],
  authors: [{ name: "Utility Concepts Business Solutions Ltd" }],
  creator: "Utility Concepts Business Solutions Ltd",
  publisher: "UCBS Ltd",
  formatDetection: { email: true, address: true, telephone: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "UCBS Ltd - Business Solutions",
    title: "UCBS | UK Card Machines & Fast Business Funding",
    description:
      "Cut card machine fees by 40% & access flexible business funding from £5k to £500k approved in 24 hours with a 90%+ acceptance rate.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UCBS Card Machines and Business Funding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UCBS | UK Card Machines & Fast Business Funding",
    description:
      "Cut card machine fees by 40% & access flexible business funding from £5k to £500k approved in 24 hours.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Utility Concepts Business Solutions Ltd",
      url: siteUrl,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "UCBS Ltd",
    alternateName: "Utility Concepts Business Solutions Ltd",
    description:
      "Specialist UK commercial broker for merchant card machines, business cash advances, business telecoms, and energy comparison.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Haverfordwest",
      addressLocality: "Pembrokeshire",
      postalCode: "SA61 2RE",
      addressCountry: "UK",
    },
    priceRange: "££",
    telephone: "+442922716852",
    email: "info@ucbsltd.co.uk",
  };
}
