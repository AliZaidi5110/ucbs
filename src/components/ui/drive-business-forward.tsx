import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DriveBusinessForward() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl" />

      <div className="page-container section-padding relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-blue">
              Grow With UCBS
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-[2.75rem]">
              Drive Your Business Forward
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              We help empower your business to be more efficient, make more profit and open up new
              revenue streams with top-tier solutions in payments, POS software and business finance.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-600 sm:text-base">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                Smarter payment and POS solutions
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                Flexible business finance options
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                Dedicated UK advisory support
              </li>
            </ul>
            <Link
              href="/contact"
              className="group mt-8 inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-blue-500/30 sm:mt-10"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto lg:max-w-xl">
            <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-orange/15 blur-sm" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/f1.jpg"
                  alt="UCBS supports businesses across retail, hospitality, and professional services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
