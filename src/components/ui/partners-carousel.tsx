"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { PARTNER_LOGOS } from "@/lib/partners-data";

const AUTO_INTERVAL_MS = 3000;

export function PartnersCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [stepPx, setStepPx] = useState(232);

  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  const loopWidth = PARTNER_LOGOS.length * stepPx;

  const normalizeOffset = useCallback(
    (value: number) => {
      if (loopWidth <= 0) return 0;
      let next = value % loopWidth;
      if (next < 0) next += loopWidth;
      return next;
    },
    [loopWidth]
  );

  const slideBy = useCallback(
    (direction: 1 | -1) => {
      setOffset((current) => normalizeOffset(current + direction * stepPx));
    },
    [normalizeOffset, stepPx]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.querySelector<HTMLElement>("[data-partner-item]");
    if (!firstItem) return;

    const gap = 48;
    setStepPx(firstItem.offsetWidth + gap);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const interval = window.setInterval(() => {
      slideBy(1);
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [isPaused, shouldReduceMotion, slideBy]);

  return (
    <section
      className="border-y border-border bg-white py-12 sm:py-14"
      aria-labelledby="partners-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="page-container">
        <h2
          id="partners-heading"
          className="mb-8 text-center text-2xl font-black uppercase tracking-[0.2em] text-brand-navy sm:mb-10 sm:text-3xl"
        >
          Partners
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => slideBy(-1)}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-navy shadow-md transition-colors hover:bg-muted sm:-left-2"
            aria-label="Previous partner logo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => slideBy(1)}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-navy shadow-md transition-colors hover:bg-muted sm:-right-2"
            aria-label="Next partner logo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-10 sm:px-12">
            <div
              ref={trackRef}
              className="flex w-max items-center gap-12 transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  data-partner-item
                  className="flex h-16 w-[184px] shrink-0 items-center justify-center sm:h-20 sm:w-[200px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={80}
                    className="max-h-full max-w-full object-contain object-center"
                    sizes="200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
