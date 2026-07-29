import type { Metadata } from "next";
import { CartProvider } from "@/components/CartContext";
import { ProductGrid } from "@/components/ProductGrid";
import { getProducts } from "@/lib/products";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop the collection",
  description:
    "Full-grain leather bags and goods built to be used for decades — the Weekender, the Field Tote, the Belt. Honest construction, saddle-stitched by hand.",
  alternates: { canonical: "/product" },
};

export default async function ProductPage() {
  const products = await getProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description || undefined,
        image: p.image_url || undefined,
        url: `${SITE_URL}/product`,
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: {
          "@type": "Offer",
          priceCurrency: p.currency || "EUR",
          price: (p.price_cents / 100).toFixed(2),
          availability:
            p.stock === 0
              ? "https://schema.org/OutOfStock"
              : "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main className="min-h-screen bg-cream px-6 pb-32 pt-40 md:px-10 md:pt-48">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[13px] tracking-[0.08em] text-terracotta">the collection</p>
        <h1 className="max-w-2xl font-display text-[clamp(2.25rem,5vw,3.5rem)] font-light lowercase leading-[1.15] tracking-tight text-espresso">
          made to be worn in.
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-espresso/60">
          Each piece is built from full-grain, vegetable-tanned hide and raw brass
          hardware — no lining to wear through, nothing to replace. Choose one,
          and it will still be yours in ten years.
        </p>

        {products.length === 0 ? (
          <p className="mt-20 max-w-md text-[15px] leading-[1.7] text-espresso/60">
            The collection is being restocked — check back shortly.
          </p>
        ) : (
          <div className="mt-16">
            <CartProvider>
              <ProductGrid products={products} />
            </CartProvider>
          </div>
        )}
      </div>
    </main>
  );
}
