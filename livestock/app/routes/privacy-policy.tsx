import type { Route } from "./+types/privacy-policy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy — SK Livestock" },
    { name: "description", content: "Privacy Policy for S.K Livestock app and website." },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-inner">
        <a href="/" className="policy-back">← Back to Home</a>

        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last Updated: February 4, 2026</p>

        <p className="policy-lead">
          This Policy explains what information we collect when you use S.K Livestock's site, app,
          services, mobile applications, products and content ("services"). It also has information
          about how we store, use, transfer and delete that information. Our aim is not just to
          comply with privacy law — it's to earn your trust.
        </p>
        <p className="policy-lead">
          In order to give you the best possible experience using S.K Livestock, we collect
          information from interactions with our network. Some of this information, you actively
          tell us (such as your email address). Other information, we collect based on actions you
          take while using S.K Livestock, such as what pages you access and your interactions with
          our product features.
        </p>

        <section className="policy-section">
          <h2>1. What Information do we collect?</h2>

          <h3>a. Contact Information</h3>
          <p>We ask users to provide their mobile number and email address so they may access certain services of the app after being logged in the S.K Livestock app.</p>

          <h3>b. User Name and Password for account creation</h3>
          <p>You shall need username and password to generate your account on the app. Usernames are moderated with the aim of preventing you from using any personal information to create an account. Additionally, passwords are encrypted.</p>

          <h3>c. Geo Location Information</h3>
          <p>We collect your zip code and other rough information about your location when using the services, solely to display the information and to dispatch the ordered products to you.</p>

          <h3>d. Search Queries</h3>
          <p>Our Services may include search fields that allow you to search (only within the services) for contents or answers to questions. We collect information about what items and topics you query, and any additional search items.</p>

          <h3>e. Your Content</h3>
          <p>We collect comments and other information that under age people post through interactive online features. However, all such information is either canned or moderated to avoid collecting personal information and to help maintain a safe environment for users.</p>
        </section>

        <section className="policy-section">
          <h2>2. What we do with the information we collect?</h2>
          <p>We use the information we collect to provide the services to you. We commit to showing you content that's relevant, interesting and personal to you. In order to do that, it is necessary for us to use the information to:</p>
          <ul>
            <li>Identify you when you use S.K Livestock and process your transactions.</li>
            <li>Recommend content, topics or categories you might like based on your activity on S.K Livestock.</li>
            <li>Respond to your questions or comments.</li>
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
            <li>We follow industry standards on information security management to safeguard sensitive information, such as financial information, intellectual property, and any other personal information entrusted to us.</li>
            <li>We perform annual audits to ensure our handling of your credit card information aligns with industry guidelines.</li>
            <li>No method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Use of Cookies, Log Files and Tracking</h2>
          <h3>a. Cookies</h3>
          <p>We employ cookies and similar technologies to keep track of your local computer's settings such as which account you have logged into and notification settings. Cookies are pieces of data that sites and services can set on your browser or device that can be read on future visits. We may use third-party website analytic tools such as Google Analytics on our website that employ cookies to collect certain information concerning your use of our services. However, you can disable cookies by changing your browser settings.</p>

          <h3>b. Log Files</h3>
          <p>As is true of most websites, we gather certain information automatically and store it in log files. This information includes Internet Protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, and the files viewed on our site.</p>

          <h3>c. Tracking</h3>
          <p>We use this information to analyze trends, administer our website, track visitors' movements around our website, and gather demographic information about our visitors as a whole.</p>
        </section>

        <section className="policy-section">
          <h2>6. Our Opt-out Policy</h2>
          <h3>a. Sharing with Third Parties for marketing</h3>
          <p>We may disclose your information to third parties for their direct marketing purposes. If you would like to opt out of such disclosures, please contact us at <a href="mailto:customer.care@sklivestock.net">customer.care@sklivestock.net</a>.</p>

          <h3>b. Email Marketing</h3>
          <p>To stop receiving newsletters or marketing communications from us or to opt out of having your email address shared with third parties, please use the "Unsubscribe" mechanism provided in the communication or send an email to <a href="mailto:customer.care@sklivestock.net">customer.care@sklivestock.net</a>.</p>

          <h3>c. Service-Related Announcements</h3>
          <p>We will also send you service-related email announcements on rare occasions when it is necessary to do so. You do not have an option to opt out of these emails, which are not promotional in nature.</p>
        </section>

        <section className="policy-section">
          <h2>7. Company Contact Information</h2>
          <p>If you would like to receive further information about this policy or any of our safeguards, please contact us:</p>
          <div className="policy-contact">
            <p><strong>Email:</strong> <a href="mailto:customer.care@sklivestock.net">customer.care@sklivestock.net</a></p>
            <p><strong>Phone:</strong> +92 300 0022755</p>
          </div>
        </section>
      </div>
    </div>
  );
}
