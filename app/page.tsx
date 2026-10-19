import Hero from "@/components/home/Hero";
import ServicesChapter from "@/components/home/ServicesChapter";
import WorkFolders from "@/components/home/WorkFolders";
import ProcessAccordion from "@/components/home/ProcessAccordion";
import PricingStatement from "@/components/home/PricingStatement";
import StudioPanel from "@/components/home/StudioPanel";
import InsightsTable from "@/components/home/InsightsTable";
import FaqBands from "@/components/ds/FaqBands";
import CtaInverted from "@/components/ds/CtaInverted";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/content/studio";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { faqNode, graph, ids, itemList, serviceNode, webPage } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Finestkraft | Brand & Web Studio for Tech and AI";

export const metadata = pageMetadata({ path: "/", title, description: site.description, absoluteTitle: true });

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path: "/", name: title, description: site.description, mainEntity: ids.org }),
          ...services.map(serviceNode),
          itemList("/", "Services", services.map((s) => ({ name: s.name, path: `/services/${s.slug}` }))),
          faqNode("/", faqs),
        )}
      />
      <Hero />
      <ServicesChapter />
      <WorkFolders />
      <ProcessAccordion />
      <PricingStatement />
      <StudioPanel />
      <FaqBands title="Before you book" items={faqs} />
      <InsightsTable />
      <CtaInverted />
    </>
  );
}
