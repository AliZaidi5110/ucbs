"use client";

import React, { useState } from "react";

export default function QuickContactHub() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [preferredTopic, setPreferredTopic] = useState("Card Machine Rates");
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim() || phoneNumber.trim().length < 9) {
      setFormError("Please enter a valid UK phone number");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 600);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-y border-slate-800" id="instant-contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fast UK Support • Average Response: Under 2 Minutes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Need an Answer Fast? <span className="text-emerald-400">Reach Us Instantly</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            No endless menus or automated phone robots. Connect straight to a specialist who knows UK card processing and merchant business funding.
          </p>
        </div>

        {/* 3 Channels Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* CHANNEL 1: Phone */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                Direct Line
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Speak on the Phone
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Connect directly with our UK underwriting team for an immediate review of your card machine rates or funding qualification.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href="tel:+442922716852"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-all"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>Call 029 2271 6852</span>
              </a>
              <div className="text-center text-[11px] text-slate-400">
                Mon – Fri: 8:30am – 6:00pm (UK Time)
              </div>
            </div>
          </div>

          {/* CHANNEL 2: WhatsApp */}
          <div className="rounded-3xl border-2 border-emerald-500/80 bg-slate-900 p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              Most Popular
            </div>

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.025-.054-.251-.082-.576-.192-1.017-.384-1.874-.817-3.08-2.736-3.173-2.86-.094-.125-.762-1.014-.762-1.935 0-.92.482-1.374.654-1.562.172-.187.375-.234.5-.234.125 0 .25.002.359.007.115.006.269-.044.421.323.157.379.537 1.309.584 1.404.047.094.079.204.016.329-.063.125-.094.204-.188.313-.094.11-.198.245-.283.33-.094.094-.192.196-.083.384.11.187.487.805 1.045 1.302.721.642 1.328.841 1.516.935.188.094.298.079.407-.047.11-.125.469-.546.594-.734.125-.187.25-.157.422-.094.172.063 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.094.859zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.637 0-3.16-.487-4.437-1.325l-.318-.21-2.955.775.789-2.879-.229-.364C3.96 14.839 3.45 13.468 3.45 12c0-4.714 3.836-8.55 8.55-8.55 4.714 0 8.55 3.836 8.55 8.55 0 4.714-3.836 8.55-8.55 8.55z" />
                </svg>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                WhatsApp Live Chat
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Chat via WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Send a quick WhatsApp to snap a photo of your existing merchant statement or ask how much funding you can unlock today.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href="https://wa.me/442922716852?text=Hi%20UCBS,%20I'd%20like%20to%20get%20a%20fast%20quote%20for%20card%20machines%20or%20business%20funding."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 px-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
              >
                <span>Open WhatsApp Chat →</span>
              </a>
              <div className="text-center text-[11px] text-emerald-300 font-semibold">
                Average reply time: ~2 minutes
              </div>
            </div>
          </div>

          {/* CHANNEL 3: 15-Minute Guaranteed Callback */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Zero Waiting
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                15-Minute Callback
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Leave your number below. A commercial specialist will phone you back directly within 15 minutes with tailored numbers.
              </p>
            </div>

            <div>
              {isSent ? (
                <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/30 p-4 text-center">
                  <div className="text-sm font-bold text-emerald-300">✓ Callback Requested!</div>
                  <p className="text-xs text-slate-300 mt-1">
                    We will call <strong className="text-white">{phoneNumber}</strong> in approximately 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCallbackRequest} className="space-y-3">
                  <input
                    type="tel"
                    placeholder="Enter phone number (e.g. 07...)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                  
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Business Name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                    />
                    <select
                      value={preferredTopic}
                      onChange={(e) => setPreferredTopic(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-2 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="Card Machine Rates">Card Machine Rates</option>
                      <option value="Business Funding">Business Funding</option>
                      <option value="Both Packages">Both Packages</option>
                    </select>
                  </div>

                  {formError && (
                    <p className="text-[10px] text-rose-400 font-semibold">{formError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-amber-500 py-3 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 disabled:opacity-75"
                  >
                    {isSubmitting ? "Dispatching..." : "Call Me In 15 Mins →"}
                  </button>
                </form>
              )}

              <div className="mt-2.5 text-center text-[10px] text-slate-400">
                🔒 Free • No spam • Confidential
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
