import { HeroSection } from '@/components/blocks/HeroSection';
import { TrustBar } from '@/components/blocks/TrustBar';
import { WhyUmhlanga } from '@/components/blocks/WhyUmhlanga';
import { FeaturedProperties } from '@/components/blocks/FeaturedProperties';
import { AmenitiesHighlight } from '@/components/blocks/AmenitiesHighlight';
import { ThingsToDoTeaser } from '@/components/blocks/ThingsToDoTeaser';
import { AboutTeaser } from '@/components/blocks/AboutTeaser';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProperties />
      <AmenitiesHighlight />
      <AboutTeaser />
      <WhyUmhlanga />
      <ThingsToDoTeaser />

      {/* CTA Strip */}
      <section className="cta-strip">
        <div className="container--narrow">
          <span className="eyebrow cta-strip__eyebrow">Ready to book?</span>
          <h2 className="display-lg cta-strip__headline">
            Find your perfect<br /><em>Umhlanga escape</em>
          </h2>
          <p className="body-lg cta-strip__sub">
            Browse 70+ holiday units across 19 complexes - from beachfront luxury
            to village charm. All personally managed.
          </p>
          <div className="cta-strip__actions">
            <Link href="/properties" className="btn btn--gold btn--lg">
              Browse All Properties
            </Link>
            <a href="tel:+27315612012" className="btn btn--ghost btn--lg">
              Call +27 31 561 2012
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
