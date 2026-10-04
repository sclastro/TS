import type { Song } from '../types';

// 1989 (Taylor's Version)：第 15–21 首（Deluxe 及 From the Vault）
export const part3: Song[] = [
  {
    slug: 'you-are-in-love', title: 'You Are in Love', track: 15, section: 'deluxe',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'The gentlest song of the era: a list of small, ordinary moments that add up to the realisation of being in love.',
      zh: '這個時期最溫柔的歌：一連串細碎、平凡的片段，累積成「原來已經愛上」的領悟。',
    },
    context: {
      en: 'At the time Swift had stepped back from dating and was spending her time with friends. She has said she wrote this song as an observer, about love she saw in other people’s relationships rather than her own.',
      zh: '當時 Swift 暫停約會，把時間留給朋友。她說這首歌是以旁觀者身份寫的，寫的是她在別人感情中看到的愛，而不是自己的經歷。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], the song is almost spoken over a softly pulsing track. [[Lena Dunham]], Antonoff’s partner at the time, said the song drew on their story.\n\nIts power is in the details: no grand gestures, just coffee, a borrowed shirt, a quiet conversation. Love is something you recognise afterwards in the small things.',
      zh: '這首歌與 [[Jack Antonoff]] 合寫，在柔和脈動的伴奏上近乎低聲說話。Antonoff 當時的伴侶 [[Lena Dunham]] 曾表示，這首歌取材自他們的故事。\n\n它的力量在於細節：沒有轟烈的舉動，只有咖啡、借來的襯衫、一段安靜的對話。愛，是事後才在小事中辨認出來的東西。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Small scenes from early in a relationship: one morning, one simple gesture, nothing dramatic. She notices them as if through a camera.', zh: '一段感情初期的細小場景：一個早晨、一個簡單的動作，沒有任何戲劇性。她像透過鏡頭一樣留意着這些片段。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The realisation arrives quietly: you can hear it in the silence, feel it in the small moments, and suddenly you understand you are in love.', zh: '領悟悄然來臨：你在沉默中聽得見，在細小時刻中感受得到，然後突然明白自己已經愛上了。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She reflects that she once thought love like this existed only in stories, and now she has seen it is real.', zh: '她回想自己曾以為這樣的愛只存在於故事中，如今卻親眼看見它是真實的。' } },
    ],
    echoes: [
      { ref: 'lover/lover', note: { en: 'Five years later she writes this kind of quiet domestic love from the inside, as her own story.', zh: '五年後，她從內在寫出這種安靜的居家之愛，這次是她自己的故事。' } },
    ],
  },
  {
    slug: 'new-romantics', title: 'New Romantics', track: 16, section: 'deluxe',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Seventh and final single of the era, 2016', zh: '這個時期第七支、也是最後一支單曲，2016 年' },
    overview: {
      en: 'An anthem for a generation that turns heartbreak into a party: young, reckless, and determined to have fun regardless.',
      zh: '一首屬於這一代人的頌歌：把心碎變成派對，年輕、魯莽，無論如何都要盡興。',
    },
    story: {
      en: 'Swift has called this one of her favourite songs from the era, and many fans considered it the best song left off the standard edition. Its title nods to the eighties New Romantic movement in British pop, matching the album’s retro synth sound.\n\nThe lyric presents her generation as resilient and a little cynical: they get hurt, they shake it off, and they go out dancing anyway.',
      zh: 'Swift 形容這是她在這個時期最喜歡的歌之一，不少歌迷亦認為它是標準版遺漏的最佳歌曲。歌名呼應八十年代英國流行樂的 New Romantic 潮流，與專輯復古的合成器聲相配。\n\n歌詞把她這一代人描繪成堅韌而略帶憤世：他們受傷、一笑置之，然後照樣出去跳舞。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes her friends as people who have been hurt and keep going out anyway, finding their own kind of freedom in the city at night.', zh: '她把朋友們描繪成受過傷卻照樣出去玩的人，在城市的夜裏找到屬於自己的自由。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Heartbreak is something they all share and sing about proudly. Instead of hiding pain, they make it the soundtrack of the party.', zh: '心碎是他們共同的經歷，他們驕傲地把它唱出來。他們不隱藏痛苦，而是把它變成派對的配樂。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She describes turning the attacks aimed at her into building material, making criticism into something to stand on.', zh: '她描述把別人向她發動的攻擊變成建築材料，把批評化為自己的立足點。' } },
    ],
    mv: {
      id: 'wyK7YuwUWsU', director: 'Jonas Åkerlund', date: '2016-04-13',
      note: { en: 'Official video assembled from performance and behind-the-scenes footage of The 1989 World Tour; released first on Apple Music.', zh: '官方 MV，以 The 1989 World Tour 的演出及幕後片段剪輯而成；先在 Apple Music 推出。' },
      scenes: [
        { scene: { en: 'The stage', zh: '舞台' }, meaning: { en: 'Huge crowds, light-up wristbands, the runway stage that rose above the audience: the video is a love letter to the tour itself.', zh: '龐大的人群、發光手環、升起在觀眾頭上的天橋舞台：這支 MV 是寫給巡演本身的情書。' } },
        { scene: { en: 'Backstage', zh: '後台' }, meaning: { en: 'Quick costume changes and moments with the band and dancers show the work behind the spectacle.', zh: '急速換裝，以及與樂隊和舞者相處的片段，展示了華麗背後的辛勞。' } },
      ],
    },
    echoes: [
      { ref: '1989/shake-it-off', note: { en: 'The same defiant spirit, sung as a group rather than alone.', zh: '同樣倔強的精神，這次不是獨自唱，而是一群人一起唱。' } },
    ],
  },
  {
    slug: 'slut', title: '"Slut!"', track: 17, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'A dreamy, tender love song with a deliberately provocative title: choosing to love someone even knowing the cruel labels the world will throw.',
      zh: '一首夢幻而溫柔的情歌，卻配上一個刻意挑釁的歌名：即使知道世界會扔來殘酷的標籤，仍然選擇去愛。',
    },
    context: {
      en: 'In the prologue to 1989 (Taylor’s Version), Swift wrote that during this period she felt the media’s judgement of her love life had become relentless, and that she reacted by stepping back from dating altogether and spending her time with female friends, only to have those friendships sexualised by the press as well.',
      zh: '在《1989 (Taylor’s Version)》的序言中，Swift 寫到在那段時期，她覺得傳媒對她感情生活的批判已到了無休止的地步。她的反應是完全停止約會，把時間留給女性好友，豈料這些友誼同樣被傳媒加上性的意味。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]] during the original 1989 sessions, the song sat in the vault for nine years. When its title was revealed in 2023, many fans expected an angry song. Instead it is one of the softest songs of the era, a summer romance sung almost in a whisper.\n\nThe contrast is the point: she takes the insult that hung over her at the time and sets it beside a love she decided was worth the price.',
      zh: '這首歌在《1989》原版錄音期間與 [[Jack Antonoff]] 合寫，在寶庫中塵封了九年。2023 年歌名公佈時，不少歌迷以為會是一首憤怒的歌，結果它卻是這個時期最柔和的歌之一，一段近乎耳語般唱出的夏日戀曲。\n\n反差正是重點：她把當時籠罩着她的侮辱，放在一段她認為值得付出代價的愛情旁邊。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A hazy, romantic night: flowers, warmth, the feeling of being drunk on someone. The imagery is soft and sensory.', zh: '一個朦朧浪漫的夜晚：花朵、溫暖，以及為某人陶醉的感覺。意象柔和而充滿感官。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She knows that being seen with him will get her called the insult in the title, and decides that if that is the price, she will pay it.', zh: '她知道與他一起被看見，會被冠上歌名中的那個侮辱字眼；她決定，如果這就是代價，她願意付。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She acknowledges the shame people try to attach to her, and quietly refuses to feel it.', zh: '她承認別人試圖把羞恥加諸她身上，然後靜靜地拒絕接受。' } },
    ],
    echoes: [
      { ref: 'the-tortured-poets-department/but-daddy-i-love-him', note: { en: 'Nine years on, another defiant love song against public judgement, this time loud and theatrical.', zh: '九年後，另一首對抗公眾批判的倔強情歌，這次響亮而富戲劇性。' } },
      { ref: 'lover/the-man', note: { en: 'The double standard behind the title is spelled out directly in Lover.', zh: '歌名背後的雙重標準，在《Lover》中被直接點破。' } },
    ],
  },
  {
    slug: 'say-dont-go', title: "Say Don't Go", track: 18, section: 'vault',
    writers: ['Taylor Swift', 'Diane Warren'],
    overview: {
      en: 'A soaring plea to a partner to show, just once, that he wants her to stay.',
      zh: '一首激昂的懇求：希望伴侶哪怕只有一次，表示想她留下。',
    },
    story: {
      en: 'This vault track is Swift’s first released collaboration with [[Diane Warren]], one of the most celebrated writers of power ballads in pop history. The song was written during the original 1989 sessions. When it finally came out in 2023, Warren said she was thrilled that it had at last been heard.\n\nWarren’s influence is clear in the huge, climbing chorus, which is closer to a classic ballad than anything else on the album.',
      zh: '這首 vault 歌曲是 Swift 與 [[Diane Warren]] 首次公開發表的合作；Warren 是流行樂史上最負盛名的抒情大歌作曲人之一。歌曲寫於《1989》原版錄音時期。2023 年終於推出時，Warren 表示很高興這首歌終於能被聽見。\n\nWarren 的影響在宏大、不斷攀升的副歌中清晰可見，比專輯中其他歌曲更接近經典抒情歌。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She is in a relationship where she always seems to be the one holding on, waiting for signs he cares.', zh: '在這段感情中，她似乎總是緊抓不放的那一個，等待他表示在乎的跡象。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The plea of the title: why will you not say don’t go? A few words would change everything, and he will not say them.', zh: '歌名的懇求：為甚麼你不肯說「別走」？只要幾個字就能改變一切，他偏偏不說。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She realises his silence is itself an answer, and begins to prepare to leave.', zh: '她察覺他的沉默本身就是答案，開始準備離開。' } },
    ],
    echoes: [
      { ref: 'evermore/tolerate-it', note: { en: 'Six years later, the same feeling of being the only one trying, written with devastating restraint.', zh: '六年後，同樣是「只有自己在努力」的感覺，以令人心碎的克制寫成。' } },
    ],
  },
  {
    slug: 'now-that-we-dont-talk', title: "Now That We Don't Talk", track: 19, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'One of her shortest songs: the strange relief after a breakup, alongside the ache of silence.',
      zh: '她最短的歌之一：分手後那種奇怪的釋然，以及沉默帶來的痛。',
    },
    story: {
      en: 'At under two and a half minutes, this vault track with [[Jack Antonoff]] moves quickly, as if trying not to dwell. Swift has described the vault songs as pieces that did not fit the album she wanted to make in 2014, but that she was proud of and glad to share.\n\nThe song balances two feelings: grief at losing someone, and a dry, funny relief at no longer having to pretend to be someone else for his sake.',
      zh: '這首與 [[Jack Antonoff]] 合寫的 vault 歌曲不足兩分半鐘，節奏輕快，彷彿不願久留在情緒之中。Swift 形容這些 vault 歌曲當年未能融入她在 2014 年想做的專輯，但她以它們為傲，也很高興終於可以分享。\n\n這首歌平衡着兩種感受：失去一個人的哀傷，以及不必再為他假裝成另一個人的那份冷面幽默式釋然。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She sees glimpses of his new life from a distance and has to accept that she is no longer part of it.', zh: '她遠遠瞥見他的新生活，不得不接受自己已不再是其中一部分。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Now that they do not talk, she has to learn about his life the way strangers do, and to carry the sadness on her own.', zh: '既然不再聯絡，她只能像陌生人一樣得知他的近況，獨自消化那份難過。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'With wry humour she lists things she no longer has to pretend to enjoy for him. Losing him also meant getting herself back.', zh: '她帶着自嘲的幽默，數出那些不必再為他假裝喜歡的東西。失去他，也意味着找回自己。' } },
    ],
    echoes: [
      { ref: '1989/is-it-over-now', note: { en: 'Released side by side in 2023, the two vault tracks show two sides of the same ending: wistful and furious.', zh: '兩首 vault 歌曲在 2023 年同時面世，呈現同一個結局的兩面：一首惆悵，一首憤怒。' } },
    ],
  },
  {
    slug: 'suburban-legends', title: 'Suburban Legends', track: 20, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'Nostalgia for a love that felt destined to become a hometown legend, and the disappointment that it never did.',
      zh: '懷念一段本應成為家鄉傳奇的愛情，以及它終究未能成真的失落。',
    },
    story: {
      en: 'Another [[Jack Antonoff]] collaboration from the vault, built on shimmering synths. The song imagines how a relationship might have been remembered in the places both people grew up, as the kind of story told for years afterwards, and quietly mourns that version of events.\n\nIt shows a recurring Swift idea: that people and places hold a mythology of their own, and that losing someone also means losing the legend you thought you were writing together.',
      zh: '又一首與 [[Jack Antonoff]] 合寫的 vault 歌曲，以閃爍的合成器聲構成。歌曲想像這段感情在兩人成長的地方會如何被記住，成為多年後仍被傳頌的故事，並靜靜地悼念那個未能成真的版本。\n\n它體現了 Swift 反覆出現的一個觀念：人與地方都有屬於自己的神話；失去一個人，也意味着失去你以為兩人正在共同書寫的傳奇。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She pictures the two of them as the kind of couple people at home would talk about, envied and admired.', zh: '她想像兩人會成為家鄉人津津樂道的那種情侶，令人羨慕、讚嘆。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'They were meant to be a suburban legend, but they ended up as just another story that did not work out.', zh: '他們本應成為郊區傳奇，最後卻只是另一個沒有結果的故事。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits she kept hoping, even after it was clear the legend would never be written.', zh: '她承認即使已經清楚傳奇永遠不會寫成，自己仍然一直心存希望。' } },
    ],
    echoes: [
      { ref: 'evermore/tis-the-damn-season', note: { en: 'Hometown nostalgia and a love that might have been return in evermore.', zh: '家鄉的懷舊，以及一段本可以發生的愛，在《evermore》中再次出現。' } },
    ],
  },
  {
    slug: 'is-it-over-now', title: 'Is It Over Now?', track: 21, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Debuted at No. 1 on the Billboard Hot 100, November 2023', zh: '2023 年 11 月空降 Billboard Hot 100 冠軍' },
    overview: {
      en: 'The bitter sequel to "Out of the Woods": the same relationship, some of the same memories, revisited with nine years of hindsight and a lot more anger.',
      zh: '〈Out of the Woods〉的苦澀續篇：同一段感情、部分相同的回憶，以九年後的眼光重訪，而且憤怒得多。',
    },
    story: {
      en: 'Fans immediately recognised the imagery: snow, a crash, red against white, all echoing the accident described in "Out of the Woods". Where that song kept asking whether the danger had passed, this one asks a harsher question: whether the relationship is truly over, and why he keeps reappearing in her life.\n\nWritten with [[Jack Antonoff]], it became the most successful of the five vault tracks and debuted at number one, nine years after the album it was written for.',
      zh: '歌迷隨即認出其中的意象：白雪、撞擊、白中帶紅，全都呼應〈Out of the Woods〉中描述的意外。那首歌不斷追問危險過去了沒有，這首歌則問一個更尖銳的問題：這段感情是否真的結束了，為何他總是不斷重新出現在她的生活中。\n\n這首歌與 [[Jack Antonoff]] 合寫，是五首 vault 歌曲中成績最好的一首，在原本為之而寫的專輯推出九年後空降冠軍。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She accuses him of moving on to new girls very quickly after the breakup, each one, she suggests, a pale copy of her.', zh: '她指責他分手後很快便轉向新女伴，並暗示每一位都只是她的蒼白翻版。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The title question, asked with frustration: if it is really finished, why does he keep showing up, and why does she keep feeling it?', zh: '歌名的問題，帶着煩躁問出：如果真的結束了，為何他總是出現，為何她仍有感覺？' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'Images of the snowy crash and its aftermath return, now coloured by blame rather than tenderness.', zh: '雪地撞擊及其後果的畫面再次出現，這次不再帶着溫柔，而是帶着責怪。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The most furious section in the vault: she describes her own pain in vivid, almost violent terms and makes clear he caused it. The anger is the closure that "Out of the Woods" never had.', zh: '整批 vault 歌曲中最憤怒的段落：她以鮮明、近乎暴烈的字眼描述自己的痛苦，並清楚表明是他造成的。這份憤怒，正是〈Out of the Woods〉一直欠缺的了結。' } },
    ],
    echoes: [
      { ref: '1989/out-of-the-woods', note: { en: 'The original question. Listen to the two back to back: same accident, opposite emotions.', zh: '最初的那個問題。把兩首歌連着聽：同一場意外，相反的情緒。' } },
      { ref: '1989/style', note: { en: 'The glamorous version of the same era, before the bitterness set in.', zh: '同一段時期的光鮮版本，那時苦澀尚未浮現。' } },
    ],
  },
];
