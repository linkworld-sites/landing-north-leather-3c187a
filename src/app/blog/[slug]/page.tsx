import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-32 pt-40 md:pt-48">
      <Link
        href="/blog"
        className="text-[13px] uppercase tracking-[0.15em] text-chestnut underline underline-offset-4"
      >
        ← All stories
      </Link>
      <h1 className="mt-10 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light tracking-tight text-ink">
        {post.title}
      </h1>
      {post.date && (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">{post.date}</p>
      )}
      <article className="post-body mt-12" dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
