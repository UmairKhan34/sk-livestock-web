import type { Route } from "./+types/privacy-policy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy — S.K Rider" },
    { name: "description", content: "Privacy Policy for the S.K Rider app and website." },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-inner">
        <a href="/" className="policy-back">← Back to Home</a>

        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last Updated: 01-08-2026</p>

        <p className="policy-lead">
          This Privacy Policy explains how S.K Rider collects, uses, stores and protects the personal
          information of individuals who register and work as delivery riders ("Riders") through the
          S.K Rider mobile application.
        </p>

        <section className="policy-section">
          <h2>1. What Information do we collect?</h2>

          <h3>a. Contact Information</h3>
          <p>
            We ask users/riders to provide their full name, CNIC, mobile number, email address, home
            address, rider photograph, Motorcycle Registration Number, Driving License, Bank Account / IBAN
            / Easypaisa / JazzCash details, for the safe, smooth and accurate usage of the S.K Rider app.
          </p>

          <h3>b. User Name and Password for account creation</h3>
          <p>
            You shall need username and password to generate your account on the app. Usernames are
            moderated with the aim of preventing you from using any personal information to create an
            account. Additionally, passwords are encrypted.
          </p>

          <h3>c. Geo Location Information</h3>
          <p>
            We collect your geo location, Live GPS Location, Device Information, Ride History, App Usage
            Logs and other related data while using the app in order to process, dispatch and deliver the
            ordered products to the customers of SULEMAN KHAN LIVESTOCK PVT LTD in a smooth and befitted manner.
            Location may continue in the background while an active delivery is in progress. GPS data may be
            retained for fraud prevention and dispute resolution.
          </p>

          <h3>d. Camera Permission</h3>
          <p>
            We require camera access for obtaining Profile photo, Delivery proof, Package condition, CNIC
            verification and Driving license verification etc.
          </p>

          <h3>e. Phone Permission</h3>
          <p>
            Phone permission is necessary and used only to initiate calls between riders and customers regarding
            deliveries.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. What we do with the information we collect?</h2>
          <p>
            We Use the information we collect to provide the delivery services to our clients and to keep the
            delivery process flawless, secure and safe. In order to do that, it is necessary for us to use the
            information to:
          </p>
          <ul>
            <li>To ensure riders’ and customers’ safety.</li>
            <li>Identify you when you use S.K Rider and process your order delivery.</li>
            <li>Oversee and monitor the delivery process till the products are delivered.</li>
            <li>Respond to queries of the customers regarding delivery of orders.</li>
            <li>To handle post order delivery related claims/queries.</li>
            <li>For investigations of frauds and dispute resolution.</li>
            <li>For any sort of legal, regulatory, tax, accounting and ancillary purposes.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How the information is stored and protected?</h2>
          <ul>
            <li>We take steps to protect your personal information from unauthorized access and against unlawful processing, accidental loss, destruction and damage.</li>
            <li>We will only keep your personal information for as long as we reasonably require and, in any event, only for as long as the Data Protection Legislation allows.</li>
            <li>When you have chosen a password which allows you to access certain parts of the site, you are responsible for keeping this password confidential. We advise you not to share your password with anyone.</li>
            <li>Unfortunately, the transmission of information via the internet is not completely secure and, although we will take steps to protect your personal information, we cannot guarantee the security of your personal information transmitted via the website; any transmission is therefore at your own risk.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. How do we keep your personal information secure?</h2>
          <ul>
            <li>We follow industry standards on information security management to safeguard sensitive information, such as financial information, intellectual property, and any other personal information entrusted to us. Our information security systems apply to people, processes and information technology systems on risk management basis.</li>
            <li>We perform annual audits to ensure our handling of your credit card information aligns with industry guidelines.</li>
            <li>No method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Sharing of Information</h2>
          <h3>a. Sharing with Third Parties</h3>
          <p>
            We may disclose your information to our customers for tracking of their orders or with our payment partners
            for making payments to you, governmental authorities if required by them, technology providers and legal
            advisors in case of a need.
          </p>

          <h3>b. Service-Related Announcement</h3>
          <p>
            We will also send you service-related email announcements on rare occasions when it is necessary to do so.
            For instance, if our service is temporarily suspended for maintenance, we might send you an email. You do not
            have an option to opt out these emails, which are not promotional in nature.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Company Contact information</h2>
          <p>
            If you would like to receive further information about this policy or any of our safeguards, please contact our
            Data Protection Officer at First Floor, Khan Auto Complex, Neelum Street near Vehari Chowk Multan or email at
            <a href="mailto:riders.queries@sklivestock.net"> riders.queries@sklivestock.net</a>
          </p>
        </section>
      </div>
    </div>
  );
}
