import { LINKS } from '../../lib/links';

export const metadata = {
  title: 'Spread the Truth',
  description:
    'Share Truth Encounter with someone who needs it — gift a copy, send the free chapters, or pass the site along.',
};

export default function Share() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Spread the Truth</h1>
          <p className="lede">
            This book has always traveled hand to hand. Here&rsquo;s how to pass
            it on.
          </p>
        </div>
      </div>
      <div className="prose">
        <div className="container">
          <h2>Give the book</h2>
          <p>
            The simplest gift: order the{' '}
            <a href={LINKS.amazonPaperback}>paperback on Amazon</a> and have it
            shipped straight to your friend&rsquo;s door. Kindle readers can be
            gifted the <a href={LINKS.amazonKindle}>ebook</a> too — on the
            Amazon page, choose &ldquo;Buy for others.&rdquo;
          </p>
          <p>
            Prefer the <a href={LINKS.gumroadPdf}>PDF edition</a>? On the
            Gumroad checkout, click the gift icon and enter your
            recipient&rsquo;s email. The{' '}
            <a href={LINKS.gumroadFreeChapters}>free chapters</a> can be gifted
            the same way, a gentle first step for someone who isn&rsquo;t sure
            yet.
          </p>
          <h2>Share the site</h2>
          <p>
            Share <strong>truthencounterbook.com</strong> with your church,
            small group, or social media. Everything someone needs lives here:
            Tony&rsquo;s story, the free chapters, and every edition of the
            book.
          </p>
          <h2>A note you can send</h2>
          <p>Copy, personalize, and send:</p>
          <blockquote>
            Hello ______, I found a resource I thought you might appreciate.
            It&rsquo;s a book called <em>Truth Encounter: Catholicism and the
            Holy Scriptures</em>, written by a former Catholic priest who spent
            years honestly comparing what he taught with what the Bible says.
            It&rsquo;s gracious, clear, and personal: not an attack, but an
            invitation. You can read the three chapters on salvation free at
            truthencounterbook.com. I&rsquo;d love to hear what you think of it.
          </blockquote>
          <h2>Ministries and bulk copies</h2>
          <p>
            Are you a church or ministry wanting copies for outreach — or
            overseas and wanting to print locally? The family has a long history
            of saying yes to requests like this. Write to us at{' '}
            <a href={`mailto:${LINKS.contactEmail}`}>{LINKS.contactEmail}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
