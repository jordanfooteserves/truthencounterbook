import './globals.css';
import Link from 'next/link';

export const metadata = {
  metadataBase: new URL('https://www.truthencounterbook.com'),
  title: {
    default: 'Truth Encounter: Catholicism and the Holy Scriptures',
    template: '%s | Truth Encounter',
  },
  description:
    'The story and Bible study of Dr. Anthony Pezzotta, a former Roman Catholic priest. Back in print in paperback, Kindle, and PDF.',
  keywords: [
    'catholic bible study',
    'anthony pezzotta',
    'roman catholic',
    'truth encounter',
    'scripture',
    'catholic beliefs',
  ],
  openGraph: {
    siteName: 'Truth Encounter: Catholicism and the Holy Scriptures',
    type: 'website',
    images: ['/cover.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <span className="brand-truth">TRUTH</span>
              <span className="brand-encounter">ENCOUNTER</span>
            </Link>
            <nav className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/about-the-author">About the Author</Link>
              <Link href="/eulogy">A Letter to You, Daddy</Link>
              <Link href="/the-story">His Final Days</Link>
              <Link href="/share">Spread the Truth</Link>
              <Link href="/#get-the-book" className="nav-cta">Get the Book</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>
              <span className="brand-truth">TRUTH</span>{' '}
              <span className="brand-encounter-light">ENCOUNTER</span> · by Dr.
              Anthony Pezzotta · Published by Charis Press
            </p>
            <p className="footer-contact">
              Questions? <a href="mailto:info@truthencounterbook.com">info@truthencounterbook.com</a>
            </p>
            <p className="footer-fine">
              © {new Date().getFullYear()} The Pezzotta Family. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
