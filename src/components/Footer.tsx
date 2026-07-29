import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="font-display text-[13px] tracking-[0.14em] text-white/70">
          NORTH LEATHER
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/50">
          <li>
            <Link href="/#collection" className="transition-colors duration-200 hover:text-white">
              Collection
            </Link>
          </li>
          <li>
            <Link href="/blog" className="transition-colors duration-200 hover:text-white">
              Journal
            </Link>
          </li>
          <li>
            <Link href="/legal/privacy" className="transition-colors duration-200 hover:text-white">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/legal/cookies" className="transition-colors duration-200 hover:text-white">
              Cookies
            </Link>
          </li>
        </ul>
        <span className="text-[11px] tracking-[0.1em] text-white/30">
          Est. for the next decade, not the next season.
        </span>
      </div>
    </footer>
  );
}
