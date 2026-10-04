import type { Song } from '../types';

// The Tortured Poets Department（2024）：第 1–8 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];
const TA = ['Taylor Swift', 'Aaron Dessner'];

export const part1: Song[] = [
  {
    slug: 'fortnight', title: 'Fortnight', track: 1, section: 'standard', feat: 'Post Malone',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Austin Post'], producers: TJ,
    single: { en: 'Lead single, 19 April 2024 · debuted at No. 1 on the Hot 100', zh: '首支單曲，2024 年 4 月 19 日．空降 Hot 100 冠軍' },
    overview: {
      en: 'A hushed synth-pop duet with Post Malone about a brief, consuming affair that leaves the narrator haunted in a small, ordinary life.',
      zh: '一首與 Post Malone 合唱的低迴合成器流行曲，寫一段短暫卻吞噬一切的戀情，令敘述者在平凡細小的生活中魂牽夢縈。',
    },
    context: {
      en: 'Swift announced The Tortured Poets Department while accepting a Grammy in February 2024, during the Eras Tour. It was released on 19 April 2024. Two hours later she revealed a double album, The Anthology, with fifteen more songs: thirty-one in all.',
      zh: 'Swift 在 2024 年 2 月領取格林美獎時宣佈《The Tortured Poets Department》，當時正值 Eras Tour 期間。專輯於 2024 年 4 月 19 日推出。兩小時後，她揭曉雙專輯《The Anthology》，再加十五首歌，合共三十一首。',
    },
    story: {
      en: 'Swift described the album as a snapshot of a short, intense and painful period of her life. "Fortnight" sets the tone: a love that lasted only two weeks but left a lasting mark, told in a cinematic world of neighbours, routines and unspoken longing. [[Post Malone]] sings with her as the other half of the story.\n\nThe song debuted at number one, and the album broke streaming records.',
      zh: 'Swift 形容這張專輯是她人生中一段短暫、熾烈而痛苦時期的快照。〈Fortnight〉定下基調：一段只維持兩星期、卻留下長久烙印的愛，在一個充滿鄰居、日常和未說出口的渴望的電影式世界中展開。[[Post Malone]] 以故事另一半的身份與她合唱。\n\n歌曲空降冠軍，專輯亦打破串流紀錄。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She lives a quiet suburban life, still consumed by thoughts of someone she knew only briefly.', zh: '她過着安靜的郊區生活，卻仍被一個只相處過短暫時光的人佔據思緒。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The affair lasted only a fortnight, yet she cannot stop feeling it.', zh: '那段情只維持了兩星期，她卻無法停止感受它。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Both voices imagine the lives they did not choose, and the people they are still tied to.', zh: '兩把聲音想像他們沒有選擇的人生，以及仍然牽絆着他們的人。' } },
    ],
    mv: {
      id: 'q3zqJs7JUCQ', director: 'Taylor Swift', date: '2024-04-19',
      note: { en: 'Featuring [[Post Malone]], with [[Ethan Hawke]] and [[Josh Charles]], two stars of the film Dead Poets Society.', zh: '[[Post Malone]] 參與演出，另有電影《Dead Poets Society》（《暴雨驕陽》）的兩位演員 [[Ethan Hawke]] 及 [[Josh Charles]]。' },
      scenes: [
        { scene: { en: 'The institution', zh: '院所' }, meaning: { en: 'In black and white, Swift is confined in an old-fashioned institution, a picture of the album’s idea of a "department" where tortured poets are kept and studied.', zh: '在黑白畫面中，Swift 被困於一所舊式院所，呈現專輯「部門」的概念：受苦的詩人被收容並研究。' } },
        { scene: { en: 'The scientists', zh: '科學家' }, meaning: { en: 'Two scientists, played by Dead Poets Society stars, run experiments on her: a playful nod to the album title.', zh: '兩位由《Dead Poets Society》演員飾演的科學家為她進行實驗：俏皮地呼應專輯名稱。' } },
        { scene: { en: 'The typewriter', zh: '打字機' }, meaning: { en: 'She writes compulsively, turning pain into words: the poet at work.', zh: '她不停書寫，把痛苦化為文字：正在創作的詩人。' } },
        { scene: { en: 'Two poets', zh: '兩位詩人' }, meaning: { en: 'She and Post Malone appear as lovers in a series of surreal scenes, close yet always separated.', zh: '她與 Post Malone 在一連串超現實場景中以戀人身份出現，親近卻總被分隔。' } },
      ],
    },
    echoes: [
      { ref: 'folklore/exile', note: { en: 'Another duet between two people who could not make it work.', zh: '另一首兩個無法走下去的人的對唱。' } },
      { ref: 'midnights/midnight-rain', note: { en: 'Imagining the other life one might have lived.', zh: '想像自己本可以過的另一種人生。' } },
    ],
  },
  {
    slug: 'the-tortured-poets-department', title: 'The Tortured Poets Department', track: 2, section: 'standard',
    writers: TJ,
    overview: {
      en: 'The title track: an affectionate, slightly mocking portrait of a messy partner who imagines himself a great tortured artist.',
      zh: '同名曲：一幅帶着愛意、略帶嘲諷的肖像，描繪一位凌亂的伴侶，自以為是偉大而飽受折磨的藝術家。',
    },
    story: {
      en: 'The song undercuts the grand title. The narrator tells her partner, gently but firmly, that neither of them is a legendary suffering poet; they are just two people trying to love each other.\n\nIt mixes small, funny details of daily life with tenderness, and sets out the album’s theme of romanticised pain.',
      zh: '這首歌拆解了宏大的歌名。敘述者溫柔而堅定地告訴伴侶：他們都不是傳奇的受苦詩人，只是兩個嘗試相愛的普通人。\n\n它把日常生活中細小而有趣的細節與溫柔交織，並點出專輯「把痛苦浪漫化」的主題。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Small details of a chaotic partner: forgetfulness, bad habits and big ideas about himself.', zh: '一位混亂伴侶的細節：健忘、壞習慣，以及對自己的宏大想像。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She reminds him that he is not a famous doomed poet, and neither is she.', zh: '她提醒他：他不是著名的悲劇詩人，她亦不是。' } },
    ],
    echoes: [
      { ref: 'folklore/the-1', note: { en: 'Wry, conversational reflection on a relationship.', zh: '以帶點幽默、聊天般的語氣反思一段感情。' } },
    ],
  },
  {
    slug: 'my-boy-only-breaks-his-favorite-toys', title: 'My Boy Only Breaks His Favorite Toys', track: 3, section: 'standard',
    writers: ['Taylor Swift'],
    overview: {
      en: 'A bright, bitter song written by Swift alone, comparing herself to a toy that was loved, then carelessly broken.',
      zh: '一首由 Swift 獨自寫成、明快卻苦澀的歌，把自己比作一件被喜愛、卻又被隨手弄壞的玩具。',
    },
    story: {
      en: 'The narrator insists that being broken by someone proves he valued her: he only damages what he cares about most. The logic is clearly self-deceiving, and that is the point.\n\nThe childlike imagery of toys and playgrounds hides a sharp sense of hurt.',
      zh: '敘述者堅持，被一個人弄壞，正證明他珍視她：他只會弄壞最在乎的東西。這種邏輯明顯是自欺，而這正是重點。\n\n玩具與遊樂場這些孩子氣的意象，掩藏着尖銳的傷痛。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She was his favourite, and so she was the one he broke.', zh: '她是他的最愛，所以被弄壞的正是她。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She clings to the idea that he will come back to play again.', zh: '她緊抓着一個念頭：他會再回來一起玩。' } },
    ],
    echoes: [
      { ref: 'red/the-last-time', note: { en: 'Being drawn back into the same cycle of hurt.', zh: '再一次被拉回同一個傷害的循環。' } },
    ],
  },
  {
    slug: 'down-bad', title: 'Down Bad', track: 4, section: 'standard',
    writers: TJ,
    overview: {
      en: 'Heartbreak described as being abducted by aliens, shown a wonderful world, then dropped back on Earth.',
      zh: '把心碎比作被外星人擄走，看過一個美好的世界後，又被丟回地球。',
    },
    story: {
      en: 'Swift has said the song uses the metaphor of alien abduction: someone shows you something extraordinary and then leaves you behind, and nobody believes what you went through.\n\nThe title is slang for being desperately lovesick, and the chorus captures that mixture of misery and drama.',
      zh: 'Swift 說這首歌借用外星人擄人的比喻：有人讓你見識非凡的事物，然後把你丟下，而沒有人相信你經歷過甚麼。\n\n歌名是俚語，指為愛極度消沉；副歌捕捉了那種痛苦與戲劇感交織的狀態。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She was taken up into a dazzling experience, then returned to ordinary life alone.', zh: '她被帶進一場炫目的經歷，然後獨自被送回平凡生活。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Lovesick and dramatic, she feels she might not survive the loss.', zh: '她為愛消沉、情緒誇張，覺得自己可能熬不過這次失去。' } },
    ],
    echoes: [
      { ref: 'midnights/labyrinth', note: { en: 'Floating and falling, in love and in fear.', zh: '在愛與恐懼中漂浮與墜落。' } },
    ],
  },
  {
    slug: 'so-long-london', title: 'So Long, London', track: 5, section: 'standard',
    writers: TA,
    overview: {
      en: 'The track five of TTPD: a farewell to a city and to a long relationship that slowly wore her down.',
      zh: 'TTPD 的第五首：向一座城市道別，亦向一段慢慢消磨她的長久感情道別。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], the song begins with layered voices like church bells, then builds steadily. It mirrors "London Boy" from Lover, which celebrated the same city in happier days.\n\nThe narrator explains that she gave years to keeping the relationship alive, and finally leaves, sad but freer.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫，以如教堂鐘聲般層層疊疊的人聲開始，然後穩步推進。它與《Lover》中的〈London Boy〉互相映照：那首歌在快樂的日子裏讚美同一座城市。\n\n敘述者說明自己付出多年去維繫這段感情，最終離開：傷心，卻更自由。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She notices she is the only one still trying to save the relationship.', zh: '她察覺只有自己仍在努力挽救這段感情。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She says goodbye to the city that held so many of her memories.', zh: '她向承載了許多回憶的城市道別。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Anger surfaces: she gave her best years and was left to carry the weight alone.', zh: '憤怒浮現：她付出了最好的歲月，卻要獨自承擔重擔。' } },
    ],
    echoes: [
      { ref: 'lover/london-boy', note: { en: 'The same city, first celebrated and now left behind.', zh: '同一座城市：先被讚美，如今被留在身後。' } },
      { ref: 'midnights/youre-losing-me', note: { en: 'The warning signs, written two years earlier.', zh: '兩年前寫下的警號。' } },
    ],
  },
  {
    slug: 'but-daddy-i-love-him', title: 'But Daddy I Love Him', track: 6, section: 'standard',
    writers: TA,
    overview: {
      en: 'A defiant, theatrical song about choosing a partner that everyone around her disapproves of.',
      zh: '一首叛逆而富戲劇性的歌，寫選擇一個身邊所有人都反對的伴侶。',
    },
    story: {
      en: 'The title borrows a famous line from The Little Mermaid. The narrator is a rebellious small-town girl whose family and neighbours are scandalised by her choice of partner.\n\nThe song is also widely read as Swift answering people who try to judge her private life. She later sang it on the Eras Tour in a mash-up with "So High School".',
      zh: '歌名借用《小魚仙》中一句著名台詞。敘述者是一個叛逆的小鎮女孩，家人和鄰居都對她選擇的伴侶感到震驚。\n\n這首歌亦普遍被理解為 Swift 回應那些試圖評判她私生活的人。她其後在 Eras Tour 上把它與〈So High School〉混合演唱。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She mocks the people who claim to care about her but really just want to control her.', zh: '她嘲諷那些聲稱關心她、實則只想控制她的人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Whatever anyone says, she is choosing him.', zh: '無論別人怎樣說，她都選擇他。' } },
    ],
    echoes: [
      { ref: 'fearless/love-story', note: { en: 'Again a disapproving father and a forbidden love, now with far more defiance.', zh: '同樣是反對的父親與被禁止的愛，這次更具反叛精神。' } },
    ],
  },
  {
    slug: 'fresh-out-the-slammer', title: 'Fresh Out the Slammer', track: 7, section: 'standard',
    writers: TJ,
    overview: {
      en: 'Leaving a long relationship described as being released from prison, and running straight to someone new.',
      zh: '把離開一段長久感情比作出獄，並直奔另一個人。',
    },
    story: {
      en: 'The narrator has served her time in a relationship that felt like a cell. Now free, she heads straight to the person she has been thinking about.\n\nThe song’s energy is restless and slightly reckless, setting up the brief romance described elsewhere on the album.',
      zh: '敘述者在一段如同牢房的感情中「服刑」期滿。重獲自由後，她直奔一直掛念的那個人。\n\n歌曲的能量躁動而略帶魯莽，為專輯其他歌曲所寫的短暫戀情作鋪墊。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Years in a lonely relationship feel like a prison sentence.', zh: '在孤獨感情中的歲月，如同服刑。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Released at last, she calls the one she wanted.', zh: '終於獲釋，她打電話給那個她想要的人。' } },
    ],
    echoes: [
      { ref: 'evermore/its-time-to-go', note: { en: 'Knowing when to leave, and finally doing it.', zh: '知道何時離開，並終於付諸行動。' } },
    ],
  },
  {
    slug: 'florida', title: 'Florida!!!', track: 8, section: 'standard', feat: 'Florence + the Machine',
    writers: ['Taylor Swift', 'Florence Welch'],
    overview: {
      en: 'A dramatic duet with Florence Welch about running away to Florida, the classic American escape, to disappear from one’s problems.',
      zh: '一首與 Florence Welch 合唱、充滿戲劇性的歌，寫逃往佛羅里達（美國人經典的逃避之地），讓自己從煩惱中消失。',
    },
    story: {
      en: 'Swift and [[Florence Welch]] wrote together, imagining Florida as a place where people go to escape and reinvent themselves. The song builds into a huge, pounding chorus where the two voices meet.\n\nThe humour is dark: escape is tempting, but the past tends to follow.',
      zh: 'Swift 與 [[Florence Welch]] 合寫，把佛羅里達想像成人們逃避和重新做人的地方。歌曲推向一段巨大而重擊的副歌，兩把聲音在此交會。\n\n幽默是黑色的：逃避很誘人，但過去總會尾隨而來。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Each singer describes the mess she is fleeing.', zh: '兩位歌手各自描述自己要逃離的爛攤子。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Florida is pictured as a wild, sunny hideout where one can vanish.', zh: '佛羅里達被描繪成一個可以人間蒸發的狂野、陽光藏身處。' } },
    ],
    echoes: [
      { ref: 'evermore/no-body-no-crime', note: { en: 'Swift’s taste for dark, story-driven humour.', zh: 'Swift 對黑色、以故事推動的幽默的偏好。' } },
    ],
  },
];
