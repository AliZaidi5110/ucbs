import Image from "next/image";
import Link from "next/link";

const GALLERY = [
  {
    src: "/f1.jpg",
    alt: "Business professional in office",
    className: "mt-10 h-[220px] sm:mt-14 sm:h-[260px] lg:mt-16 lg:h-[280px]",
  },
  {
    src: "/f2.jpg",
    alt: "Retail business owner",
    className: "h-[260px] sm:h-[300px] lg:h-[340px]",
  },
  {
    src: "/f3.jpg",
    alt: "Confident business leader",
    className: "mt-6 h-[230px] sm:mt-8 sm:h-[270px] lg:mt-10 lg:h-[300px]",
  },
];

export function DriveBusinessForward() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1a1a2e] sm:text-4xl lg:text-5xl">
              Drive Your Business Forward
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              We help empower your business to be more efficient, make more profit and open up new
              revenue streams with top-tier solutions in payments, POS software and business finance.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-[#2563eb] px-8 text-base font-bold text-white shadow-md transition-colors hover:bg-[#1d4ed8] sm:mt-10"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-start justify-center gap-3 sm:gap-4 lg:justify-end lg:gap-5">
            {GALLERY.map((item) => (
              <div
                key={item.src}
                className={`relative w-[30%] max-w-[140px] shrink-0 overflow-hidden rounded-2xl sm:max-w-[160px] lg:max-w-[180px] ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 30vw, 180px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
