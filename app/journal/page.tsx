import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/journal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Umhlanga Journal - Guides, Tips & Stories | Umhlanga Accommodations',
  description: 'Travel guides, local tips, dining recommendations, and stories from the Umhlanga coast - curated by Umhlanga Accommodations since 1988.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <main>
      {/* Page hero */}
      <div className="journal-hero">
        <div className="container journal-hero__inner">
          <span className="eyebrow reveal" style={{ color: 'var(--gold-light)' }}>Est. 1988</span>
          <h1 className="display-xl reveal" style={{ '--i': 1, color: 'var(--white)' } as React.CSSProperties}>
            The Umhlanga<br /><em>Journal</em>
          </h1>
          <p className="body-lg reveal" style={{ '--i': 2, color: 'rgba(255,255,255,0.65)', maxWidth: '36rem' } as React.CSSProperties}>
            Guides, stories, and local knowledge from the people who know Umhlanga best.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <section className="journal-featured">
        <div className="container">
          <Link href={`/journal/${featured.slug}`} className="journal-featured__card journal-featured__card--no-img reveal">
            <div className="journal-featured__body">
              <div className="journal-featured__meta">
                <span className="journal-category">{featured.category}</span>
                <span className="journal-dot" aria-hidden="true" />
                <span className="journal-date">{formatDate(featured.publishedAt)}</span>
                <span className="journal-dot" aria-hidden="true" />
                <span className="journal-date">{featured.readingTime} min read</span>
              </div>
              <h2 className="journal-featured__title">{featured.title}</h2>
              <p className="journal-featured__excerpt">{featured.excerpt}</p>
              <span className="journal-read-more">
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="section" style={{ background: 'var(--warm-white)', paddingTop: '2rem' }}>
        <div className="container">
          <div className="journal-grid">
            {rest.map((article, i) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="journal-card journal-card--no-img reveal"
                style={{ '--i': i + 1 } as React.CSSProperties}
              >
                <div className="journal-card__body">
                  <div className="journal-card__meta">
                    <span className="journal-category">{article.category}</span>
                    <span className="journal-dot" aria-hidden="true" />
                    <span className="journal-date">{article.readingTime} min read</span>
                  </div>
                  <h3 className="journal-card__title">{article.title}</h3>
                  <p className="journal-card__excerpt">{article.excerpt}</p>
                  <span className="journal-read-more">
                    Read article <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
