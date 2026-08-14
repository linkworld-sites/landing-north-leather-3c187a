import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, WordStagger } from "@/components/FadeUp";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About North Leather",
  description:
    "North Leather makes full-grain, hand-stitched bags built to be used for decades, not seasons — who we are, what we build, and how each piece is made.",
  alternates: { canonical: "/about" },
};

const ANSWERS = [
  {
    q: "What is North Leather?",
    a: "North Leather is a maker of full-grain leather bags — the Weekender, the Field Tote, and the Belt — built from vegetable-tanned hide, hand saddle-stitched with waxed thread, and fitted with raw brass hardware. We sell directly, one bag at a time, with no seasonal collections to chase.",
  },
  {
    q: "What makes a North Leather bag different?",
    a: "We use full-grain hide left uncorrected, so the natural grain, scars, and pores stay intact — nothing sanded down or coated over. Seams are hand saddle-stitched, so one stitch failing doesn't open the whole seam the way a single machine pass can. The brass is left raw and unlacquered, so it tarnishes and deepens alongside the leather instead of wearing through to bare metal.",
  },
  {
    q: "What do you make?",
    a: "Three pieces, each built the same way: the Weekender, a chestnut travel bag meant for a decade or more on the road; the Field Tote, a honey leather daily-carry bag that develops patina with regular use; and the Belt, a single strip of full-grain hide with a raw brass buckle and no lining to wear through.",
  },
  {
    q: "Who is North Leather for?",
    a: "People who'd rather own one bag for a decade than replace three over the same stretch of time — professionals, minimalists, and gift-buyers who value materials and construction over seasonal styling.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About North Leather",
        url: `${SITE_URL}/about`,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        about: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          description:
            "North Leather makes full-grain, vegetable-tanned leather bags — hand saddle-stitched with raw brass hardware — built to be used for decades, not seasons.",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: ANSWERS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
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
          <p className="mb-4 text-[13px] tracking-[0.08em] text-terracotta">about north leather</p>
          <WordStagger
            as="h1"
            text="one kind of bag, built the same way every time."
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light lowercase leading-[1.15] tracking-tight text-espresso"
          />
          <FadeUp delay={0.5}>
            <p className="mt-8 max-w-2xl text-[16px] leading-[1.8] text-espresso/70">
              North Leather makes full-grain, vegetable-tanned leather bags — hand
              saddle-stitched with waxed thread, fitted with raw brass hardware that's left
              to tarnish honestly alongside the hide. No seasonal colorways, no limited
              drops. We build one thing well: bags meant to still be yours in ten years.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* what we build */}
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <p className="mb-3 text-[13px] tracking-[0.04em] text-espresso/50">what we build</p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
              three pieces, one standard.
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "the weekender",
                desc: "full-grain chestnut leather, built for decades of travel rather than a season of trend.",
              },
              {
                name: "the field tote",
                desc: "vegetable-tanned honey leather for daily carry — it looks better every year it's used.",
              },
              {
                name: "the belt",
                desc: "a single strip of full-grain hide and a raw brass buckle. no lining to wear through.",
              },
            ].map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.08} className="rounded-[1.5rem] bg-white/40 p-7">
                <h3 className="font-display text-[1.25rem] font-normal lowercase text-espresso">
                  {p.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-espresso/65">{p.desc}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="mt-8">
            <Link
              href="/product"
              className="text-[14px] text-terracotta underline underline-offset-4"
            >
              see the full collection →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* answers */}
      <section className="bg-sand/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-12">
            <p className="mb-3 text-[13px] tracking-[0.04em] text-terracotta">in short</p>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light lowercase leading-[1.25] text-espresso">
              who we are, plainly.
            </h2>
          </FadeUp>
          <div className="divide-y divide-espresso/10">
            {ANSWERS.map((item, i) => (
              <FadeUp key={item.q} delay={i * 0.05} className="py-7 first:pt-0">
                <h3 className="font-display text-[1.15rem] font-normal text-espresso">
                  {item.q}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-espresso/65">{item.a}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.15} className="mt-10">
            <p className="text-[14px] text-espresso/50">
              For the full comparison against mass-market and fast-fashion bags, see{" "}
              <Link href="/craftsmanship" className="text-terracotta underline underline-offset-4">
                craftsmanship vs. fast fashion
              </Link>
              .
            </p>
          </FadeUp>
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
            <Link
              href="/product"
              className="liquid-glass mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[14px] text-cream transition-colors duration-200 hover:bg-cream/10"
            >
              shop the collection →
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
