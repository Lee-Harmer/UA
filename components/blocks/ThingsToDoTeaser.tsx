import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { attractions } from '@/lib/things-to-do';

export function ThingsToDoTeaser() {
  const featured = attractions.filter((a) => a.featured).slice(0, 4);

  return (
    <section className="things-teaser">
      <div className="container">
        <div className="things-teaser__header">
          <div className="reveal">
            <span className="eyebrow">Beyond the Beach</span>
            <h2 className="display-lg">Things to do<br />in <em>Umhlanga</em></h2>
          </div>
          <Link href="/things-to-do" className="btn btn--outline reveal" style={{ '--i': 1 } as React.CSSProperties}>
            Explore More <ArrowRight size={14} />
          </Link>
        </div>

        <div className="things-grid">
          {featured.map((attraction, i) => (
            <Link
              key={attraction.id}
              href="/things-to-do"
              className={`thing-card reveal`}
              style={{ '--i': i + 1 } as React.CSSProperties}
            >
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                className="thing-card__img"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="thing-card__overlay" aria-hidden="true" />
              <div className="thing-card__content">
                <span className="thing-card__category">{attraction.category}</span>
                <p className="thing-card__name">{attraction.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
