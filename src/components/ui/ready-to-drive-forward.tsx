import Image from "next/image";
import Link from "next/link";

export function ReadyToDriveForward() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl">
              Ready to drive forward.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Think of us as your partners in equipping your business with best-in-class solutions to
              help you win. Let&apos;s help you find the best solution.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-[#2575FC] px-8 text-base font-bold text-white transition-colors hover:bg-[#1d4ed8] sm:mt-10"
            >
              Get Started
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/f2.png"
              alt="UCBS partners ready to support your business growth"
              width={560}
              height={420}
              className="h-auto w-full max-w-[560px] rounded-[1.25rem] object-contain sm:rounded-[1.5rem]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
