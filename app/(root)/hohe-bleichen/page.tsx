import CTASection from '@/app/(root)/hohe-bleichen/components/CTASection';
import HeroSection from '@/app/(root)/hohe-bleichen/components/HeroSection';
import LocationShowcase from '@/app/(root)/hohe-bleichen/components/LocationShowcase';
import OpeningHours from '@/app/(root)/hohe-bleichen/components/OpeningHours';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cardamom Hohe Bleichen - Progressive Indian Dining | Hamburg by Susko',
  description:
    'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Herzen Hamburgs by Susko. Cardamom Hohe Bleichen verbindet traditionelle Aromen mit moderner Präsentation. Reservieren Sie jetzt!',
  keywords:
    'Cardamom, Hohe Bleichen, Hamburg, indisches Restaurant, progressive indische Küche, elegante Atmosphäre, Tisch reservieren, authentische indische Gerichte, moderne indische Küche, Restaurant Hamburg Innenstadt, susko, susko hohe bleichen, susko hamburg, susko restaurant',
  authors: [{ name: 'Susko', url: 'https://susko.de' }],
  creator: 'Susko',
  publisher: 'Susko - Cardamom Restaurant',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Cardamom Hohe Bleichen - Progressive Indian Dining | Hamburg by Susko',
    description:
      'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Herzen Hamburgs by Susko. Hohe Bleichen 10, 20354 Hamburg. Jetzt Tisch reservieren!',
    type: 'website',
    siteName: 'Susko - Cardamom Restaurant',
    locale: 'de_DE',
    url: 'https://cardamom-hamburg.de/hohe-bleichen',
    images: [
      {
        url: '/home/location.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Restaurant Hohe Bleichen Hamburg - Elegante indische Küche',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardamom Hohe Bleichen - Progressive Indian Dining | Susko',
    description: 'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Herzen Hamburgs by Susko.',
    images: ['/home/location.jpg'],
    creator: '@susko',
    site: '@susko',
  },
  alternates: {
    canonical: '/hohe-bleichen',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function HoheBleichenPage() {
  return (
    <main className="bg-card">
      <HeroSection />
      <LocationShowcase />
      <OpeningHours />
      <CTASection />
    </main>
  );
}
