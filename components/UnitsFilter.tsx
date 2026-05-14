'use client';
import { useState } from 'react';
import { SlidersHorizontal, Users, BedDouble } from 'lucide-react';
import { Unit } from '@/lib/properties';
import { SeasonPricingTable } from '@/components/SeasonPricingTable';

interface UnitsFilterProps {
  units: Unit[];
  complexSlug?: string;
}

export function UnitsFilter({ units, complexSlug }: UnitsFilterProps) {
  const [guestFilter, setGuestFilter] = useState<number | null>(null);
  const [bedFilter, setBedFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Build unique option sets from actual units
  const guestOptions = [...new Set(units.map((u) => u.sleeps))].sort((a, b) => a - b);
  const bedOptions = [...new Set(units.map((u) => u.bedrooms))].sort((a, b) => a - b);

  const filtered = units.filter((u) => {
    if (guestFilter && u.sleeps < guestFilter) return false;
    if (bedFilter && u.bedrooms !== bedFilter) return false;
    return true;
  });

  const hasActiveFilter = guestFilter !== null || bedFilter !== null;

  // Only show filters if there's more than one unit and variation exists
  const showFilterBar = units.length > 1 && (guestOptions.length > 1 || bedOptions.length > 1);

  return (
    <div>
      {/* Filter toggle header */}
      {showFilterBar && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ font: '400 0.85rem/1 var(--font-body)', color: 'var(--mid-grey)' }}>
            {filtered.length} of {units.length} units
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Guest filter */}
            {guestOptions.length > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={14} style={{ color: 'var(--mid-grey)' }} />
                <span style={{ font: '500 0.7rem/1 var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-grey)' }}>Guests</span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    className={`filter-chip${guestFilter === null ? ' is-active' : ''}`}
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.7rem' }}
                    onClick={() => setGuestFilter(null)}
                  >
                    Any
                  </button>
                  {guestOptions.map((g) => (
                    <button
                      key={g}
                      className={`filter-chip${guestFilter === g ? ' is-active' : ''}`}
                      style={{ padding: '0.4rem 0.85rem', fontSize: '0.7rem' }}
                      onClick={() => setGuestFilter(guestFilter === g ? null : g)}
                    >
                      {g}+
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bedroom filter */}
            {bedOptions.length > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BedDouble size={14} style={{ color: 'var(--mid-grey)' }} />
                <span style={{ font: '500 0.7rem/1 var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-grey)' }}>Beds</span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    className={`filter-chip${bedFilter === null ? ' is-active' : ''}`}
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.7rem' }}
                    onClick={() => setBedFilter(null)}
                  >
                    Any
                  </button>
                  {bedOptions.map((b) => (
                    <button
                      key={b}
                      className={`filter-chip${bedFilter === b ? ' is-active' : ''}`}
                      style={{ padding: '0.4rem 0.85rem', fontSize: '0.7rem' }}
                      onClick={() => setBedFilter(bedFilter === b ? null : b)}
                    >
                      {b} bed
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Clear */}
            {hasActiveFilter && (
              <button
                onClick={() => { setGuestFilter(null); setBedFilter(null); }}
                style={{ font: '500 0.7rem/1 var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {/* Units list */}
      <div className="units-grid">
        {filtered.map((unit) => (
          <SeasonPricingTable key={unit.id} unit={unit} complexSlug={complexSlug} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--mid-grey)' }}>
          <p className="body-lg">No units match your filter.</p>
          <button
            onClick={() => { setGuestFilter(null); setBedFilter(null); }}
            className="btn btn--outline"
            style={{ marginTop: '1rem' }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
