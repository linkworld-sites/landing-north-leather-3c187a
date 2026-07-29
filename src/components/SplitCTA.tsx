"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "./FadeUp";

export function SplitCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative z-10 bg-paper px-4 pb-16 pt-6 md:px-6 md:pb-24">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[50vh] md:h-[80vh]">
            <motion.div
              className="absolute inset-0"
              animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src="/images/hero.png"
                alt="The Weekender, resting on a concrete plinth"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex h-[50vh] flex-col justify-center bg-ink px-8 py-16 noise-overlay md:h-[80vh] md:px-16">
            <FadeUp>
              <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-white/50">
                North Leather — The Weekender
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] italic leading-[0.95] text-white">
                Carry it
                <br />
                for a decade.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
                Buy it once. Full-grain, vegetable-tanned, built for the next decade — not the next
                season.
              </p>
              <motion.div whileHover="hover" initial="rest" animate="rest" className="mt-10 inline-block">
                <Link
                  href="#collection"
                  className="liquid-glass inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-white/10"
                >
                  See the Collection
                  <motion.span
                    variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
