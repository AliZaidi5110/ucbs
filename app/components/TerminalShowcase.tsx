"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TerminalModel {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  idealFor: string;
  rates: string;
  payout: string;
  connectivity: string;
  features: string[];
}

const terminals: TerminalModel[] = [
  {
    id: "smart-pos",
    name: "Smart Android Touchscreen POS",
    tagline: "The all-in-one smart terminal for high-volume modern hospitality and retail.",
    badge: "Most Popular",
    idealFor: "Restaurants, Bars, Cafes & Boutiques",
    rates: "From 0.4%",
    payout: "Next Day 10am",
    connectivity: "4G SIM + Dual WiFi",
    features: [
      "Vibrant 5.5-inch HD Touchscreen",
      "High-speed thermal receipt printer",
      "Automated tipping & split bill features",
      "Built-in 4G roaming SIM with unlimited data",
      "Real-time cloud sales reporting on mobile",
      "Integrates with leading ePOS software",
    ],
  },
  {
    id: "portable-4g",
    name: "Portable Wireless 4G Terminal",
    tagline: "Take payments anywhere — at the table, in the salon chair, or on the road.",
    badge: "Maximum Mobility",
    idealFor: "Salons, Trades, Mobile Food & Delivery",
    rates: "From 0.4%",
    payout: "Next Day 10am",
    connectivity: "Multi-network 4G + WiFi",
    features: [
      "All-day 12-hour rechargeable battery",
      "Pocket-sized & drop-resistant design",
      "Accepts Apple Pay, Google Pay & Amex in < 2s",
      "Free 4G data included with zero monthly SIM fee",
      "Digital SMS & email receipts or paper slips",
      "No pairing required — ready out of the box",
    ],
  },
  {
    id: "countertop",
    name: "Countertop Queue-Buster Terminal",
    tagline: "Ultra-fast, bulletproof wired reliability for busy checkout counters.",
    badge: "Fixed Checkout",
    idealFor: "Convenience Stores, Pharmacies & Retailers",
    rates: "From 0.38%",
    payout: "Next Day 10am",
    connectivity: "Ethernet Broadband + PSTN Backup",
    features: [
      "Sub-second transaction processing speeds",
      "Heavy-duty commercial receipt printer",
      "Direct Ethernet broadband connection",
      "Zero battery charging required",
      "PCI-PTS 5.x certified security standard",
      "Lifetime hardware replacement warranty",
    ],
  },
];

export default function TerminalShowcase() {
  const [selectedTerminal, setSelectedTerminal] = useState<string>("smart-pos");

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden" id="card-machines">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
            <span>Next-Gen Payment Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            State-of-the-Art Card Machines. <span className="text-emerald-400">£0 Upfront.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Ditch clumsy, slow card machines. Upgrade to ultra-fast terminals with next-day payouts and transparent fees from just 0.4%.
          </p>
        </div>

        {/* 3 Terminal Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {terminals.map((t) => (
            <div
              key={t.id}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                t.id === "smart-pos"
                  ? "bg-slate-800/90 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10"
                  : "bg-slate-800/40 border border-slate-700/70 hover:border-slate-600"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                  t.id === "smart-pos"
                    ? "bg-emerald-500 text-slate-950"
                    : "bg-slate-700 text-slate-300"
                }`}>
                  {t.badge}
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  In Stock &amp; Dispatched 24h
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-black text-white">{t.name}</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                {t.tagline}
              </p>

              {/* Specs Box */}
              <div className="my-6 rounded-2xl bg-slate-950/70 border border-slate-800 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Hardware Cost:</span>
                  <span className="font-extrabold text-emerald-400 text-sm">£0.00 Upfront</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Transaction Rates:</span>
                  <span className="font-bold text-white">{t.rates}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Settlement:</span>
                  <span className="font-bold text-white">{t.payout}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Connection:</span>
                  <span className="font-semibold text-slate-300">{t.connectivity}</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                  <span className="text-slate-400">Best for:</span>
                  <span className="font-semibold text-slate-200">{t.idealFor}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5 mb-8 flex-grow">
                {t.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <svg className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full rounded-xl py-3.5 px-4 text-center text-sm font-bold transition-all shadow-md ${
                  t.id === "smart-pos"
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:shadow-emerald-500/25"
                    : "bg-white text-slate-900 hover:bg-slate-100"
                }`}
              >
                Claim This Card Machine
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Switch Guarantee Strip */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Switching Guarantee: Zero Downtime</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                We configure and test your machine before dispatch. Simply plug it in and start taking payments at your new lower rates immediately.
              </p>
            </div>
          </div>
          <Link
            href="/services/card-machines"
            className="flex-shrink-0 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
          >
            Learn about full terminal specs →
          </Link>
        </div>

      </div>
    </section>
  );
}
