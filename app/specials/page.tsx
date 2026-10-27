import Link from 'next/link';
import { ArrowRight, Phone, Bell } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Specials & Offers | Umhlanga Accommodations',
  description:
    'Current specials and offers on self-catering apartments in Umhlanga. Early bird discounts, extended stay deals, winter rates, and last-minute availability. Contact us to confirm.',
};

export default function SpecialsPage() {
  return (
    <main>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="specials-page__hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Exclusive Offers</span>
          <h1 className="display-xl" style={{ color: 'var(--white)', marginTop: '0.75rem', marginBottom: '1rem' }}>
            Specials &amp; Deals
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '46ch' }}>
            From early-bird summer savings to last-minute availability, here are our
            current offers on self-catering apartments in Umhlanga.
          </p>
        </div>
      </div>

      {/* ── Coming soon ────────────────────────────────────────── */}
      <section className="section specials-page__offers">
        <div className="container">
          <div className="specials-page__coming-soon reveal">
            <Bell size={40} strokeWidth={1.25} style={{ color: 'var(--ocean)' }} />
            <h2 className="display-md" style={{ color: 'var(--ocean-deep)' }}>
              Specials Coming Soon
            </h2>
            <p className="body-lg" style={{ color: 'var(--mid-grey)', maxWidth: '44ch', margin: '0 auto' }}>
              We are putting together some great offers for the season ahead.
              Check back soon, or get in touch and we will let you know what is available.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Link href="/contact" className="btn btn--gold btn--lg">
                Contact Us <ArrowRight size={14} />
              </Link>
              <a href="tel:+27315612012" className="btn btn--outline btn--lg">
                <Phone size={14} /> Call +27 31 561 2012
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────────── */}
      <div className="cta-strip">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow cta-strip__eyebrow">Ready to book?</span>
          <h2 className="display-lg cta-strip__headline">
            Find your perfect<br /><em>Umhlanga</em> apartment
          </h2>
          <p className="body-lg cta-strip__sub">
            Browse all available properties or call us directly. We will help you find
            the right unit at the best available rate.
          </p>
          <div className="cta-strip__actions">
            <Link href="/properties" className="btn btn--gold btn--lg">
              Browse Properties <ArrowRight size={14} />
            </Link>
            <a href="tel:+27315612012" className="btn btn--ghost btn--lg">
              <Phone size={14} /> Call +27 31 561 2012
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
