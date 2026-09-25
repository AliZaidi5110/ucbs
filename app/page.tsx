import React from "react";
import Link from "next/link";
import HeroLeadEngine from "./components/HeroLeadEngine";
import TrustBadges from "./components/TrustBadges";
import SynergySection from "./components/SynergySection";
import FundingCalculator from "./components/FundingCalculator";
import TerminalShowcase from "./components/TerminalShowcase";
import ComparisonMatrix from "./components/ComparisonMatrix";
import ServiceCardGrid from "./components/ServiceCardGrid";
import CaseStudies from "./components/CaseStudies";
import FaqSection from "./components/FaqSection";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO WITH HIGH-CONVERTING INTERACTIVE LEAD ENGINE */}
      <HeroLeadEngine />

      {/* 2. PAYMENT METHODS & REGULATORY TRUST BADGES */}
      <TrustBadges />

      {/* 3. SYNERGY: HOW CARD MACHINE BUSINESS FUNDING WORKS */}
      <SynergySection />

      {/* 4. INTERACTIVE FUNDING & FEE SAVINGS CALCULATOR */}
      <FundingCalculator />

      {/* 5. CARD MACHINE HARDWARE SHOWCASE (£0 UPFRONT) */}
      <TerminalShowcase />

      {/* 6. COMPARISON: TRADITIONAL HIGH STREET BANKS VS UCBS */}
      <ComparisonMatrix />

      {/* 7. ALL COMMERCIAL SERVICES GRID */}
      <ServiceCardGrid
        heading="Comprehensive UK Commercial Solutions"
        subheading="Beyond payments and funding, we help UK businesses save thousands on their essential operating overheads."
        columns={4}
        services={services.map((s) => ({
          id: s.id,
          title: s.title,
          description: s.shortDescription,
          iconName: s.icon,
          badge: s.badge,
          href: `/services/${s.slug}`,
          features: s.features,
          stats: s.stats,
        }))}
      />

      {/* 8. UK MERCHANT CASE STUDIES & VERIFIED REVIEWS */}
      <CaseStudies />

      {/* 9. OBJECTION-BUSTING FAQ ACCORDION */}
      <FaqSection />

      {/* 10. FINAL CONVERSION ACTION SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28 text-white border-t border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-6">
            <span>⚡ Fast 24-Hour Decision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Stop Overpaying on Card Fees &amp; Unlock the{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Growth Capital You Need Today
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-xl text-slate-300 leading-relaxed">
            Join over 2,500+ UK merchants who trust UCBS for lower transaction rates, £0 upfront smart terminals, and flexible business funding up to £500,000.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center rounded-xl bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Check Eligibility in 60 Seconds →
            </Link>
            
            <a
              href="tel:08001234567"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-800 hover:border-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Call 0800 123 4567</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Zero impact on your credit score
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Funds wired in 24–48 hours
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              90%+ SME acceptance rate
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
