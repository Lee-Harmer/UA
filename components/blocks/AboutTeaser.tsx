import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section className="about-teaser">
      <div className="container">
        <div className="about-teaser__inner">
          {/* Content */}
          <div>
            <p className="about-teaser__year">1988</p>
            <div className="about-teaser__content">
              <span className="eyebrow about-teaser__eyebrow reveal">Our Story</span>
              <h2 className="display-lg about-teaser__headline reveal" style={{ '--i': 1 } as React.CSSProperties}>
                Serving Umhlanga<br />for over <em>37 years</em>
              </h2>
              <p className="body-lg about-teaser__body reveal" style={{ '--i': 2 } as React.CSSProperties}>
                Founded in June 1988 by Penny Underwood with a single apartment in Bronze Bay,
                Umhlanga Accommodations has grown into one of the area&apos;s most trusted
                holiday rental specialists. Our longest-serving team member has been with us
                since day one - that kind of continuity creates genuine care for every guest.
              </p>
              <Link href="/about" className="btn btn--ocean reveal" style={{ '--i': 3 } as React.CSSProperties}>
                Read our story <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="about-teaser__img-wrap reveal reveal--right" style={{ '--i': 1 } as React.CSSProperties}>
            <Image
              src="/images/hero/lighthouse-pool.jpg"
              alt="Pool overlooking the Umhlanga lighthouse"
              fill
              className="about-teaser__img"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="about-teaser__img-caption">
              <p>Umhlanga Rocks - our home since 1988.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
