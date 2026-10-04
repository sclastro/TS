import type { Song } from '../types';

// The Life of a Showgirl（2025）：第 7–12 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TMS = ['Taylor Swift', 'Max Martin', 'Shellback'];

export const part2: Song[] = [
  {
    slug: 'actually-romantic', title: 'Actually Romantic', track: 7, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A short, breezy song that answers someone’s public dislike with amused gratitude: all that attention is almost flattering.',
      zh: '一首輕快短小的歌，以帶笑的感激回應某人公開的厭惡：那麼多的關注，幾乎令人受寵若驚。',
    },
    story: {
      en: 'The narrator learns that someone has been criticising her and thinking about her constantly. Instead of fighting back, she treats it as a kind of devotion, and thanks them sweetly.\n\nThe tone is playful rather than bitter, showing a calmer response to conflict than in earlier eras.',
      zh: '敘述者得知有人一直批評她、不斷想着她。她沒有反擊，反而把它當作一種「傾慕」，甜甜地道謝。\n\n語氣俏皮而非苦澀，顯示她比起早年更從容地面對衝突。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She hears about the criticism and is more amused than hurt.', zh: '她聽聞那些批評，與其說受傷，不如說覺得好笑。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'So much attention, she says, is actually rather romantic.', zh: '她說，這麼多的關注，其實挺浪漫的。' } },
    ],
    echoes: [
      { ref: 'reputation/this-is-why-we-cant-have-nice-things', note: { en: 'Sarcasm towards critics, now far lighter.', zh: '對批評者的諷刺，如今輕鬆得多。' } },
      { ref: '1989/shake-it-off', note: { en: 'Letting criticism bounce off with a smile.', zh: '一笑置之，讓批評彈開。' } },
    ],
  },
  {
    slug: 'wish-list', title: 'Wi$h Li$t', track: 8, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A warm song that contrasts other people’s glamorous ambitions with the narrator’s simple wish: a quiet life with the person she loves.',
      zh: '一首溫暖的歌，把別人的奢華抱負，與敘述者簡單的心願對比：與所愛的人過安靜的生活。',
    },
    story: {
      en: 'The dollar signs in the title point to the wealth and status that others chase. The narrator lists what people seem to want, and does not judge them, but her own list is short and domestic.\n\nIt is a contented song from an artist who has achieved almost everything professionally and now values privacy and home most.',
      zh: '歌名中的金錢符號，指向別人追逐的財富與地位。敘述者列出人們似乎想要的東西，並不加以批判，但她自己的清單簡短而居家。\n\n這是一首知足的歌，出自一位在事業上幾乎已得到一切、如今最珍惜私隱與家庭的藝人。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Other people want fame, money and luxury, and that is their choice.', zh: '別人想要名氣、金錢與奢華，那是他們的選擇。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'All she wants is a home and a future with him.', zh: '她只想要一個家，以及與他共同的未來。' } },
    ],
    echoes: [
      { ref: 'midnights/sweet-nothing', note: { en: 'Valuing the simple over the spectacular.', zh: '珍惜平凡多於耀眼。' } },
      { ref: 'folklore/peace', note: { en: 'Wondering whether a quiet life is possible; here, she chooses it.', zh: '曾經懷疑安靜的生活是否可能；這一次，她選擇了它。' } },
    ],
  },
  {
    slug: 'wood', title: 'Wood', track: 9, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A cheeky, funky love song built on superstitions, lucky charms and a good deal of double meaning.',
      zh: '一首調皮而帶放克節奏的情歌，建基於迷信、幸運符，以及大量雙關語。',
    },
    story: {
      en: 'Swift described it as a love story that uses popular superstitions as a plot device: knocking on wood, black cats, lucky and unlucky charms. The narrator realises she no longer needs luck to keep her happiness safe.\n\nThe song is full of playful innuendo, and Swift joked in interviews about her mother’s reaction to it.',
      zh: 'Swift 形容這是一個以流行迷信作為情節工具的愛情故事：敲木頭、黑貓、各種幸運符與不祥之兆。敘述者發現，她不再需要靠運氣去守護自己的幸福。\n\n歌曲充滿俏皮的弦外之音，Swift 亦在訪問中笑談母親對這首歌的反應。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She used to rely on charms and rituals to avoid bad luck in love.', zh: '她從前依賴幸運符和儀式，避免在愛情中遭逢厄運。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Now she is confident enough that superstition is no longer needed.', zh: '如今她信心十足，不再需要迷信。' } },
    ],
    echoes: [
      { ref: 'reputation/gorgeous', note: { en: 'Flirtatious, teasing pop with a wink.', zh: '帶着眨眼示意的調情流行曲。' } },
    ],
  },
  {
    slug: 'cancelled', title: 'CANCELLED!', track: 10, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A defiant, darkly funny song about loyalty to friends who have been "cancelled" by the internet.',
      zh: '一首叛逆而帶黑色幽默的歌，寫對被網絡「取消」的朋友不離不棄。',
    },
    story: {
      en: 'The song satirises how quickly online crowds condemn people, especially women. The narrator, who knows what it is like to be publicly torn down, promises to stand by her friends when it happens to them.\n\nShe also hopes the experience will make them tougher and wiser, as it made her.',
      zh: '這首歌諷刺網上群眾如何迅速定罪，尤其針對女性。敘述者深知被公開打倒的滋味，承諾當朋友遭遇同樣處境時，會站在他們身旁。\n\n她亦希望這段經歷能令他們更堅強、更有智慧，正如它曾令她成長一樣。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'The crowd has already decided someone’s fate before hearing the full story.', zh: '在聽完整個故事之前，群眾已經判定了某人的命運。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She welcomes the cancelled into her circle of loyal friends.', zh: '她把被「取消」的人迎進她忠誠的朋友圈。' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Her own experience of being publicly cancelled in 2016–17.', zh: '她自己在 2016 至 2017 年被公開「取消」的經歷。' } },
      { ref: 'the-tortured-poets-department/cassandra', note: { en: 'The same events, retold as myth a year earlier.', zh: '一年前，同一段經歷被重述為神話。' } },
    ],
  },
  {
    slug: 'honey', title: 'Honey', track: 11, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A sweet song about a word once used to belittle her, now spoken with real affection.',
      zh: '一首甜美的歌，寫一個曾被用來貶低她的稱呼，如今以真摯的愛意說出。',
    },
    story: {
      en: 'Swift explained that "Honey" is about how words meant to hurt you in the past can be reclaimed by someone who loves you, so that they feel completely different. A term of endearment that once sounded condescending now sounds warm.\n\nThe song closes the album’s run of love songs before the title track.',
      zh: 'Swift 解釋，〈Honey〉寫的是：過去用來傷害你的字眼，可以被一個愛你的人重新賦予意義，令感覺截然不同。一個曾經聽來居高臨下的暱稱，如今聽來溫暖。\n\n這首歌在同名曲之前，為專輯的一連串情歌作結。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She remembers people using sweet names to dismiss her.', zh: '她記得人們曾用甜膩的稱呼來輕視她。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'From him, the same word feels sincere and loving.', zh: '由他口中說出，同一個字眼顯得真誠而充滿愛。' } },
    ],
    echoes: [
      { ref: 'lover/lover', note: { en: 'Simple, sincere domestic love.', zh: '簡單而真摯的居家之愛。' } },
    ],
  },
  {
    slug: 'the-life-of-a-showgirl', title: 'The Life of a Showgirl', track: 12, section: 'standard', feat: 'Sabrina Carpenter',
    writers: TMS, producers: TMS,
    overview: {
      en: 'The title track and closer, with Sabrina Carpenter: a young girl meets a veteran showgirl who warns her about the hard life behind the sparkle.',
      zh: '同名曲兼終曲，與 Sabrina Carpenter 合唱：一個小女孩遇上一位資深歌舞女郎，被告誡亮片背後的艱苦生活。',
    },
    story: {
      en: '[[Sabrina Carpenter]], who opened for Swift on the Eras Tour, sings with her. The song tells the story of a girl who idolises a showgirl and is warned that the life is lonely, exhausting and harsh. She chooses it anyway.\n\nIt works as a summary of Swift’s whole career, and as a passing of the torch to the next generation of performers.',
      zh: '曾在 Eras Tour 擔任開場嘉賓的 [[Sabrina Carpenter]] 與她合唱。這首歌講述一個崇拜歌舞女郎的女孩，被告誡這種生活孤獨、疲累而殘酷；她仍然選擇了它。\n\n它既是 Swift 整個事業的總結，亦是把火炬傳給下一代表演者。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A young girl watches a showgirl and dreams of being like her.', zh: '一個小女孩看着一位歌舞女郎，夢想成為她那樣的人。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The showgirl warns her: the glamour hides pain and sacrifice.', zh: '歌舞女郎警告她：華麗背後藏着痛苦與犧牲。' } },
      { part: { en: 'Final chorus', zh: '最後副歌' }, meaning: { en: 'Knowing the cost, the girl still chooses the stage.', zh: '明知代價，女孩仍然選擇舞台。' } },
    ],
    echoes: [
      { ref: 'the-tortured-poets-department/clara-bow', note: { en: 'The cycle of stars and newcomers, told again with more warmth.', zh: '明星與新人的循環，以更溫暖的方式再說一次。' } },
      { ref: 'the-tortured-poets-department/i-can-do-it-with-a-broken-heart', note: { en: 'The cost of performing, seen from inside the tour.', zh: '從巡演內部看表演的代價。' } },
      { ref: 'speak-now/long-live', note: { en: 'Thanking those who shared the stage, fifteen years on.', zh: '十五年後，再次感謝共享舞台的人。' } },
    ],
  },
];
