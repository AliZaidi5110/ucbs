import React from "react";
import { LegalPage } from "@/components/legal/legal-page";
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { policySections } from "@/lib/legal-content";

export const metadata = buildMetadata({
  title: "Privacy Policy | UCBS Ltd",
  description:
    "Privacy Policy for Utility Concepts Business Solutions Ltd (UCBS). How we collect, use, and protect your data under UK GDPR.",
  path: "/privacy-policy",
  keywords: ["UCBS privacy policy", "UK GDPR", "data protection"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema(
          "Privacy Policy | UCBS Ltd",
          "Privacy Policy for Utility Concepts Business Solutions Ltd (UCBS).",
          "/privacy-policy"
        )}
      />
      <LegalPage
        title="Privacy Policy"
        subtitle="Privacy Policy, Terms & Conditions & Website Disclaimer for Utility Concepts Business Solutions Ltd (UCBS)."
        sections={policySections}
      />
    </>
  );
}
