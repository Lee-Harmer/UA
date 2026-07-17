'use client';
import { Suspense, useRef, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BedDouble, Users, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { complexes, ComplexCategory, Complex, Unit } from '@/lib/properties';
import { AMENITIES, AmenityKey } from '@/lib/amenities';
import { PropertyCard } from '@/components/PropertyCard';

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPE_OPTIONS: { label: string; value: string }[] = [
  { label: 'Any',        value: '' },
  { label: 'Beachfront', value: 'beachfront' },
  { label: 'Village',    value: 'village' },
  { label: 'Resort',     value: 'resort' },
  { label: 'Luxury',     value: 'luxury' },
];

const MIN_PRICE_OPTIONS: { label: string; value: string }[] = [
  { label: 'Any',     value: '' },
  { label: 'R1 250',  value: '1250' },
  { label: 'R1 500',  value: '1500' },
  { label: 'R2 000',  value: '2000' },
  { label: 'R2 500',  value: '2500' },
  { label: 'R3 000',  value: '3000' },
  { label: 'R4 000',  value: '4000' },
  { label: 'R5 000',  value: '5000' },
];

const MAX_PRICE_OPTIONS: { label: string; value: string }[] = [
  { label: 'Any',     value: '' },
  { label: 'R1 500',  value: '1500' },
  { label: 'R2 000',  value: '2000' },
  { label: 'R2 500',  value: '2500' },
  { label: 'R3 000',  value: '3000' },
  { label: 'R4 000',  value: '4000' },
  { label: 'R5 000',  value: '5000' },
  { label: 'R7 500',  value: '7500' },
];

const GUEST_OPTIONS: { label: string; value: string }[] = [
  { label: 'Any',   value: '' },
  { label: '2',     value: '2' },
  { label: '4',     value: '4' },
  { label: '5',     value: '5' },
  { label: '6',     value: '6' },
  { label: '8+',    value: '8' },
];

const ALL_AMENITY_KEYS = Object.keys(AMENITIES) as AmenityKey[];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function unitMinRate(unit: Unit): number {
  return Math.min(...unit.rates.map((r) => r.perNight));
}

// ─── UnitCard ─────────────────────────────────────────────────────────────────

function UnitCard({ complex, unit }: { complex: Complex; unit: Unit }) {
  const minRate = unitMinRate(unit);
  const image = unit.images[0] ?? complex.coverImage;

  return (
    <Link href={`/properties/${complex.slug}/${unit.id}`} className="prop-card">
      <div className="prop-card__img-wrap">
        <Image
          src={image}
          alt={unit.name}
          fill
          className="prop-card__img"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="prop-card__overlay" aria-hidden="true" />
        <span className={`prop-card__category prop-card__category--${complex.category}`}>
          {complex.name}
        </span>
      </div>

      <div className="prop-card__body">
        <h3 className="prop-card__name">{unit.name}</h3>
        <p className="prop-card__tagline" style={{ display: 'flex', gap: '1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <BedDouble size={13} /> {unit.bedrooms} bed
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Users size={13} /> Sleeps {unit.sleeps}
          </span>
        </p>
        <div className="prop-card__meta">
          <div className="prop-card__price">
            From <strong>R{minRate.toLocaleString()}</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--mid-grey)' }}> / night</span>
          </div>
          <span className="prop-card__arrow">
            View <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── FilterBarDropdown ────────────────────────────────────────────────────────

interface DropdownProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
}

function FilterBarDropdown({ label, options, value, open, onToggle, onSelect }: DropdownProps) {
  const selected = options.find((o) => o.value === value);
  const displayLabel = selected && selected.value !== '' ? selected.label : label;

  return (
    <div className="fbd">
      <button
        type="button"
        className={`fbd__toggle${open ? ' fbd__toggle--active' : ''}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{displayLabel}</span>
        <ChevronDown size={14} style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <div className="fbd__panel" role="listbox">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              className={`fbd__option${opt.value === value ? ' fbd__option--selected' : ''}`}
              onClick={() => onSelect(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── PropertiesContent ────────────────────────────────────────────────────────

function PropertiesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read URL params
  const typeParam     = searchParams.get('type')     ?? '';
  const minPriceParam = searchParams.get('minPrice') ?? '';
  const maxPriceParam = searchParams.get('maxPrice') ?? '';
  const guestsParam   = searchParams.get('guests')   ?? '';
  const amenitiesParam = searchParams.get('amenities') ?? '';

  const activeAmenities: AmenityKey[] = amenitiesParam
    ? (amenitiesParam.split(',').filter((k) => k in AMENITIES) as AmenityKey[])
    : [];

  // Dropdown open state — null = all closed, string = which one is open
  const [openPanel, setOpenPanel] = useState<'type' | 'minPrice' | 'maxPrice' | 'guests' | 'filters' | null>(null);

  // Close on outside click
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function toggle(panel: typeof openPanel) {
    setOpenPanel((prev) => (prev === panel ? null : panel));
  }

  // Update URL helpers
  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/properties?${params.toString()}`, { scroll: false });
    setOpenPanel(null);
  }

  function toggleAmenity(key: AmenityKey) {
    const next = activeAmenities.includes(key)
      ? activeAmenities.filter((a) => a !== key)
      : [...activeAmenities, key];
    const params = new URLSearchParams(searchParams.toString());
    if (next.length === 0) {
      params.delete('amenities');
    } else {
      params.set('amenities', next.join(','));
    }
    router.push(`/properties?${params.toString()}`, { scroll: false });
  }

  // ── Filter logic ─────────────────────────────────────────────────────────

  const minPrice = minPriceParam ? parseInt(minPriceParam, 10) : null;
  const maxPrice = maxPriceParam ? parseInt(maxPriceParam, 10) : null;
  const guests   = guestsParam   ? parseInt(guestsParam, 10)   : null;

  let filteredComplexes = typeParam
    ? complexes.filter((c) => c.category === (typeParam as ComplexCategory))
    : complexes;

  // Price filter — complex must have at least one unit within range
  if (minPrice !== null || maxPrice !== null) {
    filteredComplexes = filteredComplexes.filter((c) =>
      c.units.some((u) => {
        const rate = unitMinRate(u);
        if (minPrice !== null && rate < minPrice) return false;
        if (maxPrice !== null && rate > maxPrice) return false;
        return true;
      })
    );
  }

  // Guests filter — exact match (8 means 8+)
  if (guests !== null) {
    filteredComplexes = filteredComplexes.filter((c) =>
      c.units.some((u) => guests === 8 ? u.sleeps >= 8 : u.sleeps === guests)
    );
  }

  // Amenities filter — complex must satisfy each selected amenity
  if (activeAmenities.length > 0) {
    filteredComplexes = filteredComplexes.filter((c) =>
      activeAmenities.every(
        (a) =>
          c.complexAmenities.includes(a) ||
          c.units.some((u) => u.amenities.includes(a))
      )
    );
  }

  const sortedComplexes = [...filteredComplexes].sort(
    (a, b) => a.name.localeCompare(b.name)
  );

  // Show unit-level cards when price or guests filter active (so only matching units appear)
  const showUnitCards = guests !== null || minPrice !== null || maxPrice !== null;

  const unitResults: { complex: Complex; unit: Unit }[] = showUnitCards
    ? filteredComplexes.flatMap((c) =>
        c.units
          .filter((u) => {
            if (guests !== null && (guests === 8 ? u.sleeps < 8 : u.sleeps !== guests)) return false;
            const rate = unitMinRate(u);
            if (minPrice !== null && rate < minPrice) return false;
            if (maxPrice !== null && rate > maxPrice) return false;
            if (
              activeAmenities.length > 0 &&
              !activeAmenities.every(
                (a) =>
                  c.complexAmenities.includes(a) ||
                  u.amenities.includes(a)
              )
            ) return false;
            return true;
          })
          .map((u) => ({ complex: c, unit: u }))
      )
    : [];

  const isEmpty = showUnitCards ? unitResults.length === 0 : sortedComplexes.length === 0;
  const resultCount = showUnitCards ? unitResults.length : sortedComplexes.length;

  const filtersActive = activeAmenities.length > 0;
  const activeFilterCount =
    (typeParam ? 1 : 0) +
    (minPriceParam ? 1 : 0) +
    (maxPriceParam ? 1 : 0) +
    (guestsParam ? 1 : 0) +
    activeAmenities.length;

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <main>
      {/* Filter bar */}
      <div
        style={{
          paddingTop: 'calc(var(--nav-h, 104px) + 0.5rem)',
          paddingBottom: '0.5rem',
          background: 'var(--ocean-deep)',
        }}
      >
        <div className="container">
          <div className="filter-bar-v2" ref={barRef}>
            {/* Type */}
            <FilterBarDropdown
              label="Type"
              options={TYPE_OPTIONS}
              value={typeParam}
              open={openPanel === 'type'}
              onToggle={() => toggle('type')}
              onSelect={(v) => setParam('type', v)}
            />

            {/* Min Price */}
            <FilterBarDropdown
              label="Min Price"
              options={MIN_PRICE_OPTIONS}
              value={minPriceParam}
              open={openPanel === 'minPrice'}
              onToggle={() => toggle('minPrice')}
              onSelect={(v) => setParam('minPrice', v)}
            />

            {/* Max Price */}
            <FilterBarDropdown
              label="Max Price"
              options={MAX_PRICE_OPTIONS}
              value={maxPriceParam}
              open={openPanel === 'maxPrice'}
              onToggle={() => toggle('maxPrice')}
              onSelect={(v) => setParam('maxPrice', v)}
            />

            {/* Guests */}
            <FilterBarDropdown
              label="Guests"
              options={GUEST_OPTIONS}
              value={guestsParam}
              open={openPanel === 'guests'}
              onToggle={() => toggle('guests')}
              onSelect={(v) => setParam('guests', v)}
            />

            {/* Filters button */}
            <button
              type="button"
              className={`fbd__filters-btn${openPanel === 'filters' ? ' fbd__toggle--active' : ''}${filtersActive ? ' fbd__filters-btn--has-active' : ''}`}
              onClick={() => toggle('filters')}
              aria-expanded={openPanel === 'filters'}
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeAmenities.length > 0 && (
                <span className="fbd__filters-count">{activeAmenities.length}</span>
              )}
            </button>

            {/* Amenities panel */}
            {openPanel === 'filters' && (
              <div className="filter-panel">
                <div className="filter-panel__grid">
                  {ALL_AMENITY_KEYS.map((key) => {
                    const def = AMENITIES[key];
                    const checked = activeAmenities.includes(key);
                    return (
                      <label key={key} className={`filter-panel__amenity${checked ? ' filter-panel__amenity--checked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAmenity(key)}
                          style={{ accentColor: 'var(--ocean)' }}
                        />
                        {def.label}
                      </label>
                    );
                  })}
                </div>
                {activeAmenities.length > 0 && (
                  <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="filter-chip is-active"
                      style={{ fontSize: '0.75rem' }}
                      onClick={() => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.delete('amenities');
                        router.push(`/properties?${params.toString()}`, { scroll: false });
                      }}
                    >
                      Clear amenities
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <section style={{ paddingTop: '0' }}>
        <div className="container">
          {activeFilterCount > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1.5rem', paddingBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--mid-grey)' }}>
                {resultCount} result{resultCount !== 1 ? 's' : ''}
              </span>
              <button
                type="button"
                className="filter-chip"
                style={{ fontSize: '0.72rem' }}
                onClick={() => router.push('/properties', { scroll: false })}
              >
                Clear all filters
              </button>
            </div>
          )}

          <div className="properties-grid">
            {showUnitCards
              ? unitResults.map(({ complex, unit }) => (
                  <UnitCard key={unit.id} complex={complex} unit={unit} />
                ))
              : sortedComplexes.map((complex) => (
                  <PropertyCard key={complex.id} complex={complex} />
                ))}
          </div>

          {isEmpty && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--mid-grey)' }}>
              <p className="body-lg">No properties found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Secure payments */}
      <div className="secure-payments">
        <div className="container--narrow">
          <p className="secure-payments__label">Secure Payments Accepted</p>
          <Image
            src="/payment.png"
            alt="Accepted payments: PayGate, Visa, Mastercard, Verified by Visa, MasterCard SecureCode"
            width={520}
            height={72}
            className="secure-payments__img"
          />
        </div>
      </div>
    </main>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense>
      <PropertiesContent />
    </Suspense>
  );
}
