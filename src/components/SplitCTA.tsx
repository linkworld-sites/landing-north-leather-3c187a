"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "./FadeUp";

export function SplitCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative z-10 bg-cream px-4 pb-20 pt-6 md:px-6 md:pb-28">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[45vh] md:h-[70vh]">
            <motion.div
              className="absolute inset-0"
              animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src="/images/hero.png"
                alt="The Weekender, resting on a warm studio surface"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex h-[45vh] flex-col justify-center bg-terracotta px-8 py-16 md:h-[70vh] md:px-16">
            <FadeUp>
              <p className="mb-6 text-[13px] tracking-[0.04em] text-cream/70">
                north leather — the weekender
              </p>
              <p className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light lowercase leading-[1.1] text-cream">
                carry it for a decade.
              </p>
              <p className="mt-6 max-w-sm text-[16px] leading-[1.7] text-cream/80">
                buy it once. full-grain, vegetable-tanned, built for the next decade — not the next season.
              </p>
              <motion.div whileHover="hover" initial="rest" animate="rest" whileTap={{ scale: 0.97 }} className="mt-10 inline-block">
                <Link
                  href="#shop"
                  className="liquid-glass inline-flex items-center gap-3 rounded-full px-7 py-4 text-[14px] text-cream transition-colors duration-200 hover:bg-cream/10"
                >
                  see the collection
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
