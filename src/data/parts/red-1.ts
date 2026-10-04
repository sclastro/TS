import type { Song } from '../types';

// Red (Taylor's Version)：第 1–10 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
export const part1: Song[] = [
  {
    slug: 'state-of-grace', title: 'State of Grace', track: 1, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'Promotional single, October 2012', zh: '宣傳單曲，2012 年 10 月' },
    overview: {
      en: 'A soaring, stadium-rock opener: falling in love described as a ruthless game you can only win with grace.',
      zh: '一首如體育館搖滾般激昂的開場曲：把墮入愛河形容為一場殘酷的遊戲，只有心懷恩典才能勝出。',
    },
    story: {
      en: 'Swift wanted Red to open with a sound nobody expected from her: chiming, echoing guitars in the tradition of big arena rock bands, rather than banjo or fiddle. She wrote the song alone about the beginning of an intense relationship.\n\nThe central idea is that love is a ruthless game, unless you play it with generosity. It sets up the whole album, which follows that game from its rush to its wreckage.',
      zh: 'Swift 希望《Red》以一種沒有人預料到的聲音開場：叮噹作響、帶回聲的結他，屬於大型體育館搖滾樂隊的傳統，而不是班祖琴或小提琴。她獨力寫下這首歌，寫一段濃烈感情的開端。\n\n核心想法是：愛情是一場殘酷的遊戲，除非你以寬厚之心去玩。它為整張專輯定下基調，專輯隨後便跟着這場遊戲，由狂喜一直走到殘骸。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes the moment she realises she is falling for someone, as if everything is suddenly in sharp focus.', zh: '她描述察覺自己正愛上某人的一刻，彷彿一切忽然變得清晰銳利。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Love is compared to a game that can destroy you; the only way to survive it is through grace and openness.', zh: '愛情被比作一場可以把人摧毀的遊戲；唯一存活的方法，是寬厚與坦誠。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She acknowledges they are both flawed, and that the love is worth the risk anyway.', zh: '她承認兩人都有缺點，但這份愛仍值得冒險。' } },
    ],
    echoes: [
      { ref: 'red/red', note: { en: 'The next track names the colour of the feeling this song describes.', zh: '下一首歌，為這首歌描述的情感命名了顏色。' } },
    ],
  },
  {
    slug: 'red', title: 'Red', track: 2, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Dann Huff', 'Nathan Chapman'],
    single: { en: 'Promotional single October 2012; fifth single June 2013', zh: '2012 年 10 月宣傳單曲；2013 年 6 月第五支單曲' },
    overview: {
      en: 'The title track: a relationship described entirely through colours, with the most intense emotions all painted red.',
      zh: '同名主打歌：一段感情完全以顏色描述，最濃烈的情感全部塗成紅色。',
    },
    story: {
      en: 'Swift has said she named the album after the feelings in this song: the tumultuous, intense, sometimes crazy emotions of a love that burns bright. Writing alone, she assigned colours to stages of a relationship, with the hardest, happiest and most painful moments all being red.\n\nThe song mixes country banjo with pop production, a perfect summary of an album caught between two worlds.',
      zh: 'Swift 說她以這首歌中的情感為專輯命名：一段熾熱愛情中那些混亂、濃烈、有時近乎瘋狂的情緒。她獨力寫作，為一段感情的不同階段配上顏色，最艱難、最快樂、最痛苦的時刻全都是紅色。\n\n歌曲把鄉村班祖琴與流行樂編曲混合，正好概括了一張夾在兩個世界之間的專輯。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She compares him to fast, dangerous things, a speeding car and a dead-end street. Loving him is exhilarating and reckless.', zh: '她把他比作高速而危險的東西，例如飛馳的車和死胡同。愛他既刺激又魯莽。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Each feeling gets a colour: losing him is blue, missing him is grey, and loving him was red, the most vivid of all.', zh: '每一種感受都有一種顏色：失去他是藍色，想念他是灰色，而愛他是紅色，最鮮明的顏色。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Memories of him come back in flashes, as bright and impossible to ignore as the colour itself.', zh: '關於他的回憶一閃一閃地回來，像紅色本身一樣鮮明，無法忽視。' } },
    ],
    echoes: [
      { ref: 'fearless/the-way-i-loved-you', note: { en: 'The pull towards intense, chaotic love, first named on Fearless.', zh: '被濃烈而混亂的愛吸引，最早在《Fearless》中被點出。' } },
      { ref: 'lover/daylight', note: { en: 'Seven years later she revisits the colour metaphor and decides love is not red after all, but golden.', zh: '七年後，她重訪顏色的比喻，並認定愛情終究不是紅色，而是金色。' } },
    ],
  },
  {
    slug: 'treacherous', title: 'Treacherous', track: 3, section: 'standard',
    writers: ['Taylor Swift', 'Dan Wilson'], producers: ['Taylor Swift', 'Dan Wilson'],
    overview: {
      en: 'A whispered, slow-building song about knowingly walking onto dangerous ground for someone.',
      zh: '一首低語開始、慢慢累積的歌，寫明知是險地，仍為某人踏上去。',
    },
    story: {
      en: 'Written with [[Dan Wilson]], "Treacherous" begins almost in a whisper and builds to a full-throated climax. The image is of a slope that is dangerous to climb, and of choosing to climb it anyway.\n\nThe song sits between the excitement of "State of Grace" and the heartbreak to come, capturing the moment just before you fall.',
      zh: '〈Treacherous〉與 [[Dan Wilson]] 合寫，由近乎耳語開始，逐步累積至高聲的高潮。意象是一條危險的斜坡，而她選擇仍然攀上去。\n\n這首歌介乎〈State of Grace〉的興奮與即將到來的心碎之間，捕捉的是跌倒之前的那一刻。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She knows this path is treacherous and admits she likes it that way.', zh: '她知道這條路險峻，並承認自己喜歡這樣。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She cannot stop herself; the danger is part of the pull.', zh: '她停不下來；危險本身就是吸引力的一部分。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The song swells as she imagines the two of them driving off together, giving in completely.', zh: '她想像兩人一同駕車離去、完全投降，歌曲隨之膨脹。' } },
    ],
    echoes: [
      { ref: 'speak-now/sparks-fly', note: { en: 'Another song about wanting someone precisely because it is risky.', zh: '另一首正因為危險而渴望某人的歌。' } },
    ],
  },
  {
    slug: 'i-knew-you-were-trouble', title: 'I Knew You Were Trouble', track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Third single, November 2012 · No. 2 on the Hot 100', zh: '第三支單曲，2012 年 11 月．Hot 100 第二位' },
    overview: {
      en: 'Blaming herself for ignoring the warning signs, over a dubstep-inspired drop that shocked her country audience.',
      zh: '責怪自己無視警號，配上一段受 dubstep 影響的音樂高潮，令她的鄉村樂聽眾大吃一驚。',
    },
    story: {
      en: 'Written with [[Max Martin]] and [[Shellback]], the song was one of the clearest signs that Swift was moving towards pop. Its chorus drops into a distorted, electronic sound that was unlike anything she had released.\n\nThe lyric is unusual in that she blames herself, not him: she saw who he was from the start and walked in anyway. It became one of the biggest hits of the era.',
      zh: '這首歌與 [[Max Martin]]、[[Shellback]] 合寫，是 Swift 轉向流行樂最清晰的信號之一。副歌突然轉入失真的電子聲音，與她以往發表過的作品截然不同。\n\n歌詞不尋常之處在於她責怪的是自己而不是他：她一開始已看清他是怎樣的人，卻仍然走了進去。它成為這個時期最大熱的歌之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers meeting him and feeling the danger immediately, and choosing to ignore it.', zh: '她回想遇見他時立即感到危險，卻選擇忽視。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The admission: she knew he was trouble from the moment he walked in, and the shame is that she let it happen.', zh: '她承認：從他走進來那一刻，她就知道他是麻煩；令她羞愧的，是自己任由事情發生。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She realises he never loved her, and that she was just another part of his pattern.', zh: '她明白他從未愛過她，她只是他慣常模式中的又一個人。' } },
    ],
    mv: {
      id: 'vNoKguSdy4Y', director: 'Anthony Mandler', date: '2012-12-13',
      note: { en: 'Won Best Female Video at the 2013 MTV VMAs.', zh: '奪得 2013 年 MTV VMA 最佳女歌手音樂錄影帶。' },
      scenes: [
        { scene: { en: 'Waking in the desert', zh: '在沙漠中醒來' }, meaning: { en: 'The video opens and closes with Swift alone in the desert after a party, speaking a monologue about how she lost herself in the relationship.', zh: 'MV 以 Swift 在派對後獨自身處沙漠開始和結束，她以獨白講述自己如何在這段感情中迷失。' } },
        { scene: { en: 'The descent', zh: '沉淪' }, meaning: { en: 'In flashbacks, she falls for a tattooed man (played by [[Reeve Carney]]) and is drawn into his reckless world of parties and fights, which slowly breaks her down.', zh: '在回憶片段中，她愛上一位紋身男子（由 [[Reeve Carney]] 飾演），被捲入他那充滿派對和爭鬥的魯莽世界，逐漸崩潰。' } },
        { scene: { en: 'The aftermath', zh: '餘波' }, meaning: { en: 'The darker, grittier look was a sharp break from her earlier fairy-tale videos, matching the song’s new sound.', zh: '更陰暗粗糙的畫面風格，與她早期童話式的 MV 截然不同，正配合歌曲的新聲音。' } },
      ],
    },
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'The same album, two ways of remembering a bad relationship: blame turned inward, and grief turned into detail.', zh: '同一張專輯中，兩種記住一段糟糕感情的方式：把責怪轉向自己，以及把哀傷化為細節。' } },
      { ref: 'midnights/anti-hero', note: { en: 'Ten years later, she again names herself as the problem, now as a whole song.', zh: '十年後，她再次把自己視為問題所在，這次寫成了整首歌。' } },
    ],
  },
  {
    slug: 'all-too-well', title: 'All Too Well', track: 5, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'Widely considered her masterpiece: a breakup remembered through a forgotten scarf, a kitchen, a car ride and every small detail.',
      zh: '普遍被視為她的代表作：透過一條遺留的頸巾、一個廚房、一程車程和每一個細節，記住一段分手。',
    },
    context: {
      en: 'Swift has said the song came out of a period of great pain after a breakup. The press has widely linked it to her 2010 relationship with the actor [[Jake Gyllenhaal]]; Swift has never confirmed the subject publicly.',
      zh: 'Swift 說這首歌誕生於一次分手後極度痛苦的時期。傳媒普遍把它與她在 2010 年和演員 [[Jake Gyllenhaal]] 的戀情聯繫起來；Swift 從未公開證實歌曲的對象。',
    },
    story: {
      en: 'Swift has described how the song began during a rehearsal for the Speak Now tour: she started playing four chords and improvising lyrics about what she was going through, and her band joined in. The result was more than ten minutes long. She took it to [[Liz Rose]], who helped her shape it into a five-and-a-half-minute album track.\n\nThe longer version became legendary among fans. In 2021 Swift released it in full as "All Too Well (10 Minute Version)", which became the longest song ever to reach number one on the Hot 100.',
      zh: 'Swift 描述這首歌源自 Speak Now 巡演的一次綵排：她開始彈奏四個和弦，即興唱出自己正在經歷的事，樂隊隨之加入。結果長達十多分鐘。她把它帶給 [[Liz Rose]]，兩人把它修剪成五分半鐘的專輯版本。\n\n較長的版本在歌迷之間成為傳說。2021 年，Swift 以〈All Too Well (10 Minute Version)〉完整推出，成為 Hot 100 史上最長的冠軍歌。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers arriving at his sister’s house with him in autumn, and leaving her scarf there. The scarf becomes the symbol of the part of herself she left behind.', zh: '她回想秋天與他一同到他姐姐家，把頸巾遺留在那裏。這條頸巾成為她遺落的那一部分自己的象徵。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'Small, domestic memories: dancing in the kitchen late at night, looking at his childhood photos, hearing stories of his youth.', zh: '細小的居家回憶：深夜在廚房跳舞、翻看他童年的照片、聽他講少年時的故事。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He may have forgotten, but she remembers everything, all too well. Memory is her burden and her proof that it was real.', zh: '他也許已經忘記，但她記得一切，記得太清楚了。記憶是她的負擔，也是這段感情真實存在過的證明。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She describes being treated carelessly and how the relationship fell apart, building to the most famous emotional climax in her catalogue.', zh: '她描述自己如何被輕率對待、這段感情如何崩塌，並推向她作品中最著名的情感高潮。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'She wonders if he still thinks of her, and returns to the scarf: he kept it, and she suspects he remembers too.', zh: '她想知道他是否仍會想起她，並回到那條頸巾：他留着它，她懷疑他其實也記得。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'The full, unedited version released nine years later, with entire verses that had been cut.', zh: '九年後推出的完整未刪減版本，加入了整段被刪去的歌詞。' } },
      { ref: 'taylor-swift/tim-mcgraw', note: { en: 'Her very first single already remembered love through objects and places; this is that method at its peak.', zh: '她的第一支單曲已透過物件和地點記住愛情；這首歌是這種手法的巔峰。' } },
      { ref: 'speak-now/dear-john', note: { en: 'Another song about a relationship with an older man in which she felt powerless.', zh: '另一首寫與年長男子的關係、令她感到無力的歌。' } },
    ],
    trivia: [
      { en: 'Swift has said she wrote it while rehearsing for the Speak Now tour.', zh: 'Swift 說她在 Speak Now 巡演綵排期間寫下這首歌。' },
      { en: 'Rolling Stone placed the 10-minute version among the greatest songs of all time in 2021.', zh: '2021 年，Rolling Stone 把十分鐘版列入史上最偉大歌曲之一。' },
    ],
  },
  {
    slug: '22', title: '22', track: 6, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Fourth single, March 2013', zh: '第四支單曲，2013 年 3 月' },
    overview: {
      en: 'A carefree party anthem about being twenty-two with your best friends, and the lightness of forgetting heartbreak for a night.',
      zh: '一首無憂無慮的派對頌歌，寫與好友一起的二十二歲，以及在一個晚上忘記心碎的輕盈。',
    },
    story: {
      en: 'Swift has described twenty-two as an age of being old enough to be independent but young enough to be carefree. She wrote the song with [[Max Martin]] and [[Shellback]] as a celebration of friendship.\n\nThe song became a staple at birthday parties for fans turning twenty-two, and on the Red Tour and Eras Tour she would give her hat to a young fan in the audience during the song.',
      zh: 'Swift 形容二十二歲是一個「年紀夠大可以獨立、又夠年輕可以無憂無慮」的歲數。她與 [[Max Martin]]、[[Shellback]] 把這首歌寫成對友誼的讚頌。\n\n這首歌成為歌迷二十二歲生日派對的必播歌曲。在 Red Tour 和 Eras Tour 上，她會在演唱時把帽子送給台下一位年輕歌迷。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A perfect night out with friends: dressing up, dancing, and feeling a little reckless.', zh: '與朋友度過的完美夜晚：盛裝打扮、跳舞，有點放肆。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She feels several contradictory emotions at once, joy, freedom, uncertainty and loneliness, and says that mix is exactly what this age feels like.', zh: '她同時感受到幾種矛盾的情緒：快樂、自由、迷惘與孤單交織在一起；她說這正是這個年紀的感覺。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She meets someone interesting at the party and imagines the night continuing.', zh: '她在派對上遇到一個有趣的人，想像這個晚上會繼續下去。' } },
    ],
    mv: {
      id: 'AgFeZr5ptV8', director: 'Anthony Mandler', date: '2013-03-13',
      scenes: [
        { scene: { en: 'Friends at the beach', zh: '與朋友在海灘' }, meaning: { en: 'Swift and her real-life friends play on a beach, jump on a bed and dress up: it feels like a home video of a perfect weekend.', zh: 'Swift 與現實中的好友在海灘玩耍、在床上跳、互相打扮：感覺像一段完美周末的家庭錄影。' } },
        { scene: { en: 'The party', zh: '派對' }, meaning: { en: 'A house party with dancing and laughter illustrates the chorus, mixing joy with a little chaos.', zh: '一場有舞蹈和笑聲的家庭派對，演繹副歌的快樂與一點點混亂。' } },
      ],
    },
    echoes: [
      { ref: '1989/new-romantics', note: { en: 'Friendship and partying as a response to heartbreak, two years on.', zh: '兩年後，以友誼和派對回應心碎。' } },
    ],
  },
  {
    slug: 'i-almost-do', title: 'I Almost Do', track: 7, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'The constant temptation to call an ex, and the strength it takes not to.',
      zh: '想打電話給前度的持續誘惑，以及忍住不打所需的力量。',
    },
    story: {
      en: 'Swift has said this song was written as a substitute for calling someone. Instead of reaching out, she wrote down everything she would have said.\n\nIt is a quiet, aching acoustic song, and a key piece of the album’s story: the heartbreak is real, but so is her decision not to go back.',
      zh: 'Swift 說這首歌是代替打電話給某人而寫的。她沒有聯絡對方，而是把想說的話全部寫下來。\n\n這是一首安靜而隱隱作痛的木結他歌曲，也是專輯故事的關鍵一塊：心碎是真的，她不回頭的決定也是真的。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She knows reaching out would only reopen the wound, so she resists.', zh: '她知道聯絡對方只會重新撕開傷口，所以她忍住了。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She almost calls, almost goes back, almost gives in, but she does not. The word "almost" is the whole drama.', zh: '她幾乎打了電話、幾乎回頭、幾乎屈服，但她沒有。「幾乎」這個字就是全部戲劇。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She hopes he knows she still thinks of him, even if she will never say so.', zh: '她希望他知道自己仍會想起他，即使她永遠不會說出口。' } },
    ],
    echoes: [
      { ref: 'red/i-bet-you-think-about-me', note: { en: 'The vault track turns the same longing into sharp-tongued satire.', zh: '這首 vault 歌曲把同樣的思念變成尖刻的諷刺。' } },
    ],
  },
  {
    slug: 'we-are-never-ever-getting-back-together', title: 'We Are Never Ever Getting Back Together', track: 8, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Lead single, 13 August 2012 · her first Hot 100 No. 1', zh: '首支單曲，2012 年 8 月 13 日．她第一首 Hot 100 冠軍歌' },
    overview: {
      en: 'Her first Hot 100 number one: an exasperated, giggly kiss-off to an on-again, off-again ex, written in an afternoon.',
      zh: '她第一首 Hot 100 冠軍歌：一首帶着不耐煩和笑意、寫給分分合合前度的決絕之歌，在一個下午寫成。',
    },
    story: {
      en: 'Swift has told the story many times: while she was in the studio with [[Max Martin]] and [[Shellback]], a friend of her ex came in and mentioned hearing that she and the ex were getting back together. After he left, she started venting, and Martin suggested she write it down. The song was written that afternoon.\n\nIts spoken asides, including a joke at the expense of the ex’s self-important music taste, made it feel like a phone call with a friend. It was announced in a Yahoo! live webchat and went straight to number one.',
      zh: 'Swift 多次講述這個故事：她與 [[Max Martin]]、[[Shellback]] 在錄音室時，前度的一位朋友走進來，說聽聞她和前度要復合。對方離開後，她開始發洩，Martin 便建議她把這些話寫下來。歌曲就在那個下午寫成。\n\n歌中的獨白插話，包括一個取笑前度自命不凡音樂品味的笑話，令它聽起來像與朋友通電話。歌曲在 Yahoo! 網上直播聊天中公佈，並直上冠軍。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She recounts the cycle of breaking up and getting back together, each time convinced it would be different.', zh: '她細數兩人分手又復合的循環，每次都以為這次會不同。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'A loud, final declaration that this time it is truly over, said to the ex and to anyone who will listen.', zh: '一句響亮而決絕的宣言：這次真的結束了，說給前度聽，也說給任何願意聽的人。' } },
      { part: { en: 'Spoken bridge', zh: '獨白橋段' }, meaning: { en: 'She imitates a phone call with a friend, rolling her eyes at the idea of reconciliation. The tone is mocking and funny.', zh: '她模仿與朋友通電話，對復合的念頭翻白眼。語氣嘲諷又好笑。' } },
    ],
    mv: {
      id: 'WA4iX5D9Z64', director: 'Declan Whitebloom', date: '2012-08-30',
      scenes: [
        { scene: { en: 'One continuous shot', zh: '一鏡到底' }, meaning: { en: 'The video was filmed as if in a single take, moving through different rooms of an apartment as the relationship cycles through fights and reunions.', zh: 'MV 以一鏡到底的方式拍攝，鏡頭穿過一個單位的不同房間，正如這段感情在爭吵與和好之間循環。' } },
        { scene: { en: 'The band in animal costumes', zh: '穿動物服裝的樂隊' }, meaning: { en: 'Her friends appear as a band dressed in animal costumes, adding to the comic, absurd tone.', zh: '她的朋友扮成穿動物服裝的樂隊出場，增添了喜劇和荒誕的氣氛。' } },
      ],
    },
    echoes: [
      { ref: 'fearless/tell-me-why', note: { en: 'The frustration of an unpredictable boyfriend, now turned into comedy.', zh: '對反覆無常男友的挫敗感，如今變成了喜劇。' } },
      { ref: '1989/shake-it-off', note: { en: 'Two years later, the next lead single carried the same playful, defiant energy into full pop.', zh: '兩年後，下一首首支單曲把同樣俏皮而倔強的能量，帶進完全的流行樂。' } },
    ],
  },
  {
    slug: 'stay-stay-stay', title: 'Stay Stay Stay', track: 9, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'A playful, ukulele-bright song about a fight that ends in laughter instead of a breakup.',
      zh: '一首像烏克麗麗般明亮的俏皮歌，寫一場以笑聲而不是分手收場的爭吵。',
    },
    story: {
      en: 'Swift has said she wrote "Stay Stay Stay" while imagining a healthy relationship, one where an argument does not have to mean the end. It is one of the happiest songs on an album full of heartbreak.\n\nThe song even ends with Swift laughing in the recording booth, a moment kept on the album version.',
      zh: 'Swift 說她寫〈Stay Stay Stay〉時，想像的是一段健康的感情：吵架不一定代表結束。在一張充滿心碎的專輯中，這是最快樂的歌之一。\n\n歌曲甚至以 Swift 在錄音室中大笑作結，這一刻被保留在專輯版本中。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'In a moment of anger she does something childish, and instead of leaving, he stays and shrugs it off.', zh: '她在一時氣憤下做了孩子氣的事，他卻沒有離開，而是留下來一笑置之。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She loves that he stays, that he is willing to fight and then make up. That is what love looks like to her now.', zh: '她喜歡他留下來，願意吵架之後和好。對現在的她來說，這就是愛的模樣。' } },
    ],
    echoes: [
      { ref: 'fearless/the-other-side-of-the-door', note: { en: 'The slammed door of Fearless becomes a joke shared between two people here.', zh: '《Fearless》中那扇被甩上的門，在這裏變成兩人之間的笑話。' } },
    ],
  },
  {
    slug: 'the-last-time', title: 'The Last Time', track: 10, section: 'standard', feat: 'Gary Lightbody',
    writers: ['Taylor Swift', 'Gary Lightbody', 'Jacknife Lee'], producers: ['Jacknife Lee'],
    single: { en: 'Single, November 2013', zh: '單曲，2013 年 11 月' },
    overview: {
      en: 'A sombre duet with Snow Patrol’s Gary Lightbody: two people promising this will be the last time they hurt each other.',
      zh: '一首與 Snow Patrol 的 Gary Lightbody 合唱的沉重對唱：兩人承諾這是最後一次傷害對方。',
    },
    story: {
      en: 'Swift has said she was a fan of Snow Patrol and wanted to work with [[Gary Lightbody]]. The two wrote the song together with producer [[Jacknife Lee]], building it like a slow march with strings.\n\nThe structure is a conversation: he asks for one more chance, she tells him she has heard this before.',
      zh: 'Swift 說她是 Snow Patrol 的歌迷，一直想與 [[Gary Lightbody]] 合作。兩人與監製 [[Jacknife Lee]] 一同寫下這首歌，把它構建成一首配上弦樂的緩慢進行曲。\n\n結構是一段對話：他請求再給一次機會，她告訴他，這番話她已聽過了。',
    },
    lyrics: [
      { part: { en: 'His verse', zh: '他的段落' }, meaning: { en: 'He stands at her door, admitting he has failed her and promising to change.', zh: '他站在她門前，承認自己辜負了她，並承諾會改變。' } },
      { part: { en: 'Her verse', zh: '她的段落' }, meaning: { en: 'She recalls all the times he has said this, and how each time she believed him.', zh: '她回想他說過多少次同樣的話，而她每次都相信了。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'They both insist this is the last time, though neither is sure.', zh: '兩人都堅稱這是最後一次，雖然誰也不肯定。' } },
    ],
    echoes: [
      { ref: 'red/everything-has-changed', note: { en: 'The album’s other duet, this time hopeful rather than weary.', zh: '專輯中的另一首對唱，這次充滿希望而不是疲憊。' } },
    ],
  },
];
