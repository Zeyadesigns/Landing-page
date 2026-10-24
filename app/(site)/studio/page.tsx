import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import CtaInverted from "@/components/ds/CtaInverted";
import TimeBridge from "@/components/ds/TimeBridge";
import JsonLd from "@/components/seo/JsonLd";
import { process } from "@/content/studio";
import { credits, photos } from "@/content/credits";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, graph, ids, webPage } from "@/lib/schema";
import styles from "@/components/templates/Studio.module.css";

const path = "/studio";
const title = "About: A Brand and Web Studio in Cairo";
const description =
  "Finestkraft is a brand and web studio in Cairo working with founder-led tech and AI companies worldwide. How we work, what we believe, and where we are.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Studio", path },
];

export const metadata = pageMetadata({ path, title, description });

const beliefs = [
  { name: "One audience", text: "We work for founders building tech and AI companies. Knowing one audience well beats knowing every audience a little." },
  { name: "The price is public", text: "Projects start at $1999, and it says so on the first screen. You should know whether we fit before you book a call." },
  { name: "Every page has a next step", text: "A brand or a website exists to move someone forward. We design for the action, then for the impression." },
  { name: "Honest work only", text: "Until client work can be shown, our portfolio is labelled concept work. We do not invent clients, quotes or results, and we will not invent them for you." },
];

export default function StudioPage() {
  const street = photos.islamicCairo;
  const sky = photos.cairoSkyline;
  return (
    <>
      <JsonLd data={graph(webPage({ path, name: title, description, crumbs, type: "AboutPage", mainEntity: ids.org }), breadcrumbList(path, crumbs))} />
      <PageIntro
        crumbs={crumbs}
        title={
          <>
            A studio in Cairo,
            <br />
            working worldwide
          </>
        }
        lede={
          <p>
            Finestkraft is a brand and web studio for founder-led tech and AI companies: identities, websites, product
            interfaces and pitch decks, made to look as credible as the technology behind them.
          </p>
        }
      />

      <Chapter theme="steel" cut labelledBy="city-title">
        <div className="wrap grid">
          <figure className={styles.street} data-shutter>
            <Image src={street.src} alt={street.caption} width={street.width} height={street.height} sizes="(max-width: 900px) 90vw, 34vw" />
            <figcaption>{street.caption}</figcaption>
          </figure>
          <div className={styles.cityCopy} data-reveal>
            <h2 id="city-title" className={styles.h2}>
              Where we work from
            </h2>
            <p>
              Cairo has been a city of makers for a thousand years. The mashrabiya, the carved wooden screens on its old
              houses, are made of hundreds of small, exact pieces that together turn harsh light into pattern. It is a good
              model for a studio: many small decisions, made carefully, adding up to one clear thing.
            </p>
            <TimeBridge className={styles.bridge} />
          </div>
        </div>
      </Chapter>

      <Chapter theme="paper" cut labelledBy="how-title">
        <div className="wrap grid">
          <h2 id="how-title" className={`${styles.h2} ${styles.howHead}`}>
            How a project runs
          </h2>
          <ol className={styles.steps}>
            {process.map((p) => (
              <li key={p.name} data-reveal>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Chapter>

      <Chapter theme="ink" labelledBy="believe-title">
        <div className="wrap">
          <h2 id="believe-title" className={styles.big}>
            What we hold to
          </h2>
          <ul className={styles.beliefs}>
            {beliefs.map((b) => (
              <li key={b.name} className="grid" data-reveal>
                <h3>{b.name}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className={`wrap ${styles.sky}`}>
          <Image src={sky.src} alt={sky.caption} width={sky.width} height={sky.height} sizes="100vw" />
          <figcaption>{sky.caption}</figcaption>
        </figure>
      </Chapter>

      <Chapter theme="fog" labelledBy="credits-title" id="credits" className={styles.creditsChapter}>
        <div className="wrap">
          <h2 id="credits-title" className={styles.h2}>
            Photo credits
          </h2>
          <p className={styles.creditsNote}>
            Photographs on this site that are not our own, all shown in greyscale. None of them shows our studio, team or
            clients.
          </p>
          <ul className={styles.credits}>
            {credits.map((c) => (
              <li key={c.src}>
                <a href={c.page} className="link" rel="noopener" target="_blank">
                  {c.title}
                </a>
                <span>
                  {[c.creator, c.date].filter(Boolean).join(", ")}
                  {c.creator || c.date ? ". " : ""}
                  {c.licence}
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.creditsNote}>
            Concept work shows fictional companies; see <Link href="/work" className="link">Work</Link>.
          </p>
        </div>
      </Chapter>

      <CtaInverted />
    </>
  );
}
