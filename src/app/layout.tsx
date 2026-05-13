import type { Metadata } from 'next';
import './globals.css';
import CosmosBackground from '@/components/CosmosBackground';
import AuroraBackground from '@/components/AuroraBackground';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'AAD lab — CYPRES 2 training simulator',
  description:
    "An AAD training simulator. Learn how to set your AAD on your iPhone or Android — before you're on the flight line.",
  metadataBase: new URL('https://aadlab.github.io'),
  openGraph: {
    title: 'AAD lab — CYPRES 2 training simulator',
    description:
      "An AAD training simulator. Learn how to set your AAD on your iPhone or Android — before you're on the flight line.",
    url: 'https://aadlab.github.io',
    siteName: 'AAD lab',
    type: 'website',
  },
};

// Inline script that runs BEFORE React hydrates, reading the saved
// theme from localStorage and setting data-theme on <html>. Without
// this the first paint always shows the default theme, then flashes
// to the saved one on hydrate — visible mostly on slower devices.
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        {/* Animated backgrounds, behind everything. Order matters:
            Cosmos first (particle trails on the bg-base canvas), then
            Aurora ribbons on top with additive blending. */}
        <CosmosBackground />
        <AuroraBackground />
        {/* Corner-glow gradient sits between the canvases and the
            content — pulls the eye to the colour scheme without
            overpowering the trails/ribbons. */}
        <div className="corner-glow" aria-hidden="true" />
        <div className="page">
          <SiteNav />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
