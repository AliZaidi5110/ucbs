import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found on UCBS Ltd.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="section-padding bg-background">
      <div className="page-container mx-auto max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">404</p>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The page you requested does not exist or may have moved. Browse our services or contact
          UCBS for business cost savings support.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary inline-flex">
            Back to Home
          </Link>
          <Link href="/services" className="btn-secondary inline-flex">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
