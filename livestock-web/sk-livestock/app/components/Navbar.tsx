import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo-link">
          <img src="/images/sk-logo.jpg" alt="S.K Livestock" className="nav-logo-img" />
        </a>
        <div className="nav-menu">
          <a href="/#categories" className="nav-link">Categories</a>
          <a href="/#about" className="nav-link">About</a>
          <a href="/#how-it-works" className="nav-link">How It Works</a>
          <a href="/#faq" className="nav-link">FAQ</a>
          <a href="/consultancy" className="nav-link">Consultancy</a>
          <a href="/#contact" className="btn-primary-red">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
