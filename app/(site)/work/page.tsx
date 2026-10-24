import PageIntro from "@/components/templates/PageIntro";
import WorkFolders from "@/components/home/WorkFolders";
import CtaInverted from "@/components/ds/CtaInverted";
import JsonLd from "@/components/seo/JsonLd";
import { concepts } from "@/content/work";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, conceptNode, graph, itemList, webPage } from "@/lib/schema";

const path = "/work";
const title = "Concept Work: Brand and Product Studies";
const description =
  "Self-initiated concept projects by Finestkraft for fictional tech and AI companies: identities, websites, product interfaces and pitch decks.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Work", path },
];

export const metadata = pageMetadata({ path, title, description });

export default function WorkHub() {
  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path, name: title, description, crumbs, type: "CollectionPage" }),
          breadcrumbList(path, crumbs),
          itemList(path, "Concept projects", concepts.map((c) => ({ name: `${c.name} (concept)`, path: `/work/${c.slug}` }))),
          ...concepts.map(conceptNode),
        )}
      />
      <PageIntro
        crumbs={crumbs}
        title="Work"
        lede={
          <p>
            Until client projects can be published, these concept studies show how we work: four fictional companies,
            each with a real brief, a direction and finished frames.
          </p>
        }
      />
      <WorkFolders />
      <CtaInverted theme="ink" title={["Your company", "here next."]} text="Tell us what you are building. You leave the call with a scope and a price." />
    </>
  );
}
