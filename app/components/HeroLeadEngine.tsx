"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HeroLeadEngine() {
  const [activeTab, setActiveTab] = useState<"card" | "funding">("card");

  // Card Machine State
  const [cardVolume, setCardVolume] = useState<number>(12000);
  const [businessType, setBusinessType] = useState<string>("Hospitality / Restaurant");
  const [currentProvider, setCurrentProvider] = useState<string>("Switching / Have existing terminal");

  // Funding State
  const [fundingAmount, setFundingAmount] = useState<number>(25000);
  const [monthlySales, setMonthlySales] = useState<number>(15000);

  // Form State
  const [contactName, setContactName] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  // Dynamic calculations
  // Card savings estimate: approx 30-40% savings vs typical 1.8% high street rate (0.5% vs 1.8% = 1.3% saved)
  const estAnnualSavings = Math.round(cardVolume * 0.012 * 12);
  const estMonthlySavings = Math.round(cardVolume * 0.012);

  // Funding estimate: Up to 1.5 - 2x monthly card turnover, daily repayment ~ 10% of daily takings
  const maxFundingEligible = Math.min(500000, Math.round(monthlySales * 2));
  const estDailyRepayment = Math.round((monthlySales / 30) * 0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim() || !businessName.trim()) {
      setFormError("Please fill in all 3 fields to receive your instant quote.");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    // Simulate fast processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High Conversion Value Proposition */}
          <div className="lg:col-span-7">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 shadow-sm backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>UK Card Terminals &amp; Fast Business Funding</span>
              <span className="text-emerald-400/50">•</span>
              <span className="text-white font-normal">24h Decisions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Cut Card Fees by 40% &amp; Unlock Funding from{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                £5k to £500k
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Get state-of-the-art card payment machines with <strong className="text-white">£0 upfront hardware</strong> and access fast working capital where repayments flex automatically with your daily card sales.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 backdrop-blur-sm">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">£0 Upfront Terminals</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Next-day settlement, low rates from 0.4%</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 backdrop-blur-sm">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">90%+ Funding Acceptance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">No property or business plan needed</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 backdrop-blur-sm">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Repay As You Earn</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Quiet day = lower payment, no late penalties</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 backdrop-blur-sm">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Credit Score Impact</h4>
                  <p className="text-xs text-slate-400 mt-0.5">60-second soft check for eligibility</p>
                </div>
              </div>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-white">4.9 / 5</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Over 1,200+ UK Merchants</div>
              </div>

              <div className="h-8 w-px bg-slate-800 hidden sm:block" />

              <div>
                <div className="text-base font-bold text-white">£15M+</div>
                <div className="text-xs text-slate-400">Capital Funded in 2024</div>
              </div>

              <div className="h-8 w-px bg-slate-800 hidden sm:block" />

              <div>
                <div className="text-base font-bold text-emerald-400">24-Hour</div>
                <div className="text-xs text-slate-400">Average Payout Speed</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive High-Converting Lead Engine */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              {/* Top Tab Toggle */}
              <div className="flex rounded-2xl bg-slate-950 p-1.5 border border-slate-800 mb-6">
                <button
                  type="button"
                  onClick={() => { setActiveTab("card"); setIsSubmitted(false); }}
                  className={`flex-1 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all ${
                    activeTab === "card"
                      ? "bg-emerald-500 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  💳 Card Machine Rates
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab("funding"); setIsSubmitted(false); }}
                  className={`flex-1 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all ${
                    activeTab === "funding"
                      ? "bg-emerald-500 text-slate-950 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  💰 Business Funding
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center animate-fade-in">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Instant Quote Reserved!</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{contactName}</strong>. Based on <strong className="text-emerald-400">{businessName}</strong>, your quote has been generated.
                  </p>
                  
                  <div className="my-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 p-4 text-left">
                    <div className="text-xs text-slate-400">Estimated Result:</div>
                    {activeTab === "card" ? (
                      <div className="mt-1">
                        <div className="text-lg font-extrabold text-emerald-400">Est. ~£{estAnnualSavings.toLocaleString()} / year saved</div>
                        <div className="text-xs text-slate-300 mt-1">Hardware: £0 upfront • Next-day payouts included</div>
                      </div>
                    ) : (
                      <div className="mt-1">
                        <div className="text-lg font-extrabold text-emerald-400">Eligible for up to £{maxFundingEligible.toLocaleString()}</div>
                        <div className="text-xs text-slate-300 mt-1">Funds available within 24–48 hours • 94% acceptance</div>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-400">
                    A dedicated UK commercial specialist is reviewing your application and will phone <strong className="text-slate-200">{contactPhone}</strong> shortly.
                  </p>
                  
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs text-emerald-400 underline hover:text-emerald-300"
                  >
                    ← Check another quote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {activeTab === "card" ? (
                    <>
                      {/* CARD MACHINE SLIDER */}
                      <div>
                        <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                          <span>Monthly Card Turnover</span>
                          <span className="text-base font-bold text-emerald-400">
                            £{cardVolume.toLocaleString()} / mo
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1000"
                          max="80000"
                          step="1000"
                          value={cardVolume}
                          onChange={(e) => setCardVolume(Number(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>£1k/mo</span>
                          <span>£40k/mo</span>
                          <span>£80k+/mo</span>
                        </div>
                      </div>

                      {/* Current Setup Dropdown */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Current Payment Setup
                        </label>
                        <select
                          value={currentProvider}
                          onChange={(e) => setCurrentProvider(e.target.value)}
                          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        >
                          <option value="Switching / Have existing terminal">Switching provider (Cut existing fees)</option>
                          <option value="New business / Need first terminal">New business (First card machine)</option>
                          <option value="Need extra terminals">Need additional mobile/countertop terminals</option>
                        </select>
                      </div>

                      {/* Dynamic Live Value Hook */}
                      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-emerald-300 font-medium">Estimated Fee Savings:</div>
                          <div className="text-base font-black text-emerald-400">
                            ~£{estAnnualSavings.toLocaleString()} / year
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] text-slate-400">Terminal Cost:</div>
                          <div className="text-sm font-bold text-white">£0 Upfront</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* BUSINESS FUNDING SLIDERS */}
                      <div>
                        <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                          <span>Funding Amount Desired</span>
                          <span className="text-base font-bold text-emerald-400">
                            £{fundingAmount.toLocaleString()}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="150000"
                          step="2500"
                          value={fundingAmount}
                          onChange={(e) => setFundingAmount(Number(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                          <span>£5,000</span>
                          <span>£75,000</span>
                          <span>£150,000+</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                          <span>Monthly Card Sales</span>
                          <span className="text-sm font-bold text-white">
                            £{monthlySales.toLocaleString()} / mo
                          </span>
                        </div>
                        <input
                          type="range"
                          min="3000"
                          max="80000"
                          step="1000"
                          value={monthlySales}
                          onChange={(e) => setMonthlySales(Number(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                      </div>

                      {/* Dynamic Live Value Hook */}
                      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-emerald-300 font-medium">Est. Eligibility:</div>
                          <div className="text-base font-black text-emerald-400">
                            Up to £{maxFundingEligible.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] text-slate-400">Decision Speed:</div>
                          <div className="text-sm font-bold text-white">Within 24h</div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Fast Lead Capture Fields */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {formError && (
                    <p className="text-xs text-rose-400 font-medium">{formError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-emerald-500 py-3.5 px-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-75 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Calculating best rates...</span>
                    ) : (
                      <>
                        <span>{activeTab === "card" ? "Get Free Terminal & Rate Quote" : "Check 60-Second Funding Eligibility"}</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      100% Free &amp; No Obligation
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      No Credit Impact
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
