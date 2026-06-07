import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "./ServicesGrid";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Our Services | Utility, Banking, and Business Audits",
  description: "Browse the 10 utility and cost optimization services offered by UCBS Ltd to UK businesses, including energy, card payments, telecoms, waste, and solar.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Brokerage Solutions"
        title="10 Enterprise Solutions to Support Your Business"
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
