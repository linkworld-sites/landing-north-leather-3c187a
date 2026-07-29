"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/checkout";
import { fetchProducts, formatPrice } from "@/lib/checkout";
import { track } from "@/lib/funnel";
import { useCart } from "@/components/CartContext";
import { FadeUp } from "./FadeUp";

const SELLABLE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function ProductGrid({ products }: { products: Product[] }) {
  const { items, count, add } = useCart();
  const [catalog, setCatalog] = useState<Product[]>(products);

  useEffect(() => {
    track("product_view");
  }, []);

  useEffect(() => {
    let alive = true;
    fetchProducts().then((live) => {
      if (alive && live.length) setCatalog(live);
    });
    return () => {
      alive = false;
    };
  }, []);

  const byId = useMemo(() => {
    const m = new Map<string, Product>();
    for (const p of catalog) m.set(p.id, p);
    return m;
  }, [catalog]);
  const subtotal = useMemo(
    () =>
      items.reduce((s, i) => {
        const p = byId.get(i.product_id);
        return s + (p ? p.price_cents * i.quantity : 0);
      }, 0),
    [items, byId],
  );

  return (
    <div>
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.map((p) => {
          const sellable = SELLABLE.test(p.id);
          return (
            <FadeUp as="li" key={p.id} className="group flex flex-col">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sand/30">
                {p.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image_url}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-6 text-center font-display text-lg italic text-espresso/30">
                    {p.name}
                  </div>
                )}
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-xl text-espresso">{p.name}</h2>
                <span className="tabular-nums text-[14px] text-espresso/60">
                  {formatPrice(p.price_cents, p.currency)}
                </span>
              </div>
              {p.description && (
                <p className="mt-2 text-[14px] leading-[1.6] text-espresso/55">{p.description}</p>
              )}
              <button
                type="button"
                onClick={() => add(p)}
                disabled={!sellable}
                className="mt-5 self-start border border-espresso/30 px-6 py-2.5 text-[13px] uppercase tracking-[0.08em] text-espresso transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sellable ? "Add to cart" : "Loading…"}
              </button>
            </FadeUp>
          );
        })}
      </ul>

      <div className="sticky bottom-6 z-20 mt-16 flex justify-center">
        <div className="flex items-center gap-6 rounded-full bg-espresso px-7 py-4 text-cream shadow-lg">
          <span className="text-[13px] uppercase tracking-[0.06em] text-cream/70">
            Cart ({count})
          </span>
          <span className="tabular-nums text-[14px]">{formatPrice(subtotal)}</span>
          <Link
            href="/checkout"
            aria-disabled={count === 0}
            className={`text-[13px] uppercase tracking-[0.08em] underline underline-offset-4 transition-opacity ${
              count === 0 ? "pointer-events-none opacity-30" : "opacity-100 hover:opacity-70"
            }`}
          >
            Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}
