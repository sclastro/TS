import type { Song } from '../types';

// reputation（2017）：第 1–8 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const MS = ['Max Martin', 'Shellback'];

export const part1: Song[] = [
  {
    slug: 'ready-for-it', title: '...Ready for It?', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback', 'Ali Payami'], producers: [...MS, 'Ali Payami'],
    single: { en: 'Promotional single September 2017; second single October 2017', zh: '2017 年 9 月宣傳單曲；2017 年 10 月第二支單曲' },
    overview: {
      en: 'A thundering, half-rapped opener: the new Taylor Swift arrives with a bass drop, describing a love that feels like a crime caper.',
      zh: '一首雷霆萬鈞、半說半唱的開場曲：新的 Taylor Swift 伴隨低音轟鳴登場，把一段愛情形容得像一宗犯罪劇情。',
    },
    context: {
      en: 'In August 2017, after a year away from the spotlight following a very public dispute, Swift wiped her social media accounts and returned with images of snakes. The album that followed was dark, electronic and defensive, but underneath it was a love story she kept largely private.',
      zh: '2017 年 8 月，經歷一場極度公開的爭議並淡出鎂光燈一年後，Swift 清空社交媒體帳戶，再以蛇的影像回歸。隨後推出的專輯陰暗、電子化、充滿防衛，但底下藏着一個她幾乎完全保密的愛情故事。',
    },
    story: {
      en: 'Written with [[Max Martin]], [[Shellback]] and [[Ali Payami]], the song mixes aggressive, distorted verses with a dreamy, almost sweet chorus. That contrast is the album in miniature: the hard shell and the soft centre.\n\nThe lyric imagines two people meeting and falling for each other as if they were partners in a heist, with references to famous outlaw couples.',
      zh: '這首歌與 [[Max Martin]]、[[Shellback]]、[[Ali Payami]] 合寫，把具攻擊性、失真的主歌與夢幻、近乎甜美的副歌混合。這種反差就是整張專輯的縮影：堅硬的外殼與柔軟的內心。\n\n歌詞想像兩個人相遇並愛上對方，彷彿是一起犯案的拍檔，並借用了著名亡命鴛鴦的典故。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She sizes up a new man the way a thief sizes up a target: confident, calculating, a little dangerous.', zh: '她像盜賊打量目標一樣審視一個新對象：自信、精於算計，又帶點危險。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The tone softens into a daydream: she imagines their future together and asks if he is ready for what comes next.', zh: '語氣軟化成白日夢：她想像兩人的將來，並問他是否準備好迎接接下來的一切。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She casts them as a pair of fugitives, with a nod to famous outlaw couples, bonded by being misunderstood.', zh: '她把兩人想像成一對逃犯，借用著名亡命鴛鴦的典故；他們因同樣被誤解而結合。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Late-night meetings, secrecy and anticipation: the romance has to be hidden, which only makes it more thrilling.', zh: '深夜的相會、秘密與期待：這段戀情必須隱藏，卻反而更刺激。' } },
    ],
    mv: {
      id: 'wIft-t-MQuE', director: 'Joseph Kahn', date: '2017-10-26',
      scenes: [
        { scene: { en: 'Two Taylors', zh: '兩個 Taylor' }, meaning: { en: 'In a dark, futuristic city, a hooded human Swift confronts a captive cyborg version of herself. The fight between them suggests a battle between her public image and her real self.', zh: '在陰暗的未來城市中，一個戴兜帽的人類 Swift 面對被囚的機械人版本自己。兩者之間的戰鬥，暗示她的公眾形象與真實自我之間的角力。' } },
        { scene: { en: 'The escape', zh: '逃脫' }, meaning: { en: 'The cyborg breaks free in a flood of water and light. The video’s science-fiction look introduced the era’s cold, armoured visual style.', zh: '機械人在水與光的洪流中掙脫。MV 的科幻風格，揭開了這個時期冷峻、如披盔甲的視覺風格。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/getaway-car', note: { en: 'The heist metaphor returns later on the album, this time for a love affair that ends badly.', zh: '劫案的比喻在專輯稍後再次出現，這次寫一段結局不妙的戀情。' } },
      { ref: 'fearless/love-story', note: { en: 'Swift’s early romances were fairy tales; here, the fantasy has become an outlaw thriller.', zh: 'Swift 早期的戀愛是童話；到了這裏，幻想變成了亡命驚悚片。' } },
    ],
  },
  {
    slug: 'end-game', title: 'End Game', track: 2, section: 'standard', feat: 'Ed Sheeran & Future',
    writers: ['Taylor Swift', 'Ed Sheeran', 'Future', 'Max Martin', 'Shellback'], producers: MS,
    single: { en: 'Third single, November 2017', zh: '第三支單曲，2017 年 11 月' },
    overview: {
      en: 'A three-way collaboration about wanting to be someone’s final love, despite a reputation that walks into the room first.',
      zh: '一首三方合作的歌，寫渴望成為某人最後的愛人，即使自己的名聲總比自己先一步走進房間。',
    },
    story: {
      en: 'Swift brought together her friend [[Ed Sheeran]] and the rapper [[Future]], each of whom wrote and performed a verse about their own reputation. Written with [[Max Martin]] and [[Shellback]], the song blends pop, R&B and hip-hop.\n\nThe idea is simple: all three are known for things the public has decided about them, and each says they want something lasting anyway.',
      zh: 'Swift 邀請好友 [[Ed Sheeran]] 和饒舌歌手 [[Future]] 合作，兩人各自寫並唱出一段關於自己名聲的歌詞。這首歌與 [[Max Martin]]、[[Shellback]] 合寫，融合流行、R&B 和嘻哈。\n\n構思很簡單：三人都因公眾對他們的定型而為人所知，而每個人都說，自己仍想要一段長久的感情。',
    },
    lyrics: [
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She wants to be his end game, the last and lasting one, not just another chapter.', zh: '她想成為他的「最終章」：最後一個、也是長久的那一個，而不只是又一個篇章。' } },
      { part: { en: 'Future’s verse', zh: 'Future 的段落' }, meaning: { en: 'He describes his own reputation as a player and says this time feels different.', zh: '他描述自己花心的名聲，並說這一次感覺不同。' } },
      { part: { en: 'Sheeran’s verse', zh: 'Sheeran 的段落' }, meaning: { en: 'He admits to his past mistakes and a reputation for drinking and breakups, and says he wants to change.', zh: '他承認過去的錯誤，以及酗酒和分手的名聲，並說自己想改變。' } },
      { part: { en: 'Swift’s verse', zh: 'Swift 的段落' }, meaning: { en: 'She acknowledges the public’s view of her romantic history and asks him to see past it.', zh: '她承認公眾對她感情史的看法，並請他看穿這些表象。' } },
    ],
    mv: {
      id: 'dfnCAmr569k', director: 'Joseph Kahn', date: '2018-01-12',
      scenes: [
        { scene: { en: 'Miami', zh: '邁阿密' }, meaning: { en: 'Swift and Future party on a yacht and drive through the city at night.', zh: 'Swift 與 Future 在遊艇上開派對，深夜駕車穿過城市。' } },
        { scene: { en: 'Tokyo', zh: '東京' }, meaning: { en: 'With Sheeran she explores Tokyo’s neon streets and karaoke bars.', zh: '她與 Sheeran 遊走東京霓虹閃爍的街道和卡拉 OK 酒吧。' } },
        { scene: { en: 'London', zh: '倫敦' }, meaning: { en: 'The video ends in London on a double-decker bus with friends, a hint at the city where her private life was then centred.', zh: 'MV 以她與朋友在倫敦雙層巴士上作結，暗示她當時私人生活的重心所在。' } },
      ],
    },
    echoes: [
      { ref: 'red/everything-has-changed', note: { en: 'Sheeran and Swift first collaborated on Red; this is their reunion in a very different sound.', zh: 'Sheeran 與 Swift 首次合作是在《Red》；這次重聚的聲音截然不同。' } },
      { ref: '1989/blank-space', note: { en: 'The reputation as a serial dater, satirised in 1989, is addressed head-on here.', zh: '《1989》所諷刺的「戀愛專家」名聲，在這裏被正面處理。' } },
    ],
  },
  {
    slug: 'i-did-something-bad', title: 'I Did Something Bad', track: 3, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: MS,
    overview: {
      en: 'A gleeful villain anthem: if they call it a witch hunt, she will happily light the match.',
      zh: '一首得意洋洋的反派頌歌：如果他們稱這是獵巫行動，她會樂於親手點火。',
    },
    story: {
      en: 'Swift has said she enjoyed writing from the perspective of someone who does not care what people think. The narrator manipulates manipulative men and feels no guilt about it, turning the tables on people who used her.\n\nThe chorus, built on a pitched-down vocal sample and a thunderous drop, became one of the most dramatic moments of the reputation Stadium Tour and later the Eras Tour, staged with bursts of fire.',
      zh: 'Swift 說她很享受以一個不在乎別人看法的人的角度寫作。敘述者操縱那些愛操縱別人的男人，而且毫無愧疚，把局勢反轉過來，對付那些曾利用她的人。\n\n副歌建基於調低音高的人聲取樣和轟鳴的節拍，成為 reputation Stadium Tour 及後來 Eras Tour 最具戲劇性的時刻之一，配以噴火效果。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes playing a man who thought he was playing her. She has learned the game too.', zh: '她描述自己玩弄了一個以為自己在玩弄她的男人。她也學會了這個遊戲。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She admits she did something bad, and the twist is that it felt good. The confession is delivered with a grin.', zh: '她承認自己做了壞事，轉折在於那感覺很好。這個坦白是笑着說出來的。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She invokes the image of a witch hunt and says that if people are going to burn her anyway, she will be the one holding the fire.', zh: '她借用獵巫的意象，說既然人們無論如何都要燒死她，她寧願自己手握火種。' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'The same embrace of the villain role.', zh: '同樣擁抱反派的角色。' } },
      { ref: 'the-tortured-poets-department/whos-afraid-of-little-old-me', note: { en: 'Seven years later, another song in which she plays the monster people made her into.', zh: '七年後，另一首她飾演別人把她塑造成的怪物的歌。' } },
    ],
  },
  {
    slug: 'dont-blame-me', title: "Don't Blame Me", track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: MS,
    overview: {
      en: 'A gospel-tinged, near-religious song about a love so consuming it feels like an addiction.',
      zh: '一首帶福音色彩、近乎宗教式的歌，寫一段令人沉溺得像上癮的愛。',
    },
    story: {
      en: 'Written with [[Max Martin]] and [[Shellback]], "Don’t Blame Me" uses the language of addiction and devotion to describe falling in love. The production builds to a soaring, church-like chorus.\n\nYears after the album’s release, the song found a new audience on social media, where clips of its high notes went viral.',
      zh: '這首歌與 [[Max Martin]]、[[Shellback]] 合寫，以上癮和虔誠的語言描寫墮入愛河。編曲逐漸攀升至一段如教堂聖詩般的副歌。\n\n專輯推出多年後，這首歌在社交媒體上找到新聽眾，其高音片段在網上爆紅。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits she used to play with people’s hearts, but this time she has been caught herself.', zh: '她承認自己從前玩弄別人的心，但這一次，自己也陷了進去。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Love has made her lose her mind, and she says not to blame her for it. The imagery is of a drug she will keep taking.', zh: '愛令她失去理智，她說別為此怪她。意象是一種她會一直服用的藥。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The love is described almost as a religious experience, something that saves her.', zh: '這份愛被描述得近乎宗教經驗，像某種拯救她的東西。' } },
    ],
    echoes: [
      { ref: '1989/clean', note: { en: 'Love as addiction: in 1989 she was getting clean; here she embraces it.', zh: '愛如上癮：在《1989》中她努力戒掉；在這裏她選擇擁抱。' } },
    ],
  },
  {
    slug: 'delicate', title: 'Delicate', track: 5, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: MS,
    single: { en: 'Sixth single, March 2018', zh: '第六支單曲，2018 年 3 月' },
    overview: {
      en: 'The vulnerable heart of reputation: a new romance starting just when her reputation was at its lowest, and the fear that it was too fragile to last.',
      zh: '《reputation》脆弱的核心：一段新戀情正好在她名聲跌至谷底時開始，以及害怕它脆弱得無法長久的恐懼。',
    },
    story: {
      en: 'Swift has explained that "Delicate" is about the moment early in a relationship when you wonder whether the other person really likes you, made worse by knowing that your reputation has come before you. The song opens with her voice processed through a vocoder, as if it is barely holding together.\n\nIt is one of the most honest songs on the album and became a fan favourite, especially for the dreamy, hesitant way it describes new love.',
      zh: 'Swift 解釋，〈Delicate〉寫的是一段感情初期，你不知道對方是否真的喜歡你的那一刻；而知道自己的名聲早已先你一步，令這份不安更甚。歌曲以經聲碼器處理的人聲開場，彷彿那把聲音快要支撐不住。\n\n這是專輯中最坦白的歌之一，深受歌迷喜愛，尤其因為它以夢幻而猶豫的方式描寫新戀情。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She knows her reputation is in ruins and wonders if he can see past it.', zh: '她知道自己的名聲已成廢墟，不知道他能否看穿這一切。' } },
      { part: { en: 'Pre-chorus', zh: '導歌' }, meaning: { en: 'Small, intimate details of their early relationship: a dive bar, a late night, a phone call.', zh: '兩人感情初期細小而私密的細節：一間小酒吧、一個深夜、一通電話。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks whether this is too much, too soon, and admits that everything feels delicate.', zh: '她問這樣是否太快、太多，並承認一切都顯得脆弱。' } },
    ],
    mv: {
      id: 'tCXGJQYZ9JA', director: 'Joseph Kahn', date: '2018-03-11',
      note: { en: 'Premiered at the 2018 iHeartRadio Music Awards.', zh: '於 2018 年 iHeartRadio 音樂大獎首播。' },
      scenes: [
        { scene: { en: 'Surrounded and watched', zh: '被包圍、被注視' }, meaning: { en: 'At a hotel event, Swift is surrounded by cameras and staff. Her smile is fixed and her world is controlled.', zh: '在酒店的活動中，Swift 被攝影機和工作人員包圍。她的笑容僵硬，她的世界被控制。' } },
        { scene: { en: 'The note', zh: '紙條' }, meaning: { en: 'She receives a mysterious note, becomes invisible, and begins dancing wildly and freely through the hotel and the streets.', zh: '她收到一張神秘紙條，隨即變得隱形，開始在酒店和街上狂野而自由地起舞。' } },
        { scene: { en: 'The rain', zh: '雨' }, meaning: { en: 'Dancing in the rain, she becomes visible again, and a stranger sees her. The point: away from the public gaze, she can be herself, and someone sees the real her.', zh: '在雨中跳舞時，她重新變得可見，一位陌生人看見了她。重點是：遠離公眾目光，她可以做回自己，而有人看見了真正的她。' } },
      ],
    },
    echoes: [
      { ref: 'lover/the-archer', note: { en: 'Two years later, a similar vulnerability: wondering why anyone would stay.', zh: '兩年後，相似的脆弱：不明白為何有人會留下。' } },
      { ref: '1989/i-know-places', note: { en: 'Protecting a new love from the world, first imagined on 1989.', zh: '保護一段新戀情不受世界干擾，最早在《1989》中出現。' } },
    ],
  },
  {
    slug: 'look-what-you-made-me-do', title: 'Look What You Made Me Do', track: 6, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Fred Fairbrass', 'Richard Fairbrass', 'Rob Manzoli'], producers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Lead single, 24 August 2017 · Hot 100 No. 1', zh: '首支單曲，2017 年 8 月 24 日．Hot 100 冠軍' },
    overview: {
      en: 'The shock return: a cold, theatrical villain song in which the old Taylor is declared dead.',
      zh: '震撼的回歸：一首冷峻、富戲劇性的反派歌，宣告「舊的 Taylor」已經死去。',
    },
    context: {
      en: 'After a year of silence, Swift deleted every post from her social media and replaced them with short videos of a snake, reclaiming an insult that had been thrown at her online. Days later, this song arrived.',
      zh: '沉默一年後，Swift 刪除社交媒體上的所有帖文，換上短短的蛇影片，把網上用來侮辱她的符號據為己有。幾天後，這首歌面世。',
    },
    story: {
      en: 'Written and produced with [[Jack Antonoff]], the song interpolates the 1991 hit "I’m Too Sexy" by Right Said Fred, whose members are credited as co-writers. Its minimalist, eerie verses and chant-like chorus were a deliberate shock after the sunny pop of 1989.\n\nThe narrator is someone who has been wronged so many times that she has become cold and vengeful, and blames the people who pushed her there. A spoken line in the middle announced that the old version of her could no longer be reached, because she was dead. It became the defining moment of the era.',
      zh: '這首歌與 [[Jack Antonoff]] 合寫及監製，並引用了 Right Said Fred 在 1991 年的熱門歌〈I’m Too Sexy〉，該樂隊成員亦列為合寫人。極簡而詭異的主歌和口號式副歌，在《1989》陽光的流行樂之後，刻意帶來震撼。\n\n敘述者是一個被傷害太多次、因而變得冷酷並決意報復的人，她把責任歸咎於那些把她逼到這地步的人。歌曲中段一段獨白宣佈，舊的她已經無法聯絡，因為她已經死了。這成為整個時期最具代表性的一刻。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She lists the tricks others played on her and says she has seen through all of them.', zh: '她數出別人對她耍過的手段，說自己已全部看穿。' } },
      { part: { en: 'Pre-chorus', zh: '導歌' }, meaning: { en: 'She has learned from them and is getting smarter and harder; she is keeping a list of names.', zh: '她從他們身上學會了，正變得更聰明、更強硬；她正在記下一份名單。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'A cold, repeated accusation: whatever she has become, it is their fault.', zh: '一句冷冰冰、反覆的指控：無論她變成甚麼樣子，都是他們造成的。' } },
      { part: { en: 'Spoken bridge', zh: '獨白橋段' }, meaning: { en: 'A phone call in which she declares the old Taylor gone. It is theatre, a performance of rebirth.', zh: '一通電話，她宣佈舊的 Taylor 已經不在。這是一場戲，一場重生的表演。' } },
    ],
    mv: {
      id: '3tmd-ClpJxA', director: 'Joseph Kahn', date: '2017-08-27',
      note: { en: 'Premiered at the 2017 MTV VMAs and broke YouTube’s 24-hour viewing record at the time.', zh: '於 2017 年 MTV VMA 首播，並打破當時 YouTube 二十四小時觀看紀錄。' },
      scenes: [
        { scene: { en: 'The grave', zh: '墳墓' }, meaning: { en: 'A zombie Swift climbs out of a grave marked as the resting place of her reputation, burying the version of herself that died in the controversy.', zh: '一個喪屍版 Swift 從一座墓中爬出，墓碑寫着那是她「名聲」的安息之地，埋葬了在爭議中死去的那個自己。' } },
        { scene: { en: 'The snake throne', zh: '蛇之王座' }, meaning: { en: 'She sits on a throne surrounded by snakes, served tea by them: the insult has become her symbol of power.', zh: '她坐在被蛇圍繞的王座上，由蛇為她奉茶：侮辱已變成她權力的象徵。' } },
        { scene: { en: 'Satire everywhere', zh: '處處諷刺' }, meaning: { en: 'A crashed car with a Grammy, a heist on a streaming company, a squad of robotic models: each scene mocks a headline or criticism from her past.', zh: '撞毀的車上放着格林美獎座、搶劫一間串流公司、一隊機械人模特兒：每一幕都在嘲諷她過去的某條新聞或某句批評。' } },
        { scene: { en: 'The pile of Taylors', zh: '一堆 Taylor' }, meaning: { en: 'Swift’s past personas from earlier videos and award shows stand together, bickering and mocking one another. It is the most self-aware moment she had ever filmed.', zh: 'Swift 在過往 MV 和頒獎禮上的種種形象站在一起，互相拌嘴和嘲笑。這是她拍過最有自知之明的一幕。' } },
      ],
    },
    echoes: [
      { ref: 'speak-now/innocent', note: { en: 'In 2010 she answered a public humiliation with forgiveness; in 2017, with this.', zh: '2010 年她以寬恕回應公開的羞辱；2017 年，她以這首歌回應。' } },
      { ref: 'speak-now/castles-crumbling', note: { en: 'The fall she imagined as a teenager, now lived.', zh: '她少女時想像的墜落，如今真的發生了。' } },
      { ref: '1989/shake-it-off', note: { en: 'Three years earlier she shrugged off critics; now she confronts them.', zh: '三年前她對批評一笑置之；如今她正面迎擊。' } },
    ],
  },
  {
    slug: 'so-it-goes', title: 'So It Goes...', track: 7, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback', 'Oscar Görres'], producers: [...MS, 'Oscar Görres'],
    overview: {
      en: 'A slinky, noir-tinged song about a secret romance that feels like a dangerous game.',
      zh: '一首帶黑色電影色彩、性感慵懶的歌，寫一段像危險遊戲的秘密戀情。',
    },
    story: {
      en: 'Written with [[Max Martin]], [[Shellback]] and [[Oscar Görres]], "So It Goes..." uses imagery of crime films and magic tricks to describe a relationship conducted in secret, away from the public eye.\n\nThe mood is sultry and a little ominous, matching the album’s dark palette.',
      zh: '這首歌與 [[Max Martin]]、[[Shellback]]、[[Oscar Görres]] 合寫，借用犯罪電影和魔術的意象，描寫一段遠離公眾目光、秘密進行的感情。\n\n氣氛性感又帶點不祥，與專輯陰暗的色調相配。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She describes their relationship as if it were a crime they are committing together, thrilling and hidden.', zh: '她把兩人的關係形容得像一起犯下的罪行，刺激而隱密。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She surrenders to it with a shrug: whatever happens, happens.', zh: '她聳聳肩地投降：該發生的，就讓它發生吧。' } },
    ],
    echoes: [
      { ref: 'reputation/ready-for-it', note: { en: 'Another crime-movie fantasy of love on the same album.', zh: '同一張專輯中另一個犯罪電影式的愛情幻想。' } },
    ],
  },
  {
    slug: 'gorgeous', title: 'Gorgeous', track: 8, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: MS,
    single: { en: 'Promotional single, October 2017', zh: '宣傳單曲，2017 年 10 月' },
    overview: {
      en: 'A playful, tipsy song about being so attracted to someone that it is actually annoying.',
      zh: '一首俏皮、帶醉意的歌，寫被某人吸引到令人氣惱的地步。',
    },
    story: {
      en: 'The song opens with a small child saying the word "gorgeous": the voice of [[James Reynolds]], the daughter of Swift’s friends [[Blake Lively]] and [[Ryan Reynolds]]. Written with [[Max Martin]] and [[Shellback]], it is the lightest song on reputation.\n\nThe narrator is at a party, slightly drunk, and furious that someone is so attractive that she cannot think straight.',
      zh: '歌曲以一個小孩說出「gorgeous」一字開場：那是 Swift 的好友 [[Blake Lively]] 與 [[Ryan Reynolds]] 的女兒 [[James Reynolds]] 的聲音。這首歌與 [[Max Martin]]、[[Shellback]] 合寫，是《reputation》中最輕鬆的歌。\n\n敘述者在派對上微醺，氣惱於某人太有魅力，令她無法冷靜思考。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She notices someone across a room and is irritated by how much she likes the way he looks and talks.', zh: '她留意到房間另一邊的某人，氣惱自己竟然這麼喜歡他的樣子和說話方式。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She complains that he is so gorgeous it makes her angry, a comic flip of a compliment.', zh: '她抱怨他太好看，好看得令她生氣；這是把讚美反過來說的喜劇手法。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She mentions she is in a complicated situation already, and that he makes it more complicated.', zh: '她提到自己本來已處於複雜的處境，而他令一切更複雜。' } },
    ],
    echoes: [
      { ref: 'speak-now/sparks-fly', note: { en: 'Instant attraction, written with far more humour seven years later.', zh: '一見鍾情的吸引，七年後寫得幽默得多。' } },
    ],
  },
];
