"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FundingCalculator() {
  const [turnover, setTurnover] = useState<number>(18000);
  const [fundingAmount, setFundingAmount] = useState<number>(25000);
  const [splitPercent, setSplitPercent] = useState<number>(10);

  // Calculations
  const maxFunding = Math.round(turnover * 1.8);
  const dailySales = Math.round(turnover / 30);
  const dailyRepayment = Math.round(dailySales * (splitPercent / 100));
  
  // Total repayment factor typically ~ 1.18 to 1.25 for UK MCA
  const factorRate = 1.20;
  const totalRepayment = Math.round(fundingAmount * factorRate);
  const estDays = dailyRepayment > 0 ? Math.round(totalRepayment / dailyRepayment) : 180;
  const estMonths = (estDays / 30).toFixed(1);

  // Estimated annual terminal processing savings
  const estCardSavings = Math.round(turnover * 0.012 * 12);

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden" id="calculator">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
            <span>Transparent Funding &amp; Fee Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Calculate Your Business Funding in Seconds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See how much you can borrow against your card machine sales, and how small daily micro-deductions keep your cash flow healthy.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Monthly Card Turnover */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-200">
                    Your Monthly Card Machine Sales:
                  </label>
                  <span className="text-xl font-extrabold text-emerald-400">
                    £{turnover.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="100000"
                  step="1000"
                  value={turnover}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTurnover(val);
                    if (fundingAmount > val * 1.8) {
                      setFundingAmount(Math.round(val * 1.5));
                    }
                  }}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>£3,000/mo</span>
                  <span>£50,000/mo</span>
                  <span>£100,000+/mo</span>
                </div>
              </div>

              {/* Slider 2: Desired Funding Amount */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-200">
                    Desired Funding Amount:
                  </label>
                  <span className="text-xl font-extrabold text-white">
                    £{fundingAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max={Math.max(50000, maxFunding)}
                  step="2500"
                  value={fundingAmount}
                  onChange={(e) => setFundingAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>£5,000</span>
                  <span>Max eligible: ~£{maxFunding.toLocaleString()}</span>
                </div>
              </div>

              {/* Selector 3: Repayment Split Percentage */}
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-3">
                  Daily Card Sales Repayment Split:
                </label>
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                  {[8, 10, 12, 15].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setSplitPercent(pct)}
                      className={`rounded-xl py-3 text-xs sm:text-sm font-bold transition-all ${
                        splitPercent === pct
                          ? "bg-emerald-500 text-slate-950 shadow-md ring-2 ring-emerald-400"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Higher percentage = faster clearance. Lower percentage = maximum daily cash in your till.
                </p>
              </div>

            </div>

            {/* Right: Results Breakdown */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-7 space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Your Estimated Funding Summary
                </span>
                <div className="text-3xl font-black text-emerald-400 mt-1">
                  £{fundingAmount.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-300/80 mt-0.5">
                  Available in 24–48 hours upon approval
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Est. Daily Repayment:</span>
                  <span className="font-extrabold text-white text-base">
                    ~£{dailyRepayment} / day
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Est. Term:</span>
                  <span className="font-bold text-slate-200">
                    ~{estMonths} Months
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Repayment Type:</span>
                  <span className="font-bold text-emerald-400">
                    {splitPercent}% of card sales
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Security Required:</span>
                  <span className="font-bold text-white">None (Unsecured)</span>
                </div>
              </div>

              {/* Bonus Card Terminal Savings Box */}
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 text-xs">
                <div className="text-emerald-300 font-bold flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Card Machine Bundle Savings:</span>
                </div>
                <div className="text-slate-300 mt-1">
                  Bundle a new terminal to save approx. <strong className="text-white">£{estCardSavings.toLocaleString()} / yr</strong> in transaction fees!
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="block w-full text-center rounded-xl bg-emerald-500 py-3.5 px-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Apply for £{fundingAmount.toLocaleString()} Funding Now →
              </Link>

              <div className="text-center text-[11px] text-slate-400">
                🔒 90%+ acceptance rate • No impact on personal credit
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
