import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | UCBS Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
    return null;
  }

  return (
    <>
      <article>
        <header className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>
            <span className="inline-block rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By {post.author}</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl leading-relaxed text-slate-700 dark:text-slate-300">
              {post.excerpt}
            </p>
            
            <h2>Introduction</h2>
            <p>
              This is a placeholder for the full article content. In a production environment, this would be populated from a CMS or markdown files with rich content including images, code examples, and detailed explanations.
            </p>

            <h2>Key Points</h2>
            <p>
              The article would continue here with comprehensive coverage of the topic, practical examples, and actionable insights for readers.
            </p>

            <h3>Conclusion</h3>
            <p>
              Every article wraps up with a summary and call-to-action encouraging readers to apply what they&apos;ve learned or reach out for professional assistance.
            </p>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Tags</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
            <Link
              href="/blog"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
