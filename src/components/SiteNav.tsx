'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { NAV_LABELS, localeFromPath, routeFor } from '@/i18n/messages';

/**
 * Top nav. Locale is derived from the current pathname so the same
 * component works on every locale's pages — labels and link targets
 * adjust automatically. usePathname runs after hydration; on first
 * paint the labels match whatever locale the build emitted (English
 * by default, until the agent for each /{locale}/page.tsx overrides
 * via the locale prefix in the URL Next.js renders to).
 */
export default function SiteNav() {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPath(pathname);
  const labels = NAV_LABELS[locale];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href={routeFor(locale, '/')} className="nav-brand">
          <img src="/aadlab-icon.png" alt="" />
          <span className="wordmark">
            <span className="wordmark-title">AAD lab</span>
            <span className="wordmark-subtitle">CYPRES 2 simulator</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link
            href={`${routeFor(locale, '/')}#lessons`}
            className="nav-link-hide-mobile"
          >
            {labels.lessons}
          </Link>
          <Link
            href={`${routeFor(locale, '/')}#scenarios`}
            className="nav-link-hide-mobile"
          >
            {labels.scenarios}
          </Link>
          <Link
            href={`${routeFor(locale, '/')}#playground`}
            className="nav-link-hide-mobile"
          >
            {labels.playground}
          </Link>
          <Link href={routeFor(locale, '/support')}>{labels.support}</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
