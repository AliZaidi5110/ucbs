"use client";

import React from "react";
import ServiceCard, { ServiceCardProps, ServiceCardSkeleton } from "./ServiceCard";

interface ServiceCardGridProps {
  services: Array<ServiceCardProps>;
  isLoading?: boolean;
  columns?: 1 | 2 | 3 | 4;
  heading?: string;
  subheading?: string;
  headingLevel?: "h1" | "h2" | "h3";
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export default function ServiceCardGrid({
  services,
  isLoading = false,
  columns = 3,
  heading,
  subheading,
  headingLevel: HeadingTag = "h2",
}: ServiceCardGridProps) {
  const gridId = React.useId();

  return (
    <section
      className="w-full py-16 md:py-24 bg-slate-50/60 dark:bg-slate-950/40"
      aria-labelledby={heading ? `services-heading-${gridId}` : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            {heading && (
              <HeadingTag
                id={`services-heading-${gridId}`}
                className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
              >
                {heading}
              </HeadingTag>
            )}
            {subheading && (
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div
          className={`grid gap-6 md:gap-8 ${columnClasses[columns]}`}
          role="list"
          aria-label="Services list"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={`skeleton-${gridId}-${index}`} role="listitem">
                  <ServiceCardSkeleton />
                </div>
              ))
            : services.map((service, index) => (
                <div key={service.id || `${gridId}-service-${index}`} role="listitem">
                  <ServiceCard {...service} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
