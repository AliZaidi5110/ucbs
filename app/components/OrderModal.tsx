"use client";

import React, { useState } from "react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTerminal?: string;
}

export default function OrderModal({ isOpen, onClose, initialTerminal = "Smart Android Touchscreen" }: OrderModalProps) {
  const [selectedTerminal, setSelectedTerminal] = useState(initialTerminal);
  const [turnover, setTurnover] = useState("£10,000 - £25,000");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [includeFunding, setIncludeFunding] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Express 24-Hour Dispatch
            </div>
            <h3 className="text-xl font-black text-slate-900 mt-1">Order Your UCBS Card Terminal</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">Order Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Our UK merchant onboarding specialist is preparing your terminal allocation for <strong>{businessName || "your business"}</strong>. We will confirm your delivery address via <strong>{phone}</strong> within 15 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/442922716852?text=Hi%20UCBS,%20I%20just%20placed%20an%20order%20for%20a%20${encodeURIComponent(selectedTerminal)}%20for%20${encodeURIComponent(businessName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
                >
                  Confirm on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Terminal Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Select Card Terminal Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "Smart Android Touchscreen", name: "Smart Touch", badge: "Most Popular", price: "£0 Upfront" },
                    { id: "Portable Wireless 4G", name: "Portable 4G", badge: "All-Day Battery", price: "£0 Upfront" },
                    { id: "Countertop High-Speed", name: "Countertop", badge: "Fixed Retail", price: "£0 Upfront" },
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setSelectedTerminal(t.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedTerminal === t.id
                          ? "border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="text-[10px] font-bold text-emerald-600 uppercase">{t.badge}</div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{t.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Turnover */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Estimated Monthly Card Turnover
                </label>
                <select
                  value={turnover}
                  onChange={(e) => setTurnover(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                >
                  <option value="Under £5,000">Under £5,000 / month (Startup / New Business)</option>
                  <option value="£5,000 - £10,000">£5,000 - £10,000 / month</option>
                  <option value="£10,000 - £25,000">£10,000 - £25,000 / month</option>
                  <option value="£25,000 - £50,000">£25,000 - £50,000 / month</option>
                  <option value="£50,000+">£50,000+ / month (Enterprise & Multi-Location)</option>
                </select>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Cafe Ltd"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Delivery Postcode
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CF10 1EP"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  UK Mobile / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="07xxx xxxxxx or 020 xxx xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>

              {/* Include Funding Checkbox */}
              <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/70 transition-colors">
                <input
                  type="checkbox"
                  checked={includeFunding}
                  onChange={(e) => setIncludeFunding(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-xs text-slate-700 leading-snug">
                  <strong>Also check eligibility for Business Funding (£5k–£500k)</strong> with repayments tied to daily card takings. Zero credit score impact.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Order Now • Free Express Dispatch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <span>✓ £0 Upfront Options</span>
                <span>✓ 30-Day Money Back</span>
                <span>✓ Next-Day Payout</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
