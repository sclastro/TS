import type { Song } from '../types';

// Midnights：3am Edition（第 14–20 首）及 Til Dawn／Late Night 版曲目
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];
const TA = ['Taylor Swift', 'Aaron Dessner'];

export const part3: Song[] = [
  {
    slug: 'the-great-war', title: 'The Great War', track: 14, section: '3am',
    writers: TA, producers: ['Aaron Dessner'],
    overview: {
      en: 'A relationship described as a war that both people survived, ending in a vow of loyalty.',
      zh: '把一段感情寫成一場戰爭，兩人都熬過了，最後立下忠誠的誓言。',
    },
    context: {
      en: 'Three hours after Midnights came out, at 3 a.m. Eastern time, Swift surprised fans with seven more songs: the 3am Edition. Several were made with [[Aaron Dessner]], carrying the sound of folklore and evermore into the new era.',
      zh: '《Midnights》推出三小時後，即美東時間凌晨三時，Swift 突然加推七首新歌：3am Edition。其中多首與 [[Aaron Dessner]] 合作，把《folklore》和《evermore》的聲音帶進新時期。',
    },
    story: {
      en: 'The song uses the imagery of the First World War, trenches and battlefields, to describe a period of distrust and conflict inside a relationship. Much of the conflict came from her own fears.\n\nIn the end the war is over, and the memory becomes a reason to stay together and remember what they survived.',
      zh: '這首歌借用第一次世界大戰的意象，例如戰壕與戰場，描寫一段感情中互不信任、衝突不斷的時期。不少衝突源自她自己的恐懼。\n\n最後戰爭結束，那段回憶成為二人繼續走下去、記住彼此熬過甚麼的理由。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Fighting, suspicion and wounds: she admits she imagined enemies that were not there.', zh: '爭吵、猜疑與傷口：她承認自己想像出本不存在的敵人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Having survived the war, they vow never to let it happen again.', zh: '熬過了戰爭，二人立誓不再讓它重演。' } },
    ],
    echoes: [
      { ref: 'folklore/epiphany', note: { en: 'War imagery used again, this time for love.', zh: '再次運用戰爭意象，這次用於愛情。' } },
      { ref: 'reputation/call-it-what-you-want', note: { en: 'Love that survived a dark period.', zh: '熬過黑暗時期的愛。' } },
    ],
  },
  {
    slug: 'bigger-than-the-whole-sky', title: 'Bigger Than the Whole Sky', track: 15, section: '3am',
    writers: TA, producers: ['Aaron Dessner'],
    overview: {
      en: 'A soft, aching song of grief for someone or something that never got the chance to exist.',
      zh: '一首柔和而痛楚的歌，哀悼一個從未有機會存在的人或事物。',
    },
    story: {
      en: 'Swift has not explained the exact story behind the song, and many listeners hear it as a song about loss in the broadest sense. Its simple, hushed arrangement leaves space for each listener’s own grief.\n\nMany fans have said it helped them through their own experiences of loss.',
      zh: 'Swift 沒有解釋這首歌背後的確切故事，許多聽眾把它理解為最廣義的失去。簡單而輕聲的編曲，為每位聽眾留下承載自身哀傷的空間。\n\n不少歌迷表示，這首歌陪伴他們走過自己的失去。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She mourns a future that she had imagined and lost.', zh: '她哀悼一個曾經想像、卻已失去的未來。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The loss feels larger than the sky itself.', zh: '這份失去，比整片天空還要大。' } },
    ],
    echoes: [
      { ref: 'evermore/marjorie', note: { en: 'Another quiet song of grief with Aaron Dessner.', zh: '另一首與 Aaron Dessner 合作、安靜的哀悼之歌。' } },
    ],
  },
  {
    slug: 'paris', title: 'Paris', track: 16, section: '3am',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A bright, dreamy song about being so absorbed in love that an ordinary place feels like Paris.',
      zh: '一首明亮夢幻的歌，寫沉醉於愛情之中，令平凡的地方也像巴黎。',
    },
    story: {
      en: 'The narrator ignores gossip and the news, and lives inside a private romantic world. She does not need to travel: love makes anywhere feel glamorous and far away.\n\nIt shares the theme of "Lavender Haze": privacy as a form of happiness.',
      zh: '敘述者不理會閒話和新聞，活在私人的浪漫世界中。她無需遠行：愛令任何地方都顯得華麗而遙遠。\n\n它與〈Lavender Haze〉主題相同：私隱本身就是一種幸福。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She has no interest in rumours about other people.', zh: '她對別人的傳聞毫無興趣。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'With him, the city around them could be Paris.', zh: '與他一起，身邊的城市也可以是巴黎。' } },
    ],
    echoes: [
      { ref: 'midnights/lavender-haze', note: { en: 'The same protective haze around a private love.', zh: '同樣保護私人愛情的那層迷霧。' } },
    ],
  },
  {
    slug: 'high-infidelity', title: 'High Infidelity', track: 17, section: '3am',
    writers: TA, producers: ['Aaron Dessner'],
    overview: {
      en: 'A song about leaving an unhappy relationship for someone else, and refusing to be judged for it.',
      zh: '一首寫為了另一個人而離開不快樂關係的歌，並拒絕因此被批判。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], the song looks at infidelity from the point of view of someone trapped in a cold relationship. The narrator does not deny what she did, but asks others to consider what she had been living with.\n\nThe title plays on the name of the novel and film High Fidelity.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，從一個困在冷淡關係中的人的角度看不忠。敘述者沒有否認自己所做的事，卻請人想想她當時所承受的是甚麼。\n\n歌名借用小說及電影《High Fidelity》的名字作文字遊戲。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She describes a lonely, loveless home that had become a kind of prison.', zh: '她描述一個孤獨、沒有愛的家，那裏已成為一種牢籠。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks why she is the one blamed when the relationship had already failed.', zh: '她問：感情早已失敗，為何被責怪的卻是她？' } },
    ],
    echoes: [
      { ref: 'evermore/ivy', note: { en: 'Another unhappy marriage and a love outside it.', zh: '另一段不快樂的婚姻，以及婚姻以外的愛。' } },
      { ref: 'evermore/tolerate-it', note: { en: 'A home where she felt merely tolerated.', zh: '一個她只覺得被「容忍」的家。' } },
    ],
  },
  {
    slug: 'glitch', title: 'Glitch', track: 18, section: '3am',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Sam Dew', 'Mark Spears'], producers: ['Taylor Swift', 'Jack Antonoff', 'Sounwave'],
    overview: {
      en: 'An R&B-tinged song about a friendship that accidentally turned into love: a happy error in the system.',
      zh: '一首帶 R&B 色彩的歌，寫一段友誼意外變成愛情：系統中一個快樂的錯誤。',
    },
    story: {
      en: 'The narrator had planned to stay friends, but something unexpected happened. She uses the language of computers, errors and systems to describe the surprise.\n\nThe soft beat and layered vocals give it a late-night, slightly dreamy feeling.',
      zh: '敘述者本打算只做朋友，卻發生了意料之外的事。她借用電腦、錯誤和系統的語言來形容這份驚喜。\n\n柔和的節拍和層疊的人聲，帶出深夜、略帶夢幻的感覺。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'They were supposed to be just friends.', zh: '他們本來只應是朋友。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Love arrived like a glitch: not planned, but welcome.', zh: '愛像一個系統錯誤般出現：並非計劃之內，卻受歡迎。' } },
    ],
    echoes: [
      { ref: 'reputation/end-game', note: { en: 'Love that grew out of the unexpected.', zh: '在意料之外萌生的愛。' } },
    ],
  },
  {
    slug: 'wouldve-couldve-shouldve', title: 'Would’ve, Could’ve, Should’ve', track: 19, section: '3am',
    writers: TA, producers: ['Aaron Dessner'],
    overview: {
      en: 'One of Swift’s angriest and most painful songs: an adult looking back at a relationship she was too young to be in.',
      zh: 'Swift 最憤怒、最痛苦的歌之一：一個成年人回望一段她當年太年輕而不應投入的感情。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], the song looks back at a relationship from her late teens with someone older. Many listeners connected it to "Dear John" from Speak Now, but Swift has not confirmed who it is about.\n\nUsing religious imagery, the narrator says she has never stopped carrying the damage, and wishes she had been left alone to grow up. It builds from a quiet start to a furious climax.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，回望她十八九歲時與一位年長者的感情。許多聽眾把它與《Speak Now》的〈Dear John〉連繫起來，但 Swift 沒有確認歌曲寫的是誰。\n\n敘述者運用宗教意象，說她一直背負着那份傷害，並希望當年能被留下來好好長大。歌曲由安靜的開頭，推向憤怒的高潮。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She lists the things that might have been different if he had stayed away.', zh: '她列舉若他沒有靠近，可能會有甚麼不同。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She regrets the time and innocence she lost, and cannot forget it.', zh: '她惋惜失去的時間與天真，無法忘懷。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Anger rises: she was too young, and he should have known better.', zh: '憤怒升起：她當時太年輕，他本應更懂分寸。' } },
    ],
    echoes: [
      { ref: 'speak-now/dear-john', note: { en: 'Often linked by fans: the same theme, a decade later.', zh: '常被歌迷相提並論：同一主題，十多年後再寫。' } },
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'Another look back at an age gap with adult eyes.', zh: '另一次以成年人的眼光回看年齡差距。' } },
    ],
  },
  {
    slug: 'dear-reader', title: 'Dear Reader', track: 20, section: '3am',
    writers: TJ, producers: TJ,
    overview: {
      en: 'The final song of the 3am Edition: life advice from someone who admits you probably should not take her advice.',
      zh: '3am Edition 的最後一首：一個承認你或許不應聽她意見的人，給你的人生忠告。',
    },
    story: {
      en: 'Written in the form of an advice column, the song gives practical tips, then warns the listener not to follow someone who is lost herself. It ends in a haze of distorted vocals.\n\nIt is a clever ending: after hours of confessions, the narrator steps back and questions her own role as a guide.',
      zh: '這首歌以讀者信箱的形式寫成，先給出實際的建議，再提醒聽眾不要跟隨一個自己也迷失的人。結尾是一片被扭曲的人聲迷霧。\n\n這是一個巧妙的結局：經過幾小時的告白，敘述者退後一步，質疑自己作為引路人的角色。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Practical, almost cynical tips for surviving difficult times.', zh: '一些實際、近乎犬儒的生存建議。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She warns the listener: do not follow someone who has lost their own way.', zh: '她警告聽眾：別跟隨一個自己也迷了路的人。' } },
    ],
    echoes: [
      { ref: 'midnights/anti-hero', note: { en: 'Again she questions herself, rather than offering easy answers.', zh: '她再次質疑自己，而不是給予簡單的答案。' } },
    ],
  },
  {
    slug: 'hits-different', title: 'Hits Different', track: 21, section: 'tilldawn',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Aaron Dessner'], producers: TJ,
    overview: {
      en: 'An upbeat breakup song about how heartbreak feels different when it is real, first released on a retail-exclusive edition.',
      zh: '一首輕快的分手歌，寫真正的心碎感覺截然不同；最初收錄於一個零售商獨家版本。',
    },
    story: {
      en: '"Hits Different" first appeared on a physical edition sold by the US retailer Target, then reached streaming services with the Til Dawn edition in 2023.\n\nThe narrator has been through breakups before, but this one is harder. She tries everything to move on, and nothing works.',
      zh: '〈Hits Different〉最初收錄於美國零售商 Target 獨家發售的實體版本，其後在 2023 年隨 Til Dawn 版登上串流平台。\n\n敘述者經歷過分手，但這一次更難受。她試盡方法放下，卻全都無效。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She tries to distract herself with friends and nights out.', zh: '她嘗試與朋友外出，分散注意力。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'This heartbreak is not like the others; it affects her more deeply.', zh: '這次心碎與以往不同，傷得更深。' } },
    ],
    echoes: [
      { ref: '1989/clean', note: { en: 'Trying to wash away a breakup, years earlier.', zh: '多年前，同樣嘗試洗去一段分手。' } },
    ],
  },
  {
    slug: 'youre-losing-me', title: 'You’re Losing Me (From The Vault)', track: 22, section: 'tilldawn',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A vault song written in December 2021: a quiet, devastating description of a relationship dying slowly.',
      zh: '一首寫於 2021 年 12 月的 vault 歌曲：安靜而令人心碎地描寫一段慢慢死去的感情。',
    },
    story: {
      en: 'First released in May 2023 on a CD edition sold at the Eras Tour in New Jersey, and later added to streaming. Swift dated the writing to December 2021, which made fans read it as an early sign of the end of a long relationship.\n\nThe narrator compares the relationship to a heart that is failing, while the other person does not notice.',
      zh: '這首歌最初於 2023 年 5 月收錄於在新澤西州 Eras Tour 場外發售的 CD 版本，其後登上串流平台。Swift 註明它寫於 2021 年 12 月，令歌迷把它視為一段長久感情結束的早期徵兆。\n\n敘述者把這段關係比作一顆漸漸衰竭的心臟，而對方卻沒有察覺。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She has waited for him to fight for the relationship, but he never does.', zh: '她一直等他為這段感情奮鬥，他卻始終沒有。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She tells him plainly that she is slipping away, and he still does not hear it.', zh: '她直白告訴他：她正在離去；他仍然聽不見。' } },
    ],
    echoes: [
      { ref: 'midnights/sweet-nothing', note: { en: 'The same relationship, from tenderness to its fading.', zh: '同一段感情，由溫柔走到褪色。' } },
      { ref: 'evermore/tolerate-it', note: { en: 'Another quiet plea to be seen by a partner.', zh: '另一次安靜地懇求被伴侶看見。' } },
    ],
  },
];
