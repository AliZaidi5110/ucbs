"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { SERVICES_DATA } from "@/lib/services-data";

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

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroSlides = [
    {
      title: "Slash Business Utility Costs by Up to 35%",
      subtitle: "Free Corporate Tariff & Payment Audits",
      description: "Our commercial specialists review your business energy, card terminals, and internet bills to secure premium rates.",
      ctaText: "Get Free Audit",
      ctaHref: "/contact",
      badge: "Commercial Utility Brokerage",
    },
    {
      title: "Flexible Funding to Fuel Your Growth",
      subtitle: "Unlocking Asset & Working Capital",
      description: "We act as a direct introducer to leading UK finance providers, securing working capital loans and equipment leasing options.",
      ctaText: "Explore Funding",
      ctaHref: "/services/business-funding",
      badge: "Business Growth Support",
    },
    {
      title: "Smarter Payments for Every Channel",
      subtitle: "Card Machines, Online & ePOS Solutions",
      description: "Accept payments in-store, online, and at the till with integrated card machines, payment gateways, and ePOS systems tailored to your business.",
      ctaText: "View Payment Solutions",
      ctaHref: "/services/merchant-services",
      badge: "Merchant Services",
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative w-full">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden text-white sm:min-h-[560px] lg:min-h-[620px]">
        <Image
          src="/img-1.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-brand-navy/20" />

        <div className="page-container relative z-10 flex min-h-[520px] items-center py-12 sm:min-h-[560px] sm:py-16 lg:min-h-[620px] lg:py-20">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-200">
                  {heroSlides[activeSlide].badge}
                </span>
                <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {heroSlides[activeSlide].title}
                </h1>
                <p className="mt-3 text-lg font-semibold text-sky-200 sm:text-xl">
                  {heroSlides[activeSlide].subtitle}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  {heroSlides[activeSlide].description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href={heroSlides[activeSlide].ctaHref} className="btn-accent w-full sm:w-auto">
                    {heroSlides[activeSlide].ctaText}
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-lg border border-white/30 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeSlide ? "w-8 bg-brand-orange" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted">
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
                    <Icon className="h-6 w-6" />
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

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="eyebrow">What We Do</span>
            <h2 className="heading-section mt-2">Our Cost Optimisation Services</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              We audit your ongoing overhead operations to unlock hidden cost-efficiencies across 7 key business areas.
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

      {/* Testimonials */}
      <section className="section-padding border-y border-border bg-muted">
        <div className="page-container">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="eyebrow">Client Stories</span>
            <h2 className="heading-section mt-2">Trusted by Growing UK Businesses</h2>
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-navy to-[#0f4c75] text-center text-white">
        <div className="page-container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Ready to Discover Hidden Savings?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Get your quick, zero-obligation utility and merchant services review. Our UK consultants will audit your bills and find the best options.
            </p>
            <Link href="/contact" className="btn-accent mt-8 inline-flex">
              Start Your Free Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
