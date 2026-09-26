"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Quick application banner"
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-slate-950/95 border-t border-emerald-500/30 shadow-2xl backdrop-blur-md animate-slide-up"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 px-2 sm:px-4">
        
        {/* Left message */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping hidden sm:block" />
          <div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Card Machines &amp; Business Funding: £5k–£500k in 24 Hours</span>
              <span className="hidden md:inline rounded bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[10px] font-extrabold">
                90%+ ACCEPTANCE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              £0 upfront hardware • Repayments move with your daily card sales
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
          <a
            href="tel:+442922716852"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>Call 029 2271 6852</span>
          </a>

          <a
            href="https://wa.me/442922716852?text=Hi%20UCBS,%20I'd%20like%20to%20get%20a%20fast%20quote%20for%20card%20machines%20or%20funding."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <span>💬 WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:bg-emerald-400 transition-all"
          >
            <span>Apply in 60s →</span>
          </Link>

          {/* Dismiss button */}
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg ml-1"
            aria-label="Dismiss banner"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </aside>
  );
}
