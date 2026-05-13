'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LABELS, localeFromPath, routeFor } from '@/i18n/messages';

export default function SiteFooter() {
  const pathname = usePathname() ?? '/';
  const locale = localeFromPath(pathname);
  const labels = NAV_LABELS[locale];
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <Link href={routeFor(locale, '/')}>{labels.home}</Link>
          <Link href={`${routeFor(locale, '/')}#lessons`}>
            {labels.lessons}
          </Link>
          <Link href={`${routeFor(locale, '/')}#scenarios`}>
            {labels.scenarios}
          </Link>
          <Link href={`${routeFor(locale, '/')}#playground`}>
            {labels.playground}
          </Link>
          <Link href={routeFor(locale, '/support')}>{labels.support}</Link>
        </div>
        <p className="footer-copy">
          AAD lab © {year} David Haygarth. {labels.rights}
          <br />
          {labels.affiliation}
        </p>
        <p className="footer-sign-off">{labels.signOff}</p>
      </div>
    </footer>
  );
}
