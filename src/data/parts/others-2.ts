import type { Song } from '../types';

// 其他作品：2019 年以後的單曲及電影歌曲
// 版權說明：歌詞只作逐段解讀，不引用原文。

export const part2: Song[] = [
  {
    slug: 'christmas-tree-farm', title: 'Christmas Tree Farm', track: 6, section: 'other',
    writers: ['Taylor Swift'],
    single: { en: 'Holiday single, 6 December 2019', zh: '聖誕單曲，2019 年 12 月 6 日' },
    overview: {
      en: 'A big, joyful Christmas song about the Pennsylvania Christmas tree farm where Swift spent her early childhood.',
      zh: '一首盛大歡樂的聖誕歌，寫 Swift 童年早期在賓夕法尼亞州聖誕樹農場度過的日子。',
    },
    story: {
      en: 'Swift’s family ran a Christmas tree farm when she was small, and she has often spoken of it fondly. Written by her alone, the song begins as a slow ballad about feeling stressed in the city, then bursts into an orchestral celebration of going home to the farm in her mind.\n\nThe video is made from her family’s home movies.',
      zh: 'Swift 小時候，家人經營一個聖誕樹農場，她經常深情地談起那裏。這首歌由她獨自寫成，以一段寫城市生活壓力的緩慢抒情開始，然後爆發成管弦樂式的慶祝：在想像中回到農場。\n\nMV 由她家人的家庭錄像剪輯而成。',
    },
    lyrics: [
      { part: { en: 'Intro', zh: '開首' }, meaning: { en: 'Life in the city feels cold and busy.', zh: '城市生活冷漠而忙碌。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'In her heart she returns to the farm, the snow and the warmth of home.', zh: '在心裏，她回到農場、雪地與家的溫暖。' } },
    ],
    mv: {
      id: 'mN3rDTAdM2o', director: 'Taylor Swift', date: '2019-12-06',
      scenes: [
        { scene: { en: 'Home movies', zh: '家庭錄像' }, meaning: { en: 'Old family footage shows a very young Taylor playing in the snow on the farm.', zh: '舊的家庭片段：年幼的 Taylor 在農場的雪地中玩耍。' } },
        { scene: { en: 'The first guitar', zh: '第一支結他' }, meaning: { en: 'On a Christmas morning, she opens a guitar: a small moment that foreshadows everything that followed.', zh: '某個聖誕早上，她打開一支結他：一個細小的時刻，預示了往後的一切。' } },
      ],
    },
    echoes: [
      { ref: 'fearless/the-best-day', note: { en: 'Another video built from her family’s home footage.', zh: '另一支以家庭錄像製成的 MV。' } },
      { ref: 'evermore/tis-the-damn-season', note: { en: 'Going home for the holidays, from a very different angle.', zh: '節日回鄉，角度截然不同。' } },
    ],
  },
  {
    slug: 'beautiful-ghosts', title: 'Beautiful Ghosts', track: 7, section: 'other',
    writers: ['Taylor Swift', 'Andrew Lloyd Webber'],
    single: { en: 'Soundtrack · Cats (2019) · Golden Globe nominee', zh: '電影歌曲．《Cats》（2019 年）．金球獎提名' },
    overview: {
      en: 'A new song for the film version of the musical Cats, written with Andrew Lloyd Webber, about longing to belong.',
      zh: '一首為音樂劇《Cats》電影版而寫的新歌，與 Andrew Lloyd Webber 合寫，寫渴望歸屬。',
    },
    story: {
      en: 'Swift appeared in the film as Bombalurina and co-wrote this song with [[Andrew Lloyd Webber]], the composer of the original musical. In the film it is sung by the young cat Victoria; Swift’s own version plays over the end credits.\n\nThe song gives Victoria an inner voice: a young outsider who wants to be part of the world she sees. It was nominated for the Golden Globe for Best Original Song.',
      zh: 'Swift 在電影中飾演 Bombalurina，並與原著音樂劇的作曲家 [[Andrew Lloyd Webber]] 合寫這首歌。在電影中，它由年輕的貓 Victoria 演唱；Swift 自己的版本則在片尾播放。\n\n這首歌為 Victoria 賦予內心的聲音：一個年輕的局外人，渴望成為眼前世界的一部分。它獲提名金球獎最佳原創歌曲。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'A young newcomer watches others shine and longs to be noticed.', zh: '一個年輕的新來者看着別人發光，渴望被看見。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She fears she will only ever be a ghost on the edges of their world.', zh: '她害怕自己永遠只是他們世界邊緣的一個幽靈。' } },
    ],
    echoes: [
      { ref: 'folklore/mirrorball', note: { en: 'Wanting to belong and be seen.', zh: '渴望歸屬、渴望被看見。' } },
    ],
  },
  {
    slug: 'only-the-young', title: 'Only the Young', track: 8, section: 'other',
    writers: ['Taylor Swift', 'Joel Little'],
    single: { en: 'From the documentary Miss Americana (2020)', zh: '紀錄片《Miss Americana》（2020 年）' },
    overview: {
      en: 'An anthem for young people who feel powerless in politics, released with Swift’s documentary Miss Americana.',
      zh: '一首為對政治感到無力的年輕人而寫的頌歌，隨 Swift 的紀錄片《Miss Americana》推出。',
    },
    context: {
      en: 'Miss Americana showed Swift deciding, in 2018, to speak publicly about politics for the first time. She wrote this song after the results of that year’s US midterm elections disappointed her.',
      zh: '《Miss Americana》記錄了 Swift 在 2018 年首次決定公開談論政治。她在那年美國中期選舉結果令她失望後寫下這首歌。',
    },
    story: {
      en: 'Written with [[Joel Little]], who also worked on Lover, the song addresses young people who feel that adults have failed them, including on issues of safety. Instead of despair, it tells them that the future belongs to them and that they can change things.\n\nIt plays over the end of the documentary.',
      zh: '這首歌與曾參與《Lover》的 [[Joel Little]] 合寫，向那些覺得被成年人辜負、包括在安全問題上被辜負的年輕人說話。它沒有陷入絕望，而是告訴他們：未來屬於他們，他們能夠改變現狀。\n\n歌曲在紀錄片結尾播放。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Young people feel let down and frightened by the world adults have made.', zh: '年輕人對成年人建造的世界感到失望和恐懼。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The young are the ones who can still bring change, so they must keep going.', zh: '只有年輕人仍能帶來改變，所以他們必須堅持下去。' } },
    ],
    echoes: [
      { ref: 'lover/the-man', note: { en: 'The same period of speaking out more directly.', zh: '同一時期，她開始更直接地發聲。' } },
      { ref: 'speak-now/never-grow-up', note: { en: 'Youth seen as vulnerable, and now as powerful.', zh: '年輕曾被視為脆弱，如今被視為力量。' } },
    ],
  },
  {
    slug: 'carolina', title: 'Carolina', track: 9, section: 'other',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Aaron Dessner'],
    single: { en: 'Soundtrack · Where the Crawdads Sing (2022) · Golden Globe and Grammy nominee', zh: '電影歌曲．《Where the Crawdads Sing》（2022 年）．金球獎及格林美提名' },
    overview: {
      en: 'A haunting folk song for Where the Crawdads Sing, recorded only with instruments that existed in the 1950s, when the story is set.',
      zh: '一首為《Where the Crawdads Sing》而寫、縈繞不去的民謠，只用故事發生的五十年代已存在的樂器錄製。',
    },
    story: {
      en: 'Swift wrote the song alone after reading the novel by [[Delia Owens]], about a girl who grows up alone in the marshes of North Carolina. She and [[Aaron Dessner]] decided to use only instruments available in 1953, to make the song feel as if it belonged to that world.\n\nIt was nominated for both a Golden Globe and a Grammy.',
      zh: 'Swift 讀過 [[Delia Owens]] 的小說後獨自寫下這首歌；小說講述一個在北卡羅來納州沼澤中獨自長大的女孩。她與 [[Aaron Dessner]] 決定只使用 1953 年已有的樂器，令歌曲彷彿屬於那個世界。\n\n它同時獲得金球獎和格林美提名。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'The marsh is the only home she has, and it keeps her secrets.', zh: '沼澤是她唯一的家，也守護着她的秘密。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Even the land itself cannot tell what really happened there.', zh: '就連這片土地，也說不出那裏真正發生過甚麼。' } },
    ],
    echoes: [
      { ref: 'evermore/no-body-no-crime', note: { en: 'A Southern mystery told in folk form.', zh: '以民謠形式講述的南方懸案。' } },
      { ref: 'folklore/seven', note: { en: 'Childhood, nature and loneliness.', zh: '童年、大自然與孤獨。' } },
    ],
  },
  {
    slug: 'i-knew-it-i-knew-you', title: 'I Knew It, I Knew You', track: 10, section: 'other',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Soundtrack · Toy Story 5 (2026)', zh: '電影歌曲．《反斗奇兵 5》（2026 年）' },
    overview: {
      en: 'An original country-pop song for Disney and Pixar’s Toy Story 5, written for the cowgirl Jessie: a return to Swift’s country roots.',
      zh: '一首為迪士尼及 Pixar《反斗奇兵 5》而寫的原創鄉謠流行曲，寫給牛仔女孩翠絲：Swift 重返鄉謠根源之作。',
    },
    context: {
      en: 'Swift wrote and recorded the song with [[Jack Antonoff]] in February 2026, after attending an early screening of the film. She announced it by saying she had dreamed of writing for these characters since watching the first Toy Story as a five-year-old. It was released on 5 June 2026.',
      zh: 'Swift 在 2026 年 2 月觀看電影的早期放映後，與 [[Jack Antonoff]] 寫成並錄製這首歌。她宣佈時說，自五歲看第一集《反斗奇兵》起，便夢想為這些角色寫歌。歌曲於 2026 年 6 月 5 日推出。',
    },
    story: {
      en: 'Jessie’s story has a famous musical moment already: in Toy Story 2, "When She Loved Me" told of being forgotten by the child who once loved her. Swift’s song does the opposite, finding easy joy in a reunion.\n\nSwift said writing it felt like a musical departure and coming home at the same time. In its first week it was added by every country radio station reporting to Mediabase, the first song by a female artist to do so.',
      zh: '翠絲的故事早有一段著名的音樂時刻：《反斗奇兵 2》的〈When She Loved Me〉，寫被曾經疼愛她的孩子遺忘。Swift 這首歌恰恰相反，在重聚中找到輕鬆的喜悅。\n\nSwift 說寫這首歌既像一次音樂上的出走，又像回家。推出首週，所有向 Mediabase 匯報的鄉謠電台都把它加入播放清單，是首位女歌手的歌曲做到這一點。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'After a long time apart, a familiar face appears again.', zh: '分別很久之後，一張熟悉的臉再次出現。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She recognises them at once: the bond was never really broken.', zh: '她一眼便認出對方：這份羈絆從未真正斷過。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/tim-mcgraw', note: { en: 'Back to country, twenty years after her debut single.', zh: '出道單曲二十年後，重返鄉謠。' } },
      { ref: 'fearless/the-best-day', note: { en: 'Childhood, memory and the people who loved us first.', zh: '童年、回憶，以及最早愛我們的人。' } },
    ],
  },
];
