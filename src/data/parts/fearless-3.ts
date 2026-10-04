import type { Song } from '../types';

// Fearless (Taylor's Version)：第 20–26 首（附加曲目及 From the Vault）
export const part3: Song[] = [
  {
    slug: 'today-was-a-fairytale', title: 'Today Was a Fairytale', track: 20, section: 'bonus',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    single: { en: 'From the film Valentine’s Day, January 2010 · debuted at No. 2 on the Hot 100', zh: '電影《情人節快樂》歌曲，2010 年 1 月．空降 Hot 100 第二位' },
    overview: {
      en: 'A song for her first film role, about a single perfect day: the fairy tale finally comes true, if only for one day.',
      zh: '為她首部電影角色而寫的歌，寫完美的一天：童話終於成真，哪怕只有一天。',
    },
    story: {
      en: 'Swift wrote the song for the 2010 romantic comedy Valentine’s Day, in which she made her film acting debut. She has said it was written during the Fearless era and fitted the film’s mood perfectly. It was originally a soundtrack single, not an album track, but she included it on Fearless (Taylor’s Version) because it belonged to that time.\n\nOn release it sold so many downloads in its first week that it set a record for a female artist at the time, debuting at number two.',
      zh: 'Swift 為 2010 年愛情喜劇《情人節快樂》寫下這首歌，她亦在片中首次參與電影演出。她說這首歌寫於 Fearless 時期，與電影的氣氛十分吻合。它原本是電影原聲單曲，並非專輯歌曲，但她把它收錄進《Fearless (Taylor’s Version)》，因為它屬於那段時光。\n\n歌曲推出首週的下載量極高，創下當時女歌手的紀錄，空降第二位。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He arrives to pick her up and everything about the day feels charmed, from the weather to the way he looks at her.', zh: '他來接她，那一天的一切都像被施了魔法，由天氣到他看她的眼神。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'For once, the fairy tale she always imagined is real, and she wants to hold on to the feeling.', zh: '這一次，她一直想像的童話成真了，她想緊緊抓住這份感覺。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She notices she can feel the day changing her, as if she will remember it for the rest of her life.', zh: '她察覺這一天正在改變她，彷彿她會記住它一輩子。' } },
    ],
    echoes: [
      { ref: 'fearless/love-story', note: { en: 'The fairy-tale romance of the era, now experienced as a single real day.', zh: '這個時期的童話戀愛，這次化為真實的一天。' } },
    ],
  },
  {
    slug: 'you-all-over-me', title: 'You All Over Me', track: 21, section: 'vault', feat: 'Maren Morris',
    writers: ['Taylor Swift', 'Scooter Carusoe'], producers: ['Aaron Dessner', 'Taylor Swift'],
    single: { en: 'First vault track released, 26 March 2021', zh: '第一首推出的 vault 歌曲，2021 年 3 月 26 日' },
    overview: {
      en: 'The first song ever released "from the vault": a breakup that you cannot wash off, however hard you try.',
      zh: '史上第一首「From the Vault」歌曲：一段無論怎樣努力都洗不掉的分手。',
    },
    context: {
      en: 'When Swift announced the re-recording of Fearless, she explained that "From the Vault" songs were ones she had written for the album but left off. Releasing them gave fans something new and made the re-recordings more than copies.',
      zh: 'Swift 宣佈重錄《Fearless》時解釋，「From the Vault」歌曲是她當年為專輯而寫、最後沒有收錄的作品。推出這些歌曲，為歌迷帶來新內容，也令重錄版不只是複製品。',
    },
    story: {
      en: 'Written with [[Scooter Carusoe]] when she was a teenager, the song was produced in 2021 by [[Aaron Dessner]], her folklore collaborator, with backing vocals from [[Maren Morris]]. The new production gives an old song a quieter, more grown-up texture.\n\nThe image at its centre is dirt and rain: a breakup that leaves marks on you, and the slow work of becoming clean again.',
      zh: '這首歌在她十多歲時與 [[Scooter Carusoe]] 合寫，2021 年由她在《folklore》的合作夥伴 [[Aaron Dessner]] 監製，並由 [[Maren Morris]] 擔任和音。新的編曲為這首舊作帶來更安靜、更成熟的質感。\n\n核心意象是泥塵和雨水：一段在你身上留下痕跡的分手，以及慢慢重新變得乾淨的過程。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes trying to move on and still finding traces of him in everything.', zh: '她描述自己努力向前，卻在每一件事上仍找到他的痕跡。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'No matter how much time passes or how much rain falls, she cannot get rid of him. The memory clings like dirt.', zh: '無論過了多久、下了多少雨，她都擺脫不了他。回憶像泥塵一樣黏着她。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She hopes that one day she will be free of it, though she is not there yet.', zh: '她希望有一天能擺脫這一切，雖然現在還未做到。' } },
    ],
    echoes: [
      { ref: '1989/clean', note: { en: 'Six years later she finally describes the rain washing her clean.', zh: '六年後，她終於寫出雨水把她洗淨的一刻。' } },
    ],
  },
  {
    slug: 'mr-perfectly-fine', title: 'Mr. Perfectly Fine', track: 22, section: 'vault',
    writers: ['Taylor Swift'], producers: ['Jack Antonoff', 'Taylor Swift'],
    overview: {
      en: 'A sharp, catchy vault track about an ex who moved on with suspicious ease: a fan favourite on release.',
      zh: '一首尖銳又朗朗上口的 vault 歌曲，寫一位輕易得可疑便放下的前度：推出時深受歌迷喜愛。',
    },
    story: {
      en: 'Written alone in the Fearless era and produced in 2021 with [[Jack Antonoff]], the song is about an ex who seems completely untroubled after the breakup while she is falling apart. Many fans read it as a companion to "Forever & Always".\n\nFans quickly noticed that a distinctive phrase from this song, about cruelty disguised as honesty, reappears in the ten-minute "All Too Well". The overlap became one of the great Easter-egg discoveries of the re-recording era.',
      zh: '這首歌在 Fearless 時期獨力寫成，2021 年與 [[Jack Antonoff]] 監製。歌曲寫一位分手後看來毫無困擾的前度，而她卻正在崩潰。不少歌迷把它視為〈Forever & Always〉的姊妹篇。\n\n歌迷很快便發現，這首歌中一個關於「以坦白為名的殘忍」的獨特詞組，後來在十分鐘版〈All Too Well〉中再次出現。這個重疊成為重錄時期最著名的彩蛋發現之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers how intensely he pursued her and how quickly he changed his mind.', zh: '她回想他當初如何熱烈追求她，又如何迅速改變主意。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She mocks him with a title of her own invention: he is perfectly calm, perfectly fine, and that is exactly what makes her furious.', zh: '她用自創的稱號嘲諷他：他冷靜得完美、好得完美，而這正是令她憤怒的地方。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The bridge turns: she is hurting, but she predicts that one day he will realise what he lost, and she will be the one who is fine.', zh: '橋段轉折：她正受傷，但預言有一天他會明白自己失去了甚麼，而那時好端端的人會是她。' } },
    ],
    echoes: [
      { ref: 'fearless/forever-and-always', note: { en: 'Read together, the two songs show the same breakup from bewilderment to biting wit.', zh: '兩首歌一起讀，呈現同一段分手由困惑到辛辣機智的過程。' } },
      { ref: 'red/all-too-well-10-minute-version', note: { en: 'A phrase about cruelty disguised as honesty connects the two songs.', zh: '一個關於「以坦白為名的殘忍」的詞組，把兩首歌連在一起。' } },
    ],
  },
  {
    slug: 'we-were-happy', title: 'We Were Happy', track: 23, section: 'vault',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Jack Antonoff', 'Taylor Swift'],
    overview: {
      en: 'A gentle, sorrowful vault track about a good relationship that ended anyway.',
      zh: '一首溫柔而哀傷的 vault 歌曲，寫一段美好卻仍然結束的感情。',
    },
    story: {
      en: 'Written with [[Liz Rose]], the song looks back at a relationship with no villain: they were happy, they had plans, and somehow it still did not last. [[Keith Urban]] sings backing vocals on the 2021 recording.\n\nThe sadness is quiet and adult. Instead of blaming anyone, she mourns the future they had pictured.',
      zh: '這首歌與 [[Liz Rose]] 合寫，回望一段沒有壞人的感情：他們曾經快樂、有過計劃，卻不知怎的仍未能長久。2021 年的錄音由 [[Keith Urban]] 擔任和音。\n\n悲傷安靜而成熟。她沒有責怪任何人，只是哀悼兩人曾經想像過的將來。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She remembers the simple pleasures of the relationship and the life they planned together in the countryside.', zh: '她回想這段感情的簡單快樂，以及兩人計劃在鄉間共度的生活。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The repeated insistence that they were happy makes the ending harder to understand.', zh: '她反覆強調兩人曾經快樂，令結局更難以理解。' } },
    ],
    echoes: [
      { ref: 'evermore/happiness', note: { en: 'Years later, a deeper meditation on how a relationship can be both happy and finished.', zh: '多年後，對「一段感情可以既快樂又已結束」的更深沉思。' } },
    ],
  },
  {
    slug: 'thats-when', title: "That's When", track: 24, section: 'vault', feat: 'Keith Urban',
    writers: ['Taylor Swift', 'Brad Warren', 'Brett Warren'], producers: ['Aaron Dessner', 'Taylor Swift'],
    overview: {
      en: 'A sweet duet with Keith Urban about a couple finding their way back to each other.',
      zh: '一首與 Keith Urban 合唱的甜美對唱，寫一對戀人重新找回彼此。',
    },
    story: {
      en: 'Swift wrote "That’s When" with [[Brad Warren]] and [[Brett Warren]] when she was about fourteen. For the 2021 recording she turned it into a duet with [[Keith Urban]].\n\nThe song is a conversation: one person asks when they can come back, and the other answers that the door will open when they are ready.',
      zh: 'Swift 約十四歲時與 [[Brad Warren]]、[[Brett Warren]] 合寫〈That’s When〉。2021 年錄音時，她把它改為與 [[Keith Urban]] 的對唱。\n\n歌曲是一段對話：一方問何時可以回來，另一方回答，等你準備好的時候，門就會打開。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'One partner asks for time and space; the other is patient and hurt.', zh: '一方需要時間和空間；另一方耐心等待，卻也受了傷。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The answer to "when can I come back?" is gentle: when you are sure, that is when.', zh: '「我何時可以回來？」的答案很溫柔：當你確定的時候，就是那時候。' } },
    ],
  },
  {
    slug: 'dont-you', title: "Don't You", track: 25, section: 'vault',
    writers: ['Taylor Swift', 'Tommy Lee James'], producers: ['Jack Antonoff', 'Taylor Swift'],
    overview: {
      en: 'Running into an ex who is being kind, and wishing he would not be.',
      zh: '偶遇一位待她很客氣的前度，而她寧願他不要這樣。',
    },
    story: {
      en: 'Written with [[Tommy Lee James]] and given a hazy, synth-tinged production by [[Jack Antonoff]] in 2021, "Don’t You" sounds closer to Midnights than to Fearless. The situation is very specific: an ex has moved on, and his politeness hurts more than coldness would.',
      zh: '〈Don’t You〉與 [[Tommy Lee James]] 合寫，2021 年由 [[Jack Antonoff]] 配上朦朧、帶合成器色彩的編曲，聽起來更接近《Midnights》而不是《Fearless》。處境非常具體：前度已經向前走，他的禮貌比冷漠更令人難受。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'He greets her warmly, as if nothing happened, and she has to pretend she is fine.', zh: '他熱情地向她打招呼，彷彿甚麼都沒發生過，她只好假裝沒事。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks him not to be nice to her, because kindness reminds her of what she lost.', zh: '她請他不要對她好，因為那份好，令她想起自己失去了甚麼。' } },
    ],
    echoes: [
      { ref: '1989/now-that-we-dont-talk', note: { en: 'Another song about the strange etiquette of exes.', zh: '另一首寫前度之間那種奇怪禮節的歌。' } },
    ],
  },
  {
    slug: 'bye-bye-baby', title: 'Bye Bye Baby', track: 26, section: 'vault',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Jack Antonoff', 'Taylor Swift'],
    overview: {
      en: 'A soft, final goodbye that closes Fearless (Taylor’s Version).',
      zh: '一聲柔和而決絕的再見，為《Fearless (Taylor’s Version)》作結。',
    },
    story: {
      en: 'An early song written with [[Liz Rose]] and reworked for the vault, "Bye Bye Baby" closes the re-recording on a note of acceptance. The relationship is over, and instead of fighting it, she lets it go.\n\nEnding the album here mirrors the arc of Fearless itself: from the hope of the title track to the quiet wisdom of letting go.',
      zh: '〈Bye Bye Baby〉是一首與 [[Liz Rose]] 合寫的早期作品，為 vault 重新製作，以接受的心境為重錄版作結。感情已經結束，她沒有抗拒，而是放手。\n\n以這首歌結束專輯，呼應《Fearless》本身的弧線：由同名主打歌的盼望，走到放手的安靜智慧。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She realises the person she loved is not who she thought, and that the illusion has faded.', zh: '她察覺自己愛的人並不是她以為的那個人，幻象已經褪色。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'A gentle farewell: she is leaving, and she will not look back.', zh: '一聲溫柔的道別：她要走了，也不會回頭。' } },
    ],
    echoes: [
      { ref: 'fearless/fearless', note: { en: 'The album that began with hope ends with letting go.', zh: '以盼望開始的專輯，以放手作結。' } },
    ],
  },
];
