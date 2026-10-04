import type { Song } from '../types';

// evermore（2020）：第 1–9 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const AD = ['Taylor Swift', 'Aaron Dessner'];

export const part1: Song[] = [
  {
    slug: 'willow', title: 'willow', track: 1, section: 'standard',
    writers: AD, producers: ['Aaron Dessner', 'Jack Antonoff'],
    single: { en: 'Lead single, 11 December 2020 · debuted at No. 1 on the Hot 100', zh: '首支單曲，2020 年 12 月 11 日．空降 Hot 100 冠軍' },
    overview: {
      en: 'A spellbinding, witchy love song about wanting someone completely: the opening of folklore’s sister album.',
      zh: '一首如施咒般迷人、帶巫術氣息的情歌，寫全心全意渴望一個人：《folklore》姊妹專輯的開場曲。',
    },
    context: {
      en: 'Only months after folklore, Swift released evermore on 11 December 2020, announcing it the day before. She explained that she and her collaborators simply could not stop writing, and that the stories felt like they were still unfolding.',
      zh: '《folklore》推出僅數月後，Swift 於 2020 年 12 月 11 日推出《evermore》，只提前一天宣佈。她解釋，她與合作者根本停不下來，那些故事彷彿仍在展開。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "willow" has a hypnotic, looping melody and imagery of spells, rituals and the natural world. Swift has described it as being about wanting someone and the intrigue of trying to win them.\n\nIt debuted at number one, and its video continued the story begun in the "cardigan" video.',
      zh: '〈willow〉與 [[Aaron Dessner]] 合寫，有一段催眠般不斷循環的旋律，以及咒語、儀式和大自然的意象。Swift 形容它寫的是渴望某人，以及努力贏得對方的那份引人入勝。\n\n這首歌空降冠軍，其 MV 延續了〈cardigan〉MV 開始的故事。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She compares herself to a willow bending in the wind: she is swayed completely by this person.', zh: '她把自己比作在風中彎曲的柳樹：她完全被這個人左右。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She invites him to come along and be hers, as if casting a spell to bring him to her.', zh: '她邀請他過來、成為她的人，彷彿施咒把他召喚到身邊。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She describes waiting and wanting, and the pleasure of the chase itself.', zh: '她描述等待和渴望，以及追逐本身的樂趣。' } },
    ],
    mv: {
      id: 'RsEZmictANA', director: 'Taylor Swift', date: '2020-12-11',
      scenes: [
        { scene: { en: 'Back in the cabin', zh: '回到小屋' }, meaning: { en: 'The video opens where "cardigan" ended, with Swift in the cabin. A golden thread appears, and she follows it.', zh: 'MV 由〈cardigan〉結束的地方開始：Swift 在小屋中。一條金線出現，她跟隨着它。' } },
        { scene: { en: 'Through time', zh: '穿越時光' }, meaning: { en: 'The thread leads her through scenes of the past, including a childhood memory with a young boy, suggesting a love that was always meant to be.', zh: '金線帶她穿越過去的場景，包括一段與小男孩的童年回憶，暗示一份早已注定的愛。' } },
        { scene: { en: 'The winter ritual', zh: '冬日儀式' }, meaning: { en: 'In a snowy forest at night, a circle of people performs a glowing ritual, the witchy imagery of the lyric made visible.', zh: '在夜裏的雪林中，一群人圍成一圈進行發光的儀式，把歌詞中的巫術意象化為畫面。' } },
        { scene: { en: 'Home', zh: '歸家' }, meaning: { en: 'She returns through the piano to the cabin and finds the person she was searching for. The thread was the invisible string.', zh: '她經由鋼琴回到小屋，找到她一直尋找的人。那條金線，正是那條「隱形的線」。' } },
      ],
    },
    echoes: [
      { ref: 'folklore/cardigan', note: { en: 'The video picks up exactly where cardigan’s ended.', zh: 'MV 正好由〈cardigan〉MV 結束的地方開始。' } },
      { ref: 'folklore/invisible-string', note: { en: 'The golden thread of the video brings the idea of folklore’s song to life.', zh: 'MV 中的金線，把《folklore》那首歌的想法化為影像。' } },
    ],
  },
  {
    slug: 'champagne-problems', title: 'champagne problems', track: 2, section: 'standard',
    writers: ['Taylor Swift', 'William Bowery'], producers: ['Aaron Dessner'],
    overview: {
      en: 'A piano ballad about a woman who turns down a marriage proposal at a holiday party, told with devastating tenderness.',
      zh: '一首鋼琴抒情歌，寫一位女子在節日派對上拒絕求婚，筆觸溫柔得令人心碎。',
    },
    story: {
      en: 'Written with William Bowery ([[Joe Alwyn]]), "champagne problems" follows two college sweethearts. He plans a proposal; she says no. The song is told from her side, years later, as she tries to explain that it was not his fault, and that she was struggling with her own mind.\n\nThe piano melody was largely written by Bowery. It became a fan favourite, and on the Eras Tour, audiences would cheer through the bridge in a tradition that moved Swift visibly.',
      zh: '〈champagne problems〉與 William Bowery（[[Joe Alwyn]]）合寫，講述一對大學情侶。他計劃求婚，她卻拒絕了。歌曲以她的角度在多年後講述，她努力解釋那不是他的錯，而是她當時正與自己的心理狀態搏鬥。\n\n鋼琴旋律大部分由 Bowery 寫成。這首歌深受歌迷喜愛；在 Eras Tour 上，觀眾會在橋段後長時間歡呼，形成一個令 Swift 明顯動容的傳統。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He travels home on a train with a ring in his pocket, full of hope.', zh: '他乘火車回家，口袋裏放着戒指，滿懷希望。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She calls her reasons small, privileged problems, but they were real to her, and she could not say yes.', zh: '她把自己的理由說成微不足道、優越的煩惱，但這些對她來說是真實的，她無法答應。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The party falls apart, the family is shocked, and the celebration turns into gossip.', zh: '派對亂作一團，家人震驚，慶祝變成了閒言閒語。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines the town saying she was unstable, and hopes he finds someone who can give him what she could not.', zh: '她想像小鎮說她精神不穩，並盼望他能找到一個能給他她給不了的東西的人。' } },
    ],
    echoes: [
      { ref: 'speak-now/speak-now', note: { en: 'A ruined wedding plan, once comic, now heartbreaking.', zh: '一場被破壞的婚禮計劃：從前是喜劇，如今令人心碎。' } },
      { ref: 'folklore/this-is-me-trying', note: { en: 'Another character who struggles with her own mind and tries to explain herself.', zh: '另一個與自己心理狀態搏鬥、努力解釋自己的角色。' } },
    ],
  },
  {
    slug: 'gold-rush', title: 'gold rush', track: 3, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'A dreamy daydream about loving someone everyone wants, and deciding it is not worth the jealousy.',
      zh: '一場夢幻的白日夢：愛上一個人人都想要的人，然後決定這份妒忌不值得。',
    },
    story: {
      en: 'The only song on evermore produced with [[Jack Antonoff]], "gold rush" begins and ends with a hazy, choral hum, framing the song as a daydream. In between, the narrator imagines a full romance with someone who is universally admired, then talks herself out of it because she does not want to compete.\n\nThe tempo shifts and the imagery moves from a fantasy of domestic life back to reality.',
      zh: '〈gold rush〉是《evermore》中唯一一首與 [[Jack Antonoff]] 合作製作的歌，以朦朧的合唱哼聲開始和結束，把整首歌框成一場白日夢。中間，敘述者想像與一個人見人愛的對象展開一段完整的戀情，然後又說服自己放棄，因為她不想參與競爭。\n\n節奏轉換，意象由居家生活的幻想，回到現實。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She notices that everyone is drawn to this person, and dislikes how ordinary that makes her feelings.', zh: '她察覺人人都被這個人吸引，並不喜歡這令自己的感情顯得如此平凡。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Loving someone like this would be like joining a gold rush: everyone scrambling for the same prize.', zh: '愛上這樣的人，就像加入一場淘金熱：所有人都在爭奪同一份獎賞。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines a whole life together in a few vivid images, then snaps out of it.', zh: '她以幾個鮮明的畫面想像兩人共度的一生，然後猛然回到現實。' } },
    ],
    echoes: [
      { ref: 'reputation/gorgeous', note: { en: 'Being annoyed by someone’s attractiveness, played for laughs on reputation.', zh: '被某人的魅力弄得心煩，在《reputation》中以喜劇方式呈現。' } },
    ],
  },
  {
    slug: 'tis-the-damn-season', title: "'tis the damn season", track: 4, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A woman who left her small town for Hollywood comes home for the holidays and falls back into an old romance for a few days.',
      zh: '一位離開小鎮到荷里活闖蕩的女子回鄉過節，在短短幾天內重拾一段舊情。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], the song is narrated by a woman Swift has identified as Dorothea, the same character described from the outside in "dorothea". She has left her hometown for a life in Los Angeles, and over the holidays she reconnects with an old love, knowing she will leave again.\n\nThe song captures the bittersweet feeling of going home and seeing the life you might have had.',
      zh: '這首歌與 [[Aaron Dessner]] 合寫。Swift 表示敘述者是 Dorothea，也就是〈dorothea〉中從外人角度描寫的那個角色。她離開家鄉到洛杉磯生活，在節日期間與舊愛重聚，明知自己會再次離開。\n\n這首歌捕捉了回家時那種甜中帶苦的感覺：看見自己本可以擁有的人生。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She drives on muddy roads in her hometown and parks near an old flame’s house.', zh: '她在家鄉泥濘的路上駕車，把車停在舊情人家附近。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She suggests they spend the holidays together as if nothing has changed, knowing she will leave again.', zh: '她提議兩人一起過節，彷彿甚麼都沒有改變，雖然她知道自己會再次離開。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She contrasts her glamorous, lonely life in the city with the simple warmth of home.', zh: '她把自己在城市光鮮卻孤單的生活，與家鄉簡單的溫暖對比。' } },
    ],
    echoes: [
      { ref: 'evermore/dorothea', note: { en: 'The same woman, described by a friend who stayed behind.', zh: '同一個女人，由一位留在家鄉的朋友描述。' } },
      { ref: '1989/suburban-legends', note: { en: 'Hometown nostalgia and a love that might have been.', zh: '家鄉的懷舊，以及一段本可以發生的愛。' } },
    ],
  },
  {
    slug: 'tolerate-it', title: 'tolerate it', track: 5, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'The track five of evermore: a wife who gives everything and is merely tolerated, inspired by a classic novel.',
      zh: '《evermore》的第五首：一位付出一切卻只被容忍的妻子，靈感來自一部經典小說。',
    },
    story: {
      en: 'Swift has said "tolerate it" was inspired by reading Daphne du Maurier’s novel Rebecca, in which a young wife feels she can never measure up to her husband’s expectations. Written with [[Aaron Dessner]], the song’s piano is in an uneven, unsettled rhythm, as if never quite comfortable.\n\nThe narrator sets the table, waits, tries harder and harder, and is met with indifference.',
      zh: 'Swift 說〈tolerate it〉的靈感來自閱讀 Daphne du Maurier 的小說《蝴蝶夢》（Rebecca）：書中一位年輕妻子覺得自己永遠無法達到丈夫的期望。這首歌與 [[Aaron Dessner]] 合寫，鋼琴以不平均、不安穩的節奏推進，彷彿從未真正自在。\n\n敘述者佈置餐桌、等待、越來越努力，換來的卻只是冷漠。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She sits and watches him read, admiring him, while he barely notices her.', zh: '她坐着看他閱讀，滿懷欣賞，而他幾乎沒有留意她。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She gives her whole heart and he simply tolerates it. The word "tolerate" carries the whole tragedy.', zh: '她付出整顆心，他卻只是容忍。「容忍」一詞承載了整齣悲劇。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'Her frustration finally breaks through: she imagines leaving and asks why she should stay.', zh: '她的挫敗感終於爆發：她想像離開，並問自己為何還要留下。' } },
    ],
    echoes: [
      { ref: '1989/say-dont-go', note: { en: 'Being the only one trying, written years earlier.', zh: '多年前，同樣寫「只有自己在努力」。' } },
      { ref: 'folklore/my-tears-ricochet', note: { en: 'The previous album’s track five.', zh: '上一張專輯的第五首歌。' } },
    ],
  },
  {
    slug: 'no-body-no-crime', title: 'no body, no crime', track: 6, section: 'standard', feat: 'HAIM',
    writers: ['Taylor Swift'], producers: ['Aaron Dessner'],
    overview: {
      en: 'A country murder ballad with HAIM: a friend’s suspicious disappearance, a cheating husband, and a perfect revenge.',
      zh: '一首與 HAIM 合作的鄉村謀殺歌謠：朋友可疑的失蹤、出軌的丈夫，以及完美的復仇。',
    },
    story: {
      en: 'Swift wrote "no body, no crime" alone, inspired by her love of true-crime stories, and recorded it with the sisters of [[HAIM]]. One of the characters is named Este, after [[Este Haim]].\n\nIt follows the conventions of a classic country murder ballad: a wronged woman, a guilty man, and a twist in which justice is served outside the law.',
      zh: 'Swift 獨力寫下〈no body, no crime〉，靈感來自她對真實罪案故事的熱愛，並與 [[HAIM]] 三姊妹一同錄製。其中一個角色名叫 Este，取自 [[Este Haim]] 的名字。\n\n它遵循經典鄉村謀殺歌謠的慣例：一位受害的女子、一個有罪的男人，以及一個在法律之外伸張正義的轉折。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Este suspects her husband is cheating and tells the narrator over dinner.', zh: 'Este 懷疑丈夫出軌，並在晚餐時告訴敘述者。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The refrain of the title: without evidence, nothing can be proven.', zh: '歌名的疊句：沒有證據，就甚麼都證明不了。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'Este disappears, and the narrator is sure the husband is responsible.', zh: 'Este 失蹤了，敘述者確信是丈夫所為。' } },
      { part: { en: 'Verse 3', zh: '第三段主歌' }, meaning: { en: 'The twist: the narrator takes revenge herself, and covers her tracks so well that the refrain now protects her.', zh: '轉折：敘述者親自報仇，並把痕跡掩飾得天衣無縫，以致那句疊句如今反而保護了她。' } },
    ],
    echoes: [
      { ref: 'reputation/getaway-car', note: { en: 'A crime story told as a song, with a sharper twist.', zh: '以歌曲講述的犯罪故事，轉折更尖銳。' } },
    ],
  },
  {
    slug: 'happiness', title: 'happiness', track: 7, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A long, graceful reflection on the end of a relationship, and the belief that there will be happiness after it.',
      zh: '一首悠長而優雅的沉思，寫一段感情的結束，以及相信在那之後仍會有快樂。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "happiness" was one of the last songs finished for evermore. The narrator does not deny the pain of the ending, nor does she rewrite the good years as bad. She holds both: it was real, it is over, and happiness is still possible.\n\nIt is one of Swift’s most emotionally mature songs about a breakup.',
      zh: '〈happiness〉與 [[Aaron Dessner]] 合寫，是《evermore》最後完成的歌之一。敘述者不否認結束的痛，也不把美好的歲月改寫成壞日子。她同時承載兩者：它是真實的，它已經結束，而快樂仍然可能。\n\n這是 Swift 在情感上最成熟的分手歌之一。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the good times and refuses to pretend they were not good.', zh: '她回想美好的時光，拒絕假裝那些日子不美好。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'There will be happiness after this, and there was happiness before it too.', zh: '在這之後會有快樂，在這之前也曾經有過快樂。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She asks whether she was the one who made it end, and forgives both of them.', zh: '她問結束是否由自己造成，並同時原諒了兩人。' } },
    ],
    echoes: [
      { ref: 'fearless/we-were-happy', note: { en: 'A teenage version of the same feeling, written years earlier.', zh: '多年前寫下、同一種感覺的少年版本。' } },
      { ref: 'red/holy-ground', note: { en: 'Looking back on love with gratitude rather than bitterness.', zh: '以感激而非苦澀回望愛情。' } },
    ],
  },
  {
    slug: 'dorothea', title: 'dorothea', track: 8, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A letter from someone who stayed in their small town to a childhood friend who left and became famous.',
      zh: '一封信，由一位留在小鎮的人，寫給離鄉成名的童年好友。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "dorothea" is sung from the point of view of a friend from Dorothea’s hometown. Dorothea has become a star in Hollywood, and the narrator wonders whether she still remembers the people she left behind.\n\nIt pairs with "’tis the damn season", which is told by Dorothea herself, and shows Swift building a small world of connected characters.',
      zh: '〈dorothea〉與 [[Aaron Dessner]] 合寫，以 Dorothea 家鄉一位朋友的角度唱出。Dorothea 已在荷里活成為明星，敘述者想知道她是否仍記得那些被她留在身後的人。\n\n它與由 Dorothea 本人講述的〈’tis the damn season〉成對，顯示 Swift 正在建構一個由相連角色組成的小世界。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The narrator remembers Dorothea as a dreamer who always wanted more than the town could offer.', zh: '敘述者記得 Dorothea 是個愛做夢的人，總想要小鎮給不了的更多東西。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'If she ever comes home, the narrator will be there, unchanged, as if no time has passed.', zh: '如果她有天回家，敘述者會在那裏，一切如舊，彷彿時間不曾流逝。' } },
    ],
    echoes: [
      { ref: 'evermore/tis-the-damn-season', note: { en: 'Dorothea’s own side of the story.', zh: 'Dorothea 自己的那一面故事。' } },
      { ref: 'speak-now/long-live', note: { en: 'Leaving home for fame, seen from the opposite side.', zh: '離鄉追求名氣，從相反的一方去看。' } },
    ],
  },
  {
    slug: 'coney-island', title: 'coney island', track: 9, section: 'standard', feat: 'The National',
    writers: ['Taylor Swift', 'Aaron Dessner', 'Bryce Dessner', 'William Bowery'], producers: ['Aaron Dessner', 'Bryce Dessner'],
    overview: {
      en: 'A duet with The National’s Matt Berninger: a couple looking back on what went wrong, on a cold bench at an empty amusement park.',
      zh: '一首與 The National 主音 Matt Berninger 合唱的對唱：一對伴侶坐在空蕩遊樂場的冰冷長椅上，回望出錯的地方。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], [[Bryce Dessner]] and William Bowery, and sung with [[Matt Berninger]] of The National, the band whose members helped make folklore and evermore. Coney Island, the old seaside amusement park in New York, becomes the setting for regret.\n\nThe two voices take turns blaming themselves rather than each other, which makes the song gentle and sad.',
      zh: '這首歌與 [[Aaron Dessner]]、[[Bryce Dessner]] 及 William Bowery 合寫，並與 The National 的 [[Matt Berninger]] 合唱；這支樂隊的成員參與了《folklore》和《evermore》的製作。紐約的老海濱遊樂場 Coney Island，成為懊悔的背景。\n\n兩把聲音輪流責怪自己而不是對方，令這首歌溫柔而哀傷。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Sitting on a bench at Coney Island, she wonders when exactly she lost him.', zh: '坐在 Coney Island 的長椅上，她想知道自己究竟何時失去了他。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks whether she was too busy, too absent, too caught up in her own life to notice.', zh: '她問自己是否太忙、太常缺席、太專注於自己的生活而沒有察覺。' } },
      { part: { en: 'His verse', zh: '他的段落' }, meaning: { en: 'He admits his own failures, and both realise they missed the moment to fix things.', zh: '他承認自己的過失，兩人都明白，他們錯過了補救的時機。' } },
    ],
    echoes: [
      { ref: 'folklore/exile', note: { en: 'Another duet about two people who could not reach each other in time.', zh: '另一首寫兩人未能及時觸及對方的對唱。' } },
    ],
  },
];
