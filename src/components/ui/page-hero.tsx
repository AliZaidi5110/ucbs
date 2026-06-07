import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-[#0f4c75] to-[#0a2540] text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-orange blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-sky blur-3xl" />
      </div>
      <div className="page-container relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-200">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
