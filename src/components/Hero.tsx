"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { VideoLoop } from "./VideoLoop";

const EASE = [0.22, 1, 0.36, 1] as const;
const LINES = [["Made"], ["to", "be"], ["worn", "in."]];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  let wordIndex = 0;

  return (
    <section ref={ref} className="relative h-screen">
      <motion.div
        style={reduced ? undefined : { scale: videoScale }}
        className="fixed inset-0 z-0 h-screen w-full"
      >
        <VideoLoop src="/videos/hero.mp4" poster="/images/hero.png" />
      </motion.div>

      {/* engineered contrast scrim — darkest under the copy block, clearing by ~65% */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] h-screen w-full"
        style={{
          background:
            "linear-gradient(100deg, rgba(26,19,16,0.72) 0%, rgba(26,19,16,0.5) 30%, rgba(26,19,16,0.1) 62%, transparent 78%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[1] h-48 w-full"
        style={{ background: "linear-gradient(to top, rgba(26,19,16,0.55), transparent)" }}
      />

      <motion.div
        style={reduced ? undefined : { y, opacity }}
        className="relative z-10 mx-auto flex h-screen w-full max-w-[1400px] flex-col justify-center px-6 md:px-10"
      >
        <div className="max-w-[720px]">
          <p className="mb-7 text-[11px] uppercase tracking-[0.22em] text-white/70">
            North Leather — Full-grain, hand-stitched
          </p>
          <h1 className="font-display text-[15vw] font-light leading-[0.92] text-white sm:text-[9vw] md:text-[6.5vw] lg:text-[5.5rem]">
            {LINES.map((line, li) => (
              <span key={li} className="flex flex-wrap gap-x-[0.22em]">
                {line.map((word) => {
                  const i = wordIndex++;
                  return (
                    <motion.span
                      key={word}
                      initial={reduced ? undefined : { opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.08 }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>
          <motion.p
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-white/85"
          >
            Leather doesn&apos;t wear out. It wears in. Built for the next decade, not the next season.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute right-6 top-28 z-10 hidden max-w-[220px] text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-white/50 md:block md:right-10">
        <p>Full-grain hide</p>
        <p>Vegetable-tanned</p>
        <p>Workshop no. 4</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
