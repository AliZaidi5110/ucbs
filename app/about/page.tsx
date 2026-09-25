import { Metadata } from "next";
import Link from "next/link";
import { team, achievements } from "@/lib/team";

export const metadata: Metadata = {
  title: "About UCBS | UK Commercial Business Solutions",
  description:
    "Learn about UCBS - UK specialists in card payment terminals, Merchant Cash Advance funding, business telecoms, and energy savings for over 2,500 merchants.",
  openGraph: {
    title: "About Us | UCBS UK",
    description:
      "Learn about UCBS - UK specialists in card machines, fast business funding £5k–£500k, and essential commercial utilities.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-4">
            <span>Specialist UK Brokerage</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">About UCBS</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
            Dedicated to helping UK small and medium businesses lower payment processing costs and secure fast, flexible capital without the red tape of high street banks.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 id="story-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  UCBS was established with a singular objective: to level the playing field for British independent business owners. For years, traditional high street banks have penalised SMEs with inflated card processing rates, clunky equipment, and slow, rigid lending processes that require personal home charges.
                </p>
                <p>
                  We built our business around the power of card terminal revenue. By pairing businesses with next-generation smart card terminals at wholesale rates and introducing them to revenue-based Merchant Cash Advances, we allow businesses to borrow working capital where repayments flex automatically with daily sales.
                </p>
                <p>
                  Today, we have introduced over £15M in growth capital and helped more than 2,500 UK restaurants, retailers, salons, and service providers reduce transaction fees by up to 40%.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list" aria-label="Company achievements">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-800/60"
                  role="listitem"
                >
                  <p className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">{achievement.value}</p>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-50 py-16 md:py-24 dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="team-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Meet Our Commercial Specialists
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Our UK team brings deep expertise in payment processing, revenue underwriting, and SME business advocacy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-lg font-black">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">{member.role}</p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="values-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Principles
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Zero Hidden Costs", description: "Clear transaction fees and transparent factor rates. Never any surprise compliance penalties or maintenance fees." },
              { title: "24-Hour Velocity", description: "Business moves fast. We deliver decisions within hours, and wired capital or plug-and-play terminals within 24 to 48 hours." },
              { title: "Pro-Merchant Terms", description: "Repayments that flex with sales. If trading slows, payments reduce. No debt spirals or late penalty fees." },
              { title: "Dedicated UK Contact", description: "No offshore call centres. A direct UK commercial specialist on phone and WhatsApp whenever you need assistance." },
            ].map((value, index) => (
              <article key={index} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 dark:bg-slate-800 dark:border-slate-700/60">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 md:py-20 text-white border-t border-slate-800" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to upgrade your card machines or access funding?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
            Check your eligibility in 60 seconds with zero credit score impact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center rounded-xl bg-emerald-500 px-8 py-3 text-sm font-bold text-slate-950 shadow-md hover:bg-emerald-400 transition-all"
            >
              Get a Free Quote &amp; Eligibility Check →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
