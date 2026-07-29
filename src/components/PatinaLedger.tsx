"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const IMG = "/images/material.png";

type Stage = {
  label: string;
  caption: string;
  filter: string;
};

const STAGES: Stage[] = [
  {
    label: "Day 1",
    caption: "Day 1 — bright, stiff, straight off the workbench.",
    filter: "sepia(0.05) saturate(0.75) brightness(1.14) contrast(0.95)",
  },
  {
    label: "Month 6",
    caption: "Month 6 — softened at the handles, first shift toward gold.",
    filter: "sepia(0.22) saturate(0.95) brightness(1.04) contrast(1)",
  },
  {
    label: "Year 3",
    caption: "Year 3 — 620 commutes, one spilled coffee, zero regrets.",
    filter: "sepia(0.42) saturate(1.15) brightness(0.95) contrast(1.05)",
  },
  {
    label: "Year 10",
    caption: "Year 10 — deep cognac, soft creasing at the gusset, still the only bag he owns.",
    filter: "sepia(0.62) saturate(1.35) brightness(0.85) contrast(1.12)",
  },
];

const WIPE = 0.075;

function useWipe(progress: ReturnType<typeof useScroll>["scrollYProgress"], stageStart: number) {
  const raw = useTransform(progress, [stageStart, stageStart + WIPE], [100, 0], { clamp: true });
  return useMotionTemplate`inset(0 ${raw}% 0 0)`;
}

function PinnedLedger() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(3, Math.floor(v * 4));
    setStageIndex((prev) => (prev === next ? prev : next));
  });

  const clip1 = useWipe(scrollYProgress, 0.25);
  const clip2 = useWipe(scrollYProgress, 0.5);
  const clip3 = useWipe(scrollYProgress, 0.75);

  const diagramOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.48, 0.58, 0.64],
    [0, 1, 1, 0],
  );

  return (
    <section id="patina" ref={containerRef} className="relative z-10 h-[400vh] bg-ink noise-overlay">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* timeline rail */}
        <div className="absolute left-6 top-0 z-20 flex h-full flex-col items-center py-16 md:left-10">
          <div className="relative h-full w-px bg-white/15">
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="absolute inset-x-0 top-0 h-full w-px bg-tan"
            />
            {STAGES.map((s, i) => (
              <div
                key={s.label}
                style={{ top: `${(i + 0.5) * 25}%` }}
                className="absolute -left-[3px] flex -translate-y-1/2 items-center gap-3"
              >
                <span
                  className={`h-[7px] w-[7px] rounded-full transition-colors duration-500 ${
                    stageIndex >= i ? "bg-tan" : "bg-white/20"
                  }`}
                />
                <span
                  className={`whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.15em] transition-colors duration-500 ${
                    stageIndex >= i ? "text-white/90" : "text-white/25"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <p className="absolute left-6 top-24 z-20 max-w-[220px] font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 md:left-24 md:top-28">
            The Patina Ledger — the Weekender, Chestnut
          </p>

          <div className="relative mx-auto aspect-[4/5] w-[78%] max-w-xl md:aspect-[16/10] md:w-[70%] md:max-w-3xl">
            <div className="absolute inset-0" style={{ filter: STAGES[0].filter }}>
              <Image src={IMG} alt="The Weekender in Chestnut, day one" fill sizes="70vw" className="object-cover" />
            </div>
            <motion.div className="absolute inset-0 z-10" style={{ clipPath: clip1, filter: STAGES[1].filter }}>
              <Image src={IMG} alt="The Weekender in Chestnut, month six" fill sizes="70vw" className="object-cover" />
            </motion.div>
            <motion.div className="absolute inset-0 z-20" style={{ clipPath: clip2, filter: STAGES[2].filter }}>
              <Image src={IMG} alt="The Weekender in Chestnut, year three" fill sizes="70vw" className="object-cover" />
            </motion.div>
            <motion.div className="absolute inset-0 z-30" style={{ clipPath: clip3, filter: STAGES[3].filter }}>
              <Image src={IMG} alt="The Weekender in Chestnut, year ten" fill sizes="70vw" className="object-cover" />
            </motion.div>

            {/* conservator's note */}
            <motion.div
              style={{ opacity: diagramOpacity }}
              className="absolute bottom-[18%] right-[10%] z-40 hidden items-center gap-2 md:flex"
            >
              <svg width="60" height="24" viewBox="0 0 60 24" className="text-white/70">
                <line x1="0" y1="20" x2="52" y2="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="2" cy="21" r="2" fill="currentColor" />
              </svg>
              <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.15em] text-white/70">
                corner rub — natural, from set-down
              </span>
            </motion.div>

            {/* stage caption, bottom-left */}
            <div className="absolute -bottom-14 left-0 right-0 md:-bottom-16">
              {STAGES.map((s, i) => (
                <p
                  key={s.label}
                  className={`absolute left-0 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition-opacity duration-700 md:text-[13px] ${
                    stageIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {s.caption}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaticLedger() {
  return (
    <section className="relative z-10 bg-ink px-6 py-24 noise-overlay md:px-10">
      <p className="mx-auto mb-12 max-w-[1400px] font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
        The Patina Ledger — the Weekender, Chestnut
      </p>
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">
        {STAGES.map((s) => (
          <div key={s.label}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <div className="absolute inset-0" style={{ filter: s.filter }}>
                <Image src={IMG} alt={s.caption} fill sizes="45vw" className="object-cover" />
              </div>
            </div>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-white/70">{s.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PatinaLedger() {
  const reduced = useReducedMotion();
  return reduced ? <StaticLedger /> : <PinnedLedger />;
}
