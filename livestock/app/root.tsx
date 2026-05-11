import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { APP_URL, SEO_TOPICS, SITE_URL } from "./seoTopics";
import "./styles/app.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "SK Livestock",
  "alternateName": ["S.K Livestock", "SKL", "SK Livestock Pakistan", "سک لائیوسٹاک"],
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/images/SKL-Vertical-logo.png`,
    "contentUrl": `${SITE_URL}/images/SKL-Vertical-logo.png`,
  },
  "description": "SK Livestock is Pakistan's first trusted digital livestock marketplace platform. We connect buyers and sellers of goats (bakra), cows, buffaloes, camels, and sheep across Pakistan. Our platform serves farmers, traders, exporters, and individuals seeking qurbani animals, halal meat, dairy equipment, wanda, and veterinary consultancy.",
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "name": "Pakistan",
    "addressCountry": "PK"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan",
    "sameAs": "https://www.wikidata.org/wiki/Q843"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+92-300-002-2755",
      "email": "customer.care@sklivestock.net",
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    }
  ],
  "sameAs": [
    "https://www.instagram.com/sklivestock_net/",
    "https://www.facebook.com/sklivestock.net",
    "https://www.linkedin.com/company/sklivestock-net",
    "https://www.youtube.com/@sklivestock_net",
    "https://www.tiktok.com/@sklivestock.net",
    "https://play.google.com/store/apps/details?id=com.sk.livestock",
    "https://apps.apple.com/pk/app/s-k-livestock/id6754009240"
  ],
  "knowsAbout": [
    "Livestock trading Pakistan",
    "Goat farming Pakistan",
    "Cattle market Pakistan",
    "Qurbani animals",
    "Bakra mandi online",
    "Halal meat trading",
    "Dairy farming Pakistan",
    "Wanda animal feed",
    "Veterinary consultancy Pakistan",
    "Livestock app Pakistan"
  ],
  "mainEntityOfPage": SEO_TOPICS.map((topic) => ({
    "@type": "WebPage",
    "name": topic.title,
    "url": `${SITE_URL}/${topic.slug}`
  }))
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "SK Livestock",
  "alternateName": "Pakistan's #1 Livestock Marketplace",
  "url": SITE_URL,
  "description": "Buy and sell livestock online in Pakistan. Find bakra, goat, cow, buffalo, camel, sheep, qurbani animals and more on Pakistan's first trusted digital livestock marketplace.",
  "inLanguage": ["en-PK", "ur-PK"],
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${APP_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/images/sk-logo.png", type: "image/png" },
  { rel: "apple-touch-icon", href: "/images/SKL-Vertical-logo.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* PWA & mobile */}
        <meta name="theme-color" content="#c0392b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SK Livestock" />
        <meta name="application-name" content="SK Livestock" />
        <meta name="msapplication-TileColor" content="#c0392b" />
        <meta name="format-detection" content="telephone=no" />
        <Meta />
        <Links />
        {/* Global Organization schema — appears on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Global WebSite schema — enables Google Sitelinks search box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
