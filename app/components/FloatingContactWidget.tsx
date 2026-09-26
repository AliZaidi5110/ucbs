"use client";

import React, { useState } from "react";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
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

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      window.open(
        `https://wa.me/442922716852?text=${encodeURIComponent(`Hi UCBS, ${question}`)}`,
        "_blank"
      );
    } else {
      setIsOpen(true);
    }
  };

  return (
    <aside
      aria-label="Instant Reach & Assistant Widget"
      className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end"
    >
      {/* Expanded Modal / Card */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[380px] rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl animate-fade-in text-slate-900">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <h4 className="text-sm font-black text-slate-900 leading-tight">UCBS Live Support</h4>
                <p className="text-[11px] text-emerald-600 font-semibold">Card Machines &amp; Funding Desk Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              aria-label="Close widget"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Action Grid */}
          <div className="space-y-2 mb-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/442922716852?text=Hello%20UCBS,%20I'd%20like%20to%20enquire%20about%20card%20machines%20and%20business%20funding."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 p-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.025-.054-.251-.082-.576-.192-1.017-.384-1.874-.817-3.08-2.736-3.173-2.86-.094-.125-.762-1.014-.762-1.935 0-.92.482-1.374.654-1.562.172-.187.375-.234.5-.234.125 0 .25.002.359.007.115.006.269-.044.421.323.157.379.537 1.309.584 1.404.047.094.079.204.016.329-.063.125-.094.204-.188.313-.094.11-.198.245-.283.33-.094.094-.192.196-.083.384.11.187.487.805 1.045 1.302.721.642 1.328.841 1.516.935.188.094.298.079.407-.047.11-.125.469-.546.594-.734.125-.187.25-.157.422-.094.172.063 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.094.859zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.15c-1.637 0-3.16-.487-4.437-1.325l-.318-.21-2.955.775.789-2.879-.229-.364C3.96 14.839 3.45 13.468 3.45 12c0-4.714 3.836-8.55 8.55-8.55 4.714 0 8.55 3.836 8.55 8.55 0 4.714-3.836 8.55-8.55 8.55z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    Live Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-500">Typical reply: ~2 minutes</div>
                </div>
              </div>
              <span className="text-emerald-600 font-bold text-xs">Chat →</span>
            </a>

            {/* Direct Phone */}
            <a
              href="tel:+442922716852"
              className="flex items-center justify-between rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 p-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    Call 029 2271 6852
                  </div>
                  <div className="text-[11px] text-slate-500">Mon–Fri: 8:30am – 6:00pm</div>
                </div>
              </div>
              <span className="text-slate-700 font-bold text-xs">Call →</span>
            </a>
          </div>

          {/* 15-Minute Guaranteed Callback */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-slate-900">Request 15-Min Callback</span>
            </div>

            {callbackSubmitted ? (
              <div className="text-center py-3">
                <span className="text-emerald-700 text-xs font-bold block mb-1">
                  ✓ Request Logged!
                </span>
                <p className="text-[11px] text-slate-600">
                  Our specialist will call <strong>{callbackPhone}</strong> within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-2">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                {callbackError && (
                  <p className="text-[10px] text-red-500">{callbackError}</p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  Confirm Callback →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Collapsed Bar: Matching Screenshot Reference Exactly */}
      {!isOpen && (
        <div className="w-[280px] sm:w-[320px] rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden">
          {/* Blue pill top */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2.5 flex items-center justify-between text-left transition-colors"
          >
            <div className="flex items-center gap-2 font-bold text-xs">
              <span>UCBS AI Assist</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
              </svg>
            </div>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {/* Search bar matching screenshot */}
          <form onSubmit={handleInputSubmit} className="p-2.5 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask us anything..."
                className="w-full pl-3 pr-9 py-2 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#0284c7] focus:bg-white"
              />
              <button
                type="submit"
                aria-label="Send inquiry"
                className="absolute right-1.5 p-1 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </aside>
  );
}
