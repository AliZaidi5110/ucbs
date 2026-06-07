import React from "react";
import { Metadata } from "next";
import { Building, Landmark, ShieldCheck, Users, History } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ReadyToDriveForward } from "@/components/ui/ready-to-drive-forward";

export const metadata: Metadata = {
  title: "About Us | Company Story & Credentials",
  description: "Learn more about Utility Concepts Business Solutions (UCBS) Ltd. Read our company history, mission values, and meet Director Himadhar Alahari.",
};

const values = [
  {
    title: "Complete Integrity",
    description: "We work for our clients, not the providers. We disclose all comparison metrics with transparency, ensuring no hidden broker fees.",
    icon: ShieldCheck,
  },
  {
    title: "UK Wide Coverage",
    description: "From our base in Haverfordwest, Wales, we serve corporate clients across England, Scotland, Wales, and Northern Ireland.",
    icon: Landmark,
  },
  {
    title: "Customer-Centric",
    description: "Our dedicated consultation specialists are always a phone call away. We audit bills to make saving capital simple.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Identity"
        title="Utility Concepts Business Solutions Ltd"
        description="We partner with small and growing businesses across the United Kingdom to review, audit, and optimize essential operating overheads."
      />

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <History className="h-6 w-6 text-brand-blue" />
                <h2 className="text-2xl font-bold text-foreground">Our Story & Goal</h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Founded to address the opaque pricing of commercial utilities and merchant facilities, UCBS has developed into a trusted corporate consultancy. We recognize that business owners spend too much time navigating convoluted gas, electric, internet, and credit card contracts.
                </p>
                <p>
                  UCBS serves as an intermediary brokerage. We compare rates from over 30 leading providers. Our clients receive clear, tailored comparison reviews, allowing them to make fast decisions to secure maximum cost savings.
                </p>
                <p>
                  As an introducer to verified commercial finance providers, we also facilitate business growth by arranging working capital loans, asset leasebacks, and invoice factoring options without any upfront fees.
                </p>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Company Registered", desc: "Established UTILITY CONCEPTS BUSINESS SOLUTIONS LTD as an active registered company in England & Wales." },
                  { num: "02", title: "Expanded Solutions", desc: "Broadened utility reviews to include waste audits, business insurance matching, commercial solar installations, and card terminals." },
                  { num: "03", title: "£1.2 Million Saved", desc: "Exceeded £1.2 million in aggregate verified contract cost savings for our SME client database." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-2xl font-black text-brand-orange">{item.num}</span>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-muted">
        <div className="page-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">Our Values</span>
            <h2 className="heading-section mt-2">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="surface-card p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-[#0f4c75] text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{val.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ReadyToDriveForward />

      <section className="section-padding bg-background">
        <div className="page-container space-y-8">
          <div className="surface-card p-6 sm:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div>
                <span className="eyebrow">Leadership</span>
                <h2 className="mt-2 text-2xl font-black text-foreground">Board of Directors</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our operations and strategic direction are overseen by executive directors with extensive utility and brokerage backgrounds.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                <div className="rounded-xl border border-border bg-muted p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-lg font-bold text-brand-blue">
                    HA
                  </div>
                  <h3 className="font-bold text-foreground">Himadhar Alahari</h3>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">Director & Founder</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Leads our merchant services audit team and coordinates key relationships with financial funding partners.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-emerald/10 text-lg font-bold text-brand-emerald">
                    UK
                  </div>
                  <h3 className="font-bold text-foreground">UK Advisory Team</h3>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-blue">Consultation & Auditing</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our group of tariff analysts and support staff auditing client invoices daily.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card flex flex-col items-center justify-between gap-6 p-6 sm:flex-row sm:p-8">
            <div className="text-center sm:text-left">
              <span className="inline-block rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-emerald">
                Registered Office
              </span>
              <h3 className="mt-2 text-lg font-bold text-foreground">Wales, United Kingdom</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Utility Concepts Business Solutions Ltd, 12 Scotchwell View, Haverfordwest, Wales, SA61 2RE. Company No. 12948242.
              </p>
            </div>
            <Building className="h-10 w-10 shrink-0 text-brand-blue" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
