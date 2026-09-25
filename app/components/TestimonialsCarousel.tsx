"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-300"}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel({ testimonials, autoPlayInterval = 7000 }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const goTo = useCallback((index: number) => setCurrent((index + total) % total), [total]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (paused || total <= 1) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next, autoPlayInterval, total]);

  const t = testimonials[current];

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-800" aria-label="Customer testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">What our clients say</h2>
        <div aria-live="polite" aria-atomic="true" className="sr-only">Testimonial {current + 1} of {total} from {t.author}</div>
        <div key={t.id} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {t.rating && <StarRating rating={t.rating} />}
          <blockquote>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">"{t.quote}"</p>
            <footer className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-900" aria-hidden="true">{t.author.charAt(0)}</div>
              <div>
                <cite className="not-italic">
                  <span className="block font-semibold text-slate-900 dark:text-white">{t.author}</span>
                  <span className="text-sm text-slate-500">{t.role}, {t.company}</span>
                </cite>
              </div>
            </footer>
          </blockquote>
        </div>
        {total > 1 && (
          <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((item, i) => (
              <button key={item.id} type="button" role="tab" aria-selected={i === current} aria-label={`Go to testimonial ${i + 1}`} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${i === current ? "w-8 bg-slate-900" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
