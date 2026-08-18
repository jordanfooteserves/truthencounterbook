import Link from 'next/link';
import { LINKS, PRICES } from '../lib/links';
import SignupForm from './components/SignupForm';

export default function Home() {
  return (
    <>
      <div className="story-banner">
        <div className="container">
          <strong>A word from the Pezzotta family:</strong> the truth about our
          father&rsquo;s faith and final days.{' '}
          <Link href="/the-story">Read the family&rsquo;s statement →</Link>
        </div>
      </div>

      {/* ---------------- hero ---------------- */}
      <section className="hero" id="get-the-book">
        <div className="container hero-grid">
          <img
            src="/cover.jpg"
            alt="Truth Encounter book cover"
            className="hero-cover"
          />
          <div>
            <span className="kicker">Back in print</span>
            <h1>
              <span className="t">TRUTH</span> ENCOUNTER
            </h1>
            <p className="subtitle">Catholicism and the Holy Scriptures</p>
            <p className="byline">
              by Dr. Anthony Pezzotta, former Roman Catholic priest
            </p>
            <div className="buy-row">
              <a className="btn btn-red" href={LINKS.amazonPaperback}>
                Paperback · {PRICES.paperback}
                <small>on Amazon</small>
              </a>
              <a className="btn btn-dark" href={LINKS.amazonKindle}>
                Kindle · {PRICES.kindle}
                <small>on Amazon</small>
              </a>
              <a className="btn btn-outline" href={LINKS.gumroadPdf}>
                PDF · {PRICES.pdf}
                <small>instant download</small>
              </a>
            </div>
            <p className="free-line">
              Not sure yet?{' '}
              <a href={LINKS.gumroadFreeChapters}>
                Read the three chapters on salvation free
              </a>
              . Use code <strong>romans623</strong> at checkout to bring the
              price to $0.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- welcome ---------------- */}
      <section className="section section-white">
        <div className="container">
          <h2>
            Seeking the <span>Truth</span>?
          </h2>
          <p>
            If you are reading this, you might be looking for a resource to help
            a Catholic, whether yourself or someone you love, understand what
            the Bible says about the teachings of Catholicism. You have found
            it.
          </p>
          <p>
            Dr. Anthony Pezzotta was a devout Roman Catholic priest from Italy:
            fifteen years in Salesian seminaries, ordained in Turin, and Director
            of Catholic schools and seminaries in the Philippines. In 1974, after
            years of comparing what he taught with what the Scriptures say, he
            trusted Christ alone and spent the rest of his life helping others
            have a truth encounter of their own. This book grew out of thousands
            of honest conversations: doctrine by doctrine, history, practice, and
            Scripture, examined by a man who knew Catholicism from within and
            loved Catholics deeply.
          </p>
          <p>
            <Link href="/about-the-author">Read Tony&rsquo;s full story →</Link>
          </p>
        </div>
      </section>

      {/* ---------------- endorsements ---------------- */}
      <section className="section">
        <div className="container">
          <h2>
            About the <span>Book</span>
          </h2>
          <div className="card-grid">
            <div className="endorse">
              <p>
                &ldquo;He examines, as one who knew Catholicism from within, a
                wide range of fundamental Catholic beliefs and practices and
                scrutinizes them in the light of God&rsquo;s Word&hellip; As one
                reads through the book, he will find that the encounter is not
                with the author but with Jesus Christ, the way, the truth, and
                the life (John 14:6).&rdquo;
              </p>
              <div className="who">
                Dr. Agustin B. Vencer, Jr., President, Global Transformation
                Ministries (at the time of writing)
              </div>
            </div>
            <div className="endorse">
              <p>
                &ldquo;Truth Encounter is a must for every Roman Catholic and
                Protestant. Dr. Pezzotta&rsquo;s love for Roman Catholics is
                matched only by his zeal for the truth.&rdquo;
              </p>
              <div className="who">
                The late Fred Magbanua, Jr., Founder and President, Jesus Our
                Life Family Services Foundation
              </div>
            </div>
            <div className="endorse">
              <p>
                &ldquo;Even though he chose to leave the Roman Catholic church,
                he did not dislike nor look down upon Roman Catholics&hellip; It
                was just that he could not continue to teach and practice what
                he could no longer believe.&rdquo;
              </p>
              <div className="who">Bill Gray, Evangelist</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- reader stories ---------------- */}
      <section className="section section-white">
        <div className="container">
          <h2>
            What <span>Readers</span> Say
          </h2>
          <div className="card-grid">
            <div className="tcard">
              <p>
                &ldquo;For several years now I&rsquo;ve been giving this book as
                a gift to friends and office mates, particularly Catholics. I
                have known a few who actually encountered the Truth after
                reading the book.&rdquo;
              </p>
              <div className="who">Romy, Philippines</div>
            </div>
            <div className="tcard">
              <p>
                &ldquo;God used it to open up my brother-in-law&rsquo;s eyes. I
                badly need the book for Sunday school and for witnessing to
                Catholics.&rdquo;
              </p>
              <div className="who">Alvin, Cebu, Philippines</div>
            </div>
            <div className="tcard">
              <p>
                &ldquo;It is very hard to find a resource that would lovingly
                yet informatively express the variance between the traditions we
                grew up with and what our Lord says in the Bible.&rdquo;
              </p>
              <div className="who">Gel, former church member of the Pezzottas</div>
            </div>
            <div className="tcard">
              <p>
                &ldquo;I was one of his former students. I received Jesus Christ
                as my Lord and Savior in 1983&hellip; I have been serving the
                Lord as a pastor since 1986.&rdquo;
              </p>
              <div className="who">Pastor Paul, Don Bosco class of 1971</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- family ---------------- */}
      <section className="section">
        <div className="container">
          <h2>
            From the <span>Family</span>
          </h2>
          <p>
            Tony went home to be with his Savior on April 2, 2014. His wife,
            Zita, and their children, Marie, Angela, and Daniel, keep his book
            in print so that his story keeps opening doors for the Gospel.
            Proceeds support the ongoing work of making the book available.
          </p>
          <p>
            <Link href="/eulogy">
              Read &ldquo;A Letter to You, Daddy&rdquo;, Marie&rsquo;s tribute
              at his memorial →
            </Link>
          </p>
          {/* TODO: when the family approves the statement, add:
          <p><Link href="/the-story">The story of Tony's final days — a word from the family →</Link></p> */}
        </div>
      </section>

      {/* ---------------- signup ---------------- */}
      <section className="section section-white" id="updates">
        <div className="container">
          <h2>
            Stay in the <span>Loop</span>
          </h2>
          <p>
            New printings and news from the Truth Encounter team. A few emails a
            year, nothing more.
          </p>
          <SignupForm />
        </div>
      </section>
    </>
  );
}
