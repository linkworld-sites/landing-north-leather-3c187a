"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const METRICS = [
  {
    target: 100,
    suffix: "%",
    label: "full-grain, vegetable-tanned",
    gradient: "linear-gradient(135deg, #2F3A2A 0%, #3D4A35 100%)",
  },
  {
    target: 10,
    suffix: " yr",
    label: "repair guarantee, no questions",
    gradient: "linear-gradient(135deg, #4A2F22 0%, #6B3E2A 100%)",
  },
  {
    target: 1,
    suffix: "",
    label: "workshop, one thread",
    gradient: "linear-gradient(135deg, #3A2E28 0%, #4E3A30 100%)",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display font-light tabular-nums drop-shadow-sm">
      {value}
      {suffix}
    </span>
  );
}

export function NumbersBand() {
  return (
    <section id="numbers" className="relative z-10 bg-cream px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-[1300px] gap-6 md:grid-cols-3">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="noise-overlay gradient-drift relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:aspect-square"
            style={{ background: m.gradient }}
          >
            <div className="text-[clamp(2.75rem,6vw,5.5rem)] leading-none text-cream md:text-[clamp(3rem,5vw,88px)]">
              <CountUp target={m.target} suffix={m.suffix} />
            </div>
            <p className="absolute bottom-8 px-6 text-[14px] leading-[1.5] text-cream/85">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
