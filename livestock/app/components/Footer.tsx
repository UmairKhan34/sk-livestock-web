export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <img src="/images/sk-logo.jpg" alt="S.K Livestock" className="footer-logo" />
        </div>

        {/* Navigation columns */}
        <div className="footer-nav-columns">
          <div>
            <p className="footer-nav-head">Platform</p>
            <nav className="footer-nav">
              <a href="/#categories" className="footer-link">Categories</a>
              <a href="/#about" className="footer-link">About Us</a>
              <a href="/#how-it-works" className="footer-link">How It Works</a>
              <a href="/consultancy" className="footer-link">Consultancy</a>
            </nav>
          </div>
          <div>
            <p className="footer-nav-head">Support</p>
            <nav className="footer-nav">
              <a href="/#faq" className="footer-link">FAQ</a>
              <a href="/contact" className="footer-link">Contact Us</a>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="/terms-and-conditions" className="footer-link">Terms &amp; Conditions</a>
              <a href="/data-deletion" className="footer-link">Data Deletion</a>
            </nav>
          </div>
          <div>
            <p className="footer-nav-head">Categories</p>
            <nav className="footer-nav">
              <a href="/#categories" className="footer-link">Live Animals</a>
              <a href="/#categories" className="footer-link">Forages</a>
              <a href="/#categories" className="footer-link">Wanda</a>
              <a href="/#categories" className="footer-link">Feed Additives</a>
              <a href="/#categories" className="footer-link">Medicine</a>
            </nav>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="footer-nav-head">Follow Us</p>
          <nav className="footer-social">
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">WhatsApp</a>
            <a href="#" className="footer-link">YouTube</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} S.K Livestock. All rights reserved. Pakistan&apos;s trusted livestock marketplace.</p>
      </div>
    </footer>
  );
}
