import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { GlobalInit } from '@/components/GlobalInit';

export const metadata: Metadata = {
  title: 'Umhlanga Accommodations - Holiday Rentals Since 1988',
  description:
    'Premium self-catering holiday accommodation in Umhlanga Rocks, KwaZulu-Natal. 70+ units across 19 complexes. Personal service since 1988. Call +27 31 561 2012.',
  keywords: 'Umhlanga accommodation, holiday rentals, self catering, KwaZulu-Natal, beach apartments, Umhlanga Rocks',
  openGraph: {
    title: 'Umhlanga Accommodations - Holiday Rentals Since 1988',
    description: 'Premium self-catering holiday apartments in Umhlanga Rocks. Personal service since 1988.',
    type: 'website',
    locale: 'en_ZA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloock:ital@0;1&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalInit />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
