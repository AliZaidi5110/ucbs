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
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      >
        <source src="/Untitled-3.mp4" type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,37,64,0.45)_100%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a2540]/80 via-[#0a2540]/35 to-transparent lg:via-[#0a2540]/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a2540]/70 to-transparent sm:h-28"
        aria-hidden="true"
      />

      <HeroContent />
    </section>
  );
}
