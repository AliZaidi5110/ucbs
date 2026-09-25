"use client";

import React from "react";
import Link from "next/link";

const comparisons = [
  {
    feature: "Approval Speed",
    bank: "3 to 6 weeks of waiting & bureaucracy",
    ucbs: "24–48 Hours decision & fast payout",
    highlight: true,
  },
  {
    feature: "Approval Rate",
    bank: "Approx. 40% – 50% rejection rate for SMEs",
    ucbs: "90%+ acceptance rate based on card sales",
    highlight: true,
  },
  {
    feature: "Collateral Required",
    bank: "Personal guarantee, commercial or home property charge",
    ucbs: "100% Unsecured — zero property or asset charge",
    highlight: false,
  },
  {
    feature: "Repayment Structure",
    bank: "Rigid monthly direct debit even during slow trading months",
    ucbs: "Flexes with daily card takings (Slow day = lower payment)",
    highlight: true,
  },
  {
    feature: "Card Machine Hardware",
    bank: "Outdated clunky machines, £20–£40/mo rental fee",
    ucbs: "£0 Upfront next-gen 4G & Smart touchscreen terminals",
    highlight: false,
  },
  {
    feature: "Transaction Processing Fees",
    bank: "1.75% – 2.5% + hidden PCI compliance penalties",
    ucbs: "Transparent rates from 0.4% with zero hidden penalties",
    highlight: true,
  },
  {
    feature: "Credit History",
    bank: "Strict automated credit scoring; instant rejection",
    ucbs: "Soft search check; CCJs & past hiccups considered",
    highlight: false,
  },
];

export default function ComparisonMatrix() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-950/60 dark:text-blue-400 dark:ring-blue-500/30 mb-3">
            <span>Why UK Merchants Switch to Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Traditional High Street Banks vs. UCBS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            See why thousands of UK hospitality, retail, and service businesses bypass high street banks for their payment processing and working capital.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <th scope="col" className="py-5 px-6 text-sm font-bold text-slate-900 dark:text-white w-1/3">
                    Feature &amp; Criteria
                  </th>
                  <th scope="col" className="py-5 px-6 text-sm font-bold text-slate-500 dark:text-slate-400 w-1/3">
                    Traditional High Street Banks
                  </th>
                  <th scope="col" className="py-5 px-6 text-sm font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 w-1/3 border-l border-emerald-500/20">
                    <span className="flex items-center gap-2">
                      <span>UCBS Solutions</span>
                      <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-slate-950 uppercase">
                        Winner
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className={`transition-colors ${
                      row.highlight
                        ? "bg-slate-50/50 dark:bg-slate-800/30"
                        : "hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    <td className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <svg className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{row.bank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-emerald-300 bg-emerald-500/5 border-l border-emerald-500/20">
                      <div className="flex items-start gap-2">
                        <svg className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{row.ucbs}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA below table */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-slate-800 transition-all dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
          >
            <span>Check How Much You Can Save &amp; Borrow</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <p className="text-xs text-slate-500 mt-3">Takes 60 seconds • Soft search only • No obligation</p>
        </div>

      </div>
    </section>
  );
}
