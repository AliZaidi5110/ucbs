import { Metadata } from "next";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Merchant Insights & Business Funding Guides",
  description:
    "Expert guides, industry tips, and practical advice on card payment machines, Merchant Cash Advances, fee reduction, and SME cash flow.",
  openGraph: {
    title: "Merchant Insights & Funding Guides | UCBS",
    description:
      "Expert guides on card payment machines, Merchant Cash Advances, fee reduction, and SME cash flow.",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-4">
            <span>Merchant Resources &amp; Financial Guides</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Merchant Insights &amp; Funding Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
            Learn how to negotiate lower card processing fees, leverage your daily takings for business funding, and protect your profit margins.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-slate-900" aria-labelledby="blog-list-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="blog-list-heading" className="sr-only">All Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                publishedAt={post.publishedAt}
                author={post.author}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
