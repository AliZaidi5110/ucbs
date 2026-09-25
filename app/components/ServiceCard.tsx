"use client";

import React from "react";
import Link from "next/link";
import { getServiceIcon } from "./icons";

export interface ServiceCardProps {
  id?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconName?: string;
  badge?: string;
  href: string;
  features?: string[];
  stats?: { label: string; value: string }[];
  ariaLabel?: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  icon,
  iconName,
  badge,
  href,
  features = [],
  stats = [],
  ariaLabel,
}: ServiceCardProps) {
  const cardId = id || `service-${title.toLowerCase().replace(/\s+/g, "-")}`;
  const titleId = `title-${cardId}`;
  const descId = `desc-${cardId}`;

  const resolvedIcon = icon || (iconName ? getServiceIcon(iconName, "h-6 w-6 text-emerald-600 dark:text-emerald-400") : getServiceIcon("credit-card", "h-6 w-6 text-emerald-600 dark:text-emerald-400"));

  return (
    <article
      id={cardId}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
      role="article"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div className="flex items-center justify-between mb-5">
        <div
          className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105 dark:bg-slate-800 dark:text-emerald-400"
          aria-hidden="true"
        >
          {resolvedIcon}
        </div>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-950/60 dark:text-emerald-400 dark:ring-emerald-500/30">
            {badge}
          </span>
        )}
      </div>

      <h3
        id={titleId}
        className="mb-2.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        {title}
      </h3>

      <p
        id={descId}
        className="mb-6 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300"
      >
        {description}
      </p>

      {stats.length > 0 && (
        <div className="mb-6 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center border border-slate-100 dark:bg-slate-800/60 dark:border-slate-800">
          {stats.map((s, idx) => (
            <div key={idx} className="px-1">
              <div className="text-sm font-extrabold text-slate-900 dark:text-emerald-400">{s.value}</div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {features.length > 0 && (
        <ul
          className="mb-6 space-y-2 border-t border-slate-100 pt-5 dark:border-slate-800/80"
          aria-label={`${title} features`}
        >
          {features.slice(0, 4).map((feature, index) => (
            <li
              key={`${cardId}-feature-${index}`}
              className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300"
            >
              <svg className="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-2">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          aria-label={ariaLabel || `Explore ${title}`}
        >
          <span>Explore Details</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      role="status"
      aria-label="Loading service card"
    >
      <div className="mb-4 h-12 w-12 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      <div className="mb-2 h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      <div className="mb-2 h-4 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      <div className="mt-auto h-11 w-full animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      <span className="sr-only">Loading service information...</span>
    </div>
  );
}
