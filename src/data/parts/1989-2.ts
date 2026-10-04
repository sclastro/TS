import type { Song } from '../types';

// 1989 (Taylor's Version)：第 8–14 首
export const part2: Song[] = [
  {
    slug: 'bad-blood', title: 'Bad Blood', track: 8, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Remix featuring Kendrick Lamar, fourth single, May 2015 · Hot 100 No. 1', zh: '與 Kendrick Lamar 合作的混音版成為第四支單曲，2015 年 5 月．Hot 100 冠軍' },
    overview: {
      en: 'A stomping, drum-heavy song about a friendship broken by betrayal, later turned into an action blockbuster of a music video.',
      zh: '一首以重鼓踏步推進的歌，寫一段因背叛而破裂的友誼，後來更被拍成一部動作大片式的 MV。',
    },
    context: {
      en: 'In her 2014 Rolling Stone cover story, Swift said the song was about another female artist who, she felt, had tried to sabotage one of her tours by hiring away several of her dancers. She did not name the artist, and the press speculation that followed became part of the era’s story.',
      zh: '在 2014 年 Rolling Stone 的封面專訪中，Swift 表示這首歌寫的是另一位女歌手；她認為對方挖走她幾位舞蹈員，企圖破壞她的巡迴演唱會。她沒有說出對方的名字，隨之而來的傳媒猜測，亦成為這個時期故事的一部分。',
    },
    story: {
      en: 'Swift explained that the conflict was not about a man but about business, which made it feel worse: it was someone she had thought of as a friend. She wrote the song with [[Max Martin]] and [[Shellback]] around a chant-like hook and pounding drums, more like a playground taunt than a ballad.\n\nFor the single she invited [[Kendrick Lamar]] to write and perform new verses, which shifted the song toward hip-hop and gave it a harder edge. The remix went to number one.',
      zh: 'Swift 解釋，這場衝突不是為了男人，而是關乎工作，這令事情更難受：對方是她曾視為朋友的人。她與 [[Max Martin]]、[[Shellback]] 圍繞一段口號式的副歌和重擊的鼓聲寫成這首歌，比起抒情歌，更像遊樂場上的挑釁。\n\n推出單曲時，她邀請 [[Kendrick Lamar]] 寫作並演繹新的段落，令歌曲轉向嘻哈，也更強硬。這個混音版登上冠軍。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She addresses the former friend directly: you did something I cannot forgive, and you know exactly what it was.', zh: '她直接對昔日好友說話：你做了一件我無法原諒的事，而你很清楚那是甚麼。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Because of what happened, there is now bad blood between them. The wound metaphor runs through the song: some cuts do not heal no matter what bandages you use.', zh: '因為那件事，兩人之間從此結下梁子。傷口的比喻貫穿全曲：有些傷口，無論貼上甚麼膠布都不會癒合。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She mocks the idea that an apology or a little time could fix things; the damage is too deep.', zh: '她嘲笑以為一句道歉或一點時間就能解決問題的想法；傷害實在太深。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Band-aids do not fix bullet holes: the most quoted image of the song, a blunt statement that some betrayals are permanent.', zh: '膠布補不了彈孔：這是全曲最常被引用的意象，直截了當地指出有些背叛是永久的。' } },
    ],
    mv: {
      id: 'QcIy9NiNbmo', director: 'Joseph Kahn', date: '2015-05-17',
      note: { en: 'Single version featuring Kendrick Lamar. Premiered at the 2015 Billboard Music Awards.', zh: '與 Kendrick Lamar 合作的單曲版本，於 2015 年 Billboard 音樂獎首播。' },
      scenes: [
        { scene: { en: 'The betrayal', zh: '背叛' }, meaning: { en: 'Swift plays an agent called Catastrophe. In the opening fight her partner, Arsyn (played by [[Selena Gomez]]), turns on her and throws her out of a window. The film opens on the betrayal, just as the song does.', zh: 'Swift 飾演代號 Catastrophe 的特工。開場打鬥中，她的拍檔 Arsyn（由 [[Selena Gomez]] 飾演）出賣她，把她推出窗外。MV 以背叛開始，正如歌曲一樣。' } },
        { scene: { en: 'Rebuilding and training', zh: '重建與受訓' }, meaning: { en: 'She is reconstructed and trained by a team of women, each played by a famous friend with a code name. Revenge becomes a group project.', zh: '她被重新改造，並由一隊女性訓練，每人都由知名好友飾演，各有代號。復仇變成一項團隊工作。' } },
        { scene: { en: 'The showdown', zh: '最終對決' }, meaning: { en: 'The squad marches through an exploding city towards the final confrontation. The video ends just as the two women face each other, without showing who wins.', zh: '整隊人穿過爆炸中的城市，邁向最後對決。MV 在兩人正面對峙的一刻結束，沒有交代誰勝誰負。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'The feud theme returns two years later, with Swift casting herself as the villain the world had decided she was.', zh: '兩年後，宿怨的主題再度出現，這次 Swift 乾脆飾演世人認定的那個反派。' } },
    ],
    trivia: [
      { en: 'The video broke Vevo’s 24-hour viewing record at release.', zh: 'MV 推出時打破 Vevo 二十四小時觀看次數紀錄。' },
      { en: 'It won Video of the Year at the 2015 MTV VMAs and the Grammy for Best Music Video.', zh: '奪得 2015 年 MTV VMA 年度音樂錄影帶及格林美最佳音樂錄像。' },
    ],
  },
  {
    slug: 'wildest-dreams', title: 'Wildest Dreams', track: 9, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Fifth single, 31 August 2015', zh: '第五支單曲，2015 年 8 月 31 日' },
    overview: {
      en: 'A breathy, cinematic love song sung by someone who knows the romance will end, and asks only to be remembered beautifully.',
      zh: '一首氣聲迷離、充滿電影感的情歌，唱的人明知這段愛情會結束，只求被美好地記住。',
    },
    story: {
      en: 'Swift has said she wanted the song to feel like old Hollywood: sweeping, romantic and a little doomed. The narrator is realistic, even fatalistic, about the relationship. She does not ask for it to last; she asks to remain in his memory as a perfect image, standing in a nice dress, staring at the sunset.\n\nThe production layers her heartbeat-like pulse with swelling synths, and the bridge rises to the most dramatic vocal on the album.',
      zh: 'Swift 說，她希望這首歌帶有舊荷里活的感覺：恢宏、浪漫，又帶點宿命。敘述者對這段關係很現實，甚至宿命。她不求它長久，只求在他的記憶中留下一幅完美的畫面：穿着漂亮裙子，凝望日落。\n\n編曲以心跳般的脈動，疊上逐漸膨脹的合成器聲，橋段更攀升至全碟最具戲劇性的唱腔。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She sees a man who is clearly trouble and decides to go ahead anyway. Even at the start, she is thinking about the end.', zh: '她看見一個明顯是麻煩的男人，仍決定投入。即使才剛開始，她已在想像結局。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Her request: say you will remember me, in a nice dress, at sunset, even if you only see me again in your wildest dreams. Being remembered is her consolation for losing.', zh: '她的請求：答應我你會記得我，穿着漂亮的裙子，站在夕陽下；即使你只能在最狂野的夢裏再見到我。被記住，是她失去之後的安慰。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She describes the intensity of their time together and anticipates how it will hurt when it is over.', zh: '她描述兩人相處時的熾熱，並預想一切結束後會有多痛。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The song’s emotional peak: she imagines him seeing her in his memory, maybe even with regret, and wants that image to haunt him a little.', zh: '全曲情緒的高峰：她想像他在回憶中看見她，甚至帶着懊悔，並希望那幅畫面能令他有點念念不忘。' } },
    ],
    mv: {
      id: 'IdneKLhsWOQ', director: 'Joseph Kahn', date: '2015-08-30',
      note: { en: 'Premiered on the pre-show of the 2015 MTV VMAs. Proceeds from the video were donated to the African Parks Foundation of America.', zh: '於 2015 年 MTV VMA 頒獎禮前奏節目首播。MV 收益捐給 African Parks Foundation of America。' },
      scenes: [
        { scene: { en: 'A film within the film', zh: '戲中戲' }, meaning: { en: 'Swift and [[Scott Eastwood]] play two 1950s movie stars shooting a romance on location in Africa. The idea mirrors the lyric: a love affair that is partly a performance, and destined to end when filming does.', zh: 'Swift 與 [[Scott Eastwood]] 飾演兩位五十年代電影明星，在非洲拍攝愛情片外景。這個構思呼應歌詞：一段部分是演出來的戀情，注定在拍攝完結時結束。' } },
        { scene: { en: 'Off camera', zh: '鏡頭以外' }, meaning: { en: 'Between takes, the two actors fall for each other for real, among lions, giraffes and the landscape.', zh: '拍攝空檔間，兩位演員在獅子、長頸鹿和遼闊景色之中真的愛上了對方。' } },
        { scene: { en: 'The premiere', zh: '首映' }, meaning: { en: 'At the film’s premiere, he arrives with his wife. She leaves alone, and the affair survives only on screen, the dream of the title.', zh: '電影首映時，他與妻子一同出席。她獨自離開，這段戀情只存在於銀幕上，正是歌名所說的「夢」。' } },
        { scene: { en: 'The criticism', zh: '爭議' }, meaning: { en: 'The video was criticised by some for romanticising colonial-era Africa. Kahn responded that the story was a period romance about two actors and that the crew was diverse. The debate became part of its legacy.', zh: '有評論批評 MV 美化殖民時代的非洲。導演 Kahn 回應，故事是關於兩位演員的時代愛情片，製作團隊亦很多元。這場討論也成為作品的一部分。' } },
      ],
    },
    echoes: [
      { ref: '1989/style', note: { en: 'Both songs are about a love preserved as an image: one as timeless fashion, the other as a movie still.', zh: '兩首歌都把愛情保存為一幅影像：一首是永恆的時裝，一首是電影定格。' } },
    ],
    trivia: [
      { en: 'In 2021 a slowed version went viral on TikTok, and Swift responded by releasing the Taylor’s Version early, in September 2021.', zh: '2021 年，一個放慢版本在 TikTok 爆紅，Swift 隨即在 2021 年 9 月提早推出 Taylor’s Version 作為回應。' },
      { en: 'The music video passed one billion views on YouTube.', zh: 'MV 在 YouTube 的觀看次數突破十億。' },
    ],
  },
  {
    slug: 'how-you-get-the-girl', title: 'How You Get the Girl', track: 10, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    overview: {
      en: 'A cheeky step-by-step manual for winning someone back after breaking her heart.',
      zh: '一份俏皮的分步手冊：教你傷透對方的心之後，怎樣把她追回來。',
    },
    story: {
      en: 'Opening with bright acoustic strumming before the synths arrive, this is one of the playful songs on the album. Swift wrote it with [[Max Martin]] and [[Shellback]] as a set of instructions, narrated by someone who knows exactly how a romantic comedy is supposed to end.\n\nThe joke is in the structure: the verses tell the story of a breakup and a return as if following a recipe, step by step.',
      zh: '歌曲以明亮的木結他掃弦開始，然後才加入合成器，是全碟較俏皮的歌之一。Swift 與 [[Max Martin]]、[[Shellback]] 把它寫成一份說明書，敘述者完全清楚一齣愛情喜劇應該怎樣收場。\n\n笑點在於結構：主歌把分手和復合的故事寫得像跟着食譜一樣，一步一步照做。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Step one: show up at her door in the rain, admit you were wrong. The setting is pure rom-com.', zh: '第一步：在雨中出現在她門前，承認自己錯了。場景完全是愛情喜劇。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Tell her how much you missed her, that you were a fool, and then hold her. That, the chorus announces, is how you get the girl.', zh: '告訴她你有多想念她、你有多傻，然後擁抱她。副歌宣佈：這就是追回女孩的方法。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The song rewinds to the breakup: how he left, how long she cried. The instruction manual has to start with the mistake.', zh: '歌曲倒帶回到分手的時候：他怎樣離開、她哭了多久。這本說明書必須由錯誤寫起。' } },
    ],
    echoes: [
      { ref: '1989/all-you-had-to-do-was-stay', note: { en: 'The opposite outcome: there, the ex who returns is turned away.', zh: '相反的結局：在那首歌中，回頭的前度吃了閉門羹。' } },
    ],
  },
  {
    slug: 'this-love', title: 'This Love', track: 11, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Nathan Chapman'],
    overview: {
      en: 'The only song on 1989 written by Swift alone: a quiet, tidal ballad that began life as a poem.',
      zh: '《1989》中唯一由 Swift 獨力創作的歌：一首安靜、如潮汐起伏的抒情歌，最初是一首詩。',
    },
    story: {
      en: 'Swift has said "This Love" started as a poem she wrote, and that she later realised it could be a song. She produced it with [[Nathan Chapman]], the producer of her early country albums, the only time he appears on 1989. The production is spacious and echoing, as if recorded by the sea.\n\nThe central image is the tide: love that goes out and comes back, and the patience required to wait for its return.',
      zh: 'Swift 說〈This Love〉最初是她寫的一首詩，後來她察覺它可以成為一首歌。她與早期鄉村專輯的監製 [[Nathan Chapman]] 一同監製，這是 Chapman 在《1989》中唯一一次參與。編曲空曠而帶回聲，彷彿在海邊錄音。\n\n核心意象是潮汐：愛情退去，又再回來，以及等待它回來所需要的耐性。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes a love that was cut short and let go, like something set adrift.', zh: '她描述一段被迫中斷、只好放手的愛，像一件被放逐漂流的東西。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The tide metaphor: this love is good, this love is bad, it returns from the dead. It recedes and then comes back, unpredictable as the ocean.', zh: '潮汐的比喻：這份愛時好時壞，又會死而復生。它退去，然後回來，像海洋一樣難以預料。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She waits on the shore, letting the love come back in its own time rather than chasing it.', zh: '她在岸邊等待，讓愛按自己的時間回來，而不是去追逐它。' } },
    ],
    echoes: [
      { ref: 'folklore/peace', note: { en: 'Years later, another quiet song that frames a lasting love in terms of patience and acceptance.', zh: '多年後的另一首安靜歌曲，同樣以耐性和接納來描寫長久的愛。' } },
    ],
    trivia: [
      { en: 'Its Taylor’s Version was released early, on 6 May 2022, after being featured in the trailer for The Summer I Turned Pretty.', zh: '這首歌的 Taylor’s Version 在劇集 The Summer I Turned Pretty 預告片中使用後，於 2022 年 5 月 6 日提早推出。' },
    ],
  },
  {
    slug: 'i-know-places', title: 'I Know Places', track: 12, section: 'standard',
    writers: ['Taylor Swift', 'Ryan Tedder'],
    overview: {
      en: 'Two lovers as foxes hunted by the press, and a promise that she knows where they can hide.',
      zh: '一對戀人好比被傳媒追獵的狐狸，她承諾自己知道可以躲在哪裏。',
    },
    story: {
      en: 'Written with [[Ryan Tedder]], the song turns the experience of being followed by photographers into a dark chase. Swift has spoken about how, for someone as famous as her, a relationship can feel like something that has to be protected from the outside world, or it will be torn apart before it has a chance.\n\nThe production moves from hushed verses to pounding, almost menacing choruses, like a heartbeat speeding up during a chase.',
      zh: '這首歌與 [[Ryan Tedder]] 合寫，把被攝影師跟蹤的經歷寫成一場陰暗的追逐。Swift 談及，對於像她這樣有名的人來說，一段感情就像必須與外界隔絕保護的東西，否則在開始之前就會被撕碎。\n\n編曲由低聲的主歌轉到重擊、近乎帶威脅感的副歌，就像追逐中加速的心跳。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Something fragile has started between two people, and she can already feel the world watching and waiting to pounce.', zh: '兩人之間剛萌生出脆弱的東西，她已感覺到全世界在監視，等待撲上來。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The hunters and the foxes: the press chases, the lovers run. Her promise is practical rather than romantic: she knows places where no one will find them.', zh: '獵人與狐狸：傳媒追趕，戀人逃跑。她的承諾務實而不浪漫：她知道有些地方沒有人會找到他們。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Even under pressure, she insists that the two of them are stronger together than the forces trying to break them.', zh: '即使承受壓力，她仍堅持兩人在一起，比那些想拆散他們的力量更強大。' } },
    ],
    echoes: [
      { ref: 'reputation/call-it-what-you-want', note: { en: 'Three years later, the hidden relationship becomes a sanctuary rather than a chase.', zh: '三年後，這段被隱藏的感情不再是一場追逐，而是一處避風港。' } },
      { ref: 'reputation/delicate', note: { en: 'The fear of a new love being exposed too early returns in the reputation era.', zh: '害怕新戀情過早曝光的恐懼，在 reputation 時期再度出現。' } },
    ],
  },
  {
    slug: 'clean', title: 'Clean', track: 13, section: 'standard',
    writers: ['Taylor Swift', 'Imogen Heap'], producers: ['Taylor Swift', 'Imogen Heap'],
    overview: {
      en: 'The closing track: getting over someone described like recovering from an addiction, and the quiet morning when you realise you are free.',
      zh: '壓軸歌：把放下一個人比作戒除癮癖，以及察覺自己終於自由的那個寧靜早晨。',
    },
    context: {
      en: 'After an album full of chases, fights and fragile romances, Swift wanted to end on recovery. She recorded the song in London with [[Imogen Heap]], whose layered, experimental sound she had long admired.',
      zh: '在一整張充滿追逐、爭吵和脆弱戀情的專輯之後，Swift 希望以復原作結。她在倫敦與 [[Imogen Heap]] 一同錄製這首歌；她一直欣賞 Heap 多層次而具實驗性的聲音。',
    },
    story: {
      en: 'Swift has described the song as being about the moment you realise you no longer miss someone. She wrote it as an extended metaphor of sobriety: the relationship was like a drug, the breakup was withdrawal, and the end of the song is the first day clean.\n\nHeap co-produced it and played several of the instruments, and the song ends with her voice blended into Swift’s, a soft, airy finish to a loud album.',
      zh: 'Swift 形容這首歌寫的是你察覺自己不再思念某人的那一刻。她把它寫成一個延伸的戒癮比喻：那段感情像毒品，分手是戒斷期，歌曲結尾則是戒掉後的第一天。\n\nHeap 參與監製，並親自演奏部分樂器。歌曲最後，她的聲音與 Swift 的聲音融為一體，為一張響亮的專輯帶來柔和、輕盈的結尾。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The relationship is pictured as a drought followed by a flood: everything dried up and then washed away. She describes the stains he left, like wine on a dress.', zh: '這段感情被描繪成先旱後澇：一切先乾涸，然後被沖走。她描述他留下的污跡，就像裙子上的酒漬。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The rain comes and, at last, she is clean. The water that once nearly drowned her now washes her free.', zh: '雨來了，她終於乾淨了。曾經幾乎淹沒她的水，如今把她洗淨，令她自由。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The addiction metaphor deepens: she admits she would have kept going back, and that quitting him was a daily effort.', zh: '戒癮比喻更深入：她承認自己本來會不斷回頭，戒掉他是每天的努力。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She says that when you are under water you do not notice you are drowning; only after you surface do you see it. Then the song lets go entirely.', zh: '她說，當你身處水底，你不會察覺自己正在溺水；只有浮出水面後才看得見。然後全曲徹底放手。' } },
    ],
    echoes: [
      { ref: '1989/welcome-to-new-york', note: { en: 'The opposite end of the album: arrival and adrenaline at the start, stillness and recovery at the end.', zh: '專輯的另一端：開場是抵達與興奮，結尾是靜止與復原。' } },
      { ref: 'evermore/evermore', note: { en: 'Six years later, another closing track about surviving a long dark stretch and finally believing the pain will not last forever.', zh: '六年後，另一首壓軸歌，同樣寫熬過漫長黑暗，終於相信痛苦不會永遠持續。' } },
    ],
    trivia: [
      { en: 'Imogen Heap won a Grammy as a producer when 1989 was named Album of the Year.', zh: '《1989》奪得年度專輯時，Imogen Heap 亦以監製身份獲得格林美獎。' },
    ],
  },
  {
    slug: 'wonderland', title: 'Wonderland', track: 14, section: 'deluxe',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    overview: {
      en: 'A whirlwind romance retold through Alice in Wonderland: falling down the rabbit hole, losing your bearings, and climbing back out changed.',
      zh: '借《愛麗絲夢遊仙境》重述一段旋風式戀愛：掉進兔子洞、迷失方向，最後脫胎換骨地爬出來。',
    },
    story: {
      en: 'A deluxe-edition track built from storybook imagery: the rabbit hole, a grinning cat, a fall into a strange world where nothing works as expected. Swift uses the fairy tale to describe how quickly a relationship can become disorienting.\n\nThe chorus is one of the album’s most dramatic, with booming drums and a chant-like refrain, and the ending suggests both people went a little mad.',
      zh: '這首 deluxe 版歌曲以童話意象構成：兔子洞、咧嘴而笑的貓、墮入一個萬事都不如所料的奇異世界。Swift 借這個童話，描寫一段感情如何轉眼間令人迷失。\n\n副歌是全碟最具戲劇性的之一，配上轟鳴的鼓聲和口號式的疊句；結尾暗示兩人都變得有點瘋狂。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She meets someone with intriguing green eyes and follows him, like Alice following the rabbit, without thinking where it leads.', zh: '她遇上一個有着迷人綠眼睛的人，像愛麗絲追隨兔子一樣跟着他，完全沒有想過會走向何方。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'They fell into a wonderland, lost their minds and could not get back. The fairy tale has become a trap.', zh: '他們掉進仙境，失去理智，再也回不去。童話變成了陷阱。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She realises others had warned her. In the end, both of them were changed by the experience, and not entirely for the better.', zh: '她察覺其實早有人警告過她。最終兩人都被這段經歷改變了，而且不全是好的改變。' } },
    ],
  },
];
