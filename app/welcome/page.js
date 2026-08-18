import Link from 'next/link';
import { LINKS } from '../../lib/links';

export const metadata = {
  title: "You're In",
  robots: { index: false }, // landing page for Kit confirmations — not for search
};

export default function Welcome() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>You&rsquo;re in. Thank you!</h1>
          <p className="lede">
            Your email is confirmed. We&rsquo;ll keep you posted on new
            printings and news from the Truth Encounter team. A few emails a
            year, nothing more.
          </p>
        </div>
      </div>
      <div className="prose">
        <div className="container">
          <h2>While you&rsquo;re here</h2>
          <p>
            If you haven&rsquo;t read the book yet, the three chapters on
            salvation, Tony&rsquo;s own story of leaving the priesthood after
            meeting Christ in the Scriptures, are free:{' '}
            <a href={LINKS.gumroadFreeChapters}>download them here</a> (use code{' '}
            <strong>romans623</strong> at checkout to bring the price to $0).
          </p>
          <p>
            Ready for the whole book? It&rsquo;s available in{' '}
            <a href={LINKS.amazonPaperback}>paperback</a>,{' '}
            <a href={LINKS.amazonKindle}>Kindle</a>, and{' '}
            <a href={LINKS.gumroadPdf}>PDF</a>.
          </p>
          <p>
            Or start with the heart of this site:{' '}
            <Link href="/eulogy">
              &ldquo;A Letter to You, Daddy&rdquo;, Marie&rsquo;s tribute to
              her father
            </Link>
            .
          </p>
          <p>
            <Link href="/">← Back to the home page</Link>
          </p>
        </div>
      </div>
    </>
  );
}
