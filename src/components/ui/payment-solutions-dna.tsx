import Image from "next/image";

const FEATURES = [
  {
    title: "Quick onboarding",
    description:
      "Our streamlined onboarding will have your business transacting and thriving in no time.",
    image: "/namefast-sizel.svg",
    alt: "Quick onboarding",
  },
  {
    title: "One platform",
    description:
      "Our Merchant Portal puts you in control of your payments. See the status of your payments on desktop, iOS and Android.",
    image: "/nameplatforms-sizel.svg",
    alt: "One platform",
  },
  {
    title: "Omnichannel payments",
    description:
      "We've built a full range of omnichannel payment solutions, spanning eCommerce, POS, unattended and ePOS.",
    image: "/namepayment-gateway-sizel.svg",
    alt: "Omnichannel payments",
  },
];

export function PaymentSolutionsDna() {
  return (
    <section className="section-padding bg-white">
      <div className="page-container">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <h2 className="text-2xl font-bold leading-tight text-[#1a1a2e] sm:text-3xl lg:text-4xl">
            Payment Solutions are in our BLOOD
          </h2>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Everything your business needs to accept, manage and monitor your payments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="relative mb-6 h-[120px] w-[120px] shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1a1a2e]">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
