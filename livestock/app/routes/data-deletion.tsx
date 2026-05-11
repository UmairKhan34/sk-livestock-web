import type { Route } from "./+types/data-deletion";
import { SITE_URL } from "../seoTopics";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: `${SITE_URL}/data-deletion` },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Data Deletion Instructions — SK Livestock" },
    { name: "description", content: "Instructions for requesting deletion of personal data from SK OTP Service." },
    { name: "robots", content: "index, follow" },
  ];
}

export default function DataDeletion() {
  return (
    <div className="policy-page">
      <div className="policy-inner">
        <a href="/" className="policy-back">← Back to Home</a>

        <h1 className="policy-title">Data Deletion Instructions</h1>

        <p className="policy-lead">
          If you want to delete your data from SK OTP Service, please follow the steps below.
        </p>

        <section className="policy-section">
          <h2>1. Request Data Deletion</h2>
          <p>You can request deletion of your personal data by contacting us:</p>
          <div className="policy-contact">
            <p><strong>Email:</strong> <a href="mailto:customer.care@sklivestock.net">customer.care@sklivestock.net</a></p>
            <p><strong>Website:</strong> <a href="https://sklivestock.net/contact">https://sklivestock.net/contact</a></p>
          </div>
          <p>Please include:</p>
          <ul>
            <li>Your registered phone number or email</li>
            <li>Reason for deletion (optional)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. What Data Will Be Deleted?</h2>
          <p>Once requested, we will permanently delete:</p>
          <ul>
            <li>Your account information (if any)</li>
            <li>Phone number used for OTP services</li>
            <li>Any stored authentication or session data</li>
            <li>Logs related to your usage (if stored)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Processing Time</h2>
          <p>Your data deletion request will be processed within 7-14 business days.</p>
        </section>

        <section className="policy-section">
          <h2>4. Confirmation</h2>
          <p>Once your data is deleted, we will send a confirmation email or message.</p>
        </section>

        <section className="policy-section">
          <h2>5. Important Note</h2>
          <p>Some data may be retained only if required by law, fraud prevention, or security purposes.</p>
        </section>
      </div>
    </div>
  );
}
