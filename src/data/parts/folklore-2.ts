import type { Song } from '../types';

// folklore（2020）：第 10–17 首
const AD = ['Taylor Swift', 'Aaron Dessner'];
const JA = ['Taylor Swift', 'Jack Antonoff'];

export const part2: Song[] = [
  {
    slug: 'illicit-affairs', title: 'illicit affairs', track: 10, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'An affair seen from the inside: the secrecy, the excuses, and how something that began as magic turns cheap and painful.',
      zh: '從內部觀看一段婚外情：秘密、藉口，以及一份起初像魔法的東西如何變得廉價而痛苦。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "illicit affairs" is one of the fictional character studies of folklore. It describes the small, practical lies an affair requires, and how the romance slowly curdles.\n\nThe song builds from a quiet guitar to a furious bridge, in which the narrator lashes out at the person who made her feel both special and worthless.',
      zh: '〈illicit affairs〉與 [[Jack Antonoff]] 合寫，是《folklore》中虛構人物描寫之一。它描述一段婚外情需要的細小、實際的謊言，以及浪漫如何慢慢變質。\n\n歌曲由安靜的結他累積到憤怒的橋段：敘述者向那個令她既覺得特別、又覺得一文不值的人發洩。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The practical secrecy: leaving separately, wearing disguises, telling small lies to cover tracks.', zh: '實際的保密手段：分開離開、喬裝打扮、說小謊掩飾行蹤。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'What starts as a thrilling secret becomes something shameful and sad.', zh: '一開始刺激的秘密，最終變成羞恥而悲傷的東西。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She explodes: he showed her a world of magic and also made her feel like a fool, and she will never forget either.', zh: '她爆發了：他給她看過一個魔法般的世界，也令她覺得自己像個傻瓜，而兩者她都永遠不會忘記。' } },
    ],
    echoes: [
      { ref: 'folklore/august', note: { en: 'Another folklore character who loves someone she cannot fully have.', zh: '《folklore》中另一個愛着無法完全擁有之人的角色。' } },
      { ref: 'evermore/ivy', note: { en: 'A secret love affair, told more lyrically on the sister album.', zh: '姊妹專輯中，以更詩意的方式寫一段秘密戀情。' } },
    ],
  },
  {
    slug: 'invisible-string', title: 'invisible string', track: 11, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A gentle, fingerpicked song about the hidden thread of fate that led two people to each other, long before they met.',
      zh: '一首以指彈結他寫成的溫柔歌曲，寫一條隱形的命運之線，在兩人相遇之前很久便已把他們牽在一起。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "invisible string" is one of the most openly autobiographical and romantic songs on folklore. Swift traces moments from her past and her partner’s that happened at the same time without either knowing, as if a thread was already tying them together.\n\nThe song also contains a surprising act of grace: she mentions sending gifts to the children of former partners, a sign of how much she has let go of old resentments.',
      zh: '〈invisible string〉與 [[Aaron Dessner]] 合寫，是《folklore》中最明顯取材自她自身、也最浪漫的歌之一。Swift 追溯她和伴侶過去在同一時間各自經歷的片段，兩人當時毫不知情，彷彿早有一條線把他們繫在一起。\n\n歌曲中還有一個令人意外的寬厚舉動：她提到自己會給前度的孩子送禮物，顯示她已放下多少舊日怨恨。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers a specific day in a Nashville park, when her future partner was somewhere far away living his own life.', zh: '她回想在納什維爾一個公園裏的某一天，那時她未來的伴侶正在遙遠的地方過着自己的生活。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She marvels at the idea that an unseen thread was connecting them all along.', zh: '她驚嘆於一個想法：原來一條看不見的線，一直把兩人連在一起。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She reflects that the anger she once felt towards exes has faded, replaced by kindness, because every heartbreak led her here.', zh: '她反思自己曾對前度懷有的怒氣已經消退，取而代之的是善意，因為每一次心碎都把她帶到這裏。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/marys-song-oh-my-my-my', note: { en: 'Two people destined for each other, a fantasy at sixteen and a belief at thirty.', zh: '兩個注定相遇的人：十六歲時是幻想，三十歲時是信念。' } },
      { ref: 'reputation/call-it-what-you-want', note: { en: 'The same private love, three years into it.', zh: '同一份私密的愛，已走過三年。' } },
    ],
  },
  {
    slug: 'mad-woman', title: 'mad woman', track: 12, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A slow, simmering song about the way women’s anger is dismissed as madness, and the fury that comes from being provoked and then blamed.',
      zh: '一首慢慢沸騰的歌，寫女性的憤怒如何被貶為瘋狂，以及被挑釁後又被責怪所生出的怒火。',
    },
    story: {
      en: 'Swift has said "mad woman" is about how female anger is perceived: a woman is pushed and pushed, and when she finally reacts, she is the one called crazy. Written with [[Aaron Dessner]], it uses witch imagery and the language of old folk tales.\n\nMany listeners connected its anger to the sale of her masters, though, like all of folklore, it is written as a story rather than a statement.',
      zh: 'Swift 說〈mad woman〉寫的是女性的憤怒如何被看待：一個女人被一再逼迫，當她終於作出反應時，被稱為瘋子的卻是她。這首歌與 [[Aaron Dessner]] 合寫，借用了女巫的意象和古老民間故事的語言。\n\n不少聽眾把歌中的憤怒聯繫到她母帶被出售一事，但與《folklore》的所有歌曲一樣，它是以故事而不是聲明的形式寫成的。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes being provoked over and over, and the injustice of then being called hysterical.', zh: '她描述自己一再被挑釁，然後卻被說成歇斯底里的不公。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Being labelled irrational for justified anger is, she argues, the most infuriating thing of all.', zh: '她指出，有理有據的憤怒卻被貶為不理性，才是最令人憤怒的事。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Witch-hunt imagery: the town gathered to condemn her, but she is still standing.', zh: '獵巫的意象：小鎮聚集起來審判她，但她仍然屹立。' } },
    ],
    echoes: [
      { ref: 'reputation/i-did-something-bad', note: { en: 'Witch-hunt imagery, turned into defiance three years earlier.', zh: '三年前，獵巫的意象被化為反抗。' } },
      { ref: 'folklore/my-tears-ricochet', note: { en: 'Two folklore songs about betrayal by those who once held power over her.', zh: '兩首寫被曾掌控她的人背叛的《folklore》歌曲。' } },
    ],
  },
  {
    slug: 'epiphany', title: 'epiphany', track: 13, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A hymn-like song that links her grandfather’s war service with the health workers of the pandemic.',
      zh: '一首如聖詩般的歌，把她祖父在戰爭中的經歷，與疫情中的醫護人員聯繫起來。',
    },
    story: {
      en: 'Swift has said "epiphany" was inspired by her grandfather, [[Dean Swift]], who served in the US Marines in the Second World War and fought at Guadalcanal. In the second verse, the song shifts to a doctor or nurse in 2020, holding the hand of a dying patient through a screen.\n\nWritten with [[Aaron Dessner]], the song is slow and spacious, like a prayer for people who have seen things they cannot speak about.',
      zh: 'Swift 說〈epiphany〉的靈感來自她的祖父 [[Dean Swift]]：他在第二次世界大戰時服役於美國海軍陸戰隊，曾參與瓜達爾卡納爾島戰役。第二段主歌轉到 2020 年的一位醫生或護士，隔着屏障握着垂危病人的手。\n\n這首歌與 [[Aaron Dessner]] 合寫，緩慢而空曠，像一篇為那些見過說不出口之事的人而作的禱文。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A young soldier on a beach in the Pacific, surrounded by death and holding on to a fellow soldier.', zh: '一位年輕士兵在太平洋的海灘上，被死亡包圍，緊抓着戰友。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Some things you see cannot be undone; you can only hope for sleep and a moment of peace.', zh: '有些東西一旦看見便無法抹去；你只能盼望能夠入睡，得到片刻安寧。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'A health worker in 2020 stays with a patient in their final moments, the same kind of courage in a different war.', zh: '2020 年的一位醫護人員，陪伴病人走到最後一刻：在另一場戰爭中，同一種勇氣。' } },
    ],
    echoes: [
      { ref: 'evermore/marjorie', note: { en: 'On evermore she writes about her grandmother, Marjorie.', zh: '在《evermore》中，她為祖母 Marjorie 寫了一首歌。' } },
    ],
  },
  {
    slug: 'betty', title: 'betty', track: 14, section: 'standard',
    writers: ['Taylor Swift', 'William Bowery'], producers: ['Taylor Swift', 'Jack Antonoff', 'Aaron Dessner'],
    single: { en: 'Country radio single, August 2020', zh: '鄉村電台單曲，2020 年 8 月' },
    overview: {
      en: 'James’s apology to Betty: the boy’s side of the love triangle, and her most country-sounding song in years.',
      zh: 'James 向 Betty 道歉：三角戀中男孩的一方，也是她多年來最有鄉村味的歌。',
    },
    story: {
      en: 'Written with William Bowery, "betty" is sung by James, a seventeen-year-old who cheated on Betty over the summer and now wants to apologise. With harmonica and a key change near the end, it was a deliberate return to the sound of her early albums.\n\nSwift named the characters after the children of her friends [[Blake Lively]] and [[Ryan Reynolds]], whose daughters are named James, Inez and Betty.',
      zh: '〈betty〉與 William Bowery 合寫，由 James 唱出：這個十七歲男孩在夏天背叛了 Betty，如今想道歉。口琴和接近結尾的轉調，是刻意回歸她早期專輯的聲音。\n\nSwift 以好友 [[Blake Lively]] 和 [[Ryan Reynolds]] 女兒的名字為角色命名：她們分別叫 James、Inez 和 Betty。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'James admits he does not know how to say sorry, and imagines showing up at Betty’s party.', zh: 'James 承認自己不知道怎樣道歉，並想像自己出現在 Betty 的派對上。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He asks whether she would still let him in if he turned up at her door.', zh: '他問如果自己出現在她門前，她是否仍會讓他進來。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'He explains the summer, admits it was a mistake, and the key change lifts the song as he finally goes to her.', zh: '他解釋那個夏天，承認那是一個錯誤；他終於走向她時，轉調把歌曲推上高點。' } },
    ],
    echoes: [
      { ref: 'folklore/cardigan', note: { en: 'Betty’s side, and her prediction that he would come back.', zh: 'Betty 的一方，以及她預言他會回來。' } },
      { ref: 'folklore/august', note: { en: 'The girl he spent the summer with.', zh: '他共度夏天的那個女孩。' } },
      { ref: 'fearless/love-story', note: { en: 'The key change and the hopeful arrival echo her teenage hit.', zh: '轉調與充滿希望的抵達，呼應她少女時期的熱門歌。' } },
    ],
  },
  {
    slug: 'peace', title: 'peace', track: 15, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A quiet, honest love song: she can offer devotion and loyalty, but she may never be able to offer a peaceful life.',
      zh: '一首安靜而坦白的情歌：她可以給予忠誠與奉獻，卻可能永遠無法給予平靜的生活。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "peace" is one of the most mature love songs Swift has written. She lists everything she can give, protection, loyalty, friendship, and admits the one thing she cannot: a life free of the chaos that comes with her fame.\n\nThe arrangement is minimal, almost a single pulsing tone, so the words carry everything.',
      zh: '〈peace〉與 [[Aaron Dessner]] 合寫，是 Swift 寫過最成熟的情歌之一。她列出自己能給予的一切：保護、忠誠、友誼，並承認唯一給不了的東西：一種遠離名氣帶來的混亂的生活。\n\n編曲極簡，近乎只有一個脈動的音，讓歌詞承載一切。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes their life together and the intrusion of the outside world.', zh: '她描述兩人的生活，以及外界的侵擾。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks whether it is enough that she will be there for him in every other way, even if she cannot give him peace.', zh: '她問：即使她給不了他平靜，但在其他方面她都會在他身邊，這樣是否足夠？' } },
    ],
    echoes: [
      { ref: '1989/this-love', note: { en: 'Patience and steadiness in love, six years earlier.', zh: '六年前，同樣寫愛情中的耐性與穩定。' } },
      { ref: 'lover/cornelia-street', note: { en: 'The fear of losing a love, now replaced by acceptance of its costs.', zh: '害怕失去愛情的恐懼，如今被接受其代價所取代。' } },
    ],
  },
  {
    slug: 'hoax', title: 'hoax', track: 16, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'The dark, piano-led closer of the standard edition: a love so tangled with pain that she can no longer separate them.',
      zh: '標準版陰暗的鋼琴壓軸曲：一份與痛苦糾纏得無法分開的愛。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "hoax" ends folklore on an ambiguous note. The narrator describes being hurt and still staying, admitting that the relationship has left her changed.\n\nAfter the warmth of "peace", it is a reminder that the stories on this album do not always resolve neatly.',
      zh: '〈hoax〉與 [[Aaron Dessner]] 合寫，以一個曖昧的音符結束《folklore》。敘述者描述自己受了傷卻仍然留下，承認這段關係已經改變了她。\n\n在〈peace〉的溫暖之後，它提醒我們：這張專輯中的故事並不總是乾淨利落地收場。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes someone who has hurt her and whom she cannot leave.', zh: '她描述一個傷害了她、她卻無法離開的人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She has been through so much that nothing feels real any more, not even love.', zh: '她經歷了太多，以致一切都不再顯得真實，連愛也是。' } },
    ],
    echoes: [
      { ref: 'evermore/willow', note: { en: 'The sister album opens where this one ends, with a song about wanting someone completely.', zh: '姊妹專輯在這張專輯結束之處開始，以一首寫全心渴望某人的歌開場。' } },
    ],
  },
  {
    slug: 'the-lakes', title: 'the lakes', track: 17, section: 'deluxe',
    writers: JA, producers: JA,
    overview: {
      en: 'A deluxe-edition song about escaping fame to the English Lake District, where the Romantic poets once wrote.',
      zh: '一首豪華版歌曲，寫逃離名氣，前往英國湖區：昔日浪漫主義詩人寫作的地方。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "the lakes" imagines running away from the noise of public life to the Lake District in northern England, the landscape that inspired [[William Wordsworth]] and the other Romantic poets.\n\nSwift has said it was one of the first songs she wrote for folklore. It sums up the album’s longing for quiet, nature and private love.',
      zh: '〈the lakes〉與 [[Jack Antonoff]] 合寫，想像逃離公眾生活的喧囂，前往英格蘭北部的湖區：那片啟發 [[William Wordsworth]] 等浪漫主義詩人的土地。\n\nSwift 說這是她為《folklore》寫的最早幾首歌之一。它概括了整張專輯對寧靜、自然和私密愛情的嚮往。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She is tired of the online cruelty and wants to disappear somewhere green and silent.', zh: '她厭倦了網上的殘酷，想消失在某個翠綠而寧靜的地方。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks to be taken to the lakes, where the poets went, to live quietly with the person she loves.', zh: '她請對方帶她到湖區，那個詩人們曾去的地方，與所愛的人靜靜生活。' } },
    ],
    echoes: [
      { ref: 'lover/london-boy', note: { en: 'England as a place of love and escape.', zh: '英國作為愛情與逃離之地。' } },
      { ref: 'the-tortured-poets-department/the-tortured-poets-department', note: { en: 'Four years later, poets and the literary life become the subject of a whole album.', zh: '四年後，詩人與文學生活成為整張專輯的主題。' } },
    ],
  },
];
