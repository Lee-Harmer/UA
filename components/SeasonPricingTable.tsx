'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ExternalLink, Users, BedDouble, Bath, PlayCircle, MapPin } from 'lucide-react';
import { Unit } from '@/lib/properties';
import { AmenityIcon } from '@/components/AmenityIcon';
import { UnitGallery } from '@/components/UnitGallery';

interface SeasonPricingTableProps {
  unit: Unit;
  complexSlug?: string;
}

export function SeasonPricingTable({ unit, complexSlug }: SeasonPricingTableProps) {
  const [open, setOpen] = useState(true);

  const minRate = Math.min(...unit.rates.map((r) => r.perNight));
  const maxRate = Math.max(...unit.rates.map((r) => r.perNight));

  return (
    <div className={`unit-card${open ? ' is-open' : ''}`}>
      {/* Header - always visible */}
      <div className="unit-card__header" onClick={() => setOpen(!open)} role="button" aria-expanded={open}>
        <div>
          <p className="unit-card__name">{unit.name}</p>
          <div className="unit-card__meta">
            <span className="unit-card__stat">
              <BedDouble size={13} strokeWidth={1.5} />
              {unit.bedrooms} bed
            </span>
            <span className="unit-card__stat">
              <Bath size={13} strokeWidth={1.5} />
              {unit.bathrooms} bath
            </span>
            <span className="unit-card__stat">
              <Users size={13} strokeWidth={1.5} />
              Sleeps {unit.sleeps}
            </span>
            {unit.minStay && (
              <span className="unit-card__stat" style={{ color: 'var(--gold)' }}>
                Min. {unit.minStay} nights
              </span>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {unit.videoUrl && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', font: '500 0.68rem/1 var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ocean)', flexShrink: 0 }}>
              <PlayCircle size={13} strokeWidth={1.5} /> Walkthrough
            </span>
          )}
          <span className="unit-card__price-preview">
            R{minRate.toLocaleString()} – R{maxRate.toLocaleString()}<span style={{ fontWeight: 400, color: 'var(--mid-grey)', fontSize: '0.75rem' }}>/night</span>
          </span>
          {complexSlug && (
            <Link
              href={`/properties/${complexSlug}/${unit.id}`}
              onClick={(e) => e.stopPropagation()}
              style={{ font: '500 0.7rem/1 var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              View →
            </Link>
          )}
          <ChevronDown size={18} className="unit-card__chevron" />
        </div>
      </div>

      {/* Body - expandable */}
      {open && (
        <div className="unit-card__body">
          <div className="unit-card__body-inner">
            {/* Gallery */}
            {unit.images.length > 0 && (
              <UnitGallery images={unit.images} name={unit.name} />
            )}

            {/* Video walkthrough */}
            {unit.videoUrl && (
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ font: '500 0.7rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ocean)', marginBottom: '0.75rem' }}>
                  Video Walkthrough
                </p>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '4px', overflow: 'hidden', background: 'var(--near-black)' }}>
                  <iframe
                    src={unit.videoUrl}
                    title={`${unit.name} video walkthrough`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              </div>
            )}

            {/* Description */}
            {unit.description && (
              <p style={{ font: '400 0.92rem/1.7 var(--font-body)', color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
                {unit.description}
              </p>
            )}

            {/* Pricing table */}
            <div className="pricing-table">
              {unit.rates.map((rate) => (
                <div key={rate.season} className={`pricing-table__cell pricing-table__cell--header pricing-table__cell--${rate.season}`}>
                  <span className="pricing-table__label">{rate.label}</span>
                  <span className="pricing-table__value">R{rate.perNight.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link href="/season-calendar" className="btn btn--outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}>
                View season dates &amp; minimum stays →
              </Link>
            </div>

            {/* Fees */}
            {(unit.bookingFee || unit.securityDeposit) && (
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
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
              <p style={{ font: '400 0.78rem/1.5 var(--font-body)', color: 'var(--mid-grey)', marginBottom: '1.5rem', padding: '0.75rem 1rem', background: 'var(--off-white)', border: '1px solid var(--warm-grey)', borderRadius: '2px' }}>
                {unit.notes}
              </p>
            )}

            {/* Amenities */}
            <div className="amenity-chips">
              {unit.amenities.map((key) => (
                <AmenityIcon key={key} amenity={key} chipStyle showLabel />
              ))}
            </div>

            {/* Map */}
            {unit.mapUrl && (
              <a
                href={unit.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'var(--off-white)', border: '1px solid var(--warm-grey)', borderRadius: '4px', textDecoration: 'none', color: 'var(--charcoal)', marginTop: '1.25rem', marginBottom: '0.5rem' }}
              >
                <MapPin size={18} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ font: '500 0.85rem/1 var(--font-body)' }}>View Location on Google Maps</span>
                <ExternalLink size={13} strokeWidth={1.5} style={{ color: 'var(--mid-grey)', marginLeft: 'auto', flexShrink: 0 }} />
              </a>
            )}

            {/* Book button */}
            {unit.nightsbridgeUrl && (
              <a
                href={unit.nightsbridgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
                style={{ marginTop: '0.5rem' }}
              >
                Book via Nightsbridge <ExternalLink size={13} />
              </a>
            )}

            {/* View full unit CTA */}
            {complexSlug && (
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--warm-grey)' }}>
                <Link
                  href={`/properties/${complexSlug}/${unit.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn--ocean"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}
                >
                  View Full Details for {unit.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
