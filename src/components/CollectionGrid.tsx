"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "./FadeUp";

const WORKS = [
  {
    no: "01",
    name: "The Weekender",
    medium: "Chestnut, full-grain, brass hardware",
    dims: "52 × 30 × 22 cm — 2026",
    img: "/images/hero.png",
  },
  {
    no: "02",
    name: "Study — Grain",
    medium: "Vegetable-tanned hide, macro detail",
    dims: "Workshop reference, plate II",
    img: "/images/material.png",
  },
  {
    no: "03",
    name: "Study — Hardware",
    medium: "Raw brass, saddle-stitched edge",
    dims: "Workshop reference, plate III",
    img: "/images/detail.png",
  },
  {
    no: "04",
    name: "Study — The Bench",
    medium: "Hand-cut, hand-sewn, one needle",
    dims: "Workshop reference, plate IV",
    img: "/images/process.png",
  },
];

export function CollectionGrid() {
  return (
    <section id="collection" className="relative z-10 bg-paper px-6 py-32 md:px-10">
      <FadeUp className="mx-auto mb-20 max-w-4xl text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-ink/50">02 — The Collection</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.15] text-ink">
          The finished object, and the work behind it.
        </h2>
      </FadeUp>

      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2 md:gap-x-24 md:gap-y-32">
        {WORKS.map((w, i) => (
          <FadeUp key={w.no} delay={i * 0.05} className={i % 2 === 1 ? "md:mt-24" : ""}>
            <div className="group relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Image
                  src={w.img}
                  alt={w.name}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4 border-t border-ink/10 pt-4">
              <div>
                <h3 className="font-display text-[1.25rem] font-normal text-ink">{w.name}</h3>
                <p className="mt-1 text-[13px] text-ink/60">{w.medium}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40">
                {w.no}
                <br />
                {w.dims}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
