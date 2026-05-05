import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SK Livestock Mobile App" },
    { name: "description", content: "SK Livestock web & mobile platform empowers Pakistan's livestock community to connect, trade, and grow digitally." },
  ];
}

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
  { q: "What is SK Livestock?", a: "SK Livestock is an online platform designed to connect buyers and sellers of livestock such as goats, cows, buffaloes, camels, sheep, and offals. It also provides specialized facilities for farmers to trade animals and equipment, and for general users to find qurbani animals." },
  { q: "Who can use SK Livestock?", a: "Farmers: To buy/sell animals, semen, breeders, dairy equipment, and even sick or injured animals. General Users: To search for qurbani animals or purchase meat directly." },
  { q: "Which animals can I buy or sell on SK Livestock?", a: "You can buy or sell Goats, Cows/Bulls, Buffaloes, Camels, Sheep/Fat Tailed Sheep." },
  { q: "What livestock related things can I buy or sell on this platform?", a: "You can trade: Animal By-products: Offals and fresh meat, Specialized Listings: Milking animals, pregnant animals, & breeders, Equipment: A wide range of dairy farming equipment." },
  { q: "Is SK Livestock only for commercial farmers?", a: "No. Our platform serves commercial & small-scale farmers, Individual livestock owners, Meat processors & butchers, Dairy operators, General users seeking Qurbani animals, Breeders & semen providers, Dairy equipment suppliers." },
  { q: "How do I create an account?", a: "Click Sign Up on the SK Livestock app and provide: basic personal information, select category (buyer or seller), and provide your contact details." },
  { q: "Is there any registration fee?", a: "The registration on SK Livestock is FREE." },
  { q: "Can I have multiple account types?", a: "No. You can't register for more than one account." },
  { q: "Can I find Qurbani animals on SK Livestock app?", a: "Yes. Users can search for Qurbani goats, cows, bulls, sheep, camels, and more." },
  { q: "Can I book home delivery for Qurbani animals?", a: "Depends on the seller — some offer delivery." },
  { q: "What if I face fraud or issues with a seller?", a: "You can report fraud on the SK Livestock platform." },
  { q: "How can I contact SK Livestock customer care?", a: "Email: customer.care@sklivestock.net  |  Phone: 0300-00-22-SKL, 0300-00-22-755  |  Help Center: Available on the website/app." },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [appDrawerOpen, setAppDrawerOpen] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const taglineWords = "Pakistan's first trusted digital platform for buying & selling everything related to livestock with ease.".split(" ");
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

  // Hero slider auto-rotate
  useEffect(() => {
    timerRef.current = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 4500);
    return stopSlider;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tagline word reveal
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setVisibleWords(i);
      if (i >= taglineWords.length) clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, []);

  // Nav scroll shadow
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
      document.querySelectorAll<HTMLElement>(".site > section:not(.hero-section), .site-footer")
    );

    sections.forEach((section, index) => {
      section.classList.add("section-reveal");
      section.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      sections.forEach(section => section.classList.add("section-reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      {/* ═══ NAVBAR ═══ */}
      <header className={`site-nav ${navScrolled ? "site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#overview" className="nav-logo-link" onClick={e => { e.preventDefault(); scrollTo("overview"); }}>
            <img
              src="images/SKL-Vertical-logo.png"
              alt="SK Livestock"
              className="nav-logo-img"
            />
          </a>
          <nav className={`nav-menu ${navOpen ? "nav-menu--open" : ""}`}>
            {[["overview","Overview"],["about","About"],["features","Features"],["howitworks","How It Works?"],["faq","FAQ"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="nav-link" onClick={e => { e.preventDefault(); scrollTo(id); }}>{label}</a>
            ))}
          </nav>
          <button
            type="button"
            className={`nav-toggle ${navOpen ? "nav-toggle--open" : ""}`}
            onClick={() => setNavOpen(open => !open)}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section id="overview" className="hero-section">
        <div className="hero-left">
          <p className="hero-kicker">Pakistan's digital livestock platform</p>
          <h1 className="hero-brand">S.K Livestock</h1>

          <p className="hero-tagline">
            {taglineWords.map((w, i) => (
              <span key={i} className={`tw ${i < visibleWords ? "tw--on" : ""}`}>{w} </span>
            ))}
          </p>

          <div className="hero-actions">
            <a href="https://app.sklivestock.net" className="hero-primary-action" target="_blank" rel="noreferrer">Launch Web App</a>
            <button type="button" className="hero-secondary-action" onClick={() => setAppDrawerOpen(true)}>Download App</button>
          </div>

          <div className="hero-trust-row" aria-label="SK Livestock platform highlights">
            <span><strong>14+</strong> categories</span>
            <span><strong>Free</strong> registration</span>
            <span><strong>Web</strong> and mobile</span>
          </div>

          <div className="hero-slides">
            {HERO_SLIDES.map((item, i) => (
              <div key={i} className={`hero-slide ${i === slide ? "hero-slide--active" : ""}`}>
                <div className="hero-slide-card">
                  <div className="slide-preview">
                    <div className="phone-wrap">
                      {/* Left side hardware buttons */}
                      <div className="phone-btn-mute"   aria-hidden="true" />
                      <div className="phone-btn-vol-up" aria-hidden="true" />
                      <div className="phone-btn-vol-dn" aria-hidden="true" />
                      {/* Screen */}
                      <div className="phone-screen">
                        <div className="phone-notch" aria-hidden="true">
                          <div className="phone-notch-cam" />
                          <div className="phone-notch-spkr" />
                        </div>
                        <img src={item.img} alt={item.eyebrow} />
                        <div className="phone-home" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="slide-content">
                    <div className="slide-meta">
                      <span className="slide-badge"><span className="slide-badge-dot" aria-hidden="true" />{item.eyebrow}</span>
                      <span className="slide-counter">{String(i + 1).padStart(2, "0")}<span aria-hidden="true">/</span>{String(HERO_SLIDES.length).padStart(2, "0")}</span>
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
              <button type="button" className="slider-arrow" onClick={() => goToSlide(slide - 1)} aria-label="Previous slide">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
              </button>
              <div className="slide-dots">
                {HERO_SLIDES.map((item, i) => (
                  <button key={item.eyebrow} className={`slide-dot ${i === slide ? "slide-dot--active" : ""}`} onClick={() => goToSlide(i)} aria-label={`Show ${item.eyebrow}`} />
                ))}
              </div>
              <button type="button" className="slider-arrow" onClick={() => goToSlide(slide + 1)} aria-label="Next slide">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual-copy">
            <span>{activeHeroSlide.eyebrow}</span>
            <strong>{activeHeroSlide.title}</strong>
          </div>
          <img src="images/Cow-and-calf-SKL.png" alt="SK Livestock" className="hero-cow-img" />
          <img src="images/home.png" alt="App Home Screen" className="hero-phone-img" />
        </div>
      </section>

      {/* ═══ ONE APP ═══ */}
      <section className="one-app-section">
        <div className="one-app-inner">
          <div className="one-app-text">
            <span className="section-label section-label--light">EVERYTHING LIVESTOCK</span>
            <h2 className="one-app-title">One App.<br />All Livestock Needs.</h2>
            <p className="one-app-sub">SK Livestock web &amp; mobile platform empowers Pakistan's livestock community to connect, trade, and grow digitally.</p>
            <div className="one-app-cats">
              {["Live Animals","Meat & Offal","Qurbani","Milking Animals","Sick & Injured","Dairy Equipment","Pregnant Animals","Feed Additives","Breeders & Semen","Wanda","Forages","Medicine/Vaccinations","Consultancy"].map(c => (
                <span className="one-app-cat" key={c}>{c}</span>
              ))}
            </div>
            <a href="#about" className="btn-outline" onClick={e => { e.preventDefault(); scrollTo("about"); }}>Learn More</a>
          </div>
          <div className="one-app-visuals">
            <img
              src="images/home_one.png"
              alt="SK Livestock App Home"
              className="one-app-phone"
            />
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <span className="section-label">ABOUT SK LIVESTOCK</span>
            <p className="about-body">SK Livestock is more than an app — it's Pakistan's first trusted digital livestock platform. Built for farmers, traders, exporters and local buyers, it simplifies &amp; digitalizes the age‑old practice of livestock trading with modern trends.</p>
          </div>
          <div className="about-img-wrap">
            <img src="images/Cow-and-calf-SKL.png" alt="SK Livestock animals" className="about-img" />
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="benefits-section">
        <div className="benefits-inner">
          <div className="benefits-header">
            <span className="section-label">BENEFITS</span>
            <h2 className="benefits-title">Built for livestock community, powered by technology.</h2>
            <p className="benefits-sub">SK Livestock bridges tradition with innovation. It's simple enough for livestock farmers, helpful for exporters, powerful enough for traders, and scalable for Pakistan's growing livestock industry.</p>
            <button
              type="button"
              className="btn-primary-red"
              onClick={() => setAppDrawerOpen(true)}
            >
              See Our App
            </button>
          </div>
          <div className="benefits-cards">
            {[
              { title: "Buy & Sell", body: "Trade bulls, cows, buffaloes, goats, sheep, lamb and camels with trusted sellers and buyers across Pakistan." },
              { title: "Meat & Offal", body: "Buy and sell fresh and halal meat and offal as a local customer or exporter with full trust and confidence." },
              { title: "Qurbani Animals", body: "Buy and sell qurbani animals digitally, including support for overseas users looking for qurbani options." },
              { title: "Pregnant & Milking Animals, Dairy Equipment", body: "Find milking animals, pregnant animals, and related dairy equipment hassle free." },
              { title: "Breeders & Semen, Sick & Injured", body: "Connect with breeders and semen providers, plus find support for sick and injured animals." },
              { title: "Wanda", body: "Balanced wanda options to support daily nutrition, healthy growth, and better milk production for your animals." },
              { title: "Feed Additives", body: "Boost your livestock's growth and health with premium feed additives. Find trusted products from trusted sellers all in one place. Buy and sell feed additives directly through our platform." },
              { title: "Forages", body: "Fresh and quality forages available for your livestock at the best prices. Keep your animals healthy and strong with natural feed options. Buy and sell forages easily and directly on our platform." },
              { title: "Medicine & Vaccination", body: "Health support for medicine, vaccination awareness, prevention, and timely animal care." },
              { title: "Consultancy", body: "Connect with vet doctors and nutritionists for onsite or online livestock guidance." },
            ].map(c => (
              <div className="benefit-card" key={c.title}>
                <h4 className="benefit-card-title">{c.title}</h4>
                <p className="benefit-card-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="features-section">
        <div className="features-inner">
          <span className="section-label">FEATURES</span>
          <h2 className="features-title">Take Control of Your Livestock</h2>
          <p className="features-sub">Unlock full visibility by searching your desired livestock related things</p>

          <div className="features-tabs">
            {FEATURES_TABS.map((tab, i) => (
              <button
                key={i}
                className={`feature-tab ${i === activeTab ? "feature-tab--active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.num}. {tab.label}
              </button>
            ))}
          </div>

          <div className="features-content">
            <div className="features-points">
              {FEATURES_TABS[activeTab].points.map(p => (
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
                alt={FEATURES_TABS[activeTab].label}
                className="features-preview-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KEY FEATURES ═══ */}
      <section className="keyfeatures-section">
        <div className="keyfeatures-inner">
          <div className="keyfeatures-text">
            <span className="section-label section-label--light">KEY FEATURES</span>
            <h2 className="keyfeatures-title">Connecting livestock community</h2>
            <p className="keyfeatures-sub">You will experience easiest and fastest selling and buying process with countless members from livestock community on this platform</p>
            <p className="keyfeatures-body">Experience seamless connectivity and enhanced control with SK Livestock's intelligent platform — built using advanced automation and secure based technology to support efficient livestock trading</p>
            <div className="keyfeatures-pills">
              {[
                { title: "Connection Building", desc: "Connecting livestock community fast." },
                { title: "Market Access", desc: "Fastest way to connect to livestock market." },
                { title: "New Customers", desc: "Boost up your sales by finding new customers, easily." },
              ].map(p => (
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
            <img src="images/connecting.png" alt="SK Livestock App" />
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="howitworks" className="hiw-section">
        <div className="hiw-inner">
          <span className="section-label">HOW IT WORKS?</span>
          <h2 className="hiw-title">Built for you. Designed to Solve the Challenges You Face Every Day.</h2>
          <div className="hiw-steps">
            <div className="hiw-step">
              <div className="hiw-step-num">01</div>
              <h4 className="hiw-step-title">Transform the Way You Manage Everything.</h4>
              <p className="hiw-step-body">SK Livestock centralizes your livestock trading, giving you full control over listings, buyers, and sellers. Simplify your routines and get real-time insights guide better decisions.</p>
              <img src="images/market-hd.png" alt="Step 1" className="hiw-step-img" />
            </div>
            <div className="hiw-step">
              <div className="hiw-step-num">02</div>
              <h4 className="hiw-step-title">Unlock Full Visibility and Control with SK Livestock.</h4>
              <p className="hiw-step-body">Monitor, analyze, and optimize every livestock transaction through SK Livestock's intuitive interface. Gain deeper insights, connect with buyers and sellers, and experience total marketplace harmony.</p>
              <img src="images/supply.png" alt="Step 2" className="hiw-step-img" />
            </div>
            <div className="hiw-step">
              <div className="hiw-step-num">03</div>
              <h4 className="hiw-step-title">ACCURACY — Transform the way you manage data</h4>
              <p className="hiw-step-body">From automating daily tasks to ensuring precise, real-time insights, our platform helps people stay accurate, efficient, and fully in control of their livestock trading operations.</p>
              <img src="images/demand-details.png" alt="Step 3" className="hiw-step-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="advantages-section">
        <div className="advantages-inner">
          <span className="section-label">ADVANTAGES</span>
          <h2 className="advantages-title">Result oriented platform that moves your life forward.</h2>
          <div className="advantages-grid">
            <div className="adv-card">
              <img src="/images/advantage-outcome.svg" alt="" className="adv-icon" />
              <h4 className="adv-title">Receive Outcome</h4>
              <p className="adv-desc">Get the best outcome for your efforts</p>
            </div>
            <div className="adv-card">
              <img src="/images/advantage-progress.svg" alt="" className="adv-icon" />
              <h4 className="adv-title">Business Progress</h4>
              <p className="adv-desc">Business progress with modern technology</p>
            </div>
            <div className="adv-card">
              <img src="/images/advantage-performance.svg" alt="" className="adv-icon" />
              <h4 className="adv-title">Performance</h4>
              <p className="adv-desc">Consistent speed, zero interruptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="faq-section">
        <div className="faq-inner">
          <span className="section-label">F.A.Q</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-sub">Can't find the answer you're looking for? <a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Learn More</a></p>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? "faq-item--open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-info">
            <p className="contact-designed">Designed for the Future.</p>
            <div className="contact-phones">
              <p>+92 300 00 22 SKL</p>
              <p>+92 300 00 22 755</p>
            </div>
            <h3 className="contact-cta-head">Get In Touch</h3>
          </div>
          <div className="contact-form-wrap">
            <p className="contact-form-label">GET IN TOUCH</p>
            <p className="contact-form-sub">Have questions? Send us a message and our team will contact you.</p>
            <form
              className="contact-form"
              onSubmit={e => {
                e.preventDefault();
                const f = e.currentTarget;
                const name    = (f.elements.namedItem("name")    as HTMLInputElement).value;
                const email   = (f.elements.namedItem("email")   as HTMLInputElement).value;
                const subject = (f.elements.namedItem("subject") as HTMLInputElement).value;
                const message = (f.elements.namedItem("message") as HTMLTextAreaElement).value;
                const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                window.location.href = `mailto:khanmuhammaddumair@gmail.com?subject=${encodeURIComponent(subject || "Website Enquiry")}&body=${encodeURIComponent(body)}`;
              }}
            >
              <input name="name"    type="text"  placeholder="Your name"    className="form-input" required />
              <input name="email"   type="email" placeholder="Your email"   className="form-input" required />
              <input name="subject" type="text"  placeholder="Subject"      className="form-input" />
              <textarea name="message" placeholder="Your message (optional)" className="form-textarea" rows={4} />
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand-panel">
            <h2 className="footer-title">Designed for<br />the Future.</h2>
            <div className="footer-contact">
              <span className="footer-phone-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M6.62 10.79c1.45 2.84 3.75 5.14 6.59 6.59l2.2-2.2c.3-.3.75-.39 1.14-.26 1.25.41 2.6.63 3.95.63.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3.5c0-.55.45-1 1-1h3.45c.55 0 1 .45 1 1 0 1.35.22 2.7.63 3.95.12.39.04.84-.26 1.14l-2.2 2.2Z" />
                </svg>
              </span>
              <p>+92 300 00 22 SKL</p>
              <p>+92 300 00 22 755</p>
            </div>
            <a href="#contact" className="footer-touch-btn" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Get In Touch</a>
            <img src="images/SKL-Vertical-logo.png" alt="SK Livestock" className="footer-logo" />
          </div>

          <div className="footer-column">
            <p className="footer-pill"><span />NAVIGATE</p>
            <nav className="footer-link-list" aria-label="Footer navigation">
              {[["overview","Overview"],["about","About"],["features","Features"],["howitworks","How It Works?"],["faq","FAQ"]].map(([id,label]) => (
                <a key={id} href={`#${id}`} className="footer-link" onClick={e => { e.preventDefault(); scrollTo(id); }}>{label}</a>
              ))}
            </nav>
            <div className="footer-policy-links">
              <a href="terms-and-conditions" className="footer-link">Terms &amp; Conditions</a>
              <a href="privacy-policy" className="footer-link">Privacy Policy</a>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-pill"><span />CONNECT</p>
            <nav className="footer-link-list" aria-label="Social links">
              <a href="https://www.instagram.com/sklivestock_net/" className="footer-link" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/sklivestock.net" className="footer-link" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/sklivestock-net" className="footer-link" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@sklivestock_net" className="footer-link" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://www.tiktok.com/@sklivestock.net?lang=en" className="footer-link" target="_blank" rel="noreferrer">TikTok</a>
            </nav>
          </div>

          <div className="footer-downloads" aria-label="Download SK Livestock">
            <a
              href="https://play.google.com/store/apps/details?id=com.sk.livestock"
              className="footer-store-btn"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/google-play-badge.svg" alt="Google Play" />
            </a>
            <a
              href="https://apps.apple.com/pk/app/s-k-livestock/id6754009240"
              className="footer-store-btn"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/app-store-badge.svg" alt="App Store" />
            </a>
            <a
              href="https://app.sklivestock.net"
              className="footer-web-app-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="web-app-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" focusable="false">
                  <circle cx="32" cy="32" r="25" />
                  <path d="M7 32h50M32 7c7 7 11 15 11 25S39 50 32 57M32 7C25 14 21 22 21 32s4 18 11 25M12 20h40M12 44h40" />
                  <text x="32" y="37" textAnchor="middle">www</text>
                </svg>
              </span>
              <span>
                <small>Launch</small>
                Web App
              </span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2026 S.K Livestock. All rights reserved.</p>
        </div>
      </footer>

      {appDrawerOpen && (
        <div className="app-drawer-overlay" role="presentation" onClick={() => setAppDrawerOpen(false)}>
          <aside
            className="app-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="app-drawer-title"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="app-drawer-close"
              onClick={() => setAppDrawerOpen(false)}
              aria-label="Close app details"
            >
              ×
            </button>
            <span className="app-drawer-label">DOWNLOAD</span>
            <h2 id="app-drawer-title" className="app-drawer-title">
              Download Now!
            </h2>
            <p className="app-drawer-sub">
              Download the S.K Livestock mobile app now. Available for Android and iOS.
            </p>

            <div className="app-drawer-store-links">
              <a
                href="https://play.google.com/store/apps/details?id=com.sk.livestock"
                className="app-drawer-store-btn"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/google-play-badge.svg" alt="Google Play" />
              </a>
              <a
                href="https://apps.apple.com/pk/app/s-k-livestock/id6754009240"
                className="app-drawer-store-btn"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/app-store-badge.svg" alt="App Store" />
              </a>
            </div>

            <div className="app-drawer-help">
              <p>Need Help?</p>
              <strong>Call Us: +92 300 00 22 SKL, +92 300 00 22 755</strong>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
