import { FadeUp, WordStagger } from "./FadeUp";

export const FAQ_ITEMS = [
  {
    q: "What makes a North Leather bag different from a mass-market leather bag?",
    a: "Full-grain, vegetable-tanned hide left uncorrected, seams hand saddle-stitched with waxed thread, and raw brass hardware that tarnishes rather than flakes. It's built to be used for decades, not a season.",
  },
  {
    q: "How long should a North Leather bag last?",
    a: "A decade or more of regular daily use — often longer with basic care. Every piece also carries a ten-year repair guarantee, no questions asked.",
  },
  {
    q: "Does the leather need special care?",
    a: "Very little. Let it dry slowly away from direct heat if it gets wet, condition it lightly twice a year, leave small scuffs to buff out on their own, and use it — regular handling keeps the leather supple.",
  },
  {
    q: "What products does North Leather sell?",
    a: "Three pieces: the Weekender (€420), a chestnut travel bag in full-grain leather; the Field Tote (€280), a honey vegetable-tanned everyday tote; and the Belt (€95), a single strip of full-grain hide with a raw brass buckle.",
  },
  {
    q: "Will a North Leather bag look worn out after a few years?",
    a: "The opposite — full-grain leather develops a patina, darkening and softening at handles and edges with wear, so it tends to look better a few years in than it did on day one.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative z-10 bg-sand/40 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="mb-14">
          <p className="mb-4 text-[13px] tracking-[0.08em] text-terracotta">questions</p>
          <WordStagger
            as="h2"
            text="a few things people ask before they buy."
            className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-light lowercase leading-[1.2] text-espresso"
          />
        </FadeUp>
        <div className="divide-y divide-espresso/10">
          {FAQ_ITEMS.map((item, i) => (
            <FadeUp key={item.q} delay={i * 0.06} className="py-7 first:pt-0">
              <h3 className="font-display text-[1.1rem] font-normal text-espresso">{item.q}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-espresso/65">{item.a}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
