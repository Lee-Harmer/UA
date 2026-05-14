import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Est. 1988 | Umhlanga Accommodations',
  description: 'Founded in 1988 by Penny Underwood. Umhlanga\'s most trusted holiday accommodation specialists for over 37 years.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div className="about-page__hero">
        <Image
          src="/images/hero/lighthouse-night.jpg"
          alt="Umhlanga Lighthouse at dusk"
          fill
          priority
          className="about-page__hero-img"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          sizes="100vw"
        />
        <div className="about-page__hero-overlay" aria-hidden="true" />
        <div className="container about-page__hero-content">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Our Story</span>
          <h1 className="display-xl" style={{ color: 'var(--white)', marginTop: '0.75rem' }}>
            Since <em>1988</em>
          </h1>
        </div>
      </div>

      {/* Stats bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-bar__grid">
            {[
              { count: 1988, suffix: '', label: 'Year Founded' },
              { count: 37, suffix: '+', label: 'Years in Business' },
              { count: 19, suffix: '', label: 'Property Complexes' },
              { count: 70, suffix: '+', label: 'Holiday Units' },
            ].map((stat) => (
              <div key={stat.label} className="stats-bar__item reveal">
                <span className="stats-bar__number">
                  <span data-count={stat.count}>{stat.count}</span>
                  {stat.suffix}
                </span>
                <span className="stats-bar__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="about-page__story">
        <div className="container">
          <div className="about-page__story-layout">
            <div className="about-page__story-body">
              <span className="eyebrow reveal">The Umhlanga Accommodations Story</span>
              <h2 className="display-lg reveal" style={{ '--i': 1, marginBottom: '2rem', color: 'var(--ocean-deep)' } as React.CSSProperties}>
                More than just<br />a <em>place to stay</em>
              </h2>

              <div className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
                <p>
                  In June 1988, Penny Underwood began what would become Umhlanga&apos;s most
                  trusted holiday accommodation agency - with a single apartment in Bronze Bay.
                  Within just a few years, her reputation for honest advice and reliable service
                  had grown the portfolio to over 100 premier properties.
                </p>
                <p>
                  Penny received the Umhlanga Business Personality Award in 1995, recognising
                  her contributions not just to local tourism, but to the community as a whole.
                </p>
                <p>
                  Today, Umhlanga Accommodations specialises exclusively in short-term holiday
                  rentals - allowing us to focus all our expertise on creating exceptional
                  experiences for holiday guests. What makes us different isn&apos;t just our
                  decades of experience, but our people. Our longest-serving team member has
                  been with us since 1988 - that kind of continuity and consistency is
                  increasingly rare, and it&apos;s something we&apos;re immensely proud of.
                </p>
                <p>
                  Through flooding events, economic upheavals, and even a global pandemic,
                  we&apos;ve continued to deliver what we always have: reliable service,
                  well-managed properties, and honest advice.
                </p>
              </div>
            </div>

            <div className="reveal reveal--right" style={{ '--i': 1 } as React.CSSProperties}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', aspectRatio: '3/2', position: 'relative' }}>
                <Image
                  src="/images/about/team.jpg"
                  alt="The Umhlanga Accommodations team"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div style={{ background: 'var(--sand)', borderRadius: '4px', padding: '1.5rem', marginTop: '1.25rem' }}>
                <p style={{ font: '500 0.72rem/1 var(--font-body)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  Our Philosophy
                </p>
                <p style={{ font: '400 0.95rem/1.65 var(--font-body)', color: 'var(--charcoal)' }}>
                  &ldquo;Reliable service, well-managed properties, and honest advice.&rdquo;
                  These three principles have guided everything we do for 37 years - and they
                  always will.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <h2 className="display-lg cta-strip__headline">
            Experience the<br /><em>difference</em>
          </h2>
          <p className="body-lg cta-strip__sub">
            Let our decades of local knowledge help you find the perfect Umhlanga property.
          </p>
          <div className="cta-strip__actions">
            <Link href="/properties" className="btn btn--gold btn--lg">
              Browse Properties <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn btn--ghost btn--lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
