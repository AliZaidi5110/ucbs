"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Will checking my eligibility affect my credit score?",
    answer: "No. Checking your eligibility with UCBS uses a soft search check that leaves zero mark on your credit file. You can check your available funding amount and card machine rates with 100% peace of mind.",
  },
  {
    question: "How do Merchant Cash Advance repayments work with my card machine?",
    answer: "Repayments are completely automated and flex with your daily card sales. An agreed percentage (typically 8% to 12%) of your daily card terminal transactions is set aside to pay down the advance. If you have a slow day, your repayment is smaller. If you have a busy weekend, you pay off more. There are never any fixed deadlines or late penalty fees.",
  },
  {
    question: "What if I already have a card machine with another provider (e.g. Worldpay, Barclaycard)?",
    answer: "You do NOT need to cancel your existing card machine contract to get funded! We can provide a business cash advance based directly on your past 3 months of merchant statements. Alternatively, if you want to slash your card processing fees, our team can help you switch terminals with zero downtime.",
  },
  {
    question: "Can I qualify if I have bad credit or past CCJs?",
    answer: "Yes. Unlike traditional banks that instantly decline applications for minor credit blemishes, our lenders look primarily at your business health and consistent monthly card machine takings (minimum £3,000/mo). We maintain an approval rate of over 90%.",
  },
  {
    question: "How fast will the funds and card machines arrive?",
    answer: "Once you submit your initial application, you will receive an offer within 24 hours. Once accepted, funds are wired directly into your business bank account within 24 to 48 hours. Card machines are pre-configured plug-and-play and dispatched via next-day courier.",
  },
  {
    question: "Do I need to change my business bank account?",
    answer: "Not at all. You keep your current business bank account (Barclays, NatWest, Lloyds, Monzo, Starling, Revolut, etc.). Both your funding and your daily card machine settlements are deposited directly into your existing bank account.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-200 mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Everything you need to know about card machines and merchant business funding.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 transition-all dark:border-slate-800 dark:bg-slate-850 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-750 text-slate-700 dark:text-slate-200 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-500 text-slate-950 dark:bg-emerald-500 dark:text-slate-950" : ""
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Have a question specific to your business?</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
              Speak directly with our UK commercial finance specialists. No call centres, no waiting.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-all dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
          >
            Speak to a Specialist →
          </Link>
        </div>

      </div>
    </section>
  );
}
