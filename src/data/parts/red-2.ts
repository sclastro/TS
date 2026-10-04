import type { Song } from '../types';

// Red (Taylor's Version)：第 11–21 首
export const part2: Song[] = [
  {
    slug: 'holy-ground', title: 'Holy Ground', track: 11, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Jeff Bhasker'],
    overview: {
      en: 'A racing, joyful look back at a past relationship: instead of bitterness, gratitude for the time they had.',
      zh: '一首急速而歡快的回望，寫一段過去的感情：沒有苦澀，只有對共度時光的感激。',
    },
    story: {
      en: 'Swift has said she wrote "Holy Ground" after running into an ex and feeling, for once, not pain but appreciation. Produced by [[Jeff Bhasker]], the song races along on pounding drums, as if she is running through the memories.\n\nIt is a rare moment of peace on Red, an album otherwise full of wounds.',
      zh: 'Swift 說她在偶遇前度後寫下〈Holy Ground〉：那一次，她感到的不是痛，而是感激。歌曲由 [[Jeff Bhasker]] 監製，隨着重擊的鼓聲飛奔向前，彷彿她正穿過那些回憶奔跑。\n\n在一張滿是傷口的專輯中，這是難得的平靜一刻。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the beginning of the relationship in a big city, when everything felt new.', zh: '她回想這段感情在大城市開始時的情景，那時一切都很新鮮。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The places they shared feel sacred to her now; she would rather remember them fondly than with regret.', zh: '兩人共有的地方，如今在她心中變得神聖；她寧願以溫情而非懊悔記住它們。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits she would not trade those memories, even knowing how it ended.', zh: '她承認即使知道結局，也不會拿那些回憶交換甚麼。' } },
    ],
    echoes: [
      { ref: 'red/begin-again', note: { en: 'The same album moves from looking back with gratitude to stepping forward with hope.', zh: '同一張專輯由感激地回望，走到滿懷希望地向前。' } },
    ],
  },
  {
    slug: 'sad-beautiful-tragic', title: 'Sad Beautiful Tragic', track: 12, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A hazy, waltzing lament for a relationship that slowly faded.',
      zh: '一首朦朧的華爾茲式哀歌，悼念一段慢慢淡去的感情。',
    },
    story: {
      en: 'Swift wrote this while on the road, and the recording keeps a raw, tired feeling. The title’s three words describe how she sees the relationship now: not one villain, just a slow, sad fade.\n\nThe dreamy, folk-tinged sound looks forward to the quieter albums she would make years later.',
      zh: 'Swift 在巡演途中寫下這首歌，錄音保留了一份未經修飾的疲倦感覺。歌名的三個詞形容她如今怎樣看這段感情：沒有誰是壞人，只是緩慢而悲傷地淡去。\n\n夢幻、帶民謠色彩的聲音，預示她多年後製作的那些更安靜的專輯。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the relationship as distance grew, with long phone calls and missed moments.', zh: '她回想兩人距離漸遠時的情景：漫長的電話和錯過的時刻。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'It was sad, beautiful and tragic at once, and she cannot separate those feelings.', zh: '它同時是悲傷、美麗與悲劇的，她無法把這些感受分開。' } },
    ],
    echoes: [
      { ref: 'folklore/my-tears-ricochet', note: { en: 'The hushed, mournful tone she sketched here becomes a whole album’s sound on folklore.', zh: '她在這裏勾勒的低沉哀傷語調，在《folklore》中成為整張專輯的聲音。' } },
    ],
  },
  {
    slug: 'the-lucky-one', title: 'The Lucky One', track: 13, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Jeff Bhasker'],
    overview: {
      en: 'A cautionary tale about a star who gave up fame, and a young star wondering if the same fate awaits her.',
      zh: '一個警世故事：一位放棄名氣的明星，以及一位年輕明星在想自己會否遇上同樣命運。',
    },
    story: {
      en: 'Swift wrote "The Lucky One" about the dark side of fame: a woman who was once a huge star, whom everyone called lucky, until she disappeared from public life to find peace. Swift has said it was inspired by stories of performers who walked away.\n\nIt is one of the earliest songs in which she questions the cost of the life she had chosen, a theme that would return again and again.',
      zh: 'Swift 寫〈The Lucky One〉，寫的是名氣的陰暗面：一位曾經紅極一時、人人說她幸運的女子，最終為了尋找平靜而從公眾視線中消失。Swift 說靈感來自一些毅然離開的表演者的故事。\n\n這是她最早質疑自己所選擇的生活要付出甚麼代價的歌之一，這個主題日後一再出現。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A young woman arrives in the city and becomes famous almost overnight. Everyone tells her she is lucky.', zh: '一位年輕女子來到城市，幾乎一夜成名。人人都說她幸運。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The fame isn’t what it seems: behind the glamour is loneliness and pressure.', zh: '名氣並不如表面：光鮮背後是孤獨與壓力。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'The star disappears and lives quietly. People call it a tragedy; she might be the one who escaped.', zh: '那位明星消失了，過着安靜的生活。人們說這是悲劇；也許她才是逃出來的那一個。' } },
    ],
    echoes: [
      { ref: 'speak-now/castles-crumbling', note: { en: 'Another early meditation on how quickly public love can vanish.', zh: '另一首早期作品，沉思公眾的愛會消失得多快。' } },
      { ref: 'the-tortured-poets-department/clara-bow', note: { en: 'Twelve years later, she writes about the machine that makes and replaces stars.', zh: '十二年後，她寫造就明星又取代明星的那部機器。' } },
    ],
  },
  {
    slug: 'everything-has-changed', title: 'Everything Has Changed', track: 14, section: 'standard', feat: 'Ed Sheeran',
    writers: ['Taylor Swift', 'Ed Sheeran'], producers: ['Butch Walker'],
    single: { en: 'Sixth single, July 2013', zh: '第六支單曲，2013 年 7 月' },
    overview: {
      en: 'A gentle duet with Ed Sheeran about meeting someone and feeling your world shift: the start of a lifelong friendship.',
      zh: '一首與 Ed Sheeran 合唱的溫柔對唱，寫遇見某人後世界隨之轉變；也是兩人一生友誼的開端。',
    },
    story: {
      en: 'Swift and [[Ed Sheeran]] wrote the song together in her backyard, famously sitting on a trampoline. It marked the start of a close friendship and collaboration: he opened for her on the Red Tour, and they worked together again many times.\n\nThe song is about the quiet thrill of early attraction, when you want to know everything about someone.',
      zh: 'Swift 與 [[Ed Sheeran]] 在她家後院一同寫下這首歌，兩人當時坐在彈床上，這個細節後來廣為人知。這首歌開啟了兩人深厚的友誼和合作：他其後擔任 Red Tour 的嘉賓，兩人亦多次再度合作。\n\n歌曲寫的是初生吸引力那份安靜的悸動：你想知道對方的一切。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'After meeting someone for the first time, she notices she cannot stop thinking about them.', zh: '第一次見面後，她發現自己無法停止想着對方。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She wants to know them better, every small detail, because everything has changed since they met.', zh: '她想更了解對方，了解每一個細節，因為自從相遇，一切都改變了。' } },
      { part: { en: 'Duet verse', zh: '對唱段落' }, meaning: { en: 'Sheeran sings the other side: he feels the same, equally shy and hopeful.', zh: 'Sheeran 唱出另一方：他也有同樣的感覺，同樣害羞而滿懷希望。' } },
    ],
    mv: {
      id: 'w1oM3kQpXRo', director: 'Philip Andelman', date: '2013-06',
      scenes: [
        { scene: { en: 'Two children', zh: '兩個小孩' }, meaning: { en: 'The video follows a young boy and girl who meet at school and become inseparable friends, a sweet, innocent take on the song.', zh: 'MV 講述一對小男孩和小女孩在學校相遇，成為形影不離的朋友，是對這首歌甜美而純真的演繹。' } },
        { scene: { en: 'The reveal', zh: '揭曉' }, meaning: { en: 'At the end, the children are picked up by their parents, played by Swift and Sheeran, suggesting their friendship continues into the next generation.', zh: '結尾，兩個孩子由各自的父母接走，而父母正是 Swift 和 Sheeran，暗示兩人的友誼延續到下一代。' } },
      ],
    },
    echoes: [
      { ref: 'red/run', note: { en: 'Another Swift–Sheeran song from the same sessions, released from the vault in 2021.', zh: '另一首來自同期錄音的 Swift 與 Sheeran 合作歌曲，2021 年從寶庫中推出。' } },
      { ref: 'reputation/end-game', note: { en: 'Five years later, Sheeran joins her again on a very different kind of song.', zh: '五年後，Sheeran 再度與她合作，這次是一首風格截然不同的歌。' } },
    ],
  },
  {
    slug: 'starlight', title: 'Starlight', track: 15, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Dann Huff', 'Nathan Chapman'],
    overview: {
      en: 'A sparkling song imagining the youthful romance of Ethel and Robert Kennedy, inspired by an old photograph.',
      zh: '一首閃亮的歌，想像 Ethel 與 Robert Kennedy 年輕時的戀愛，靈感來自一張舊照片。',
    },
    story: {
      en: 'Swift has said she saw a photograph of [[Ethel Kennedy]] and [[Robert Kennedy]] as teenagers, dancing at a party, and imagined the story of their night. She wrote the song as a gift, and later played it for Ethel Kennedy.\n\nIt is one of her earliest songs about real historical figures, a technique she would return to on folklore.',
      zh: 'Swift 說她看到一張 [[Ethel Kennedy]] 和 [[Robert Kennedy]] 少年時在派對上跳舞的照片，便想像那一晚的故事。她把這首歌當作禮物寫成，後來更親自唱給 Ethel Kennedy 聽。\n\n這是她最早寫真實歷史人物的歌之一，她日後在《folklore》中再次運用這種手法。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A teenage couple sneak into a yacht club party and dance all night, young and reckless.', zh: '一對少年情侶偷偷溜進遊艇會的派對，年輕又魯莽地跳了整晚舞。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Their love is starlight: bright, youthful and full of big dreams for the future.', zh: '他們的愛像星光：明亮、年輕，對將來滿懷遠大夢想。' } },
    ],
    echoes: [
      { ref: 'folklore/the-last-great-american-dynasty', note: { en: 'Eight years later, another song built from the true story of a real American family.', zh: '八年後，另一首建基於美國真實家族故事的歌。' } },
      { ref: 'speak-now/timeless', note: { en: 'Old photographs inspire imagined love stories in both songs.', zh: '兩首歌都由舊照片啟發出想像的愛情故事。' } },
    ],
  },
  {
    slug: 'begin-again', title: 'Begin Again', track: 16, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Dann Huff', 'Nathan Chapman'],
    single: { en: 'Second single, 1 October 2012', zh: '第二支單曲，2012 年 10 月 1 日' },
    overview: {
      en: 'The album’s closing song: the first date after a terrible breakup, and the shy hope of starting over.',
      zh: '專輯的壓軸歌：一段糟糕分手後的第一次約會，以及重新開始的羞澀盼望。',
    },
    story: {
      en: 'Swift has described "Begin Again" as being about when you have gotten through a really bad relationship and finally go on a first date after it. She placed it last on Red so that the album, after all its heartbreak, would end on hope.\n\nThe details are small and telling: the new person laughs at her jokes, likes the same music, and treats her kindly. After what came before, kindness feels like a revelation.',
      zh: 'Swift 形容〈Begin Again〉寫的是熬過一段非常糟糕的感情後，終於去第一次約會的時候。她把它放在《Red》的最後，讓這張滿是心碎的專輯以希望作結。\n\n細節細小而意味深長：新認識的人會因她的笑話而笑、喜歡同樣的音樂、溫柔地待她。經歷過之前的一切，溫柔本身就像一次啟示。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Getting ready for a date, she remembers how her ex used to criticise small things about her, like her shoes.', zh: '準備赴約時，她想起前度從前如何批評她的小事，例如她的鞋子。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'On a Wednesday in a café, she watches the new person laugh, and realises she might be able to start again.', zh: '某個星期三在咖啡店，她看着對方笑，明白自己或許可以重新開始。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'He likes a singer she loves, the kind of music her ex dismissed, and the small agreement feels huge.', zh: '他喜歡一位她也很喜愛的歌手，正是前度不屑的那種音樂；這小小的共鳴，感覺意義重大。' } },
    ],
    mv: {
      id: 'cMPEd8m79Hw', director: 'Philip Andelman', date: '2012-10',
      scenes: [
        { scene: { en: 'Paris', zh: '巴黎' }, meaning: { en: 'Swift wanders through Paris alone, by the Seine and through quiet streets, enjoying her own company.', zh: 'Swift 獨自漫步巴黎，經過塞納河畔和寧靜的街道，享受獨處。' } },
        { scene: { en: 'The café', zh: '咖啡店' }, meaning: { en: 'A brief encounter with a stranger suggests the possibility of something new, without rushing it.', zh: '與一位陌生人的短暫相遇，暗示新開始的可能，卻不急於求成。' } },
      ],
    },
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'The album’s darkest memory and its brightest hope sit on the same record.', zh: '專輯最黑暗的回憶與最明亮的希望，同在一張專輯之中。' } },
      { ref: 'lover/paper-rings', note: { en: 'The hope of starting over, fully realised years later.', zh: '重新開始的盼望，多年後完全實現。' } },
    ],
  },
  {
    slug: 'the-moment-i-knew', title: 'The Moment I Knew', track: 17, section: 'deluxe',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A birthday party, a guest who never arrived, and the moment she knew the relationship was over.',
      zh: '一個生日派對、一位始終沒有出現的客人，以及她知道這段感情已經完結的那一刻。',
    },
    story: {
      en: 'Swift has said "The Moment I Knew" is about a birthday party where the person she most wanted to be there did not come. It is one of the most specific and painful songs on the deluxe edition.\n\nThe scene is precise: the decorations, the friends asking where he is, the forced smile, and the late phone call apologising.',
      zh: 'Swift 說〈The Moment I Knew〉寫的是一個生日派對：她最希望出現的人卻沒有來。這是 deluxe 版中最具體、最痛的歌之一。\n\n場景非常精準：佈置、朋友問他在哪裏、勉強擠出的笑容，以及深夜那通道歉的電話。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She waits at her party, checking the door, while guests ask where her boyfriend is.', zh: '她在自己的派對上等待，頻頻望向門口，客人問她男友在哪裏。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The empty spot in the room becomes the moment she understands the truth about the relationship.', zh: '房間中那個空位，成為她明白這段感情真相的一刻。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'He calls late with an apology, and she realises it is too little and too late.', zh: '他很晚才打電話道歉，她明白這太少，也太遲了。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'Fans have long read the two songs as chapters of the same story.', zh: '歌迷一直把兩首歌視為同一個故事的不同章節。' } },
    ],
  },
  {
    slug: 'come-back-be-here', title: 'Come Back... Be Here', track: 18, section: 'deluxe',
    writers: ['Taylor Swift', 'Dan Wilson'], producers: ['Dan Wilson'],
    overview: {
      en: 'Missing someone who has gone to another country, and the time difference that makes everything harder.',
      zh: '思念一個去了另一個國家的人，以及令一切更艱難的時差。',
    },
    story: {
      en: 'Written with [[Dan Wilson]], the song captures a romance cut short by distance: they met, felt something real, and then he had to leave for another country. She counts the hours and the time zones.\n\nIt is wistful rather than angry, a song about wanting something that geography will not allow.',
      zh: '這首歌與 [[Dan Wilson]] 合寫，捕捉一段被距離截斷的戀情：兩人相遇、感受到真實的東西，然後他必須去另一個國家。她數着時數和時區。\n\n它惆悵而不憤怒，寫的是渴望一些地理距離不容許的東西。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes their brief time together in New York and the moment he left.', zh: '她描述兩人在紐約短暫相處的時光，以及他離開的一刻。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks him to come back and be here, because a phone call across time zones is not enough.', zh: '她請他回來、留在這裏，因為跨越時區的電話並不足夠。' } },
    ],
    echoes: [
      { ref: 'lover/london-boy', note: { en: 'Years later, a transatlantic romance is celebrated rather than mourned.', zh: '多年後，一段橫跨大西洋的戀情被慶祝而不是哀悼。' } },
    ],
  },
  {
    slug: 'girl-at-home', title: 'Girl at Home', track: 19, section: 'deluxe',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Elvira Anderfjärd'],
    overview: {
      en: 'Turning down a flirt because he has a girlfriend at home, in a song remade as glossy synth-pop for the Taylor’s Version.',
      zh: '因對方家中已有女友而拒絕他的調情；這首歌在 Taylor’s Version 中被重製為光亮的合成器流行曲。',
    },
    story: {
      en: 'On the original 2012 deluxe edition, "Girl at Home" was a light country-pop song. For Red (Taylor’s Version), Swift and producer [[Elvira Anderfjärd]] reimagined it as bright electronic pop, one of the few re-recordings to change the arrangement significantly.\n\nThe message is the same: she is not interested in a man who flirts with her while someone waits for him at home.',
      zh: '在 2012 年原版 deluxe 版中，〈Girl at Home〉是一首輕快的鄉村流行曲。到了《Red (Taylor’s Version)》，Swift 與監製 [[Elvira Anderfjärd]] 把它重新構想為明亮的電子流行曲，是少數編曲大幅改變的重錄歌曲之一。\n\n訊息不變：一個家中有人等候、卻仍向她調情的男人，她毫無興趣。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A man flirts with her and she notices the ring, or the girlfriend he has mentioned.', zh: '一個男人向她調情，而她留意到他的戒指，或他提過的女朋友。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She refuses: she is thinking of the girl at home, and she will not be part of hurting her.', zh: '她拒絕了：她想到家中的那個女孩，不會參與傷害她。' } },
    ],
    echoes: [
      { ref: 'fearless/you-belong-with-me', note: { en: 'A shift in perspective: here she takes the side of the girlfriend.', zh: '角度的轉變：這次她站在女朋友那一邊。' } },
    ],
  },
  {
    slug: 'ronan', title: 'Ronan', track: 21, section: 'bonus',
    writers: ['Taylor Swift', 'Maya Thompson'], producers: ['Taylor Swift'],
    single: { en: 'Charity single, September 2012', zh: '慈善單曲，2012 年 9 月' },
    overview: {
      en: 'A devastating song written from a mother’s blog about her young son, who died of cancer: proceeds went to cancer charities.',
      zh: '一首令人心碎的歌，取材自一位母親的網誌，寫她因癌症離世的年幼兒子；收益捐給癌症慈善機構。',
    },
    story: {
      en: 'Swift read the blog of [[Maya Thompson]], whose son Ronan died of neuroblastoma shortly before his fourth birthday. Moved by Thompson’s words, she wrote a song using phrases and memories from the blog, and credited Thompson as co-writer.\n\nSwift performed it at the Stand Up to Cancer telethon in 2012 and released it as a charity single. She included it on Red (Taylor’s Version) with Thompson’s blessing.',
      zh: 'Swift 讀到 [[Maya Thompson]] 的網誌；她的兒子 Ronan 在快滿四歲前因神經母細胞瘤離世。Swift 被 Thompson 的文字打動，以網誌中的字句和回憶寫成一首歌，並把 Thompson 列為合寫人。\n\nSwift 在 2012 年 Stand Up to Cancer 慈善節目中演唱，並以慈善單曲形式推出。在 Thompson 的同意下，她把這首歌收錄進《Red (Taylor’s Version)》。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The mother remembers small, everyday moments with her son, the sounds and routines of their life together.', zh: '母親回想與兒子相處的日常片段，兩人生活中的聲音和習慣。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She speaks directly to her son, telling him she remembers everything and will love him always.', zh: '她直接對兒子說話，告訴他自己記得一切，並會永遠愛他。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'The grief is quiet and unbearable; the song ends with a goodbye no parent should have to say.', zh: '哀傷安靜而難以承受；歌曲以一句任何父母都不應說出口的道別作結。' } },
    ],
    echoes: [
      { ref: 'lover/soon-youll-get-better', note: { en: 'Another song that sits beside illness and the fear of losing someone.', zh: '另一首陪伴在疾病旁、面對失去恐懼的歌。' } },
      { ref: 'evermore/marjorie', note: { en: 'Grief for a loved one, years later, written about her own grandmother.', zh: '多年後，她為自己的祖母寫下對至親的哀思。' } },
    ],
  },
];
