"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  index = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg sm:p-6"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-[#0f4c75] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mb-3 text-lg font-bold leading-snug text-foreground sm:text-xl">
        <Link
          href={href}
          className="after:absolute after:inset-0 after:rounded-xl focus:outline-none"
          aria-label={`${title} — view service details`}
        >
          {title}
        </Link>
      </h3>

      <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>

      <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-orange">
        <span>Learn more</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </motion.article>
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="surface-card animate-pulse p-6" aria-hidden="true">
    <div className="mb-5 h-12 w-12 rounded-xl bg-muted" />
    <div className="mb-3 h-6 w-3/4 rounded bg-muted" />
    <div className="mb-2 h-4 w-full rounded bg-muted" />
    <div className="mb-6 h-4 w-5/6 rounded bg-muted" />
    <div className="h-4 w-24 rounded bg-muted" />
  </div>
);
