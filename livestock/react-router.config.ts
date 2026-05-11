import type { Config } from "@react-router/dev/config";
import { TOPIC_SLUGS } from "./app/seoTopics";

export default {
  ssr: true,
  basename: "/",
  prerender: ["/", "/privacy-policy", "/terms-and-conditions", ...TOPIC_SLUGS.map((slug) => `/${slug}`)],
} satisfies Config;
