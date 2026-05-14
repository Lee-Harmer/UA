import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedComplexes } from '@/lib/properties';
import { PropertyCard } from '@/components/PropertyCard';

export function FeaturedProperties() {
  const featured = getFeaturedComplexes();

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__header">
          <div className="reveal">
            <span className="eyebrow">Featured Properties</span>
            <h2 className="display-lg">Handpicked<br /><em>favourites</em></h2>
          </div>
          <Link href="/properties" className="btn btn--outline reveal" style={{ '--i': 1 } as React.CSSProperties}>
            View All Properties <ArrowRight size={14} />
          </Link>
        </div>

        <div className="featured__grid">
          {featured.map((complex, i) => (
            <div
              key={complex.id}
              className="reveal"
              style={{ '--i': i + 1 } as React.CSSProperties}
            >
              <PropertyCard complex={complex} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
