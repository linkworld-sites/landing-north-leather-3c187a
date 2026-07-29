"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const METRICS = [
  { target: 100, suffix: "%", label: "Full-grain, vegetable-tanned" },
  { target: 10, suffix: " yr", label: "Repair guarantee" },
  { target: 10, suffix: " hr", label: "Hand-stitched, start to finish" },
  { target: 1, suffix: "", label: "Workshop, one thread" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display font-light tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function NumbersBand() {
  return (
    <section id="numbers" className="relative z-10 bg-ink px-6 pb-24 pt-4 md:px-10">
      <div className="mx-auto max-w-4xl pb-14 text-center">
        <p className="text-[13px] text-white/60">
          Every measurement here is a promise, not a marketing line.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
        {METRICS.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-3 px-4 py-8 text-center">
            <div className="text-[clamp(2.75rem,6vw,4.5rem)] leading-none text-white">
              <CountUp target={m.target} suffix={m.suffix} />
            </div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
