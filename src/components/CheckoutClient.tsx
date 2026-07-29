"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/checkout";
import { checkout, fetchProducts, formatPrice } from "@/lib/checkout";
import { track } from "@/lib/funnel";
import { useCart } from "@/components/CartContext";
import { FadeUp } from "./FadeUp";

export function CheckoutClient() {
  const { items, count, remove } = useCart();
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    track("checkout");
  }, []);

  useEffect(() => {
    let alive = true;
    fetchProducts().then((live) => {
      if (alive) setCatalog(live);
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
  const total = useMemo(
    () =>
      items.reduce((s, i) => {
        const p = byId.get(i.product_id);
        return s + (p ? p.price_cents * i.quantity : 0);
      }, 0),
    [items, byId],
  );

  const onComplete = async () => {
    if (!items.length) return;
    setError(null);
    setBusy(true);
    const ok = await checkout(items);
    if (ok) {
      track("purchase");
    } else {
      setBusy(false);
      setError("Checkout couldn't be started right now. Please try again in a moment.");
    }
  };

  if (count === 0) {
    return (
      <FadeUp className="mx-auto max-w-md text-center">
        <p className="text-[15px] leading-[1.7] text-espresso/60">
          Your cart is empty.
        </p>
        <Link
          href="/product"
          className="mt-8 inline-block border border-espresso/30 px-8 py-3 text-[13px] uppercase tracking-[0.08em] text-espresso transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
        >
          Return to the collection
        </Link>
      </FadeUp>
    );
  }

  return (
    <FadeUp className="mx-auto max-w-xl">
      <ul className="divide-y divide-espresso/10 border-y border-espresso/10">
        {items.map((i) => {
          const p = byId.get(i.product_id);
          if (!p) return null;
          return (
            <li key={i.product_id} className="flex items-center justify-between gap-4 py-5">
              <div>
                <p className="font-display text-lg text-espresso">{p.name}</p>
                <p className="mt-1 text-[13px] text-espresso/50">Qty {i.quantity}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="tabular-nums text-[14px] text-espresso/70">
                  {formatPrice(p.price_cents * i.quantity, p.currency)}
                </span>
                <button
                  type="button"
                  aria-label={`Remove ${p.name}`}
                  onClick={() => remove(i.product_id)}
                  className="text-espresso/40 transition-colors hover:text-espresso"
                >
                  ×
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-[13px] uppercase tracking-[0.08em] text-espresso/60">Total</span>
        <span className="tabular-nums font-display text-2xl text-espresso">{formatPrice(total)}</span>
      </div>

      <button
        type="button"
        onClick={onComplete}
        disabled={busy}
        className="mt-8 w-full bg-espresso px-6 py-4 text-[13px] uppercase tracking-[0.08em] text-cream transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {busy ? "Redirecting to payment…" : "Complete purchase"}
      </button>
      {error && <p className="mt-4 text-center text-[14px] text-red-700">{error}</p>}

      <p className="mt-6 text-center">
        <Link href="/product" className="text-[13px] tracking-[0.04em] text-terracotta underline underline-offset-4">
          ← back to the collection
        </Link>
      </p>
    </FadeUp>
  );
}
