'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove('nav-open');
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.classList.toggle('nav-open', next);
  };

  const active = (href: string) =>
    href === '/'
      ? pathname === '/'
        ? 'is-active'
        : ''
      : pathname.startsWith(href)
      ? 'is-active'
      : '';

  return (
    <header className="site-nav site-nav--solid" id="site-nav">
      <div className="container site-nav__inner">
        <Link href="/" className="site-nav__logo-link" aria-label="Umhlanga Accommodations - home">
          <Image
            src="/logo.png"
            alt="Umhlanga Accommodation - Penny Underwood"
            width={200}
            height={56}
            className="site-nav__logo-img"
            priority
          />
        </Link>

        <nav className="site-nav__links" aria-label="Main navigation">
          <Link href="/" className={active('/')}>Home</Link>
          <Link href="/properties" className={active('/properties')}>Properties</Link>
          <Link href="/things-to-do" className={active('/things-to-do')}>Things To Do</Link>
          <Link href="/about" className={active('/about')}>About</Link>
          <Link href="/journal" className={active('/journal')}>Journal</Link>
          <Link href="/contact" className={`btn btn--gold btn--nav ${active('/contact')}`}>
            Enquire Now
          </Link>
        </nav>

        <button
          className={`site-nav__hamburger${menuOpen ? ' is-active' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`site-nav__drawer${menuOpen ? ' is-open' : ''}`}
        id="mobile-drawer"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/things-to-do">Things To Do</Link>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact" className="btn btn--gold">Enquire Now</Link>
        </nav>
      </div>
    </header>
  );
}
