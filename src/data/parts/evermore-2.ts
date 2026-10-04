import type { Song } from '../types';

// evermore（2020）：第 10–15 首及兩首加長版曲目
// 版權說明：歌詞只作逐段解讀，不引用原文。
const AD = ['Taylor Swift', 'Aaron Dessner'];

export const part2: Song[] = [
  {
    slug: 'ivy', title: 'ivy', track: 10, section: 'standard',
    writers: ['Taylor Swift', 'Aaron Dessner', 'Jack Antonoff'], producers: ['Aaron Dessner'],
    overview: {
      en: 'A folk ballad about a forbidden love that grows over a marriage the way ivy grows over a stone house.',
      zh: '一首民謠抒情歌，寫一段禁忌之戀，如常春藤爬滿石屋般，悄悄覆蓋一段婚姻。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]] and [[Jack Antonoff]], "ivy" is one of evermore’s character studies: a married woman falls for someone else, knowing it cannot end well. Banjo and soft harmonies give it the feel of an old ballad.\n\nThe central image is a plant that cannot be stopped once it takes hold. The love is described as both beautiful and dangerous.',
      zh: '〈ivy〉與 [[Aaron Dessner]] 及 [[Jack Antonoff]] 合寫，是《evermore》中的人物素描之一：一位已婚女子愛上了另一個人，明知不會有好結果。班卓琴和輕柔的和聲，令它帶有古老民謠的味道。\n\n核心意象是一株一旦扎根便無法阻止的植物。這份愛被描寫成既美麗又危險。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'In winter, the other person brings warmth and comfort, and she knows she should not accept it.', zh: '在寒冬裏，那個人帶來溫暖和慰藉，而她知道自己不應接受。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The love has grown over her like ivy, so that the house she lives in now belongs to it.', zh: '這份愛像常春藤般長滿她全身，令她所住的那所房子，如今也屬於它。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines her husband discovering the truth, and the confrontation that would follow.', zh: '她想像丈夫發現真相，以及隨之而來的對峙。' } },
    ],
    echoes: [
      { ref: 'folklore/illicit-affairs', note: { en: 'The hidden affair from folklore, told again in a colder season.', zh: '《folklore》中那段隱秘戀情，在更寒冷的季節再講一次。' } },
      { ref: 'evermore/tolerate-it', note: { en: 'Another portrait of a marriage gone cold from the inside.', zh: '另一幅由內部冷卻的婚姻畫像。' } },
    ],
  },
  {
    slug: 'cowboy-like-me', title: 'cowboy like me', track: 11, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'Two con artists working the same luxury resort fall for each other: a slow, slinky country-folk story.',
      zh: '兩個在同一個豪華度假村「做世界」的騙子愛上了對方：一首緩慢而慵懶的鄉謠故事。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], with backing vocals and guitar from [[Marcus Mumford]] of Mumford & Sons. The narrator and her match are both grifters, looking for rich partners at expensive resorts, and recognise themselves in each other.\n\nThe "cowboy" of the title is someone who refuses to settle down. The song’s quiet country colour quietly points back to Swift’s beginnings.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，Mumford & Sons 的 [[Marcus Mumford]] 擔任和音及結他。敘述者與她遇上的人都是騙子，在昂貴的度假村物色富有的伴侶，卻在對方身上看到自己。\n\n歌名中的「牛仔」，指不願安定下來的人。歌曲淡淡的鄉謠色彩，悄悄指向 Swift 的起點。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes her trade: drifting between glamorous places, looking for someone to charm.', zh: '她描述自己的「行業」：在各個奢華地方之間流連，物色可以迷倒的對象。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She never expected to meet someone exactly like herself, and now she cannot walk away.', zh: '她從沒想過會遇上一個與自己一模一樣的人，如今卻走不開。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The game turns real. For once, neither of them is pretending.', zh: '遊戲變成真心。難得一次，兩人都不再假裝。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/tim-mcgraw', note: { en: 'Country roots, revisited quietly from the woods.', zh: '鄉謠根源，在林間被悄悄重訪。' } },
      { ref: '1989/blank-space', note: { en: 'The playful persona of a heartbreaker, now treated with sympathy.', zh: '那個玩弄感情的戲謔形象，如今被溫柔對待。' } },
    ],
  },
  {
    slug: 'long-story-short', title: 'long story short', track: 12, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'The most upbeat song on evermore: a brisk summary of a terrible few years, ending in peace and love.',
      zh: '《evermore》中最輕快的一首：以簡潔的節奏，總結幾年糟糕的日子，最後落在平靜與愛之中。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "long story short" looks back at the period of public conflict around 2016 and the retreat that followed. Rather than reopening old wounds, it summarises them quickly and moves on.\n\nThe tone is light and almost amused. It is one of the clearest moments in the sister albums where Swift speaks about her own life rather than a character’s.',
      zh: '〈long story short〉與 [[Aaron Dessner]] 合寫，回望 2016 年前後那段公開衝突，以及其後的退隱。它沒有重新揭開舊傷，而是迅速概括，然後向前走。\n\n語氣輕鬆，甚至帶點自嘲。這是兩張姊妹專輯中，Swift 最明確講述自己而非虛構角色的時刻之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She recalls being pushed and falling, and making things worse by fighting back.', zh: '她回想自己被推倒、跌落，又因反擊而令事情更糟。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'To cut a long story short, it was a bad time, and she is over it.', zh: '長話短說，那是一段糟糕的日子，而她已經放下。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She advises her past self not to worry so much about the people who wanted her to fail.', zh: '她勸告過去的自己，不必太在意那些想她失敗的人。' } },
    ],
    echoes: [
      { ref: 'reputation/call-it-what-you-want', note: { en: 'The same years, seen from inside them and now from far away.', zh: '同一段歲月：當年身在其中，如今遠遠回望。' } },
      { ref: 'lover/daylight', note: { en: 'Leaving the dark years behind for something calmer.', zh: '把黑暗歲月拋諸腦後，走向更平靜的地方。' } },
    ],
  },
  {
    slug: 'marjorie', title: 'marjorie', track: 13, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A tribute to Swift’s grandmother, the opera singer Marjorie Finlay, whose own voice can be heard in the song.',
      zh: '一首致 Swift 外祖母、歌劇歌手 Marjorie Finlay 的悼歌，歌中可以聽到她本人的歌聲。',
    },
    context: {
      en: 'Like "epiphany" on folklore, which honoured her grandfather, "marjorie" sits at track thirteen, Swift’s lucky number, and turns the family story into music.',
      zh: '一如《folklore》中紀念外祖父的〈epiphany〉，〈marjorie〉同樣放在第十三首（Swift 的幸運數字），把家族故事化成音樂。',
    },
    story: {
      en: 'Marjorie Finlay was a professional opera singer who died when Swift was a teenager. Swift has said she regretted not asking her more questions while she was alive. Recordings of Marjorie singing, found by Swift’s family, were woven into the background of the track.\n\nWritten with [[Aaron Dessner]], the song moves from advice remembered to grief, and finally to the feeling that she is still present.',
      zh: 'Marjorie Finlay 是一位職業歌劇歌手，在 Swift 少年時離世。Swift 說，她後悔在外祖母在生時沒有多問一些問題。家人找到 Marjorie 演唱的錄音，被編織進歌曲的背景之中。\n\n這首歌與 [[Aaron Dessner]] 合寫，由記憶中的叮囑，走到哀傷，最後到「她仍然在這裏」的感覺。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the life lessons her grandmother gave her, about kindness and strength.', zh: '她記起外祖母給她的人生教誨：關於善良，關於堅強。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Even though Marjorie is gone, she feels her in the world around her, as if she never left.', zh: '雖然 Marjorie 已經離去，她仍在周遭感受到她，彷彿她從未離開。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She regrets the questions she never asked and the things she was too young to understand.', zh: '她懊悔那些從未問出口的問題，以及當年太年輕而未能明白的事。' } },
    ],
    echoes: [
      { ref: 'folklore/epiphany', note: { en: 'Track thirteen of folklore honoured her grandfather; this one honours her grandmother.', zh: '《folklore》第十三首紀念外祖父；這一首紀念外祖母。' } },
      { ref: 'fearless/the-best-day', note: { en: 'An earlier song of gratitude to family.', zh: '更早一首向家人致謝的歌。' } },
    ],
  },
  {
    slug: 'closure', title: 'closure', track: 14, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'An industrial-folk song in an unusual 5/4 time, about refusing an apology that is offered only to make the other person feel better.',
      zh: '一首以罕見 5/4 拍寫成的工業民謠，寫拒絕一個只為令對方自己好過的道歉。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "closure" uses a clattering, mechanical rhythm in five beats per bar, which makes it feel slightly off-balance on purpose. The narrator receives a letter or gesture of reconciliation and sees through it.\n\nShe does not want closure handed to her on someone else’s terms. She is fine, and she says so.',
      zh: '〈closure〉與 [[Aaron Dessner]] 合寫，採用每小節五拍、如機械碰撞般的節奏，刻意令人感到略為失衡。敘述者收到一封信、一個和解的姿態，卻看穿了它。\n\n她不想以別人的條件接受所謂「了結」。她很好，而她直接說出來。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A message arrives, offering friendship after a falling-out.', zh: '一則訊息到來，在決裂之後提出做回朋友。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She recognises that the gesture is about his guilt, not her healing, and she declines.', zh: '她看出這個姿態是為了紓解他的內疚，而不是為了她的痊癒，於是拒絕。' } },
    ],
    echoes: [
      { ref: 'speak-now/back-to-december', note: { en: 'Once she was the one apologising; here she is the one refusing.', zh: '從前是她道歉；這一次是她拒絕。' } },
      { ref: 'red/we-are-never-ever-getting-back-together', note: { en: 'A far quieter way of closing a door for good.', zh: '以安靜得多的方式，把門永遠關上。' } },
    ],
  },
  {
    slug: 'evermore', title: 'evermore', track: 15, section: 'standard', feat: 'Bon Iver',
    writers: ['Taylor Swift', 'William Bowery', 'Justin Vernon'], producers: ['Aaron Dessner', 'Justin Vernon'],
    overview: {
      en: 'The title track and closer: a winter piano song about depression that seems endless, until a bridge breaks it open.',
      zh: '同名曲兼終曲：一首冬日鋼琴歌，寫一段看似永無盡頭的抑鬱，直到橋段把它打開。',
    },
    story: {
      en: 'Written with William Bowery and [[Justin Vernon]] of Bon Iver, who also sang with Swift on folklore’s "exile". The verses are slow and heavy, describing a long, grey season of feeling stuck.\n\nThen Vernon’s bridge arrives, the tempo shifts, and the two voices build together. At the end, the narrator realises the pain was not forever after all. It is a fitting close to two albums made during a hard year.',
      zh: '這首歌與 William Bowery 及 Bon Iver 的 [[Justin Vernon]] 合寫；Vernon 亦曾在《folklore》的〈exile〉中與 Swift 合唱。主歌緩慢而沉重，描寫一個漫長、灰暗、動彈不得的季節。\n\n接着 Vernon 的橋段出現，節奏轉換，兩把聲音一同推高。到最後，敘述者明白痛苦終究並非永恆。這首歌為兩張在艱難一年中誕生的專輯，畫下恰當的句號。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Grey winter days, a heavy heart, and the sense that this mood will never lift.', zh: '灰暗的冬日、沉重的心，以及這種情緒永不消散的感覺。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The music speeds up as the narrator admits how close to the edge she felt, and the two voices overlap.', zh: '音樂加快，敘述者承認自己曾經多麼接近崩潰，兩把聲音互相交疊。' } },
      { part: { en: 'Final chorus', zh: '最後副歌' }, meaning: { en: 'The key realisation: the pain did not last forever.', zh: '關鍵的領悟：痛苦並沒有永遠持續。' } },
    ],
    echoes: [
      { ref: 'folklore/exile', note: { en: 'The first duet with Bon Iver, at the heart of folklore.', zh: '與 Bon Iver 的第一次合唱，位於《folklore》的核心。' } },
      { ref: 'lover/daylight', note: { en: 'Another closing track that ends by stepping out of darkness.', zh: '另一首以走出黑暗作結的終曲。' } },
    ],
  },
  {
    slug: 'right-where-you-left-me', title: 'right where you left me', track: 16, section: 'deluxe',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A bonus track about a woman frozen at the exact moment she was left, while the world moves on around her.',
      zh: '一首加長版曲目，寫一位女子停留在被拋下的那一刻，四周的世界卻繼續前行。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], this is a story-song with a fairy-tale image: a woman stays in the restaurant where she was left, unchanged as years pass, like a figure in a still photograph.\n\nIts gentle, bright melody makes the sad idea feel like a folk tale. It became a favourite among fans despite being a bonus track.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，是一首帶童話意象的故事歌：一位女子留在她被拋下的那間餐廳裏，歲月流逝而她一成不變，彷彿靜止照片中的人物。\n\n輕柔明亮的旋律，令這個哀傷的構想猶如一則民間故事。雖然只是加長版曲目，卻深受歌迷喜愛。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'At the moment of the breakup, time stops for her.', zh: '分手的那一刻，她的時間便停止了。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Years later, people say she is still there, waiting in the same spot.', zh: '多年後，人們說她仍在那裏，在同一個位置等待。' } },
    ],
    echoes: [
      { ref: 'speak-now/last-kiss', note: { en: 'Another heartbreak that freezes a single moment in time.', zh: '另一段把一刻永遠凝住的心碎。' } },
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'A song that refuses to let a memory fade.', zh: '一首拒絕讓回憶褪色的歌。' } },
    ],
  },
  {
    slug: 'its-time-to-go', title: 'it’s time to go', track: 17, section: 'deluxe',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'The final bonus track: a quiet song about knowing when to leave, and the strength in walking away.',
      zh: '最後一首加長版曲目：一首安靜的歌，寫懂得何時離開，以及轉身離去的力量。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "it’s time to go" gathers several examples of leaving: a marriage, a job, a place where one is not valued. Each verse shows someone listening to a quiet inner voice.\n\nSwift has linked part of the song to her own experience of losing control of her early recordings, and the decision to move on and rebuild.',
      zh: '〈it’s time to go〉與 [[Aaron Dessner]] 合寫，匯集了幾個離開的例子：一段婚姻、一份工作、一個不被重視的地方。每一段都描寫有人聆聽內心那把安靜的聲音。\n\nSwift 曾把歌曲部分內容與自己失去早期錄音控制權的經歷連繫起來，以及她決定向前走、重新建立的選擇。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A family gathering, and the realisation that she no longer belongs there.', zh: '一次家庭聚會，以及她發現自己已不再屬於那裏。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'Work and loyalty betrayed: the people she trusted kept what she made.', zh: '工作與忠誠被背叛：她信任的人，拿走了她創作的東西。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Sometimes giving up is the strong choice; she trusts the voice telling her to go.', zh: '有時放手才是堅強的選擇；她相信那把叫她離開的聲音。' } },
    ],
    echoes: [
      { ref: 'lover/the-man', note: { en: 'Another reflection on how her work was treated by the industry.', zh: '另一次反思業界如何對待她的作品。' } },
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'The re-recordings became her answer to losing her masters.', zh: '重錄版成為她回應失去母帶的答案。' } },
    ],
  },
];
