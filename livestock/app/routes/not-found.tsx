export function meta() {
  return [
    { title: "Page Not Found — SK Livestock" },
    { name: "robots", content: "noindex, follow" },
  ];
}

export default function NotFoundRoute() {
  throw new Response("Not Found", { status: 404, statusText: "Not Found" });
}
