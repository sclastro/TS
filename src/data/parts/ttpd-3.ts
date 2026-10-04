import type { Song } from '../types';

// The Tortured Poets Department: The Anthology：第 17–24 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];
const TA = ['Taylor Swift', 'Aaron Dessner'];

export const part3: Song[] = [
  {
    slug: 'the-black-dog', title: 'The Black Dog', track: 17, section: 'anthology',
    writers: ['Taylor Swift'],
    overview: {
      en: 'The first Anthology song, written by Swift alone: discovering that an ex still shares his location with her, and following him in her mind to a pub.',
      zh: '《The Anthology》的第一首，由 Swift 獨自寫成：發現前度仍與她共享位置，在腦海中跟隨他走進一間酒館。',
    },
    context: {
      en: 'At 2 a.m. on release day, Swift revealed that TTPD was a secret double album. The fifteen extra songs, mostly made with [[Aaron Dessner]], are quieter and more literary, and include some of the album’s most admired writing.',
      zh: '推出當日凌晨兩時，Swift 揭曉 TTPD 原來是一張秘密雙專輯。額外的十五首歌大多與 [[Aaron Dessner]] 合作，風格更安靜、更具文學性，其中包括全輯最受推崇的一些作品。',
    },
    story: {
      en: 'The title is the name of a pub. A small modern detail, a phone that still shows where someone is, opens a huge wound: he has moved on so easily that he forgot to stop sharing.\n\nThe song builds from a whisper to a raw, almost shouted climax.',
      zh: '歌名是一間酒館的名字。一個細小的現代細節——手機仍然顯示某人身處何方——揭開一道巨大的傷口：他輕易放下，連停止共享位置也忘了。\n\n歌曲由耳語推向一個近乎嘶喊、毫無保留的高潮。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She sees on her phone where he is and imagines the scene there.', zh: '她在手機上看見他在哪裏，並想像那裏的情景。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Pain turns to fury that he could forget her so quickly.', zh: '痛苦化為憤怒：他竟能如此迅速忘記她。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'A small object or detail that carries a whole relationship.', zh: '一件小物或一個細節，承載整段感情。' } },
    ],
  },
  {
    slug: 'imgonnagetyouback', title: 'imgonnagetyouback', track: 18, section: 'anthology',
    writers: TJ,
    overview: {
      en: 'A playful, ambiguous song: the narrator is not sure whether she wants to win her ex back or get back at him.',
      zh: '一首俏皮而含糊的歌：敘述者不確定自己是想贏回前度，還是要向他報復。',
    },
    story: {
      en: 'The title, written as one word, holds two meanings, and the song plays with both. The tone is light and teasing, with a catchy, rhythmic hook.\n\nIt shows Swift enjoying the confusion of a breakup rather than only suffering it.',
      zh: '歌名寫成一個字，同時包含兩個意思，歌曲亦玩味兩者。語氣輕鬆而帶挑逗，配上琅琅上口的節奏旋律。\n\n它顯示 Swift 在分手的混亂中尋找樂趣，而不只是承受痛苦。',
    },
    lyrics: [
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She swings between wanting him back and wanting revenge.', zh: '她在想挽回他與想報復之間搖擺。' } },
    ],
    echoes: [
      { ref: 'midnights/karma', note: { en: 'Playful revenge without real cruelty.', zh: '不帶真正殘酷的俏皮報復。' } },
    ],
  },
  {
    slug: 'the-albatross', title: 'The Albatross', track: 19, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A dark, mythical song in which the narrator is described as an omen of bad luck, a dangerous bird to be avoided.',
      zh: '一首陰暗而帶神話色彩的歌，敘述者被描述為厄運的預兆：一隻應當避開的危險之鳥。',
    },
    story: {
      en: 'In sailors’ folklore, the albatross is a symbol of fate and burden, made famous by Coleridge’s poem The Rime of the Ancient Mariner. Swift turns the image around: others call her dangerous, but the danger is mostly to those who wronged her.\n\nThe strings and slow tempo give it a gothic, cinematic feel.',
      zh: '在水手的民間傳說中，信天翁是命運與重擔的象徵，因 Coleridge 的詩作《古舟子詠》而聞名。Swift 把這個意象倒轉：別人說她危險，但危險主要針對那些虧待她的人。\n\n弦樂和緩慢的節奏，令它帶有哥德式的電影感。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'People warn others to keep away from her, as if she brings misfortune.', zh: '人們警告別人遠離她，彷彿她會帶來不幸。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She accepts the image but claims its power for herself.', zh: '她接受這個形象，卻把它的力量據為己有。' } },
    ],
    echoes: [
      { ref: 'reputation/i-did-something-bad', note: { en: 'Embracing the villain label others gave her.', zh: '擁抱別人加在她身上的「壞人」標籤。' } },
      { ref: 'folklore/mad-woman', note: { en: 'Turning an insult into strength.', zh: '把侮辱化為力量。' } },
    ],
  },
  {
    slug: 'chloe-or-sam-or-sophia-or-marcus', title: 'Chloe or Sam or Sophia or Marcus', track: 20, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A gentle, regretful song about watching someone move on with a new person, whoever that person may be.',
      zh: '一首溫柔而惋惜的歌，看着某人與新的對象展開新生活——無論那人是誰。',
    },
    story: {
      en: 'The title lists several possible names, suggesting it does not matter who the new partner is. What matters is that the narrator was not enough, or did not get the chance.\n\nThe arrangement is soft and spacious, letting the regret sink in.',
      zh: '歌名列出幾個可能的名字，暗示新伴侶是誰並不重要。重要的是，敘述者不夠好，或者沒有得到機會。\n\n編曲柔和而空曠，讓惋惜慢慢沉澱。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She sees him with someone new and wonders what might have been.', zh: '她看見他與新的人在一起，想着本來可能會怎樣。' } },
    ],
    echoes: [
      { ref: 'folklore/the-1', note: { en: 'Imagining a different outcome, without bitterness.', zh: '不帶苦澀地想像另一種結局。' } },
    ],
  },
  {
    slug: 'how-did-it-end', title: 'How Did It End?', track: 21, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A sharp song about the public’s hunger for gossip after a relationship ends, framed as a post-mortem.',
      zh: '一首尖銳的歌，以「驗屍」為框架，寫一段感情結束後公眾對八卦的渴求。',
    },
    story: {
      en: 'The narrator imagines people gathering to examine the death of the relationship, as if at an autopsy. Everyone wants details; she herself is still trying to understand.\n\nThe repeated question of the title becomes both the public’s nosy demand and her own sincere confusion.',
      zh: '敘述者想像人們聚集起來檢驗這段感情的「死因」，猶如一場驗屍。每個人都想知道細節，而她自己仍在努力理解。\n\n歌名中反覆出現的問題，既是公眾好事的追問，亦是她自己真誠的困惑。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Gossip spreads as people compete to find out what happened.', zh: '閒話傳開，人人爭相打聽發生了甚麼事。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She too asks the question, and has no clear answer.', zh: '她也在問同一個問題，卻沒有清晰的答案。' } },
    ],
    echoes: [
      { ref: 'evermore/champagne-problems', note: { en: 'A breakup turned into town gossip.', zh: '一段分手變成小鎮的閒話。' } },
    ],
  },
  {
    slug: 'so-high-school', title: 'So High School', track: 22, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A giddy, guitar-driven love song about a new relationship that makes her feel like a teenager again.',
      zh: '一首由結他推動、雀躍不已的情歌，寫一段令她彷彿重返少年時代的新戀情。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], the song has a bright 1990s alt-rock sound. The narrator, now an adult, finds herself acting like a lovestruck high-school student.\n\nIt is widely linked to her relationship with [[Travis Kelce]], and stands as one of the album’s happiest moments.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，帶着明亮的九十年代另類搖滾聲音。已成年的敘述者，發現自己像一個戀愛中的高中生。\n\n這首歌普遍被連繫到她與 [[Travis Kelce]] 的戀情，是專輯中最快樂的時刻之一。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Simple, youthful moments together make her feel young.', zh: '共處時簡單而年輕的片段，令她感到年輕。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The love is so giddy it feels like being sixteen again.', zh: '這份愛令人飄飄然，彷彿重回十六歲。' } },
    ],
    echoes: [
      { ref: 'fearless/fifteen', note: { en: 'Teenage romance, recalled from adulthood with joy rather than caution.', zh: '少年戀愛：從成年回望，這次是喜悅而非警惕。' } },
      { ref: 'the-tortured-poets-department/the-alchemy', note: { en: 'The same new love, from another angle.', zh: '同一段新戀情，從另一個角度看。' } },
    ],
  },
  {
    slug: 'i-hate-it-here', title: 'I Hate It Here', track: 23, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A quiet song about escaping an unbearable present into imaginary worlds and idealised pasts.',
      zh: '一首安靜的歌，寫從難以忍受的當下，逃進想像世界和被美化的過去。',
    },
    story: {
      en: 'The narrator describes how, as a child and still as an adult, she copes by inventing secret gardens and better eras in her head. She also admits that romanticising the past can be misleading.\n\nThe song gently questions the nostalgia that runs through much of her music.',
      zh: '敘述者描述自己從小到大，都靠在腦海中創造秘密花園和更美好的年代來應付現實。她亦承認，把過去浪漫化可能會誤導人。\n\n這首歌溫和地質疑貫穿她許多作品的懷舊情懷。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She retreats into imagined worlds when reality feels too hard.', zh: '現實太難時，她便退入想像的世界。' } },
    ],
    echoes: [
      { ref: 'folklore/seven', note: { en: 'A child escaping into imagination.', zh: '一個逃進想像世界的孩子。' } },
    ],
  },
  {
    slug: 'thank-you-aimee', title: 'thanK you aIMee', track: 24, section: 'anthology',
    writers: TA,
    overview: {
      en: 'A sarcastic "thank you" to a childhood bully named Aimee, whose cruelty pushed the narrator to succeed.',
      zh: '一封諷刺的「感謝信」，寫給名叫 Aimee 的童年欺凌者：她的殘酷反而驅使敘述者成功。',
    },
    story: {
      en: 'The song tells of a girl in a small town who mocked the narrator relentlessly. Years later, the narrator has become successful and thanks her, with heavy irony.\n\nListeners noticed that the capitalised letters in the title spell a name linked to a long-running public feud. Swift has not commented on this.',
      zh: '這首歌講述小鎮上一個不停嘲笑敘述者的女孩。多年後，敘述者已經成功，並以濃厚的反諷向她道謝。\n\n聽眾發現歌名中的大楷字母拼出一個與一段長期公開恩怨有關的名字。Swift 沒有就此作出回應。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Memories of being belittled again and again.', zh: '一次又一次被貶低的回憶。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She thanks her tormentor, because the pain became fuel.', zh: '她向折磨她的人道謝，因為痛苦成了動力。' } },
    ],
    echoes: [
      { ref: 'speak-now/mean', note: { en: 'Answering bullies with success, fourteen years earlier.', zh: '十四年前，同樣以成功回應欺凌者。' } },
    ],
  },
];
