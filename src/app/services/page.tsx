import React from "react";
import Link from "next/link";
import { ServicesGrid } from "./ServicesGrid";
import { PageHero } from "@/components/ui/page-hero";
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateItemListSchema,
  generateWebPageSchema,
} from "@/components/seo/json-ld";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata = buildMetadata({
  title: "Business Services | Energy, Payments, Telecoms & More",
  description:
    "Explore UCBS Ltd services for UK businesses: business energy, merchant services, broadband, funding, waste management, water audits, and digital marketing.",
  path: "/services",
  keywords: [
    "UCBS business services",
    "UK utility broker services",
    "commercial energy comparison",
    "business payment solutions UK",
  ],
});

export default function ServicesPage() {
  const itemListSchema = generateItemListSchema(
    SERVICES_DATA.map((service) => ({
      name: service.title,
      url: absoluteUrl(service.href),
      description: service.description,
    }))
  );

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd data={itemListSchema} />
      <JsonLd
        data={generateWebPageSchema(
          "Business Services | Energy, Payments, Telecoms & More",
          "Explore UCBS Ltd services for UK businesses: business energy, merchant services, broadband, funding, waste management, water audits, and digital marketing.",
          "/services"
        )}
      />
      <PageHero
        eyebrow="Brokerage Solutions"
        title="Enterprise Solutions to Support Your Business"
        description="We provide comprehensive cost reviews and contract management at no upfront charge. Browse our key services below to start saving."
      />

      <section className="section-padding bg-background">
        <div className="page-container">
          <ServicesGrid />

          <div className="surface-card mx-auto max-w-3xl p-8 text-center sm:p-10">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Need a Combined Multi-Service Audit?</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Many UK companies bundle their energy, telecom, and merchant terminal audits to maximize savings. We can review all your contracts in one go.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              Request Full Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
