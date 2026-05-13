import Link from 'next/link';

/** Site footer: copyright + utility links. */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} David Haygarth. Not affiliated with Airtec GmbH &amp; Co. KG
          Safety Systems.
        </p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}
