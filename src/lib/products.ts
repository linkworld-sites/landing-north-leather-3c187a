import type { Product } from "@/lib/checkout";
import { fetchProducts } from "@/lib/checkout";

/**
 * Catalog FALLBACK ONLY. The REAL catalog — names, prices, descriptions AND
 * image_url — lives in the LinkWorld backend (set via mcp_set_company_products
 * / the cockpit) and is what the shop renders and checkout prices. To change
 * live products or their images, UPDATE THE BACKEND CATALOG — editing this
 * file changes nothing once the catalog is configured (it only shows while the
 * catalog is empty). Replace the demo rows below with plausible entries so a
 * fresh site renders, then set the real catalog via mcp_set_company_products.
 * The `Product` type is MANAGED (src/lib/checkout.ts): the key field is `id`
 * (string) — NOT `product_id`.
 */
export const CATALOG: Product[] = [
  { id: "demo-1", name: "The Weekender", description: "Full-grain chestnut leather, brass hardware, saddle-stitched by hand.", price_cents: 42000, currency: "EUR", image_url: null, stock: null },
  { id: "demo-2", name: "The Field Tote", description: "Vegetable-tanned honey leather, built for daily carry that only gets better.", price_cents: 28000, currency: "EUR", image_url: null, stock: null },
  { id: "demo-3", name: "The Belt", description: "A single strip of full-grain hide, raw brass buckle, no lining to wear through.", price_cents: 9500, currency: "EUR", image_url: null, stock: null },
];

/** Live products when configured, else the demo catalog. */
export async function getProducts(): Promise<Product[]> {
  const live = await fetchProducts();
  return live.length ? live : CATALOG;
}
