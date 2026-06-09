import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { complexes, getComplexBySlug, getMinRate, getSimilarComplexes } from '@/lib/properties';
import { AmenityIcon } from '@/components/AmenityIcon';
import { UnitsFilter } from '@/components/UnitsFilter';
import { PropertyCard } from '@/components/PropertyCard';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return complexes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const complex = getComplexBySlug(slug);
  if (!complex) return {};
  return {
    title: `${complex.name} - ${complex.tagline} | Umhlanga Accommodations`,
    description: complex.description.slice(0, 160),
  };
}

export default async function ComplexDetailPage({ params }: Props) {
  const { slug } = await params;
  const complex = getComplexBySlug(slug);
  if (!complex) notFound();

  const minRate = getMinRate(complex);

  return (
    <main>
      {/* Hero */}
      <div className="prop-detail__hero">
        <Image
          src={complex.coverImage}
          alt={complex.name}
          fill
          priority
          className="prop-detail__hero-img"
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div className="prop-detail__hero-overlay" aria-hidden="true" />
        <div className="container prop-detail__hero-content">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', font: '400 0.78rem/1 var(--font-body)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)' }}>Home</Link>
            <ChevronRight size={12} />
            <Link href="/properties" style={{ color: 'rgba(255,255,255,0.55)' }}>Properties</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>{complex.name}</span>
          </nav>

          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>{complex.location}</span>
          <h1 className="display-lg" style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>
            {complex.name}
          </h1>
          <p style={{ font: '400 1rem/1.5 var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>
            {complex.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="prop-detail__content">
        <div className="container">
          <div className="prop-detail__layout">
            {/* Main */}
            <div className="prop-detail__main">
              {/* Units */}
              <h2 className="prop-detail__section-title">
                Available Units ({complex.units.length})
              </h2>
              <UnitsFilter units={complex.units} complexSlug={complex.slug} />

              {/* Complex amenities */}
              <h2 className="prop-detail__section-title">Complex Amenities</h2>
              <div className="amenity-chips" style={{ marginBottom: '3rem' }}>
                {complex.complexAmenities.map((key) => (
                  <AmenityIcon key={key} amenity={key} chipStyle showLabel />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="prop-detail__sidebar">
              {/* Description */}
              <p className="prop-detail__description">{complex.description}</p>

              {/* Highlights */}
              <ul className="prop-detail__highlights" style={{ marginBottom: '2rem' }}>
                {complex.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="enquiry-card">
                <p className="enquiry-card__title">Make an Enquiry</p>
                <p className="enquiry-card__sub">
                  From <strong style={{ color: 'var(--charcoal)', font: '600 1.1rem/1 var(--font-body)' }}>R{minRate.toLocaleString()}</strong>
                  <span style={{ font: '400 0.82rem/1 var(--font-body)', color: 'var(--mid-grey)' }}> / night</span>
                </p>

                <a href="tel:+27315612012" className="enquiry-card__tel">
                  <Phone size={16} strokeWidth={1.5} />
                  +27 31 561 2012
                </a>

                <div className="enquiry-card__divider">or</div>

                <a
                  href={`mailto:reservations@umhlangaaccommodation.co.za?subject=${encodeURIComponent(`${complex.name} - Accommodation Enquiry`)}`}
                  className="btn btn--ocean"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Email Us
                </a>

                <p className="enquiry-card__address">
                  <MapPin size={13} style={{ display: 'inline', marginRight: '0.3em', color: 'var(--mid-grey)', verticalAlign: 'middle' }} />
                  Shop 14 Chartwell Centre,<br />
                  Chartwell Drive, Umhlanga Rocks
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Similar Spots */}
      {(() => {
        const similar = getSimilarComplexes(complex);
        return (
          <section className="section" style={{ background: 'var(--sand)' }}>
            <div className="container">
              <div className="reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                <span className="eyebrow">You might also like</span>
                <h2 className="display-md" style={{ color: 'var(--ocean-deep)' }}>Similar Spots</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))', gap: '1.5rem' }}>
                {similar.map((s, i) => (
                  <div key={s.id} className="reveal" style={{ '--i': i + 1 } as React.CSSProperties}>
                    <PropertyCard complex={s} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* CTA */}
      <div className="cta-strip" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
            Looking for something else?
          </p>
          <Link href="/properties" className="btn btn--gold btn--lg">
            View All Properties
          </Link>
        </div>
      </div>
    </main>
  );
}
