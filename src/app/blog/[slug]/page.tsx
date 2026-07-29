import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getPosts } from "@/lib/posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-32 pt-40 md:pt-48">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="text-[14px] text-terracotta underline underline-offset-4">
        ← all stories
      </Link>
      <h1 className="mt-10 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light lowercase tracking-tight text-espresso">
        {post.title}
      </h1>
      {post.date && (
        <p className="mt-3 text-[13px] tracking-[0.04em] text-espresso/40">{post.date}</p>
      )}
      <article className="post-body mt-12" dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
