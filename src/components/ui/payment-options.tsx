import Image from "next/image";
import Link from "next/link";

const PAYMENT_OPTIONS = [
  {
    title: "Card Machines",
    description:
      "Fast, secure card machines for every business type: retail, hospitality, or mobile.",
    image: "/online-payments.webp",
    href: "/services/merchant-services",
  },
  {
    title: "Online payments",
    description:
      "Seamlessly accept secure online payments on your website or e-commerce store anytime.",
    image: "/online-payments.webp",
    href: "/services/merchant-services",
  },
  {
    title: "ePOS System",
    description:
      "Streamline operations with POS systems that integrate perfectly with your card machines.",
    image: "/epos.png",
    href: "/services/merchant-services",
  },
];

export function PaymentOptions() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <h2 className="mx-auto mb-12 max-w-3xl text-center text-2xl font-bold leading-tight text-[#002060] sm:mb-16 sm:text-3xl lg:text-4xl">
          Choose the best way to accept payments for your business.
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {PAYMENT_OPTIONS.map((option) => (
            <article key={option.title} className="group flex flex-col items-center text-center">
              <Link href={option.href} className="relative mb-8 block w-full max-w-[280px]">
                {/* Blue L-bracket accent */}
                <span
                  className="pointer-events-none absolute -right-1 -top-1 z-10 h-16 w-16 border-r-[5px] border-t-[5px] border-[#0284c7] sm:h-20 sm:w-20"
                  aria-hidden="true"
                />
                <div className="relative flex min-h-[200px] items-end justify-center px-4 pt-6 sm:min-h-[220px]">
                  <div
                    className="absolute bottom-0 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-[50%] bg-[#dbeafe]/80 blur-sm"
                    aria-hidden="true"
                  />
                  <Image
                    src={option.image}
                    alt={option.title}
                    width={280}
                    height={220}
                    className="relative z-[1] h-auto w-full max-h-[200px] object-contain object-bottom transition-transform duration-300 group-hover:scale-105 sm:max-h-[220px]"
                  />
                </div>
              </Link>

              <h3 className="mb-3 text-xl font-bold text-[#002060] sm:text-2xl">{option.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600 sm:text-base">
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
