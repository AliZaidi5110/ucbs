"use client";

import React, { useState } from "react";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackTime, setCallbackTime] = useState("ASAP (within 15 mins)");
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackError, setCallbackError] = useState("");

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim() || callbackPhone.trim().length < 9) {
      setCallbackError("Please enter a valid UK phone number");
      return;
    }
    setCallbackError("");
    setCallbackSubmitted(true);
  };

  return (
    <aside
      aria-label="Instant Contact Options"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end"
    >
      {/* Expanded Modal / Card */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] rounded-3xl border border-slate-700/80 bg-slate-950/95 p-5 sm:p-6 shadow-2xl backdrop-blur-xl animate-fade-in text-white">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Reach Our UK Team</h4>
                <p className="text-[11px] text-emerald-400">Card Machines &amp; Funding Desk Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close contact widget"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Action Grid */}
          <div className="space-y-2.5 mb-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/442922716852?text=Hello%20UCBS,%20I'd%20like%20to%20enquire%20about%20card%20machines%20and%20business%20funding."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-3 hover:bg-emerald-500/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow-md">
                  {/* WhatsApp SVG */}
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.025-.054-.251-.082-.576-.192-1.017-.384-1.874-.817-3.08-2.736-3.173-2.86-.094-.125-.762-1.014-.762-1.935 0-.92.482-1.374.654-1.562.172-.187.375-.234.5-.234.125 0 .25.002.359.007.115.006.269-.044.421.323.157.379.537 1.309.584 1.404.047.094.079.204.016.329-.063.125-.094.204-.188.313-.094.11-.198.245-.283.33-.094.094-.192.196-.083.384.11.187.487.805 1.045 1.302.721.642 1.328.841 1.516.935.188.094.298.079.407-.047.11-.125.469-.546.594-.734.125-.187.25-.157.422-.094.172.063 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.094.859zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.637 0-3.16-.487-4.437-1.325l-.318-.21-2.955.775.789-2.879-.229-.364C3.96 14.839 3.45 13.468 3.45 12c0-4.714 3.836-8.55 8.55-8.55 4.714 0 8.55 3.836 8.55 8.55 0 4.714-3.836 8.55-8.55 8.55z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400">Instant rate check • Replies in ~2 mins</div>
                </div>
              </div>
              <svg className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+442922716852"
              className="flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 p-3 hover:bg-slate-850 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                    Call Direct: 029 2271 6852
                  </div>
                  <div className="text-[11px] text-slate-400">Speak directly with an underwriter</div>
                </div>
              </div>
              <svg className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          {/* Quick 15-Minute Callback Box */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
            <h5 className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Request an Instant Callback</span>
            </h5>
            <p className="text-[11px] text-slate-400 mb-3">
              Leave your number &amp; we&apos;ll call you with a bespoke quote.
            </p>

            {callbackSubmitted ? (
              <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 p-3 text-center">
                <span className="text-xs font-bold text-emerald-300 block">✓ Callback Booked!</span>
                <span className="text-[11px] text-slate-300 block mt-0.5">
                  We will phone you at <strong className="text-white">{callbackPhone}</strong> {callbackTime}.
                </span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-2.5">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
                
                <select
                  value={callbackTime}
                  onChange={(e) => setCallbackTime(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="ASAP (within 15 mins)">Call me ASAP (within 15 mins)</option>
                  <option value="this afternoon (between 2-5pm)">Call me this afternoon (2–5pm)</option>
                  <option value="tomorrow morning (9-12pm)">Call me tomorrow morning (9–12pm)</option>
                </select>

                {callbackError && (
                  <p className="text-[10px] text-rose-400">{callbackError}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                >
                  Confirm 15-Min Callback →
                </button>
              </form>
            )}
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10px] text-slate-500">
              🔒 100% Free • No obligation • Soft search only
            </span>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 rounded-full bg-slate-900 border-2 border-emerald-500 p-2 sm:px-4 sm:py-2.5 shadow-2xl hover:scale-105 transition-all text-white hover:bg-slate-850"
        aria-expanded={isOpen}
        aria-label="Open contact and live callback options"
      >
        <span className="relative flex h-3.5 w-3.5 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>

        <div className="hidden sm:block text-left pr-1">
          <div className="text-xs font-black text-white leading-tight flex items-center gap-1.5">
            <span>Instant Quote &amp; Chat</span>
            <span className="rounded bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.2">
              ONLINE
            </span>
          </div>
          <div className="text-[10px] text-slate-400">WhatsApp / Call / 15m Callback</div>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold group-hover:rotate-12 transition-transform">
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.774-.954 6.793 6.793 0 00.743-2.433C3.905 16.035 3 14.113 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          )}
        </div>
      </button>
    </aside>
  );
}
