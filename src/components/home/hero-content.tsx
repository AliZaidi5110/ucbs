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

  return (
    <div className="page-container relative z-10 flex min-h-[520px] items-center py-12 sm:min-h-[560px] sm:py-16 lg:min-h-[620px] lg:py-20">
      <div className="max-w-2xl rounded-2xl border border-white/15 bg-[#0a2540]/88 p-6 shadow-2xl sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-200">
              {heroSlides[activeSlide].badge}
            </span>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {heroSlides[activeSlide].title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-sky-200 sm:text-xl">
              {heroSlides[activeSlide].subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {heroSlides[activeSlide].description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={heroSlides[activeSlide].ctaHref} className="btn-accent w-full sm:w-auto">
                {heroSlides[activeSlide].ctaText}
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-lg border border-white/30 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeSlide ? "w-8 bg-brand-orange" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
