"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  Percent,
  CheckCircle,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { PaymentOptions } from "@/components/ui/payment-options";
import { PaymentSolutionsDna } from "@/components/ui/payment-solutions-dna";
import { DriveBusinessForward } from "@/components/ui/drive-business-forward";
import { BusinessFinanceSection } from "@/components/ui/business-finance-section";
import { PartnersCarousel } from "@/components/ui/partners-carousel";
import { SERVICES_DATA } from "@/lib/services-data";
import { HOME_FAQS } from "@/lib/seo";

const TESTIMONIALS = [
  {
    quote: "UCBS reduced our annual electricity bill by 35% and sorted our phone line transition seamlessly. The process was stress-free and very quick.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "Apex Manufacturing Ltd",
  },
  {
    quote: "Finding growth capital was a massive bottleneck for us. UCBS introduced us to the right funding partners who approved our expansion finance within a week.",
    author: "David Vance",
    role: "Co-Founder",
    company: "Hyperion Tech Hub",
  },
  {
    quote: "Their card terminal audit saved us £400 monthly in card processing fees. The customer support is fantastic.",
    author: "Amelie Roux",
    role: "Finance Director",
    company: "Gourmet Bistros Group",
  },
];

const STATS = [
  { icon: TrendingDown, value: "£1.2M+", label: "Client Savings Secured", color: "from-blue-500 to-brand-blue" },
  { icon: Percent, value: "0%", label: "Upfront Management Fees", color: "from-brand-orange to-brand-amber" },
  { icon: CheckCircle, value: "100%", label: "No-Obligation Reviews", color: "from-brand-emerald to-teal-500" },
];

export function HomePageClient() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative w-full">
      <section className="border-b border-border bg-muted" aria-label="Company highlights">
        <div className="page-container py-8 sm:py-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="surface-card flex items-center gap-4 p-5 sm:p-6"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-foreground">{stat.value}</p>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PaymentOptions />

      <PaymentSolutionsDna />

      <DriveBusinessForward />

      <BusinessFinanceSection />

      <section className="section-padding bg-background" aria-labelledby="services-heading">
        <div className="page-container">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="eyebrow">What We Do</span>
            <h2 id="services-heading" className="heading-section mt-2">Our Services</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Seven ways to cut your business costs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-muted" aria-labelledby="testimonials-heading">
        <div className="page-container">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="eyebrow">Client Stories</span>
            <h2 id="testimonials-heading" className="heading-section mt-2">Trusted by Growing UK Businesses</h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="surface-card p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-lg font-medium italic leading-relaxed text-foreground sm:text-xl lg:text-2xl">
                    &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 border-t border-border pt-6">
                    <cite className="not-italic">
                      <span className="block font-bold text-foreground">
                        {TESTIMONIALS[activeTestimonial].author}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].company}
                      </span>
                    </cite>
                  </footer>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeTestimonial ? "w-6 bg-brand-blue" : "w-2 bg-slate-300"
                      }`}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersCarousel />

      <section className="section-padding bg-background" aria-labelledby="faq-heading">
        <div className="page-container">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-heading" className="heading-section mt-2">Frequently Asked Questions</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Quick answers about UCBS business cost reviews and UK services.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4">
            {HOME_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="surface-card group p-5 sm:p-6"
              >
                <summary className="cursor-pointer list-none text-base font-bold text-foreground marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-brand-navy to-[#0f4c75] text-center text-white" aria-labelledby="cta-heading">
        <div className="page-container">
          <div className="mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-3xl font-black leading-tight sm:text-4xl">
              Ready to Save?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Free quote. No obligation. UK experts on your side.
            </p>
            <Link href="/contact" className="btn-accent mt-8 inline-flex">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
