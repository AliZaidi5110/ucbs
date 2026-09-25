import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Check Eligibility & Get a Free Quote",
  description:
    "Apply for UK card payment machines with £0 upfront hardware, or check your business funding eligibility from £5k to £500k in 60 seconds with no credit score impact.",
  openGraph: {
    title: "Check Eligibility & Contact UCBS",
    description:
      "Get a free rate review for card payment machines or apply for fast business cash advance funding up to £500,000.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-4">
            <span>⚡ 60-Second Application • No Hard Credit Checks</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Check Your Eligibility &amp; Get a Free Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
            Tell us about your business. Our UK team will match you with the lowest card transaction rates and the most competitive funding terms available.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-slate-900" aria-labelledby="contact-form-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Contact Form Column */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-850">
              <h2 id="contact-form-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                Request Free Rate Review or Funding Offer
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                100% free and confidential. A UK commercial specialist will respond within 15–30 minutes during trading hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info & Trust Column */}
            <aside className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Direct UK Business Support</h2>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Prefer to discuss your card terminal or working capital requirements over the phone?
                </p>

                <address className="mt-6 space-y-5 not-italic text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Direct Phone Consultation</h3>
                      <a href="tel:+442922716852" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                        029 2271 6852
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Direct Email</h3>
                      <a href="mailto:info@ucbsltd.co.uk" className="text-slate-600 dark:text-slate-300 hover:text-emerald-500">
                        info@ucbsltd.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Office Location</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-0.5">Haverfordwest, Pembrokeshire, Wales SA61 2RE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Trading Hours</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-0.5">Monday – Friday: 8:30am – 6:00pm</p>
                      <p className="text-slate-500 text-xs">Applications processed 24/7 online</p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Guarantees Box */}
              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/50 p-6 sm:p-8 dark:bg-emerald-950/20">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">The UCBS Commercial Promise</h3>
                <ul className="mt-4 space-y-3" role="list">
                  {[
                    "£0 Upfront terminal costs on approved accounts",
                    "Next-day payouts into your existing bank account",
                    "90%+ acceptance rate on business cash advances",
                    "Repayments flex automatically with your daily card takings",
                    "Zero penalty charges or hidden PCI compliance fees",
                    "Dedicated UK account manager for lifetime support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
