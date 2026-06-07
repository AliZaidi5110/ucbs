import React from "react";
import { preload } from "react-dom";
import { HomePageClient } from "./HomePageClient";
import { HeroSection } from "@/components/home/hero-section";
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
  ogImage: "/logo.png",
});

export default function HomePage() {
  preload("/Untitled-3.mp4", { as: "video", fetchPriority: "high" });

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
      <HeroSection />
      <HomePageClient />
    </>
  );
}
