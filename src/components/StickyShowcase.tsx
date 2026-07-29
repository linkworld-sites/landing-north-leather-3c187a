"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const STAGES = [
  {
    img: "/images/material.png",
    eyebrow: "Sourcing",
    title: "Full-grain hides, selected by hand.",
    body: "Only the top layer of the hide — the strongest, most durable grain — makes the cut. Nothing corrected, nothing sanded smooth.",
  },
  {
    img: "/images/detail.png",
    eyebrow: "Hardware",
    title: "Raw brass, saddle-stitched by hand.",
    body: "Two needles, one waxed thread, pulled tight through pre-punched holes — a seam that gets stronger with wear, not weaker.",
  },
  {
    img: "/images/process.png",
    eyebrow: "Construction",
    title: "Cut, skived, and sewn in one room.",
    body: "Every panel is hand-cut and beveled before it ever meets a needle. Ten hours of work, start to finish.",
  },
  {
    img: "/images/hero.png",
    eyebrow: "The object",
    title: "One bag. Ten years, easily.",
    body: "Nothing about it is disposable — which, quietly, is the entire point.",
  },
];

function Caption({
  stage,
  index,
  active,
  onActivate,
}: {
  stage: (typeof STAGES)[number];
  index: number;
  active: boolean;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActivate(index);
  }, [inView, index, onActivate]);

  return (
    <div ref={ref} className="flex min-h-[90vh] items-center">
      <motion.div
        animate={{ opacity: active ? 1 : 0.32 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-md"
      >
        <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-chestnut">{stage.eyebrow}</p>
        <h3 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-light leading-[1.15] text-ink">
          {stage.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{stage.body}</p>
      </motion.div>
    </div>
  );
}

export function StickyShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="craft" className="relative z-10 bg-paper px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-2 md:gap-16">
        <div className="hidden md:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative aspect-[4/5] w-full max-h-[70vh] overflow-hidden rounded-sm bg-ink/5">
              {STAGES.map((s, i) => (
                <motion.div
                  key={s.img}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-ink/5 md:hidden">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.img}
              animate={{ opacity: active === i ? 1 : 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute inset-0"
            >
              <Image src={s.img} alt={s.title} fill sizes="90vw" className="object-cover" />
            </motion.div>
          ))}
        </div>

        <div>
          {STAGES.map((stage, i) => (
            <Caption key={stage.title} stage={stage} index={i} active={active === i} onActivate={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
