import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import { generateServiceSchema } from "@/lib/metadata";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | UK Commercial Solutions`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | UCBS`,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
    return null;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(service.title, service.fullDescription, `https://ucbs.co.uk/services/${service.slug}`)
          ),
        }}
      />

      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-emerald-400 font-semibold" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            {service.badge && (
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400 mb-4">
                {service.badge}
              </span>
            )}
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Overview &amp; Details</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">{service.fullDescription}</p>
              </div>

              {service.stats && service.stats.length > 0 && (
                <div className="my-10 grid grid-cols-3 gap-4 rounded-3xl bg-slate-50 p-6 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <h3 className="mt-12 mb-6 text-xl font-bold text-slate-900 dark:text-white">Core Features &amp; Standards</h3>
              <ul className="grid gap-4 sm:grid-cols-2" role="list">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-2xl border border-slate-100 p-4 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-850">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-800 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Commercial Benefits</h3>
                <ul className="space-y-3" role="list">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <svg className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-emerald-400"
                  >
                    Check Eligibility / Get a Quote →
                  </Link>
                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2.5">
                    Fast 24h approval • Zero credit impact
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-850 text-center">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Have questions?</h4>
                <p className="text-xs text-slate-500 mt-1">Speak directly with our UK commercial desk.</p>
                <a
                  href="tel:08001234567"
                  className="mt-3 inline-block font-extrabold text-emerald-600 dark:text-emerald-400 text-sm hover:underline"
                >
                  📞 0800 123 4567
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
