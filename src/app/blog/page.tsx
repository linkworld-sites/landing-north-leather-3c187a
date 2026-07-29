import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "the journal",
  description: "Notes from the North Leather workshop — on hides, hardware, and things built to last.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-32 pt-40 md:pt-48">
      <p className="mb-4 text-[13px] tracking-[0.08em] text-espresso/50">the journal</p>
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-light lowercase tracking-tight text-espresso">
        notes from the workshop.
      </h1>
      {posts.length === 0 ? (
        <p className="mt-12 text-espresso/60">New stories are on the way — check back soon.</p>
      ) : (
        <ul className="mt-16 divide-y divide-espresso/10">
          {posts.map((p) => (
            <li key={p.slug} className="py-8 first:pt-0">
              <Link href={`/blog/${p.slug}`} className="group block">
                {p.date && (
                  <p className="text-[13px] tracking-[0.04em] text-espresso/40">{p.date}</p>
                )}
                <h2 className="mt-2 font-display text-2xl font-normal text-espresso transition-colors duration-200 group-hover:text-terracotta">
                  {p.title}
                </h2>
                {p.description && <p className="mt-2 text-[15px] text-espresso/60">{p.description}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-20">
        <Link href="/" className="text-[14px] text-terracotta underline underline-offset-4">
          ← home
        </Link>
      </p>
    </main>
  );
}
