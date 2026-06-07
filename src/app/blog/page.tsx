import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { Calendar, Clock, User } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights & Articles | Business Savings Blog",
  description: "Read our 50+ SEO-optimized business advisory articles. Learn how to negotiate commercial energy contracts, lower credit card rates, and optimize office telecoms.",
};

const CATEGORIES = [
  "All",
  "Energy & Utilities",
  "Merchant Services",
  "Broadband & VoIP",
  "Business Finance",
  "Eco Solutions",
  "Operations & Risk",
];

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const activeCategory = params.category || "All";

  const posts = await db.blogPost.findMany({
    where: activeCategory !== "All" ? { category: activeCategory } : undefined,
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title="Corporate Utilities & Finance Blog"
        description={`Explore ${posts.length} articles packed with strategies, updates, and reviews to lower overhead costs for your UK business.`}
      />

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:mb-12 sm:gap-3" aria-label="Category Filters">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-brand-navy text-white shadow-md"
                    : "border border-border bg-card text-muted-foreground hover:border-brand-blue/30 hover:text-foreground"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border py-16 text-center">
              <p className="text-lg font-medium text-muted-foreground">No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 text-lg font-bold leading-snug text-foreground group-hover:text-brand-blue sm:text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 after:rounded-xl"
                      aria-label={`Read article: ${post.title}`}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
