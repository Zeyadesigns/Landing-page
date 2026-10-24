import type { Metadata } from "next";
import Hero from "@/components/homepage/Hero";

// Work in progress: the Figma homepage, built section by section. Swapped in for "/" when finished.
export const metadata: Metadata = { title: "Homepage preview", robots: { index: false, follow: false } };

export default function Preview() {
  return <Hero />;
}
