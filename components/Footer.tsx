import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          {/* Brand */}
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo-wrap" aria-label="Umhlanga Accommodations - home">
              <Image
                src="/logo.png"
                alt="Umhlanga Accommodation - Penny Underwood"
                width={180}
                height={50}
                style={{ width: 'auto', height: '48px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p>
              Trusted holiday accommodation specialists in Umhlanga Rocks since 1988.
              Personal service, well-managed properties, honest advice.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a
                href="https://www.facebook.com/umhlangaaccommodation.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <p className="site-footer__heading">Properties</p>
            <ul className="site-footer__links">
              <li><Link href="/properties">All Properties</Link></li>
              <li><Link href="/properties/bermudas">Bermudas</Link></li>
              <li><Link href="/properties/sea-lodge">Sea Lodge</Link></li>
              <li><Link href="/properties/the-shades">The Shades</Link></li>
              <li><Link href="/properties/pearls">Pearls</Link></li>
              <li><Link href="/properties/beacon-rock">Beacon Rock</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="site-footer__heading">Explore</p>
            <ul className="site-footer__links">
              <li><Link href="/things-to-do">Things To Do</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="site-footer__heading">Contact</p>
            <ul className="site-footer__links">
              <li>
                <a href="tel:+27315612012" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={13} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                  +27 31 561 2012
                </a>
              </li>
              <li>
                <a href="mailto:info@umhlangaaccommodation.co.za" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={13} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                  Email us
                </a>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={13} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0, marginTop: '0.15rem' }} />
                  Shop 14, Chartwell Centre<br />15 Chartwell Drive<br />Umhlanga Rocks
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} Umhlanga Accommodations. Est. 1988.
          </p>
          <div className="site-footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
