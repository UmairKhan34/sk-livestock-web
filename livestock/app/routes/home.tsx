import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";
import { SEO_TOPICS, SITE_URL } from "../seoTopics";

const OG_IMAGE = `${SITE_URL}/images/SKL-Vertical-logo.png`;

// ─── Canonical link ───────────────────────────────────────────────────────────
export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: SITE_URL },
];

// ─── Meta — SEO + AEO + GEO ──────────────────────────────────────────────────
export function meta({}: Route.MetaArgs) {
  return [
    // ── Primary SEO ──────────────────────────────────────────────────────────
    {
      title:
        "SK Livestock — Pakistan's #1 Livestock Marketplace | Buy & Sell Bakra, Goat, Cow, Buffalo Online",
    },
    {
      name: "description",
      content:
        "SK Livestock is Pakistan's first trusted digital livestock marketplace. Buy & sell bakra, goat, cow, buffalo, camel, sheep, qurbani animals online. Get halal meat, wanda, dairy equipment & vet consultancy. Free app — Android & iOS.",
    },
    {
      name: "keywords",
      content:
        "livestock Pakistan, bakra online Pakistan, goat for sale Pakistan, cow for sale Pakistan, buffalo for sale Pakistan, camel for sale Pakistan, sheep for sale Pakistan, qurbani animals online, bakra mandi online, SK Livestock, maweshi Pakistan, janwar online, doodh wali gaay, qurbani ka bakra, bakri for sale, goat buy sell Pakistan, livestock app Pakistan, online livestock market Pakistan, livestock trading platform Pakistan, live animals Pakistan, halal meat Pakistan, dairy equipment Pakistan, wanda Pakistan, vet consultancy Pakistan, animal feed Pakistan, bakra price Pakistan, gaye becha, bhains for sale, dumba for sale, gosht Pakistan, قربانی کے جانور, مویشی پاکستان, بکرا آن لائن",
    },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { name: "bingbot", content: "index, follow" },

    // ── Author / Publisher ───────────────────────────────────────────────────
    { name: "author", content: "SK Livestock" },
    { name: "publisher", content: "SK Livestock" },
    { name: "copyright", content: "© 2026 SK Livestock. All rights reserved." },

    // ── Geo / Regional ───────────────────────────────────────────────────────
    { name: "geo.region", content: "PK" },
    { name: "geo.country", content: "Pakistan" },
    { name: "geo.placename", content: "Pakistan" },
    { name: "language", content: "English" },
    { name: "content-language", content: "en-PK, ur-PK" },
    { name: "target", content: "all" },
    { name: "audience", content: "Livestock farmers, traders, exporters, buyers, sellers in Pakistan" },

    // ── App store smart banners ──────────────────────────────────────────────
    { name: "apple-itunes-app", content: "app-id=6754009240" },
    { name: "google-play-app", content: "app-id=com.sk.livestock" },

    // ── Open Graph ───────────────────────────────────────────────────────────
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "SK Livestock" },
    { property: "og:locale", content: "en_PK" },
    { property: "og:locale:alternate", content: "ur_PK" },
    { property: "og:url", content: SITE_URL },
    {
      property: "og:title",
      content:
        "SK Livestock — Pakistan's #1 Livestock Marketplace | Buy & Sell Bakra, Goat, Cow, Buffalo Online",
    },
    {
      property: "og:description",
      content:
        "Pakistan's first trusted digital livestock marketplace. Buy & sell bakra, goat, cow, buffalo, camel, sheep, qurbani animals online. Halal meat, wanda, dairy equipment & vet consultancy. Free app!",
    },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:secure_url", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "SK Livestock — Pakistan's #1 Livestock Marketplace" },
    { property: "og:image:type", content: "image/png" },
    { property: "article:publisher", content: "https://www.facebook.com/sklivestock.net" },

    // ── Twitter / X Card ─────────────────────────────────────────────────────
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@sklivestock_net" },
    { name: "twitter:creator", content: "@sklivestock_net" },
    {
      name: "twitter:title",
      content: "SK Livestock — Pakistan's #1 Livestock Marketplace | Buy & Sell Bakra, Goat, Cow",
    },
    {
      name: "twitter:description",
      content:
        "Pakistan's first trusted digital livestock marketplace. Buy & sell bakra, goat, cow, buffalo, camel, sheep, qurbani animals online. Free app — Android & iOS.",
    },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:image:alt", content: "SK Livestock — Pakistan's #1 Livestock Marketplace" },
    { name: "twitter:domain", content: "sklivestock.net" },

    // ─────────────────────────────────────────────────────────────────────────
    // ── JSON-LD: MobileApplication (for app search results) ─────────────────
    // ─────────────────────────────────────────────────────────────────────────
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "SK Livestock — Buy & Sell Livestock Pakistan",
        "alternateName": "SK Livestock App",
        "description":
          "Pakistan's first trusted digital livestock marketplace app. Buy and sell bakra (goat), cow, buffalo, camel, sheep, and qurbani animals. Also trade halal meat, wanda (animal feed), dairy equipment, and get veterinary consultancy — all for free.",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Agriculture & Livestock",
        "operatingSystem": ["Android 6.0+", "iOS 13.0+"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR",
        },
        "url": SITE_URL,
        "downloadUrl": [
          "https://play.google.com/store/apps/details?id=com.sk.livestock",
          "https://apps.apple.com/pk/app/s-k-livestock/id6754009240",
        ],
        "installUrl": [
          "https://play.google.com/store/apps/details?id=com.sk.livestock",
          "https://apps.apple.com/pk/app/s-k-livestock/id6754009240",
        ],
        "screenshot": `${SITE_URL}/images/home.png`,
        "publisher": {
          "@type": "Organization",
          "name": "SK Livestock",
          "@id": `${SITE_URL}/#organization`,
        },
        "availableOnDevice": ["Mobile Phone", "Tablet"],
        "countriesSupported": "PK",
        "inLanguage": ["en-PK", "ur-PK"],
        "featureList": [
          "Buy and sell live animals online across Pakistan",
          "Goat (bakra/bakri) listings from verified sellers",
          "Cow, bull, buffalo, camel, sheep listings",
          "Qurbani animal marketplace — goat, cow, camel, sheep",
          "Halal meat and offal trading",
          "Dairy equipment marketplace",
          "Veterinary and nutritionist consultancy (onsite and online)",
          "Livestock nutrition — wanda, forages, feed additives",
          "Medicine and vaccination awareness",
          "Demand creation — post what you want to buy",
          "Free registration — no fee ever",
          "English and Urdu language support",
          "Fraud protection and verified sellers",
          "Real-time notifications",
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ── JSON-LD: FAQPage — AEO (Answer Engine Optimization) ─────────────────
    // ─────────────────────────────────────────────────────────────────────────
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "SK Livestock — Frequently Asked Questions",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SK Livestock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "SK Livestock is Pakistan's first trusted digital livestock marketplace platform. It connects buyers and sellers of goats (bakra/bakri), cows, buffaloes, camels, and sheep across Pakistan. The platform also offers trading of halal meat and offal, dairy equipment, wanda (animal feed), veterinary consultancy, and qurbani animal listings. SK Livestock is available as a free app on Android (Google Play) and iOS (Apple App Store).",
            },
          },
          {
            "@type": "Question",
            "name": "How can I buy bakra or goat online in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "To buy bakra (goat) online in Pakistan, download the SK Livestock app for free from Google Play Store or Apple App Store. Create a free account, browse thousands of goat listings from verified sellers across Pakistan, and contact sellers directly through the app. You can filter by location, price, and animal type.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I find Qurbani animals on SK Livestock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. SK Livestock has a dedicated Qurbani section where you can search for and purchase Qurbani goats (bakra), cows, bulls, sheep, camels, and more from verified sellers across Pakistan. Browse listings, compare prices, and contact sellers directly from the app.",
            },
          },
          {
            "@type": "Question",
            "name": "Which animals can I buy or sell on SK Livestock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "On SK Livestock you can buy or sell: Goats (bakra/bakri), Cows and Bulls (gaye/bail), Buffaloes (bhains), Camels (oont), Sheep and Fat-tailed Sheep (bher/dumba). You can also trade halal meat and offal, milking animals, pregnant animals, breeders and semen, and dairy farming equipment.",
            },
          },
          {
            "@type": "Question",
            "name": "Is SK Livestock only for commercial farmers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "No. SK Livestock serves everyone in the livestock community: commercial and small-scale farmers, individual livestock owners, meat processors and butchers, dairy operators, general users seeking Qurbani animals, breeders and semen providers, dairy equipment suppliers, and exporters.",
            },
          },
          {
            "@type": "Question",
            "name": "Is SK Livestock free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, SK Livestock is completely free. Registration is free, posting animal listings is free, and browsing the marketplace is free. The platform is available for both Android and iOS devices at no cost.",
            },
          },
          {
            "@type": "Question",
            "name": "Where can I download the SK Livestock app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Download the SK Livestock app from Google Play Store (android: https://play.google.com/store/apps/details?id=com.sk.livestock) or Apple App Store (https://apps.apple.com/pk/app/s-k-livestock/id6754009240). It is also available as a web app at https://app.sklivestock.net.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I get veterinary consultancy on SK Livestock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. SK Livestock's consultancy feature connects farmers and livestock owners with veterinary doctors and nutritionists. You can choose between onsite or online consultancy and access expert guidance for animal health, nutrition, vaccination, feeding plans, and farm management.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I contact SK Livestock customer care?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Contact SK Livestock customer care by email at customer.care@sklivestock.net or by phone at +92-300-002-2755 (0300-00-22-755). Customer care is available in English and Urdu.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I book home delivery for Qurbani animals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Home delivery for Qurbani animals depends on the individual seller. Some sellers on SK Livestock offer delivery options. You can check the seller's listing details and contact them directly through the app to confirm delivery availability.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the best app to buy and sell livestock in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "SK Livestock is Pakistan's #1 trusted digital livestock marketplace app. It is the first dedicated platform in Pakistan for buying and selling goats (bakra), cows, buffaloes, camels, sheep, qurbani animals, halal meat, wanda, and more. Download the free app from Google Play or Apple App Store.",
            },
          },
          {
            "@type": "Question",
            "name": "What is wanda and can I buy it on SK Livestock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Wanda is balanced compound animal feed used in Pakistan to support daily nutrition, healthy growth, and better milk production for livestock. Yes, you can buy and sell wanda on SK Livestock. The platform also offers forages and feed additives to support your livestock's health and performance.",
            },
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ── JSON-LD: HowTo — AEO ─────────────────────────────────────────────────
    // ─────────────────────────────────────────────────────────────────────────
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Buy or Sell Livestock Online in Pakistan Using SK Livestock",
        "description":
          "Step-by-step guide to buying and selling livestock — goats (bakra), cows, buffaloes, camels, sheep — online in Pakistan using the SK Livestock app.",
        "totalTime": "PT5M",
        "tool": [
          {
            "@type": "HowToTool",
            "name": "SK Livestock App (free download on Android and iOS)",
          },
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Download the SK Livestock App",
            "text":
              "Download the SK Livestock app for free from Google Play Store (Android) or Apple App Store (iOS). Search for 'SK Livestock' in either store.",
            "image": `${SITE_URL}/images/home.png`,
            "position": 1,
          },
          {
            "@type": "HowToStep",
            "name": "Create a Free Account",
            "text":
              "Register for free using your phone number or social login. Select whether you are a buyer or seller and provide your contact details. Registration is 100% free.",
            "image": `${SITE_URL}/images/profile-screen.png`,
            "position": 2,
          },
          {
            "@type": "HowToStep",
            "name": "Browse Listings or Post Your Animal",
            "text":
              "As a buyer, browse thousands of livestock listings — bakra, goat, cow, buffalo, camel, sheep — from verified sellers across Pakistan. As a seller, post your animal listing for free with photos and details.",
            "image": `${SITE_URL}/images/live-animals-ads.png`,
            "position": 3,
          },
          {
            "@type": "HowToStep",
            "name": "Connect with Buyers or Sellers",
            "text":
              "Use in-app messaging to contact verified buyers or sellers directly. Get real-time notifications, close deals securely, and enjoy fraud protection.",
            "image": `${SITE_URL}/images/market.png`,
            "position": 4,
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ── JSON-LD: ItemList — categories for rich results ──────────────────────
    // ─────────────────────────────────────────────────────────────────────────
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "SK Livestock — All Categories Available in Pakistan",
        "description":
          "Complete list of livestock categories available on SK Livestock Pakistan's #1 digital livestock marketplace.",
        "numberOfItems": 13,
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Live Animals — Goats (Bakra/Bakri), Cows, Buffaloes, Camels, Sheep",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Meat & Offal — Halal Meat, Fresh Offal, Gosht Pakistan",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Qurbani Animals — Goat, Cow, Camel, Sheep for Eid ul Adha",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Milking Animals — Dairy Cows, Buffalo (Doodh Wali Gaay/Bhains)",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Sick & Injured Animals",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Dairy Equipment — Milking Machines, Farm Tools",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Pregnant Animals — Pregnant Cows, Buffaloes, Goats",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Feed Additives — Livestock Nutrition Supplements",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Breeders & Semen — Livestock Breeding Services Pakistan",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Wanda — Compound Animal Feed Pakistan",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 11,
            "name": "Forages — Fresh Animal Fodder Pakistan",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 12,
            "name": "Medicine & Vaccinations — Livestock Healthcare Pakistan",
            "url": "https://app.sklivestock.net",
          },
          {
            "@type": "ListItem",
            "position": 13,
            "name": "Veterinary Consultancy — Vet Doctors & Nutritionists Pakistan",
            "url": "https://app.sklivestock.net",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ── JSON-LD: Speakable — AEO for voice search & AI assistants ────────────
    // ─────────────────────────────────────────────────────────────────────────
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        "name": "SK Livestock — Pakistan's #1 Livestock Marketplace",
        "description":
          "SK Livestock is Pakistan's first trusted digital livestock marketplace. Buy and sell goats, cows, buffaloes, camels, sheep, and qurbani animals online. Free app for Android and iOS.",
        "url": SITE_URL,
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` },
        "inLanguage": "en-PK",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".hero-kicker", ".hero-brand", ".hero-tagline", ".about-body", ".faq-a"],
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": SITE_URL,
            },
          ],
        },
        "mainEntity": { "@id": `${SITE_URL}/#organization` },
        "keywords":
          "livestock Pakistan, bakra online, goat for sale Pakistan, cow for sale Pakistan, buffalo for sale Pakistan, qurbani animals Pakistan, maweshi Pakistan, livestock app Pakistan",
      },
    },
  ];
}

// ─── Page data ────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    eyebrow: "Marketplace",
    title: "Buy & sell livestock across Pakistan",
    desc: "Bulls, buffaloes, cows, goats, sheep and camels in one trusted digital marketplace.",
    img: "images/live-animals-ads.png",
  },
  {
    eyebrow: "Meat & Offal",
    title: "Fresh supply for exporters and local buyers",
    desc: "Connect with reliable sellers for halal meat, offal, qurbani and daily trade needs.",
    img: "images/home_one.png",
  },
  {
    eyebrow: "Qurbani",
    title: "Find qurbani animals without the market chaos",
    desc: "Browse animals, compare listings and contact sellers directly from the SK Livestock app.",
    img: "images/demand.png",
  },
  {
    eyebrow: "Dairy & Farm",
    title: "Milking animals, pregnant animals and equipment",
    desc: "A focused place for dairy farmers to find animals, tools and farm essentials faster.",
    img: "images/market-hd.png",
  },
  {
    eyebrow: "Animal Health",
    title: "Doctors, nutritionists and herd care support",
    desc: "Connect with experts for feeding plans, medicine guidance, vaccination and consultancy.",
    img: "images/consultancy-active-ads.jpeg",
  },
  {
    eyebrow: "Nutrition",
    title: "Wanda, forages and additives for better performance",
    desc: "Source feed products that support growth, digestion, immunity and milk production.",
    img: "images/wanda.png",
  },
];

const FEATURES_TABS = [
  {
    num: "01",
    label: "Buyer",
    points: [
      { title: "Live Animals Ads", desc: "Browse and post live animal ads with ease." },
      { title: "Create Demand", desc: "Buy livestock according to your demand." },
      { title: "Fraud Protection", desc: "Secure deals with trusted sellers." },
      { title: "New Listings", desc: "Daily new listings for you to choose from." },
    ],
    body: "Being a buyer, you can create your demand list of livestock according to your demand. Your demand list will be visible to all the sellers and whosoever seller has your desired livestock; he can directly contact you.",
    img: "images/live-animals-ads.png",
  },
  {
    num: "02",
    label: "Seller",
    points: [
      { title: "Real Buyers", desc: "Genuine buyers that you can trust." },
      { title: "Instant Contact", desc: "Immediate, secure chat with buyers." },
      { title: "Stay Informed", desc: "In-app notifications keep you updated." },
    ],
    body: "Be a smart seller by using this platform for selling your animals. Stay up to date and connected with buyers in real time to sell your animals on priority basis on a good price.",
    img: "images/seller.png",
  },
  {
    num: "03",
    label: "Market",
    points: [
      { title: "Customized Marketplace", desc: "Explore marketplace with easy to use filters." },
      { title: "Search Supply", desc: "Search from the up to date supply." },
      { title: "View Demand", desc: "Securely view the buyer demand." },
    ],
    body: "With our Market feature, you can view live livestock supply and demand in one place. Stay updated with current market activity by seeing which livestock is available for sale and what buyers are actively seeking.",
    img: "images/market.png",
  },
  {
    num: "04",
    label: "Profile",
    points: [
      { title: "Free Forever", desc: "SK Livestock is free for everyone." },
      { title: "Social Sign-up", desc: "Immediate, secure social sign-up." },
      { title: "Language Selection", desc: "English or Urdu, you choose it." },
    ],
    body: "Free, instant and easy sign-up to create your SK Livestock profile. Switch between seller and buyer roles with a tap from the same profile.",
    img: "images/profile-screen.png",
  },
  {
    num: "05",
    label: "Consultancy",
    points: [
      { title: "Listing Type", desc: "Choose onsite or online consultancy according to your need." },
      { title: "Vet Dr. & Nutritionists", desc: "Find veterinary doctors and nutritionists after selecting your preferred option." },
      { title: "Consultant Details", desc: "View animal type, qualification, expertise, experience, and other information." },
    ],
    body: "SK Livestock consultancy helps users connect with the right experts for animal health, nutrition, and farm guidance. After selecting onsite or online consultancy, users can explore consultant details including animal type, qualification, expertise, experience, and other useful information.",
    img: "images/consultancy-active-ads.jpeg",
  },
];

const FAQS = [
  {
    q: "What is SK Livestock?",
    a: "SK Livestock is Pakistan's first trusted digital livestock marketplace platform. It connects buyers and sellers of goats (bakra), cows, buffaloes, camels, sheep, and provides services for qurbani animals, halal meat, dairy farming, wanda (animal feed), and veterinary consultancy across Pakistan.",
  },
  {
    q: "Who can use SK Livestock?",
    a: "Farmers: To buy/sell animals, semen, breeders, dairy equipment, and even sick or injured animals. General Users: To search for qurbani animals or purchase meat directly. SK Livestock serves everyone in Pakistan's livestock community.",
  },
  {
    q: "Which animals can I buy or sell on SK Livestock?",
    a: "You can buy or sell Goats (bakra/bakri), Cows/Bulls (gaye/bail), Buffaloes (bhains), Camels (oont), Sheep/Fat Tailed Sheep (bher/dumba). All major livestock found in Pakistan's maweshi market.",
  },
  {
    q: "What livestock related things can I buy or sell on this platform?",
    a: "You can trade: Animal By-products (offals and fresh halal meat), Milking animals, pregnant animals, and breeders, Dairy equipment, Wanda (compound animal feed), Forages, Feed additives, Medicine and vaccinations.",
  },
  {
    q: "Is SK Livestock only for commercial farmers?",
    a: "No. Our platform serves commercial & small-scale farmers, individual livestock owners, meat processors & butchers, dairy operators, general users seeking Qurbani animals, breeders & semen providers, dairy equipment suppliers, and exporters.",
  },
  {
    q: "How do I create an account?",
    a: "Download the SK Livestock app and click Sign Up. Provide basic personal information, select your category (buyer or seller), and provide your contact details. Registration is completely free.",
  },
  {
    q: "Is there any registration fee?",
    a: "No. Registration on SK Livestock is 100% FREE. Listing your animals is also free. SK Livestock is free forever.",
  },
  {
    q: "Can I have multiple account types?",
    a: "No. You can't register for more than one account. However, you can switch between buyer and seller roles from within the same profile.",
  },
  {
    q: "Can I find Qurbani animals on SK Livestock app?",
    a: "Yes. Users can search for Qurbani goats (bakra), cows, bulls, sheep, camels, and more. SK Livestock makes it easy to find and buy qurbani animals directly from verified sellers across Pakistan without visiting crowded mandis.",
  },
  {
    q: "Can I book home delivery for Qurbani animals?",
    a: "Home delivery depends on the seller — some sellers on SK Livestock offer delivery services. Check the listing details and contact the seller directly through the app to confirm.",
  },
  {
    q: "What if I face fraud or issues with a seller?",
    a: "You can report fraud directly on the SK Livestock platform. SK Livestock has fraud protection measures in place to keep buyers and sellers safe.",
  },
  {
    q: "How can I contact SK Livestock customer care?",
    a: "Email: customer.care@sklivestock.net  |  Phone: 0300-00-22-SKL, 0300-00-22-755  |  Help Center: Available on the website/app. Customer care is available in English and Urdu.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const taglineWords =
    "Pakistan's first trusted digital platform for buying & selling everything related to livestock with ease.".split(
      " "
    );
  const activeHeroSlide = HERO_SLIDES[slide];

  const stopSlider = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goToSlide = (index: number) => {
    stopSlider();
    setSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      4500
    );
    return stopSlider;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setVisibleWords(i);
      if (i >= taglineWords.length) clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!appDrawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAppDrawerOpen(false);
    };
    document.body.classList.add("drawer-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [appDrawerOpen]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".site > section:not(.hero-section), .site-footer"
      )
    );
    sections.forEach((section, index) => {
      section.classList.add("section-reveal");
      section.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 70, 280)}ms`
      );
    });
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) =>
        section.classList.add("section-reveal--visible")
      );
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site" itemScope itemType="https://schema.org/WebPage">
      {/* ═══ NAVBAR ═══ */}
      <header className={`site-nav ${navScrolled ? "site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <a
            href="#overview"
            className="nav-logo-link"
            aria-label="SK Livestock — Pakistan's #1 Livestock Marketplace — Go to top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("overview");
            }}
          >
            <img
              src="images/SKL-Vertical-logo.png"
              alt="SK Livestock — Pakistan's #1 Digital Livestock Marketplace"
              className="nav-logo-img"
              width="120"
              height="40"
            />
          </a>
          <nav
            className={`nav-menu ${navOpen ? "nav-menu--open" : ""}`}
            aria-label="Main navigation"
          >
            {[
              ["overview", "Overview"],
              ["about", "About"],
              ["features", "Features"],
              ["howitworks", "How It Works?"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className={`nav-toggle ${navOpen ? "nav-toggle--open" : ""}`}
            onClick={() => setNavOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={navOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section
        id="overview"
        className="hero-section"
        aria-label="SK Livestock — Pakistan's #1 Livestock Marketplace"
        itemScope
        itemType="https://schema.org/SoftwareApplication"
      >
        <meta itemProp="name" content="SK Livestock" />
        <meta itemProp="applicationCategory" content="BusinessApplication" />
        <meta itemProp="operatingSystem" content="Android, iOS" />
        <div className="hero-left">
          <p className="hero-kicker" itemProp="description">
            Pakistan's digital livestock platform
          </p>
          <h1 className="hero-brand" itemProp="name">S.K Livestock</h1>

          <p className="hero-tagline">
            {taglineWords.map((w, i) => (
              <span key={i} className={`tw ${i < visibleWords ? "tw--on" : ""}`}>
                {w}{" "}
              </span>
            ))}
          </p>

          <div className="hero-actions">
            <a
              href="https://app.sklivestock.net"
              className="hero-primary-action"
              target="_blank"
              rel="noreferrer"
              aria-label="SK Livestock Web App — Pakistan's livestock marketplace"
            >
              Web App
            </a>
            <button
              type="button"
              className="hero-secondary-action"
              onClick={() => setAppDrawerOpen(true)}
              aria-label="Download SK Livestock App for Android and iOS"
            >
              Download App
            </button>
          </div>

          <div
            className="hero-trust-row"
            aria-label="SK Livestock platform highlights"
          >
            <span>
              <strong>14+</strong> categories
            </span>
            <span>
              <strong>Free</strong> registration
            </span>
            <span>
              <strong>Web</strong> and mobile
            </span>
          </div>

          <div className="hero-slides" role="region" aria-label="SK Livestock feature highlights">
            {HERO_SLIDES.map((item, i) => (
              <div
                key={i}
                className={`hero-slide ${i === slide ? "hero-slide--active" : ""}`}
                aria-hidden={i !== slide}
              >
                <div className="hero-slide-card">
                  <div className="slide-preview">
                    <div className="phone-wrap">
                      <div className="phone-btn-mute" aria-hidden="true" />
                      <div className="phone-btn-vol-up" aria-hidden="true" />
                      <div className="phone-btn-vol-dn" aria-hidden="true" />
                      <div className="phone-screen">
                        <div className="phone-notch" aria-hidden="true">
                          <div className="phone-notch-cam" />
                          <div className="phone-notch-spkr" />
                        </div>
                        <img
                          src={item.img}
                          alt={`SK Livestock App — ${item.eyebrow} — ${item.title}`}
                          loading={i === 0 ? "eager" : "lazy"}
                          width="280"
                          height="560"
                        />
                        <div className="phone-home" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="slide-content">
                    <div className="slide-meta">
                      <span className="slide-badge">
                        <span className="slide-badge-dot" aria-hidden="true" />
                        {item.eyebrow}
                      </span>
                      <span className="slide-counter">
                        {String(i + 1).padStart(2, "0")}
                        <span aria-hidden="true">/</span>
                        {String(HERO_SLIDES.length).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="slide-text">{item.title}</p>
                    <p className="slide-desc">{item.desc}</p>
                    <div className="slide-progress" aria-hidden="true">
                      <div className="slide-progress-fill" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="slider-controls">
              <button
                type="button"
                className="slider-arrow"
                onClick={() => goToSlide(slide - 1)}
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5 8 12l7 7" />
                </svg>
              </button>
              <div className="slide-dots" role="tablist" aria-label="Slide navigation">
                {HERO_SLIDES.map((item, i) => (
                  <button
                    key={item.eyebrow}
                    className={`slide-dot ${i === slide ? "slide-dot--active" : ""}`}
                    onClick={() => goToSlide(i)}
                    aria-label={`Show ${item.eyebrow} — ${item.title}`}
                    aria-selected={i === slide}
                    role="tab"
                  />
                ))}
              </div>
              <button
                type="button"
                className="slider-arrow"
                onClick={() => goToSlide(slide + 1)}
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="hero-visual-copy">
            <span>{activeHeroSlide.eyebrow}</span>
            <strong>{activeHeroSlide.title}</strong>
          </div>
          <img
            src="images/Cow-and-calf-SKL.png"
            alt="SK Livestock — Cattle for sale in Pakistan — Cow and calf listing"
            className="hero-cow-img"
            width="600"
            height="500"
            loading="eager"
          />
          <img
            src="images/home.png"
            alt="SK Livestock App Home Screen — Pakistan's #1 Livestock Marketplace"
            className="hero-phone-img"
            width="300"
            height="600"
            loading="eager"
          />
        </div>
      </section>

      {/* ═══ ONE APP ═══ */}
      <section
        className="one-app-section"
        aria-labelledby="one-app-heading"
      >
        <div className="one-app-inner">
          <div className="one-app-text">
            <span className="section-label section-label--light"></span>
            <h2 className="one-app-title" id="one-app-heading">
              One App.<br />All Livestock Needs.
            </h2>
            <p className="one-app-sub">
              SK Livestock web &amp; mobile platform empowers Pakistan's livestock community — farmers, traders, exporters, and buyers — to connect, trade, and grow digitally. Buy goats, cows, buffaloes, camels, sheep, and qurbani animals online from verified sellers across Pakistan.
            </p>
            <div
              className="one-app-cats"
              aria-label="SK Livestock categories"
            >
              {[
                "Live Animals",
                "Meat & Offal",
                "Qurbani",
                "Milking Animals",
                "Sick & Injured",
                "Dairy Equipment",
                "Pregnant Animals",
                "Feed Additives",
                "Breeders & Semen",
                "Wanda",
                "Forages",
                "Medicine/Vaccinations",
                "Consultancy",
      ].map((c) => (
                <span className="one-app-cat" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <a
              href="#about"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
            >
              Learn More
            </a>
          </div>
          <div className="one-app-visuals">
            <img
              src="images/home_one.png"
              alt="SK Livestock App — Browse live animals, goats, cows, buffaloes, and more across Pakistan"
              className="one-app-phone"
              width="320"
              height="640"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══ TOPIC HUB ═══ */}
      <section className="topic-hub-section" aria-labelledby="topic-hub-heading">
        <div className="topic-hub-inner">
          <div className="topic-hub-header">
            <span className="section-label">LIVESTOCK SEARCH HUB</span>
            <h2 id="topic-hub-heading" className="topic-hub-title">
              Helpful pages for Pakistan's livestock searches
            </h2>
            <p className="topic-hub-sub">
              Clear, crawler-friendly pages for the questions people ask about livestock Pakistan, bakra, qurbani animals, cattle, wanda, and veterinary support.
            </p>
          </div>
          <div className="topic-hub-grid">
            {SEO_TOPICS.map((topic) => (
              <a href={`/${topic.slug}`} className="topic-card" key={topic.slug}>
                <strong>{topic.title}</strong>
                <span>{topic.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section
        id="about"
        className="about-section"
        aria-labelledby="about-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="about-inner">
          <div className="about-text">
            <span className="section-label">ABOUT SK LIVESTOCK</span>
            <h2 id="about-heading" className="visually-hidden">About SK Livestock — Pakistan's First Digital Livestock Marketplace</h2>
            <p className="about-body" itemProp="description">
              SK Livestock is more than an app — it's Pakistan's first trusted digital livestock platform. Built for farmers, traders, exporters and local buyers across Pakistan, SK Livestock digitalizes the livestock trading industry. Buy and sell goats (bakra), cows, buffaloes, camels, sheep, qurbani animals, halal meat, wanda, dairy equipment, and access veterinary consultancy — all in one free platform available on Android and iOS.
            </p>

            {/* GEO / AEO entity block — visible, factual content for AI engines */}
            <div className="about-facts" aria-label="Key facts about SK Livestock">
              <h3 className="about-facts-title">Key Facts</h3>
              <ul className="about-facts-list">
                <li><strong>Founded:</strong> 2024, Pakistan</li>
                <li><strong>Platform type:</strong> Digital livestock marketplace (web + mobile app)</li>
                <li><strong>Coverage:</strong> All of Pakistan — connects buyers and sellers nationwide</li>
                <li><strong>Animals:</strong> Goats (bakra/bakri), cows, buffaloes, camels, sheep, cattle</li>
                <li><strong>Services:</strong> Live animals, qurbani, meat, dairy, wanda, consultancy</li>
                <li><strong>Language support:</strong> English and Urdu</li>
                <li><strong>App availability:</strong> Android (Google Play) and iOS (Apple App Store)</li>
                <li><strong>Registration:</strong> Free forever</li>
                <li><strong>Contact:</strong> customer.care@sklivestock.net | +92-300-002-2755</li>
              </ul>
            </div>
          </div>
          <div className="about-img-wrap">
            <img
              src="images/Cow-and-calf-SKL.png"
              alt="SK Livestock — Cattle, cow and calf — live animals for sale in Pakistan"
              className="about-img"
              width="600"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="benefits-section" aria-labelledby="benefits-heading">
        <div className="benefits-inner">
          <div className="benefits-header">
            <span className="section-label">BENEFITS</span>
            <h2 className="benefits-title" id="benefits-heading">
              Built for Pakistan's livestock community, powered by technology.
            </h2>
            <p className="benefits-sub">
              SK Livestock bridges tradition with innovation. Simple enough for livestock farmers, helpful for exporters, powerful enough for traders, and scalable for Pakistan's growing livestock industry. Whether you are buying a bakra in Lahore or selling buffaloes in Karachi, SK Livestock connects you instantly.
            </p>
            <button
              type="button"
              className="btn-primary-red"
              onClick={() => setAppDrawerOpen(true)}
              aria-label="Download SK Livestock App"
            >
              See Our App
            </button>
          </div>
          <div className="benefits-cards">
            {[
              {
                title: "Buy & Sell Live Animals",
                body: "Trade bulls, cows, buffaloes, goats (bakra/bakri), sheep, lamb and camels with trusted sellers and buyers across Pakistan. Pakistan's largest online livestock marketplace.",
              },
              {
                title: "Meat & Offal Trading",
                body: "Buy and sell fresh and halal meat and offal as a local customer or exporter with full trust and confidence across Pakistan.",
              },
              {
                title: "Qurbani Animals Online",
                body: "Buy and sell qurbani animals (bakra, cow, camel, sheep) digitally before Eid ul Adha, including support for overseas Pakistanis looking for qurbani options.",
              },
              {
                title: "Pregnant & Milking Animals, Dairy Equipment",
                body: "Find doodh wali gaay, doodh wali bhains (milking cows and buffaloes), pregnant animals, and related dairy equipment hassle free.",
              },
              {
                title: "Breeders & Semen, Sick & Injured",
                body: "Connect with breeders and semen providers in Pakistan, plus find support for sick and injured animals.",
              },
              {
                title: "Wanda — Animal Feed Pakistan",
                body: "Balanced wanda options to support daily nutrition, healthy growth, and better milk production for your livestock.",
              },
              {
                title: "Feed Additives",
                body: "Boost your livestock's growth and health with premium feed additives. Find trusted products from trusted sellers. Buy and sell feed additives directly on SK Livestock.",
              },
              {
                title: "Forages — Fresh Fodder",
                body: "Fresh and quality forages available for your livestock at the best prices. Keep your animals healthy and strong with natural feed options. Buy and sell forages easily on our platform.",
              },
              {
                title: "Medicine & Vaccination",
                body: "Health support for livestock medicine, vaccination awareness, disease prevention, and timely animal care across Pakistan.",
              },
              {
                title: "Veterinary Consultancy",
                body: "Connect with qualified vet doctors and nutritionists for onsite or online livestock guidance anywhere in Pakistan.",
              },
            ].map((c) => (
              <div
                className="benefit-card"
                key={c.title}
                itemScope
                itemType="https://schema.org/Service"
              >
                <h3 className="benefit-card-title" itemProp="name">
                  {c.title}
                </h3>
                <p className="benefit-card-body" itemProp="description">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section
        id="features"
        className="features-section"
        aria-labelledby="features-heading"
      >
        <div className="features-inner">
          <span className="section-label">FEATURES</span>
          <h2 className="features-title" id="features-heading">
            Take Control of Your Livestock
          </h2>
          <p className="features-sub">
            Unlock full visibility by searching your desired livestock related things across Pakistan
          </p>

          <div className="features-tabs" role="tablist" aria-label="SK Livestock app features">
            {FEATURES_TABS.map((tab, i) => (
              <button
                key={i}
                className={`feature-tab ${i === activeTab ? "feature-tab--active" : ""}`}
                onClick={() => setActiveTab(i)}
                role="tab"
                aria-selected={i === activeTab}
                aria-controls={`feature-panel-${i}`}
                id={`feature-tab-${i}`}
              >
                {tab.num}. {tab.label}
              </button>
            ))}
          </div>

          <div
            className="features-content"
            role="tabpanel"
            id={`feature-panel-${activeTab}`}
            aria-labelledby={`feature-tab-${activeTab}`}
          >
            <div className="features-points">
              {FEATURES_TABS[activeTab].points.map((p) => (
                <div className="feature-point" key={p.title}>
                  <div className="feature-point-dot" />
                  <div>
                    <strong className="feature-point-title">{p.title}</strong>
                    <p className="feature-point-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
              <p className="features-body">{FEATURES_TABS[activeTab].body}</p>
            </div>
            <div className="features-preview">
              <img
                src={FEATURES_TABS[activeTab].img}
                alt={`SK Livestock App — ${FEATURES_TABS[activeTab].label} feature — Pakistan's digital livestock marketplace`}
                className="features-preview-img"
                width="320"
                height="640"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KEY FEATURES ═══ */}
      <section className="keyfeatures-section" aria-labelledby="keyfeatures-heading">
        <div className="keyfeatures-inner">
          <div className="keyfeatures-text">
            <span className="section-label section-label--light">KEY FEATURES</span>
            <h2 className="keyfeatures-title" id="keyfeatures-heading">
              Connecting Pakistan's livestock community
            </h2>
            <p className="keyfeatures-sub">
              Experience the easiest and fastest livestock buying and selling process with countless members from Pakistan's livestock community — farmers, traders, buyers, and sellers — all on one platform.
            </p>
            <p className="keyfeatures-body">
              Experience seamless connectivity and enhanced control with SK Livestock's intelligent platform — built using advanced automation and secure technology to support efficient livestock trading across Pakistan. Whether you are looking for bakra in Lahore, cow in Karachi, buffalo in Faisalabad, or camel in Quetta — SK Livestock connects you.
            </p>
            <div className="keyfeatures-pills">
              {[
                {
                  title: "Connection Building",
                  desc: "Connecting Pakistan's livestock community fast.",
                },
                {
                  title: "Market Access",
                  desc: "Fastest way to connect to Pakistan's livestock market online.",
                },
                {
                  title: "New Customers",
                  desc: "Boost up your sales by finding new buyers, easily.",
                },
              ].map((p) => (
                <div className="kf-pill" key={p.title}>
                  <div className="kf-pill-dot" />
                  <div>
                    <strong>{p.title}</strong>
                    <span> — {p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="keyfeatures-img">
            <img
              src="images/connecting.png"
              alt="SK Livestock App — Connecting livestock buyers and sellers across Pakistan"
              width="400"
              height="700"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section
        id="howitworks"
        className="hiw-section"
        aria-labelledby="hiw-heading"
      >
        <div className="hiw-inner">
          <span className="section-label">HOW IT WORKS?</span>
          <h2 className="hiw-title" id="hiw-heading">
            Built for you. Designed to Solve the Challenges You Face Every Day.
          </h2>
          <div className="hiw-steps">
            <div
              className="hiw-step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className="hiw-step-num" aria-hidden="true">01</div>
              <h3 className="hiw-step-title" itemProp="name">
                Transform the Way You Manage Everything.
              </h3>
              <p className="hiw-step-body" itemProp="text">
                SK Livestock centralizes your livestock trading in Pakistan, giving you full control over listings, buyers, and sellers. Simplify your routines and get real-time insights to guide better decisions — whether trading goats, cows, or buffaloes.
              </p>
              <img
                src="images/market-hd.png"
                alt="SK Livestock — Live livestock market Pakistan — buy and sell animals online"
                className="hiw-step-img"
                width="320"
                height="640"
                loading="lazy"
              />
            </div>
            <div
              className="hiw-step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className="hiw-step-num" aria-hidden="true">02</div>
              <h3 className="hiw-step-title" itemProp="name">
                Unlock Full Visibility and Control with SK Livestock.
              </h3>
              <p className="hiw-step-body" itemProp="text">
                Monitor, analyze, and optimize every livestock transaction through SK Livestock's intuitive interface. Gain deeper insights, connect with buyers and sellers across Pakistan, and experience total marketplace harmony.
              </p>
              <img
                src="images/supply.png"
                alt="SK Livestock — Livestock supply and demand Pakistan — animals market"
                className="hiw-step-img"
                width="320"
                height="640"
                loading="lazy"
              />
            </div>
            <div
              className="hiw-step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className="hiw-step-num" aria-hidden="true">03</div>
              <h3 className="hiw-step-title" itemProp="name">
                ACCURACY — Transform the way you manage data
              </h3>
              <p className="hiw-step-body" itemProp="text">
                From automating daily tasks to ensuring precise, real-time insights, SK Livestock helps farmers, traders and buyers stay accurate, efficient, and fully in control of their livestock trading operations across Pakistan.
              </p>
              <img
                src="images/demand-details.png"
                alt="SK Livestock — Livestock demand details — create and view animal demand in Pakistan"
                className="hiw-step-img"
                width="320"
                height="640"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="advantages-section" aria-labelledby="advantages-heading">
        <div className="advantages-inner">
          <span className="section-label">ADVANTAGES</span>
          <h2 className="advantages-title" id="advantages-heading">
            Result oriented platform that moves your life forward.
          </h2>
          <div className="advantages-grid">
            <div className="adv-card">
              <img
                src="/images/advantage-outcome.svg"
                alt=""
                className="adv-icon"
                aria-hidden="true"
                width="48"
                height="48"
              />
              <h3 className="adv-title">Receive Outcome</h3>
              <p className="adv-desc">Get the best outcome for your livestock trading efforts</p>
            </div>
            <div className="adv-card">
              <img
                src="/images/advantage-progress.svg"
                alt=""
                className="adv-icon"
                aria-hidden="true"
                width="48"
                height="48"
              />
              <h3 className="adv-title">Business Progress</h3>
              <p className="adv-desc">Grow your livestock business with modern technology</p>
            </div>
            <div className="adv-card">
              <img
                src="/images/advantage-performance.svg"
                alt=""
                className="adv-icon"
                aria-hidden="true"
                width="48"
                height="48"
              />
              <h3 className="adv-title">Performance</h3>
              <p className="adv-desc">Consistent speed, zero interruptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section
        id="faq"
        className="faq-section"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="faq-inner">
          <span className="section-label">F.A.Q</span>
          <h2 className="faq-title" id="faq-heading">
            Frequently Asked Questions about SK Livestock
          </h2>
          <p className="faq-sub">
            Can't find the answer you're looking for?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Contact us
            </a>
          </p>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div
                className={`faq-item ${openFaq === i ? "faq-item--open" : ""}`}
                key={i}
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  itemProp="name"
                >
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  itemScope
                  itemType="https://schema.org/Answer"
                  hidden={openFaq !== i}
                >
                  <p className="faq-a" itemProp="text">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-heading"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="contact-inner">
          <div className="contact-info">
            <p className="contact-designed">Designed for the Future.</p>
            <div className="contact-phones" itemProp="telephone">
              <p>+92 300 00 22 SKL</p>
              <p>+92 300 00 22 755</p>
            </div>
            <h2 className="contact-cta-head" id="contact-heading">
              Get In Touch
            </h2>
          </div>
          <div className="contact-form-wrap">
            <p className="contact-form-label">GET IN TOUCH</p>
            <p className="contact-form-sub">
              Have questions about buying or selling livestock in Pakistan? Send us a message and our team will contact you.
            </p>
            <form
              className="contact-form"
              aria-label="Contact SK Livestock"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const name = (
                  f.elements.namedItem("name") as HTMLInputElement
                ).value;
                const email = (
                  f.elements.namedItem("email") as HTMLInputElement
                ).value;
                const subject = (
                  f.elements.namedItem("subject") as HTMLInputElement
                ).value;
                const message = (
                  f.elements.namedItem("message") as HTMLTextAreaElement
                ).value;
                const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                window.location.href = `mailto:customer.care@sklivestock.net?subject=${encodeURIComponent(
                  subject || "Website Enquiry"
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="form-input"
                required
                autoComplete="name"
                aria-label="Your name"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="form-input"
                required
                autoComplete="email"
                aria-label="Your email address"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="form-input"
                aria-label="Message subject"
              />
              <textarea
                name="message"
                placeholder="Your message (optional)"
                className="form-textarea"
                rows={4}
                aria-label="Your message"
              />
              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        className="site-footer"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div className="footer-inner">
          <div className="footer-brand-panel">
            <h2 className="footer-title">
              Designed for<br />the Future.
            </h2>
            <div className="footer-contact">
              <span className="footer-phone-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M6.62 10.79c1.45 2.84 3.75 5.14 6.59 6.59l2.2-2.2c.3-.3.75-.39 1.14-.26 1.25.41 2.6.63 3.95.63.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3.5c0-.55.45-1 1-1h3.45c.55 0 1 .45 1 1 0 1.35.22 2.7.63 3.95.12.39.04.84-.26 1.14l-2.2 2.2Z" />
                </svg>
              </span>
              <p>
                <a href="tel:+923000022755" aria-label="Call SK Livestock at +92 300 002 2755">
                  +92 300 00 22 SKL
                </a>
              </p>
              <p>
                <a href="tel:+923000022755" aria-label="Call SK Livestock">
                  +92 300 00 22 755
                </a>
              </p>
            </div>
            <a
              href="#contact"
              className="footer-touch-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Get In Touch
            </a>
            <img
              src="images/SKL-Vertical-logo.png"
              alt="SK Livestock — Pakistan's #1 Livestock Marketplace"
              className="footer-logo"
              width="120"
              height="60"
              loading="lazy"
            />
          </div>

          <div className="footer-column">
            <p className="footer-pill">
              <span />
              NAVIGATE
            </p>
            <nav className="footer-link-list" aria-label="Footer navigation">
              {[
                ["overview", "Overview"],
                ["about", "About"],
                ["features", "Features"],
                ["howitworks", "How It Works?"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="footer-policy-links">
              <a href="/terms-and-conditions" className="footer-link">
                Terms &amp; Conditions
              </a>
              <a href="/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-pill">
              <span />
              CONNECT
            </p>
            <nav className="footer-link-list" aria-label="SK Livestock social media links">
              <a
                href="https://www.instagram.com/sklivestock_net/"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                aria-label="SK Livestock on Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/sklivestock.net"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                aria-label="SK Livestock on Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/sklivestock-net"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                aria-label="SK Livestock on LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@sklivestock_net"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                aria-label="SK Livestock on YouTube"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@sklivestock.net?lang=en"
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                aria-label="SK Livestock on TikTok"
              >
                TikTok
              </a>
            </nav>
          </div>

          <div
            className="footer-downloads"
            aria-label="Download SK Livestock app"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.sk.livestock"
              className="footer-store-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Download SK Livestock on Google Play Store — Android"
            >
              <img
                src="/images/google-play-badge.svg"
                alt="Download SK Livestock on Google Play — Pakistan's livestock app for Android"
                width="160"
                height="48"
                loading="lazy"
              />
            </a>
            <a
              href="https://apps.apple.com/pk/app/s-k-livestock/id6754009240"
              className="footer-store-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Download SK Livestock on Apple App Store — iOS"
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download SK Livestock on App Store — Pakistan's livestock app for iPhone"
                width="160"
                height="48"
                loading="lazy"
              />
            </a>
            <a
              href="https://app.sklivestock.net"
              className="footer-web-app-btn"
              target="_blank"
              rel="noreferrer"
              aria-label="SK Livestock Web App"
            >
              <span className="web-app-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" focusable="false">
                  <circle cx="32" cy="32" r="25" />
                  <path d="M7 32h50M32 7c7 7 11 15 11 25S39 50 32 57M32 7C25 14 21 22 21 32s4 18 11 25M12 20h40M12 44h40" />
                  <text x="32" y="37" textAnchor="middle">
                    www
                  </text>
                </svg>
              </span>
              <span>
                <small></small>
                Web App
              </span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            ©2026 S.K Livestock — Pakistan's #1 Livestock Marketplace. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ═══ APP DOWNLOAD DRAWER ═══ */}
      {appDrawerOpen && (
        <div
          className="app-drawer-overlay"
          role="presentation"
          onClick={() => setAppDrawerOpen(false)}
        >
          <aside
            className="app-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="app-drawer-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="app-drawer-close"
              onClick={() => setAppDrawerOpen(false)}
              aria-label="Close download options"
            >
              ×
            </button>
            <span className="app-drawer-label">DOWNLOAD</span>
            <h2 id="app-drawer-title" className="app-drawer-title">
              Download Now!
            </h2>
            <p className="app-drawer-sub">
              Download the S.K Livestock mobile app now — Pakistan's #1 livestock marketplace. Available for Android and iOS.
            </p>

            <div className="app-drawer-store-links">
              <a
                href="https://play.google.com/store/apps/details?id=com.sk.livestock"
                className="app-drawer-store-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Download SK Livestock on Google Play Store"
              >
                <img
                  src="/images/google-play-badge.svg"
                  alt="Download SK Livestock on Google Play — Free livestock app for Android Pakistan"
                  width="180"
                  height="54"
                />
              </a>
              <a
                href="https://apps.apple.com/pk/app/s-k-livestock/id6754009240"
                className="app-drawer-store-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Download SK Livestock on Apple App Store"
              >
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download SK Livestock on App Store — Free livestock app for iPhone Pakistan"
                  width="180"
                  height="54"
                />
              </a>
            </div>

            <div className="app-drawer-help">
              <p>Need Help?</p>
              <strong>
                Call Us:{" "}
                <a href="tel:+923000022755">+92 300 00 22 SKL</a>,{" "}
                <a href="tel:+923000022755">+92 300 00 22 755</a>
              </strong>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
