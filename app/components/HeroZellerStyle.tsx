"use client";

import React, { useState } from "react";
import OrderModal from "./OrderModal";

export default function HeroZellerStyle() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedTerminal, setSelectedTerminal] = useState("Smart Android Touchscreen");

  const handleOpenOrder = (terminalName?: string) => {
    if (terminalName) setSelectedTerminal(terminalName);
    setIsOrderModalOpen(true);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-slate-900 min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        {/* Background Images */}
        {/* Desktop / Laptop: 1024x571 landscape image */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="/images/hero-desktop.jpg"
            alt="Hand tapping contactless card onto smart payment terminal with fresh produce on countertop"
            className="w-full h-full object-cover object-center lg:object-[68%_center]"
            fetchPriority="high"
          />
          {/* Subtle gradient overlay to enhance text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Mobile: 764x1024 portrait image */}
        <div className="absolute inset-0 block md:hidden">
          <img
            src="/images/hero-mobile.jpg"
            alt="Hand tapping contactless payment card onto vertical smart terminal with fresh produce"
            className="w-full h-full object-cover object-[center_35%]"
            fetchPriority="high"
          />
          {/* Light gradient for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 w-full">
          <div className="max-w-xl">
            {/* Floating Hero Card (Clean rounded aesthetic matching reference screenshot) */}
            <div className="bg-[#f5f6f8]/95 md:bg-white/95 backdrop-blur-md rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 md:p-12 shadow-2xl border border-white/80 transition-transform duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              {/* Pill Badge */}
              <div className="mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#dcf1f6] text-[#0369a1] text-xs font-bold tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
                  UCBS Terminal
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 leading-[1.12]">
                Card machines for smarter businesses
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Cut transaction fees from <strong>0.4%</strong> with <strong>£0 upfront hardware</strong>, next-day 10am payouts, and integrated business funding up to <strong>£500,000</strong> approved in 24 hours.
              </p>

              {/* Primary Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={() => handleOpenOrder("Smart Android Touchscreen")}
                  className="rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold px-8 py-3.5 text-sm sm:text-base transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>Shop now</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                <a
                  href="tel:+442922716852"
                  className="font-bold text-slate-900 hover:text-emerald-700 text-sm sm:text-base transition-colors py-2 flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>Contact Sales</span>
                </a>
              </div>

              {/* Sub-benefits */}
              <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  £0 Upfront Available
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Next-Day Settlement
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No Binding Contracts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialTerminal={selectedTerminal}
      />
    </>
  );
}
