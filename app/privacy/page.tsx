import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Umhlanga Accommodations',
  description: 'Privacy policy for Umhlanga Accommodations - how we collect and use your information.',
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="legal-page__hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Legal</span>
          <h1 className="display-lg" style={{ color: 'var(--white)', marginTop: '0.75rem' }}>
            Privacy Policy
          </h1>
        </div>
      </div>

      <section className="legal-page__body">
        <div className="container">
          <div className="legal-content">

            <p className="legal-content__intro">
              This privacy policy demonstrates our firm commitment to your privacy. Umhlanga Accommodations has no control over the policies of affiliated websites. In general, you can visit our website without telling us who you are or revealing any personal information about yourself.
            </p>

            <h2>What Information We Collect</h2>
            <p>
              Your computer's IP address is used to identify it when you are connected to the Internet, so that data such as web pages you request can be sent to you. We collect IP addresses to help administer our website and to gather statistical information about visitor traffic.
            </p>
            <p>
              A "Cookie" is a small element of data that a website can send to your browser. We use cookies to better personalise the content you and other visitors see. This site contains links to other websites. Umhlanga Accommodations is not responsible for the privacy practices or content of those sites.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              Any personal information you provide - for example when making an enquiry or booking - is used solely to process your request and communicate with you about your accommodation. We do not sell, trade, or share your personal information with third parties, except where required by law.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable precautions to protect your personal information. Online payment transactions are processed through secure payment gateways (PayGate) and are not stored on our servers.
            </p>

            <h2>Contacting Us</h2>
            <p>
              If you have any questions about this privacy policy, the practices of this site, or your dealings with us, please contact:
            </p>
            <p>
              <strong>Umhlanga Accommodations</strong><br />
              Shop 14 Chartwell Centre, Chartwell Drive, Umhlanga Rocks<br />
              Tel: <a href="tel:+27315612012">+27 31 561 2012</a><br />
              Email: <a href="mailto:info@umhlangaaccommodation.co.za">info@umhlangaaccommodation.co.za</a>
            </p>

            <div className="legal-content__back">
              <Link href="/" className="btn btn--outline">← Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
