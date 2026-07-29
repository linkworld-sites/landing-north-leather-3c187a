"use client";

import { WordStagger } from "./FadeUp";

export function Manifesto() {
  return (
    <section className="relative z-10 bg-cream px-6 py-32 md:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <p className="wobble-underline mb-8 inline-block text-[14px] tracking-[0.04em] text-terracotta">
          our thesis
        </p>
        <WordStagger
          as="p"
          text="we build one bag at a time, so it can be carried for the rest of yours."
          className="justify-center font-display text-[clamp(1.9rem,5vw,3.4rem)] font-light lowercase leading-[1.25] text-espresso"
          baseDelay={0.05}
        />
      </div>
    </section>
  );
}
