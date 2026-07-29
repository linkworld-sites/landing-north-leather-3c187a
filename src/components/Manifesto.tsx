"use client";

import { WordStagger } from "./FadeUp";

export function Manifesto() {
  return (
    <section className="relative z-10 bg-paper px-6 py-36 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-8 text-[11px] uppercase tracking-[0.22em] text-ink/50">01 — Thesis</p>
        <WordStagger
          as="p"
          text="We build one bag at a time, so it can be carried for the rest of yours."
          className="justify-center font-display text-[clamp(1.9rem,5vw,3.4rem)] font-light leading-[1.2] text-ink"
          baseDelay={0.05}
        />
      </div>
    </section>
  );
}
