'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface UnitGalleryProps {
  images: string[];
  name: string;
}

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

  // Show first image large, next 4 in a grid, then "+ N more" thumbnail
  const preview = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <>
      {/* Gallery grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '0.5rem', marginBottom: '2.5rem', borderRadius: '4px', overflow: 'hidden' }}>
        {/* Hero image */}
        <div
          style={{ gridColumn: '1', gridRow: '1 / 3', position: 'relative', aspectRatio: '4/3', cursor: 'pointer' }}
          onClick={() => open(0)}
        >
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
        {preview.slice(1).map((src, i) => (
          <div
            key={src}
            style={{ position: 'relative', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden' }}
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
            {/* "Show all" overlay on last thumbnail */}
            {i === 3 && remaining > 0 && (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(10,24,40,0.62)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '0.3rem',
              }}>
                <span style={{ font: '600 1.6rem/1 var(--font-display)', color: 'var(--white)' }}>+{remaining}</span>
                <span style={{ font: '500 0.68rem/1 var(--font-body)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>more photos</span>
              </div>
            )}
          </div>
        ))}
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
          {/* Close */}
          <button
            onClick={close}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', zIndex: 1 }}
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>

          {/* Counter */}
          <span style={{ position: 'absolute', top: '1.75rem', left: '50%', transform: 'translateX(-50%)', font: '400 0.8rem/1 var(--font-body)', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>
            {lightboxIndex + 1} / {images.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{ position: 'absolute', left: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--white)' }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
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

          {/* Next */}
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
