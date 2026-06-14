import {
  Zap,
  CreditCard,
  Wifi,
  Coins,
  Trash2,
  Droplet,
  Laptop,
  LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Merchant Services",
    description:
      "Get competitive card terminal rates, online gateways, and mobile pay setups. Boost checkout speed and lower transaction fees.",
    icon: CreditCard,
    href: "/services/merchant-services",
    image: "/services/merchant-services.jpg",
  },
  {
    title: "Business Funding",
    description:
      "Connect with leading UK lenders for working capital, equipment leasing, and asset funding. Loans available from 3+ months trading.",
    icon: Coins,
    href: "/services/business-funding",
    image: "/services/business-funding.png",
  },
  {
    title: "Business Utilities",
    description:
      "Compare business energy, water, and waste contracts. Reduce utility overheads with tailored UK plans.",
    icon: Zap,
    href: "/services/business-energy",
    image: "/services/business-energy.webp",
  },
  {
    title: "Broadband & Telecoms",
    description:
      "Enterprise-grade Full Fibre internet, dedicated lines, and cloud-hosted VoIP phone systems designed for team collaboration.",
    icon: Wifi,
    href: "/services/broadband-telecoms",
    image: "/services/broadband-telecoms.jpg",
  },
  {
    title: "Waste Management",
    description:
      "Compliant and cost-efficient waste collection, hazardous waste disposal, and commercial recycling audits.",
    icon: Trash2,
    href: "/services/waste-management",
    image: "/services/waste-management.jpg",
  },
  {
    title: "Water Bills",
    description:
      "Water usage auditing and consolidation reviews to trace billing discrepancies and save up to 20% on commercial rates.",
    icon: Droplet,
    href: "/services/water-bills",
    image: "/services/water-bills.jpg",
  },
  {
    title: "Digital Marketing & Web",
    description:
      "Custom web development, local SEO optimization, and target marketing campaigns to scale your digital presence.",
    icon: Laptop,
    href: "/services/digital-marketing",
    image: "/services/digital-marketing.jpg",
  },
];

export function getServiceImage(slug: string) {
  if (slug === "business-energy") {
    return "/services/business-energy.webp";
  }
  if (slug === "business-funding") {
    return "/services/business-funding.png";
  }
  return `/services/${slug}.jpg`;
}
