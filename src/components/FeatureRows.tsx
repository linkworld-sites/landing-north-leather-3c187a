"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WordStagger, FadeUp } from "./FadeUp";

const EASE = [0.22, 1, 0.36, 1] as const;

const ROWS = [
  {
    no: "01",
    kicker: "sourcing",
    title: "full-grain hides, chosen by hand.",
    body: "only the top layer of the hide — the strongest, most durable grain — makes the cut. nothing corrected, nothing sanded smooth.",
    img: "/images/material.png",
    side: "left" as const,
  },
  {
    no: "02",
    kicker: "hardware",
    title: "raw brass, saddle-stitched by hand.",
    body: "two needles, one waxed thread, pulled tight through pre-punched holes — a seam that gets stronger with wear, not weaker.",
    img: "/images/detail.png",
    side: "right" as const,
  },
];

function RevealImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <div ref={ref} className="relative aspect-[4/5] w-full max-h-[70vh] overflow-hidden rounded-[2rem]">
      <motion.div
        initial={reduced ? undefined : { clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="absolute inset-0"
      >
        <motion.div style={reduced ? undefined : { y }} className="absolute inset-[-6%]">
          <Image src={src} alt={alt} fill sizes="(min-width: 768px) 55vw, 90vw" className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Row({ row }: { row: (typeof ROWS)[number] }) {
  return (
    <div className="grid items-center gap-x-12 gap-y-8 md:grid-cols-12 md:gap-x-16">
      <div className={`md:col-span-7 ${row.side === "right" ? "md:order-2" : "md:order-1"}`}>
        <RevealImage src={row.img} alt={row.title} />
      </div>
      <div className={`md:col-span-1 ${row.side === "right" ? "md:order-1" : "md:order-2"}`} />
      <div className="md:order-3 md:col-span-4">
        <p className="mb-4 text-[13px] tracking-[0.04em] text-terracotta">
          {row.no} — {row.kicker}
        </p>
        <WordStagger
          as="h3"
          text={row.title}
          className="font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-light lowercase leading-[1.2] text-espresso"
        />
        <FadeUp delay={0.3}>
          <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-espresso/70">{row.body}</p>
        </FadeUp>
      </div>
    </div>
  );
}

function FullBleedBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div ref={ref} className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem]">
      <motion.div style={reduced ? undefined : { scale }} className="absolute inset-0">
        <Image
          src="/images/process.png"
          alt="Cutting and skiving a leather panel on the workbench"
          fill
          sizes="90vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso/60 to-transparent" />
      <FadeUp className="absolute bottom-6 left-6 max-w-sm md:bottom-10 md:left-10">
        <p className="text-[13px] tracking-[0.04em] text-cream/70">03 — construction</p>
        <p className="mt-2 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-light lowercase leading-[1.25] text-cream">
          cut, skived, and sewn in one room.
        </p>
      </FadeUp>
    </div>
  );
}

export function FeatureRows() {
  return (
    <section id="craft" className="relative z-10 bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-24 md:gap-36">
        {ROWS.map((row) => (
          <Row key={row.no} row={row} />
        ))}

        <FullBleedBreak />

        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[13px] tracking-[0.04em] text-terracotta">04 — the object</p>
          <p className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light lowercase leading-[1.2] text-espresso">
            one bag. ten years, easily.
          </p>
          <p className="mt-5 text-[16px] leading-[1.7] text-espresso/70">
            nothing about it is disposable — which, quietly, is the entire point.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
