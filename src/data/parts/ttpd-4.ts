import type { Song } from '../types';

// The Tortured Poets Department: The Anthology：第 25–31 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];
const TA = ['Taylor Swift', 'Aaron Dessner'];

export const part4: Song[] = [
  {
    slug: 'i-look-in-peoples-windows', title: 'I Look in People’s Windows', track: 25, section: 'anthology',
    writers: TJ,
    overview: {
      en: 'A short, tender song about looking into other people’s lives, hoping to catch a glimpse of someone she lost.',
      zh: '一首短小而溫柔的歌，寫窺看別人的生活，盼望瞥見一個失去的人。',
    },
    story: {
      en: 'The narrator walks through the world as an outsider, peering at lit windows and imagining the lives inside. Really she is looking for one person, and wondering whether he still thinks of her.\n\nIts simplicity makes it one of the Anthology’s most affecting moments.',
      zh: '敘述者以局外人的身份走過世界，望向亮着燈的窗戶，想像裏面的生活。其實她在尋找一個人，並想知道他是否仍會想起她。\n\n正因為簡單，它成為《The Anthology》中最動人的時刻之一。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Outside looking in, she searches for a familiar face.', zh: '她在窗外向內望，尋找一張熟悉的臉。' } },
    ],
    echoes: [
      { ref: 'evermore/dorothea', note: { en: 'Wondering whether someone far away still remembers.', zh: '想知道遠方的人是否仍然記得。' } },
    ],
  },
  {
    slug: 'the-prophecy', title: 'The Prophecy', track: 26, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A hushed prayer asking fate to change a prophecy that seems to doom her to loneliness.',
      zh: '一段輕聲的禱告，祈求命運改寫那個似乎注定她孤獨終老的預言。',
    },
    story: {
      en: 'The narrator speaks to fate, to the stars and to old ways of telling the future, asking them to change what seems written for her. She fears she will always be admired but never truly loved.\n\nThe melody is folk-like and circular, as if repeating an ancient chant.',
      zh: '敘述者向命運、星辰和古老的占卜方式說話，請求改寫看似早已寫定的命運。她害怕自己永遠被仰慕，卻從未被真正愛過。\n\n旋律帶民謠味道，循環往復，彷彿重複一段古老的頌唱。',
    },
    lyrics: [
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She begs for the prophecy to be rewritten, so she might not end up alone.', zh: '她懇求改寫預言，好讓自己不致孤身一人。' } },
    ],
    echoes: [
      { ref: 'folklore/invisible-string', note: { en: 'Fate as a force that might bring the right person; here, she fears it will not.', zh: '命運或會帶來對的人；這一次，她害怕不會。' } },
    ],
  },
  {
    slug: 'cassandra', title: 'Cassandra', track: 27, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A retelling of the Greek myth of Cassandra, the prophet who told the truth and was never believed.',
      zh: '重述希臘神話中 Cassandra 的故事：一位說出真相、卻從不被相信的女先知。',
    },
    story: {
      en: 'In Greek myth, Cassandra could see the future but was cursed so that no one would believe her. Swift uses the story to describe being punished for warning people about the truth.\n\nThe song is widely read as a reflection on 2016, when she felt disbelieved, and on the later moment when the full story came out.',
      zh: '在希臘神話中，Cassandra 能預見未來，卻被詛咒得沒有人相信她。Swift 借這個故事，描述自己因揭示真相而受懲罰。\n\n這首歌普遍被理解為反思 2016 年她感到不被相信的經歷，以及後來事件全貌曝光的那一刻。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She warned of danger and was attacked for it.', zh: '她警告危險，卻因此受到攻擊。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Later the truth is undeniable, but no one apologises.', zh: '後來真相再也無法否認，卻沒有人道歉。' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'The same events, once met with defiance, now seen as myth.', zh: '同一段事件：當年以反抗回應，如今以神話重看。' } },
      { ref: 'evermore/long-story-short', note: { en: 'Looking back at the same hard years.', zh: '回望同一段艱難的歲月。' } },
    ],
  },
  {
    slug: 'peter', title: 'Peter', track: 28, section: 'anthology',
    writers: ['Taylor Swift'],
    overview: {
      en: 'A song written by Swift alone, using Peter Pan to describe a man who promised to grow up and come back, and never did.',
      zh: '一首由 Swift 獨自寫成的歌，借用《小飛俠》描寫一個承諾長大後會回來、卻始終沒有回來的男人。',
    },
    story: {
      en: 'In J. M. Barrie’s story, Peter Pan refuses to grow up while Wendy does. Swift casts herself as Wendy, who waited and then had to move on with her life.\n\nThe song is gentle rather than angry: she forgives him, but the time for waiting has passed.',
      zh: '在 J. M. Barrie 的故事中，Peter Pan 拒絕長大，Wendy 卻長大了。Swift 把自己寫成 Wendy：她等待過，然後不得不繼續自己的人生。\n\n這首歌溫柔而非憤怒：她原諒了他，但等待的時間已經過去。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She remembers youthful promises to reunite once they were older.', zh: '她記起年少時約定長大後重聚的承諾。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He never came back in time, and she could not wait forever.', zh: '他沒有及時回來，而她不能永遠等下去。' } },
    ],
    echoes: [
      { ref: 'folklore/cardigan', note: { en: 'A love story with Peter Pan imagery, four years earlier.', zh: '四年前，另一個帶有《小飛俠》意象的愛情故事。' } },
      { ref: 'speak-now/never-grow-up', note: { en: 'Growing up, and the people who refuse to.', zh: '長大，以及那些拒絕長大的人。' } },
    ],
  },
  {
    slug: 'the-bolter', title: 'The Bolter', track: 29, section: 'anthology',
    writers: TA,
    overview: {
      en: 'An upbeat character sketch of a woman who always runs away from relationships before they can trap her.',
      zh: '一幅輕快的人物素描：一位總在感情把她困住之前逃走的女子。',
    },
    story: {
      en: '"The Bolter" is a nickname used in Nancy Mitford’s novels for a woman who keeps leaving her marriages. Swift’s narrator recognises herself in this figure: from childhood, she has needed an escape route.\n\nThe song treats her restlessness with sympathy and humour rather than judgement.',
      zh: '「The Bolter」是 Nancy Mitford 小說中的綽號，指一位不斷離開婚姻的女子。Swift 的敘述者在這個人物身上看見自己：從小開始，她就需要一條逃生路線。\n\n這首歌以同情和幽默看待她的不安，而非加以批判。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Each time she feels trapped, she leaves.', zh: '每當她感到被困，便會離開。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Running away is how she survives, even if others do not understand.', zh: '逃走是她生存的方式，即使別人不明白。' } },
    ],
    echoes: [
      { ref: 'folklore/the-last-great-american-dynasty', note: { en: 'Another portrait of a woman who refuses to behave as expected.', zh: '另一幅拒絕循規蹈矩的女子肖像。' } },
    ],
  },
  {
    slug: 'robin', title: 'Robin', track: 30, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A lullaby-like song addressed to a child, hoping to protect their innocence from the harder world ahead.',
      zh: '一首如搖籃曲般的歌，向一個孩子說話，盼望保護他的天真，免受未來艱難世界的傷害。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "Robin" is one of the gentlest songs Swift has made. The narrator watches a child play and wants to keep the world’s darkness away from them for as long as possible.\n\nAmong songs of heartbreak and anger, it is a moment of pure care.',
      zh: '〈Robin〉與 [[Aaron Dessner]] 合寫，是 Swift 最溫柔的作品之一。敘述者看着一個孩子玩耍，希望盡可能長久地讓世界的黑暗遠離他。\n\n在一眾心碎與憤怒的歌之中，這是一段純粹關懷的時刻。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'A child plays happily, unaware of what the world can be like.', zh: '一個孩子快樂地玩耍，不知道世界可以是怎樣。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She promises to shield that innocence as long as she can.', zh: '她承諾盡力守護那份天真。' } },
    ],
    echoes: [
      { ref: 'speak-now/never-grow-up', note: { en: 'Wishing a child could stay young and safe.', zh: '盼望孩子能永遠年輕而安全。' } },
    ],
  },
  {
    slug: 'the-manuscript', title: 'The Manuscript', track: 31, section: 'anthology',
    writers: ['Taylor Swift'],
    overview: {
      en: 'The final song of the Anthology, written by Swift alone: rereading the story of an old relationship and finally letting it go.',
      zh: '《The Anthology》的最後一首，由 Swift 獨自寫成：重讀一段舊情的故事，終於把它放下。',
    },
    story: {
      en: 'The narrator looks back at a relationship from her youth with someone older, and at how she later turned it into writing. Many listeners connected it to the story behind "All Too Well".\n\nThe song suggests that writing is how she survives: once a story has been written and shared, it no longer holds the same power over her.',
      zh: '敘述者回望年輕時與一位年長者的感情，以及她後來如何把它化為文字。許多聽眾把它與〈All Too Well〉背後的故事連繫起來。\n\n這首歌暗示，寫作是她生存的方式：一個故事一旦寫下並與人分享，便不再以同樣的力量支配她。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Memories of a youthful romance, now reread with adult eyes.', zh: '一段年少戀情的回憶，如今以成年人的眼光重讀。' } },
      { part: { en: 'Ending', zh: '結尾' }, meaning: { en: 'Writing becomes the way she finally lets the past go.', zh: '寫作成為她最終放下過去的方式。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'Often linked by listeners: the same story, at the end of the journey.', zh: '常被聽眾相提並論：同一個故事，走到旅程的終點。' } },
      { ref: 'midnights/wouldve-couldve-shouldve', note: { en: 'Another adult look back at being too young.', zh: '另一次以成年人眼光回看當年的年輕。' } },
    ],
  },
];
