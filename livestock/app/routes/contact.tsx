import type { Route } from "./+types/contact";
import Home from "./home";
import { SITE_URL } from "../seoTopics";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/contact` },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact SK Livestock | Pakistan Livestock Market" },
    { name: "description", content: "Get in touch with SK Livestock for livestock buying, selling, marketplace support, and customer care in Pakistan." },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Contact() {
  return <Home />;
}
