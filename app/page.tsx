import Hero from "@/components/homepage/Hero";
import Work from "@/components/homepage/Work";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import Faq from "@/components/homepage/Faq";
import Footer from "@/components/homepage/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { homepage } from "@/content/homepage";
import { pageMetadata } from "@/lib/seo";
import { faqNode, graph, ids, webPage } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Finestkraft | Brand & Web Studio for Tech and AI";

export const metadata = pageMetadata({ path: "/", title, description: site.description, absoluteTitle: true });

// The homepage from the Figma file (desktop 1440, mobile 390). Copy lives in content/homepage.ts.
export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path: "/", name: title, description: site.description, mainEntity: ids.org }),
          faqNode(
            "/",
            homepage.faq.items.filter((f) => !("draft" in f && f.draft)),
          ),
        )}
      />
      <Hero />
      <Work headline={homepage.work.headline} projects={homepage.work.projects} />
      <Pricing />
      <Work projects={homepage.work.more} />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
