import type { Metadata, Viewport } from "next";
import { Geist_Mono, Hedvig_Letters_Serif, Manrope } from "next/font/google";
import "./globals.css";

// Fonts: Manrope (sans), Hedvig Letters Serif (serif), Geist Mono (mono)
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
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

// ============ SITE SETTINGS (edit these like Framer's settings panel) ============
export const metadata: Metadata = {
  title: "Finestkraft | Brand & Web Studio for Tech and AI",
  description:
    "We build brand identities and high impact websites for founder led companies. Projects starting at $1999.",
  // Social image, favicons, analytics get added in the pre-launch pass
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${hedvig.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
