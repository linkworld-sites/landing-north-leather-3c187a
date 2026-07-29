import type { Product } from "@/lib/checkout";
import { CartProvider } from "@/components/CartContext";
import ShopClient from "@/components/ShopClient";
import { FadeUp } from "./FadeUp";

export function CollectionGrid({ products }: { products: Product[] }) {
  return (
    <section id="shop" className="relative z-10 bg-cream px-6 py-28 md:px-10 md:py-36">
      <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-[13px] tracking-[0.04em] text-terracotta">the collection</p>
        <p className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light lowercase leading-[1.2] text-espresso">
          the finished object.
        </p>
      </FadeUp>

      {products.length === 0 ? (
        <p className="mx-auto max-w-md text-center text-[15px] leading-[1.7] text-espresso/60">
          the collection is being restocked — check back shortly, or get in touch to be first to know.
        </p>
      ) : (
        <div className="mx-auto max-w-[1300px] rounded-[2rem] bg-sand/30 p-6 md:p-10">
          <CartProvider>
            <ShopClient products={products} />
          </CartProvider>
        </div>
      )}
    </section>
  );
}
