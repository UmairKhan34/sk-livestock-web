import type { Route } from "./+types/terms-and-conditions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms & Conditions — S.K Rider" },
    { name: "description", content: "Terms and Conditions for the S.K Rider app and website." },
  ];
}

export default function TermsAndConditions() {
  return (
    <div className="policy-page">
      <div className="policy-inner">
        <a href="/" className="policy-back">← Back to Home</a>

        <h1 className="policy-title">Terms &amp; Conditions</h1>
        <p className="policy-updated">Last Updated: 01-08-2026</p>

        <p className="policy-lead">
          Welcome to S.K Rider app, also hereby known as “we”, "us" or "S.K Rider". We are a delivery
          service for the delivery of SULEMAN KHAN LIVESTOCK PVT LTD products including but not limited
          to fresh meat and these are the terms and conditions governing your access and use of S.K
          Rider along with its related sub-domains, sites, mobile app, services and tools (the "Site").
          By using the Mobile Application or Site (as the case may be), you hereby accept these terms
          and conditions (including the linked information herein) and represent that you agree to comply
          with these terms and conditions (the "User Agreement"). This User Agreement is deemed effective
          upon your use of the Mobile Application or Site (as the case may be) which signifies your
          acceptance of these terms. If you do not agree to be bound by this User Agreement, please do
          not access, register with or use this Site. This Site is owned and operated by S.K Rider.
        </p>

        <p className="policy-lead">
          The S.K Rider reserves the right to change, modify, add, or remove portions of these Terms and
          Conditions at any time without any prior notification. Changes will be effective when posted on
          the Site with no other notice provided. Please check these Terms and Conditions regularly for
          updates. Your continued use of the App/Site following the posting of changes to Terms and
          Conditions of use constitutes your acceptance of those changes.
        </p>

        <section className="policy-section">
          <h2>1. Purpose of the App</h2>
          <p>
            The Rider App is intended solely for registered delivery partners ("Riders") of S.K Rider.
            The App enables Riders to receive, accept, manage and complete delivery assignments for meat
            and related products sold through S.K Livestock customer application. The Rider App is not a
            marketplace for buying or selling products.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Eligibility</h2>
          <p>The eligibility to use the S.K Rider app:</p>
          <ul>
            <li>Users must be 18 years or older having valid CNIC.</li>
            <li>Users must provide accurate registration details.</li>
            <li>Must have valid motorcycle driving license.</li>
            <li>Ownership or lawful possession of a roadworthy motorcycle.</li>
            <li>Smartphone compatible with the App.</li>
            <li>Ability to legally work in Pakistan.</li>
            <li>Bank account or digital wallet for payments.</li>
            <li>Background verification (if required).</li>
            <li>Police Verification of the Rider.</li>
            <li>Users are responsible for maintaining the confidentiality of their account.</li>
          </ul>
          <p>We may suspend or terminate accounts that violate these Terms.</p>
        </section>

        <section className="policy-section">
          <h2>3. Rider’s Responsibilities</h2>
          <p>The Riders who use our app agree to:</p>
          <ul>
            <li>Deliver orders safely and on time.</li>
            <li>Handle meat products hygienically.</li>
            <li>Follow food safety standards.</li>
            <li>Wear company uniform or gear (if provided).</li>
            <li>Keep delivery bags clean.</li>
            <li>Verify customer identity when required.</li>
            <li>Maintain professional behaviour.</li>
            <li>Keep GPS enabled while on duty.</li>
            <li>Follow traffic laws.</li>
            <li>Never tamper with packages.</li>
            <li>Provide true, accurate, complete information.</li>
            <li>Not misuse or disrupt the App.</li>
            <li>Not upload illegal, abusive, or offensive material.</li>
            <li>Report accidents or delivery issues immediately.</li>
            <li>Fuel and maintenance are rider's responsibility.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. S.K Riders’ Rights</h2>
          <ul>
            <li>GPS tracking of the riders during active deliveries.</li>
            <li>Monitoring of routes.</li>
            <li>Collect Device information.</li>
            <li>May evaluate Riders’ performance.</li>
            <li>Collect delivery history.</li>
            <li>Collect customer interaction records.</li>
            <li>Data may be used for dispute resolution and official processing.</li>
            <li>Data may be shared with customers while deliveries are active.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Cash Handling</h2>
          <p>In case of COD orders:</p>
          <ul>
            <li>Rider must deposit collected cash within specified time to SULEMAN KHAN LIVESTOCK PVT LTD in a prescribed manner.</li>
            <li>Cash shortages are rider's responsibility and shall be deducted from Rider’s fee.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Confidentiality</h2>
          <p>Riders must not disclose in any manner whatsoever:</p>
          <ul>
            <li>Customer details</li>
            <li>Customer addresses</li>
            <li>Phone numbers</li>
            <li>Order history</li>
            <li>Prices</li>
            <li>Business information</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Independent Contractor Status</h2>
          <p>
            Riders are independent contractors and not employees of SULEMAN KHAN LIVESTOCK PVT LTD. No
            entitlement to gratuity, leave, EOBI, medical or other employee benefits unless required by law.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Privacy</h2>
          <p>
            Please review our <a href="/privacy-policy">Privacy Policy</a>, which also governs your visit to the
            App/Site. The personal information / data provided to us by you or your use of the Site will be
            treated as strictly confidential, in accordance with the Privacy Agreement and applicable laws and
            regulations. If you object to your information being transferred or used in the manner specified in
            the Privacy Agreement, please do not use the Site.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Fees and Payments</h2>
          <p>The Riders are entitled to the following:</p>
          <ul>
            <li>Per order delivery fee as agreed between parties.</li>
            <li>Any incentive or bonus if granted by company.</li>
            <li>Fees may be changed by S.K Rider with or without notice.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. Intellectual Property</h2>
          <p>All content, trademarks, logos, designs, software, and App functionality are the property of S.K Rider and the user may not:</p>
          <ul>
            <li>Copy, modify, distribute, or reproduce our content</li>
            <li>Reverse-engineer the App</li>
            <li>Use the App’s material for commercial purposes without permission</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>11. Prohibited Activities</h2>
          <p>
            User must not use the app or website in any way that causes, or is likely to cause, the app or
            Site or access to it to be interrupted, damaged or impaired in any way. You must not engage in
            activities that could harm or potentially harm the Site, its employees, officers, representatives,
            stakeholders or any other party directly or indirectly associated with the Site or access to it to be
            interrupted, damaged or impaired in any way. You understand that you, and not us, are responsible
            for all electronic communications and content sent from your device to us and you must use the
            platform, app or Site for lawful purposes only. You are strictly prohibited from using the Site:
          </p>
          <ul>
            <li>For fraudulent purposes, or in connection with a criminal offense or other unlawful activity</li>
            <li>To send, use or reuse any material that does not belong to you; or is illegal, offensive, deceptive, misleading, abusive, indecent, harassing, blasphemous, defamatory, libelous, obscene, pornographic, pedophilic or menacing; ethnically objectionable, disparaging or in breach of copyright, trademark, confidentiality, privacy or any other proprietary information or right; or is otherwise injurious to third parties; or relates to or promotes money laundering or gambling; or is harmful to minors in any way; or impersonates another person; or threatens the unity, integrity, security or sovereignty of Pakistan or friendly relations with foreign States; or objectionable or otherwise unlawful in any manner whatsoever; or which consists of or contains software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any “spam”.</li>
            <li>Use the Site for illegal purposes.</li>
            <li>To cause annoyance, inconvenience or needless anxiety.</li>
            <li>For any other purposes that is other than what is intended by us.</li>
            <li>Use bots, scrapers, or automated systems.</li>
            <li>Attempt to hack or disrupt the App, platform or website.</li>
            <li>Upload viruses or harmful code.</li>
            <li>Harass, defraud, or deceive other users.</li>
          </ul>
          <p>Violation may result in account termination or legal action.</p>
        </section>

        <section className="policy-section">
          <h2>12. Account Suspension or Termination</h2>
          <h3>12.1</h3>
          <p>S.K Rider may suspend, restrict, or permanently terminate accounts if:</p>
          <ul>
            <li>The Terms are violated.</li>
            <li>Fraud or illegal activity is detected.</li>
            <li>Misuse of the platform occurs.</li>
            <li>Theft.</li>
            <li>Fake deliveries.</li>
            <li>Customer abuse.</li>
            <li>Repeated late deliveries.</li>
            <li>Cash misappropriation.</li>
            <li>Unsafe driving.</li>
            <li>Fake GPS.</li>
            <li>Required by law enforcement.</li>
          </ul>
          <p>Users may delete their account anytime.</p>

          <h3>12.2</h3>
          <p>Upon termination of this agreement the rider is bound to return the following items if supplied by the company:</p>
          <ul>
            <li>Delivery bag</li>
            <li>Jacket/Upper</li>
            <li>Helmet</li>
            <li>Uniform (if needed)</li>
            <li>Mobile phone (if needed)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>13. Limitation of Liability</h2>
          <ul>
            <li>S.K Riders is not responsible for any sort of reputational or financial loss of riders except to the tune of payment of any valid delivery fee duly verified thorough company’s policy and procedure.</li>
            <li>No any third-party claim shall be the responsibility of S.K Rider.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>14. Changes to Terms</h2>
          <p>S.K Rider may update these Terms from time to time. Continued use of the App means that users accept the updated Terms.</p>
        </section>

        <section className="policy-section">
          <h2>15. Governing Law</h2>
          <p>These Terms are governed by the laws of Islamic Republic of Pakistan. Any disputes shall be resolved under applicable local jurisdiction.</p>
        </section>

        <section className="policy-section">
          <h2>16. Contact Us</h2>
          <p>For questions or complaints, contact:</p>
          <div className="policy-contact">
            <p><strong>Company Name:</strong> SULEMAN KHAN LIVESTOCK PVT LTD</p>
            <p><strong>Email:</strong> <a href="mailto:riders.queries@sklivestock.net">riders.queries@sklivestock.net</a></p>
            <p><strong>Phone:</strong> +92 300 0022755</p>
            <p><strong>Address:</strong> First Floor, Khan Auto Complex, Neelum Street, Near Vehari Chowk Multan</p>
          </div>
        </section>
      </div>
    </div>
  );
}
