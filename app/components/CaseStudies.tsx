"use client";

import React from "react";
import Link from "next/link";

interface CaseStudy {
  id: string;
  businessName: string;
  location: string;
  sector: string;
  fundingAmount: string;
  savings: string;
  quote: string;
  owner: string;
  stats: { label: string; value: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    businessName: "The Oak & Barrel Bistro",
    location: "Leeds, West Yorkshire",
    sector: "Hospitality & Restaurant",
    fundingAmount: "£32,000 Funded",
    savings: "£2,640/yr Saved",
    quote: "Our high street bank took 4 weeks just to ask for more paperwork. UCBS approved £32,000 in 24 hours based on our card machine sales and replaced our old terminals with smart touchscreen units that cut our queue times in half.",
    owner: "Marco Bellini, Owner",
    stats: [
      { label: "Approval Time", value: "24 Hours" },
      { label: "Rate Reduction", value: "1.7% → 0.42%" },
      { label: "Daily Repayment", value: "Flexes with sales" },
    ],
  },
  {
    id: "2",
    businessName: "Luxe Hair & Beauty Lounge",
    location: "Birmingham, West Midlands",
    sector: "Health & Beauty",
    fundingAmount: "£18,000 Funded",
    savings: "£1,450/yr Saved",
    quote: "Having repayments tied directly to our daily card payments gives total peace of mind. On quiet Mondays we pay practically nothing, and on busy Saturdays it clears down quickly. The portable terminals let clients pay right in the chair.",
    owner: "Chloe Jenkins, Founder",
    stats: [
      { label: "Collateral", value: "£0 Assets Needed" },
      { label: "Terminals", value: "2x Portable 4G" },
      { label: "Payout", value: "Next Day 10am" },
    ],
  },
  {
    id: "3",
    businessName: "Apex Auto & Tyre Centre",
    location: "Manchester",
    sector: "Automotive & Trades",
    fundingAmount: "£45,000 Funded",
    savings: "£3,100/yr Saved",
    quote: "We needed urgent cash flow to buy new tyre diagnostic machinery and stock up before winter. UCBS secured £45,000 within 48 hours without any charges on my home. Best commercial broker in the UK by a mile.",
    owner: "Gareth Davies, Director",
    stats: [
      { label: "Decision", value: "Same-Day" },
      { label: "Acceptance", value: "Approved 1st Try" },
      { label: "Hardware", value: "Heavy-Duty POS" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-950/60 dark:text-emerald-400 dark:ring-emerald-500/30 mb-3">
            <span>Real UK Business Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Trusted by Over 2,500+ UK Merchants
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From bustling restaurants and retail stores to independent beauty salons and garages, see how businesses grow with our payment and funding solutions.
          </p>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                {/* Sector & Location */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{study.sector}</span>
                  <span>{study.location}</span>
                </div>

                {/* Business Name */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {study.businessName}
                </h3>

                {/* Dual Pill Stats */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                    {study.fundingAmount}
                  </span>
                  <span className="rounded-xl bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    {study.savings}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-2 border-emerald-500 pl-4 my-6">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
              </div>

              <div>
                {/* Stats 3-Col Bar */}
                <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3 text-center border border-slate-100 dark:bg-slate-800/60 dark:border-slate-800 mb-6">
                  {study.stats.map((s, idx) => (
                    <div key={idx} className="px-1">
                      <div className="text-xs font-black text-slate-900 dark:text-white">{s.value}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm dark:bg-emerald-500 dark:text-slate-950">
                    {study.owner.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{study.owner}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Verified UK Merchant</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 dark:border-slate-800 dark:bg-slate-900 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black text-xl">
              ★
            </div>
            <div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="font-extrabold text-slate-900 dark:text-white text-base">Excellent</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">4.9 out of 5</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Based on 500+ independent UK business owner reviews
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 flex-shrink-0"
          >
            Join 2,500+ Funded Merchants →
          </Link>
        </div>

      </div>
    </section>
  );
}
