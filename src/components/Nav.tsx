"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LINKS = [
  { href: "/product", label: "shop" },
  { href: "/#craft", label: "craft" },
  { href: "/blog", label: "journal" },
];

export function Nav() {
  const pathname = usePathname();
  const hasVideoHero = pathname === "/";
  const [solid, setSolid] = useState(!hasVideoHero);

  useEffect(() => {
    if (!hasVideoHero) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasVideoHero]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-6 py-3 transition-all duration-500 md:px-8 ${
          solid ? "bg-cream/90 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-baseline gap-2">
          <span
            className={`font-display text-[16px] italic tracking-tight transition-colors duration-500 ${
              solid ? "text-espresso" : "text-white"
            }`}
          >
            north leather
          </span>
        </Link>
        <ul className="flex items-center gap-5 md:gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <motion.div whileHover="hover" initial="rest" animate="rest">
                <Link
                  href={l.href}
                  className={`relative text-[14px] transition-colors duration-500 ${
                    solid ? "text-espresso/70 hover:text-espresso" : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                  <motion.span
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                    className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full ${solid ? "bg-terracotta" : "bg-white"}`}
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
