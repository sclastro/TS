import type { Song } from '../types';

// The Tortured Poets Department（2024）：第 9–16 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];
const TA = ['Taylor Swift', 'Aaron Dessner'];

export const part2: Song[] = [
  {
    slug: 'guilty-as-sin', title: 'Guilty as Sin?', track: 9, section: 'standard',
    writers: TJ,
    overview: {
      en: 'A soft-rock song about fantasising so intensely about someone that the thought itself feels like a sin.',
      zh: '一首軟搖滾歌曲，寫對某人的幻想強烈得令念頭本身也像一種罪。',
    },
    story: {
      en: 'The narrator has not acted on her feelings, but she cannot stop imagining. She uses religious language of guilt and judgement, then asks whether imagining is really a crime.\n\nThe sound recalls 1980s soft rock, with warm guitars and a gentle beat.',
      zh: '敘述者沒有把感情付諸行動，卻無法停止想像。她運用罪疚與審判的宗教語言，然後反問：想像真的算是罪嗎？\n\n曲風令人想起八十年代的軟搖滾，帶溫暖的結他和柔和的節拍。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Daydreams about someone she should not be thinking about.', zh: '對一個她不應想着的人的白日夢。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks whether thoughts alone can make her guilty.', zh: '她問：單憑念頭，就能令她有罪嗎？' } },
    ],
    echoes: [
      { ref: 'midnights/question', note: { en: 'Love expressed as a string of questions.', zh: '以一連串問題表達的愛。' } },
      { ref: 'reputation/dress', note: { en: 'Longing as something secret and almost forbidden.', zh: '渴望是秘密而近乎被禁止的事。' } },
    ],
  },
  {
    slug: 'whos-afraid-of-little-old-me', title: 'Who’s Afraid of Little Old Me?', track: 10, section: 'standard',
    writers: ['Taylor Swift'],
    overview: {
      en: 'A furious, theatrical song written by Swift alone, about being treated as a dangerous creature after being caged and mistreated.',
      zh: '一首由 Swift 獨自寫成、憤怒而富戲劇性的歌，寫一個被囚禁和虐待之後、反被視為危險生物的人。',
    },
    story: {
      en: 'The song imagines the narrator as a captive, trained and displayed for others’ entertainment, who is then feared for becoming wild. It can be read as a comment on fame and how the public reacts when a famous woman shows anger.\n\nOn the Eras Tour it became one of the most dramatic moments of the TTPD set, with Swift performing inside a cage-like structure.',
      zh: '這首歌把敘述者想像成一個被囚禁、被訓練、被展示以娛樂他人的俘虜，然後因變得狂野而被人畏懼。它可以理解為對名氣的評論，以及公眾如何回應一位表達憤怒的著名女性。\n\n在 Eras Tour 上，它成為 TTPD 環節最具戲劇性的時刻之一，Swift 在一個籠狀裝置內演出。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She was raised and trained to perform, and then blamed for what that did to her.', zh: '她被培養、訓練去表演，然後因這一切對她造成的影響而被責怪。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'With biting irony she asks why anyone would fear someone so small.', zh: '她以尖刻的反諷問：為何會有人害怕一個如此渺小的人？' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Anger at being mistreated by the public, seven years later.', zh: '七年後，再一次對被公眾虧待感到憤怒。' } },
      { ref: 'folklore/mad-woman', note: { en: 'A woman called mad for reacting to cruelty.', zh: '一個因回應殘酷而被稱為瘋子的女人。' } },
    ],
  },
  {
    slug: 'i-can-fix-him-no-really-i-can', title: 'I Can Fix Him (No Really I Can)', track: 11, section: 'standard',
    writers: TJ,
    overview: {
      en: 'A sparse, Western-tinged song about a narrator convinced she can tame a dangerous man, with a final twist.',
      zh: '一首帶西部色彩的簡約歌曲：敘述者深信自己能馴服一個危險男人，最後卻有轉折。',
    },
    story: {
      en: 'Over a quiet, almost whispered arrangement, the narrator insists that only she understands this rough, troubled man and can change him.\n\nIn the final line she abruptly admits she probably cannot. The joke lands because she has spent the song trying to convince herself.',
      zh: '在安靜、近乎耳語的編曲上，敘述者堅持只有她明白這個粗獷、問題重重的男人，並能改變他。\n\n到最後一句，她突然承認自己大概做不到。笑點之所以奏效，正因為她整首歌都在說服自己。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Everyone warns her about him; she believes she sees his good side.', zh: '所有人都警告她；她卻相信自己看見他好的一面。' } },
      { part: { en: 'Ending', zh: '結尾' }, meaning: { en: 'A sudden, self-aware admission that she was wrong.', zh: '一句突如其來、自知之明的承認：她錯了。' } },
    ],
    echoes: [
      { ref: 'speak-now/dear-john', note: { en: 'Believing she could be the one to change him, many years earlier.', zh: '多年前，同樣相信自己能改變他。' } },
    ],
  },
  {
    slug: 'loml', title: 'loml', track: 12, section: 'standard',
    writers: TA,
    overview: {
      en: 'A devastating piano ballad whose title flips from "love of my life" to "loss of my life".',
      zh: '一首令人心碎的鋼琴抒情歌，歌名由「一生摯愛」（love of my life）翻轉成「一生之失」（loss of my life）。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "loml" is built on bare piano and Swift’s close, quiet voice. The narrator believed a reunion meant forever, only to be let down again.\n\nThe abbreviation in the title is the song’s central trick: the same letters can describe both the greatest love and the greatest loss.',
      zh: '〈loml〉與 [[Aaron Dessner]] 合寫，只以鋼琴和 Swift 貼近而輕聲的歌聲構成。敘述者以為一次重聚代表永遠，結果再一次失望。\n\n歌名的縮寫是全曲的關鍵巧思：同樣的字母，既可以指最深的愛，亦可以指最大的失去。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He returned with grand promises, and she believed him.', zh: '他帶着宏大的承諾回來，而她相信了。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'What she called the love of her life turned out to be the loss of it.', zh: '她口中的一生摯愛，原來是一生之失。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'Another quiet, precise account of being let down.', zh: '另一段安靜而精確地記述失望的歌。' } },
      { ref: 'folklore/my-tears-ricochet', note: { en: 'Grief for something once sacred.', zh: '為曾經神聖之物而哀悼。' } },
    ],
  },
  {
    slug: 'i-can-do-it-with-a-broken-heart', title: 'I Can Do It With a Broken Heart', track: 13, section: 'standard',
    writers: TJ,
    overview: {
      en: 'A glittering, upbeat pop song about performing brilliantly while privately falling apart.',
      zh: '一首閃亮輕快的流行曲，寫在台上表現出色，私下卻正在崩潰。',
    },
    story: {
      en: 'The song is widely read as being about the Eras Tour itself: smiling and dancing for huge crowds while going through heartbreak. The cheerful sound contrasts deliberately with the darkness of the words.\n\nOn tour Swift staged it as a showbiz routine, with dancers lifting her and a sudden pause that turned the irony into theatre.',
      zh: '這首歌普遍被理解為寫 Eras Tour 本身：在龐大的觀眾面前微笑跳舞，私下卻經歷心碎。歡快的曲調刻意與歌詞的陰暗形成對比。\n\n在巡演中，Swift 把它演繹成一段歌舞劇式表演，舞者把她舉起，並有一個突然的停頓，把反諷化為戲劇。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She is so good at pretending to be happy that no one notices.', zh: '她太擅長假裝快樂，以致無人察覺。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She proudly declares she can keep performing while heartbroken, because she is a professional.', zh: '她自豪地宣告：即使心碎，她仍能繼續表演，因為她是專業的。' } },
    ],
    echoes: [
      { ref: 'folklore/mirrorball', note: { en: 'Shining for the crowd while privately breaking.', zh: '為觀眾閃耀，私下卻碎裂。' } },
      { ref: 'midnights/anti-hero', note: { en: 'Self-mocking honesty about her own struggles.', zh: '以自嘲的坦誠面對自己的掙扎。' } },
    ],
  },
  {
    slug: 'the-smallest-man-who-ever-lived', title: 'The Smallest Man Who Ever Lived', track: 14, section: 'standard',
    writers: TA,
    overview: {
      en: 'A scorching song of contempt for someone who promised everything and then disappeared.',
      zh: '一首充滿鄙視、灼熱的歌，針對一個許下一切承諾然後消失的人。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], the song moves from confusion to fury. The narrator cannot understand how someone could pursue her so intensely and then vanish without explanation.\n\nThe title sums up her final judgement: his behaviour made him small.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，由困惑走向憤怒。敘述者無法理解，一個人怎能如此熱烈地追求她，然後毫無解釋地消失。\n\n歌名概括了她最終的判斷：他的所作所為，令他變得渺小。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She asks why he made such grand promises if he never meant them.', zh: '她問：既然無意兌現，他為何許下如此宏大的承諾？' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Her anger peaks as she refuses to forgive or forget.', zh: '她拒絕原諒或遺忘，憤怒達到頂點。' } },
    ],
    echoes: [
      { ref: 'speak-now/dear-john', note: { en: 'An earlier direct address to someone who hurt her.', zh: '更早一次直接向傷害她的人說話。' } },
      { ref: 'folklore/illicit-affairs', note: { en: 'A bridge that erupts with anger.', zh: '一段爆發憤怒的橋段。' } },
    ],
  },
  {
    slug: 'the-alchemy', title: 'The Alchemy', track: 15, section: 'standard',
    writers: TJ,
    overview: {
      en: 'A warm, hopeful love song full of sports imagery: a new relationship that feels like a winning team.',
      zh: '一首溫暖而充滿希望的情歌，滿是體育意象：一段新戀情，就像一支勝利的球隊。',
    },
    story: {
      en: 'After the album’s heartbreak, "The Alchemy" turns towards a healthier love. It uses the language of games, teams and championships, which many listeners connected to Swift’s relationship with the American football player [[Travis Kelce]].\n\nAlchemy, the old art of turning ordinary metal into gold, becomes a metaphor for chemistry between two people.',
      zh: '在專輯的心碎之後，〈The Alchemy〉轉向一段更健康的愛。它運用比賽、球隊和冠軍的語言，許多聽眾把它與 Swift 和美式足球員 [[Travis Kelce]] 的戀情連繫起來。\n\n「煉金術」是把普通金屬變成黃金的古老技藝，在這裏成為兩人之間化學作用的比喻。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'After a long losing streak in love, she finds herself back in the game.', zh: '在愛情中長期失利後，她重新投入比賽。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Their chemistry turns something ordinary into gold.', zh: '他們之間的化學作用，把平凡變成黃金。' } },
    ],
    echoes: [
      { ref: 'reputation/end-game', note: { en: 'Love described as a game she intends to win.', zh: '把愛描寫成她決心要贏的遊戲。' } },
    ],
  },
  {
    slug: 'clara-bow', title: 'Clara Bow', track: 16, section: 'standard',
    writers: TA,
    overview: {
      en: 'The closing track of the standard edition: a sharp look at how the entertainment industry builds up young women, then replaces them.',
      zh: '標準版的終曲：尖銳地審視娛樂業如何捧紅年輕女性，然後把她們取代。',
    },
    story: {
      en: 'Clara Bow was a silent-film star of the 1920s, the original "It girl", whose fame burned briefly. In the song, industry figures compare a new young woman to famous stars of the past, including [[Stevie Nicks]], and finally to Swift herself.\n\nThe ending implies that one day someone new will be compared to Swift, and the cycle will continue.',
      zh: 'Clara Bow 是 1920 年代的默片明星，最早的「It girl」，名氣短暫燃燒。在歌中，業界人士把一位新晉年輕女子與昔日的著名明星相比，包括 [[Stevie Nicks]]，最後是 Swift 本人。\n\n結尾暗示：有一天，會有新人被拿來與 Swift 比較，這個循環會繼續下去。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A young woman is discovered and flattered with comparisons to legends.', zh: '一位年輕女子被發掘，並被拿來與傳奇人物比較，受盡奉承。' } },
      { part: { en: 'Outro', zh: '尾聲' }, meaning: { en: 'The comparison turns to Swift: she, too, will become someone else’s reference point.', zh: '比較的對象轉為 Swift：她也會成為別人的參照。' } },
    ],
    echoes: [
      { ref: 'speak-now/long-live', note: { en: 'Fame celebrated in 2010, now examined with suspicion.', zh: '2010 年歌頌名氣，如今以懷疑的眼光審視。' } },
      { ref: 'lover/the-man', note: { en: 'Another critique of how the industry treats women.', zh: '另一次批評業界如何對待女性。' } },
    ],
  },
];
