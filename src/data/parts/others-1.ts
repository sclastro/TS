import type { Song } from '../types';

// 其他作品：電影歌曲、合作及單曲
// 版權說明：歌詞只作逐段解讀，不引用原文。

export const part1: Song[] = [
  {
    slug: 'crazier', title: 'Crazier', track: 1, section: 'other',
    writers: ['Taylor Swift', 'Robert Ellis Orrall'],
    single: { en: 'Soundtrack · Hannah Montana: The Movie (2009)', zh: '電影歌曲．《Hannah Montana: The Movie》（2009 年）' },
    overview: {
      en: 'A soft country ballad about a love that makes the world feel brighter and wilder, which Swift performed on screen in Hannah Montana: The Movie.',
      zh: '一首柔和的鄉謠抒情歌，寫一份令世界更明亮、更狂野的愛；Swift 在《Hannah Montana: The Movie》中親身演唱。',
    },
    context: {
      en: 'In 2009 Swift was in the middle of the Fearless era, the most successful young country star in America. A cameo in a Disney film starring [[Miley Cyrus]] put her in front of an even younger audience.',
      zh: '2009 年，Swift 正值《Fearless》時期，是全美最成功的年輕鄉謠歌手。在 [[Miley Cyrus]] 主演的迪士尼電影中客串，令她接觸到更年輕的觀眾。',
    },
    story: {
      en: 'Written with [[Robert Ellis Orrall]], one of her early Nashville collaborators, "Crazier" is gentle and romantic. In the film, Swift sings it at a small-town party while the main characters dance, a short scene that many young fans remember as their first sight of her.',
      zh: '〈Crazier〉與她早期在納什維爾的合作者之一 [[Robert Ellis Orrall]] 合寫，溫柔而浪漫。在電影中，Swift 在一個小鎮派對上演唱，主角們隨之起舞；這個短短的場景，是許多年輕歌迷第一次看見她。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She has always been careful, but this love makes her feel free.', zh: '她一向謹慎，這份愛卻令她感到自由。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He makes her feel more alive, and a little crazier, than ever before.', zh: '他令她比以往更有生命力，也更瘋狂一點。' } },
    ],
    echoes: [
      { ref: 'fearless/fearless', note: { en: 'The same era, the same fearless leap into love.', zh: '同一個時期，同樣無畏地投入愛情。' } },
    ],
  },
  {
    slug: 'safe-and-sound', title: 'Safe & Sound', track: 2, section: 'other', feat: 'The Civil Wars',
    writers: ['Taylor Swift', 'Joy Williams', 'John Paul White', 'T Bone Burnett'], producers: ['T Bone Burnett'],
    single: { en: 'Soundtrack · The Hunger Games (2012) · Grammy for Best Song Written for Visual Media', zh: '電影歌曲．《飢餓遊戲》（2012 年）．格林美最佳影視歌曲' },
    overview: {
      en: 'A haunting folk lullaby for The Hunger Games, sung with The Civil Wars: a promise of protection in a dark world.',
      zh: '一首為《飢餓遊戲》而寫、縈繞不去的民謠搖籃曲，與 The Civil Wars 合唱：在黑暗世界中守護的承諾。',
    },
    context: {
      en: 'Released at the end of 2011, between Speak Now and Red, the song showed a completely different side of Swift: hushed, acoustic and Appalachian in feeling, years before folklore.',
      zh: '這首歌於 2011 年底推出，介乎《Speak Now》與《Red》之間，展現了 Swift 截然不同的一面：輕聲、原聲、帶阿帕拉契山區民謠的感覺，比《folklore》早了許多年。',
    },
    story: {
      en: 'Swift wrote the song with [[Joy Williams]] and [[John Paul White]] of The Civil Wars and the producer [[T Bone Burnett]], inspired by the story of Katniss, who protects her younger sister and others in a brutal world.\n\nIt won the Grammy for Best Song Written for Visual Media. A re-recording, "Safe & Sound (Taylor’s Version)", was released in 2023.',
      zh: 'Swift 與 The Civil Wars 的 [[Joy Williams]]、[[John Paul White]] 及監製 [[T Bone Burnett]] 合寫這首歌，靈感來自 Katniss 的故事：她在殘酷的世界中保護妹妹和其他人。\n\n歌曲奪得格林美最佳影視歌曲獎。重錄版〈Safe & Sound (Taylor’s Version)〉於 2023 年推出。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Night falls and danger is near, but she stays close.', zh: '夜幕低垂，危險逼近，但她守在身旁。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She promises that by morning everything will be safe.', zh: '她承諾，到了早上，一切都會安然無恙。' } },
    ],
    mv: {
      id: 'RzhAS_GnJIc', director: 'Philip Andelman', date: '2012-02-13',
      scenes: [
        { scene: { en: 'The forest', zh: '森林' }, meaning: { en: 'Swift walks barefoot through dark woods in a long white gown, like a figure from a folk tale.', zh: 'Swift 身穿白色長裙赤腳走過幽暗的樹林，彷彿民間故事中的人物。' } },
        { scene: { en: 'The Civil Wars', zh: 'The Civil Wars' }, meaning: { en: 'The duo appear among the trees, their harmonies guiding her through the night.', zh: '二人組在林間出現，他們的和聲引領她走過黑夜。' } },
        { scene: { en: 'Grey dawn', zh: '灰色黎明' }, meaning: { en: 'Muted colours and smoke suggest a world after loss, matching the film’s ruined landscape.', zh: '暗淡的色調和煙霧，暗示一個經歷失去後的世界，呼應電影中殘破的景觀。' } },
      ],
    },
    echoes: [
      { ref: 'folklore/epiphany', note: { en: 'Hushed folk about protection and survival, eight years later.', zh: '八年後，再以輕聲民謠寫守護與生存。' } },
      { ref: 'evermore/willow', note: { en: 'Witchy woods and white dresses return.', zh: '帶巫術感的樹林與白裙再次出現。' } },
    ],
  },
  {
    slug: 'eyes-open', title: 'Eyes Open', track: 3, section: 'other',
    writers: ['Taylor Swift'],
    single: { en: 'Soundtrack · The Hunger Games (2012)', zh: '電影歌曲．《飢餓遊戲》（2012 年）' },
    overview: {
      en: 'Swift’s second song for The Hunger Games: a driving rock song about staying alert when everyone is watching and waiting for you to fail.',
      zh: 'Swift 為《飢餓遊戲》寫的第二首歌：一首衝勁十足的搖滾曲，寫在所有人都注視着、等你失敗時保持警覺。',
    },
    story: {
      en: 'Written by Swift alone, "Eyes Open" plays over the film’s end credits. Where "Safe & Sound" is a lullaby, this is a battle cry: trust no one and keep your eyes open.\n\nSwift has said she related the arena of the story to her own experience of fame. It was re-recorded in 2023.',
      zh: '〈Eyes Open〉由 Swift 獨自寫成，在電影片尾播放。如果說〈Safe & Sound〉是搖籃曲，這首就是戰鬥號角：不要相信任何人，時刻保持警覺。\n\nSwift 說她把故事中的競技場與自己面對名氣的經歷聯想在一起。這首歌於 2023 年重錄。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Everyone is watching, and some are hoping she will stumble.', zh: '所有人都在注視，有些人正盼望她跌倒。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'To survive, she must stay awake and watchful.', zh: '要生存，她必須保持清醒和警覺。' } },
    ],
    echoes: [
      { ref: 'reputation/ready-for-it', note: { en: 'The arena of fame, faced with armour on.', zh: '披上盔甲，面對名氣的競技場。' } },
    ],
  },
  {
    slug: 'sweeter-than-fiction', title: 'Sweeter than Fiction', track: 4, section: 'other',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Jack Antonoff'],
    single: { en: 'Soundtrack · One Chance (2013) · Golden Globe nominee', zh: '電影歌曲．《One Chance》（2013 年）．金球獎提名' },
    overview: {
      en: 'An 1980s-style pop song for a film about an underdog singer: Swift’s first released collaboration with Jack Antonoff.',
      zh: '一首八十年代風格的流行曲，為一部講述平凡歌手逆襲的電影而寫：Swift 與 Jack Antonoff 首次公開發表的合作。',
    },
    context: {
      en: 'One Chance told the true story of [[Paul Potts]], a shy phone salesman who won Britain’s Got Talent singing opera. The song came out in 2013, during the Red era, and pointed towards the synth-pop of 1989.',
      zh: '《One Chance》講述 [[Paul Potts]] 的真實故事：一位靦腆的手機推銷員，憑唱歌劇贏得《Britain’s Got Talent》。這首歌於 2013 年《Red》時期推出，預示了《1989》的合成器流行樂方向。',
    },
    story: {
      en: 'Swift wrote it with [[Jack Antonoff]], who would go on to become one of her closest collaborators. The song celebrates someone who achieves their dream against the odds, and the joy of watching it happen.\n\nIt was nominated for the Golden Globe for Best Original Song.',
      zh: 'Swift 與 [[Jack Antonoff]] 合寫；他其後成為她最親密的合作者之一。這首歌歌頌一個克服逆境、實現夢想的人，以及見證這一刻的喜悅。\n\n它獲提名金球獎最佳原創歌曲。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Nobody believed in him, and he was nearly ready to give up.', zh: '沒有人相信他，他幾乎準備放棄。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'His real-life success turns out to be better than any story.', zh: '他在現實中的成功，比任何故事都更美好。' } },
    ],
    echoes: [
      { ref: '1989/out-of-the-woods', note: { en: 'The beginning of the Swift–Antonoff partnership that shaped 1989.', zh: 'Swift 與 Antonoff 合作的起點，其後塑造了《1989》。' } },
    ],
  },
  {
    slug: 'i-dont-wanna-live-forever', title: 'I Don’t Wanna Live Forever', track: 5, section: 'other', feat: 'ZAYN',
    writers: ['Jack Antonoff', 'Taylor Swift', 'Sam Dew'], producers: ['Jack Antonoff'],
    single: { en: 'Soundtrack · Fifty Shades Darker (2016) · with ZAYN', zh: '電影歌曲．《Fifty Shades Darker》（2016 年）．與 ZAYN 合唱' },
    overview: {
      en: 'A sleek, moody duet with ZAYN about a lover who cannot stop thinking about someone after they part.',
      zh: '一首與 ZAYN 合唱、流暢而陰鬱的對唱，寫戀人分開後無法停止思念對方。',
    },
    context: {
      en: 'Released in December 2016, during Swift’s quietest public period between 1989 and reputation. It was one of very few new recordings she released that year, and became a top-five hit in the United States.',
      zh: '這首歌於 2016 年 12 月推出，正值 Swift 在《1989》與《reputation》之間最低調的時期。它是她那一年極少數推出的新錄音之一，並打進美國頭五位。',
    },
    story: {
      en: '[[ZAYN]] sings the verses in a high falsetto; Swift answers in a lower, darker register than usual. Written with [[Jack Antonoff]] and [[Sam Dew]], it hints at the darker sound she would explore on reputation.',
      zh: '[[ZAYN]] 以高亢的假聲唱主歌；Swift 則以比平常更低、更暗的音域回應。這首歌與 [[Jack Antonoff]] 及 [[Sam Dew]] 合寫，預示了她在《reputation》中探索的陰暗聲音。',
    },
    lyrics: [
      { part: { en: 'His verse', zh: '他的段落' }, meaning: { en: 'Alone behind closed doors, he cannot stop thinking about her.', zh: '他獨自關在房中，無法停止想她。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Both say that a life without each other is not worth living forever.', zh: '二人都說：沒有對方的人生，不值得永遠活下去。' } },
    ],
    mv: {
      id: '7F37r50VUTQ', director: 'Grant Singer', date: '2017-01-27',
      scenes: [
        { scene: { en: 'The hotel at night', zh: '夜裏的酒店' }, meaning: { en: 'A luxurious, dimly lit hotel becomes a maze of rooms and corridors.', zh: '一間豪華而昏暗的酒店，化成由房間和走廊組成的迷宮。' } },
        { scene: { en: 'Apart', zh: '分隔' }, meaning: { en: 'The two singers move through separate spaces, close but never quite together: the restless longing of the song.', zh: '兩位歌手在不同的空間中遊走，近在咫尺卻始終未能相聚：正是歌曲中那份躁動的渴望。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/dress', note: { en: 'The darker, sensual sound that came next.', zh: '其後到來的、更陰暗而感性的聲音。' } },
      { ref: '1989/wildest-dreams', note: { en: 'Cinematic longing, from the previous era.', zh: '上一個時期的電影式渴望。' } },
    ],
  },
];
