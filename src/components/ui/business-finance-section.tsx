"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const SALES_MIN = 5000;
const SALES_MAX = 200000;
const SALES_DEFAULT = 60000;

const TRADING_OPTIONS = [
  { label: "Under 6 months", multiplier: 0.5 },
  { label: "6+ months", multiplier: 1 },
  { label: "12+ months", multiplier: 1.1 },
  { label: "24+ months", multiplier: 1.2 },
  { label: "36+ months", multiplier: 1.3 },
];

const FEATURES = [
  ["Merchant Cash Advance", "Unsecured Business Loans"],
  ["Revenue Based Finance", "Asset Based Finance"],
  ["90% Approval Rates", "Available From 6+ Months Trading"],
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function BusinessFinanceSection() {
  const [monthlySales, setMonthlySales] = useState(SALES_DEFAULT);
  const [tradingIndex, setTradingIndex] = useState(1);

  const eligibleAmount = useMemo(() => {
    const multiplier = TRADING_OPTIONS[tradingIndex].multiplier;
    const base = monthlySales * (4 / 3);
    return Math.round(base * multiplier);
  }, [monthlySales, tradingIndex]);

  return (
    <section className="section-padding bg-[#e8e4f3]">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Calculator card */}
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <div className="space-y-4">
              <div className="rounded-xl bg-[#eef2ff] px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-sm text-slate-600">
                  How much do you take in sales each month?
                </p>
                <p className="mt-2 text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  {formatCurrency(monthlySales)}
                </p>
                <input
                  type="range"
                  min={SALES_MIN}
                  max={SALES_MAX}
                  step={1000}
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="finance-slider mt-5 w-full"
                  aria-label="Monthly sales amount"
                />
              </div>

              <div className="rounded-xl bg-[#eef2ff] px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-sm text-slate-600">
                  For how long has your company been operating?
                </p>
                <p className="mt-2 text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
                  {TRADING_OPTIONS[tradingIndex].label}
                </p>
                <input
                  type="range"
                  min={0}
                  max={TRADING_OPTIONS.length - 1}
                  step={1}
                  value={tradingIndex}
                  onChange={(e) => setTradingIndex(Number(e.target.value))}
                  className="finance-slider mt-5 w-full"
                  aria-label="Company trading history"
                />
              </div>

              <div className="rounded-xl bg-[#2563eb] px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-sm text-white/90">You could be eligible for up to*</p>
                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {formatCurrency(eligibleAmount)}
                </p>
              </div>
            </div>

            <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">
              *Amounts and pricing may be subject to change, depending on your credit profile at
              enquiry.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <p className="text-lg font-semibold text-[#2563eb] sm:text-xl">Business Finance</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#1a1a2e] sm:text-3xl lg:text-4xl">
              Fund Expansion. Improve Cashflow. Purchase Stock. Purchase Equipment.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Cash flow is the lifeblood of any business. And growth helps realise our visions. Our
              innovative financing options offers you a practical and accessible way to access
              capital with the flexibility you need.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {FEATURES.map(([left, right]) => (
                <React.Fragment key={left}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a1a2e]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm text-slate-700 sm:text-base">{left}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a1a2e]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm text-slate-700 sm:text-base">{right}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-[#2563eb] px-8 text-base font-bold text-white shadow-md transition-colors hover:bg-[#1d4ed8]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
