"use client";

import React from "react";
import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime?: number;
}

export default function BlogCard({ slug, title, excerpt, publishedAt, author, category, readTime }: BlogCardProps) {
  const cardId = `blog-${slug}`;
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-slate-900 focus-within:ring-offset-2 dark:border-slate-700 dark:bg-slate-800" aria-labelledby={cardId}>
      <div className="mb-3">
        <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">{category}</span>
      </div>
      <h3 id={cardId} className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
        <Link href={`/blog/${slug}`} className="hover:underline focus-visible:outline-none">{title}</Link>
      </h3>
      <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{excerpt}</p>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{formattedDate}</span>
        {readTime && <span>{readTime} min read</span>}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">By {author}</span>
      </div>
    </article>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800" role="status" aria-label="Loading article">
      <div className="mb-3 h-5 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
      <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mb-4 h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <span className="sr-only">Loading article...</span>
    </div>
  );
}
