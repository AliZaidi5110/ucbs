export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  badge?: string;
  features: string[];
  benefits: string[];
  stats?: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "card-machines",
    title: "Card Machines",
    badge: "Most Popular",
    shortDescription:
      "Countertop, portable & mobile card terminals with low rates and next-day payouts — zero upfront hardware costs.",
    fullDescription:
      "Cut your transaction fees and upgrade your checkout with state-of-the-art card payment machines. We partner with the UK's leading merchant acquirers to offer flexible contracts, £0 upfront hardware, next-day settlements, and full support for contactless, Apple Pay, Google Pay, and ePOS.",
    icon: "credit-card",
    features: [
      "Countertop, portable WiFi & 4G mobile terminals",
      "Low rates from 0.4% per transaction",
      "Next-day settlement to your bank",
      "Contactless, Apple Pay & Google Pay ready",
      "ePOS system integration available",
      "No hidden PCI compliance penalties",
    ],
    benefits: [
      "Save up to 40% on card processing fees",
      "Speed up customer queues",
      "Works outdoors & on the move with 4G",
    ],
    stats: [
      { label: "Processing Savings", value: "Up to 40%" },
      { label: "Hardware Cost", value: "£0 Upfront" },
      { label: "Settlement", value: "Next Day" },
    ],
  },
  {
    id: "2",
    slug: "business-funding",
    title: "Business Funding",
    badge: "24h Decision",
    shortDescription:
      "Merchant Cash Advances and unsecured loans from £5,000 to £500,000 — available from just 3 months trading.",
    fullDescription:
      "Access the working capital your business needs without the red tape of traditional banks. Stock, equipment, refurbishment — we introduce you to trusted UK lenders with fast 24h decisions from just 3+ months trading.",
    icon: "coins",
    features: [
      "Funding from £5,000 up to £500,000+",
      "Available from just 3+ months trading",
      "Merchant Cash Advances tied to your card sales",
      "Unsecured loans — no property required",
      "90%+ acceptance rate",
      "Funds in your account in 24–48 hours",
    ],
    benefits: [
      "Repayments flex with your daily card sales",
      "No fixed payments during slow months",
      "60-second eligibility check",
    ],
    stats: [
      { label: "Approval Rate", value: "90%+" },
      { label: "Min. Trading", value: "3 Months" },
      { label: "Funding Range", value: "£5k–£500k" },
    ],
  },
  {
    id: "3",
    slug: "telecoms",
    title: "Business Telecoms",
    badge: "Zero Downtime Switch",
    shortDescription:
      "Ultrafast Full Fibre broadband, dedicated leased lines, and cloud VoIP phone systems for UK businesses.",
    fullDescription:
      "Power your business with enterprise-grade connectivity and modern VoIP phone systems. Keep your existing numbers, enjoy gigabit speeds, cut bills — all with zero downtime during the switch.",
    icon: "wifi",
    features: [
      "Business Full Fibre up to 1,000 Mbps",
      "Cloud VoIP phone systems for any team size",
      "Keep your existing business phone numbers",
      "99.9% uptime SLA with UK support",
      "Dedicated leased lines available",
      "Free business router & hardware included",
    ],
    benefits: [
      "Save up to 35% vs legacy providers",
      "Never miss a call with mobile VoIP apps",
      "Zero disruption to trading during switch",
    ],
    stats: [
      { label: "Fibre Speed", value: "Up to 1Gbps" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Bill Savings", value: "Up to 35%" },
    ],
  },
  {
    id: "4",
    slug: "business-energy",
    title: "Business Energy",
    shortDescription:
      "Compare commercial electricity & gas tariffs to lock in competitive rates and protect your overheads.",
    fullDescription:
      "Protect your bottom line against volatile energy prices. Our team reviews your usage, compares rates across leading UK suppliers, and manages renewals to prevent costly default rollover rates.",
    icon: "zap",
    features: [
      "Commercial electricity & gas comparison",
      "Fixed 1, 2 & 3-year price protection",
      "Multi-site billing consolidation",
      "100% renewable energy options",
      "Renewal reminders to avoid rollover rates",
    ],
    benefits: [
      "Avoid expensive out-of-contract rates",
      "One contact for all your meters",
      "Free, no-obligation energy review",
    ],
    stats: [
      { label: "Contract Terms", value: "1–3 Years" },
      { label: "Broker Fee", value: "Free" },
      { label: "Review Time", value: "24 Hours" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
