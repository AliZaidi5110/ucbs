"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  image,
  index = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden sm:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand-navy shadow-md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <h3 className="mb-3 text-lg font-bold leading-snug text-foreground sm:text-xl">
          <Link
            href={href}
            className="after:absolute after:inset-0 focus:outline-none"
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
      </div>
    </motion.article>
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="surface-card animate-pulse overflow-hidden" aria-hidden="true">
    <div className="h-44 bg-muted sm:h-48" />
    <div className="p-6">
      <div className="mb-3 h-6 w-3/4 rounded bg-muted" />
      <div className="mb-2 h-4 w-full rounded bg-muted" />
      <div className="mb-6 h-4 w-5/6 rounded bg-muted" />
      <div className="h-4 w-24 rounded bg-muted" />
    </div>
  </div>
);
