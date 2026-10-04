import type { Song } from '../types';

// Taylor Swift（2006）：第 8–14 首（含 2007 年 Deluxe 版）
export const part2: Song[] = [
  {
    slug: 'stay-beautiful', title: 'Stay Beautiful', track: 8, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Nathan Chapman'],
    overview: {
      en: 'A sweet, generous crush song: admiring a boy from a distance and wishing him well, even if he never notices her.',
      zh: '一首甜美又大方的暗戀歌：遠遠欣賞一個男孩，即使他從未留意她，仍真心祝福他。',
    },
    story: {
      en: 'Swift has said the song is about a boy she admired from afar but never really knew. Written with [[Liz Rose]], it is notable for its generosity: instead of longing or jealousy, the narrator hopes he stays exactly as he is, and that whoever ends up with him appreciates him.\n\nIt shows the warmth that runs through much of the debut album, alongside its heartbreak.',
      zh: 'Swift 說這首歌寫的是一個她遠遠欣賞、卻從未真正認識的男孩。這首歌與 [[Liz Rose]] 合寫，最難得的是它的寬厚：敘述者沒有渴求或妒忌，只希望他保持現在的樣子，並希望最終與他在一起的人懂得珍惜他。\n\n它展現了出道專輯在心碎之外的另一種溫暖。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes the boy’s eyes and the way he carries himself, watching him from across a room.', zh: '她隔着房間望着那個男孩，描述他的眼睛和他的舉止。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Her wish: stay beautiful, do not change. And if he ever wants someone to come home to, she will be there.', zh: '她的願望：保持美好，不要改變。如果他有一天想找一個可以回去的人，她會在那裏。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits he may never be hers, and is at peace with that, as long as he stays happy.', zh: '她承認他可能永遠不屬於她，只要他快樂，她也心安。' } },
    ],
    echoes: [
      { ref: 'fearless/hey-stephen', note: { en: 'The crush song grows bolder on Fearless: this time she says it to his face.', zh: '到了《Fearless》，暗戀歌變得大膽：這次她當面說出來。' } },
    ],
  },
  {
    slug: 'shouldve-said-no', title: "Should've Said No", track: 9, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Nathan Chapman'],
    single: { en: 'Fifth single, May 2008 · No. 1 on Hot Country Songs', zh: '第五支單曲，2008 年 5 月．Hot Country Songs 冠軍' },
    overview: {
      en: 'A furious, guitar-driven song about a boyfriend who cheated, written alone and added to the album at the last minute.',
      zh: '一首由結他推動的憤怒之歌，寫一位出軌的男友；由她獨力寫成，並在最後一刻加進專輯。',
    },
    story: {
      en: 'Swift wrote the song by herself after finding out that a boyfriend had cheated. She has said it came together very quickly and was added to the album right before it was finalised. It is one of the most confrontational songs on the debut: there is no sadness in it, only the conviction that he made a choice and has to live with it.\n\nHer performance of it at the 2008 Academy of Country Music Awards became legendary. In the final chorus, water poured down from the ceiling and she kept singing, soaked. Footage of that performance was used as the song’s official video.',
      zh: 'Swift 在得知男友出軌後獨力寫下這首歌。她說歌曲很快便完成，在專輯定稿前最後一刻才加進去。這是出道專輯中最具對抗性的歌之一：裏面沒有傷感，只有一個信念：他作了選擇，就必須承擔後果。\n\n她在 2008 年 ACM 頒獎禮上的演出成為經典。最後一段副歌時，水從天花傾瀉而下，她渾身濕透仍繼續演唱。那場演出的片段後來成為這首歌的官方 MV。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She has heard what he did, and he is trying to explain. She is not interested.', zh: '她已聽說他做了甚麼，他正嘗試解釋，而她毫無興趣聽。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The title as verdict: he should have said no, he should have gone home, he should have thought twice. Every "should have" is a door he chose not to close.', zh: '歌名就是判決：他應該拒絕、應該回家、應該三思。每一個「應該」，都是一扇他選擇不關上的門。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'He begs for forgiveness and she refuses to give it. She would rather be alone than with someone who did this.', zh: '他乞求原諒，她拒絕了。她寧願獨自一人，也不要和做出這種事的人在一起。' } },
    ],
    echoes: [
      { ref: 'fearless/youre-not-sorry', note: { en: 'On Fearless, the same betrayal is met with weary sadness instead of fury.', zh: '在《Fearless》中，同樣的背叛換來的是疲憊的哀傷，而不是憤怒。' } },
      { ref: 'taylor-swift/picture-to-burn', note: { en: 'Anger again, but here it is serious rather than comic.', zh: '同樣是憤怒，但這首是認真的，不是喜劇式的。' } },
    ],
    trivia: [
      { en: 'The rain-soaked ACM performance became one of the defining images of her early career.', zh: '在 ACM 上渾身濕透的演出，成為她早期事業最具代表性的畫面之一。' },
    ],
  },
  {
    slug: 'marys-song-oh-my-my-my', title: "Mary's Song (Oh My My My)", track: 10, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose', 'Brian Maher'], producers: ['Nathan Chapman'],
    overview: {
      en: 'A whole lifetime of love in four minutes, inspired by the long marriage of the couple who lived next door.',
      zh: '在四分鐘內唱完一輩子的愛情，靈感來自住在隔壁那對結婚多年的夫婦。',
    },
    story: {
      en: 'Swift has said she wrote the song after an elderly couple who lived next door came over and told her family the story of how they met and how long they had been married. She was struck by the idea of a love that simply lasted.\n\nThe song moves through a whole life: childhood friends, teenage romance, a proposal, a wedding, and old age together. It is one of the earliest examples of Swift telling a story that is not her own.',
      zh: 'Swift 說，住在隔壁的一對老夫婦有一天到她家，向她一家講述他們如何相識、結婚多年的故事，她因此寫下這首歌。一份就這樣長長久久的愛，深深打動了她。\n\n歌曲走過一整個人生：童年玩伴、少年戀愛、求婚、婚禮，以及攜手到老。這是 Swift 最早寫別人故事的例子之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Two children play together in the backyard; their parents joke that they will end up married one day.', zh: '兩個小孩在後院玩耍；他們的父母開玩笑說，他們將來一定會結婚。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The joyful exclamation of the title marks each stage of falling in love: surprised, a little giddy, and grateful.', zh: '歌名中那句歡喜的感嘆，標記着戀愛的每一個階段：驚喜、有點暈陀陀，又心存感激。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'As teenagers they fall in love for real, and later he proposes. The years pass in a few lines.', zh: '到了少年時代，他們真的相愛了；後來他求婚。歲月在幾句之間流逝。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'They are old now, still together, still looking at each other the same way.', zh: '如今他們老了，仍在一起，仍以同樣的眼神望着對方。' } },
    ],
    echoes: [
      { ref: 'folklore/invisible-string', note: { en: 'The idea that two people were always meant to find each other returns, beautifully, on folklore.', zh: '兩個人注定會找到彼此的想法，在《folklore》中美麗地重現。' } },
      { ref: 'lover/lover', note: { en: 'A lifelong, domestic love, now sung from inside her own life.', zh: '一份相守一生的居家之愛，這次由她自己的人生中唱出來。' } },
    ],
  },
  {
    slug: 'our-song', title: 'Our Song', track: 11, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Nathan Chapman'],
    single: { en: 'Third single, September 2007 · No. 1 on Hot Country Songs for six weeks', zh: '第三支單曲，2007 年 9 月．Hot Country Songs 冠軍六週' },
    overview: {
      en: 'Written for her freshman talent show: a couple without a song realise that the sounds of their relationship are their song.',
      zh: '為高中一年級的才藝表演而寫：一對沒有專屬歌曲的情侶，發現兩人相處的聲音就是他們的歌。',
    },
    context: {
      en: 'Swift wrote this alone at about fourteen, for a school talent show. Classmates who heard it there kept coming up to her months later and singing it back to her, which she took as a sign that it was catchy enough to put on the album.',
      zh: 'Swift 約十四歲時獨力寫下這首歌，為的是學校的才藝表演。聽過的同學在幾個月後仍不時走到她面前，把歌唱給她聽；她認為這證明歌曲夠朗朗上口，於是收錄進專輯。',
    },
    story: {
      en: 'The idea is charming and clever: the couple in the song do not have a song of their own, so the narrator decides their song is made of the sounds around them, the screen door slamming, sneaking out late, the way he talks on the phone.\n\nIt became her first number-one country single and stayed there for six weeks. At seventeen, she became the youngest person at the time to write and perform a number-one country song entirely by herself.',
      zh: '這個構思既可愛又聰明：歌中的情侶沒有屬於自己的歌，於是敘述者決定，他們的歌就是身邊的種種聲音：紗門砰然關上、深夜偷偷溜出去、他在電話中說話的方式。\n\n它成為她第一首鄉村榜冠軍歌，並蟬聯六週。當年十七歲的她，成為當時最年輕、獨力包辦詞曲並演唱鄉村榜冠軍歌的歌手。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Riding in his car, she notices they do not have a song, and he points out the sounds of their evening instead.', zh: '坐在他車上，她察覺兩人沒有屬於自己的歌；他便指出那個晚上身邊的種種聲音。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Their song is the screen door, the late-night phone calls, the sneaking around. Ordinary life is the soundtrack.', zh: '他們的歌就是紗門聲、深夜電話、偷偷摸摸的約會。平凡的生活就是配樂。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'After a bad day she prays, and the prayer itself becomes part of their song.', zh: '經過糟糕的一天，她祈禱，而祈禱本身也成為他們的歌的一部分。' } },
      { part: { en: 'Outro', zh: '尾段' }, meaning: { en: 'She writes the song down on a napkin, and the song you are hearing turns out to be the one she wrote. A neat, self-aware ending.', zh: '她在一張餐巾上寫下這首歌，而你正在聽的，原來就是她寫下的那首。一個巧妙、自覺的結尾。' } },
    ],
    mv: {
      id: 'Jb2stN7kH28', director: 'Trey Fanjoy', date: '2007-09-24',
      note: { en: 'Won Video of the Year at the 2008 CMT Music Awards.', zh: '奪得 2008 年 CMT 音樂大獎年度音樂錄影帶。' },
      scenes: [
        { scene: { en: 'The porch and the phone', zh: '門廊與電話' }, meaning: { en: 'Swift sings on a front porch and waits by the phone, the domestic settings that the lyric turns into music.', zh: 'Swift 在門廊上演唱、在電話旁等待，正是歌詞把生活化為音樂的那些家常場景。' } },
        { scene: { en: 'Changing looks', zh: '不同造型' }, meaning: { en: 'She moves between several sets and dresses, from casual to glamorous, a playful showcase for the young star.', zh: '她在幾個佈景和幾套裙子之間切換，由休閒到華麗，是對這位年輕新星的俏皮展示。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/ours', note: { en: 'A near-namesake: four years later, another song about a couple whose love belongs only to them, whatever anyone says.', zh: '幾乎同名：四年後，另一首寫一對戀人的愛只屬於他們自己，無論旁人怎麼說。' } },
      { ref: 'taylor-swift/tim-mcgraw', note: { en: 'The album opens and closes on the idea of a song that belongs to two people.', zh: '專輯以「屬於兩個人的歌」開始，也以此作結。' } },
    ],
  },
  {
    slug: 'im-only-me-when-im-with-you', title: "I'm Only Me When I'm with You", track: 12, section: 'deluxe',
    writers: ['Taylor Swift', 'Robert Ellis Orrall', 'Angelo Petraglia'],
    overview: {
      en: 'An upbeat early song about the one person who lets you be completely yourself.',
      zh: '一首輕快的早期作品，寫那個讓你可以完全做自己的人。',
    },
    story: {
      en: 'One of Swift’s earliest songs, written with [[Robert Ellis Orrall]] and [[Angelo Petraglia]] during her development years, and later added to the deluxe edition. It is light and joyful, built on the simple idea that with the right person you no longer have to perform.',
      zh: '這是 Swift 最早期的歌之一，在她的培訓時期與 [[Robert Ellis Orrall]]、[[Angelo Petraglia]] 合寫，後來收錄於 deluxe 版。歌曲輕快歡樂，建基於一個簡單的想法：和對的人在一起，你不必再表演。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Small details of time spent together: talking about nothing, sitting outside at night, laughing.', zh: '兩人相處的細節：天南地北地閒聊、晚上坐在屋外、開懷大笑。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'With everyone else she feels like she has to be someone; with him she is simply herself.', zh: '和其他人一起時，她覺得必須扮演某個角色；和他一起時，她只是做自己。' } },
    ],
    echoes: [
      { ref: 'lover/paper-rings', note: { en: 'The same uncomplicated joy, years later.', zh: '多年後同樣簡單直接的快樂。' } },
    ],
  },
  {
    slug: 'invisible', title: 'Invisible', track: 13, section: 'deluxe',
    writers: ['Taylor Swift', 'Robert Ellis Orrall'],
    overview: {
      en: 'Loving a boy who looks straight through you, and quietly hoping he will one day see you.',
      zh: '愛着一個對你視而不見的男孩，暗暗盼望他終有一天會看見你。',
    },
    story: {
      en: 'Another early song, written with [[Robert Ellis Orrall]]. It is the most vulnerable version of the debut album’s favourite subject, unrequited love: she is not even competing for his attention; she is simply unseen.\n\nThe quiet production lets the lyric carry the feeling.',
      zh: '另一首早期作品，與 [[Robert Ellis Orrall]] 合寫。它是出道專輯最常見主題「暗戀」最脆弱的版本：她甚至不是在爭取他的注意，而是根本沒有被看見。\n\n樸素的編曲讓歌詞承載所有情感。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She watches him with someone else, and knows she would treat him better.', zh: '她看着他與別人一起，知道自己會待他更好。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She feels invisible to him, and wonders what it would take for him to notice.', zh: '在他眼中，她彷彿是隱形的；她不知道要怎樣才能令他留意。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/teardrops-on-my-guitar', note: { en: 'The same situation, told with more detail and a named boy.', zh: '同樣的處境，寫得更具體，還說出了男孩的名字。' } },
      { ref: 'fearless/you-belong-with-me', note: { en: 'The invisible girl finally gets noticed.', zh: '那個隱形的女孩，終於被看見了。' } },
    ],
  },
  {
    slug: 'a-perfectly-good-heart', title: 'A Perfectly Good Heart', track: 14, section: 'deluxe',
    writers: ['Taylor Swift', 'Brett James', 'Troy Verges'],
    overview: {
      en: 'A first real heartbreak, and the baffled question of why anyone would break something that was working perfectly well.',
      zh: '第一次真正的心碎，以及一個困惑的問題：為何有人會打破一顆完好無缺的心？',
    },
    story: {
      en: 'Written with Nashville songwriters [[Brett James]] and [[Troy Verges]], the song captures the shock of a first heartbreak, when you had not yet learned to protect yourself.\n\nThe title’s metaphor treats the heart like an object that was in perfect condition until someone carelessly broke it.',
      zh: '這首歌與納什維爾作曲人 [[Brett James]]、[[Troy Verges]] 合寫，捕捉了第一次心碎時的震驚：那時你還未學會保護自己。\n\n歌名的比喻把心當作一件物品：它原本完好無缺，直至有人隨手把它打破。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She had never been hurt before, and gave her heart without reservation.', zh: '她從未受過傷，毫無保留地交出了自己的心。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Why would you break a perfectly good heart? The question is not angry so much as stunned.', zh: '你為何要打破一顆完好的心？這個問題與其說是憤怒，不如說是錯愕。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'The first heartbreak is a sketch; years later comes the full portrait of one.', zh: '第一次心碎只是一幅素描；多年後，才有一幅完整的心碎畫像。' } },
    ],
  },
];
