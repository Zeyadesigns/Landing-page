import type { Metadata } from "next";
import Hero from "@/components/homepage/Hero";
import Work from "@/components/homepage/Work";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import Faq from "@/components/homepage/Faq";
import { homepage } from "@/content/homepage";

// Work in progress: the Figma homepage, built section by section. Swapped in for "/" when finished.
export const metadata: Metadata = { title: "Homepage preview", robots: { index: false, follow: false } };

export default function Preview() {
  return (
    <>
      <Hero />
      <Work headline={homepage.work.headline} projects={homepage.work.projects} />
      <Pricing />
      <Work projects={homepage.work.more} />
      <Testimonials />
      <Faq />
    </>
  );
}
