import { Metadata } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "@/lib/services";
import { generateServiceSchema } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Business Solutions & Funding",
  description:
    "Explore our core UK business solutions: £0 upfront card payment machines, Merchant Cash Advance funding £5k–£500k, business broadband, and commercial energy tariffs.",
  openGraph: {
    title: "Our Services | UCBS UK Commercial Solutions",
    description:
      "Explore our core UK business solutions: card payment machines, merchant cash advances, business telecoms, and energy comparison.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            services.map((s) =>
              generateServiceSchema(s.title, s.fullDescription, `https://ucbs.co.uk/services/${s.slug}`)
            )
          ),
        }}
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 text-white border-b border-slate-800" aria-labelledby="services-hero-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-4">
            <span>Specialist UK Commercial Solutions</span>
          </div>
          <h1 id="services-hero-heading" className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Our Business Solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
            From modern card payment terminals and fast working capital to gigabit fibre and energy reviews, we help UK SMEs minimise overheads and maximise growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900" aria-labelledby="services-list-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-list-heading" className="sr-only">All Commercial Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                iconName={service.icon}
                badge={service.badge}
                features={service.features}
                stats={service.stats}
              />
            ))}
          </div>

          {/* Quick Consultation Banner */}
          <div className="mt-16 rounded-3xl bg-slate-950 p-8 sm:p-12 text-white border border-slate-800 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Need a bespoke multi-service package?</h3>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Bundle your card machine with fast business funding or broadband to receive exclusive preferential rates.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:bg-emerald-400 transition-all"
              >
                Speak to a UK Commercial Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
