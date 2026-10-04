import type { Song } from '../types';

// Fearless (Taylor's Version)：第 10–19 首（含 Platinum 版歌曲）
export const part2: Song[] = [
  {
    slug: 'the-way-i-loved-you', title: 'The Way I Loved You', track: 10, section: 'standard',
    writers: ['Taylor Swift', 'John Rich'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A perfectly nice new boyfriend, and the confession that she misses the chaos of the old one.',
      zh: '一位無可挑剔的新男友，以及她的坦白：她懷念舊情人帶來的混亂。',
    },
    story: {
      en: 'Written with [[John Rich]] of the country duo Big & Rich, the song contrasts two kinds of love. The new boyfriend is kind, reliable, respectful and polite to her parents. The old one was difficult, dramatic and impossible, and she felt more alive with him.\n\nIt is one of Swift’s most honest early songs about desire: she does not pretend that the "right" choice feels the way she wants it to.',
      zh: '這首歌與鄉村二人組 Big & Rich 的 [[John Rich]] 合寫，對比兩種愛情。新男友體貼、可靠、尊重她，對她父母也很有禮貌。舊情人則難以相處、充滿戲劇性、令人無法招架，但和他一起時，她覺得自己更鮮活。\n\n這是 Swift 早期最坦白地寫慾望的歌之一：她不假裝那個「正確」的選擇，能帶來她想要的感覺。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes the new boyfriend’s many good qualities, almost like a checklist, and the list itself sounds a little flat.', zh: '她像核對清單一樣，列出新男友的種種優點，而這份清單本身聽起來有點平淡。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She remembers the old relationship: the fights at midnight, the rain, the intensity. She misses the way she loved, even though it hurt.', zh: '她回想舊日的感情：午夜的爭吵、雨、那份濃烈。她懷念自己當時愛人的方式，即使那很痛。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits that she is with the good guy but thinking about the bad one, and feels guilty about it.', zh: '她承認自己與好男人在一起，心裏卻想着壞男人，並為此感到內疚。' } },
    ],
    echoes: [
      { ref: 'red/red', note: { en: 'On Red, the same pull towards intense, destructive love becomes the whole album’s colour.', zh: '到了《Red》，同樣被濃烈而具破壞性的愛吸引，成為整張專輯的顏色。' } },
      { ref: 'reputation/dress', note: { en: 'Intensity without the chaos, ten years later.', zh: '十年後，只有濃烈，沒有混亂。' } },
    ],
  },
  {
    slug: 'forever-and-always', title: 'Forever & Always', track: 11, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'Written at the last minute after a sudden breakup: a frantic, bewildered song about promises that vanished overnight.',
      zh: '在一段突如其來的分手後於最後一刻寫成：一首慌亂、困惑的歌，寫一夜之間消失的承諾。',
    },
    context: {
      en: 'In late 2008 Swift told The Ellen DeGeneres Show that a relationship had been ended in a very short phone call. The press widely connected this song, added to the album just before its release, to that breakup with [[Joe Jonas]].',
      zh: '2008 年底，Swift 在 The Ellen DeGeneres Show 中表示，一段感情以一通極短的電話結束。這首歌在專輯推出前最後一刻才加入，傳媒普遍把它與她和 [[Joe Jonas]] 的分手聯繫起來。',
    },
    story: {
      en: 'Swift wrote "Forever & Always" alone and pushed to include it on Fearless right before the album was finished. The production is restless and loud, and the lyric moves between confusion and anger: one moment things were fine and plans were being made, the next he was gone.\n\nA quieter piano version appears on the Platinum edition, which turns the same song into something closer to grief.',
      zh: 'Swift 獨力寫下〈Forever & Always〉，並在專輯即將完成之際堅持把它收錄進《Fearless》。編曲焦躁而響亮，歌詞在困惑與憤怒之間游移：前一刻一切安好，還在計劃將來；下一刻他已經離開。\n\nPlatinum 版收錄了一個較安靜的鋼琴版本，把同一首歌化為更接近哀悼的作品。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She replays the moment things changed and cannot work out what she did wrong. He had seemed sure only days before.', zh: '她不斷重播事情改變的一刻，想不通自己做錯了甚麼。幾天前他看來還那麼肯定。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She throws the title back at him: he had promised permanence, and now she wants to know what happened to that promise.', zh: '她把歌名丟回給他：他曾承諾天長地久，如今她想知道那個承諾到哪裏去了。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The frustration peaks as she describes him hiding from the conversation. The song ends without an answer, which is the point.', zh: '她描述他逃避對話，怒氣達到頂點。歌曲沒有答案便結束，而這正是重點。' } },
    ],
    echoes: [
      { ref: 'fearless/mr-perfectly-fine', note: { en: 'The vault track released in 2021 revisits what fans believe is the same breakup, with twelve years of sharper wit.', zh: '2021 年推出的 vault 歌曲，重訪歌迷相信是同一段分手，多了十二年磨練出來的尖銳機智。' } },
    ],
  },
  {
    slug: 'the-best-day', title: 'The Best Day', track: 12, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A Christmas present for her mother: a song about childhood days that only looked ordinary.',
      zh: '送給母親的聖誕禮物：一首寫童年日子的歌，那些日子只是看來平凡。',
    },
    story: {
      en: 'Swift wrote and recorded "The Best Day" in secret as a Christmas gift for her mother, [[Andrea Swift]], and played it for her with a video made of family home movies.\n\nThe song moves through her life at different ages, five, thirteen and the present, and in each verse her mother is the one who makes a bad day bearable. The final verse thanks her father and brother too.',
      zh: 'Swift 秘密寫好並錄製〈The Best Day〉，作為送給母親 [[Andrea Swift]] 的聖誕禮物，並配上以家庭錄影片段製作的影片播給她看。\n\n歌曲走過她人生的不同年紀：五歲、十三歲，以及現在。每一段主歌中，都是母親令難熬的日子變得可以承受。最後一段亦向父親和弟弟致謝。',
    },
    lyrics: [
      { part: { en: 'Verse 1: age five', zh: '第一段：五歲' }, meaning: { en: 'An autumn day at a pumpkin patch with her mother. To a child the day is magical; looking back she sees how much care went into it.', zh: '與母親在南瓜田度過的秋日。對小孩來說那天很神奇；回望時，她才看見背後花了多少心思。' } },
      { part: { en: 'Verse 2: age thirteen', zh: '第二段：十三歲' }, meaning: { en: 'Excluded by friends at school, she comes home upset, and her mother takes her out for the day so she can forget. The painful memory of being an outsider is transformed by kindness.', zh: '在學校被朋友排擠，她傷心回家；母親便帶她出去玩一整天，讓她暫時忘記。被排擠的痛苦回憶，因為這份體貼而轉化。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She realises now that these were the best days, and that she had the best mother.', zh: '她如今才明白，那些就是最美好的日子，而她有最好的母親。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'She thanks her father and brother, and her mother for making her who she is.', zh: '她感謝父親和弟弟，也感謝母親塑造了今天的她。' } },
    ],
    mv: {
      id: 'n0cde-Km05o', date: '2021-04',
      note: { en: 'Official video for the Taylor’s Version, made of family home footage from her childhood and early career.', zh: 'Taylor’s Version 的官方 MV，以她童年和出道初期的家庭錄影片段剪輯而成。' },
      scenes: [
        { scene: { en: 'Home movies', zh: '家庭錄影' }, meaning: { en: 'Grainy footage of Swift as a small child, often with her mother, matches the verses about being five and thirteen.', zh: 'Swift 幼年時期的模糊錄影片段，很多是與母親一起，對應歌中五歲和十三歲的段落。' } },
        { scene: { en: 'The early career', zh: '出道初期' }, meaning: { en: 'Later clips show the teenage singer performing, with her family always nearby: the support the song is thanking.', zh: '後段片段展示少女時期的她演出，家人總在身旁：這正是歌曲所感謝的支持。' } },
      ],
    },
    echoes: [
      { ref: 'lover/soon-youll-get-better', note: { en: 'A decade later, a song about her mother’s illness: the gratitude of this song turns into fear of loss.', zh: '十年後，一首寫母親患病的歌：這首歌中的感激，變成害怕失去的恐懼。' } },
      { ref: 'midnights/youre-on-your-own-kid', note: { en: 'The thirteen-year-old outsider of this song reappears, seen from much further away.', zh: '這首歌中那個十三歲的局外人再次出現，這次從更遠的距離回望。' } },
    ],
  },
  {
    slug: 'change', title: 'Change', track: 13, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'An underdog anthem written for her small, independent record label, and later used during the 2008 Olympics.',
      zh: '一首屬於弱者的頌歌，為她當時規模細小的獨立唱片公司而寫，後來在 2008 年奧運期間使用。',
    },
    story: {
      en: 'Swift has said she wrote "Change" about Big Machine Records, the young independent label that signed her, and how it felt to be the small team competing against major labels. The song is a promise that things would turn around if they kept going.\n\nIt was released ahead of the album and used in coverage of the 2008 Summer Olympics.',
      zh: 'Swift 說她寫〈Change〉，是關於簽下她的年輕獨立唱片公司 Big Machine Records，以及作為小團隊與大型唱片公司競爭的感受。歌曲承諾：只要堅持下去，形勢終會扭轉。\n\n這首歌在專輯推出前發佈，並在 2008 年夏季奧運的轉播中使用。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes being the underdog, overlooked and outnumbered, but refusing to quit.', zh: '她描述自己作為弱者，被忽視、寡不敵眾，卻拒絕放棄。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'A promise that change is coming: one day they will stand up and be recognised.', zh: '一個承諾：改變即將來臨，有一天他們會挺身而起，得到認同。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She pictures a victory celebration, a crowd singing together, as if the change has already happened.', zh: '她想像一場慶祝勝利的場面，群眾一起高唱，彷彿改變已經發生。' } },
    ],
    echoes: [
      { ref: 'speak-now/long-live', note: { en: 'The victory imagined here is celebrated on Speak Now, with her band and team.', zh: '這首歌想像的勝利，在《Speak Now》中與她的樂隊和團隊一同慶祝。' } },
    ],
  },
  {
    slug: 'jump-then-fall', title: 'Jump Then Fall', track: 14, section: 'deluxe',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A bouncy, banjo-led love song from the Platinum edition about taking a leap and trusting someone to catch you.',
      zh: 'Platinum 版中一首以班祖琴帶動的輕快情歌，寫奮身一躍、相信對方會接住自己。',
    },
    story: {
      en: 'Added to the 2009 Platinum edition, "Jump Then Fall" is one of Swift’s happiest early songs. The central image is simple: she will jump, and if she falls, he will catch her.\n\nIts playful energy matched the mood of the Fearless Tour, and it shows the optimism that runs alongside the album’s heartbreak songs.',
      zh: '〈Jump Then Fall〉收錄於 2009 年的 Platinum 版，是 Swift 早期最快樂的歌之一。核心意象很簡單：她會跳下去，萬一跌倒，他會接住她。\n\n它俏皮的能量與 Fearless Tour 的氣氛相配，也顯示了專輯在心碎歌曲之外的樂觀一面。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She loves the way he laughs and the way he looks at her; every little thing about him makes her happy.', zh: '她喜歡他的笑聲和他看她的眼神；他的每一件小事都令她快樂。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She invites him to take the leap with her, trusting that he will be there if she falls.', zh: '她邀請他與她一同奮身一躍，相信萬一她跌倒，他會在那裏。' } },
    ],
    echoes: [
      { ref: 'fearless/fearless', note: { en: 'The same idea of jumping despite fear, given a lighter, bouncier treatment.', zh: '同樣是「儘管害怕仍然一躍」的想法，這次處理得更輕快。' } },
    ],
  },
  {
    slug: 'untouchable', title: 'Untouchable', track: 15, section: 'deluxe',
    writers: ['Taylor Swift', 'Nathan Barlowe', 'Tommy Lee James'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'Her reworking of a song by the rock band Luna Halo: a moody, slow-burning ballad about someone who feels out of reach.',
      zh: '她改編搖滾樂隊 Luna Halo 的作品：一首帶着情緒、慢慢燃燒的抒情歌，寫一個遙不可及的人。',
    },
    story: {
      en: 'Swift took a song originally recorded by Luna Halo and rewrote its melody and arrangement into a quiet, atmospheric piece. She has said she loved the original and wanted to make it her own.\n\nThe result sits somewhere between country and the moodier sound she would explore later: hushed verses, a sweeping chorus, and longing for someone who seems untouchable.',
      zh: 'Swift 把原由 Luna Halo 錄製的歌曲重新編寫旋律和編曲，變成一首安靜而富氛圍的作品。她說自己很喜歡原曲，想把它變成屬於自己的版本。\n\n成品介乎鄉村樂與她日後探索的情緒化聲音之間：低聲的主歌、恢宏的副歌，以及對一個彷彿碰不到的人的渴望。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'At night she thinks of someone who seems too far away, as distant as a star.', zh: '夜裏，她想着一個彷彿太遙遠的人，遠得像一顆星。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She longs to reach him, even knowing he might never be reachable. The longing itself is the song’s emotion.', zh: '她渴望接近他，即使明知他可能永遠觸不可及。渴望本身就是這首歌的情感。' } },
    ],
  },
  {
    slug: 'come-in-with-the-rain', title: 'Come In with the Rain', track: 17, section: 'deluxe',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'An early song about leaving a window open for someone who may or may not come back.',
      zh: '一首早期作品，寫為一個不知會否回來的人留下一扇打開的窗。',
    },
    story: {
      en: 'One of the older songs on the Platinum edition, written with [[Liz Rose]] during her early teens. The image is gentle and patient: she will not chase him, but she will leave the window open in case he decides to come back with the rain.\n\nIt shows how many of the themes of her later work, waiting, rain, open doors, were already in place years before Fearless.',
      zh: '這是 Platinum 版中較早期的歌之一，在她十多歲初時與 [[Liz Rose]] 合寫。意象溫柔而耐心：她不會追逐他，但會打開窗，以防他決定隨雨歸來。\n\n它顯示了她日後作品中的許多主題，例如等待、雨、敞開的門，早在《Fearless》之前多年已經出現。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She pretends she does not care whether he comes back, but she is still waiting.', zh: '她假裝不在乎他是否回來，其實仍在等待。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The window stays open; he can return when the rain comes, if he wants to.', zh: '窗一直開着；如果他想，下雨時可以回來。' } },
    ],
    echoes: [
      { ref: 'speak-now/the-story-of-us', note: { en: 'Waiting for someone to make the first move becomes a source of frustration a couple of years later.', zh: '幾年後，等待對方先踏出一步，變成挫敗感的來源。' } },
    ],
  },
  {
    slug: 'superstar', title: 'Superstar', track: 18, section: 'deluxe',
    writers: ['Taylor Swift', 'Liz Rose', 'Robert Ellis Orrall'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A crush on a famous musician, sung from the audience: before she became the superstar herself.',
      zh: '在觀眾席上暗戀一位名人樂手：那時她自己還未成為巨星。',
    },
    story: {
      en: 'Written with [[Liz Rose]] and [[Robert Ellis Orrall]], "Superstar" captures the fantasy of loving someone you know mostly from the stage and the radio. Swift has described it as being about a crush on a musician she had met briefly.\n\nIn hindsight it is touching: within a couple of years, she would be the one on stage, and thousands of fans would feel this way about her.',
      zh: '〈Superstar〉與 [[Liz Rose]]、[[Robert Ellis Orrall]] 合寫，捕捉了一種幻想：愛上一個你大多只在舞台和電台上認識的人。Swift 形容這首歌寫的是她暗戀一位曾短暫見過的樂手。\n\n事後回看，這首歌令人感動：短短幾年後，站在台上的人是她，而成千上萬的歌迷也會對她懷着同樣的感覺。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She listens to his songs on the radio and remembers the brief moment they met.', zh: '她在電台上聽他的歌，回想兩人短暫相遇的一刻。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He is a star to everyone; to her he is something more personal, though she knows she is just one face in the crowd.', zh: '對所有人來說他是明星；對她來說他更為私密，雖然她知道自己只是人群中的一張臉。' } },
    ],
  },
  {
    slug: 'the-other-side-of-the-door', title: 'The Other Side of the Door', track: 19, section: 'deluxe',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A slammed door after a fight, and everything she wishes he would say on the other side of it.',
      zh: '吵架後砰然關上的門，以及她希望他在門外說的每一句話。',
    },
    story: {
      en: 'Written alone for the Platinum edition, this is one of Swift’s most self-aware early songs. She admits that when she says "leave", she actually means "stay", and lists everything she wants him to do to prove he cares.\n\nThe energy is big and rocking, and the honesty is disarming: she knows she is being dramatic, and she says so.',
      zh: '這首為 Platinum 版獨力寫成的歌，是 Swift 早期最有自知之明的作品之一。她承認當她叫他走時，其實是想他留下，並列出她希望他做的每一件事，以證明他在乎。\n\n歌曲能量澎湃、充滿搖滾感，而那份坦白令人卸下防備：她知道自己在小題大做，也直接說了出來。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'In the middle of a fight she storms off and slams the door, then waits to see if he will follow.', zh: '吵到一半，她怒氣沖沖地離開並甩上門，然後等着看他會不會追來。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She admits her words meant the opposite of what she said: she wanted him to come after her and make a grand romantic gesture.', zh: '她承認自己說的話是反話：她想他追上來，作出浪漫的大動作。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She lists the small details she loves about him, showing that her anger is really fear of losing him.', zh: '她數出自己喜歡他的種種細節，顯示她的憤怒其實是害怕失去他。' } },
    ],
    echoes: [
      { ref: 'red/stay-stay-stay', note: { en: 'A fight resolved with humour rather than a slammed door, on Red.', zh: '到了《Red》，吵架以幽默而不是甩門收場。' } },
    ],
  },
];
