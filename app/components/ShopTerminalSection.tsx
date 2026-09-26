"use client";

import React, { useState } from "react";
import OrderModal from "./OrderModal";

interface TerminalItem {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  pricingUpfront: string;
  pricingMonthly: string;
  processingRate: string;
  settlement: string;
  connectivity: string;
  battery: string;
  features: string[];
}

const terminalsCatalog: TerminalItem[] = [
  {
    id: "smart-touch",
    name: "UCBS Smart Android POS",
    tagline: "High-definition touchscreen with integrated tipping, split bills, and live cloud reporting.",
    badge: "Best Seller • 24h Dispatch",
    pricingUpfront: "£0 Upfront",
    pricingMonthly: "From £19/mo or £149 outright",
    processingRate: "From 0.40%",
    settlement: "Next-Day 10am Payout",
    connectivity: "Built-in 4G SIM + Wi-Fi",
    battery: "All-day 12h runtime",
    features: [
      "5.5\" IPS High-res touchscreen",
      "Fast thermal receipt printer",
      "Accepts Apple Pay, Google Pay & Amex",
      "Free unlimited 4G roaming data included",
      "Real-time analytics portal on your phone",
      "Qualifies for up to £500,000 funding bundle",
    ],
  },
  {
    id: "portable-4g",
    name: "UCBS Portable Wireless 4G",
    tagline: "Pocket-sized drop-proof wireless terminal designed for mobility, table service, and trades.",
    badge: "Maximum Mobility",
    pricingUpfront: "£0 Upfront",
    pricingMonthly: "From £15/mo or £99 outright",
    processingRate: "From 0.40%",
    settlement: "Next-Day 10am Payout",
    connectivity: "Multi-network 4G + Wi-Fi",
    battery: "Up to 14 hours battery",
    features: [
      "Ultra-compact & lightweight design",
      "Multi-network automatic SIM switching",
      "Instant contactless tap in under 2 seconds",
      "Digital SMS / Email receipts or paper slips",
      "Zero pairing needed — works straight out of the box",
      "Integrated daily merchant advance repayments",
    ],
  },
  {
    id: "countertop-pro",
    name: "UCBS Countertop High-Volume",
    tagline: "Bulletproof wired Ethernet & Wi-Fi reliability engineered for fast-paced retail & convenience checkout.",
    badge: "High-Speed Checkout",
    pricingUpfront: "£0 Upfront",
    pricingMonthly: "From £12/mo or £89 outright",
    processingRate: "From 0.38%",
    settlement: "Next-Day 10am Payout",
    connectivity: "Ethernet LAN + Wi-Fi Backup",
    battery: "Mains powered continuous",
    features: [
      "Instant sub-second payment authorisations",
      "Connects directly to your broadband router",
      "Dual backlit customer display screen",
      "Heavy-duty spill & dust resistant casing",
      "PCl-PTS 6.x highest security standard",
      "Direct introducer link for working capital cash advance",
    ],
  },
];

export default function ShopTerminalSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTerminal, setActiveTerminal] = useState("UCBS Smart Android POS");

  const handleOrder = (terminalName: string) => {
    setActiveTerminal(terminalName);
    setIsModalOpen(true);
  };

  return (
    <section id="shop-terminals" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Hardware Catalog &amp; Shop
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Order Your Smart Card Terminal Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Choose your preferred hardware model. All terminals include next-day dispatch, low transaction rates, £0 upfront options, and zero hidden exit fees.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {terminalsCatalog.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between relative group"
            >
              <div>
                {/* Badge */}
                {item.badge && (
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-wide mb-4">
                    {item.badge}
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 min-h-[40px] leading-relaxed">
                  {item.tagline}
                </p>

                {/* Pricing Block */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-slate-950">
                      {item.pricingUpfront}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Free Setup
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-1">
                    {item.pricingMonthly}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-700">
                    <span>Card Rate: <strong>{item.processingRate}</strong></span>
                    <span>Payout: <strong>{item.settlement.split(" ")[0]}</strong></span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-2.5">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Now CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleOrder(item.name)}
                  className="w-full py-3.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 group-hover:bg-emerald-600"
                >
                  <span>Order Now</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <div className="text-center mt-2">
                  <span className="text-[11px] text-slate-400">Next-day UK courier delivery</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Combined Growth Package
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need Working Capital with your Terminal?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Get an instant Merchant Cash Advance from <strong>£5,000 to £500,000</strong> alongside your £0 upfront terminal. Repay a small percentage of your card sales automatically.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => handleOrder("Terminal + Business Funding Bundle")}
              className="px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg text-center"
            >
              Order Funding Bundle
            </button>
            <a
              href="tel:+442922716852"
              className="px-6 py-3.5 rounded-full border border-slate-700 hover:bg-slate-800 text-white font-bold text-sm transition-all text-center"
            >
              Call 029 2271 6852
            </a>
          </div>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTerminal={activeTerminal}
      />
    </section>
  );
}
