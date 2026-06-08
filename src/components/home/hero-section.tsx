import React from "react";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[min(100svh,780px)] items-center overflow-hidden bg-[#0a2540] text-white sm:min-h-[560px] lg:min-h-[620px]"
      aria-label="Hero"
    >
      {/* Layer 1 — video background */}
      <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/Untitled-3.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Layer 2 — readability overlay (lighter on mobile so video stays visible) */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#0a2540]/30 via-[#0a2540]/45 to-[#0a2540]/80 md:bg-gradient-to-r md:from-[#0a2540]/65 md:via-[#0a2540]/30 md:to-[#0a2540]/10"
        aria-hidden="true"
      />

      {/* Layer 3 — content */}
      <HeroContent />
    </section>
  );
}
