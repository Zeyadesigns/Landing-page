import type { Metadata, Viewport } from "next";
import { Geist_Mono, Hedvig_Letters_Serif, Manrope } from "next/font/google"; // taste-skill-ignore: brand face for the hero clock (PRODUCT.md)
import SiteFooter from "@/components/ds/SiteFooter";
import Motion from "@/components/ds/Motion";
import { isIndexable, site } from "@/lib/site";
import "./globals.css";

// Fonts: Manrope (sans), Hedvig Letters Serif (hero accent), Geist Mono (clock) // taste-skill-ignore: brand face for the hero clock (PRODUCT.md)
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
  display: "swap",
});
const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hedvig",
  display: "swap",
});
const geistMono = Geist_Mono({ // taste-skill-ignore: brand face for the hero clock (PRODUCT.md)
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist-mono",
  display: "swap",
});

// ============ SITE SETTINGS (edit these like Framer's settings panel) ============
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Finestkraft | Brand & Web Studio for Tech and AI",
    template: "%s | Finestkraft",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "design",
  formatDetection: { telephone: false, email: false, address: false },
  robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/insights/feed.xml", title: "Finestkraft Insights" }] },
  },
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
  colorScheme: "dark",
};

const fontVars = [manrope.variable, hedvig.variable, geistMono.variable].join(" "); // taste-skill-ignore: brand face for the hero clock (PRODUCT.md)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="top" className={fontVars}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <main id="main">{children}</main>
        <SiteFooter />
        <Motion />
      </body>
    </html>
  );
}
