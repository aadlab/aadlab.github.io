import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import RevealOnScroll from '@/components/RevealOnScroll';

export const viewport: Viewport = {
  themeColor: '#18092a',
};

export const metadata: Metadata = {
  title: 'AAD lab — CYPRES 2 training simulator',
  description:
    'A faithful CYPRES 2 training simulator for skydivers, riggers, and instructors. Lessons, real-world scenarios, full device playground — offline, ad-free, in six languages.',
  metadataBase: new URL('https://aadlab.github.io'),
  openGraph: {
    title: 'AAD lab — CYPRES 2 training simulator',
    description:
      'A faithful CYPRES 2 training simulator for skydivers, riggers, and instructors. Lessons, real-world scenarios, full device playground.',
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
    <html lang="en" data-theme="black">
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
