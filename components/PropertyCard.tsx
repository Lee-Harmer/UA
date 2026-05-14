import Link from 'next/link';
import Image from 'next/image';
import { Complex, getMinRate } from '@/lib/properties';
import { ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  complex: Complex;
}

const categoryLabel: Record<string, string> = {
  beachfront: 'Beachfront',
  village: 'Village',
  resort: 'Resort',
  luxury: 'Luxury',
  selfcatering: 'Self-Catering',
};

export function PropertyCard({ complex }: PropertyCardProps) {
  const minRate = getMinRate(complex);
  const unitCount = complex.units.length;

  return (
    <Link href={`/properties/${complex.slug}`} className="prop-card">
      <div className="prop-card__img-wrap">
        <Image
          src={complex.coverImage}
          alt={complex.name}
          fill
          className="prop-card__img"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="prop-card__overlay" aria-hidden="true" />

        <span className={`prop-card__category prop-card__category--${complex.category}`}>
          {categoryLabel[complex.category]}
        </span>

        <span className="prop-card__units-badge">
          {unitCount} {unitCount === 1 ? 'unit' : 'units'} available
        </span>
      </div>

      <div className="prop-card__body">
        <h3 className="prop-card__name">{complex.name}</h3>
        <p className="prop-card__tagline">{complex.tagline}</p>

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
