import { Link, useParams } from "react-router";
import type { Route } from "./+types/seo-topic";
import {
  APP_STORE_URL,
  APP_URL,
  getSeoTopic,
  PLAY_STORE_URL,
  SEO_TOPICS,
  SITE_URL,
} from "../seoTopics";

const DEFAULT_TOPIC = SEO_TOPICS[0];

export function meta({ params }: Route.MetaArgs) {
  const topic = getSeoTopic(params.topic) ?? DEFAULT_TOPIC;
  const pageUrl = `${SITE_URL}/${topic.slug}`;
  const imageUrl = `${SITE_URL}/images/Cow-and-calf-SKL.png`;

  return [
    { title: topic.metaTitle },
    { tagName: "link", rel: "canonical", href: pageUrl },
    { name: "description", content: topic.description },
    { name: "keywords", content: topic.keywords.join(", ") },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { property: "og:type", content: "article" },
    { property: "og:site_name", content: "SK Livestock" },
    { property: "og:locale", content: "en_PK" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: topic.metaTitle },
    { property: "og:description", content: topic.description },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: topic.metaTitle },
    { name: "twitter:description", content: topic.description },
    { name: "twitter:image", content: imageUrl },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: topic.title,
        headline: topic.h1,
        description: topic.description,
        url: pageUrl,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en-PK", "ur-PK"],
        keywords: topic.keywords,
        mainEntity: {
          "@type": "FAQPage",
          mainEntity: topic.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        },
      },
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: topic.title,
            item: pageUrl,
          },
        ],
      },
    },
  ];
}

export default function SeoTopicPage() {
  const params = useParams();
  const topic = getSeoTopic(params.topic);
  if (!topic) {
    throw new Response("Not Found", { status: 404, statusText: "Not Found" });
  }
  const relatedTopics = SEO_TOPICS.filter((item) => item.slug !== topic.slug);

  return (
    <main className="seo-page">
      <nav className="seo-nav" aria-label="SK Livestock topic navigation">
        <Link to="/" className="seo-logo-link" aria-label="SK Livestock home">
          <img
            src="/images/SKL-Vertical-logo.png"
            alt="SK Livestock"
            width="140"
            height="70"
          />
        </Link>
        <div className="seo-nav-links">
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Web App
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
            Android
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
            iOS
          </a>
        </div>
      </nav>

      <article className="seo-article">
        <p className="seo-kicker">SK Livestock Pakistan</p>
        <h1>{topic.h1}</h1>
        <p className="seo-intro">{topic.intro}</p>

        <div className="seo-actions">
          <a href={APP_URL} target="_blank" rel="noreferrer" className="seo-action-primary">
            Open Web App
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="seo-action-secondary">
            Download Android App
          </a>
        </div>

        <section className="seo-keyword-panel" aria-labelledby="keyword-heading">
          <h2 id="keyword-heading">Search Topics Covered</h2>
          <div className="seo-keywords">
            {topic.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>

        {topic.sections.map((section) => (
          <section className="seo-content-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section className="seo-faq-section" aria-labelledby="topic-faq-heading">
          <h2 id="topic-faq-heading">Common Questions</h2>
          {topic.faqs.map((faq) => (
            <div className="seo-faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </section>

        <section className="seo-related-section" aria-labelledby="related-heading">
          <h2 id="related-heading">Related Livestock Pages</h2>
          <div className="seo-related-grid">
            {relatedTopics.map((item) => (
              <Link to={`/${item.slug}`} key={item.slug}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
