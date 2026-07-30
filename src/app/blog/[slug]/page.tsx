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

  const productJsonLd =
    post.slug === "best-leather-tote-bag-for-daily-use"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Product",
                name: "The Field Tote",
                description:
                  "Vegetable-tanned honey leather for daily carry — the kind of bag that looks better every year you use it.",
                url: `${SITE_URL}/product`,
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: { "@type": "Offer", priceCurrency: "EUR", price: "280.00" },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Product",
                name: "The Weekender",
                description:
                  "Full-grain chestnut leather, raw brass hardware, saddle-stitched by hand. Built for decades of travel, not a season of trend.",
                url: `${SITE_URL}/product`,
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: { "@type": "Offer", priceCurrency: "EUR", price: "420.00" },
              },
            },
          ],
        }
      : post.slug === "how-full-grain-leather-ages-and-develops-patina"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Product",
                name: "The Weekender",
                description:
                  "Full-grain chestnut leather, raw brass hardware, saddle-stitched by hand. Built for decades of travel, not a season of trend.",
                url: `${SITE_URL}/product`,
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: { "@type": "Offer", priceCurrency: "EUR", price: "420.00" },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Product",
                name: "The Field Tote",
                description:
                  "Vegetable-tanned honey leather for daily carry — the kind of bag that looks better every year you use it.",
                url: `${SITE_URL}/product`,
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: { "@type": "Offer", priceCurrency: "EUR", price: "280.00" },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Product",
                name: "The Belt",
                description:
                  "A single strip of full-grain hide with a raw brass buckle. No lining to wear through, nothing to replace.",
                url: `${SITE_URL}/product`,
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: { "@type": "Offer", priceCurrency: "EUR", price: "95.00" },
              },
            },
          ],
        }
      : post.slug === "full-grain-leather-weekender-bag-for-travel"
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "The Weekender",
          description:
            "Full-grain chestnut leather, raw brass hardware, saddle-stitched by hand. Built for decades of travel, not a season of trend.",
          url: `${SITE_URL}/product`,
          brand: { "@type": "Brand", name: SITE_NAME },
          offers: { "@type": "Offer", priceCurrency: "EUR", price: "420.00" },
        }
      : post.slug === "full-grain-leather-tote-bag-daily-carry"
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "The Field Tote",
          description:
            "Vegetable-tanned honey leather for daily carry — the kind of bag that looks better every year you use it.",
          url: `${SITE_URL}/product`,
          brand: { "@type": "Brand", name: SITE_NAME },
          offers: { "@type": "Offer", priceCurrency: "EUR", price: "280.00" },
        }
      : null;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-32 pt-40 md:pt-48">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
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
