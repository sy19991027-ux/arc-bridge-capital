import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://arcbridge.pages.dev'),
  title: {
    default: 'ARC BRIDGE CAPITAL | Boutique Alternative Assets Advisory',
    template: '%s | ARC BRIDGE CAPITAL'
  },
  description:
    'ARC BRIDGE CAPITAL is a boutique cross-border advisory platform connecting global capital with exceptional alternative assets across Asia and global financial hubs.',
  keywords: [
    'ARC BRIDGE CAPITAL',
    'alternative assets advisory',
    'Web3 advisory Japan',
    'cross-border capital',
    'Tokyo real estate',
    'boutique advisory'
  ],
  openGraph: {
    title: 'ARC BRIDGE CAPITAL',
    description: 'Connecting Global Capital with Exceptional Alternative Assets.',
    url: 'https://arcbridge.pages.dev',
    siteName: 'ARC BRIDGE CAPITAL',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARC BRIDGE CAPITAL',
    description: 'Connecting Global Capital with Exceptional Alternative Assets.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
