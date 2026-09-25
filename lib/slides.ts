export interface Slide {
  id: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  bgClass?: string;
  badgeText?: string;
}

export const heroSlides: Slide[] = [
  {
    id: "slide-1",
    heading: "Cut Your Card Processing Fees by Up to 40%",
    subheading:
      "Zero upfront hardware costs. Next-day payouts. Countertop, portable & mobile terminals built for UK businesses — contactless, Apple Pay & Google Pay ready.",
    ctaLabel: "Get a Free Card Machine",
    ctaHref: "/contact",
    secondaryLabel: "See How It Works",
    secondaryHref: "/services/card-machines",
    bgClass: "hero-gradient-1",
    badgeText: "🔥 Most Popular",
  },
  {
    id: "slide-2",
    heading: "Business Funding: £5,000–£500,000 in 24 Hours",
    subheading:
      "Merchant Cash Advances & unsecured loans with a 90%+ approval rate. No property required. Only 3 months trading needed. Flexible repayments that move with your sales.",
    ctaLabel: "Check Eligibility in 60 Seconds",
    ctaHref: "/contact",
    secondaryLabel: "Learn About Funding",
    secondaryHref: "/services/business-funding",
    bgClass: "hero-gradient-2",
    badgeText: "⚡ 24h Decision",
  },
  {
    id: "slide-3",
    heading: "Ultrafast Business Broadband & VoIP — Save 35%",
    subheading:
      "Gigabit Full Fibre, cloud phone systems & dedicated leased lines. Keep your existing numbers. Zero downtime during switch. 99.9% uptime guaranteed.",
    ctaLabel: "Get a Free Telecoms Review",
    ctaHref: "/contact",
    secondaryLabel: "Explore Telecoms",
    secondaryHref: "/services/telecoms",
    bgClass: "hero-gradient-3",
    badgeText: "✅ Zero Downtime Switch",
  },
];
