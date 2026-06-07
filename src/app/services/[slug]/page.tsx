import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { JsonLd, generateServiceSchema } from "@/components/seo/json-ld";
import {
  Zap,
  CreditCard,
  Wifi,
  Coins,
  Trash2,
  Droplet,
  Laptop,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Types
interface Props {
  params: Promise<{ slug: string }>;
}

// Full services data set
const DETAILS_MAP: Record<
  string,
  {
    title: string;
    badge: string;
    icon: any;
    summary: string;
    benefits: string[];
    process: string[];
    details: string;
  }
> = {
  "business-energy": {
    title: "Business Energy Solutions",
    badge: "Utility Audit",
    icon: Zap,
    summary: "Audit electricity and gas tariffs from over 30 leading UK energy providers to secure competitive pricing.",
    details:
      "Commercial utility pricing is subject to rapid wholesale market fluctuations. UCBS evaluates your half-hourly usage and contract expiration dates to identify optimal gas and electricity tariffs, locking in fixed pricing to protect against price spikes.",
    benefits: [
      "Access to bespoke wholesale tariffs not available online",
      "Analysis of green energy and 100% renewable supply options",
      "Comprehensive management of meter installations and supply transfers",
    ],
    process: [
      "Send us a copy of a recent energy invoice.",
      "Our team performs a complete market tariff audit.",
      "Select your preferred option, and we handle the transfer.",
    ],
  },
  "merchant-services": {
    title: "Merchant Services & Payments",
    badge: "Payment Terminals",
    icon: CreditCard,
    summary: "Lower transaction fees, upgrade card payment terminals, and configure secure online payment gateways.",
    details:
      "Processing costs can quietly reduce your profit margins. We analyze your merchant account invoices to structure low transaction rates, offering hardware setups (EVO, Clover, Pax) and e-commerce gateway integrations with fast next-day settlements.",
    benefits: [
      "Substantial reduction in card swipe and payment processing rates",
      "Latest PCI-DSS compliant contactless and smart terminals",
      "Fast, seamless integration with existing EPOS systems",
    ],
    process: [
      "Share recent merchant processing statements.",
      "We trace hidden administrative charges and rate options.",
      "Get new configured hardware or update rates on current terminals.",
    ],
  },
  "broadband-telecoms": {
    title: "Broadband & Business Telecoms",
    badge: "Connectivity",
    icon: Wifi,
    summary: "Fibre broadband, dedicated leased lines, and cloud-hosted VoIP communication setups for teams.",
    details:
      "Slow internet and legacy phone lines disrupt productivity. UCBS audits local infrastructure to install full-fibre ethernet lines, and builds VoIP phone solutions that migrate your systems to the cloud, complete with digital IVR routing.",
    benefits: [
      "Symmetrical bandwidth leased lines with 99.9% uptime SLA",
      "Modern VoIP features (mobile app integration, ring groups, auto-attendants)",
      "Zero disruption switchovers managed by dedicated telecom engineers",
    ],
    process: [
      "Check address coverage for local UK fiber infrastructure.",
      "Design phone routing and communication diagrams.",
      "Coordinate final onsite or remote setup with zero downtime.",
    ],
  },
  "business-funding": {
    title: "Business Funding & Finance",
    badge: "Growth Capital",
    icon: Coins,
    summary: "Acts as a credit broker/introducer to leading UK finance providers for capital, stock, or equipment loans.",
    details:
      "Sourcing corporate capital can be challenging. As an introducer (not a lender), UCBS has links to a panel of commercial lenders. We organize asset finance, business credit lines, stock purchase bridging, and invoice factoring options.",
    benefits: [
      "Flexible repayment terms matching your business cash flow cycles",
      "Equipment lease and hire purchase structures to preserve cash",
      "Access to competitive unsecured loan panels",
    ],
    process: [
      "Discuss cash flow needs or asset funding objectives.",
      "Submit key accounts and documentation via secure channels.",
      "Receive finance introductions and offers from approved lenders.",
    ],
  },
  "waste-management": {
    title: "Commercial Waste Management",
    badge: "Waste Auditing",
    icon: Trash2,
    summary: "Cost-effective, compliant commercial waste, recycling, and specialized collection scheduling.",
    details:
      "UK environmental waste regulations require strict documentation. We review your current collection frequencies, bin sizes, and material streams to secure compliant recycling and general waste rates that reduce landfill taxes.",
    benefits: [
      "Consolidated invoicing for multiple business locations",
      "Dedicated focus on zero-to-landfill and sorting audits",
      "Legally compliant duty of care transfer notes provided",
    ],
    process: [
      "Log current bin volumes, collection frequency, and charges.",
      "We search regional operators to source competitive rates.",
      "Establish optimized container sizes and collection intervals.",
    ],
  },
  "water-bills": {
    title: "Water Bills & Consumption Audits",
    badge: "Utility Audit",
    icon: Droplet,
    summary: "Consolidate accounts, audit water consumption, and claim rebates on historical billing discrepancies.",
    details:
      "Water utilities are frequently miscalculated, particularly for wastewater drainage. Our utility analysts cross-reference historical meter records to identify surface run-off billing discrepancies, securing refunds and reducing rates.",
    benefits: [
      "Identification of underground leaks via consumption analysis",
      "Verification of drainage area property boundaries",
      "Historical billing rebate recovery from water retail companies",
    ],
    process: [
      "Submit recent water provider invoices and site layout map.",
      "We complete a drainage tariff verification.",
      "Claim rebate and adjust future billing rates.",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & Web Design",
    badge: "Web Solutions",
    icon: Laptop,
    summary: "Custom web development, local SEO optimization, and target marketing campaigns to scale your digital presence.",
    details:
      "A modern digital presence is vital for business growth. UCBS advises on creating responsive websites, improving local Google Map visibility, and setting up digital strategies to attract customers and capture leads.",
    benefits: [
      "Modern, fast website design optimized for mobile conversions",
      "Local SEO strategy targeted to rank in search results",
      "Google Business Profile setup and customer review guidance",
    ],
    process: [
      "Review current website search rankings and core performance.",
      "Design search-focused layout mockups.",
      "Launch and optimize search visibility.",
    ],
  },
};

// Generate static routes for all services
export async function generateStaticParams() {
  return Object.keys(DETAILS_MAP).map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = DETAILS_MAP[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Corporate Audits & Reviews`,
    description: service.summary,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = DETAILS_MAP[slug];

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;
  const serviceUrl = `https://www.ucbsltd.co.uk/services/${slug}`;
  const serviceSchema = generateServiceSchema(service.title, service.summary, serviceUrl);

  return (
    <div className="bg-background">
      <JsonLd data={serviceSchema} />

      <section className="bg-gradient-to-br from-brand-navy via-[#0f4c75] to-[#0a2540] text-white">
        <div className="page-container py-10 sm:py-14">
          <nav className="mb-6 text-sm font-medium text-slate-300" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-slate-500">/</li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li aria-hidden="true" className="text-slate-500">/</li>
              <li className="text-white">{service.title}</li>
            </ol>
          </nav>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
              <IconComponent className="h-8 w-8" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">{service.badge}</span>
              <h1 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">{service.title}</h1>
              <p className="mt-2 max-w-2xl text-base text-slate-300 sm:text-lg">{service.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="page-container section-padding">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="prose max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>{service.details}</p>
            </div>

            <div className="mt-10">
              <h2 className="mb-5 text-xl font-bold text-foreground sm:text-2xl">Key Value Additions</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                    <span className="text-base text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditional Merchant Services Section */}
            {slug === "merchant-services" && (
              <div className="mt-16 pt-12 border-t border-border">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-foreground mb-12 text-center lg:text-left leading-tight">
                  Everything your business needs to accept, manage and monitor your payments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                  {/* Quick Onboarding */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-6 relative w-[120px] h-[120px]">
                      <Image
                        src="/namefast-sizel.svg"
                        alt="Quick onboarding"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[20px] font-bold text-foreground mb-3">Quick onboarding</h3>
                    <p className="text-[16px] text-muted-foreground font-medium leading-relaxed">
                      Our streamlined onboarding will have your business transacting and thriving in no time.
                    </p>
                  </div>

                  {/* One Platform */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-6 relative w-[120px] h-[120px]">
                      <Image
                        src="/nameplatforms-sizel.svg"
                        alt="One platform"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[20px] font-bold text-foreground mb-3">One platform</h3>
                    <p className="text-[16px] text-muted-foreground font-medium leading-relaxed">
                      Our Merchant Portal puts you in control of your payments. See the status of your payments on desktop, iOS and Android.
                    </p>
                  </div>

                  {/* Omnichannel payments */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-6 relative w-[120px] h-[120px]">
                      <Image
                        src="/namepayment-gateway-sizel.svg"
                        alt="Omnichannel payments"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[20px] font-bold text-foreground mb-3">Omnichannel payments</h3>
                    <p className="text-[16px] text-muted-foreground font-medium leading-relaxed">
                      We've built a full range of omnichannel payment solutions, spanning eCommerce, POS, unattended and ePOS.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6 lg:col-span-4 lg:sticky lg:top-24">
            <div className="surface-card p-6 sm:p-8">
              <h3 className="mb-5 text-lg font-bold text-foreground">Our Auditing Process</h3>
              <ol className="space-y-5">
                {service.process.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                      0{idx + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-brand-navy to-[#0f4c75] p-6 text-center text-white sm:p-8">
              <h3 className="text-xl font-bold">Review Your Rates</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Get a completely free, zero-obligation comparison review for {service.title}.
              </p>
              <Link
                href={{ pathname: "/contact", query: { service: service.title } }}
                className="btn-accent mt-6 inline-flex w-full items-center justify-center gap-2"
                aria-label={`Request a free review for ${service.title}`}
              >
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
