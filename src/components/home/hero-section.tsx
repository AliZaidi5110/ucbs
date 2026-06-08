import React from "react";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[520px] overflow-hidden bg-[#0a2540] text-white sm:min-h-[560px] lg:min-h-[620px]"
      aria-label="Hero"
    >
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover object-center brightness-105 contrast-105"
        aria-hidden="true"
      >
        <source src="/Untitled-3.mp4" type="video/mp4" />
      </video>

      {/* Light left scrim for text readability only */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a2540]/55 via-[#0a2540]/15 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a2540]/50 to-transparent sm:h-20"
        aria-hidden="true"
      />

      <HeroContent />
    </section>
  );
}
