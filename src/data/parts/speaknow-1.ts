import type { Song } from '../types';

// Speak Now (Taylor's Version)：第 1–8 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const SN = ['Taylor Swift', 'Nathan Chapman'];

export const part1: Song[] = [
  {
    slug: 'mine', title: 'Mine', track: 1, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Lead single, 4 August 2010 · No. 3 on the Hot 100', zh: '首支單曲，2010 年 8 月 4 日．Hot 100 第三位' },
    overview: {
      en: 'A whole relationship in four minutes, from a first meeting to a fight to a promise, written by someone who usually ran from love.',
      zh: '四分鐘內走完一整段感情：由初遇、爭吵到承諾；寫歌的人，向來習慣逃避愛情。',
    },
    story: {
      en: 'Swift has described "Mine" as being about her tendency to run away from love before it can hurt her, and about meeting someone who made her want to stay. Like every song on Speak Now, she wrote it alone.\n\nThe single was released earlier than planned after it leaked online. Its story moves quickly through the years of a relationship, and the climax is a fight after which, instead of leaving, he stays.',
      zh: 'Swift 形容〈Mine〉寫的是她習慣在愛情傷害她之前逃跑，以及遇上一個令她想留下的人。與《Speak Now》每一首歌一樣，這首歌由她獨力寫成。\n\n單曲因為在網上外洩而提早推出。故事迅速走過一段感情的歲月，高潮是一場爭吵：吵完之後，他沒有離開，而是留了下來。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'They meet when they are young, near the water, and she is already wary of how these things end, because of what she saw growing up.', zh: '兩人在年輕時於水邊相遇，而她早已對這類事情的結局心存戒備，因為她成長時見過太多。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She remembers the moment she realised he was hers, a small, ordinary moment that changed everything.', zh: '她回想察覺他屬於自己的那一刻：一個細小、平凡，卻改變一切的瞬間。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'They move in together and deal with bills and everyday life. The romance survives the ordinary.', zh: '兩人同居，一同面對賬單和日常生活。浪漫在平凡中存活下來。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'A late-night fight; she runs out, crying, expecting him to give up. He follows her and tells her he is not going anywhere. That moment is the emotional core of the song.', zh: '一場深夜的爭吵；她哭着衝出門外，以為他會放棄。他卻追了出來，告訴她自己不會離開。這一刻是全曲的情感核心。' } },
    ],
    mv: {
      id: 'XPBwXKgDTdE', director: 'Roman White', date: '2010-08-27',
      note: { en: 'Co-directed by Swift and Roman White.', zh: '由 Swift 與 Roman White 聯合執導。' },
      scenes: [
        { scene: { en: 'The first look', zh: '第一眼' }, meaning: { en: 'In a seaside café, a young waitress meets the man who will become her husband. The video follows the song’s structure closely.', zh: '在海邊的小餐館，一位年輕女侍應遇上將會成為她丈夫的男子。MV 緊貼歌曲的結構。' } },
        { scene: { en: 'The life together', zh: '共同生活' }, meaning: { en: 'Moving into a house, a wedding, children playing on the lawn: a whole family life flashes by in moments.', zh: '搬進新屋、婚禮、孩子在草地上玩耍：整個家庭生活在幾個片段間閃過。' } },
        { scene: { en: 'The fight and the return', zh: '爭吵與歸來' }, meaning: { en: 'After an argument she breaks down, and he comes after her and holds her. The final shot reveals it has all been her imagining the future.', zh: '一場爭執後她崩潰，他追上來擁抱她。最後一幕揭示，這一切原來是她對將來的想像。' } },
      ],
    },
    echoes: [
      { ref: 'fearless/love-story', note: { en: 'The fairy-tale proposal of 2008 becomes a grounded, adult story of commitment.', zh: '2008 年的童話式求婚，變成一個腳踏實地、成年人的承諾故事。' } },
      { ref: 'lover/paper-rings', note: { en: 'Nine years later, a love that survives the ordinary, told with even more joy.', zh: '九年後，一份在平凡中存活的愛，寫得更加快樂。' } },
    ],
  },
  {
    slug: 'sparks-fly', title: 'Sparks Fly', track: 2, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Fifth single, July 2011', zh: '第五支單曲，2011 年 7 月' },
    overview: {
      en: 'An old fan favourite rescued from her early live shows: falling for someone you know you should not.',
      zh: '一首從她早期現場演出中救回來的歌迷心頭好：愛上一個明知不該愛的人。',
    },
    story: {
      en: 'Swift wrote an early version of "Sparks Fly" when she was about sixteen and performed it at small shows long before she had a record deal. Fans who had heard it kept asking for it, and she reworked it for Speak Now.\n\nIt is one of the most rocking songs on the album: a rush of attraction, rain, and the thrill of a risky romance.',
      zh: 'Swift 約十六歲時寫下〈Sparks Fly〉的早期版本，在簽約之前已於小型演出中演唱。聽過的歌迷不斷要求她錄製，她於是為《Speak Now》重新修改。\n\n這是專輯中最搖滾的歌之一：一股吸引力的衝動、雨水，以及一段冒險戀情的刺激。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She knows he is the kind of person who could hurt her, and she is drawn to him anyway.', zh: '她知道他是那種會令她受傷的人，卻仍然被他吸引。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'When he smiles, the attraction is electric; she asks him to kiss her in the rain. The image is pure romantic drama.', zh: '他一笑，吸引力便像電流一樣；她請他在雨中吻她。這個意象是純粹的浪漫戲劇。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits she cannot resist, even with every warning in her head.', zh: '她承認即使腦中響起所有警號，她仍然無法抗拒。' } },
    ],
    echoes: [
      { ref: 'fearless/fearless', note: { en: 'Rain and reckless romance, a recurring image of the early albums.', zh: '雨水與魯莽的戀愛，是早期專輯反覆出現的意象。' } },
    ],
    trivia: [
      { en: 'Its official video was assembled from Speak Now World Tour performance footage.', zh: '它的官方 MV 以 Speak Now World Tour 的演出片段剪輯而成。' },
    ],
  },
  {
    slug: 'back-to-december', title: 'Back to December', track: 3, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Second single, November 2010 · No. 6 on the Hot 100', zh: '第二支單曲，2010 年 11 月．Hot 100 第六位' },
    overview: {
      en: 'Her first true apology song: realising, too late, that she hurt someone who treated her well.',
      zh: '她第一首真正的道歉歌：太遲才明白，自己傷害了一個待她很好的人。',
    },
    context: {
      en: 'The press widely connected the song to Swift’s brief 2009 relationship with the actor [[Taylor Lautner]], whom she met while filming Valentine’s Day. Swift has never stated the subject directly, but has said it was written for someone who deserved an apology.',
      zh: '傳媒普遍把這首歌與 Swift 在 2009 年和演員 [[Taylor Lautner]] 的短暫戀情聯繫起來；兩人在拍攝《情人節快樂》時認識。Swift 從未直接說明對象，但表示這首歌寫給一個值得她道歉的人。',
    },
    story: {
      en: 'Swift has said this was the first time she wrote an apology in a song. Until then, her songs had mostly been about people who had wronged her; this time she was the one who had been careless.\n\nThe arrangement swells with strings, and the lyric imagines her calling him, or visiting him, with the cold of winter standing in for the moment she pushed him away.',
      zh: 'Swift 說這是她第一次在歌曲中道歉。在此之前，她的歌大多寫那些虧待她的人；這一次，粗心的人是她自己。\n\n編曲以弦樂逐漸鋪陳，歌詞想像她打電話給他或去探望他，而冬天的寒冷，象徵她把他推開的那一刻。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She meets him again after some time and makes small talk, while thinking about everything she wants to say.', zh: '隔了一段時間後再見到他，她只能閒聊幾句，心裏卻想着所有想說的話。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She wishes she could return to the winter when she ended things and choose differently. Her pride is gone; she simply admits she was wrong.', zh: '她希望可以回到結束這段感情的那個冬天，作出不同的選擇。她放下驕傲，直接承認自己錯了。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She remembers his kindness, including a birthday gesture, and how she did not appreciate it at the time.', zh: '她回想他的體貼，包括一次生日的心意，以及自己當時如何不懂珍惜。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She accepts that he may have moved on and that the apology may change nothing, but she needs to say it anyway.', zh: '她接受他可能已經放下，道歉或許改變不了甚麼，但她仍需要說出來。' } },
    ],
    mv: {
      id: 'QUwxKWT6m7U', director: 'Yoann Lemoine', date: '2011-01-13',
      scenes: [
        { scene: { en: 'The white room', zh: '白色房間' }, meaning: { en: 'Swift sits alone in a cold, pale room, reflecting. The winter palette is the colour of regret.', zh: 'Swift 獨坐在一個寒冷、蒼白的房間裏沉思。冬天的色調，就是後悔的顏色。' } },
        { scene: { en: 'The man in the snow', zh: '雪中的男子' }, meaning: { en: 'A young man walks through the snow and reads a letter from her: the apology arrives, but we do not see his reply.', zh: '一位年輕男子在雪中行走，讀着她的信：道歉送到了，但我們看不見他的回應。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/i-can-see-you', note: { en: 'In 2023 Taylor Lautner starred in the video for this Speak Now vault track, which fans read as a warm full-circle moment.', zh: '2023 年，Taylor Lautner 在這張專輯的 vault 歌曲 MV 中演出，歌迷視之為溫暖的圓滿時刻。' } },
      { ref: 'red/sad-beautiful-tragic', note: { en: 'Regret over a relationship that ended, sung even more quietly on Red.', zh: '對一段結束了的感情的懊悔，在《Red》中唱得更安靜。' } },
    ],
  },
  {
    slug: 'speak-now', title: 'Speak Now', track: 4, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Promotional single, October 2010', zh: '宣傳單曲，2010 年 10 月' },
    overview: {
      en: 'A comic fantasy of objecting at the wedding of the man she loves: the title track and the album’s thesis about saying things before it is too late.',
      zh: '一個喜劇式的幻想：在心上人的婚禮上提出反對。這是同名主打歌，也是整張專輯「在太遲之前說出口」的主旨。',
    },
    story: {
      en: 'Swift has said the idea came from a friend whose former love was about to marry someone else. Swift asked whether she was going to speak now, the line from wedding ceremonies, and the question became a song and an album concept.\n\nThe song plays it for laughs: the bride is mean, the wedding is tacky, and the narrator hides in the curtains in a pastel dress. Behind the humour is the album’s serious idea: these songs are all things she should have said in the moment.',
      zh: 'Swift 說靈感來自一位朋友：朋友的舊情人即將與別人結婚。Swift 問她會不會「現在就說出來」，這是婚禮儀式中的一句話；這個問題後來成為一首歌，也成為整張專輯的概念。\n\n歌曲以喜劇方式處理：新娘刻薄、婚禮俗氣，敘述者穿着粉彩色裙子躲在窗簾後。幽默背後是專輯認真的想法：這些歌，全是她當時應該說出口的話。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She was not invited but sneaks into the wedding, describing the bride and her family with gleeful nastiness.', zh: '她沒有被邀請，卻偷偷溜進婚禮，幸災樂禍地描述新娘和她的家人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She imagines the moment the officiant asks if anyone objects, and she stands up.', zh: '她想像主禮人問有沒有人反對的那一刻，而她站了起來。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The groom, it turns out, was waiting for her to object. They run away together, and the fantasy is complete.', zh: '原來新郎一直等待她提出反對。兩人一同逃走，幻想圓滿收場。' } },
    ],
    echoes: [
      { ref: 'speak-now/haunted', note: { en: 'The same album’s darker side: a relationship slipping away without anyone saying anything.', zh: '同一張專輯較陰暗的一面：一段感情悄然溜走，而沒有人說出口。' } },
    ],
  },
  {
    slug: 'dear-john', title: 'Dear John', track: 5, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'A slow-burning, nearly seven-minute letter to an older man who she felt had played with her: one of her most confrontational songs.',
      zh: '一封長近七分鐘、慢慢燃燒的信，寫給一位她認為玩弄了她的年長男子：她最具對抗性的歌之一。',
    },
    context: {
      en: 'The song was widely linked to Swift’s brief relationship with [[John Mayer]], who was more than a decade older. He later told Rolling Stone in 2012 that he had felt humiliated by it. Swift has said she wrote it as a letter she would never send, and that releasing it was the sending.',
      zh: '這首歌普遍被認為與 Swift 和年長她十多歲的 [[John Mayer]] 的短暫戀情有關。對方在 2012 年接受 Rolling Stone 訪問時表示感到受辱。Swift 說，她把這首歌寫成一封永遠不會寄出的信，而發表它，就等於寄出了。',
    },
    story: {
      en: 'Musically, "Dear John" borrows the bluesy guitar style associated with its subject, a pointed choice. Lyrically, it describes a relationship in which she kept trying to please someone whose moods shifted constantly, and asks whether he should have known better, given that she was so young.\n\nThe ending turns from pain to strength: she is the one who escapes, and she survives.',
      zh: '音樂上，〈Dear John〉借用了與其對象相關的藍調結他風格，這是有意為之。歌詞描述一段她不斷討好一個情緒反覆無常的人的關係，並質問對方：她當時那麼年輕，他是否早該懂得分寸？\n\n結尾由痛苦轉為堅強：逃出來的是她，而她活了下來。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes watching the phone and waiting for his mood to change, trying to keep him happy.', zh: '她描述自己盯着電話，等待他的情緒轉變，努力令他高興。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Addressed directly to him: she asks whether he did not think she was too young to be played with in this way.', zh: '直接向他說話：她質問他，難道不覺得她太年輕，不應被這樣對待嗎？' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She hears warnings from others, including her mother, and ignores them. She describes the relationship as a game whose rules kept changing.', zh: '她聽到別人的警告，包括她母親的，卻置之不理。她把這段關係形容為一場規則不斷改變的遊戲。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The anger peaks, then turns: she describes herself as having escaped and shining brightly, while he is left with his pattern of hurting people.', zh: '怒氣攀上頂峰，然後轉折：她形容自己已經逃脫，正閃耀發光，而他只剩下傷害別人的老模式。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'Two years later, an age gap and a cruel ending are again at the heart of her most famous song.', zh: '兩年後，年齡差距和殘忍的結局，再次成為她最著名的歌的核心。' } },
      { ref: 'midnights/would-ve-could-ve-should-ve', note: { en: 'Twelve years on, she revisits a relationship with an older man from her teens with far deeper anger and grief.', zh: '十二年後，她以更深的憤怒與哀傷，重訪少女時期與一位年長男子的關係。' } },
    ],
  },
  {
    slug: 'mean', title: 'Mean', track: 6, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Third single, March 2011 · two Grammy Awards', zh: '第三支單曲，2011 年 3 月．兩項格林美獎' },
    overview: {
      en: 'A banjo-picking answer to a critic: success, she predicts, will outlast cruelty.',
      zh: '一首以班祖琴彈奏的回應，寫給一位評論人：她預言成功會比刻薄更長久。',
    },
    context: {
      en: 'After her 2010 Grammys performance with Stevie Nicks, which was criticised as off-key, a music critic wrote that her career might be over. Swift has said the criticism hurt deeply, and that this song was her response.',
      zh: '2010 年格林美上，她與 Stevie Nicks 的合唱被批評走音，一位樂評人更寫道她的事業可能就此完結。Swift 說那些批評令她非常受傷，這首歌就是她的回應。',
    },
    story: {
      en: 'Swift wrote "Mean" alone, choosing a bright bluegrass sound to answer a dark feeling. She has said she wanted to write about bullying in a way anyone could relate to, not just someone criticised in the press.\n\nIt won Grammys for Best Country Song and Best Country Solo Performance in 2012, and she performed it at that ceremony, a satisfying end to the story that began at the Grammys two years earlier.',
      zh: 'Swift 獨力寫下〈Mean〉，以明亮的藍草音樂回應一種陰暗的感受。她說希望以任何人都能共鳴的方式寫欺凌，而不只是寫一個被傳媒批評的人。\n\n2012 年，這首歌奪得格林美最佳鄉村歌曲及最佳鄉村獨唱表演，她亦在頒獎禮上演唱。兩年前在格林美開始的故事，就此圓滿收場。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She lists the ways he cuts her down with words, pointing out every flaw, until she starts to believe him.', zh: '她數出他如何用言語貶低她、挑出每一個缺點，直至她開始相信。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She predicts that someday she will be living a big, successful life, and he will still be what he is: mean. Success becomes the answer to cruelty.', zh: '她預言有一天自己會過着成功而廣闊的生活，而他仍然是老樣子：刻薄。成功就是對殘忍的回應。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She pictures him years from now, bitter and alone, still complaining about her.', zh: '她想像他多年後的模樣：苦澀、孤單，仍在抱怨她。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits the words hurt her, walking with her head down, before deciding not to let them define her.', zh: '她承認那些話傷害了她，令她垂頭而行，然後決定不讓它們定義自己。' } },
    ],
    mv: {
      id: 'jYa1eI1hpDE', director: 'Declan Whitebloom', date: '2011-05',
      scenes: [
        { scene: { en: 'The bullied', zh: '被欺凌的人' }, meaning: { en: 'The video tells parallel stories: a boy who loves fashion and is mocked by classmates, a girl eating lunch alone, a woman working in a fast-food restaurant while dreaming of more.', zh: 'MV 講述幾個平行故事：一個熱愛時裝而被同學嘲笑的男孩、一個獨自吃午餐的女孩、一個在快餐店工作卻夢想更多的女子。' } },
        { scene: { en: 'The silent-film damsel', zh: '默片中的落難女子' }, meaning: { en: 'Swift appears tied to train tracks in an old-fashioned melodrama, then frees herself. She is no longer waiting to be rescued.', zh: 'Swift 在一齣老式通俗劇中被綁在路軌上，然後自行掙脫。她不再等待被拯救。' } },
        { scene: { en: 'The future', zh: '將來' }, meaning: { en: 'The bullied characters are shown finding success: the boy becomes a designer, the girl ends up in the front row of Swift’s show. The chorus comes true for them.', zh: '被欺凌的角色都獲得成功：男孩成為設計師，女孩坐在 Swift 演出的前排。副歌在他們身上成真。' } },
      ],
    },
    echoes: [
      { ref: '1989/shake-it-off', note: { en: 'The response to critics, four years later, is to laugh it off instead of answering back.', zh: '四年後，她對批評者的回應不再是反駁，而是一笑置之。' } },
      { ref: 'midnights/anti-hero', note: { en: 'Eventually she turns the critic’s voice on herself.', zh: '最終，她把批評者的聲音轉向自己。' } },
    ],
  },
  {
    slug: 'the-story-of-us', title: 'The Story of Us', track: 7, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Fourth single, April 2011', zh: '第四支單曲，2011 年 4 月' },
    overview: {
      en: 'A pop-rock song about being in the same room as an ex and neither of you saying a word.',
      zh: '一首流行搖滾歌，寫與前度身處同一房間，卻誰也不說一句話。',
    },
    story: {
      en: 'Swift has said she wrote "The Story of Us" after seeing an ex at an awards show, sitting a few seats away, and both of them pretending not to notice each other. She went home and wrote the song that night.\n\nThe image running through it is a book: their relationship was a story, and now it has been closed without a proper ending.',
      zh: 'Swift 說，她在一個頒獎禮上看見前度坐在幾個座位之外，兩人都假裝看不見對方。當晚她回家便寫下〈The Story of Us〉。\n\n貫穿全曲的意象是一本書：他們的感情曾是一個故事，如今卻在沒有好好收結的情況下被合上。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She used to think their story would be told one day as a great love. Now they sit in the same room like strangers.', zh: '她曾以為兩人的故事有一天會被傳頌為一段偉大的愛情。如今他們卻像陌生人一樣坐在同一個房間。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The story looks like a tragedy now, and she does not know how it ends. The silence between them is loud.', zh: '這個故事如今看來是一齣悲劇，她不知道結局如何。兩人之間的沉默震耳欲聾。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She wants to say something, anything, but pride keeps them both quiet. The song ends with the book closing.', zh: '她想說些甚麼，甚麼都好，但驕傲令兩人都沉默。歌曲以合上書本作結。' } },
    ],
    mv: {
      id: 'nN6VR92V70M', director: 'Noble Jones', date: '2011-05-25',
      scenes: [
        { scene: { en: 'The library', zh: '圖書館' }, meaning: { en: 'Set in a grand library, the video shows Swift and her ex studying at nearby tables, trying hard not to look at each other.', zh: 'MV 在一座宏偉的圖書館拍攝：Swift 和前度在相鄰的桌子溫習，努力不去看對方。' } },
        { scene: { en: 'Books and paper', zh: '書本與紙張' }, meaning: { en: 'Notes, books and torn pages fly between them, a visual version of a story that has been interrupted.', zh: '筆記、書本和撕下的書頁在兩人之間飛舞，是一個被中斷的故事的視覺版本。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/haunted', note: { en: 'The same album captures the dread before an ending; this song captures the awkwardness after one.', zh: '同一張專輯中，〈Haunted〉寫結束前的恐懼，這首歌寫結束後的尷尬。' } },
    ],
  },
  {
    slug: 'never-grow-up', title: 'Never Grow Up', track: 8, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'A tender acoustic lullaby to childhood, written when she moved into her first apartment and felt suddenly grown up.',
      zh: '一首溫柔的木結他搖籃曲，獻給童年；寫於她搬進第一間公寓、忽然覺得自己長大了的時候。',
    },
    story: {
      en: 'Swift has said she wrote "Never Grow Up" after moving into her own apartment for the first time and realising, on her first night there, that she was an adult. The song addresses a young child, telling them to stay little for as long as they can, and then turns the advice on herself.\n\nIt became one of her most beloved acoustic songs, often played with only a guitar.',
      zh: 'Swift 說，她第一次搬進自己的公寓，在第一晚察覺自己已經是成年人，於是寫下〈Never Grow Up〉。歌曲對一個小孩說話，叫他盡量保持小小的樣子，然後把這個忠告轉向自己。\n\n它成為她最受喜愛的木結他歌曲之一，常常只以一支結他伴奏。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She watches a little child sleeping and hopes they will stay innocent and protected.', zh: '她看着一個熟睡的小孩，希望他永遠保持天真、受到保護。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Her advice: stay small, stay this way, because growing up means losing some things forever.', zh: '她的忠告：保持小小的、保持現在的樣子，因為長大意味着永遠失去某些東西。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'She describes her first night in her own apartment, missing her parents and her childhood home. The advice was for herself all along.', zh: '她描述自己在新公寓的第一晚，想念父母和童年的家。原來那些忠告一直是說給自己聽的。' } },
    ],
    echoes: [
      { ref: 'fearless/the-best-day', note: { en: 'Both songs look back at childhood with gratitude and a little grief.', zh: '兩首歌都以感激與些許哀傷回望童年。' } },
      { ref: 'folklore/seven', note: { en: 'Ten years later, childhood memory becomes a whole song of innocence and loss.', zh: '十年後，童年回憶化為一整首寫天真與失落的歌。' } },
    ],
  },
];
