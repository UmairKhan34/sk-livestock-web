import type { Route } from "./+types/terms-and-conditions";
import { SITE_URL } from "../seoTopics";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/terms-and-conditions` },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms & Conditions — SK Livestock" },
    { name: "description", content: "Terms and Conditions for S.K Livestock app and website." },
    { name: "robots", content: "index, follow" },
  ];
}

export default function TermsAndConditions() {
  return (
    <div className="policy-page">
      <div className="policy-inner">
        <a href="/" className="policy-back">← Back to Home</a>

        <h1 className="policy-title">Terms &amp; Conditions</h1>
        <p className="policy-updated">Last Updated: February 4, 2026</p>

        <p className="policy-lead">
          Welcome to <strong>https://sklivestock.net/</strong> also hereby known as "we", "us" or
          "S.K Livestock". We are an online marketplace for the sale and purchase of livestock and
          livestock products and these are the terms and conditions governing your access and use
          of S.K Livestock along with its related sub-domains, sites, mobile app, services and
          tools (the "Site").
        </p>
        <p className="policy-lead">
          By using the Site or Mobile Application, you hereby accept these terms and conditions
          and represent that you agree to comply with them (the "User Agreement"). This User
          Agreement is deemed effective upon your use of the Site or Mobile Application which
          signifies your acceptance of these terms. If you do not agree to be bound by this User
          Agreement please do not access, register with or use this Site.
        </p>
        <p className="policy-lead">
          S.K Livestock reserves the right to change, modify, add, or remove portions of these
          Terms and Conditions at any time without any prior notification. Your continued use of
          the Site following the posting of changes constitutes your acceptance of those changes.
        </p>

        <section className="policy-section">
          <h2>1. Purpose of the App</h2>
          <p>S.K Livestock is a digital marketplace that allows:</p>
          <ul>
            <li>Farmers/sellers to list livestock</li>
            <li>Buyers/purchasers to search, contact sellers, and negotiate deals</li>
          </ul>
          <p>S.K Livestock is only to provide a platform. We are not a buyer, seller, broker, or party to any transaction between users.</p>
        </section>

        <section className="policy-section">
          <h2>2. Eligibility</h2>
          <p>The eligibility to use the S.K Livestock app:</p>
          <ul>
            <li>Users must be 18 years or older, or use under adult supervision.</li>
            <li>Users must provide accurate registration details.</li>
            <li>Users are responsible for maintaining the confidentiality of their account.</li>
          </ul>
          <p>We may suspend or terminate accounts that violate these Terms.</p>
        </section>

        <section className="policy-section">
          <h2>3. User Responsibilities</h2>
          <p>The Users who use our website agree to:</p>
          <ul>
            <li>Provide true, accurate, complete information</li>
            <li>Only list animals they legally own and are permitted to sell under laws of Pakistan</li>
            <li>Comply with all applicable livestock, transport, trading, and welfare laws</li>
            <li>Not upload fraudulent, misleading, or harmful content</li>
            <li>Not impersonate others</li>
            <li>Not misuse or disrupt the App</li>
            <li>Not upload illegal, abusive, or offensive material</li>
            <li>You are responsible for interactions with other users.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Listings and Transactions</h2>
          <p>All negotiations, pricing, and transactions shall take place directly between users. We do not verify:</p>
          <ul>
            <li>Animal condition</li>
            <li>Quality or health of the animal</li>
            <li>Ownership of the animal</li>
            <li>Price comparison with the market</li>
            <li>Legality of transactions</li>
          </ul>
          <p>S.K Livestock does not guarantee successful deals or buyer/seller behavior. The Company is not liable for disputes, fraud, losses, or damages arising from user interactions.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Usage</h2>
          <p>By using the App, users acknowledge that any type of listing data (personal info, contact details, animal details, prices, farm info, media, etc.) may be visible to other users.</p>
          <p>We may use aggregated and/or non-personally identifiable data for:</p>
          <ul>
            <li>Analytics</li>
            <li>Market insights</li>
            <li>Platform improvement</li>
            <li>Internal livestock supply chain planning</li>
            <li>Our meat export business operations, such as demand forecasting, pricing, and sourcing analysis</li>
          </ul>
          <p>Full details are available in our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </section>

        <section className="policy-section">
          <h2>6. Privacy</h2>
          <p>Please review our <a href="/privacy-policy">Privacy Policy</a>, which also governs your visit to the Site. The personal information/data provided to us by you or your use of the Site will be treated as strictly confidential. If you object to your information being transferred or used in the manner specified in the Privacy Policy, please do not use the Site.</p>
        </section>

        <section className="policy-section">
          <h2>7. Fees and Payments (If Applicable)</h2>
          <p>If S.K Livestock introduces any fees or paid services:</p>
          <ul>
            <li>Users will be informed before being charged</li>
            <li>Fees may be changed with notice</li>
            <li>Payments are non-refundable unless required by law</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Intellectual Property</h2>
          <p>All content; trademarks, logos, designs, software, and App functionality are the property of S.K Livestock and the user may not:</p>
          <ul>
            <li>Copy, modify, distribute, or reproduce our content</li>
            <li>Reverse-engineer the App</li>
            <li>Use the App's material for commercial purposes without permission</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Prohibited Activities</h2>
          <p>Users must not use the app or website in any way that causes, or is likely to cause, the app or Site to be interrupted, damaged or impaired in any way. You are strictly prohibited from using the Site:</p>
          <ul>
            <li>For fraudulent purposes, or in connection with a criminal offense or other unlawful activity</li>
            <li>To send, use or reuse any material that is illegal, offensive, deceptive, misleading, abusive, indecent, harassing, blasphemous, defamatory, libelous, obscene, pornographic, or otherwise unlawful</li>
            <li>Use the Site for illegal purposes</li>
            <li>Post illegal, harmful, misleading, or deceptive listings</li>
            <li>Use bots, scrapers, or automated systems</li>
            <li>Attempt to hack or disrupt the App, platform or website</li>
            <li>Upload viruses or harmful code</li>
            <li>Harass, defraud, or deceive other users</li>
          </ul>
          <p>Violation may result in account termination or legal action.</p>
        </section>

        <section className="policy-section">
          <h2>10. Account Suspension or Termination</h2>
          <p>S.K Livestock may suspend, restrict, or permanently terminate accounts if:</p>
          <ul>
            <li>The Terms are violated</li>
            <li>Fraud or illegal activity is detected</li>
            <li>Misuse of the platform occurs</li>
            <li>Required by law enforcement</li>
          </ul>
          <p>Users may delete their account anytime.</p>
        </section>

        <section className="policy-section">
          <h2>11. Disclaimer of Warranties</h2>
          <p>The App, platform or website is provided "as-is" and "as available". We do not guarantee:</p>
          <ul>
            <li>Uninterrupted service</li>
            <li>Accuracy of listings</li>
            <li>Availability of buyers or sellers</li>
            <li>Success of transactions</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent allowed by law, S.K Livestock is not liable for:</p>
          <ul>
            <li>Financial losses</li>
            <li>Reputational damages</li>
            <li>Animal condition, legality, or transaction outcomes</li>
            <li>Fraud or misrepresentation by users</li>
            <li>Errors, bugs, downtime, or technical issues</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>13. Changes to Terms</h2>
          <p>S.K Livestock may update these Terms from time to time. Continued use of the App means that users accept the updated Terms.</p>
        </section>

        <section className="policy-section">
          <h2>14. Governing Law</h2>
          <p>These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be resolved under applicable local jurisdiction.</p>
        </section>

        <section className="policy-section">
          <h2>15. Contact Us</h2>
          <p>For questions or complaints, contact:</p>
          <div className="policy-contact">
            <p><strong>Company:</strong> S.K Livestock</p>
            <p><strong>Email:</strong> <a href="mailto:customer.care@sklivestock.net">customer.care@sklivestock.net</a></p>
            <p><strong>Phone:</strong> +92 300 0022755</p>
          </div>
        </section>
      </div>
    </div>
  );
}
