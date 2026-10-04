import type { Song } from '../types';

// Fearless (Taylor's Version)：第 1–9 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
export const part1: Song[] = [
  {
    slug: 'fearless', title: 'Fearless', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose', 'Hillary Lindsey'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'Fifth single, January 2010', zh: '第五支單曲，2010 年 1 月' },
    overview: {
      en: 'The title track describes a perfect first date she had not actually had yet: a song of hope written while she was on tour.',
      zh: '同名主打歌描寫一次完美的初次約會，而那時她其實還未經歷過：一首在巡演途中寫下、充滿盼望的歌。',
    },
    context: {
      en: 'Swift spent 2007 and much of 2008 on the road as an opening act, playing to other artists’ crowds and writing in hotel rooms and on the bus. She has said she had little time for romance, so many of the album’s love songs imagine rather than remember.',
      zh: '2007 年及 2008 年大部分時間，Swift 都以開場嘉賓身份巡迴演出，面對別人的觀眾，在酒店房間和旅遊巴上寫歌。她說那時幾乎沒有時間談戀愛，所以專輯中不少情歌是想像出來的，而不是回憶。',
    },
    story: {
      en: 'Swift has explained that "Fearless" is about the best first date she had not been on yet, and about the feeling of being swept up in a moment despite every reason to hold back. She wrote it with [[Liz Rose]] and [[Hillary Lindsey]].\n\nIn the album’s liner notes, she gave her own definition of the word: being fearless does not mean having no fears; it means having fears and doubts and going ahead anyway, like falling for someone even though you have been hurt before.',
      zh: 'Swift 解釋，〈Fearless〉寫的是一次她還未經歷過的最美好的初次約會，以及即使有千般理由退縮，仍被那一刻完全捲走的感覺。她與 [[Liz Rose]]、[[Hillary Lindsey]] 合寫這首歌。\n\n在專輯的內頁文字中，她為這個詞下了自己的定義：無畏不是沒有恐懼，而是心存恐懼與懷疑，卻仍然勇往直前，就像即使曾經受傷，仍然願意再愛上一個人。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Rain on the street, headlights, a drive after dark. She notices every small detail because she wants to remember all of it.', zh: '街上下着雨、車頭燈、入夜後的兜風。她留意每一個細節，因為她想記住一切。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He takes her hand and she feels brave. Her image of fearlessness is dancing in bad weather in her finest clothes: not careful, just present.', zh: '他牽起她的手，她覺得自己變得勇敢。她心目中「無畏」的模樣，是盛裝在風雨中起舞：不是小心翼翼，而是全情投入。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'In the parking lot, she is nervous and wants to stay in the moment a little longer. The nerves are part of the joy.', zh: '在停車場，她緊張，又想在這一刻多留一會。緊張本身就是快樂的一部分。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits she does not know how it will end, and decides it does not matter tonight.', zh: '她承認不知道結局如何，然後決定今晚這並不重要。' } },
    ],
    echoes: [
      { ref: 'fearless/love-story', note: { en: 'The album’s two great romantic fantasies: one imagined date, one rewritten tragedy.', zh: '專輯兩個偉大的浪漫幻想：一次想像中的約會，一齣被改寫的悲劇。' } },
      { ref: 'lover/paper-rings', note: { en: 'Ten years later the dream of a perfect romance is replaced by one that is real and imperfect, and better for it.', zh: '十年後，完美戀愛的夢想被一段真實而不完美的愛取代，而這反而更好。' } },
    ],
  },
  {
    slug: 'fifteen', title: 'Fifteen', track: 2, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'Fourth single, August 2009', zh: '第四支單曲，2009 年 8 月' },
    overview: {
      en: 'A letter back to the first year of high school, and to her best friend, whose first heartbreak she watched happen.',
      zh: '一封寫回高中一年級的信，也寫給她的好友：她曾親眼看着好友經歷第一次心碎。',
    },
    context: {
      en: 'Swift wrote the song alone about her freshman year in Hendersonville and her best friend, Abigail Anderson, whom she met in English class and who remained a close friend for years.',
      zh: 'Swift 獨力寫下這首歌，寫的是她在 Hendersonville 的高中一年級，以及她的好友 Abigail Anderson：兩人在英文課上認識，多年來一直是好朋友。',
    },
    story: {
      en: 'The song begins as a guide to the first day of school and turns into something more personal: Abigail’s first serious relationship and how much it hurt when it ended. Swift has said she cried while recording the line about her friend, because it was still so close.\n\nThe lesson is gentle: at fifteen everything feels permanent, and only later do you realise how much bigger your life will be. She performed the song with [[Stevie Nicks]] at the 2010 Grammys.',
      zh: '歌曲以開學第一天的指南開始，然後變得更私密：寫 Abigail 第一段認真的感情，以及它結束時有多痛。Swift 說她錄唱關於好友的那一句時哭了，因為那件事當時仍歷歷在目。\n\n歌曲的道理很溫柔：十五歲時一切都像永遠，要到後來才明白人生會大得多。她在 2010 年格林美與 [[Stevie Nicks]] 合唱了這首歌。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Advice to someone walking into high school for the first time: keep your head up, it will be fine. The older narrator speaks to her younger self.', zh: '給第一次踏入高中的人的建議：抬起頭，一切都會好的。年長的敘述者對年輕的自己說話。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'At fifteen, she says, you believe whatever someone tells you about love. The chorus is tender about how innocent that belief is.', zh: '她說，十五歲的人總會相信別人口中的愛。副歌溫柔地看待那份相信有多天真。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She introduces Abigail, the friend who gave everything to a boy who did not deserve it, and whom she watched cry.', zh: '她介紹 Abigail：這位朋友為一個不值得的男孩付出一切，而她親眼看着朋友哭泣。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She realises that life holds much more than the high-school romances that once felt like everything.', zh: '她明白到，人生遠比那些曾經彷彿是一切的高中戀愛廣闊得多。' } },
    ],
    mv: {
      id: 'Pb-K2tXWK4w', director: 'Roman White', date: '2009',
      scenes: [
        { scene: { en: 'Walking through memory', zh: '在回憶中漫步' }, meaning: { en: 'Swift walks through a dreamlike garden built on a green screen, and scenes from high school appear around her like projected memories.', zh: 'Swift 在一個以綠幕打造、如夢似幻的花園中漫步，高中生活的片段像投影的回憶一樣在她身邊出現。' } },
        { scene: { en: 'Abigail', zh: 'Abigail' }, meaning: { en: 'Her real friend Abigail Anderson appears in the video, turning the song into a shared memory rather than a story about her.', zh: '她真實的好友 Abigail Anderson 亦在 MV 中出現，令這首歌成為兩人共同的回憶，而不只是寫她的故事。' } },
      ],
    },
    echoes: [
      { ref: 'midnights/youre-on-your-own-kid', note: { en: 'Thirteen years on, another song addressed to her teenage self, this time with harder truths.', zh: '十三年後，另一首寫給少女時期自己的歌，這次說出更殘酷的真相。' } },
      { ref: 'taylor-swift/the-outside', note: { en: 'School life, first seen from the outside and later looked back on with wisdom.', zh: '校園生活：先是從局外人的角度看，後來帶着智慧回望。' } },
    ],
  },
  {
    slug: 'love-story', title: 'Love Story', track: 3, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'Lead single, September 2008 · No. 4 on the Hot 100', zh: '首支單曲，2008 年 9 月．Hot 100 第四位' },
    overview: {
      en: 'Romeo and Juliet with a happy ending: the global breakthrough that turned a country singer into a pop phenomenon.',
      zh: '有快樂結局的《羅密歐與茱麗葉》：令她由鄉村歌手變成全球流行現象的突破之作。',
    },
    context: {
      en: 'Swift has said the song was inspired by a boy her family and friends did not approve of. The disapproval made her think of the most famous forbidden romance of all, and of how it could have ended differently.',
      zh: 'Swift 說這首歌的靈感來自一個不被家人和朋友認同的男孩。這份不認同令她想起最著名的禁忌之戀，以及它本可以有怎樣不同的結局。',
    },
    story: {
      en: 'She wrote "Love Story" alone, in about twenty minutes, sitting on her bedroom floor. She took the outline of Shakespeare’s Romeo and Juliet and gave it the ending she wished it had: instead of dying, the lovers get married. She also borrowed a reference to The Scarlet Letter, a novel she had been studying.\n\nThe song’s key change before the final chorus, where the story turns from despair to a proposal, became one of the most famous moments in her catalogue. It was a hit around the world and introduced her to audiences far beyond country music.',
      zh: '她獨自坐在睡房地板上，約二十分鐘便寫好〈Love Story〉。她借用莎士比亞《羅密歐與茱麗葉》的故事框架，並給它一個她希望有的結局：戀人沒有殉情，而是結婚。她還借用了正在研讀的小說《紅字》作為典故。\n\n最後一段副歌前的轉調，是故事由絕望轉向求婚的一刻，成為她作品中最著名的時刻之一。這首歌風靡全球，讓遠超鄉村樂圈子的聽眾認識了她。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the first time she saw him, at a summer party, as if from a balcony. The setting is half modern, half Shakespeare.', zh: '她回想第一次見到他的情景：在一個夏日派對上，彷彿站在露台上俯望。場景一半現代，一半莎士比亞。' } },
      { part: { en: 'Pre-chorus', zh: '導歌' }, meaning: { en: 'Her father tells her to stay away from him. The family disapproval that drives the original play drives this one too.', zh: '她的父親叫她遠離他。推動原劇的家族反對，同樣推動着這首歌。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She begs him to run away with her, casting the two of them as figures from Shakespeare. It is a fantasy, and she knows it.', zh: '她懇求他帶她遠走高飛，把兩人想像成莎士比亞筆下的人物。這是幻想，而她自己也清楚。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'They meet in secret. She compares herself to Hester Prynne of The Scarlet Letter, a woman judged by her community, to show how forbidden the relationship feels.', zh: '兩人秘密見面。她把自己比作《紅字》中被社群審判的海絲特，表達這段感情有多麼不被容許。' } },
      { part: { en: 'Bridge and key change', zh: '橋段與轉調' }, meaning: { en: 'She grows tired of waiting and doubts he will come. Then he kneels, says he has talked to her father, and proposes. The key change lifts the song into the happy ending Shakespeare never wrote.', zh: '她等得疲倦，懷疑他不會來。然後他跪下，說已經跟她父親談過，並向她求婚。轉調把歌曲帶進莎士比亞從未寫過的快樂結局。' } },
    ],
    mv: {
      id: '8xg3vE8Ie_E', director: 'Trey Fanjoy', date: '2008-09',
      scenes: [
        { scene: { en: 'A modern campus', zh: '現代校園' }, meaning: { en: 'The video opens in the present, on a college campus, where she notices a young man (played by [[Justin Gaston]]). A glance sends her into a daydream.', zh: 'MV 以現代的大學校園開場，她留意到一位年輕男子（由 [[Justin Gaston]] 飾演）。一個眼神，便令她墮入白日夢。' } },
        { scene: { en: 'The ball and the castle', zh: '舞會與城堡' }, meaning: { en: 'In the fantasy she wears a period gown at a candlelit ball in a castle, dancing with him in front of disapproving eyes.', zh: '在幻想中，她穿着古典禮服，在城堡的燭光舞會中與他共舞，四周盡是不以為然的目光。' } },
        { scene: { en: 'The balcony', zh: '露台' }, meaning: { en: 'She waits on a balcony, a direct nod to the most famous scene in Romeo and Juliet.', zh: '她在露台上等待，直接致敬《羅密歐與茱麗葉》最著名的一幕。' } },
        { scene: { en: 'The field', zh: '田野' }, meaning: { en: 'He runs to her across a field and they embrace. Back in the present, the young man walks up to her for real, so the fairy tale might come true.', zh: '他穿過田野奔向她，兩人相擁。回到現實，那位年輕男子真的向她走來，童話或許會成真。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/mine', note: { en: 'Two years later, another romance told from first meeting to commitment, but set in real life rather than legend.', zh: '兩年後，另一段由初遇寫到承諾的戀愛，這次發生在現實而非傳說之中。' } },
      { ref: 'reputation/getaway-car', note: { en: 'The fantasy of escaping with a lover returns, this time as a heist movie that ends badly.', zh: '與戀人私奔的幻想再次出現，這次是一部結局不妙的劫案電影。' } },
    ],
    trivia: [
      { en: '"Love Story (Taylor’s Version)" was the first re-recorded single, released in February 2021.', zh: '〈Love Story (Taylor’s Version)〉是第一首重錄單曲，於 2021 年 2 月推出。' },
      { en: 'Swift has said she wrote it in about twenty minutes.', zh: 'Swift 說她只用了約二十分鐘便寫成這首歌。' },
    ],
  },
  {
    slug: 'hey-stephen', title: 'Hey Stephen', track: 4, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A breezy, flirtatious song addressed by name to a musician she had a crush on while on tour.',
      zh: '一首輕快、帶着調情意味的歌，直接點名寫給一位她在巡演時暗戀的樂手。',
    },
    story: {
      en: 'The song is addressed to Stephen Barker Liles of the band [[Love and Theft]], who opened some of her shows. Swift wrote it alone and hid a message to him in the album’s liner notes, a trick she used throughout the booklet: capital letters in each lyric spelled out secret phrases.\n\nThe tone is playful and confident: she lists all the reasons he should choose her, with a wink.',
      zh: '這首歌寫給樂隊 [[Love and Theft]] 的成員 Stephen Barker Liles；該樂隊曾為她的部分演出擔任開場嘉賓。Swift 獨力寫下這首歌，並在專輯內頁文字中藏了一句給他的話。這是她貫穿整本歌詞冊的小把戲：每首歌詞中的大楷字母，會拼出一句秘密訊息。\n\n語氣俏皮自信：她眨着眼，列出他應該選擇她的所有理由。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She notices him and his eyes, and admits she has been thinking about him far more than she should.', zh: '她留意到他和他的眼睛，承認自己想他想得太多了。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She points out, sweetly, that other girls may want him, but she can offer something they cannot: she is a songwriter.', zh: '她甜甜地指出，雖然有其他女孩想要他，但她能給他別人給不了的東西：她會寫歌。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines kissing him in the rain, the standard romantic fantasy of the album, delivered with a smile.', zh: '她想像在雨中吻他，這是專輯中常見的浪漫幻想，這次帶着笑意說出來。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/stay-beautiful', note: { en: 'The admiring-from-afar crush song, now bolder and addressed by name.', zh: '遠遠欣賞的暗戀歌，這次更大膽，還直接點名。' } },
    ],
    trivia: [
      { en: 'The hidden capital letters in the Fearless booklet were an early version of the Easter eggs that became her trademark.', zh: 'Fearless 歌詞冊中隱藏的大楷字母，是她日後招牌彩蛋的早期版本。' },
    ],
  },
  {
    slug: 'white-horse', title: 'White Horse', track: 5, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'Second single, December 2008 · two Grammy Awards', zh: '第二支單曲，2008 年 12 月．兩項格林美獎' },
    overview: {
      en: 'The fairy tale’s opposite: realising the man you loved is not the prince you imagined, and leaving town to find your own story.',
      zh: '童話的反面：發現自己愛的人並不是想像中的王子，於是離開小鎮，去尋找屬於自己的故事。',
    },
    story: {
      en: 'Swift wrote "White Horse" with [[Liz Rose]] about the moment of disillusionment, when you realise a relationship was not what you believed. She has said she deliberately kept the production sparse, mostly piano and strings, because the song was about being stripped of a fantasy.\n\nIt was first heard in the season premiere of Grey’s Anatomy in 2008 and later won two Grammys: Best Country Song and Best Female Country Vocal Performance.',
      zh: 'Swift 與 [[Liz Rose]] 合寫〈White Horse〉，寫幻滅的一刻：察覺一段感情並不是自己所相信的樣子。她說她刻意讓編曲保持簡約，主要是鋼琴和弦樂，因為這首歌寫的正是幻想被剝落。\n\n這首歌首先在 2008 年《實習醫生》新一季首集中播出，後來贏得兩項格林美獎：最佳鄉村歌曲及最佳鄉村女歌手演唱。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She says she should have known better, and lists the warning signs she ignored.', zh: '她說自己早該知道，並數出那些被她忽略的警號。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She rejects the whole fairy-tale script: she is not waiting to be rescued, and he is not the hero she imagined. The fantasy is dismantled line by line.', zh: '她拒絕整套童話劇本：她不再等待被拯救，他也不是她想像中的英雄。幻想被一句一句拆解。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'He apologises and asks for another chance, and she sees clearly that nothing will change.', zh: '他道歉並請求再給一次機會，她清楚看見一切都不會改變。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She decides to leave the small town and find a world bigger than this relationship. The heartbreak becomes the beginning of her own story.', zh: '她決定離開這個小鎮，去尋找一個比這段感情更大的世界。心碎變成她自己故事的開端。' } },
    ],
    mv: {
      id: 'D1Xr-JFLxik', director: 'Trey Fanjoy', date: '2008-12',
      scenes: [
        { scene: { en: 'The perfect boyfriend', zh: '完美男友' }, meaning: { en: 'She is happily in love with a young man (played by [[Stephen Colletti]]) in scenes of quiet romance.', zh: '在一幕幕平靜的浪漫場景中，她與一位年輕男子（由 [[Stephen Colletti]] 飾演）沉醉愛河。' } },
        { scene: { en: 'The phone call', zh: '那通電話' }, meaning: { en: 'A call from a woman reveals that he is married. The fairy tale collapses in a single moment.', zh: '一位女士打來的電話揭露他已婚。童話在一瞬間崩塌。' } },
        { scene: { en: 'Walking away', zh: '轉身離去' }, meaning: { en: 'When he comes to beg, she refuses and walks away, the visual version of the bridge.', zh: '他前來乞求時，她拒絕並轉身離開，正是橋段的視覺版本。' } },
      ],
    },
    echoes: [
      { ref: 'fearless/love-story', note: { en: 'The two songs sit side by side on the album: the fairy tale imagined, and the fairy tale refused.', zh: '兩首歌在專輯中並排：一首想像童話，一首拒絕童話。' } },
      { ref: 'red/all-too-well', note: { en: 'Disillusionment in a more mature, devastating form.', zh: '幻滅以更成熟、更具毀滅性的形式出現。' } },
    ],
  },
  {
    slug: 'you-belong-with-me', title: 'You Belong with Me', track: 6, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'Third single, April 2009 · No. 2 on the Hot 100', zh: '第三支單曲，2009 年 4 月．Hot 100 第二位' },
    overview: {
      en: 'The girl next door in T-shirts and sneakers, who understands him better than his girlfriend ever will: her biggest hit of the era.',
      zh: '穿 T 恤和波鞋的鄰家女孩，比他的女朋友更懂他：這個時期她最大熱的歌。',
    },
    context: {
      en: 'Swift has said she got the idea after overhearing a male friend on the phone with his girlfriend, who was shouting at him. He was trying to calm her down, and Swift found herself thinking that he deserved someone who would not treat him like that.',
      zh: 'Swift 說，她偶然聽到一位男性朋友與女朋友通電話，對方在電話中向他大吼，他則努力安撫。Swift 不禁想：他值得一個不會這樣對待他的人。這就是靈感的來源。',
    },
    story: {
      en: 'She wrote the song with [[Liz Rose]], turning the overheard call into a story about the friend who watches from next door. The banjo and the driving beat make it bright, but the feeling underneath is unrequited love.\n\nThe song reached number two on the Hot 100 and its video won Best Female Video at the 2009 MTV VMAs, the award she was accepting when [[Kanye West]] interrupted her speech.',
      zh: '她與 [[Liz Rose]] 合寫這首歌，把偷聽到的電話變成一個故事：那位在隔壁默默注視的朋友。班祖琴和強勁的節拍令歌曲明亮，但底下的感情是暗戀。\n\n歌曲在 Hot 100 最高第二位，MV 奪得 2009 年 MTV VMA 最佳女歌手音樂錄影帶。她正是在領取這個獎項時，被 [[Kanye West]] 走上台打斷致辭。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He is on the phone with his girlfriend, who is upset about something he said. The narrator, his friend, understands his jokes and his music in a way the girlfriend does not.', zh: '他正與女朋友通電話，對方因他說的話而不高興。作為他的朋友，敘述者懂得他的笑話和音樂，而女朋友卻不懂。' } },
      { part: { en: 'Pre-chorus', zh: '導歌' }, meaning: { en: 'The contrast is drawn through clothes: she dresses casually, the girlfriend glamorously. It is a clash of high-school types, not a real comparison of worth.', zh: '對比以衣着呈現：她打扮隨意，女朋友則打扮入時。這是高中生的類型對比，而不是真正比較誰更有價值。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'If he could see that she is the one who understands him, he would know he belongs with her. The plea is simple and repeated.', zh: '如果他能看見真正懂他的是她，他就會明白自己應該和她在一起。懇求簡單而反覆。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She has been quietly waiting for him all along. The image of patient devotion turns into the moment of hope.', zh: '這段日子她一直默默等待着他。這個守候的畫面，轉化為充滿希望的一刻。' } },
    ],
    mv: {
      id: 'VuNIsY6JdUw', director: 'Roman White', date: '2009-04',
      scenes: [
        { scene: { en: 'Two Taylors', zh: '兩個 Taylor' }, meaning: { en: 'Swift plays both the bespectacled girl next door and the popular, cruel girlfriend, a clever way of showing that the "types" are costumes.', zh: 'Swift 一人分飾兩角：戴眼鏡的鄰家女孩，以及受歡迎卻刻薄的女朋友。這個巧妙的安排說明所謂「類型」只是戲服。' } },
        { scene: { en: 'Notes through the window', zh: '隔窗傳字' }, meaning: { en: 'She and the boy (played by [[Lucas Till]]) communicate by holding up written signs between their bedroom windows.', zh: '她與男孩（由 [[Lucas Till]] 飾演）在兩個睡房窗之間舉起手寫字牌溝通。' } },
        { scene: { en: 'The football game and the dance', zh: '球賽與舞會' }, meaning: { en: 'She plays in the marching band while he plays football. At the school dance, she arrives transformed and he finally sees her.', zh: '她在步操樂隊演奏，他在球場上比賽。到了學校舞會，她換上新造型出現，他終於看見了她。' } },
        { scene: { en: 'The last sign', zh: '最後的字牌' }, meaning: { en: 'The two hold up matching signs revealing their feelings: the window sign finally says what the song could not.', zh: '兩人舉起相同的字牌表白：窗前的字牌終於說出歌曲沒有說出口的話。' } },
      ],
    },
    echoes: [
      { ref: 'taylor-swift/teardrops-on-my-guitar', note: { en: 'The same situation two years earlier, when she kept quiet and only cried.', zh: '兩年前同樣的處境，那時她只會沉默和哭泣。' } },
      { ref: 'lover/the-man', note: { en: 'Years later, Swift reflected publicly that pitting girls against each other was something she had to unlearn.', zh: '多年後，Swift 公開反思，把女孩們互相比較，是她必須拋棄的想法。' } },
    ],
    trivia: [
      { en: 'It was nominated for Record of the Year and Song of the Year at the 2010 Grammys.', zh: '它獲得 2010 年格林美年度製作及年度歌曲提名。' },
      { en: 'The video passed one billion views on YouTube.', zh: 'MV 在 YouTube 的觀看次數超過十億。' },
    ],
  },
  {
    slug: 'breathe', title: 'Breathe', track: 7, section: 'standard', feat: 'Colbie Caillat',
    writers: ['Taylor Swift', 'Colbie Caillat'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A soft duet about the end of a friendship, and how hard it is to say goodbye to someone who is not a lover but matters just as much.',
      zh: '一首柔和的合唱，寫一段友誼的結束：向一個不是戀人、卻同樣重要的人道別，是多麼困難。',
    },
    story: {
      en: 'Swift wrote "Breathe" with [[Colbie Caillat]], whose gentle voice harmonises with hers throughout. Swift has said the song is about a friendship that ended, someone who was a huge part of her life and had to leave it.\n\nThe song earned a Grammy nomination for Best Pop Collaboration with Vocals.',
      zh: 'Swift 與 [[Colbie Caillat]] 合寫〈Breathe〉，Caillat 柔和的聲音貫穿全曲與她和音。Swift 說這首歌寫的是一段結束了的友誼：一個曾在她生命中佔很大位置、最終不得不離開的人。\n\n這首歌獲得格林美最佳流行合唱提名。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She knows a goodbye is coming and cannot stop it, however much she wishes she could.', zh: '她知道告別即將來臨，無論多希望阻止，也無能為力。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Losing this person feels like losing air, and she keeps apologising. The apology runs through the song: both sides have lost something.', zh: '失去這個人，就像失去空氣；她不斷道歉。這份歉意貫穿全曲：雙方都失去了一些東西。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She acknowledges that life will go on and that she has to let go, even if she does not want to.', zh: '她承認生活仍要繼續，即使不願意，也必須放手。' } },
    ],
    echoes: [
      { ref: 'speak-now/long-live', note: { en: 'Another song about the people who shared a part of her life and the gratitude she still feels.', zh: '另一首寫那些曾共度一段人生的人，以及她至今仍有的感激。' } },
    ],
  },
  {
    slug: 'tell-me-why', title: 'Tell Me Why', track: 8, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'An exasperated, fiddle-driven song about a boyfriend whose moods change without warning.',
      zh: '一首由小提琴推動、充滿不耐煩的歌，寫一位情緒反覆無常的男友。',
    },
    story: {
      en: 'Swift has said she wrote "Tell Me Why" with [[Liz Rose]] on a day when she came into the writing session frustrated about a guy who would be warm one moment and cold the next. Rose helped her turn the frustration into a song.\n\nThe energy is up-tempo, almost angry, and it shows Swift becoming more confident at saying exactly what is wrong.',
      zh: 'Swift 說，有一天她帶着滿腔怨氣到寫歌工作室，抱怨一個時冷時熱的男生，於是與 [[Liz Rose]] 寫出〈Tell Me Why〉。Rose 幫她把挫敗感化成一首歌。\n\n歌曲節奏明快，近乎憤怒，顯示 Swift 越來越有信心直接說出問題所在。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'He takes her for granted, says things he does not mean, and acts as if she should be grateful. She is tired of it.', zh: '他把她視作理所當然，說着言不由衷的話，又擺出一副她應該感激的樣子。她已經厭倦了。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks him to tell her why he has to be like this, why he makes her feel small. The question is really a demand.', zh: '她要他告訴她，為何他要這樣、為何令她覺得自己渺小。這個問題其實是一個要求。' } },
    ],
    echoes: [
      { ref: 'red/we-are-never-ever-getting-back-together', note: { en: 'The exasperation with an unpredictable boyfriend reaches its comic peak on Red.', zh: '對反覆無常男友的不耐煩，到了《Red》達到喜劇式的高峰。' } },
    ],
  },
  {
    slug: 'youre-not-sorry', title: "You're Not Sorry", track: 9, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A dramatic piano ballad about a boyfriend whose apologies have run out of meaning.',
      zh: '一首戲劇性的鋼琴抒情歌，寫一位男友的道歉已經失去了意義。',
    },
    story: {
      en: 'Swift wrote this alone about someone who kept hurting her and kept saying sorry, until she realised the apologies were just a way to get her to stay. The piano-led production builds slowly into an emotional climax.\n\nThe song gained extra attention when it was used in an episode of CSI: Crime Scene Investigation in 2009, in which Swift made a guest appearance as an actress.',
      zh: 'Swift 獨力寫下這首歌，寫一個不斷傷害她、又不斷道歉的人，直至她明白那些道歉只是留住她的手段。以鋼琴主導的編曲慢慢累積到情感的高潮。\n\n2009 年，這首歌在劇集《CSI 犯罪現場》中使用，Swift 亦在該集客串演出，令歌曲更受關注。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'He comes back with the same excuses; she sees through them now.', zh: '他又帶着同樣的藉口回來；這次她已看穿。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'His apologies are not real remorse, only a way to get her back. She will not fall for it again.', zh: '他的道歉並非真心悔改，只是想她回來的手段。她不會再上當。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She realises she has been giving chance after chance, and finally stops.', zh: '她察覺自己一再給他機會，終於停止。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/shouldve-said-no', note: { en: 'The debut’s fury over a betrayal becomes weary resolve here.', zh: '出道專輯對背叛的怒火，在這裏變成疲憊的決絕。' } },
    ],
  },
];
