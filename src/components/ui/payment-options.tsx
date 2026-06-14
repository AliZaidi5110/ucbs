import Image from "next/image";
import Link from "next/link";

const PAYMENT_OPTIONS = [
  {
    title: "Card Machines",
    description:
      "Fast, secure card machines for every business type: retail, hospitality, or mobile.",
    image: "/card-machines.png",
    alt: "Modern handheld card payment terminal accepting a payment",
    href: "/services/merchant-services",
    imageClassName: "h-[200px] w-full object-cover object-center sm:h-[220px]",
    containerClassName: "min-h-[200px] sm:min-h-[220px] rounded-2xl overflow-hidden",
    hideShadow: true,
  },
  {
    title: "Business Funding",
    description:
      "Merchant cash advances, working capital and equipment funding from 3+ months trading.",
    image: "/services/business-funding.png",
    alt: "Business funding solutions for UK SMEs including working capital and flexible funding",
    href: "/services/business-funding",
    imageClassName: "h-[200px] w-full object-cover object-center sm:h-[220px]",
    containerClassName: "min-h-[200px] sm:min-h-[220px] rounded-2xl overflow-hidden",
    hideShadow: true,
  },
  {
    title: "ePOS System",
    description:
      "Streamline operations with POS systems that integrate perfectly with your card machines.",
    image: "/epos.png",
    alt: "UCBS ePOS system with touchscreen monitor and receipt printer",
    href: "/services/merchant-services",
    imageClassName: "max-h-[250px] sm:max-h-[280px]",
    containerClassName:
      "min-h-[230px] sm:min-h-[260px] rounded-2xl bg-white px-3 pb-2 pt-4 ring-1 ring-slate-100",
  },
];

export function PaymentOptions() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <h2 className="mx-auto mb-12 max-w-3xl text-center text-2xl font-bold leading-tight text-[#002060] sm:mb-16 sm:text-3xl lg:text-4xl">
          Accept payments your way.
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8">
          {PAYMENT_OPTIONS.map((option) => (
            <article key={option.title} className="group flex flex-col items-center text-center">
              <Link
                href={option.href}
                className="relative mb-8 block w-full max-w-[300px]"
              >
                <span
                  className="pointer-events-none absolute -right-0.5 -top-0.5 z-10 h-14 w-14 border-r-[4px] border-t-[4px] border-[#0284c7] sm:h-[4.5rem] sm:w-[4.5rem] sm:border-r-[5px] sm:border-t-[5px]"
                  aria-hidden="true"
                />
                <div
                  className={`relative flex items-center justify-center overflow-hidden ${option.containerClassName}`}
                >
                  {!option.hideShadow && (
                    <div
                      className="absolute bottom-2 left-1/2 h-6 w-[88%] -translate-x-1/2 rounded-[50%] bg-[#dbeafe]/90 blur-[2px]"
                      aria-hidden="true"
                    />
                  )}
                  <Image
                    src={option.image}
                    alt={option.alt}
                    width={300}
                    height={280}
                    className={`relative z-[1] transition-transform duration-300 group-hover:scale-[1.03] ${
                      option.imageClassName ??
                      "h-auto w-full object-contain object-bottom"
                    }`}
                  />
                </div>
              </Link>

              <h3 className="mb-3 text-xl font-bold text-[#002060] sm:text-2xl">{option.title}</h3>
              <p className="max-w-[280px] text-sm leading-relaxed text-slate-600 sm:text-base">
                {option.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#BAA2E2]/40 bg-[#BAA2E2]/15 p-6 sm:mt-16 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-wider text-[#2563eb]">
              Business Funding
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#1a1a2e] sm:text-2xl">
              Need capital to grow? We can help.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              UCBS introduces UK businesses to trusted funding partners for merchant cash advances,
              unsecured loans, and asset funding — available from 3+ months trading. Free quote, no
              obligation.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-0 lg:shrink-0 lg:flex-col">
            <Link
              href="/services/business-funding"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2563eb] px-6 text-sm font-bold text-white transition-colors hover:bg-[#1d4ed8] sm:text-base"
            >
              Explore Funding
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#2563eb] px-6 text-sm font-bold text-[#2563eb] transition-colors hover:bg-[#2563eb]/10 sm:text-base"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
