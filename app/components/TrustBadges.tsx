"use client";

import React from "react";

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-800 bg-slate-950 py-8 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Compatible with all payment methods &amp; UK Acquirers
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              FCA regulated lending partners &amp; PCI-DSS Level 1 certified terminals
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-75 grayscale hover:grayscale-0 transition-all">
            {/* Visa */}
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-lg">
              <span className="italic font-serif font-black text-xl">VISA</span>
            </div>

            {/* Mastercard */}
            <div className="flex items-center gap-1 font-bold text-white text-sm">
              <span className="flex -space-x-2">
                <span className="inline-block h-6 w-6 rounded-full bg-red-500 opacity-90" />
                <span className="inline-block h-6 w-6 rounded-full bg-amber-500 opacity-90" />
              </span>
              <span className="ml-1 font-semibold text-xs tracking-tight">mastercard</span>
            </div>

            {/* Apple Pay */}
            <div className="flex items-center gap-1 text-sm font-semibold text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6.53-9.97-11.59-20.9-15.19-32.8-3.59-11.9-5.39-23.46-5.39-34.69 0-14.24 3.74-26.04 11.22-35.39 7.48-9.35 16.74-14.07 27.78-14.16 4.35 0 9.29 1.14 14.82 3.42 5.53 2.28 9.26 3.48 11.19 3.59 1.52-.11 5.37-1.38 11.56-3.81 6.19-2.43 11.19-3.51 15-3.24 13.91.76 24.47 5.92 31.67 15.5-12.18 7.39-18.16 17.51-17.94 30.34.22 10.22 4.13 18.76 11.73 25.62 7.6 6.85 16.63 10.74 27.09 11.66-2.5 7.6-5.76 15.54-9.78 23.82zM119.22 33.15c0-7.72 2.72-14.93 8.16-21.64 5.44-6.71 12.07-10.97 19.89-12.78.22 1.3.33 2.49.33 3.58 0 7.6-2.83 14.86-8.49 21.78-5.66 6.92-12.39 11.13-20.19 12.63-.33-1.08.3-2.14.3-3.57z" />
              </svg>
              <span>Pay</span>
            </div>

            {/* Google Pay */}
            <div className="flex items-center gap-1 text-sm font-semibold text-white">
              <span className="font-bold">G</span> Pay
            </div>

            {/* Amex */}
            <div className="rounded bg-sky-700 px-2 py-0.5 text-xs font-black tracking-wider text-white">
              AMEX
            </div>

            {/* Contactless */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
              <span>Contactless</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
