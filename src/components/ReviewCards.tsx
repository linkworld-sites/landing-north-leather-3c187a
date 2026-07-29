"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeUp } from "./FadeUp";

const REVIEWS = [
  {
    name: "M. Halvorsen",
    product: "the weekender, chestnut — year 4",
    quote:
      "I bought the weekender for a two-week trip and forgot to think about it again for four years. It doesn't look new anymore — it looks like mine.",
    rotate: -3,
    accent: false,
  },
  {
    name: "R. Adeyemi",
    product: "the field tote, honey — year 1",
    quote:
      "The strap was stiff for maybe a month. Now it just moves with my shoulder. Worth every bit of the wait for it to arrive.",
    rotate: 1,
    accent: true,
  },
  {
    name: "S. Novak",
    product: "the weekender, chestnut — year 7",
    quote:
      "Given as a gift, still in daily use seven years later. The corners are darker, the buckle is duller, and it's better for both.",
    rotate: 4,
    accent: false,
  },
];

function Card({ review, index }: { review: (typeof REVIEWS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: review.rotate * 2.4, y: 30, opacity: 0 }}
      animate={inView ? { rotate: review.rotate, y: 0, opacity: 1 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.1 }}
      className={`flex w-full max-w-sm flex-col gap-5 rounded-[2rem] p-8 shadow-[0_20px_60px_-20px_rgba(58,46,40,0.25)] md:w-[340px] ${
        review.accent ? "bg-sage text-cream" : "bg-sand text-espresso"
      }`}
    >
      <p className={`font-display text-[1.05rem] font-light italic leading-[1.55] ${review.accent ? "text-cream" : "text-espresso"}`}>
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-[13px] ${
            review.accent ? "bg-cream/20 text-cream" : "bg-terracotta/15 text-terracotta"
          }`}
        >
          {review.name[0]}
        </span>
        <div>
          <p className="text-[14px] font-semibold">{review.name}</p>
          <p className={`text-[13px] ${review.accent ? "text-cream/70" : "text-espresso/60"}`}>{review.product}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ReviewCards() {
  return (
    <section className="relative z-10 bg-sand/40 px-6 py-28 md:px-10">
      <FadeUp className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-4 text-[13px] tracking-[0.04em] text-terracotta">carried, not just bought</p>
        <p className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
          what a decade sounds like.
        </p>
      </FadeUp>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-6">
        {REVIEWS.map((review, i) => (
          <Card key={review.name} review={review} index={i} />
        ))}
      </div>
    </section>
  );
}
