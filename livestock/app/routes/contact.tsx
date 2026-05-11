import type { Route } from "./+types/contact";
import Home from "./home";
import { SITE_URL } from "../seoTopics";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/contact` },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact SK Livestock" },
    { name: "description", content: "Contact SK Livestock customer care for buying, selling, and livestock marketplace support." },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Contact() {
  return <Home />;
}
