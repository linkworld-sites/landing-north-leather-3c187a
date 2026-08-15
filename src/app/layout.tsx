import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FunnelTracker } from "@/components/FunnelTracker";
import { EditBridge } from "@/components/EditBridge";
import { CookieConsent } from "@/components/CookieConsent";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "north leather — made to be worn in", template: `%s — ${SITE_NAME}` },
  description:
    "Full-grain, vegetable-tanned bags built for the next decade, not the next season. Honest construction that ages into something better.",
  alternates: { canonical: "/" },
  verification: { google: "WlJ66mw7eszwjs5WXh-HAJ_3n22gXQA1yf23ABf0enE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "North Leather makes full-grain, vegetable-tanned leather bags — hand saddle-stitched with raw brass hardware — built to be used for decades, not seasons.",
        slogan: "Made to be worn in.",
        knowsAbout: [
          "full-grain leather bags",
          "vegetable-tanned leather",
          "saddle stitching",
          "handcrafted leather goods",
        ],
        makesOffer: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "95.00",
          highPrice: "420.00",
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Full-grain, vegetable-tanned bags built for the next decade, not the next season.",
      },
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${nunitoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream font-sans text-espresso antialiased">
        <FunnelTracker />
        <EditBridge />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
