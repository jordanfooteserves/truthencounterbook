import Link from 'next/link';

export const metadata = {
  title: "Ron Foote's Eyewitness Account",
  description:
    "The full written account of Ron Foote, who was present during Dr. Anthony Pezzotta's final weeks, responding to the claim that Tony received Catholic last rites.",
};

export default function RonFoote() {
  return (
    <>
      <div className="page-head story-head">
        <div className="container">
          <p className="eyebrow">An eyewitness account</p>
          <h1>
            A letter from <em>Ron Foote</em>
          </h1>
        </div>
      </div>

      <div className="prose">
        <div className="container">
          <p className="lead">
            Ron Foote, Marie&rsquo;s father-in-law, knew and loved Tony
            Pezzotta, and was present during his final weeks. On April 13, 2015,
            the day the family first learned of the article claiming Tony had
            received Catholic &ldquo;last rites,&rdquo; Ron wrote the following
            response. It is presented here as he wrote it, lightly edited for
            spelling.
          </p>

          <ol className="ron-points">
            <li>
              Tony had lost his ability to communicate a request{' '}
              <strong>long</strong> before his last days. He could not have
              requested &ldquo;last rites&rdquo; if he had wanted to.
            </li>
            <li>
              Anyone can come into a sleeping, practically comatose man&rsquo;s
              room, put oil on his head, and pray over him without the
              &ldquo;recipient of the sacrament&rdquo; having any awareness of
              the act.
            </li>
            <li>
              A zealous devotee could have &ldquo;last rites&rdquo; administered
              to every patient and resident of a caregiving facility. This could
              be done with total sincerity and honorable intentions, without
              the knowledge or permission of the residents.
            </li>
            <li>
              Tony, in my understanding, didn&rsquo;t have dementia; he had an
              inability to express what his more-than-capable brain was
              thinking. The real Tony Pezzotta would never consent to any ritual
              or sacrament of the Catholic church, even though the
              non-communicative Tony Pezzotta may not have been capable of
              offering his expressed and unconditional refusal of such a rite.
              The &ldquo;last rites&rdquo; may have been done <em>to</em> him,
              but he did not <em>receive</em> them!
            </li>
            <li>
              It is easy to win an argument with a dead person. The best way to
              win a debate is to make sure the opposing view cannot be expressed
              due to the death of its proponent. I believe Tony would have
              debated anyone, anytime, over the tenets of the Catholic faith or{' '}
              <em>Truth Encounter</em>, and there were quite a few years in
              which to challenge him. Claiming victory only after a man can no
              longer answer is like boasting you would have won the
              &ldquo;Thrilla in Manila&rdquo; after Ali could no longer answer
              the bell. Talk, after the fact, is cheaper than just talk.
            </li>
            <li>
              Dr. Anthony Pezzotta rejected the un-Biblical teachings of the
              Catholic church, committed his life and ministry to Christ Jesus,
              and served God the rest of his days as a devoted disciple and
              pastor in the Conservative Baptist Convention in the Philippines,
              southern California, the United States, and the world.
            </li>
            <li>
              Dr. Anthony Pezzotta clearly, unequivocally, and unambiguously
              stated his understanding of the wide chasm between the teachings
              of the Catholic church and the Truth of Biblical orthodoxy in{' '}
              <em>Truth Encounter</em>, which he did not, nor could he, recant.
            </li>
          </ol>

          <p className="signoff">
            <span className="fam">— Ron Foote, April 13, 2015</span>
          </p>

          <p>
            <Link href="/the-story">
              ← Back to the family&rsquo;s statement
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
