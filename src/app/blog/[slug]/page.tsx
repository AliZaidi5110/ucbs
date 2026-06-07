import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { JsonLd, generateArticleSchema } from "@/components/seo/json-ld";
import { Calendar, Clock, User, ArrowLeft, Bookmark } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 50 blog posts at build time
export async function generateStaticParams() {
  const posts = await db.blogPost.findMany({
    select: { slug: true },
  });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each dynamic blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Business Savings Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;

  // Query database for the active post
  const post = await db.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  // Fetch 3 related posts in the same category for internal linking SEO
  const relatedPosts = await db.blogPost.findMany({
    where: {
      category: post.category,
      NOT: { id: post.id },
    },
    take: 3,
    orderBy: { publishedAt: "desc" },
  });

  const articleUrl = `https://www.ucbsltd.co.uk/blog/${slug}`;
  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    articleUrl,
    post.publishedAt.toISOString()
  );

  return (
    <div className="bg-background min-h-screen py-16 sm:py-24 transition-colors duration-300">
      {/* Inject JSON-LD Article Schema */}
      <JsonLd data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline mb-10 focus:outline-3 focus:outline-offset-2 focus:outline-indigo-500 rounded px-1"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to resource center
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <span className="inline-block text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-semibold border-b border-border pb-6">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2 text-indigo-500" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
              {post.publishedAt.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-indigo-500" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Rich Text Content - WCAG 2.1 AAA Compliant Contrast Typography */}
        <article
          className="prose dark:prose-invert max-w-none text-muted-foreground font-medium text-base sm:text-lg leading-relaxed space-y-6 mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-16 border-t border-border pt-6">
            <Bookmark className="w-4 h-4 text-indigo-500 mt-1 mr-2" />
            {post.tags.split(",").map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold bg-muted text-muted-foreground px-3 py-1 rounded-lg uppercase tracking-wider"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Related Posts Section - Internal Linking Strategy */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border pt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Utility Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="p-6 rounded-2xl border border-border bg-card flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-foreground text-sm mb-2 hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-xs font-bold text-primary hover:underline mt-4 inline-flex items-center"
                    aria-label={`Read related article: ${rel.title}`}
                  >
                    Read article &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
