import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import RevealOnScroll from '@/components/RevealOnScroll';

// Inter for body + section headings — reads as a modern Helvetica,
// full weight range, identical across every platform.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

// Manrope for the wordmark only. Same family feel as Inter, but with
// a touch more confident terminals at heavy weights — gives the
// "AAD lab" mark its own visual identity without clashing with the
// body type.
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-wordmark',
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
    <html
      lang="en"
      data-theme="black"
      className={`${inter.variable} ${manrope.variable}`}
    >
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
