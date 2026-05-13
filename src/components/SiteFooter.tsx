import Link from 'next/link';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#lessons">Lessons</Link>
          <Link href="/#scenarios">Scenarios</Link>
          <Link href="/#playground">Playground</Link>
          <Link href="/support">Support</Link>
        </div>
        <p className="footer-copy">
          AAD lab © {year} David Haygarth. All rights reserved.
          <br />
          CYPRES and CYPRES&nbsp;2 are trademarks of Airtec GmbH &amp; Co. KG
          Safety Systems. AAD lab is not affiliated with, endorsed by, or
          developed by Airtec.
        </p>
        <p className="footer-sign-off">Blue skies.</p>
      </div>
    </footer>
  );
}
