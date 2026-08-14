// Signature element unique to North Leather: the Patina Ledger — a
// scroll-scrubbed timeline that literally ages one bag ten years as you
// scroll, proving "made to last" in real time instead of claiming it.
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { FeatureRows } from "@/components/FeatureRows";
import { ReviewCards } from "@/components/ReviewCards";
import { NumbersBand } from "@/components/NumbersBand";
import { PatinaLedger } from "@/components/PatinaLedger";
import { CollectionGrid } from "@/components/CollectionGrid";
import { SplitCTA } from "@/components/SplitCTA";
import { FAQ, FAQ_ITEMS } from "@/components/FAQ";
import { getProducts } from "@/lib/products";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Full-grain leather bags, hand-built for decades of daily use — the Weekender, the Field Tote, and the Belt, in vegetable-tanned hide with raw brass hardware and saddle-stitched seams.",
  alternates: { canonical: "/" },
};

const productsJsonLd = {
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
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Manifesto />
      <FeatureRows />
      <ReviewCards />
      <NumbersBand />
      <PatinaLedger />
      <CollectionGrid products={products} />
      <FAQ />
      <SplitCTA />
    </main>
  );
}
