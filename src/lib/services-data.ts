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
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Business Energy",
    description:
      "Compare electricity and gas tariffs from top UK providers. Reduce overhead costs with customized long-term energy plans.",
    icon: Zap,
    href: "/services/business-energy",
  },
  {
    title: "Merchant Services",
    description:
      "Get competitive card terminal rates, online gateways, and mobile pay setups. Boost checkout speed and lower transaction fees.",
    icon: CreditCard,
    href: "/services/merchant-services",
  },
  {
    title: "Broadband & Telecoms",
    description:
      "Enterprise-grade Full Fibre internet, dedicated lines, and cloud-hosted VoIP phone systems designed for team collaboration.",
    icon: Wifi,
    href: "/services/broadband-telecoms",
  },
  {
    title: "Business Funding",
    description:
      "Connect with leading UK lenders for working capital, equipment leasing, and asset finance to accelerate business growth.",
    icon: Coins,
    href: "/services/business-funding",
  },
  {
    title: "Waste Management",
    description:
      "Compliant and cost-efficient waste collection, hazardous waste disposal, and commercial recycling audits.",
    icon: Trash2,
    href: "/services/waste-management",
  },
  {
    title: "Water Bills",
    description:
      "Water usage auditing and consolidation reviews to trace billing discrepancies and save up to 20% on commercial rates.",
    icon: Droplet,
    href: "/services/water-bills",
  },
  {
    title: "Digital Marketing & Web",
    description:
      "Custom web development, local SEO optimization, and target marketing campaigns to scale your digital presence.",
    icon: Laptop,
    href: "/services/digital-marketing",
  },
];
