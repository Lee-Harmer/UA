import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Clock } from 'lucide-react';
import { articles, getArticleBySlug, getRelatedArticles } from '@/lib/journal';
import type { JournalSection } from '@/lib/journal';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | The Umhlanga Journal`,
    description: article.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}

function renderSection(section: JournalSection, i: number) {
  switch (section.type) {
    case 'p':
      return <p key={i} className="article-body__p">{section.text}</p>;
    case 'h2':
      return <h2 key={i} className="article-body__h2">{section.text}</h2>;
    case 'h3':
      return <h3 key={i} className="article-body__h3">{section.text}</h3>;
    case 'ul':
      return (
        <ul key={i} className="article-body__ul">
          {section.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    case 'blockquote':
      return (
        <blockquote key={i} className="article-body__blockquote">
          {section.text}
        </blockquote>
      );
    case 'tip':
      return (
        <div key={i} className="article-body__tip">
          <span className="article-body__tip-label">{section.label}</span>
          <p>{section.text}</p>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);

  return (
    <main>
      {/* Hero - text only, no image */}
      <div className="article-hero article-hero--no-img">
        <div className="container article-hero__content">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="article-hero__breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <Link href="/journal">Journal</Link>
            <ChevronRight size={12} />
            <span>{article.category}</span>
          </nav>
          <span className="journal-category article-hero__cat">
            {article.category}
          </span>
          <h1 className="article-hero__title">{article.title}</h1>
          <div className="article-hero__meta">
            <span>{formatDate(article.publishedAt)}</span>
            <span className="journal-dot" aria-hidden="true" />
            <Clock size={13} strokeWidth={1.5} />
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="article-layout">
        <div className="container">
          <div className="article-layout__inner">
            {/* Main content */}
            <article className="article-body">
              <p className="article-body__lead">{article.excerpt}</p>
              {article.body.map((section, i) => renderSection(section, i))}
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="article-sidebar__card">
                <p className="article-sidebar__heading">Plan Your Stay</p>
                <p className="article-sidebar__sub">
                  Browse our hand-picked self-catering apartments across Umhlanga - beachfront, village, resort and more.
                </p>
                <Link href="/properties" className="btn btn--gold" style={{ width: '100%', justifyContent: 'center' }}>
                  View Properties <ArrowRight size={13} />
                </Link>
                <Link href="/contact" className="btn btn--outline" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}>
                  Make an Enquiry
                </Link>
              </div>

              <div className="article-sidebar__card" style={{ marginTop: '1.5rem' }}>
                <p className="article-sidebar__heading">More from the Journal</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                  {related.map((a) => (
                    <Link key={a.slug} href={`/journal/${a.slug}`} className="article-sidebar__related article-sidebar__related--no-img">
                      <div>
                        <span className="article-sidebar__related-cat">{a.category}</span>
                        <p className="article-sidebar__related-title">{a.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--sand)', paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container">
            <div className="reveal" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <span className="eyebrow">Keep reading</span>
              <h2 className="display-md" style={{ color: 'var(--ocean-deep)' }}>More from the Journal</h2>
            </div>
            <div className="journal-grid journal-grid--3">
              {related.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="journal-card journal-card--no-img reveal"
                  style={{ '--i': i + 1 } as React.CSSProperties}
                >
                  <div className="journal-card__body">
                    <div className="journal-card__meta">
                      <span className="journal-category">{a.category}</span>
                      <span className="journal-dot" aria-hidden="true" />
                      <span className="journal-date">{a.readingTime} min read</span>
                    </div>
                    <h3 className="journal-card__title">{a.title}</h3>
                    <p className="journal-card__excerpt">{a.excerpt}</p>
                    <span className="journal-read-more">Read article <ArrowRight size={13} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="cta-strip">
        <div className="container--narrow" style={{ textAlign: 'center' }}>
          <h2 className="display-lg cta-strip__headline">
            Ready to<br /><em>experience Umhlanga?</em>
          </h2>
          <div className="cta-strip__actions">
            <Link href="/properties" className="btn btn--gold btn--lg">
              Browse Properties <ArrowRight size={14} />
            </Link>
            <Link href="/journal" className="btn btn--ghost btn--lg">
              More Journal Articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
