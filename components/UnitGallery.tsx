'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface UnitGalleryProps {
  images: string[];
  name: string;
}

const overlayStyle: React.CSSProperties = {
  position: 'absolute', inset: 0,
  background: 'rgba(10,24,40,0.62)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexDirection: 'column', gap: '0.3rem',
};

export function UnitGallery({ images, name }: UnitGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setLightboxIndex((i) => (i! < images.length - 1 ? i! + 1 : 0));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  // Desktop: hero + 4 thumbs. Mobile (CSS): hero full-width + 2 thumbs.
  const preview = images.slice(0, 5);
  const desktopRemaining = images.length - 5;   // shown on 4th thumb (desktop)
  const mobileRemaining = images.length - 3;    // shown on 2nd thumb (mobile)

  return (
    <>
      <div className="unit-gallery__grid">
        {/* Hero image */}
        <div className="unit-gallery__main" onClick={() => open(0)}>
          <Image
            src={images[0]}
            alt={`${name} - photo 1`}
            fill
            priority
            style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="gallery-img"
          />
        </div>

        {/* Smaller previews */}
        {preview.slice(1).map((src, i) => {
          // Desktop: show all 4 thumbs; mobile CSS hides thumbs 2 & 3
          const isDesktopOnly = i >= 2;
          return (
            <div
              key={src}
              className={`unit-gallery__thumb${isDesktopOnly ? ' unit-gallery__thumb--desktop-only' : ''}`}
              onClick={() => open(i + 1)}
            >
              <Image
                src={src}
                alt={`${name} - photo ${i + 2}`}
                fill
                style={{ objectFit: 'cover', transition: 'transform 500ms ease' }}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="gallery-img"
              />

              {/* Desktop overlay: on 4th thumb */}
              {i === 3 && desktopRemaining > 0 && (
                <div className="unit-gallery__more--desktop" style={overlayStyle}>
                  <span style={{ font: '600 1.6rem/1 var(--font-display)', color: 'var(--white)' }}>+{desktopRemaining}</span>
                  <span style={{ font: '500 0.68rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>more photos</span>
                </div>
              )}

              {/* Mobile overlay: on 2nd thumb (index 1) */}
              {i === 1 && mobileRemaining > 0 && (
                <div className="unit-gallery__more--mobile" style={overlayStyle}>
                  <span style={{ font: '600 1.4rem/1 var(--font-display)', color: 'var(--white)' }}>+{mobileRemaining}</span>
                  <span style={{ font: '500 0.65rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>more photos</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(10,18,30,0.96)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={close}
          onKeyDown={handleKey}
          tabIndex={0}
          role="dialog"
          aria-label={`Photo ${lightboxIndex + 1} of ${images.length}`}
        >
          <button
            onClick={close}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', zIndex: 1 }}
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>

          <span style={{ position: 'absolute', top: '1.75rem', left: '50%', transform: 'translateX(-50%)', font: '400 0.8rem/1 var(--font-body)', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>
            {lightboxIndex + 1} / {images.length}
          </span>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{ position: 'absolute', left: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--white)' }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            style={{ position: 'relative', width: '90vw', height: '85vh', maxWidth: '1200px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${name} - photo ${lightboxIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="90vw"
              priority
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{ position: 'absolute', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--white)' }}
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <style>{`.gallery-img:hover { transform: scale(1.04); }`}</style>
    </>
  );
}
