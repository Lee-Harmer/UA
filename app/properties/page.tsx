'use client';
import { useState } from 'react';
import Image from 'next/image';
import { complexes, ComplexCategory } from '@/lib/properties';
import { PropertyCard } from '@/components/PropertyCard';

type FilterValue = 'all' | ComplexCategory;

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All Properties', value: 'all' },
  { label: 'Beachfront',     value: 'beachfront' },
  { label: 'Village',        value: 'village' },
  { label: 'Resort',         value: 'resort' },
  { label: 'Luxury',         value: 'luxury' },
];

export default function PropertiesPage() {
  const [active, setActive] = useState<FilterValue>('all');

  const filtered = active === 'all'
    ? complexes
    : complexes.filter((c) => c.category === active);

  // Featured first
  const sorted = [...filtered].sort((a, b) =>
    (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <main>
      {/* Page hero */}
      <div className="properties-page__hero">
        <div className="container">
          <span className="eyebrow properties-page__hero-eyebrow">Umhlanga Rocks</span>
          <h1 className="display-xl" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            All Properties
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '48ch' }}>
            {complexes.length} complexes, {complexes.reduce((acc, c) => acc + c.units.length, 0)}+ units
            - personally managed since 1988.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: '3rem' }}>
        <div className="container">
          {/* Filter bar */}
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`filter-chip${active === f.value ? ' is-active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="properties-grid">
            {sorted.map((complex) => (
              <PropertyCard key={complex.id} complex={complex} />
            ))}
          </div>

          {sorted.length === 0 && (
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
