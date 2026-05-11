import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-and-conditions", "routes/terms-and-conditions.tsx"),
  route("data-deletion", "routes/data-deletion.tsx"),
  route(":topic", "routes/seo-topic.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
