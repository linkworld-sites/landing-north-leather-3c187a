"use client";

import Image from "next/image";
import { FadeUp } from "./FadeUp";

function Glyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className="text-tan" aria-hidden>
      <rect x="1" y="1" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function QuotePanel() {
  return (
    <section className="relative z-10 overflow-hidden bg-umber px-6 py-28 md:px-10">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/material.png"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover blur-2xl"
        />
      </div>
      <div className="absolute inset-0 bg-umber/70" />

      <FadeUp className="relative mx-auto max-w-2xl">
        <div className="liquid-glass noise-overlay rounded-2xl p-5 md:p-6">
          <span className="pointer-events-none absolute -top-6 left-4 font-display text-[9rem] leading-none text-white/10 md:text-[11rem]">
            &rdquo;
          </span>
          <div className="relative mb-6 flex items-center justify-center gap-3">
            <Glyph />
            <p className="text-[11px] uppercase tracking-[0.22em] text-tan">Client Voice</p>
            <Glyph />
          </div>
          <p className="relative text-center font-display text-[13.5px] italic leading-[1.6] text-white/85 md:text-[16px]">
            I bought the Weekender for a two-week trip and forgot to think about it again for four
            years. It doesn&apos;t look new anymore. It looks like mine — the corners are darker where
            my hand goes, and the strap has finally stopped being stiff. That&apos;s the whole
            pitch, really.
          </p>
          <p className="relative mt-6 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">
            <span className="font-semibold text-white">M. Halvorsen</span> — Weekender, Chestnut, Year 4
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
