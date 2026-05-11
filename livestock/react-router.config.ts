import type { Config } from "@react-router/dev/config";
import { TOPIC_SLUGS } from "./app/seoTopics";

export default {
  ssr: true,
  basename: "/",
  prerender: ["/", "/contact", "/privacy-policy", "/terms-and-conditions", "/data-deletion", ...TOPIC_SLUGS.map((slug) => `/${slug}`)],
} satisfies Config;
