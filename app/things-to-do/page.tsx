import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Ticket, Star, ArrowRight } from 'lucide-react';
import { attractions, CATEGORIES } from '@/lib/things-to-do';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Things To Do in Umhlanga | Umhlanga Accommodations',
  description:
    'Discover the best of Umhlanga and surrounds - beaches, whale watching, world-class shopping, golf, deep sea fishing, and unforgettable day trips. Researched and curated by Umhlanga Accommodations.',
};

export default function ThingsToDoPage() {
  return (
    <main>
      {/* Hero */}
      <div className="things-page__hero">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--gold-light)' }}>Umhlanga &amp; Surrounds</span>
          <h1 className="display-xl" style={{ color: 'var(--white)', marginTop: '0.75rem', marginBottom: '1rem' }}>
            Things To Do
          </h1>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '48ch' }}>
            From Blue Flag beaches and coastal nature reserves to world-class golf,
            whale watching, and Big Five day trips - Umhlanga is a destination in itself.
          </p>
          {/* Category jump links */}
          <div className="things-page__jumps">
            {CATEGORIES.map((cat) => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`} className="things-page__jump-link">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections by category */}
      {CATEGORIES.map((cat, catIdx) => {
        const items = attractions.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        const sectionId = cat.toLowerCase().replace(/\s+/g, '-').replace('&', '');
        return (
          <section
            key={cat}
            id={sectionId}
            className="section things-page__section"
            style={{ background: catIdx % 2 === 1 ? 'var(--sand)' : 'var(--warm-white)' }}
          >
            <div className="container">
              <div className="reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                <span className="eyebrow">{cat}</span>
                <h2 className="display-md" style={{ color: 'var(--ocean-deep)' }}>{cat}</h2>
              </div>

              <div className="things-cards">
                {items.map((attraction, i) => (
                  <article
                    key={attraction.id}
                    className="things-card reveal"
                    style={{ '--i': i + 1 } as React.CSSProperties}
                  >
                    {/* Image */}
                    <div className="things-card__img-wrap">
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="things-card__img"
                        priority={i === 0 && catIdx === 0}
                      />
                    </div>

                    {/* Body */}
                    <div className="things-card__body">
                      <span className="things-card__category">{attraction.category}</span>
                      <h3 className="things-card__name">{attraction.name}</h3>

                      {/* Meta row */}
                      <div className="things-card__meta">
                        <span className="things-card__meta-item">
                          <MapPin size={12} strokeWidth={1.5} />
                          {attraction.distance} · {attraction.driveTime}
                        </span>
                        {attraction.entryFee && (
                          <span className="things-card__meta-item">
                            <Ticket size={12} strokeWidth={1.5} />
                            {attraction.entryFee}
                          </span>
                        )}
                        {attraction.openingHours && (
                          <span className="things-card__meta-item">
                            <Clock size={12} strokeWidth={1.5} />
                            {attraction.openingHours}
                          </span>
                        )}
                      </div>

                      <p className="things-card__desc">{attraction.description}</p>

                      {/* Highlight */}
                      <div className="things-card__highlight">
                        <Star size={12} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                        <span>{attraction.highlight}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <div className="cta-strip">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <span className="eyebrow cta-strip__eyebrow">Ready to visit?</span>
          <h2 className="display-lg cta-strip__headline">
            Book your stay<br />in <em>Umhlanga</em>
          </h2>
          <div className="cta-strip__actions">
            <Link href="/properties" className="btn btn--gold btn--lg">
              Browse Properties <ArrowRight size={14} />
            </Link>
            <a href="tel:+27315612012" className="btn btn--ghost btn--lg">
              Call +27 31 561 2012
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
