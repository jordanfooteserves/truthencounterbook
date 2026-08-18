export const metadata = {
  title: 'A Letter to You, Daddy',
  description:
    "Eulogy given by Tony's daughter, Marie Pezzotta Foote, at his memorial service at Mission Hills Church, Littleton, Colorado, on April 14, 2014.",
};

// The letter is kept word-for-word as Marie delivered it.
const OPENING = [
  `Dear Daddy,`,
  `Well, here we are. We talked about this day pretty openly for 2 and a half years … we joked about it, we cried about it. At times, we planned it quite matter of factly, as if death is an everyday event, which it is. On other occasions, we danced around it with expected emotion which made our voices waver, as if death is a big deal, which it is. But bottom line, we discussed this day, the day we would gather to honor your earthly life, under the constant umbrella of doubt of an unknown date. This is it: The date of your homegoing, April 2, 2014 and today, April 14, 2014. Dates were important to you, Daddy, so this one's important to me – to us – until we, like you, are freed from the confining lines of an earthly calendar.`,
  `I've written you many letters from a different time zone. I've never, until now, written a letter addressed to eternity, outside of all time. This is my first time sitting in an airport boarding area, eating the most expensive cup of cheap tropical fruit ever, drinking delicious Costa Rican coffee which now tastes like home to me, listening to an amazing acoustic guitar rendition of "Memory" by a Costa Rican man selling his CD's (for which I'm quite sure you'd fork over the $20 his sign requests), and writing a letter to a man for whom a death certificate has been drawn up, but whom you and I know is more alive than ever. And I'm ok if you never see this. You are, after all, up to much more marvelous things than getting a letter from me.`,
  `It's definitely a strange and surreal feeling, knowing years ago that your time on earth was drawing to an end, and now that it has, just about everything in my life looks the same, and yet, many things are quite different. The man who has known me the longest is now gone. My mother is no longer married. I've never known her not married. It felt so wrong the first time I talked her after you died, not to ask, "How's Daddy doing?" after my usual, "Kumusta ka na?" Angela, Daniel and I are half-orphans. I'm milking this one for all I can. I figured you'd get a kick out of that.`,
  `We will all have to create new habits now that you're gone. My changes will be minute compared to Mom's and to Dan's and to all those servant-souls who cared for you round the clock until the very end. I'm really thankful, though, that Jordan, Megan, Micah and I were able to say goodbye to you well last August and that you were lucid enough to know that we were leaving the country to be missionaries in Costa Rica. Your prayer for us was precious. It let me know that you couldn't be prouder to send us off. Your goodbye filled me with both joy and sadness that you would never get to see the next generation on the mission field like you and Mom were. Leaving you in your room that day, your body riddled by disease, hinting of a slow death, was one of the hardest things I've ever done in my life. It reminded me so much of how you cried when you left me in California as you headed back to the Philippines after my freshman year of college. First you had to let me go, then I had to let you go.`,
  `The first two things I thought when Jordan told me that Dan had called to let us know you were with Jesus were:`,
];

const THOUGHTS = [
  `Thank you, Lord, that you've finally ended his suffering, and`,
  `Now I need to change all my verb tenses when I talk about my Dad. It's obvious I've been in language school for the last 9 months, isn't it? I've grown so accustomed to saying things like, "He speaks 10 languages. He lives in Colorado. He is in hospice care. He will die of this disease, unless God miraculously heals him." How thankful I am that because Jesus is our one and only Savior, I don't have to change all my verb tenses about you. You are now with our Heavenly Father. You live. I will see you again someday.`,
  `By the way, Daddy, the third thing I thought was, "I wonder how he feels now, not craving coffee, good wine or Italian cheeses." I certainly felt like consuming massive amounts of all three on the day you died. I love the fact that we both share Italian blood. Somehow, toasting to you with a giant bowl of curry or a plateful of sushi wouldn't quite have the same awesomeness factor for me.`,
];

const FB_INTRO = [
  `One thing you never really participated in was this whole social media thing, Daddy. So, as part of my tribute to you tonight, I'm going to recount what might have been the biggest moments of your earthly life, from my perspective, if you were posting them on Facebook and Twitter. You and I both know that if we can't laugh on a day like today, well, that would be a wasted day. All the years I was your daughter, no matter how often we butted heads or bumped into each others opinions, we could always laugh together over something. I miss laughing with you. Now remember, all these things are funny only because I'm making fun of you, ok? So here, goes.`,
];

const STATUSES = [
  `January 22, 1935 – YES! It's uficiale. I'm an Italiano. Facciamolo! Let's do this! Ciao, Bergamo! #italianbambinosbirthdaysuitslookanawfullotlikesoccerjerseys`,
  `Sometime in 1945ish, after the Nazis and the Axis countries were defeated – My hometown survived WWII and all they gave me was this lousy t-shirt. At least they could have made it look like an Italian soccer jersey. Shared this link: arrivedercimussolini.com`,
  `1946 – Today I decided I want to become a priest in the Catholic Church. Yes, I know I'm only 11 years old. But they haven't invented the Wii yet, so give me a break.`,
  `Later that day – Wow! I didn't know the Vatican could friend me so fast on Facebook!`,
  `Even later that day – Fast-tracking this train to Pope-hood. Who's with me?!`,
  `1950 – Catholic seminary is the coolest! #butnunsmaketerriblegirlfriends`,
  `1951 – Played soccer today. In a dress. Scored. Boo-ya!`,
  `1955 – I picked up my Bible today. Couldn't put it down. Hmmm …`,
  `1960 – Italian, French, German: Check. Spanish, Portuguese, English: Check. Greek, Hebrew, Latin: Check. Need one more to make it an even 10. Got any suggestions?`,
  `1961 – You may now call me Father Anthony. Bless you, people. Bless you.`,
  `1963 – Apparently, my 10th language will be Tagalog, the language spoken by the beautiful people of the Philippines. Going there as a missionary priest with the order of the Salesians. (My dad eventually added Mandarin to the mix, "just for fun!")`,
  `1964 – Absolutely nothing rhymes with the word Tagalog. It really puts a kink in my poetry-writing, song-composing chops.`,
  `1964 – Antonio Pulcini Pezzotta changed his work history to: Director of the Don Bosco Schools of the Philippines`,
  `1965 – I love this country. If I were the marrying kind of man, I'd marry it.`,
  `1966 – Sad to say, still having doubts about what my Church is teaching when I stack it up against this Bible that I'm reading. Starting a group page about this topic with my Bishop.`,
  `1967 – My bishop private messaged me & said I'm thinking too much about my spiritual questions and I need to play more soccer.`,
  `Later that day – Photo: Played more soccer. In a dress. Scored. Boo-ya!`,
  `1973 – Something's not right. Every time I read my Bible, I start to feel anxious about what I'm teaching the parish. Do I believe the Bible? Or the Church?`,
  `January 1974 – Talked with an evangelical Baptist minister today. The dude knows his Bible! Wow! with Ernie Montealegre`,
  `Late January 1974 – I'm glad my mom is not on Facebook, or she'd know that I'm considering leaving the Catholic Church. I don't want to disappoint my family. What to do?!`,
];

const STATUSES_KEY = [
  `February 25, 1974 – Can't wait any longer. Need to surrender my life to Jesus, no matter what anyone in my family will say. He will take care of the rest of my worries. I know HE alone, and not my good works, can save me from my sins.`,
  `February 26, 1974 – I am a new creation! Christ has redeemed my life! Message me if you want to know more about this decision I've made.`,
];

const STATUSES2 = [
  `March 1974 – Photo: Baptism in the Santa Cruz River, Laguna, Philippines. Caption: Lord, my life is yours. Do with me what you will.`,
  `April 1974 – I have met the woman I'm going to marry. She's amazing and I have written her a thousand love letters telling her why, even though she won't write me back. When I think of her, all I can say is, THANK GOD I'm not a priest anymore!`,
  `June 1, 1974 – Life event: Antonio Pulcini Pezzotta married Zita DeLima Vitangcol aka Baby.`,
  `September 1974 – Look out Denver, Colorado, here we come!`,
  `October 1974 – I kinda like wearing pants to seminary classes. #expriestperks`,
  `March 13, 1975 – Photo: Praise God, we now have a daughter! Marie Antoinette Pezzotta. She clearly got all her good looks from me, because Zita still has all of hers.`,
  `1976, on the day of your ordination as an evangelical pastor at First Baptist of West Los Angeles (your one and only post on Twitter) – Was a priest. Now a pastor. Knighthood, you're next. (You never posted again because you didn't like the 140 character limit)`,
  `March 1977 – Just landed in the Philippines. Baby #2 is on the way! Ready for missionary life of a different kind. All for Jesus, now! Mabuhay!`,
  `June 18, 1977 – Photo: So thankful to the Lord for daughter #2! Marie Angela Pezzotta is a perfect little angel. For now.`,
  `Years of Photos: People who came to Christ through hearing your testimony and teaching of the Word of God. Also, people who committed their lives to full-time ministry after being discipled by you.`,
  `April 21, 1981 – Photo: The doctor was wrong. God heard Zita's prayers. Marie Allison Pezzotta is now officially Anthony Daniel Pezzotta. I HAVE A SON!!!!!!!!`,
  `Summer 1982 – WOOHOO!!!! The last time Italy won the World Cup, I was 3 years old! #aufwiedersehengermany #wejustkickedyourheineken`,
  `June 1, 1984 – 10 years of marriage to my lovely wife. 3 kids from heaven. Fulfilling ministry of evangelism and discipleship. What more could a man want?`,
  `Many times in the late 80's and early 90's – I love my kids, but they're driving me nuts! Going hunting and fishing so I can kill something legally.`,
  `1992 – Cardinal Sin of Manila published an article in the Manila Bulletin, saying that I left the priesthood to marry my wife. He he, who are you gonna believe: me, or a man named Cardinal Sin?`,
  `1996 – I wrote a Bible study for Catholics, so they can read for themselves what the Scriptures have to say about their questions and doubts. Buy and give it away! #truthencounter`,
  `September 1997 (when you received your honorary Doctorate from Western Seminary in Portland, Oregon) – Priest. Pastor. Now an honorary Doctor. Who needs Knighthood?`,
  `2000 – Retiring from overseas service, but still working hard. Need to do something so I have an excuse to need caffeine.`,
  `2004 – I like my ministry job counseling different ethnic pastors. Makes speaking these languages more than cool party trivia. #useitorloseit`,
  `2009 – I'm sorry I haven't posted much. The doctors think I have Parkinson's. Please pray.`,
  `December 2010 – Doc says it's not Parkinson's. It's Cortico-Basal Ganglion Degeneration. That's medi-speak for "This is not going to be fun."`,
  `Feb 2011 – Moving one last time from CA to CO. The final airplane ride of my world-traveling life.`,
  `November, 2011 – I almost died today. But apparently it's not my time yet. Whether God heals me here on earth, or heals me in heaven, He is my Healer and He will have His way.`,
  `January 22, 2014 – Turned 79 today. My wife still makes the best chocolate cakes.`,
  `April 2, 2014 – Saw Jesus face to face today. BEST.DAY.of.my.LIFE.FOREVER.`,
];

const CLOSING = [
  `Daddy, thank you for teaching me to put God and His commands first, even if they don't make sense right away. Actually, in my short 39 years of life, knowing Him is the only thing that has really made sense, because often, not much else does. This world is insane, Daddy. It can really mess with our heads and our hearts, if we let it. I know the world will never consider my life an enviable one: following in the footsteps of my parents, giving up a comfortable life in the world's most powerful nation to live in a developing country, for the sake of the gospel, in the name of Jesus. I'm ok with that. Even in all it's temporary sheen and attraction, even in the seemingly pathetic and inconspicuous life that the world thinks I have, I know that what you and Mommy had was real. Real faith and real trust in a real God. You two shared a real love that carried you together through heartaches and victories. A real ministry to those who really needed to know about Jesus and His love for us all. I know even more now that you had all that because it's what I have in my life now, too. I'm not perfect. You certainly weren't. But at the end of the day … you chose to follow Christ, not the world and all that it claimed to offer. And you taught me to do the same. God chose you and Mommy to give me that incredible gift. Thank you for that legacy.`,
  `I'll laugh with you when I get Home. Give our babies this message, please: Just you wait until your Mom & Dad get here. And on that glorious day, Daddy, I bet that whatever we feast on together, it will be infinitely better than coffee, wine or cheese. I love you, Daddy.`,
];

export default function Eulogy() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>A Letter to You, Daddy</h1>
          <p className="lede">
            Eulogy given by Tony&rsquo;s daughter, Marie Pezzotta Foote, at his
            memorial service at Mission Hills Church in Littleton, Colorado, on
            April 14, 2014.
          </p>
        </div>
      </div>
      <div className="prose">
        <div className="container">
          {OPENING.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ol>
            {THOUGHTS.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
          <h2>Your Life in Facebook Status Updates, and Such</h2>
          {FB_INTRO.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {STATUSES.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {STATUSES_KEY.map((p, i) => (
            <p key={i}>
              <strong>
                <em>{p}</em>
              </strong>
            </p>
          ))}
          {STATUSES2.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {CLOSING.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="sig">Marie</p>
        </div>
      </div>
    </>
  );
}
