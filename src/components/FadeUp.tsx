"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeUp({
  children,
  as: Tag = "div",
  delay = 0,
  y = 24,
  className = "",
  amount = 0.2,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion(Tag as ElementType);
  return (
    <MotionTag
      initial={reduced ? undefined : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Word-stagger headline — wraps each word in its own span and fades/lifts it
 * in, first word at `baseDelay`, each subsequent word +0.08s.
 */
export function WordStagger({
  text,
  as: Tag = "h2",
  className = "",
  baseDelay = 0.15,
  amount = 0.2,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  baseDelay?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion(Tag as ElementType);
  return (
    <MotionTag
      className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}
      initial="rest"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            rest: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: EASE, delay: baseDelay + i * 0.08 },
            },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
