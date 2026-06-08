"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    title: "One Stop for Merchant Services & Utilities",
    subtitle: "Payments · Energy · Telecoms",
    description: "Compare, switch and save with one trusted UK partner.",
    ctaText: "Request Free Quote",
    ctaHref: "/contact",
    badge: "UCBS Ltd",
  },
  {
    title: "Cash Advances & Loans for Small Business",
    subtitle: "Funding from 3+ Months Trading",
    description: "Working capital and growth funding through trusted UK lenders.",
    ctaText: "Request Free Quote",
    ctaHref: "/contact",
    badge: "Business Funding",
  },
  {
    title: "Payments for Every Channel",
    subtitle: "Card Machines · Online · ePOS",
    description: "Lower fees. Faster checkout. In-store and online.",
    ctaText: "View Payment Solutions",
    ctaHref: "/services/merchant-services",
    badge: "Merchant Services",
  },
];

const TRUST_BADGES = [
  { value: "£1.2M+", label: "Client Savings" },
  { value: "0%", label: "Upfront Fees" },
  { value: "100%", label: "No-Obligation" },
];

export function HeroContent() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!shouldReduceMotion) return;
    const video = document.getElementById("hero-video") as HTMLVideoElement | null;
    video?.pause();
  }, [shouldReduceMotion]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[activeSlide];

  return (
    <div className="page-container relative z-[3] flex w-full items-center px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-2xl text-center md:mx-0 md:text-left">
        <div className="rounded-2xl border border-white/10 bg-[#0a2540]/40 p-5 sm:p-6 md:border-white/15 md:bg-[#0a2540]/55 md:p-8 lg:max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 md:items-start md:gap-5"
            >
              <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-200 sm:inline-flex">
                {slide.badge}
              </span>

              <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <p className="text-base font-semibold leading-snug text-sky-200 sm:text-lg md:text-xl">
                {slide.subtitle}
              </p>

              <p className="hidden max-w-xl text-base leading-relaxed text-slate-200 md:block md:text-lg">
                {slide.description}
              </p>

              <div className="mt-2 flex w-full max-w-xs flex-col gap-3 sm:max-w-sm md:mt-0 md:max-w-none md:flex-row md:items-center">
                <Link
                  href={slide.ctaHref}
                  className="btn-accent inline-flex min-h-12 w-full items-center justify-center md:w-auto"
                >
                  {slide.ctaText}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/35 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 md:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-3 md:mt-8 md:justify-start">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Hero slides">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeSlide}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeSlide ? "w-7 bg-brand-orange" : "w-2 bg-white/35 hover:bg-white/55"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-6 hidden flex-wrap justify-center gap-6 sm:flex md:mt-8 md:justify-start md:gap-10"
          aria-label="Trust indicators"
        >
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="text-center md:text-left">
              <p className="text-xl font-black text-brand-orange sm:text-2xl">{badge.value}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
