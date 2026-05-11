import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("terms-and-conditions", "routes/terms-and-conditions.tsx"),
  route(":topic", "routes/seo-topic.tsx"),
] satisfies RouteConfig;
