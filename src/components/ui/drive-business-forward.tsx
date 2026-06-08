import Image from "next/image";
import Link from "next/link";

export function DriveBusinessForward() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl">
              Drive Your Business Forward
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              We help empower your business to be more efficient, make more profit and open up new
              revenue streams with top-tier solutions in payments, POS software and business funding.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-[#2563eb] px-8 text-base font-bold text-white transition-colors hover:bg-[#1d4ed8] sm:mt-10"
            >
              Get Started
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/f1.jpg"
              alt="Business professionals supported by UCBS across retail, hospitality and office sectors"
              width={640}
              height={480}
              className="h-auto w-full max-w-[640px] rounded-[1.25rem] object-contain sm:rounded-[1.5rem]"
              sizes="(max-width: 1024px) 100vw, 640px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
