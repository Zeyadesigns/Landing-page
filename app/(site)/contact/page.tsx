import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import Button from "@/components/ds/Button";
import BriefBuilder from "@/components/ds/BriefBuilder";
import TimeBridge from "@/components/ds/TimeBridge";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { breadcrumbList, graph, ids, webPage } from "@/lib/schema";
import styles from "@/components/templates/Contact.module.css";

const path = "/contact";
const title = "Book a Discovery Call";
const description =
  "Book a discovery call with Finestkraft. Tell us what you are building and leave the call with a scope and a price. Projects start at $1999.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path },
];

export const metadata = pageMetadata({ path, title, description });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={graph(webPage({ path, name: title, description, crumbs, type: "ContactPage", mainEntity: ids.org }), breadcrumbList(path, crumbs))} />
      <PageIntro
        theme="cyan"
        crumbs={crumbs}
        title="Book a discovery call"
        lede={<p>Tell us what you are building. You leave the call with a scope and a price, or a clear reason we are not the right fit.</p>}
        meta={
          <div className={styles.book}>
            {site.bookingUrl ? <Button href={site.bookingUrl}>Choose a time</Button> : null}
            <TimeBridge className={styles.bridge} />
          </div>
        }
      />

      <Chapter theme="paper" cut labelledBy="brief-title">
        <div className="wrap grid">
          <div className={styles.side}>
            <h2 id="brief-title" className={styles.h2}>
              Write your brief
            </h2>
            <p className={styles.sideText}>
              {site.email
                ? `Send it straight to ${site.email}, or copy it into your booking.`
                : site.bookingUrl
                  ? "Copy it into your booking so we can prepare for the call."
                  : "Online booking is being set up. Copy your brief now and keep it for the call."}
            </p>
          </div>
          <div className={styles.builder}>
            <BriefBuilder email={site.email} />
          </div>
        </div>
      </Chapter>
    </>
  );
}
