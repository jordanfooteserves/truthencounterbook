import Link from 'next/link';
import { LINKS } from '../../lib/links';

export const metadata = {
  title: 'A Word From the Family',
  description:
    "Did Dr. Anthony Pezzotta return to Catholicism or receive last rites before he died? A response from the Pezzotta family, with an eyewitness account and Anthony's own written words.",
};

export default function TheStory() {
  return (
    <>
      <div className="page-head story-head">
        <div className="container">
          <p className="eyebrow">A word from the Pezzotta family</p>
          <h1>
            The truth about our father&rsquo;s <em>faith and final days</em>
          </h1>
        </div>
      </div>

      <div className="prose">
        <div className="container">
          <p className="lead">
            Since our father, Dr. Anthony Pezzotta, went home to be with the
            Lord on April 2, 2014, a claim has circulated that he returned to
            the Roman Catholic Church and received Catholic &ldquo;last
            rites&rdquo; before he died. As his family, the ones who loved him,
            cared for him, and were near him at the end, we want to say plainly
            and gently: that is not true.
          </p>
          <p>
            We understand how the story took shape, and we hold no bitterness
            toward anyone in it. But our father&rsquo;s faith, his life&rsquo;s
            work, and his own written words deserve an honest account, and so we
            offer one here.
          </p>

          <h2>What actually happened</h2>
          <p>
            In his final years our father lived with a rare,
            Parkinson&rsquo;s-related illness that slowly took away his ability
            to speak and to make his wishes known. That loss came well before
            his last days. His mind, we believe, remained his own — what he had
            lost was the ability to express it.
          </p>
          <p>
            In his final weeks, a member of the staff at his care facility, a
            woman of Catholic faith who cared about our parents, became
            convinced that last rites ought to be administered, and asked
            repeatedly for permission to bring in a priest &ldquo;simply to
            pray.&rdquo; Our mother, Zita, declined again and again, explaining
            that we are not Catholic. Worn down at last, and wishing only to be
            gracious, she finally said in effect, &ldquo;do as you wish.&rdquo;
            That was not our father&rsquo;s decision. He was already
            unresponsive, unable to ask for anything, agree to anything, or
            receive anything. A priest was brought in, and a rite was performed
            over a man who could not speak a word. From that, we believe, the
            story spread that he had &ldquo;returned to Catholicism.&rdquo;
          </p>
          <p>
            One of those present in his final weeks was Ron Foote,
            Marie&rsquo;s father-in-law and a man who knew and loved our
            father. He wrote down what he witnessed. His account puts it
            plainly:
          </p>

          <div className="callout">
            <p>
              &ldquo;Tony had lost his ability to communicate a request long
              before his last days. He could not have requested &lsquo;last
              rites&rsquo; if he had wanted to&hellip; The &lsquo;last
              rites&rsquo; may have been done <em>to</em> him, but he did not{' '}
              <em>receive</em> them. The real Tony Pezzotta would never have
              consented to any ritual or sacrament of the Catholic
              church.&rdquo;
            </p>
            <p className="attr">
              — Ron Foote, eyewitness ·{' '}
              <Link href="/ron-foote">Read Ron&rsquo;s full account →</Link>
            </p>
          </div>

          <p>
            This is the heart of it. A ceremony performed over a sleeping,
            non-communicative man, without his knowledge, his request, or his
            consent, is not a conversion. It is not a change of heart. It is
            not the free act of the man himself.
          </p>

          <h2>What our father actually believed</h2>
          <p>
            To see how false this claim is, you need only look at his life — and
            read his own words. Our father was a Roman Catholic for thirty-nine
            years and a priest for thirteen. He did not leave that life in anger
            or on someone else&rsquo;s argument. He left it in 1974, after
            searching the Scriptures for himself and finding he could no longer
            reconcile what he read in God&rsquo;s Word with what he had been
            taught. From that day he gave the next <strong>forty years</strong>{' '}
            of his life, as a missionary and pastor in the Philippines, in
            southern California, and beyond, to sharing the grace of Jesus
            Christ, always with compassion and never with contempt for the
            Church he had come from.
          </p>
          <p>
            And he wrote it all down. In <em>Truth Encounter</em>, the book he
            spent his life on, our father addressed the very rite this rumor is
            about, the sacrament of last rites, and explained in plain words
            why he could not accept it:
          </p>

          <div className="bookquote">
            <p>
              &ldquo;How simple is the way of salvation as taught in Holy
              Scriptures, compared with the complicated sacramental system!
              God&rsquo;s Grace, always available, and personal response in
              genuine repentance and faith are all that is needed!&rdquo;
            </p>
            <p className="attr">
              — Anthony Pezzotta, <strong>Truth Encounter</strong> (written
              years before his death)
            </p>
          </div>

          <p>
            He wrote that while he was fully able to write it. The rumor asks
            the world to believe he reversed a lifetime of conviction, and
            unwrote his own book, in a single unconscious moment. His life says
            otherwise. His own pen says otherwise.
          </p>

          <h2>A closing word</h2>
          <p>
            Tony&rsquo;s daughter, Marie, said it best: a ritual performed on a
            person doesn&rsquo;t determine that person&rsquo;s faith; it is the
            heart, turned toward Christ, that does. We share this not to win an
            argument, but simply to tell the truth in love, and then to leave it
            in God&rsquo;s hands, as our father would have wanted. We carry no
            ill will toward the Catholic Church or toward anyone who repeated
            this story. Our prayer is the one our father gave his life to: that
            all of us would come to know the grace and truth of Jesus Christ.
          </p>

          <p className="signoff">
            With love and in his memory,
            <br />
            <span className="fam">— The Pezzotta Family</span>
          </p>
        </div>
      </div>

      <section className="section section-white story-cta">
        <div className="container">
          <h2>
            Read the book he <span>left behind</span>
          </h2>
          <p>
            If you want to know what Anthony Pezzotta truly believed, read it in
            his own words. The first three chapters are free.
          </p>
          <div className="buy-row">
            <a className="btn btn-red" href={LINKS.gumroadFreeChapters}>
              Read the first 3 chapters free
            </a>
            <Link className="btn btn-outline" href="/#get-the-book">
              Get Truth Encounter
            </Link>
          </div>
        </div>
      </section>

      <p className="story-foot">
        The nursing-staff member is left unnamed out of respect, and the article
        that began this claim is intentionally not linked.
      </p>
    </>
  );
}
