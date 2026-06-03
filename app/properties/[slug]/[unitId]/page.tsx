import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ChevronRight, ExternalLink, BedDouble, Bath, Users } from 'lucide-react';
import { complexes, getUnitByIds, getSimilarUnits, getMinRate } from '@/lib/properties';
import { AmenityIcon } from '@/components/AmenityIcon';
import { UnitGallery } from '@/components/UnitGallery';
import { PropertyCard } from '@/components/PropertyCard';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string; unitId: string }>;
}

export async function generateStaticParams() {
  return complexes.flatMap((c) =>
    c.units.map((u) => ({ slug: c.slug, unitId: u.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, unitId } = await params;
  const result = getUnitByIds(slug, unitId);
  if (!result) return {};
  const { complex, unit } = result;
  return {
    title: `${unit.name} - ${complex.name} | Umhlanga Accommodations`,
    description: unit.description?.slice(0, 160) ?? complex.description.slice(0, 160),
  };
}

export default async function UnitDetailPage({ params }: Props) {
  const { slug, unitId } = await params;
  const result = getUnitByIds(slug, unitId);
  if (!result) notFound();

  const { complex, unit } = result;
  const minRate = Math.min(...unit.rates.map((r) => r.perNight));
  const similarUnits = getSimilarUnits(complex, unit, 3);

  return (
    <main>
      {/* Hero - use first unit image as banner */}
      {unit.images.length > 0 && (
        <div className="prop-detail__hero">
          <Image
            src={unit.images[0]}
            alt={unit.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="prop-detail__hero-overlay" aria-hidden="true" />
          <div className="container prop-detail__hero-content">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', font: '400 0.78rem/1 var(--font-body)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em', flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.55)' }}>Home</Link>
              <ChevronRight size={12} />
              <Link href="/properties" style={{ color: 'rgba(255,255,255,0.55)' }}>Properties</Link>
              <ChevronRight size={12} />
              <Link href={`/properties/${slug}`} style={{ color: 'rgba(255,255,255,0.55)' }}>{complex.name}</Link>
              <ChevronRight size={12} />
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{unit.name}</span>
            </nav>

            <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>{complex.location}</span>
            <h1 className="display-lg" style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>
              {unit.name}
            </h1>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
              <span style={{ font: '400 0.9rem/1 var(--font-body)', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BedDouble size={15} strokeWidth={1.5} /> {unit.bedrooms} bedroom{unit.bedrooms !== 1 ? 's' : ''}
              </span>
              <span style={{ font: '400 0.9rem/1 var(--font-body)', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Bath size={15} strokeWidth={1.5} /> {unit.bathrooms} bathroom{unit.bathrooms !== 1 ? 's' : ''}
              </span>
              <span style={{ font: '400 0.9rem/1 var(--font-body)', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={15} strokeWidth={1.5} /> Sleeps {unit.sleeps}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <section className="prop-detail__content">
        <div className="container">
          <div className="prop-detail__layout">

            {/* Main */}
            <div className="prop-detail__main">
              {/* Gallery */}
              {unit.images.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <UnitGallery images={unit.images} name={unit.name} />
                </div>
              )}

              {/* Video Walkthrough */}
              {unit.videoUrl && (
                <div style={{ marginBottom: '2rem' }}>
                  <h2 className="prop-detail__section-title">Video Walkthrough</h2>
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '4px', background: 'var(--charcoal)' }}>
                    <iframe
                      src={unit.videoUrl}
                      title={`${unit.name} video walkthrough`}
                      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                </div>
              )}

              {/* Description */}
              {unit.description && (
                <p className="prop-detail__description">{unit.description}</p>
              )}

              {/* Pricing */}
              <h2 className="prop-detail__section-title">Seasonal Rates</h2>
              <div className="pricing-table" style={{ marginBottom: '2rem' }}>
                {unit.rates.map((rate) => (
                  <div key={rate.season} className={`pricing-table__cell pricing-table__cell--header pricing-table__cell--${rate.season}`}>
                    <span className="pricing-table__label">{rate.label}</span>
                    <span className="pricing-table__value">R{rate.perNight.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Fees */}
              {(unit.bookingFee || unit.securityDeposit) && (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {unit.bookingFee && (
                    <div style={{ background: 'var(--off-white)', border: '1px solid var(--warm-grey)', borderRadius: '2px', padding: '0.75rem 1rem' }}>
                      <span style={{ font: '500 0.65rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--mid-grey)', display: 'block', marginBottom: '0.3rem' }}>Booking Fee</span>
                      <span style={{ font: '600 0.95rem/1 var(--font-body)', color: 'var(--charcoal)' }}>R{unit.bookingFee.toLocaleString()} <span style={{ font: '400 0.75rem/1 var(--font-body)', color: 'var(--mid-grey)' }}>non-refundable</span></span>
                    </div>
                  )}
                  {unit.securityDeposit && (
                    <div style={{ background: 'var(--off-white)', border: '1px solid var(--warm-grey)', borderRadius: '2px', padding: '0.75rem 1rem' }}>
                      <span style={{ font: '500 0.65rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--mid-grey)', display: 'block', marginBottom: '0.3rem' }}>Security Deposit</span>
                      <span style={{ font: '600 0.95rem/1 var(--font-body)', color: 'var(--charcoal)' }}>R{unit.securityDeposit.toLocaleString()} <span style={{ font: '400 0.75rem/1 var(--font-body)', color: 'var(--mid-grey)' }}>refundable</span></span>
                    </div>
                  )}
                </div>
              )}

              {/* Notes */}
              {unit.notes && (
                <p style={{ font: '400 0.78rem/1.5 var(--font-body)', color: 'var(--mid-grey)', marginBottom: '2rem', padding: '0.75rem 1rem', background: 'var(--off-white)', border: '1px solid var(--warm-grey)', borderRadius: '2px' }}>
                  {unit.notes}
                </p>
              )}

              {/* Min stay */}
              {unit.minStay && (
                <p style={{ font: '500 0.82rem/1 var(--font-body)', color: 'var(--gold)', marginBottom: '2rem' }}>
                  Minimum stay: {unit.minStay} nights
                </p>
              )}

              {/* Amenities */}
              <h2 className="prop-detail__section-title">Amenities</h2>
              <div className="amenity-chips" style={{ marginBottom: '3rem' }}>
                {unit.amenities.map((key) => (
                  <AmenityIcon key={key} amenity={key} chipStyle showLabel />
                ))}
              </div>

              {/* Map */}
              {unit.mapUrl && (
                <div style={{ marginBottom: '3rem' }}>
                  <h2 className="prop-detail__section-title">Location</h2>
                  <a
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: 'var(--off-white)', border: '1px solid var(--warm-grey)', borderRadius: '4px', textDecoration: 'none', color: 'var(--charcoal)' }}
                  >
                    <MapPin size={22} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <div>
                      <div style={{ font: '600 0.95rem/1 var(--font-body)', marginBottom: '0.3rem' }}>{complex.name}</div>
                      <div style={{ font: '400 0.82rem/1 var(--font-body)', color: 'var(--mid-grey)' }}>{complex.location} — View on Google Maps</div>
                    </div>
                    <ExternalLink size={15} strokeWidth={1.5} style={{ color: 'var(--mid-grey)', marginLeft: 'auto', flexShrink: 0 }} />
                  </a>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="prop-detail__sidebar">
              <div className="enquiry-card">
                <p className="enquiry-card__title">Make an Enquiry</p>
                <p className="enquiry-card__sub">
                  From <strong style={{ color: 'var(--charcoal)', font: '600 1.1rem/1 var(--font-body)' }}>R{minRate.toLocaleString()}</strong>
                  <span style={{ font: '400 0.82rem/1 var(--font-body)', color: 'var(--mid-grey)' }}> / night</span>
                </p>

                {unit.nightsbridgeUrl && (
                  <a
                    href={unit.nightsbridgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--gold"
                    style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}
                  >
                    Book via Nightsbridge <ExternalLink size={13} />
                  </a>
                )}

                <a href="tel:+27315612012" className="enquiry-card__tel">
                  <Phone size={16} strokeWidth={1.5} />
                  +27 31 561 2012
                </a>

                <div className="enquiry-card__divider">or</div>

                <a
                  href={`mailto:reservations@umhlangaaccommodation.co.za?subject=${encodeURIComponent(`${unit.name} - Accommodation Enquiry`)}`}
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

              {/* Back to complex */}
              <Link
                href={`/properties/${slug}`}
                className="btn btn--outline"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
              >
                ← All {complex.name} Units
              </Link>
            </aside>

          </div>
        </div>
      </section>

      {/* Similar Units */}
      {similarUnits.length > 0 && (
        <section className="section" style={{ background: 'var(--sand)' }}>
          <div className="container">
            <div className="reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <span className="eyebrow">You might also like</span>
              <h2 className="display-md" style={{ color: 'var(--ocean-deep)' }}>Similar Apartments</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))', gap: '1.5rem' }}>
              {similarUnits.map(({ complex: c, unit: u }, i) => (
                <div key={u.id} className="reveal" style={{ '--i': i + 1 } as React.CSSProperties}>
                  <SimilarUnitCard complex={c} unit={u} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

// Inline card for similar units - shows image, name, beds/sleeps, from price, link
function SimilarUnitCard({ complex, unit }: { complex: import('@/lib/properties').Complex; unit: import('@/lib/properties').Unit }) {
  const minRate = Math.min(...unit.rates.map((r) => r.perNight));
  const coverImg = unit.images[0] ?? complex.coverImage;

  return (
    <Link href={`/properties/${complex.slug}/${unit.id}`} className="prop-card">
      <div className="prop-card__img-wrap">
        <Image
          src={coverImg}
          alt={unit.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 0.5s var(--ease-expo)' }}
          className="prop-card__img"
        />
        <div className="prop-card__overlay" aria-hidden="true" />
      </div>
      <div className="prop-card__body">
        <p style={{ font: '500 0.65rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.35rem' }}>{complex.name}</p>
        <h3 className="prop-card__name">{unit.name}</h3>
        <div className="prop-card__meta">
          <span className="prop-card__price"><strong>{unit.bedrooms} bed</strong> · Sleeps {unit.sleeps}</span>
          <span className="prop-card__price">From <strong>R{minRate.toLocaleString()}</strong>/night</span>
        </div>
      </div>
    </Link>
  );
}
