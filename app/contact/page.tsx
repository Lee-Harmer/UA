import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Umhlanga Accommodations',
  description: 'Get in touch with Umhlanga Accommodations. Call +27 31 561 2012 or visit us at Shop 14 Chartwell Centre, 15 Chartwell Drive, Umhlanga Rocks.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <div className="contact-page__hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>We&apos;d love to hear from you</span>
          <h1 className="display-xl" style={{ color: 'var(--white)', marginTop: '0.75rem', marginBottom: '1rem' }}>
            Get in Touch
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '44ch' }}>
            Our team has decades of local knowledge and is always happy to help
            you find the perfect Umhlanga apartment.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="contact-page__content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact info */}
            <div>
              <span className="eyebrow reveal">Contact Details</span>
              <h2 className="display-md reveal" style={{ '--i': 1, marginBottom: '2.5rem', color: 'var(--ocean-deep)' } as React.CSSProperties}>
                Reach us<br /><em>anytime</em>
              </h2>

              <div className="reveal" style={{ '--i': 2 } as React.CSSProperties}>

                {/* Phone */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="contact-info__label">Telephone</span>
                    <p className="contact-info__value">
                      <a href="tel:+27315612012">031 561 2012</a>
                    </p>
                  </div>
                </div>

                {/* After hours */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="contact-info__label">After-Hours Emergency</span>
                    <p className="contact-info__value">
                      <a href="tel:+27848402646">084 840 2646</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="contact-info__label">Address</span>
                    <p className="contact-info__value">
                      Shop 14, Chartwell Centre<br />
                      15 Chartwell Drive<br />
                      Umhlanga Rocks<br />
                      Natal, South Africa
                    </p>
                  </div>
                </div>

                {/* Office hours */}
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <Clock size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="contact-info__label">Office Hours</span>
                    <p className="contact-info__value">
                      Monday – Friday: 8:00am – 4:30pm<br />
                      Saturday: 8:30am – 12:30pm<br />
                      Sunday &amp; Public Holidays: Closed
                    </p>
                  </div>
                </div>

              </div>

              {/* Team contacts */}
              <div className="reveal" style={{ '--i': 3, marginTop: '2.5rem' } as React.CSSProperties}>
                <p style={{ font: '500 0.72rem/1 var(--font-body)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                  Our Team
                </p>
                <div className="contact-team">
                  <div className="contact-team__member">
                    <div className="contact-team__role">Reservations</div>
                    <div className="contact-team__name">Cheryl Fisher</div>
                    <a href="mailto:cheryl@umhlangaaccommodation.co.za" className="contact-team__email">
                      <Mail size={12} strokeWidth={1.5} />
                      cheryl@umhlangaaccommodation.co.za
                    </a>
                  </div>
                  <div className="contact-team__member">
                    <div className="contact-team__role">Reservations</div>
                    <div className="contact-team__name">Hermann Buys</div>
                    <a href="mailto:hermann@umhlangaaccommodation.co.za" className="contact-team__email">
                      <Mail size={12} strokeWidth={1.5} />
                      hermann@umhlangaaccommodation.co.za
                    </a>
                  </div>
                  <div className="contact-team__member">
                    <div className="contact-team__role">Owner</div>
                    <div className="contact-team__name">Penny Underwood</div>
                    <a href="mailto:penny@umhlangaaccommodation.co.za" className="contact-team__email">
                      <Mail size={12} strokeWidth={1.5} />
                      penny@umhlangaaccommodation.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="reveal reveal--right" style={{ '--i': 1 } as React.CSSProperties}>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.3!2d31.0799!3d-29.7269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a7b9!2sChartwell+Centre%2C+Umhlanga+Rocks!5e0!3m2!1sen!2sza!4v1!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Umhlanga Accommodations office location"
                />
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--sand)', borderRadius: '4px' }}>
                <p style={{ font: '500 0.72rem/1 var(--font-body)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
                  Enquire About a Property
                </p>
                <p style={{ font: '400 0.9rem/1.6 var(--font-body)', color: 'var(--charcoal)', marginBottom: '1rem' }}>
                  To enquire about a specific property, please call us directly or
                  use the individual property pages to book via Nightsbridge.
                </p>
                <a href="tel:+27315612012" className="btn btn--ocean">
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
