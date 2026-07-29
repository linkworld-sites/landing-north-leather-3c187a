import type { Metadata } from "next";
import { CartProvider } from "@/components/CartContext";
import { CheckoutClient } from "@/components/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review your order and complete your purchase from North Leather.",
  alternates: { canonical: "/checkout" },
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-cream px-6 pb-32 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-[13px] tracking-[0.08em] text-terracotta">checkout</p>
        <h1 className="mx-auto max-w-2xl text-center font-display text-[clamp(2rem,4.5vw,3rem)] font-light lowercase leading-[1.15] tracking-tight text-espresso">
          your order.
        </h1>
        <div className="mt-16">
          <CartProvider>
            <CheckoutClient />
          </CartProvider>
        </div>
      </div>
    </main>
  );
}
