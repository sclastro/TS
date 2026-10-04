import type { Song } from '../types';

// Lover（2019）：第 1–9 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const JA = ['Taylor Swift', 'Jack Antonoff'];

export const part1: Song[] = [
  {
    slug: 'i-forgot-that-you-existed', title: 'I Forgot That You Existed', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Louis Bell', 'Frank Dukes'], producers: ['Taylor Swift', 'Louis Bell', 'Frank Dukes'],
    overview: {
      en: 'A breezy, finger-snapping opener: the best revenge on old enemies turns out to be simply forgetting them.',
      zh: '一首輕快、伴着響指聲的開場曲：對付舊敵最好的報復，原來只是把他們忘掉。',
    },
    context: {
      en: 'After reputation, Swift wanted Lover to feel like walking out into daylight. The first song deliberately closes the door on the anger of the previous era.',
      zh: '經歷《reputation》之後，Swift 希望《Lover》像走進日光之中。第一首歌刻意關上了上一個時期憤怒的大門。',
    },
    story: {
      en: 'Written with [[Louis Bell]] and [[Frank Dukes]], the song is light and almost conversational. Swift describes how much energy she once spent on people who hurt her, and the relief of realising one day that she simply had not thought about them.\n\nIt is the opposite of "Look What You Made Me Do": indifference instead of revenge.',
      zh: '這首歌與 [[Louis Bell]]、[[Frank Dukes]] 合寫，輕鬆得近乎聊天。Swift 描述自己曾把多少精力花在傷害她的人身上，以及有一天察覺自己根本沒有再想起他們時的那份釋然。\n\n它正好是〈Look What You Made Me Do〉的相反：以漠不關心代替報復。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers how much space someone used to take up in her mind, and how exhausting it was.', zh: '她回想某人曾在她腦海中佔據多大的空間，以及那有多令人疲累。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'One day she forgot about them, and it felt like nothing at all: not love, not hate, just peace.', zh: '有一天她忘記了對方，感覺就像甚麼都沒有：沒有愛，沒有恨，只有平靜。' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'The previous era’s anthem of revenge, now replaced by indifference.', zh: '上一個時期的復仇頌歌，如今被漠不關心取代。' } },
    ],
  },
  {
    slug: 'cruel-summer', title: 'Cruel Summer', track: 2, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Annie Clark'], producers: JA,
    single: { en: 'Released as a single in June 2023 · Hot 100 No. 1, four years after release', zh: '2023 年 6 月以單曲推出．推出四年後登上 Hot 100 冠軍' },
    overview: {
      en: 'A thrilling, anxious summer romance with one of her most famous bridges, which became a number-one hit four years late.',
      zh: '一段刺激又焦慮的夏日戀情，擁有她最著名的橋段之一；這首歌遲了四年才成為冠軍歌。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]] and [[Annie Clark]] (St. Vincent), "Cruel Summer" describes a secret, uncertain romance in the heat of summer, full of the fear that it will not survive. The bridge, in which she almost shouts her confession, became one of the most beloved moments in her catalogue.\n\nPlanned as a single in 2020 but shelved because of the pandemic, it became a huge hit after its inclusion on the Eras Tour, and was finally released as a single in 2023, reaching number one.',
      zh: '〈Cruel Summer〉與 [[Jack Antonoff]] 及 [[Annie Clark]]（St. Vincent）合寫，描寫一段在炎夏中秘密而不確定的戀情，充滿害怕它無法延續的恐懼。橋段中她近乎吶喊地說出告白，成為她作品中最受喜愛的時刻之一。\n\n這首歌原定於 2020 年推出為單曲，卻因疫情擱置。它在 Eras Tour 演出後大受歡迎，終於在 2023 年以單曲推出，並登上冠軍。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A hidden romance in summer: sneaking around, unsure what the other person feels, pretending it is nothing.', zh: '一段在夏天隱藏的戀情：偷偷摸摸、不確定對方的心意，假裝這不算甚麼。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The summer is cruel because it is so intense and so uncertain: she is falling and cannot tell if he will catch her.', zh: '這個夏天殘酷，因為它如此濃烈又如此不確定：她正在墮落，卻不知道他會否接住她。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'In a late-night car scene she finally blurts out that she loves him, fully expecting to be rejected. The release is enormous.', zh: '深夜車上的一幕，她終於脫口說出愛他，並完全預期會被拒絕。這一刻的宣洩無比巨大。' } },
    ],
    echoes: [
      { ref: 'reputation/delicate', note: { en: 'The same insecurity at the start of a relationship, two years earlier.', zh: '兩年前，同樣是感情開始時的不安。' } },
      { ref: 'lover/the-archer', note: { en: 'Another Lover song in which she braces for rejection.', zh: '《Lover》中另一首她準備好被拒絕的歌。' } },
    ],
  },
  {
    slug: 'lover', title: 'Lover', track: 3, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Third single, 16 August 2019', zh: '第三支單曲，2019 年 8 月 16 日' },
    overview: {
      en: 'A slow, swaying waltz written alone: an everyday vow of lifelong love, imagined as a wedding toast.',
      zh: '一首緩慢搖擺、由她獨力寫成的華爾茲：一份日常的終生愛情誓言，想像成婚禮上的祝酒詞。',
    },
    story: {
      en: 'Swift wrote "Lover" by herself at the piano and wanted it to sound like a song that could be played at a wedding reception, timeless and slightly old-fashioned. It is about a domestic, settled kind of love: keeping the Christmas lights up all year, inviting friends over, building a life.\n\nThe bridge is written as a set of wedding vows, which is why it became a popular first-dance song.',
      zh: 'Swift 獨自在鋼琴前寫下〈Lover〉，希望它聽起來像可以在婚宴上播放的歌，永恆而帶點復古。歌曲寫的是一種居家、安穩的愛：整年都掛着聖誕燈、邀請朋友來家中作客、一起建立生活。\n\n橋段寫得像一套結婚誓詞，因此成為婚禮第一支舞的熱門歌曲。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'They have left the festive lights up long after the holidays, a sign of a home they are in no hurry to change.', zh: '節日過後很久，他們仍掛着節日燈飾，象徵一個他們不急於改變的家。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks whether she can keep him forever, and calls him by the simplest word for what he is to her.', zh: '她問自己能否永遠擁有他，並用最簡單的一個詞稱呼他在她心中的身份。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'A playful set of wedding vows, swearing to be overdramatic and true, and to love him for life.', zh: '一套俏皮的結婚誓詞：發誓會誇張地、真誠地愛他一輩子。' } },
    ],
    mv: {
      id: '-BjZmE2gtdo', director: 'Drew Kirsch & Taylor Swift', date: '2019-08-22',
      scenes: [
        { scene: { en: 'The snow globe', zh: '雪球' }, meaning: { en: 'A young couple lives inside a dollhouse inside a snow globe. The image suggests a love that is its own small, protected world.', zh: '一對年輕情侶住在雪球中的娃娃屋裏。這個意象暗示一份自成一角、被保護的小世界般的愛。' } },
        { scene: { en: 'Coloured rooms', zh: '不同顏色的房間' }, meaning: { en: 'Each room of the dollhouse is a different colour and mood, from a blue bathroom flooded with water to a green dance hall, like rooms in a relationship.', zh: '娃娃屋的每個房間顏色和氣氛都不同，由浸滿水的藍色浴室到綠色舞廳，就像一段感情中的不同房間。' } },
        { scene: { en: 'The years', zh: '歲月' }, meaning: { en: 'They argue, make up, celebrate holidays and grow together, and the video ends by returning to the snow globe, a whole life held in two hands.', zh: '他們爭吵、和好、慶祝節日、一同成長；MV 最後回到雪球，一整個人生被捧在一雙手中。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/mine', note: { en: 'A whole life imagined in one song, nine years earlier, with more fear and less certainty.', zh: '九年前，同樣在一首歌中想像一整個人生，那時多了恐懼、少了肯定。' } },
      { ref: 'taylor-swift/marys-song-oh-my-my-my', note: { en: 'The lifelong love she imagined for her neighbours at sixteen, now her own.', zh: '十六歲時她為鄰居想像的終生之愛，如今屬於她自己。' } },
    ],
  },
  {
    slug: 'the-man', title: 'The Man', track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Joel Little'], producers: ['Taylor Swift', 'Joel Little'],
    single: { en: 'Fourth single, January 2020', zh: '第四支單曲，2020 年 1 月' },
    overview: {
      en: 'A sharp, catchy thought experiment: if she had done everything she has done as a man, how differently would she be treated?',
      zh: '一個尖銳又朗朗上口的思想實驗：如果她作為男人做過同樣的事，會被怎樣不同地對待？',
    },
    story: {
      en: 'Written with [[Joel Little]], "The Man" lists the double standards Swift had experienced: a man with her dating history would be called a player, a man with her ambition would be called a leader, a man with her success would be praised rather than suspected.\n\nShe made her solo directorial debut with its video, playing a man in a full prosthetic transformation.',
      zh: '〈The Man〉與 [[Joel Little]] 合寫，列出 Swift 經歷過的雙重標準：有她這樣感情史的男人會被稱為情場高手，有她這樣野心的男人會被稱為領袖，有她這樣成就的男人會被讚揚而不是被懷疑。\n\n她以這首歌的 MV 作為個人導演處女作，透過全套化妝特效，親自飾演一個男人。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She imagines that as a man, her confidence would be admired, her dating life ignored, her success accepted without question.', zh: '她想像作為男人，她的自信會被欣賞、感情生活會被無視、成就會被理所當然地接受。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She is exhausted by working as hard as possible while suspecting that her gender is the thing slowing her down.', zh: '她厭倦了拚盡全力，卻總懷疑拖慢自己的，其實是性別。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She points out how differently the public talks about men and women who behave the same way.', zh: '她指出公眾如何以截然不同的方式談論行為相同的男人和女人。' } },
    ],
    mv: {
      id: 'AqAJLh9wuZ0', director: 'Taylor Swift', date: '2020-02-27',
      note: { en: 'Swift’s solo directorial debut; the character’s speaking voice is dubbed by Dwayne Johnson.', zh: 'Swift 的個人導演處女作；角色的說話聲由 Dwayne Johnson 配音。' },
      scenes: [
        { scene: { en: 'Tyler Swift', zh: 'Tyler Swift' }, meaning: { en: 'Swift plays a businessman who behaves badly everywhere, on the subway, at work, at a tennis match, and is applauded for it.', zh: 'Swift 飾演一位商人，無論在地鐵、辦公室還是網球場都行為不檢，卻處處獲得掌聲。' } },
        { scene: { en: 'The yacht and the party', zh: '遊艇與派對' }, meaning: { en: 'Surrounded by younger women, he is celebrated rather than criticised, an exaggerated version of the double standard in the lyric.', zh: '他被年輕女子包圍，卻被讚頌而非批評，誇張地呈現歌詞中的雙重標準。' } },
        { scene: { en: 'Easter eggs', zh: '彩蛋' }, meaning: { en: 'The video is packed with references, including graffiti naming her albums and a sign warning that her early albums are "missing", a pointed comment on the sale of her masters.', zh: 'MV 藏有大量彩蛋，包括寫着她各張專輯名稱的塗鴉，以及一張指她早期專輯「失蹤」的告示，直指她母帶被出售一事。' } },
        { scene: { en: 'The director', zh: '導演' }, meaning: { en: 'The final scene reveals Swift as the director, telling the actor how to play the part: she is in control.', zh: '最後一幕揭示 Swift 是導演，正在指導演員如何演繹：掌控一切的是她。' } },
      ],
    },
    echoes: [
      { ref: '1989/blank-space', note: { en: 'Five years earlier she satirised the same double standard through a character; here she says it directly.', zh: '五年前她透過角色諷刺同樣的雙重標準；這次她直接說出來。' } },
      { ref: 'speak-now/better-than-revenge', note: { en: 'An older song she later revised, partly because she came to see these double standards differently.', zh: '一首她後來修改過的舊歌，部分原因是她對這些雙重標準有了不同看法。' } },
    ],
  },
  {
    slug: 'the-archer', title: 'The Archer', track: 5, section: 'standard',
    writers: JA, producers: JA,
    single: { en: 'Promotional single, July 2019', zh: '宣傳單曲，2019 年 7 月' },
    overview: {
      en: 'The track five of Lover: a quietly devastating song about her own insecurities, and why anyone would stay with her.',
      zh: '《Lover》的第五首：一首安靜卻令人心碎的歌，寫她自己的不安，以及為何有人會留在她身邊。',
    },
    context: {
      en: 'Swift has said that the fifth track on her albums is often the most honest and vulnerable. Fans had long noticed this pattern, and she began acknowledging it around Lover.',
      zh: 'Swift 曾表示，她每張專輯的第五首歌往往是最坦白、最脆弱的一首。歌迷早已察覺這個規律，她亦在 Lover 時期開始公開承認。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "The Archer" builds slowly over a pulsing synth that never quite resolves, like a held breath. The lyric is self-critical: she describes herself as someone who has been both hunter and prey, who pushes people away and then fears they will leave.\n\nIt is one of the most introspective songs she had written up to that point.',
      zh: '〈The Archer〉與 [[Jack Antonoff]] 合寫，在一段始終沒有落定的脈動合成器上慢慢累積，像屏住了呼吸。歌詞充滿自我批判：她形容自己既是獵人也是獵物，會把人推開，然後又害怕他們離去。\n\n這是她當時寫過最內省的歌之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits she has been both the archer and the target, wounding and being wounded.', zh: '她承認自己既是射手也是箭靶，傷害別人，也被傷害。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks whoever is listening to help her hold on to the person she loves, and wonders why he would stay.', zh: '她向任何在聽的人求助，請幫她留住所愛的人，並不明白他為何會留下。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She lists her flaws: she cuts people off, she cannot let go of grudges, she sees enemies everywhere. The honesty is uncomfortable and brave.', zh: '她數出自己的缺點：她會與人斷絕往來、放不下怨恨、到處都看見敵人。這份坦白令人不安，卻很勇敢。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'Another legendary track five.', zh: '另一首傳奇的第五首歌。' } },
      { ref: 'midnights/anti-hero', note: { en: 'Three years later, the self-examination of this song becomes a hit single.', zh: '三年後，這首歌的自我審視變成了一首熱門單曲。' } },
      { ref: 'reputation/delicate', note: { en: 'The same fear of not being enough for someone, two years earlier.', zh: '兩年前，同樣害怕自己對某人來說不夠好。' } },
    ],
  },
  {
    slug: 'i-think-he-knows', title: 'I Think He Knows', track: 6, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A flirty, falsetto-led song about a crush who is very aware of the effect he has.',
      zh: '一首以假音帶動、充滿調情意味的歌，寫一個很清楚自己有多大魅力的心儀對象。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "I Think He Knows" is one of the most playful songs on Lover, built on a funky bass line and breathy vocals. Swift describes the confident ease of someone she is falling for, and her own giddy, slightly obsessive reaction.\n\nOne line places them on a famous Nashville street of music publishers, a nod to her own beginnings.',
      zh: '〈I Think He Knows〉與 [[Jack Antonoff]] 合寫，是《Lover》中最俏皮的歌之一，建基於放克味的低音和氣聲唱腔。Swift 描述她心儀的人那份自信從容，以及自己暈陀陀、有點着迷的反應。\n\n其中一句把兩人放在納什維爾一條滿是音樂出版公司的著名街道上，向她自己的起點致意。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes his looks and manner, and realises he can tell exactly how she feels.', zh: '她描述他的外表和舉止，並察覺他完全看得出她的心意。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He knows how much she likes him, and she does not mind that he knows.', zh: '他知道她有多喜歡他，而她並不介意他知道。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines walking with him down a street full of memories from her early career in Nashville.', zh: '她想像與他走在一條滿載她早年納什維爾回憶的街道上。' } },
    ],
    echoes: [
      { ref: 'reputation/gorgeous', note: { en: 'Two years earlier, the same giddy attraction played for laughs.', zh: '兩年前，同樣暈陀陀的吸引，以喜劇方式呈現。' } },
    ],
  },
  {
    slug: 'miss-americana-and-the-heartbreak-prince', title: 'Miss Americana & the Heartbreak Prince', track: 7, section: 'standard',
    writers: ['Taylor Swift', 'Joel Little'], producers: ['Taylor Swift', 'Joel Little'],
    overview: {
      en: 'An American high school as a metaphor for a country that has turned bitter, sung by the disillusioned homecoming queen.',
      zh: '以一所美國高中比喻一個變得苦澀的國家，由一位幻滅了的返校節皇后唱出。',
    },
    context: {
      en: 'Swift has said she wrote this song after the 2018 US midterm elections, when she had spoken publicly about politics for the first time and felt disheartened by the results. Its title also gave its name to her 2020 documentary.',
      zh: 'Swift 說她在 2018 年美國中期選舉後寫下這首歌；那次她首次公開談論政治，對結果感到灰心。這首歌的名字後來亦成為她 2020 年紀錄片的片名。',
    },
    story: {
      en: 'Written with [[Joel Little]], the song uses images of an American high school, pep rallies, cheerleaders, the homecoming queen, to describe feeling alienated from the country’s politics and its treatment of her. The dark, chant-filled production makes it one of the moodiest songs on Lover.\n\nThe narrator and her love interest are outsiders together, determined to survive what they see as a hostile school.',
      zh: '這首歌與 [[Joel Little]] 合寫，借用美國高中的意象，例如打氣大會、啦啦隊、返校節皇后，描寫她對國家政治、以及國家如何對待她的疏離感。陰暗、充滿口號聲的編曲，令它成為《Lover》中情緒最濃的歌之一。\n\n敘述者與她的戀人同是局外人，決意要熬過這所他們眼中充滿敵意的學校。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The once-popular girl now feels hunted and unwelcome in the school she used to rule.', zh: '那個曾經受歡迎的女孩，如今在她曾經稱霸的學校裏覺得被追捕、不受歡迎。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She and her partner plan to run away from it all together, a teenage fantasy of escape that stands for something larger.', zh: '她與伴侶計劃一起逃離一切；這個少年式的逃亡幻想，象徵更大的事情。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Cheerleader chants turn sinister, and she resolves to stay and fight for what she believes in.', zh: '啦啦隊的口號變得陰森，她決心留下來，為自己相信的事情而戰。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/the-outside', note: { en: 'The outsider at school, now as a metaphor for a whole country.', zh: '學校中的局外人，如今成為整個國家的比喻。' } },
      { ref: 'fearless/fifteen', note: { en: 'High school imagery, from innocence to disillusionment.', zh: '高中的意象，由天真走到幻滅。' } },
    ],
  },
  {
    slug: 'paper-rings', title: 'Paper Rings', track: 8, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A bouncy, surf-rock love song: she likes shiny things, but she would marry him with paper rings.',
      zh: '一首輕快的衝浪搖滾情歌：她喜歡閃亮的東西，但願意以紙造的戒指嫁給他。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "Paper Rings" is one of the happiest songs Swift has written, with a punky, retro energy. It celebrates a love so certain that the trappings, expensive rings and grand gestures, no longer matter.\n\nThe song moves through the relationship’s stages, from awkward first meetings to wanting a lifetime together.',
      zh: '〈Paper Rings〉與 [[Jack Antonoff]] 合寫，是 Swift 寫過最快樂的歌之一，帶着龐克和復古的能量。它讚頌一份如此篤定的愛，以致那些外在的東西，例如昂貴的戒指和盛大的舉動，都已不再重要。\n\n歌曲走過這段感情的不同階段，由尷尬的初次見面，到想共度一生。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers their first meeting, when she was distant and he was patient.', zh: '她回想兩人初次見面，那時她很冷淡，而他很有耐性。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She loves luxury, she admits, but she would happily marry him with the simplest possible ring.', zh: '她承認自己喜歡奢華，但願意以最簡單的戒指歡喜地嫁給他。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She wants to be with him through the worst and best moments: cold winters, bad days, all of it.', zh: '她想與他共度最好和最壞的時刻：寒冬、糟糕的日子，一切。' } },
    ],
    echoes: [
      { ref: 'fearless/fearless', note: { en: 'The fairy-tale first date of 2008 becomes something simpler and more real.', zh: '2008 年童話式的初次約會，變成一些更簡單、更真實的東西。' } },
      { ref: 'speak-now/mine', note: { en: 'A love that survives everyday life, sung with more joy and less fear.', zh: '一份在日常生活中存活的愛，唱得更快樂、更少恐懼。' } },
    ],
  },
  {
    slug: 'cornelia-street', title: 'Cornelia Street', track: 9, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'A street in Greenwich Village that holds the beginning of a love story, and the fear that if it ends she could never walk there again.',
      zh: '格林威治村的一條街道，承載着一段愛情的開端；以及害怕如果愛情結束，她再也無法走過那裏的恐懼。',
    },
    story: {
      en: 'Swift wrote "Cornelia Street" alone about a townhouse she rented in New York in 2016, at the start of a relationship. The song moves from a specific memory, a taxi ride, a conversation about where she lived, to a broader fear: that places become haunted by the people we lose.\n\nIt is one of the most tender and anxious love songs on the album.',
      zh: 'Swift 獨力寫下〈Cornelia Street〉，寫的是 2016 年一段感情開始時，她在紐約租住的一幢連排屋。歌曲由一段具體的回憶，例如一程的士、一段關於她住處的對話，延伸到更廣的恐懼：地方會被我們失去的人所縈繞。\n\n這是專輯中最溫柔、也最焦慮的情歌之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'In a taxi, she tells him she is renting a place on this street, an ordinary detail that becomes precious.', zh: '在的士上，她告訴他自己租住在這條街，一個平凡的細節從此變得珍貴。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She begs him never to leave, because she would never be able to walk down that street again if he did.', zh: '她懇求他永遠不要離開，因為如果他離開，她再也無法走過那條街。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines a future in which the memory of the street becomes unbearable, and holds on tighter because of it.', zh: '她想像一個這條街的回憶變得難以承受的將來，並因此抓得更緊。' } },
    ],
    echoes: [
      { ref: '1989/welcome-to-new-york', note: { en: 'Five years earlier New York was a city of new beginnings; here it is one street holding everything.', zh: '五年前，紐約是一個重新開始的城市；在這裏，一條街承載了一切。' } },
      { ref: 'red/all-too-well', note: { en: 'Places and objects as keepers of memory, a lifelong theme.', zh: '地方和物件作為記憶的守護者，是她一生的主題。' } },
    ],
  },
];
