"use client";

import React from "react";
import {
  Zap,
  CreditCard,
  Wifi,
  Coins,
  Trash2,
  Droplet,
  ShieldCheck,
  Building2,
  Sun,
  Laptop,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";

const SERVICES_DATA = [
  {
    title: "Business Energy",
    description: "Compare electricity and gas tariffs from top UK providers. Reduce overhead costs with customized long-term energy plans.",
    icon: Zap,
    href: "/services/business-energy",
  },
  {
    title: "Merchant Services",
    description: "Get competitive card terminal rates, online gateways, and mobile pay setups. Boost checkout speed and lower transaction fees.",
    icon: CreditCard,
    href: "/services/merchant-services",
  },
  {
    title: "Broadband & Telecoms",
    description: "Enterprise-grade Full Fibre internet, dedicated lines, and cloud-hosted VoIP phone systems designed for team collaboration.",
    icon: Wifi,
    href: "/services/broadband-telecoms",
  },
  {
    title: "Business Funding",
    description: "Connect with leading UK lenders for working capital, equipment leasing, and asset finance to accelerate business growth.",
    icon: Coins,
    href: "/services/business-funding",
  },
  {
    title: "Waste Management",
    description: "Compliant and cost-efficient waste collection, hazardous waste disposal, and commercial recycling audits.",
    icon: Trash2,
    href: "/services/waste-management",
  },
  {
    title: "Water Bills",
    description: "Water usage auditing and consolidation reviews to trace billing discrepancies and save up to 20% on commercial rates.",
    icon: Droplet,
    href: "/services/water-bills",
  },
  {
    title: "Business Insurance",
    description: "Tailored professional indemnity, public liability, and commercial property policies to safeguard corporate assets.",
    icon: ShieldCheck,
    href: "/services/business-insurance",
  },
  {
    title: "Business Banking",
    description: "Find high-yield business accounts and low-fee commercial current accounts suitable for your transaction volume.",
    icon: Building2,
    href: "/services/business-banking",
  },
  {
    title: "Solar & EV Charging",
    description: "Commercial solar panels and on-site electric vehicle charging infrastructure to power operations sustainably.",
    icon: Sun,
    href: "/services/solar-ev-charging",
  },
  {
    title: "Digital Marketing & Web",
    description: "Custom web development, local SEO optimization, and target marketing campaigns to scale your digital presence.",
    icon: Laptop,
    href: "/services/digital-marketing",
  },
];

export function ServicesGrid() {
  return (
    <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 sm:mb-16">
      {SERVICES_DATA.map((service, index) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          href={service.href}
          index={index}
        />
      ))}
    </div>
  );
}
