import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import RevealOnScroll from '@/components/RevealOnScroll';

// Space Grotesk drives the wordmark and section headings — geometric,
// modern, with enough personality to feel current without being
// overworked. Variable font, weights 400/600/700 are all used.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#18092a',
};

export const metadata: Metadata = {
  title: 'AAD lab — CYPRES 2 simulator',
  description:
    'Learn to configure your CYPRES 2 on your iPhone or Android. Real button sequences, real-world scenarios, full device playground — offline, ad-free, in six languages.',
  metadataBase: new URL('https://aadlab.github.io'),
  openGraph: {
    title: 'AAD lab — CYPRES 2 simulator',
    description:
      'Learn to configure your CYPRES 2 on your iPhone or Android. Real button sequences, real-world scenarios, full device playground.',
    url: 'https://aadlab.github.io',
    siteName: 'AAD lab',
    type: 'website',
    images: ['/aadlab-icon.png'],
  },
};

// Runs before React hydrates so first paint shows the saved theme,
// not a default-and-flash.
const themeBootstrap = `
(function() {
  try {
    var saved = window.localStorage.getItem('aadlab.theme');
    var theme = saved === 'blue' ? 'blue' : 'black';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black" className={spaceGrotesk.variable}>
      <head>
        <link rel="icon" type="image/png" href="/aadlab-icon.png" />
        <link rel="apple-touch-icon" href="/aadlab-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <RevealOnScroll />
      </body>
    </html>
  );
}
