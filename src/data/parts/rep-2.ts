import type { Song } from '../types';

// reputation（2017）：第 9–15 首
const MS = ['Max Martin', 'Shellback'];
const JA = ['Taylor Swift', 'Jack Antonoff'];

export const part2: Song[] = [
  {
    slug: 'getaway-car', title: 'Getaway Car', track: 9, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A fan-favourite heist movie of a song: using one relationship to escape another, knowing it was doomed from the start.',
      zh: '一首像劫案電影般的歌迷心頭好：借一段感情逃離另一段，明知它從一開始便注定失敗。',
    },
    story: {
      en: 'Written and produced with [[Jack Antonoff]], "Getaway Car" is built like a crime film: the getaway, the chase, the double-cross. The narrator admits that a relationship begun as an escape route from another one was never going to last.\n\nIts soaring eighties-style production and dramatic bridge made it one of the most loved songs on reputation, a regular highlight of the reputation Stadium Tour and later the Eras Tour.',
      zh: '〈Getaway Car〉與 [[Jack Antonoff]] 合寫及監製，結構就像一部犯罪電影：逃亡、追逐、出賣。敘述者承認，一段以逃離另一段感情為起點的關係，從來不會長久。\n\n激昂的八十年代風格編曲和戲劇性的橋段，令它成為《reputation》中最受喜愛的歌之一，也是 reputation Stadium Tour 及後來 Eras Tour 的固定亮點。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes meeting someone when she was trapped in another relationship and seeing him as her way out.', zh: '她描述自己困在另一段感情中時遇見某人，把他視為出路。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She admits nothing good starts in a getaway car: a relationship built on escape is doomed.', zh: '她承認，在逃亡車上開始的東西都不會有好結果：建基於逃避的感情注定失敗。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The three of them, the old partner, the new one and her, are like characters in a crime film, with sirens in the background.', zh: '舊伴侶、新對象和她三人，就像犯罪電影中的角色，背景響着警笛。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The double-cross: she leaves the new man too, driving off alone. She was always going to save herself.', zh: '出賣：她連新對象也拋下，獨自駕車離去。她從一開始就只會拯救自己。' } },
    ],
    echoes: [
      { ref: 'reputation/ready-for-it', note: { en: 'Two heist fantasies on the same album, one hopeful and one doomed.', zh: '同一張專輯中的兩個劫案幻想，一個充滿希望，一個注定失敗。' } },
      { ref: 'fearless/love-story', note: { en: 'The dream of running away with a lover, turned cynical.', zh: '與戀人私奔的夢，變得憤世嫉俗。' } },
    ],
  },
  {
    slug: 'king-of-my-heart', title: 'King of My Heart', track: 10, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: MS,
    overview: {
      en: 'A love song built in sections, each with a different beat, like chapters of a relationship.',
      zh: '一首分段式的情歌，每一段節拍都不同，就像一段感情的不同章節。',
    },
    story: {
      en: 'Swift has said that each part of "King of My Heart" was written to feel like a different stage of a relationship, so the beat changes as the love deepens. Written with [[Max Martin]] and [[Shellback]], it uses royal imagery to describe finding someone who makes her feel at home.\n\nThe song also hints at the private, transatlantic nature of the relationship behind reputation.',
      zh: 'Swift 說〈King of My Heart〉的每一部分，都寫得像一段感情的不同階段，所以節拍會隨愛情加深而轉變。這首歌與 [[Max Martin]]、[[Shellback]] 合寫，以王室意象描寫找到一個令她有歸屬感的人。\n\n歌曲亦暗示了《reputation》背後那段私密、橫跨大西洋的感情。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She was content being alone, but this person changed that.', zh: '她本來安於獨處，但這個人改變了一切。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She crowns him king of her heart; the royal imagery suggests devotion and a kind of home.', zh: '她把他加冕為心中的國王；王室意象暗示忠誠，以及一種歸屬。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She asks whether this is the end of all the endings, hoping this love will be the last.', zh: '她問這是否是一切結局的終點，盼望這份愛會是最後一段。' } },
    ],
    echoes: [
      { ref: 'speak-now/long-live', note: { en: 'Royal imagery again, now for a lover rather than a team.', zh: '再次使用王室意象，這次獻給戀人而不是團隊。' } },
      { ref: 'lover/lover', note: { en: 'The hope for a lasting love becomes a vow on Lover.', zh: '對長久之愛的盼望，在《Lover》中變成誓言。' } },
    ],
  },
  {
    slug: 'dancing-with-our-hands-tied', title: 'Dancing with Our Hands Tied', track: 11, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback', 'Oscar Holter'], producers: [...MS, 'Oscar Holter'],
    overview: {
      en: 'A pulsing song about loving someone under enormous outside pressure, as if dancing with your hands tied.',
      zh: '一首脈動強烈的歌，寫在巨大外界壓力下愛一個人，彷彿雙手被綁着跳舞。',
    },
    story: {
      en: 'Written with [[Max Martin]], [[Shellback]] and [[Oscar Holter]], the song captures how hard it is to keep a relationship alive when the world is watching and judging. She fears the pressure will break it.\n\nSwift added an acoustic version to the reputation Stadium Tour, giving the song a new, more intimate life.',
      zh: '這首歌與 [[Max Martin]]、[[Shellback]]、[[Oscar Holter]] 合寫，捕捉在世界注視和批判之下維繫一段感情有多困難。她害怕壓力會把它壓垮。\n\nSwift 在 reputation Stadium Tour 中加入了這首歌的木結他版本，賦予它更親密的新生命。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She worries that her fame and reputation will damage the relationship.', zh: '她擔心自己的名氣和名聲會傷害這段感情。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'They are dancing with their hands tied: loving each other freely is impossible under the circumstances, but they keep dancing.', zh: '他們被綁着雙手跳舞：在這種處境下無法自由地相愛，但他們仍然繼續跳下去。' } },
    ],
    echoes: [
      { ref: '1989/i-know-places', note: { en: 'Protecting love from outside pressure, three years earlier.', zh: '三年前，同樣是保護愛情不受外界壓力影響。' } },
    ],
  },
  {
    slug: 'dress', title: 'Dress', track: 12, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'The most sensual song in her catalogue at the time: breathy, intimate and entirely about desire.',
      zh: '當時她作品中最感性的歌：氣聲迷離、親密，完全關於慾望。',
    },
    story: {
      en: 'Written and produced with [[Jack Antonoff]], "Dress" surprised many listeners with its openness about physical attraction. The production is hushed and close, as if whispered.\n\nSwift has said that writing honestly about adult relationships was part of growing up as an artist, and this song marked that shift clearly.',
      zh: '〈Dress〉與 [[Jack Antonoff]] 合寫及監製，對身體吸引的坦率令不少聽眾感到意外。編曲輕聲而貼近，彷彿是耳語。\n\nSwift 說，坦白地寫成年人的感情，是她作為藝術家成長的一部分，而這首歌清晰地標誌着這個轉變。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Their relationship began as a friendship, kept secret even from those around them.', zh: '兩人的關係起初是友誼，連身邊的人也不知道。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She makes it plain that everything about the evening is for him alone: a frank statement of desire.', zh: '她清楚表明，那個晚上的一切都只為他而準備：坦率地表達慾望。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She reflects on how they found each other in a bad year, and how he stayed.', zh: '她回想兩人在糟糕的一年中找到彼此，而他留了下來。' } },
    ],
    echoes: [
      { ref: 'fearless/the-way-i-loved-you', note: { en: 'Intensity she once found in chaos, now found in intimacy.', zh: '她曾在混亂中尋找的濃烈，如今在親密中找到。' } },
    ],
  },
  {
    slug: 'this-is-why-we-cant-have-nice-things', title: "This Is Why We Can't Have Nice Things", track: 13, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A sarcastic party song about friendships that turned sour, ending with a mock toast and a laugh.',
      zh: '一首充滿諷刺的派對歌，寫變了質的友誼，以一場假意的祝酒和一聲大笑作結。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], the song is a theatrical, tongue-in-cheek look back at the events of 2016. Swift describes trusting people who then betrayed her, using the image of a party that got out of hand.\n\nThe song’s most famous moment is a mock toast to the people who stood by her, followed by a burst of laughter: the sound of someone who is finally over it.',
      zh: '這首歌與 [[Jack Antonoff]] 合寫，以戲劇化、半開玩笑的方式回望 2016 年的事件。Swift 以一場失控的派對為意象，描述自己信任了一些人，而他們後來背叛了她。\n\n全曲最著名的一刻，是她假意舉杯敬那些一直支持她的人，然後爆出一陣笑聲：那是一個終於放下了的人的聲音。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers throwing lavish parties and trusting everyone who came.', zh: '她回想自己舉辦奢華的派對，信任每一個來的人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Because of how people behaved, she cannot have nice things any more: trust was broken.', zh: '因為某些人的所作所為，她再也不能擁有美好的東西：信任已經破碎。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She alludes to a friendly phone call that was later used against her, without naming anyone.', zh: '她暗指一通友善的電話後來被用來對付她，但沒有指名道姓。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'A mock toast to the people who stayed loyal, then a laugh. She is no longer wounded; she finds it absurd.', zh: '假意舉杯敬那些一直忠心的人，然後大笑。她不再受傷，只覺得荒謬。' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'The same events, approached here with laughter rather than menace.', zh: '同樣的事件，這首歌以笑聲而非威嚇來處理。' } },
      { ref: 'the-tortured-poets-department/thank-you-aimee', note: { en: 'Seven years later, another song widely read as addressing an old adversary, with a different kind of closure.', zh: '七年後，另一首普遍被認為寫給宿敵的歌，帶來另一種了結。' } },
    ],
  },
  {
    slug: 'call-it-what-you-want', title: 'Call It What You Want', track: 14, section: 'standard',
    writers: JA, producers: JA,
    single: { en: 'Promotional single, November 2017', zh: '宣傳單曲，2017 年 11 月' },
    overview: {
      en: 'The quiet centre of reputation: everything public has fallen apart, and she is fine, because of one person.',
      zh: '《reputation》安靜的核心：公開的一切都已崩塌，而她安好，因為有一個人。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "Call It What You Want" is the moment the album lets its guard down. The first verse admits that her castle has crumbled and her reputation is in ruins. Then she reveals she is happier than she has ever been, because of a private love that has nothing to do with her public image.\n\nSwift later described reputation as, at heart, a love story, and this song is where that is most obvious.',
      zh: '〈Call It What You Want〉與 [[Jack Antonoff]] 合寫，是整張專輯卸下防衛的一刻。第一段主歌承認她的城堡已經崩塌、名聲已成廢墟。然後她透露，自己比任何時候都快樂，因為有一段與公眾形象毫無關係的私密愛情。\n\nSwift 後來形容《reputation》本質上是一個愛情故事，而這首歌最清楚地體現了這一點。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits that everything she built in public has fallen and that the people who loved her have turned away.', zh: '她承認自己在公眾面前建立的一切已經倒下，曾經愛她的人也轉身離開。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She has found someone who loves her quietly and truly. Whatever the world calls it, she does not care.', zh: '她找到一個安靜而真誠地愛她的人。無論世界怎樣稱呼這段感情，她都不在乎。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She wants to carry a sign of him with her everywhere, and to protect what they have from everyone else.', zh: '她想把屬於他的印記隨時帶在身上，並保護兩人擁有的一切不受外人打擾。' } },
    ],
    echoes: [
      { ref: '1989/i-know-places', note: { en: 'Three years earlier she imagined hiding a love from the world; here she has done it.', zh: '三年前她想像把愛藏起來，不讓世界看見；如今她做到了。' } },
      { ref: 'speak-now/ours', note: { en: 'A love that belongs only to the two people in it, whatever others think.', zh: '一份只屬於兩個人的愛，無論旁人怎麼想。' } },
    ],
  },
  {
    slug: 'new-years-day', title: "New Year's Day", track: 15, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A soft piano ballad for the morning after the party: love is not the midnight kiss but who stays to clean up.',
      zh: '一首柔和的鋼琴抒情歌，寫派對後的早晨：愛不是午夜的一吻，而是誰會留下來一起收拾。',
    },
    story: {
      en: 'Swift recorded "New Year’s Day" with [[Jack Antonoff]] in a simple, intimate way, mostly piano and voice. After an album full of armour and noise, it ends on the quietest possible note.\n\nShe has explained that the song is about the difference between the glamorous moments everyone sees and the everyday ones that actually make a relationship, like cleaning up together the next day.',
      zh: 'Swift 與 [[Jack Antonoff]] 以簡單而親密的方式錄製〈New Year’s Day〉，主要只有鋼琴與人聲。在一張充滿盔甲與喧囂的專輯之後，它以最安靜的音符作結。\n\n她解釋，這首歌寫的是兩者之間的分別：一邊是人人都看得到的光鮮時刻，一邊是真正構成一段感情的日常片段，例如第二天一起收拾。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The morning after a New Year’s Eve party: the mess left behind, and two people tidying it up together.', zh: '除夕派對後的早晨：滿地狼藉，兩個人一起收拾。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She wants to hold on to him not just at midnight but on the ordinary day that follows.', zh: '她想緊握的不只是午夜的他，還有之後那個平凡日子裏的他。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She asks him to remember small, private things about her, and promises to remember his.', zh: '她請他記住關於她的細小私密之事，並承諾自己也會記住他的。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'Memory as proof of love: in Red it hurt; here it comforts.', zh: '記憶作為愛的證明：在《Red》中令人心痛；在這裏令人安慰。' } },
      { ref: 'lover/lover', note: { en: 'Domestic, everyday love becomes the centre of the next album.', zh: '居家、日常的愛，成為下一張專輯的核心。' } },
    ],
  },
];
