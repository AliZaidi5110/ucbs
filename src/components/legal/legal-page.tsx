import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { LEGAL_COMPANY, LEGAL_LAST_UPDATED, type LegalSection } from "@/lib/legal-content";

type LegalPageProps = {
  title: string;
  subtitle: string;
  sections: LegalSection[];
};

export function LegalPage({ title, subtitle, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={subtitle} />

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-sm text-muted-foreground">
              <strong className="text-foreground">{LEGAL_COMPANY}</strong> · Last updated:{" "}
              {LEGAL_LAST_UPDATED}
            </p>

            <div className="prose-legal space-y-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-muted p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                For questions about this document, contact{" "}
                <a href="mailto:info@ucbsltd.co.uk" className="font-medium text-brand-blue hover:underline">
                  info@ucbsltd.co.uk
                </a>{" "}
                or visit our{" "}
                <Link href="/contact" className="font-medium text-brand-blue hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
