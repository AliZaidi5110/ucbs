import React from "react";
import { LegalPage } from "@/components/legal/legal-page";
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { cookieSections } from "@/lib/legal-content";

export const metadata = buildMetadata({
  title: "Cookie Statement | UCBS Ltd",
  description:
    "Cookie Statement for Utility Concepts Business Solutions Ltd (UCBS). How we use cookies in line with UK PECR and GDPR.",
  path: "/cookie-statement",
  keywords: ["UCBS cookies", "PECR", "cookie policy UK"],
});

export default function CookieStatementPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cookie Statement", path: "/cookie-statement" },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema(
          "Cookie Statement | UCBS Ltd",
          "Cookie Statement for Utility Concepts Business Solutions Ltd (UCBS).",
          "/cookie-statement"
        )}
      />
      <LegalPage
        title="Cookie Statement"
        subtitle="How Utility Concepts Business Solutions Ltd (UCBS) uses cookies and similar technologies on this website."
        sections={cookieSections}
      />
    </>
  );
}
