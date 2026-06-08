"use client";

import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/partners-data";

export function PartnersCarousel() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      className="border-y border-border bg-white py-8 sm:py-10"
      aria-labelledby="partners-heading"
    >
      <div className="page-container">
        <h2
          id="partners-heading"
          className="mb-6 text-center text-lg font-black uppercase tracking-[0.18em] text-brand-navy sm:mb-8 sm:text-xl"
        >
          Partners
        </h2>

        <div className="overflow-hidden">
          <div className="partners-marquee-track items-center gap-8 sm:gap-10">
            {logos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex h-10 w-24 shrink-0 items-center justify-center sm:h-12 sm:w-28"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={112}
                  height={48}
                  className="max-h-full max-w-full object-contain object-center"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
