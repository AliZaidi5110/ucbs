"use client";

import React from "react";
import Link from "next/link";

export default function SynergySection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-950/60 dark:text-emerald-400 dark:ring-emerald-500/30 mb-3">
            <span>The Merchant Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How Card Machine Business Funding Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Unlike traditional bank loans that demand property collateral and rigid monthly direct debits, our funding is linked directly to your card machine turnover.
          </p>
        </div>

        {/* 3 Step Interactive Visual Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Card 1 */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50">
            <div className="flex items-center justify-between mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-lg shadow-md">
                1
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                Fast Payout
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Receive £5k to £500k in 24 Hours
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We look at your average monthly card machine sales rather than just your credit score. No business plans, zero property collateral, and a 90%+ acceptance rate.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Funds wired straight to your business bank account</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-xl dark:border-emerald-500/80 dark:bg-slate-800">
            <div className="absolute -top-3.5 right-8 rounded-full bg-emerald-500 px-3.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
              Zero Stress
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white font-extrabold text-lg dark:bg-white dark:text-slate-900 shadow-md">
                2
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full">
                Flexible Split
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Repayments Flex With Your Sales
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              A small agreed percentage (e.g. 10%) of daily customer card payments automatically pays down the advance. If you have a slow day, you pay less. If you close for a holiday, you pay nothing.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 font-medium flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>No fixed deadlines or penalty fees, ever</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50">
            <div className="flex items-center justify-between mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-extrabold text-lg shadow-md">
                3
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                Save &amp; Re-Invest
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Upgrade Hardware &amp; Slash Processing Fees
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Pair your funding with our next-gen countertop or mobile 4G card terminals with fees from 0.4%. You save on transaction overhead while growing your revenue.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Keep your existing bank account without disruption</span>
            </div>
          </div>

        </div>

        {/* Dual Call to Action Banner */}
        <div className="mt-14 rounded-3xl bg-slate-900 p-8 sm:p-10 text-white relative overflow-hidden dark:bg-slate-950 border border-slate-800">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Already have a card terminal with Worldpay, Barclaycard, or Zettle?</h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                You do NOT need to switch your terminal immediately to get funded. We can fund your business using your existing merchant statements, or help you switch to reduce rates!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:bg-emerald-400 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Apply for Funding in 60s
              </Link>
              <Link
                href="/services/card-machines"
                className="rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-700 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Compare Terminal Rates
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
