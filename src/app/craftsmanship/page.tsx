import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, WordStagger } from "@/components/FadeUp";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Craftsmanship vs. Fast Fashion: Leather Bags Built to Last",
  description:
    "Timeless leather handbags compared, point by point, against mass-market and fast-fashion bags — materials, construction, and lifespan. See why full-grain leather bags last a lifetime instead of a season.",
  alternates: { canonical: "/craftsmanship" },
};

const COMPARISON = [
  {
    aspect: "Leather",
    north: "Full-grain, vegetable-tanned hide — every scar and pore left uncorrected.",
    fast: "Bonded or “genuine” leather — sanded down, then coated with a printed grain.",
  },
  {
    aspect: "Stitching",
    north: "Hand saddle-stitched with waxed thread — one stitch failing doesn't open the seam.",
    fast: "Glued and single-pass machine stitched — the whole seam fails at once under strain.",
  },
  {
    aspect: "Hardware",
    north: "Raw, unlacquered brass — tarnishes and deepens in tone alongside the leather.",
    fast: "Plated zinc alloy — wears through to dull grey within a year of normal use.",
  },
  {
    aspect: "How it ages",
    north: "Develops a patina — darkens, softens, and looks better after years of use.",
    fast: "Cracks and flakes as the surface coating breaks down — there's no grain underneath to age.",
  },
  {
    aspect: "Typical lifespan",
    north: "A decade or more in daily use — often passed down rather than replaced.",
    fast: "One to three years before visible failure at the seams or coating.",
  },
  {
    aspect: "Design cycle",
    north: "One shape, left alone — no seasonal colorways, no limited drops.",
    fast: "New silhouettes and colorways every season, retired the next.",
  },
  {
    aspect: "Cost per year of use",
    north: "Lower over time — one bag does the work of several.",
    fast: "Higher over time — the lower price is paid again with every replacement.",
  },
];

const TESTIMONIALS = [
  {
    name: "T. Lindqvist",
    context: "the field tote, honey — year 3",
    quote:
      "I did the math before I bought it — three fast-fashion totes I'd already replaced, against one bag that was still going. It wasn't close.",
  },
  {
    name: "J. Ferreira",
    context: "the weekender, chestnut — year 5",
    quote:
      "I stopped comparing it to other bags at this price point. It isn't in that category. Nothing else I own has aged into looking better than the day I bought it.",
  },
  {
    name: "A. Okonkwo",
    context: "the belt, gifted — year 2",
    quote:
      "My mother's bag from decades ago still holds up — that was the bar I was buying to. This clears it.",
  },
];

const FAQS = [
  {
    q: "What's the difference between full-grain leather and the “genuine leather” used in most fast-fashion bags?",
    a: "Full-grain leather is the uncorrected top layer of the hide, left intact with its natural grain. Most fast-fashion bags labeled “genuine leather” are actually bonded or corrected splits — sanded smooth to hide flaws, then coated and stamped with a printed grain pattern. That coating looks finished on day one and is also the first thing to crack and peel. Read the full breakdown in full-grain vs. fast fashion.",
  },
  {
    q: "How long should a well-made leather handbag actually last?",
    a: "A full-grain, vegetable-tanned bag with honest construction should hold up for a decade or more of regular use, often much longer with basic care. Mass-market bonded-leather bags typically show visible failure — cracking, peeling, seam separation — within one to three years.",
  },
  {
    q: "Is a handmade leather bag worth paying more for than a mass-market one?",
    a: "Priced per year of actual use, usually yes. A fast-fashion bag replaced three or four times over the years a full-grain bag stays in service often costs more in total, before accounting for the time and hassle of replacing it.",
  },
  {
    q: "How do I care for a full-grain leather bag so it lasts a lifetime?",
    a: "Let it dry slowly away from direct heat if it gets wet, condition it lightly twice a year, leave the small scuffs to buff out on their own, and use it regularly rather than storing it away. The full care guide covers each of these in detail.",
  },
];

export default function CraftsmanshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Craftsmanship vs. Fast Fashion",
        url: `${SITE_URL}/craftsmanship`,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        description:
          "A comparison of North Leather's full-grain, handmade bags against mass-market and fast-fashion accessories on materials, construction, and lifespan.",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* intro */}
      <section className="px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[13px] tracking-[0.08em] text-terracotta">
            craftsmanship vs. fast fashion
          </p>
          <WordStagger
            as="h1"
            text="timeless leather handbags, built to outlast the trend cycle."
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light lowercase leading-[1.15] tracking-tight text-espresso"
          />
          <FadeUp delay={0.5}>
            <p className="mt-8 max-w-2xl text-[16px] leading-[1.8] text-espresso/70">
              More shoppers are moving away from disposable accessories toward pieces meant to
              be kept — and asking, reasonably, what actually separates a full-grain leather
              bag from the mass-market version sitting next to it on the shelf. Here's the
              honest comparison: the same categories a conservator would judge any bag on,
              set side by side.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* comparison table */}
      <section id="comparison" className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <p className="mb-3 text-[13px] tracking-[0.04em] text-espresso/50">the comparison</p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
              materials, construction, and lifespan.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-[1.5rem] bg-white/40 text-left text-[14px]">
              <thead>
                <tr className="bg-moss text-cream">
                  <th className="px-5 py-4 font-display text-[15px] font-normal lowercase">aspect</th>
                  <th className="px-5 py-4 font-display text-[15px] font-normal lowercase">north leather</th>
                  <th className="px-5 py-4 font-display text-[15px] font-normal lowercase">
                    mass-market / fast fashion
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={i % 2 === 0 ? "bg-sand/40" : "bg-transparent"}
                  >
                    <td className="px-5 py-4 align-top font-semibold text-espresso/90">
                      {row.aspect}
                    </td>
                    <td className="px-5 py-4 align-top leading-[1.6] text-espresso/80">
                      {row.north}
                    </td>
                    <td className="px-5 py-4 align-top leading-[1.6] text-espresso/55">
                      {row.fast}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 text-[14px] leading-[1.7] text-espresso/50">
              For the full case behind each row, see{" "}
              <Link href="/blog/full-grain-vs-fast-fashion" className="text-terracotta underline underline-offset-4">
                full-grain vs. fast fashion
              </Link>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      {/* testimonials */}
      <section className="bg-sand/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeUp className="mb-14 max-w-xl">
            <p className="mb-3 text-[13px] tracking-[0.04em] text-terracotta">chosen on the numbers</p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
              what people compared it to before they bought.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1} className="rounded-[1.75rem] bg-white/50 p-7">
                <p className="font-display text-[1rem] font-light italic leading-[1.6] text-espresso">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-[14px] font-semibold text-espresso">{t.name}</p>
                <p className="text-[13px] text-espresso/55">{t.context}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* care guide summary */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <FadeUp>
            <p className="mb-3 text-[13px] tracking-[0.04em] text-espresso/50">keeping it that way</p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
              a bag built to last still needs a little care.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <ul className="space-y-4 text-[15px] leading-[1.7] text-espresso/70">
              <li>Let it dry slowly, away from direct heat, if it gets caught in weather.</li>
              <li>Condition it lightly twice a year — not more.</li>
              <li>Leave the small scuffs; full-grain buffs them out on its own.</li>
              <li>Use it. Regular handling keeps the leather flexible far better than storage does.</li>
            </ul>
            <p className="mt-6 text-[14px] text-espresso/50">
              <Link href="/blog/leather-care-guide" className="text-terracotta underline underline-offset-4">
                read the full care guide
              </Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-12">
            <p className="mb-3 text-[13px] tracking-[0.04em] text-terracotta">questions</p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
              common questions, answered plainly.
            </h2>
          </FadeUp>
          <div className="divide-y divide-espresso/10">
            {FAQS.map((f, i) => (
              <FadeUp key={f.q} delay={i * 0.05} className="py-7 first:pt-0">
                <h3 className="font-display text-[1.15rem] font-normal text-espresso">{f.q}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-espresso/65">{f.a}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-moss px-6 py-28 text-center md:px-10">
        <div className="mx-auto max-w-xl">
          <FadeUp>
            <p className="mb-4 text-[13px] tracking-[0.04em] text-cream/60">
              made for the next decade, not the next season
            </p>
            <h2 className="font-display text-[clamp(2rem,4.2vw,3rem)] font-light lowercase leading-[1.2] text-cream">
              go handle one yourself.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-cream/70">
              the weekender, the field tote, and the belt — built the same way, for the same
              reason: to still be yours in ten years.
            </p>
            <Link
              href="/product"
              className="liquid-glass mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[14px] text-cream transition-colors duration-200 hover:bg-cream/10"
            >
              shop the bestsellers →
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
