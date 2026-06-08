import Image from "next/image";
import Link from "next/link";

const PAYMENT_OPTIONS = [
  {
    title: "Card Machines",
    description:
      "Fast, secure card machines for every business type: retail, hospitality, or mobile.",
    image: "/online-payments.webp",
    alt: "Handheld card payment terminal",
    imageClassName: "max-h-[200px] sm:max-h-[220px]",
    containerClassName: "min-h-[200px] sm:min-h-[220px]",
  },
  {
    title: "Online payments",
    description:
      "Seamlessly accept secure online payments on your website or e-commerce store anytime.",
    image: "/online-payments.webp",
    alt: "Secure online card payment terminal",
    imageClassName: "max-h-[200px] sm:max-h-[220px]",
    containerClassName: "min-h-[200px] sm:min-h-[220px]",
  },
  {
    title: "ePOS System",
    description:
      "Streamline operations with POS systems that integrate perfectly with your card machines.",
    image: "/epos.png",
    alt: "UCBS ePOS system with touchscreen monitor and receipt printer",
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
                href="/services/merchant-services"
                className="relative mb-8 block w-full max-w-[300px]"
              >
                <span
                  className="pointer-events-none absolute -right-0.5 -top-0.5 z-10 h-14 w-14 border-r-[4px] border-t-[4px] border-[#0284c7] sm:h-[4.5rem] sm:w-[4.5rem] sm:border-r-[5px] sm:border-t-[5px]"
                  aria-hidden="true"
                />
                <div
                  className={`relative flex items-end justify-center overflow-hidden ${option.containerClassName}`}
                >
                  <div
                    className="absolute bottom-2 left-1/2 h-6 w-[88%] -translate-x-1/2 rounded-[50%] bg-[#dbeafe]/90 blur-[2px]"
                    aria-hidden="true"
                  />
                  <Image
                    src={option.image}
                    alt={option.alt}
                    width={300}
                    height={280}
                    className={`relative z-[1] h-auto w-full object-contain object-bottom transition-transform duration-300 group-hover:scale-[1.03] ${option.imageClassName}`}
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
      </div>
    </section>
  );
}
