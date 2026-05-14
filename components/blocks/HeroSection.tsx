'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="hero" ref={ref}>
      {/* Background */}
      <div className="hero__bg">
        <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[115%]">
          <Image
            src="/images/hero/beach-lighthouse.jpg"
            alt="Umhlanga Beach with the iconic lighthouse"
            fill
            priority
            quality={90}
            className="hero__bg-img"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        </motion.div>
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="container hero__content">
        <span className="eyebrow hero__eyebrow">
          Umhlanga Rocks, KwaZulu-Natal · Est. 1988
        </span>

        <h1 className="display-xl hero__headline">
          Escape to<br /><em>Umhlanga</em>
        </h1>

        <p className="body-lg hero__sub">
          Self-catering holiday apartments on one of South Africa&apos;s
          most beautiful coastlines. Personally managed since 1988.
        </p>

        <div className="hero__ctas">
          <Link href="/properties" className="btn btn--gold btn--lg">
            Browse Properties
          </Link>
          <a href="tel:+27315612012" className="btn btn--ghost btn--lg">
            Call Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
