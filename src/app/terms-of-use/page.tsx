import React from "react";
import { LegalPage } from "@/components/legal/legal-page";
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { policySections } from "@/lib/legal-content";

export const metadata = buildMetadata({
  title: "Terms of Use | UCBS Ltd",
  description:
    "Terms of Use and website disclaimer for Utility Concepts Business Solutions Ltd (UCBS).",
  path: "/terms-of-use",
  keywords: ["UCBS terms of use", "website terms", "business introducer"],
});

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms-of-use" },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema(
          "Terms of Use | UCBS Ltd",
          "Terms of Use and website disclaimer for Utility Concepts Business Solutions Ltd (UCBS).",
          "/terms-of-use"
        )}
      />
      <LegalPage
        title="Terms of Use"
        subtitle="Terms & Conditions and website disclaimer governing your use of ucbsltd.co.uk and UCBS services."
        sections={policySections}
      />
    </>
  );
}
