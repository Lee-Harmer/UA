import type { Metadata } from 'next';
import { Gloock, Jost } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { GlobalInit } from '@/components/GlobalInit';

const gloock = Gloock({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gloock',
});

const jost = Jost({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

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
    <html lang="en-ZA" className={`${gloock.variable} ${jost.variable}`}>
      <body>
        <GlobalInit />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
