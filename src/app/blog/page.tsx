import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = { title: "Journal — North Leather" };

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-32 pt-40 md:pt-48">
      <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-ink/50">The Journal</p>
      <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-light tracking-tight text-ink">
        Notes from the workshop.
      </h1>
      {posts.length === 0 ? (
        <p className="mt-12 text-ink/60">New stories are on the way — check back soon.</p>
      ) : (
        <ul className="mt-16 divide-y divide-ink/10">
          {posts.map((p) => (
            <li key={p.slug} className="py-8 first:pt-0">
              <Link href={`/blog/${p.slug}`} className="group block">
                {p.date && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">{p.date}</p>
                )}
                <h2 className="mt-2 font-display text-2xl font-normal text-ink transition-colors duration-200 group-hover:text-chestnut">
                  {p.title}
                </h2>
                {p.description && <p className="mt-2 text-[15px] text-ink/60">{p.description}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-20">
        <Link href="/" className="text-[13px] uppercase tracking-[0.15em] text-chestnut underline underline-offset-4">
          ← Home
        </Link>
      </p>
    </main>
  );
}
