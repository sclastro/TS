import type { Song } from '../types';

// Midnights（2022）：第 1–7 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];

export const part1: Song[] = [
  {
    slug: 'lavender-haze', title: 'Lavender Haze', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Zoë Kravitz', 'Mark Spears', 'Jahaan Sweet', 'Sam Dew'],
    producers: ['Taylor Swift', 'Jack Antonoff', 'Sounwave', 'Jahaan Sweet'],
    single: { en: 'Third single, 29 November 2022', zh: '第三支單曲，2022 年 11 月 29 日' },
    overview: {
      en: 'A hazy synth-pop opener about protecting a relationship from public gossip by staying inside the glow of love.',
      zh: '一首朦朧的合成器流行曲，作為開場：以留在愛情光暈之中，保護一段關係免受外界閒言閒語打擾。',
    },
    context: {
      en: 'Midnights was released on 21 October 2022, announced at the MTV VMAs as "the stories of 13 sleepless nights scattered throughout my life". It was Swift’s return to pop after two folk albums, made mostly with [[Jack Antonoff]].',
      zh: '《Midnights》於 2022 年 10 月 21 日推出，Swift 在 MTV 音樂錄像頒獎禮上宣佈，形容它是「散落在我一生中十三個失眠夜晚的故事」。這是她在兩張民謠專輯之後重返流行樂，主要與 [[Jack Antonoff]] 合作。',
    },
    story: {
      en: 'Swift took the title from a phrase she heard in the television series Mad Men, used in the 1950s to describe being in love. She liked the idea of an all-encompassing glow that keeps the rest of the world out.\n\nThe song pushes back against constant questions about marriage and tabloid stories. Actress [[Zoë Kravitz]] is among the co-writers.',
      zh: 'Swift 從電視劇《Mad Men》中聽到這個說法，取作歌名；它在 1950 年代用來形容墮入愛河的狀態。她喜歡那種把整個外界隔絕的光暈。\n\n這首歌反駁外界不斷追問婚期以及八卦報道。演員 [[Zoë Kravitz]] 是合寫人之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The public keeps asking about a wedding, as if a woman must fit one of two old roles.', zh: '外界不斷追問婚事，彷彿女人只能扮演兩種老套角色之一。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks her partner to stay with her in the purple glow, where the noise cannot reach.', zh: '她請伴侶與她一同留在那片紫色光暈中，那裏外界的噪音傳不進來。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She dismisses the rumours and insists they only care about each other.', zh: '她不理會傳聞，堅持二人只在乎彼此。' } },
    ],
    mv: {
      id: 'h8DLofLM7No', director: 'Taylor Swift', date: '2023-01-27',
      note: { en: 'Swift’s partner in the video is played by the model and actor [[Laith Ashley]].', zh: 'MV 中 Swift 的伴侶由模特兒兼演員 [[Laith Ashley]] 飾演。' },
      scenes: [
        { scene: { en: 'Late night at home', zh: '深夜的家' }, meaning: { en: 'The couple lie in bed in a 1970s-styled home as purple smoke drifts in: the haze of the title made visible.', zh: '二人躺在一間七十年代風格的屋中，紫色煙霧飄進來：把歌名的「迷霧」化成畫面。' } },
        { scene: { en: 'The room transforms', zh: '房間變形' }, meaning: { en: 'Walls and ceiling dissolve into sky and water. Love changes the space around them.', zh: '牆壁和天花化為天空與水面。愛改變了他們身處的空間。' } },
        { scene: { en: 'The pool', zh: '泳池' }, meaning: { en: 'She swims in glowing purple water, completely inside the private world the song describes.', zh: '她在發光的紫色水中暢泳，完全置身於歌中描述的私人世界。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/call-it-what-you-want', note: { en: 'Protecting private love from public noise, five years earlier.', zh: '五年前，同樣是保護私人愛情免受外界噪音干擾。' } },
      { ref: 'lover/lover', note: { en: 'Another song about building a home inside a relationship.', zh: '另一首在感情之中建造一個家的歌。' } },
    ],
  },
  {
    slug: 'maroon', title: 'Maroon', track: 2, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A darker, more mature cousin of "Red": a past love remembered through deeper shades of the same colour.',
      zh: '〈Red〉一首更暗、更成熟的「表親」：以同一種顏色更深的色調，回憶一段舊愛。',
    },
    story: {
      en: 'Swift has described "Maroon" as being about the loss of a relationship that once felt central to her life. The colour is no longer the bright red of passion but something richer and sadder: the colour of wine stains, bruises and fading memories.\n\nThe production is slow and atmospheric, setting the mood for the album’s late-night reflection.',
      zh: 'Swift 形容〈Maroon〉寫的是失去一段曾經是她生命中心的感情。顏色不再是激情的鮮紅，而是更濃郁、更哀傷的色調：酒漬、瘀傷和褪色回憶的顏色。\n\n製作緩慢而富氛圍感，為專輯的深夜沉思定下基調。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Small, specific memories from a cramped apartment and a carefree night with friends.', zh: '狹小公寓中一些細碎而具體的回憶，以及一個與朋友無憂無慮的晚上。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She lists everything that was the deep red colour of this love, now part of the past.', zh: '她列舉所有屬於這份愛的深紅色事物，如今都已成過去。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She wonders how they lost something so important.', zh: '她想不通他們如何失去了如此重要的東西。' } },
    ],
    echoes: [
      { ref: 'red/red', note: { en: 'The bright red of 2012, deepened into maroon.', zh: '2012 年的鮮紅，加深成栗紅。' } },
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'Another song made of precise physical details of a lost love.', zh: '另一首以精確的具體細節構成的失戀之歌。' } },
    ],
  },
  {
    slug: 'anti-hero', title: 'Anti-Hero', track: 3, section: 'standard',
    writers: TJ, producers: TJ,
    single: { en: 'Lead single, 21 October 2022 · No. 1 on the Hot 100 for eight weeks', zh: '首支單曲，2022 年 10 月 21 日．Hot 100 冠軍八週' },
    overview: {
      en: 'Swift’s most direct song about her own insecurities: a catchy, self-mocking confession that she might be her own worst problem.',
      zh: 'Swift 對自身不安最直接的一首歌：一段朗朗上口、自我嘲諷的告白，承認自己或許才是最大的問題。',
    },
    story: {
      en: 'Swift called "Anti-Hero" one of her favourite songs she had ever written, and said she had never gone so far into her insecurities before. It deals with self-loathing, anxiety about her fame, and the fear of becoming a monster in other people’s eyes.\n\nThe tone balances darkness with humour. It became her longest-running number one in the United States at that time.',
      zh: 'Swift 稱〈Anti-Hero〉是她最喜愛的自作歌曲之一，並說她從未如此深入探討自己的不安。它寫自我厭惡、對名氣的焦慮，以及害怕在別人眼中變成怪物。\n\n語氣在陰暗與幽默之間取得平衡。它成為她當時在美國蟬聯冠軍最久的單曲。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Sleepless nights, outgrowing people, and the feeling that she never quite grows up in the way others expect.', zh: '失眠的夜、與人漸行漸遠，以及覺得自己從未按別人期望那樣長大。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She identifies herself, cheerfully and painfully, as the problem in her own story.', zh: '她既輕快又痛苦地承認：在自己的故事裏，問題正是她本人。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She pictures herself as a giant, too big and too visible, unable to fit into ordinary life.', zh: '她把自己想像成巨人：太龐大、太顯眼，無法融入平凡生活。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'A darkly comic dream about her family fighting over her will after she is gone.', zh: '一場黑色喜劇式的夢：她離世後，家人為遺囑爭吵。' } },
    ],
    mv: {
      id: 'b1kbLwvqugk', director: 'Taylor Swift', date: '2022-10-21',
      scenes: [
        { scene: { en: 'Two Taylors', zh: '兩個 Taylor' }, meaning: { en: 'Swift meets a second version of herself, a reckless double who encourages her worst habits: her insecurities given a body.', zh: 'Swift 遇上另一個自己：一個衝動、鼓勵她壞習慣的分身，即她的不安化成了實體。' } },
        { scene: { en: 'The ghost at the party', zh: '派對上的幽靈' }, meaning: { en: 'Covered by a sheet, she wanders a party unnoticed. Fame can make a person feel invisible as a human being.', zh: '她披着白布在派對中遊走，無人察覺。名氣可以令一個人作為「人」而變得隱形。' } },
        { scene: { en: 'The giant', zh: '巨人' }, meaning: { en: 'A towering Swift tries to join an ordinary dinner and cannot fit: the verse’s image made literal.', zh: '一個巨大的 Swift 嘗試參加平常的晚飯，卻怎樣也擠不進去：把主歌的意象直接呈現。' } },
        { scene: { en: 'The will', zh: '遺囑' }, meaning: { en: 'In a comic flash-forward, her relatives fight over her money at her funeral, as in the bridge. The comedian [[Mike Birbiglia]] is among the cast.', zh: '在一段喜劇式的未來片段中，親人在她的葬禮上爭奪遺產，正如橋段所寫。喜劇演員 [[Mike Birbiglia]] 亦有參演。' } },
        { scene: { en: 'The rooftop', zh: '天台' }, meaning: { en: 'The two Taylors finally sit together, sharing a drink. She does not defeat her flaws; she learns to live with them.', zh: '兩個 Taylor 最後一同坐下，共飲一杯。她沒有打敗自己的缺點，而是學會與它們共處。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Many Taylors in one video once again, this time without armour.', zh: '又一支同時出現多個 Taylor 的 MV，這一次卸下了盔甲。' } },
      { ref: 'lover/the-archer', note: { en: 'Track five-style self-examination, carried into a lead single.', zh: '像第五首歌般的自我剖白，這次成為首支單曲。' } },
      { ref: 'folklore/mirrorball', note: { en: 'Another portrait of performing for others and losing oneself.', zh: '另一幅為他人表演而迷失自己的畫像。' } },
    ],
  },
  {
    slug: 'snow-on-the-beach', title: 'Snow on the Beach', track: 4, section: 'standard', feat: 'Lana Del Rey',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Lana Del Rey'], producers: TJ,
    overview: {
      en: 'A shimmering duet with Lana Del Rey about the strange, unlikely wonder of falling in love at the same time as someone else.',
      zh: '一首與 Lana Del Rey 合唱、閃閃生輝的歌，寫與對方同時墮入愛河那種奇異而難以置信的奇妙。',
    },
    story: {
      en: 'Swift described the song as being about falling in love with someone at the same moment they fall for you, which feels as rare and dreamlike as snow falling on a beach. [[Lana Del Rey]], whom Swift has long admired, sings soft backing vocals.\n\nSome listeners wished Del Rey’s voice were more prominent. A later version on the Til Dawn edition, subtitled "More Lana Del Rey", gave her a larger part.',
      zh: 'Swift 形容這首歌寫的是：在對方愛上你的同一刻，你也愛上了對方；這種感覺就像沙灘上下雪一樣罕有、如夢似幻。Swift 一直欣賞的 [[Lana Del Rey]] 唱出輕柔的和音。\n\n有聽眾希望 Del Rey 的聲音更突出。其後 Til Dawn 版收錄了副題為「More Lana Del Rey」的版本，讓她唱得更多。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She cannot quite believe what is happening, and describes it as something impossible yet beautiful.', zh: '她難以相信正在發生的事，形容它既不可能又美麗。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The central image: a rare, quiet miracle that should not be possible.', zh: '核心意象：一個本不可能出現的、罕有而寧靜的奇蹟。' } },
    ],
    echoes: [
      { ref: 'folklore/exile', note: { en: 'Another duet with an artist she admired, this time in harmony rather than conflict.', zh: '另一首與她欣賞的歌手合唱的作品，這次是和諧而非衝突。' } },
      { ref: 'red/state-of-grace', note: { en: 'Love as something rare and almost sacred.', zh: '愛情被視為罕有、近乎神聖的東西。' } },
    ],
  },
  {
    slug: 'youre-on-your-own-kid', title: 'You’re on Your Own, Kid', track: 5, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'Midnights’ track five: a coming-of-age story from small-town crush to hard-won independence, which inspired the friendship-bracelet tradition of the Eras Tour.',
      zh: '《Midnights》的第五首：由小鎮暗戀走到得來不易的獨立，一個成長故事，並啟發了 Eras Tour 交換友誼手鍊的傳統。',
    },
    story: {
      en: 'Swift traditionally places her most vulnerable song at track five. Here she traces her life from a teenage crush, through the sacrifices of building a career, to the realisation that she has always been on her own, and that this is a strength.\n\nOne line in the bridge suggests making friendship bracelets and enjoying the moment. Fans took it up, and exchanging bracelets became the signature ritual of the Eras Tour.',
      zh: 'Swift 慣常把最脆弱的歌放在第五首。這首歌追溯她的一生：由少年時的暗戀，經過為事業作出的犧牲，到明白自己一直都是獨自一人，而這正是一種力量。\n\n橋段中一句話提議做友誼手鍊、享受當下。歌迷付諸實行，交換手鍊成為 Eras Tour 的標誌性儀式。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A teenager waits for a boy who never notices her, dreaming of escape from her town.', zh: '一個少女等待一個從未留意她的男孩，夢想離開小鎮。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She leaves, works hard, and pays a price in loneliness and self-doubt.', zh: '她離開了，努力工作，代價是孤獨與自我懷疑。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The turn: since she has always been alone, she might as well live fully, make friends and enjoy the moment.', zh: '轉折：既然她一直是獨自一人，不如活得盡情，結交朋友，享受當下。' } },
    ],
    echoes: [
      { ref: 'fearless/fifteen', note: { en: 'The teenage crush, now seen with the hindsight of thirty years.', zh: '少年暗戀，如今以三十多歲的眼光回看。' } },
      { ref: 'speak-now/never-grow-up', note: { en: 'Growing up and leaving home, looked at again from the other side.', zh: '長大離家，從另一端再看一次。' } },
      { ref: 'folklore/mirrorball', note: { en: 'Trying hard to please everyone, then learning to stand alone.', zh: '努力討好所有人，然後學會獨自站立。' } },
    ],
  },
  {
    slug: 'midnight-rain', title: 'Midnight Rain', track: 6, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A song about choosing ambition over a comfortable life with someone who wanted something simpler, opening with a deep, pitched-down voice.',
      zh: '一首寫在野心與安穩之間選擇前者的歌：對方想過簡單生活，她卻不。開首是一把被調低音高的深沉聲音。',
    },
    story: {
      en: 'The song opens with Swift’s voice pitched down until it sounds almost like a different person. It contrasts two people: one wanted an ordinary, settled life, the other wanted something wilder and bigger.\n\nSwift has described it as being about choosing her career and the person she was becoming, and thinking about the person she left behind.',
      zh: '歌曲以被調低音高的 Swift 聲音開始，聽來幾乎像另一個人。它對比兩個人：一個想要平凡安定的生活，另一個想要更狂野、更宏大的東西。\n\nSwift 形容這首歌寫的是選擇事業和她正在成為的那個人，並想起被她留在身後的那個人。',
    },
    lyrics: [
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He was like gentle sunshine; she was like a storm at midnight. They wanted different lives.', zh: '他像溫和的陽光，她像深夜的暴雨。二人想要不同的人生。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'Years later she wonders about his settled life, without truly regretting her own choice.', zh: '多年後，她想起他安定的生活，卻並非真心後悔自己的選擇。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/tim-mcgraw', note: { en: 'A boy left behind as she set off on her career.', zh: '在她展開事業時被留在身後的男孩。' } },
      { ref: 'speak-now/long-live', note: { en: 'The cost of choosing the stage.', zh: '選擇舞台的代價。' } },
    ],
  },
  {
    slug: 'question', title: 'Question...?', track: 7, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A restless song of questions to an old flame, which opens with a sample of Swift’s own "Out of the Woods".',
      zh: '一首向舊情人連番發問、坐立不安的歌，開頭取樣了 Swift 自己的〈Out of the Woods〉。',
    },
    story: {
      en: 'The track begins with a short sample of "Out of the Woods" from 1989, a deliberate link to an earlier era. The narrator remembers a brief, intense romance and wants to know whether the other person still thinks about it.\n\nThe verses are full of half-finished questions, matching the late-night, overthinking mood of the album.',
      zh: '歌曲以《1989》中〈Out of the Woods〉的一小段取樣開始，刻意連繫到更早的時期。敘述者回想一段短暫而熾熱的戀情，想知道對方是否仍會想起。\n\n主歌充滿說到一半的問題，配合專輯深夜過度思考的氣氛。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She recalls a public, dramatic moment in the relationship and the rush that followed.', zh: '她回想這段關係中一個公開而戲劇性的時刻，以及之後的興奮。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'A series of questions: does he regret it, does he think of her, would he do it differently?', zh: '一連串問題：他後悔嗎？他會想起她嗎？他會否另作選擇？' } },
    ],
    echoes: [
      { ref: '1989/out-of-the-woods', note: { en: 'The song is sampled at the opening, linking the two eras directly.', zh: '歌曲開頭取樣了它，直接連繫兩個時期。' } },
    ],
  },
];
