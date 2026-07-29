"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = [
  { href: "/#collection", label: "Collection" },
  { href: "/#craft", label: "Craft" },
  { href: "/blog", label: "Journal" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="group flex items-baseline gap-2">
          <span
            className={`font-display text-[15px] tracking-[0.14em] transition-colors duration-500 ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            NORTH LEATHER
          </span>
        </Link>
        <ul className="flex items-center gap-6 md:gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <motion.div whileHover="hover" initial="rest" animate="rest">
                <Link
                  href={l.href}
                  className={`relative text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                    solid ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                  <motion.span
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                    className={`absolute -bottom-1 left-0 h-px w-full ${solid ? "bg-chestnut" : "bg-white"}`}
                  />
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
