import type { Song } from '../types';

// Midnights（2022）：第 8–13 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TJ = ['Taylor Swift', 'Jack Antonoff'];

export const part2: Song[] = [
  {
    slug: 'vigilante-shit', title: 'Vigilante Shit', track: 8, section: 'standard',
    writers: ['Taylor Swift'], producers: TJ,
    overview: {
      en: 'A minimal, menacing revenge story, written by Swift alone: she helps a wronged wife get even.',
      zh: '一個極簡而帶威嚇感的復仇故事，由 Swift 獨自寫成：她協助一位受害的妻子討回公道。',
    },
    story: {
      en: 'Built on little more than a low beat and whispered vocals, the song plays like a noir film. The narrator dresses not for love but for revenge, and quietly provides evidence that helps another woman leave a dishonest husband and take his fortune.\n\nOn the Eras Tour it was staged with chairs and choreography in the style of a cabaret.',
      zh: '歌曲幾乎只靠低沉的節拍和耳語般的人聲構成，猶如一齣黑色電影。敘述者打扮不是為了愛情，而是為了復仇；她悄悄提供證據，幫助另一位女子離開不誠實的丈夫，並取得他的財產。\n\n在 Eras Tour 上，它以椅子和歌舞廳風格的編舞演出。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She explains that she no longer dresses to impress men: her purpose is now retribution.', zh: '她說明自己不再為取悅男人而打扮：她如今的目的是報復。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She passes information to the man’s wife, and the authorities begin to look into him.', zh: '她把資料交給那男人的妻子，有關當局開始調查他。' } },
    ],
    echoes: [
      { ref: 'evermore/no-body-no-crime', note: { en: 'Another story of women working together against a cheating husband.', zh: '另一個女人聯手對付不忠丈夫的故事。' } },
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Revenge again, but cooler and quieter.', zh: '同樣是復仇，但更冷靜、更安靜。' } },
    ],
  },
  {
    slug: 'bejeweled', title: 'Bejeweled', track: 9, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A glittering disco-pop song about a woman who refuses to be taken for granted and reminds herself that she still shines.',
      zh: '一首閃耀的迪斯可流行曲，寫一位女子拒絕被視為理所當然，並提醒自己仍然光芒四射。',
    },
    story: {
      en: 'Swift has said the song is about feeling that, even in a happy relationship, she should not dim herself. Going out, dressing up and being seen are a way of reclaiming her sparkle.\n\nThe video, directed by Swift, turned the idea into a playful Cinderella story full of hidden clues for fans.',
      zh: 'Swift 說這首歌寫的是：即使身處快樂的感情，她也不應令自己黯淡。外出、打扮、被看見，是重拾光芒的方式。\n\n由 Swift 執導的 MV，把這個想法變成一個充滿給歌迷的隱藏線索、俏皮的灰姑娘故事。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She has been patient and undervalued, and decides to stop waiting to be noticed.', zh: '她一直耐心而被低估，決定不再等待被看見。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Like a jewel, she can still light up any room she walks into.', zh: '她就像珠寶，走進任何房間都仍能把它照亮。' } },
    ],
    mv: {
      id: 'b7QlX3yR2xs', director: 'Taylor Swift', date: '2022-10-25',
      note: { en: 'The cast includes [[Laura Dern]], the band HAIM, [[Dita Von Teese]], [[Pat McGrath]] and [[Jack Antonoff]].', zh: '演員包括 [[Laura Dern]]、HAIM 樂隊、[[Dita Von Teese]]、[[Pat McGrath]] 及 [[Jack Antonoff]]。' },
      scenes: [
        { scene: { en: 'Cinderella at work', zh: '工作中的灰姑娘' }, meaning: { en: 'Swift scrubs floors for a cruel stepmother ([[Laura Dern]]) and stepsisters (HAIM): the undervalued woman of the lyric.', zh: 'Swift 為刻薄的繼母（[[Laura Dern]]）和繼姊（HAIM）擦地板：歌詞中那個被低估的女子。' } },
        { scene: { en: 'The transformation', zh: '蛻變' }, meaning: { en: 'With help from a magical godmother figure, she is transformed in glittering style, ready to shine.', zh: '在一位魔法教母式人物的幫助下，她換上閃亮造型，準備發光。' } },
        { scene: { en: 'The palace contest', zh: '宮廷比賽' }, meaning: { en: 'She performs a dazzling burlesque routine and wins over the court.', zh: '她表演一段耀眼的歌舞，征服整個宮廷。' } },
        { scene: { en: 'Choosing the castle', zh: '選擇城堡' }, meaning: { en: 'Offered marriage, she turns it down and keeps the castle for herself: the story ends with independence, not a wedding.', zh: '有人向她求婚，她卻婉拒，把城堡留給自己：故事以獨立作結，而不是婚禮。' } },
        { scene: { en: 'Clues everywhere', zh: '處處線索' }, meaning: { en: 'The video was filled with hidden hints, which fans read as clues to her next re-recording.', zh: 'MV 中滿是隱藏提示，歌迷視之為她下一張重錄專輯的線索。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/mine', note: { en: 'A fairy-tale video turned inside out: no wedding at the end.', zh: '一支把童話翻轉的 MV：結局沒有婚禮。' } },
      { ref: 'fearless/love-story', note: { en: 'From a princess waiting for rescue to one who chooses herself.', zh: '由等待拯救的公主，變成選擇自己的公主。' } },
    ],
  },
  {
    slug: 'labyrinth', title: 'Labyrinth', track: 10, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'A floating, fragile song about falling in love while still expecting to get hurt.',
      zh: '一首輕飄而脆弱的歌，寫墮入愛河，卻仍預期自己會受傷。',
    },
    story: {
      en: 'Over soft synths and a high, airy vocal, the narrator is afraid to trust new love after past heartbreak. She feels lost, as if in a maze, and surprised to find herself falling.\n\nThe mood is gentle anxiety rather than despair, and the song ends with a cautious opening of the heart.',
      zh: '在柔和的合成器和高而輕盈的人聲之上，敘述者因過去的心碎而不敢相信新的愛情。她感到迷失，彷彿身處迷宮，又驚訝於自己正在墮入愛河。\n\n氣氛是輕微的焦慮而非絕望，歌曲最後以小心翼翼地敞開心扉作結。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She has been hurt before and expects the worst, even as something new begins.', zh: '她曾經受傷，即使新的開始出現，仍預期最壞的結果。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Against her own expectations, she realises she is falling for him.', zh: '出乎自己意料，她發現自己正愛上他。' } },
    ],
    echoes: [
      { ref: 'reputation/delicate', note: { en: 'The same hesitant hope at the start of a relationship.', zh: '同樣是感情開始時猶豫的希望。' } },
      { ref: '1989/clean', note: { en: 'Recovering from the past and slowly trusting again.', zh: '從過去中復原，慢慢再次信任。' } },
    ],
  },
  {
    slug: 'karma', title: 'Karma', track: 11, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Mark Spears', 'Jahaan Sweet', 'Keanu Beats'], producers: ['Taylor Swift', 'Jack Antonoff', 'Sounwave', 'Jahaan Sweet', 'Keanu Beats'],
    single: { en: 'Single remix featuring Ice Spice, May 2023', zh: '2023 年 5 月推出與 Ice Spice 合作的混音單曲' },
    overview: {
      en: 'A bright, bouncy celebration of good karma: living well while those who behaved badly face the consequences.',
      zh: '一首明亮輕快、歌頌善報的歌：自己活得美好，而行為不端的人自食其果。',
    },
    story: {
      en: 'After the anger of reputation and the quiet of the folk albums, "Karma" is cheerful and confident. The narrator does not need to seek revenge: karma takes care of it, and treats her well in return.\n\nA remix with the rapper [[Ice Spice]] was released in May 2023, together with a video that Swift premiered at an Eras Tour concert in New Jersey.',
      zh: '經歷《reputation》的憤怒和民謠專輯的寧靜後，〈Karma〉顯得開朗而自信。敘述者不必親自復仇：因果自會處理，並回報她以善果。\n\n2023 年 5 月，她推出與饒舌歌手 [[Ice Spice]] 合作的混音版，並在新澤西州一場 Eras Tour 演唱會上首播 MV。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She contrasts her own peaceful life with people who are now unhappy because of their own choices.', zh: '她把自己平靜的生活，與那些因自己的選擇而如今不快樂的人作對比。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She compares karma to a series of comforting, friendly things that are on her side.', zh: '她把因果比作一連串站在她那邊、令人安心的親切事物。' } },
    ],
    mv: {
      id: 'XzOvgu3GPwY', director: 'Taylor Swift', date: '2023-05-26',
      note: { en: 'Featuring [[Ice Spice]]. Premiered at the Eras Tour in East Rutherford, New Jersey.', zh: '[[Ice Spice]] 參與演出。於新澤西州 East Rutherford 的 Eras Tour 首播。' },
      scenes: [
        { scene: { en: 'The cosmic machine', zh: '宇宙機器' }, meaning: { en: 'Heavy digital effects show a universe of moving parts: karma as a force that turns the world.', zh: '大量數碼特效呈現一個運轉中的宇宙：因果是推動世界的力量。' } },
        { scene: { en: 'The yellow brick road', zh: '黃磚路' }, meaning: { en: 'Dressed like Dorothy, she walks a fairy-tale road, safely on her way.', zh: '她打扮成 Dorothy，沿着童話之路安然前行。' } },
        { scene: { en: 'The cat', zh: '貓' }, meaning: { en: 'In turquoise, she poses before a giant photo of her cat Olivia: karma as a friendly, comforting presence.', zh: '她身穿土耳其藍，站在愛貓 Olivia 的巨型照片前：因果是一種親切而令人安心的存在。' } },
        { scene: { en: 'The green giant', zh: '綠色巨人' }, meaning: { en: 'A huge figure covered in forest and mountain: nature itself keeping the balance.', zh: '一個被森林與山脈覆蓋的巨大身影：大自然本身在維持平衡。' } },
        { scene: { en: 'Easter eggs', zh: '彩蛋' }, meaning: { en: 'The video is full of references to her earlier albums, a reminder of the long road behind her.', zh: 'MV 充滿對她早期專輯的致敬，提醒觀眾她走過的漫長道路。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'From threatening revenge to trusting the universe to handle it.', zh: '由揚言報復，到相信宇宙自會處理。' } },
      { ref: 'lover/me', note: { en: 'A colourful, playful video full of light and good humour.', zh: '一支色彩繽紛、輕鬆愉快的 MV。' } },
    ],
  },
  {
    slug: 'sweet-nothing', title: 'Sweet Nothing', track: 12, section: 'standard',
    writers: ['Taylor Swift', 'William Bowery'], producers: TJ,
    overview: {
      en: 'A gentle piano love song about a partner who asks for nothing, in contrast to a demanding world.',
      zh: '一首溫柔的鋼琴情歌，寫一位一無所求的伴侶，與苛索的外界形成對比。',
    },
    story: {
      en: 'Co-written with William Bowery ([[Joe Alwyn]]), the song is soft, simple and domestic. The world outside keeps wanting more from her, but at home there is someone who only wants her company.\n\nThe warm electric piano and quiet harmonies make it feel like a lullaby.',
      zh: '這首歌與 William Bowery（[[Joe Alwyn]]）合寫，柔和、簡單而充滿居家氣息。外面的世界不斷向她索取更多，但在家中有一個只想與她作伴的人。\n\n溫暖的電子琴和輕柔的和聲，令它像一首搖籃曲。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Small memories of a quiet life together, far from the noise.', zh: '遠離喧囂、平靜共處的點滴回憶。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Everyone else makes demands; he wants nothing from her except to be together.', zh: '其他人都在索求；他對她別無所求，只想共處。' } },
    ],
    echoes: [
      { ref: 'folklore/peace', note: { en: 'Another quiet song about whether a private life is possible.', zh: '另一首安靜地思考私人生活是否可能的歌。' } },
      { ref: 'lover/lover', note: { en: 'Domestic love sung softly, three years earlier.', zh: '三年前同樣輕聲唱出的居家之愛。' } },
    ],
  },
  {
    slug: 'mastermind', title: 'Mastermind', track: 13, section: 'standard',
    writers: TJ, producers: TJ,
    overview: {
      en: 'The closing track: a playful confession that she carefully planned how to win the person she loves, and a revelation about why.',
      zh: '終曲：一段俏皮的自白，承認她精心策劃如何贏得所愛的人，並揭示背後的原因。',
    },
    story: {
      en: 'Swift has described "Mastermind" as being about admitting that she is calculating, in a fun way. The narrator reveals that what seemed like fate in a romance was in fact her careful strategy.\n\nIn the bridge she explains the deeper reason: as a child she did not feel naturally liked, so she learned to plan and to work hard to be accepted. The song ends the album on wit and self-awareness.',
      zh: 'Swift 形容〈Mastermind〉是以有趣的方式承認自己工於心計。敘述者揭示，一段戀情中看似命運安排的一切，其實是她精心的策略。\n\n在橋段中，她解釋更深的原因：小時候她不覺得自己天生討人喜歡，於是學會籌劃、努力爭取被接納。歌曲以機智和自知之明為專輯作結。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes a meeting that looked like destiny, as if the stars aligned.', zh: '她描述一次看似命中注定、彷彿星辰排列整齊的相遇。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She reveals that she arranged it all, like moving pieces on a chessboard.', zh: '她揭示一切都是她安排的，就像在棋盤上移動棋子。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The confession: she learned to plan because, as a child, she felt she had to earn friendship.', zh: '告白：她學會籌劃，是因為小時候她覺得友誼要靠努力爭取。' } },
    ],
    echoes: [
      { ref: '1989/blank-space', note: { en: 'Again she plays with her image as a schemer, now with tenderness.', zh: '她再次玩弄「工於心計」的形象，這次帶着溫柔。' } },
      { ref: 'reputation/end-game', note: { en: 'Love as a game to be won.', zh: '愛情是一場要贏的遊戲。' } },
    ],
  },
];
