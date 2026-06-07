import React from "react";
import { HomePageClient } from "./HomePageClient";
import { JsonLd, generateWebPageSchema, homeFaqSchema } from "@/components/seo/json-ld";
import { buildMetadata, SITE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  path: "/",
  keywords: [
    "business cost savings UK",
    "free business utility audit",
    "compare business energy prices",
    "merchant card machines UK",
    "business telecoms broker Wales",
  ],
  ogImage: "/img-1.jpg",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeFaqSchema} />
      <JsonLd
        data={generateWebPageSchema(
          SITE.defaultTitle,
          SITE.defaultDescription,
          "/"
        )}
      />
      <HomePageClient />
    </>
  );
}
