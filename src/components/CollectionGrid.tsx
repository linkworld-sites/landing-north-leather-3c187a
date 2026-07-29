import Link from "next/link";
import type { Product } from "@/lib/checkout";
import { formatPrice } from "@/lib/checkout";
import { FadeUp } from "./FadeUp";

export function CollectionGrid({ products }: { products: Product[] }) {
  return (
    <section id="shop" className="relative z-10 bg-cream px-6 py-28 md:px-10 md:py-36">
      <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-[13px] tracking-[0.04em] text-terracotta">the collection</p>
        <p className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light lowercase leading-[1.2] text-espresso">
          the finished object.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.7] text-espresso/65">
          &ldquo;Pay for materials and craftsmanship, not marketing.&rdquo; Full-grain,
          vegetable-tanned hide. Raw brass hardware. Hand-saddle-stitched. Every
          piece carries a ten-year repair guarantee, no questions.
        </p>
      </FadeUp>

      {products.length === 0 ? (
        <p className="mx-auto max-w-md text-center text-[15px] leading-[1.7] text-espresso/60">
          the collection is being restocked — check back shortly, or get in touch to be first to know.
        </p>
      ) : (
        <div className="mx-auto max-w-[1300px] rounded-[2rem] bg-sand/30 p-6 md:p-10 md:p-12">
          <ul className="grid gap-8 sm:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <FadeUp as="li" key={p.id} className="group flex flex-col">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cream/70">
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
                  <h3 className="font-display text-lg text-espresso">{p.name}</h3>
                  <span className="tabular-nums text-[14px] text-espresso/60">
                    {formatPrice(p.price_cents, p.currency)}
                  </span>
                </div>
                {p.description && (
                  <p className="mt-2 text-[14px] leading-[1.6] text-espresso/55">{p.description}</p>
                )}
                <Link
                  href="/product"
                  className="mt-4 inline-block self-start text-[13px] uppercase tracking-[0.08em] text-espresso underline decoration-espresso/30 underline-offset-4 transition-colors duration-300 hover:decoration-espresso"
                >
                  Shop {p.name} →
                </Link>
              </FadeUp>
            ))}
          </ul>
          <FadeUp className="mt-14 text-center">
            <Link
              href="/product"
              className="inline-block border border-espresso/30 px-8 py-3 text-[13px] uppercase tracking-[0.08em] text-espresso transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
            >
              shop the collection
            </Link>
          </FadeUp>
        </div>
      )}
    </section>
  );
}
