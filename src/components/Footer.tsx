import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 bg-moss px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="font-display text-[15px] italic tracking-tight text-cream/80">
          north leather
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] tracking-[0.02em] text-cream/55">
          <li>
            <Link href="/product" className="transition-colors duration-200 hover:text-cream">
              shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="transition-colors duration-200 hover:text-cream">
              journal
            </Link>
          </li>
          <li>
            <Link href="/legal/privacy" className="transition-colors duration-200 hover:text-cream">
              privacy
            </Link>
          </li>
          <li>
            <Link href="/legal/cookies" className="transition-colors duration-200 hover:text-cream">
              cookies
            </Link>
          </li>
        </ul>
        <span className="text-[13px] tracking-[0.02em] text-cream/35">
          made for the next decade, not the next season
        </span>
      </div>
    </footer>
  );
}
