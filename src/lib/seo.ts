import type { Metadata } from "next";

export const SITE = {
  name: "UCBS Ltd",
  legalName: "Utility Concepts Business Solutions Ltd",
  shortName: "UCBS",
  url: "https://www.ucbsltd.co.uk",
  locale: "en_GB",
  defaultTitle:
    "UCBS Ltd | UK Business Energy, Merchant Services & Cost Savings",
  defaultDescription:
    "Utility Concepts Business Solutions (UCBS) helps UK SMEs compare business energy, card payments, broadband, funding, waste, water, and digital marketing. Free, no-obligation cost reviews.",
  defaultKeywords: [
    "UCBS",
    "Utility Concepts Business Solutions",
    "business energy comparison UK",
    "merchant services UK",
    "business utility broker",
    "card payment terminals UK",
    "business broadband comparison",
    "commercial waste management UK",
    "business funding introducer",
    "water bill audit UK",
    "SME cost savings",
    "Haverfordwest business consultant",
  ] as string[],
  ogImage: "/logo.png",
  twitterHandle: undefined as string | undefined,
  phone: "+44 1437 957009",
  email: "info@ucbsltd.co.uk",
  address: {
    street: "12 Scotchwell View",
    locality: "Haverfordwest",
    region: "Pembrokeshire, Wales",
    postalCode: "SA61 2RE",
    country: "GB",
  },
} as const;

export const SERVICE_SLUGS = [
  "merchant-services",
  "business-funding",
  "business-energy",
  "broadband-telecoms",
  "waste-management",
  "water-bills",
  "digital-marketing",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const HOME_FAQS = [
  {
    question: "What does UCBS Ltd do?",
    answer:
      "UCBS Ltd (Utility Concepts Business Solutions) is a UK business consultancy that compares and audits commercial contracts for energy, card payments, telecoms, funding, waste, water, and digital marketing to help SMEs reduce costs.",
  },
  {
    question: "Is a UCBS business cost review free?",
    answer:
      "Yes. UCBS offers free, no-obligation reviews of your business utilities and merchant services. There are no upfront management fees for our comparison and audit service.",
  },
  {
    question: "Which UK business services does UCBS cover?",
    answer:
      "UCBS covers business energy, merchant services and card terminals, broadband and telecoms, business funding introductions, commercial waste management, water bill audits, and digital marketing and web design.",
  },
  {
    question: "Where is UCBS Ltd based?",
    answer:
      "UCBS Ltd is based at 12 Scotchwell View, Haverfordwest, Pembrokeshire, Wales SA61 2RE, and serves businesses across England, Scotland, Wales, and Northern Ireland.",
  },
] as const;

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = SITE.ogImage,
  ogType = "website",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const pageKeywords = [...new Set([...SITE.defaultKeywords, ...keywords])];
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords: pageKeywords,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    category: "Business Services",
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: SITE.name,
      locale: SITE.locale,
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      ...(SITE.twitterHandle ? { site: SITE.twitterHandle, creator: SITE.twitterHandle } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
