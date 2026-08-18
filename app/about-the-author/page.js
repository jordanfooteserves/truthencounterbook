import Link from 'next/link';
import { LINKS } from '../../lib/links';

export const metadata = {
  title: 'About the Author',
  description:
    'Dr. Anthony Pezzotta (1935–2014): Italian-born Catholic priest, Director of Salesian Schools in the Philippines, and, after trusting Christ alone in 1974, missionary and author of Truth Encounter.',
};

export default function AboutTheAuthor() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>About the Author</h1>
          <p className="lede">Dr. Anthony &ldquo;Tony&rdquo; Pezzotta, 1935–2014</p>
        </div>
      </div>
      <div className="prose">
        <div className="container two-col">
          <div>
            <p>
              Dr. Anthony P. Pezzotta was born in Bergamo, Italy, in 1935. He
              studied fifteen years in Roman Catholic seminaries of the
              Salesians of Don Bosco in Italy, England, Spain, and Germany, and
              was ordained a Catholic priest on February 11, 1961 in Turin,
              Italy, by Cardinal Maurilio Fossati. In the Catholic Church he
              earned undergraduate degrees in Philosophy and Greek and the
              equivalent of a Master&rsquo;s degree in Theology from the
              Salesian Pontifical University in Rome. In the Philippines he
              served as Director of Schools and Seminaries and as Rector of
              local Salesian communities (1964–1974).
            </p>
            <p>
              On February 26, 1974, after studying the Scriptures on his own and
              through the testimony of Rev. Ernesto Montealegre, a Filipino
              Baptist pastor, Tony trusted Christ alone as Savior and Lord of
              his life. He left the Catholic church and joined the Santa Cruz
              Baptist Church, where he was baptized on March 3, 1974. There he
              met Zita Vitangcol, a Sunday School teacher, whom he later
              married. God blessed Tony and Zita with three children: Marie,
              Angela, and Daniel.
            </p>
            <p>
              Tony completed a Master&rsquo;s degree at Denver Seminary in 1975
              and was awarded an honorary Doctor of Divinity by Western Seminary
              in 1991. In 1976 he was ordained to the Gospel Ministry at the
              First Baptist Church of West Los Angeles, and that June he and
              Zita were appointed by the Conservative Baptist Foreign Mission
              Society (now WorldVenture) as missionaries to the Philippines,
              where they ministered through evangelism, discipleship, and
              theological training until 1999.
            </p>
            <p>
              Back in the United States, Tony served as Director of Ethnic
              Ministries for the Conservative Baptist Association of Southern
              California (now the Pacific Church Network), working joyfully with
              Hispanic and Asian pastors until a rare form of Parkinson&rsquo;s
              disease ended his working life in 2009. His final years were spent
              with Zita in Littleton, Colorado, where their married life had
              begun. After a long, difficult illness, the Lord graciously called
              Tony home to his beloved Savior on April 2, 2014.
            </p>
            <p>
              Tony was wonderfully gifted by God with fluency in ten languages,
              and with something rarer still: the ability to disagree without
              despising. His warmth and clarity endeared him to people of every
              background, often in their own language. His life&rsquo;s work
              lives on in his family, his students, and everyone he encouraged
              toward a truth encounter of their very own.
            </p>
            <h2>The book</h2>
            <p>
              <em>Truth Encounter</em> was first published in 1996, with new
              editions in 1999, 2002, and a revised and updated Fourth Edition
              in 2021. The book is now available in{' '}
              <a href={LINKS.amazonPaperback}>paperback</a>,{' '}
              <a href={LINKS.amazonKindle}>Kindle</a>, and{' '}
              <a href={LINKS.gumroadPdf}>PDF</a>.
            </p>
            <p>
              <Link href="/#get-the-book">Get the book →</Link>
            </p>
          </div>
          <div>
            <img
              src="/author.jpg"
              alt="Dr. Anthony Pezzotta"
              className="portrait"
            />
          </div>
        </div>
      </div>
    </>
  );
}
