import type { Song } from '../types';

// Speak Now (Taylor's Version)：第 9–16 首
const SN = ['Taylor Swift', 'Nathan Chapman'];

export const part2: Song[] = [
  {
    slug: 'enchanted', title: 'Enchanted', track: 9, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'Six minutes of wonder after meeting someone once at a party, and the fear that it will never happen again.',
      zh: '在一個派對上與某人只見過一面，之後六分鐘的驚嘆，以及害怕再也不會重遇的恐懼。',
    },
    context: {
      en: 'The song was widely linked to [[Adam Young]] of Owl City, with whom Swift had exchanged messages before meeting him in New York. He later released a cover of the song in response. Swift has said only that it is about meeting someone and being completely captivated.',
      zh: '這首歌普遍被認為與 Owl City 的 [[Adam Young]] 有關：兩人在紐約見面前曾互通訊息。他後來發表了這首歌的翻唱作為回應。Swift 只表示，這首歌寫的是遇見某人並被完全迷住的感覺。',
    },
    story: {
      en: 'Swift wrote "Enchanted" alone about the giddy feeling of a single meeting that sets your imagination racing. The song builds slowly, from a hush to a huge, layered finale, mirroring how a small moment can grow into an obsession in your mind.\n\nIt became one of her most beloved songs among fans, and the opening number of the Speak Now set on the Eras Tour, performed in an enormous ballgown.',
      zh: 'Swift 獨力寫下〈Enchanted〉，寫一次見面便令想像力奔馳的那份暈眩。歌曲慢慢鋪陳，由低語發展至宏大、層層疊起的終章，正如一個細小的片刻，可以在腦海中膨脹成執念。\n\n它成為歌迷最喜愛的歌之一，也是 Eras Tour 中 Speak Now 環節的開場曲，她穿着巨大的舞會禮服演唱。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She is bored at a crowded party, making fake small talk, until she sees him across the room.', zh: '在擠擁的派對上，她百無聊賴地應酬，直至在房間另一邊看見他。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Meeting him feels like magic, and she spends the whole night wishing it would not end.', zh: '遇見他像魔法一樣，她整晚都希望這一刻不要結束。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'On the drive home she replays every word, unable to sleep.', zh: '回家途中，她反覆回味每一句話，無法入睡。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She pleads to whoever is listening that he is not already in love with someone else. The hope and fear are equal.', zh: '她向任何在聽的人祈求：但願他還未愛上別人。希望與恐懼不相上下。' } },
    ],
    echoes: [
      { ref: 'midnights/question', note: { en: 'Another song about replaying a single moment over and over, years later.', zh: '多年後，另一首把某個片刻反覆重播的歌。' } },
      { ref: 'fearless/fearless', note: { en: 'The dream of a perfect first meeting, written before and after it happened.', zh: '完美初遇的夢：一首寫於發生之前，一首寫於發生之後。' } },
    ],
  },
  {
    slug: 'better-than-revenge', title: 'Better than Revenge', track: 10, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'A punk-pop burst of fury at a girl who took her boyfriend, and a lyric she later chose to change.',
      zh: '一首龐克流行式的怒火，對象是搶走她男友的女孩；其中一句歌詞，她後來選擇修改。',
    },
    story: {
      en: 'Swift wrote this at eighteen, angry at a girl she felt had stolen her boyfriend. It is the most aggressive song on Speak Now, with pounding drums and a sneering vocal.\n\nIn later years Swift said she had learned that people cannot be stolen from someone. For Speak Now (Taylor’s Version) in 2023 she changed one line that had attacked the girl’s character, a revision that fans debated widely, and that shows how she looked back on her younger self.',
      zh: 'Swift 十八歲時寫下這首歌，憤怒地針對一個她認為搶走她男友的女孩。這是《Speak Now》最具攻擊性的歌，鼓聲重擊，唱腔帶着冷笑。\n\n多年後 Swift 表示，她明白到一個人不可能被誰「搶走」。2023 年推出《Speak Now (Taylor’s Version)》時，她修改了一句攻擊那個女孩品格的歌詞。這個改動引起歌迷熱烈討論，也顯示她如何回望年輕時的自己。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes the other girl as calculating and manipulative, and herself as caught off guard.', zh: '她把另一個女孩描述為工於心計、善於操縱，而自己則措手不及。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She claims that there is nothing she does better than revenge, a deliberately petty boast.', zh: '她聲稱自己最擅長的就是報復，這是刻意小氣的誇口。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'In the original version, she attacked the girl’s reputation. The Taylor’s Version line instead focuses on the girl’s behaviour, a subtle but meaningful change.', zh: '原版中，她攻擊那個女孩的名聲；Taylor’s Version 的版本則改為針對對方的行為。改動細微，意義卻很大。' } },
    ],
    echoes: [
      { ref: 'lover/the-man', note: { en: 'The grown-up Swift rethinks the double standards she once repeated.', zh: '成年後的 Swift 重新審視她曾經重複的雙重標準。' } },
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Revenge as spectacle, seven years later.', zh: '七年後，報復變成一場奇觀。' } },
    ],
  },
  {
    slug: 'innocent', title: 'Innocent', track: 11, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'A gentle song addressed to Kanye West a year after he interrupted her at the 2009 VMAs: compassion instead of anger.',
      zh: '一首溫柔的歌，寫給在 2009 年 VMA 打斷她的 Kanye West：以同理心代替憤怒。',
    },
    context: {
      en: 'In September 2009, [[Kanye West]] took the microphone from Swift while she was accepting an award at the MTV VMAs. A year later, at the 2010 VMAs, she performed "Innocent" in front of the same audience.',
      zh: '2009 年 9 月，[[Kanye West]] 在 MTV VMA 上搶去正在領獎的 Swift 的咪高峰。一年後，她在 2010 年 VMA 同一批觀眾面前演唱了〈Innocent〉。',
    },
    story: {
      en: 'Rather than an attack, Swift wrote a song of forgiveness. It speaks to someone who did something wrong and reminds him that a single bad moment does not define a whole person, and that he can still be good.\n\nSome critics found the tone condescending; others found it generous. Either way, it showed Swift choosing to answer a very public humiliation with grace, at least on the surface.',
      zh: 'Swift 沒有寫一首攻擊的歌，而是寫了一首寬恕的歌。它對一個犯了錯的人說話，提醒他一個糟糕的時刻不能定義整個人，他仍可以是好人。\n\n有評論認為語氣居高臨下，也有人認為它很寬厚。無論如何，它顯示 Swift 選擇以優雅回應一次極為公開的羞辱，至少在表面上是這樣。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She imagines him lying awake and regretting what he did.', zh: '她想像他失眠躺着，後悔自己所做的事。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She tells him he is still innocent at heart, that one mistake does not have to be the whole story.', zh: '她告訴他，他內心仍然純真，一次錯誤不必成為故事的全部。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She recalls simpler times, such as childhood, to suggest that everyone was once innocent and can find their way back.', zh: '她回想童年等較單純的時光，暗示每個人都曾經純真，也可以找回那份純真。' } },
    ],
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Seven years later, after a second public conflict, grace gives way to defiance.', zh: '七年後，經過第二次公開衝突，優雅讓位給反抗。' } },
    ],
  },
  {
    slug: 'haunted', title: 'Haunted', track: 12, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'The most dramatic song on Speak Now: a relationship slipping away, set to sweeping strings and a racing beat.',
      zh: '《Speak Now》中最具戲劇性的歌：一段正在溜走的感情，配上恢宏的弦樂與急促的節拍。',
    },
    story: {
      en: 'Swift wrote "Haunted" about the moment of realising that someone she cared about was drifting away. The orchestral arrangement makes it feel like a film score, with strings pounding like a heartbeat.\n\nThe song captures the panic of noticing distance growing and being unable to stop it.',
      zh: 'Swift 寫〈Haunted〉，寫的是察覺一個在乎的人正逐漸疏遠的那一刻。管弦樂編曲令它聽起來像電影配樂，弦樂像心跳般重擊。\n\n這首歌捕捉了察覺距離漸遠、卻無力阻止的那份恐慌。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She senses a change in him, a coldness she cannot explain.', zh: '她察覺他的轉變，一種她無法解釋的冷淡。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She cannot believe he is leaving and says she is haunted by the possibility. The repetition sounds like pleading.', zh: '她無法相信他正在離開，說自己被這個可能性纏繞。反覆的句子聽起來像在苦苦哀求。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She begs him to come back and admits she does not know what she did.', zh: '她懇求他回來，承認自己不知道做錯了甚麼。' } },
    ],
    echoes: [
      { ref: 'speak-now/the-story-of-us', note: { en: 'Before and after: the dread of losing someone, and the silence once they are gone.', zh: '之前與之後：害怕失去某人的恐懼，以及失去後的沉默。' } },
    ],
  },
  {
    slug: 'last-kiss', title: 'Last Kiss', track: 13, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'A slow, aching ballad about the last moments of a relationship, remembered in tiny details.',
      zh: '一首緩慢而隱隱作痛的抒情歌，以細微的細節回憶一段感情的最後時刻。',
    },
    story: {
      en: 'Swift wrote "Last Kiss" alone. It is one of her saddest early songs: no anger, no blame, only a careful record of the small things she will miss.\n\nThe press often connected it to her 2008 breakup with [[Joe Jonas]].',
      zh: 'Swift 獨力寫下〈Last Kiss〉。這是她早期最悲傷的歌之一：沒有憤怒，沒有責怪，只有一份小心翼翼的記錄，記下她將會懷念的種種小事。\n\n傳媒常把它與她在 2008 年和 [[Joe Jonas]] 的分手聯繫起來。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the last time she saw him and the way he held her, not knowing it was the last.', zh: '她回想最後一次見他、他擁抱她的方式，當時並不知道那是最後一次。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She will hold on to the memory of their last kiss and his small habits, even though he has moved on.', zh: '即使他已向前走，她仍會緊抓着最後一吻和他種種小習慣的回憶。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She wishes him well, hoping he is happy, and the generosity makes it hurt more.', zh: '她祝福他，希望他快樂；這份寬厚令痛楚更深。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'Two years later, she perfects the art of remembering a relationship through objects and moments.', zh: '兩年後，她把以物件和片刻記住一段感情的技巧發揮到極致。' } },
    ],
  },
  {
    slug: 'long-live', title: 'Long Live', track: 14, section: 'standard',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'A thank-you anthem to her band, her team and her fans: the triumphant closer of Speak Now.',
      zh: '一首答謝頌歌，獻給她的樂隊、團隊和歌迷：《Speak Now》凱旋式的壓軸歌。',
    },
    story: {
      en: 'Swift has called "Long Live" her first love song to her band and her fans. Written alone, it celebrates the years of building something together, from small stages to arenas, and imagines the day they will tell their children about it.\n\nIt became a fan anthem, and in 2023 it took on new meaning on the Eras Tour, where it was performed as a celebration of the whole journey.',
      zh: 'Swift 形容〈Long Live〉是她寫給樂隊和歌迷的第一首情歌。這首歌由她獨力寫成，讚頌大家多年來一同建立事業，由小舞台走到體育館，並想像有一天會把這段經歷告訴下一代。\n\n它成為歌迷的頌歌；2023 年在 Eras Tour 上，它更被賦予新的意義，成為慶祝整段旅程的歌。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the early days, the small rooms, the people who believed in her when no one else did.', zh: '她回想早年的日子、細小的場地，以及那些在無人相信她時仍然支持她的人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She describes their moment as a reign, with royal imagery: they were the kings and queens of that time, and it should be remembered.', zh: '她以王室意象描述那段時光：他們是那個時代的國王與女王，這段時光值得被記住。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She asks that if she has children one day, someone will tell them about this time, and she promises she will never forget.', zh: '她希望將來若有孩子，會有人把這段時光告訴他們；她亦承諾自己永不忘記。' } },
    ],
    echoes: [
      { ref: 'fearless/change', note: { en: 'The fight imagined on Fearless is now won and celebrated.', zh: '《Fearless》所想像的那場奮鬥，如今已經勝利，並被慶祝。' } },
      { ref: 'the-tortured-poets-department/clara-bow', note: { en: 'Fourteen years later, a far more ambivalent look at fame and how stars are made and replaced.', zh: '十四年後，以更矛盾的眼光審視名氣，以及明星如何被造就和取代。' } },
    ],
  },
  {
    slug: 'ours', title: 'Ours', track: 15, section: 'deluxe',
    writers: ['Taylor Swift'], producers: SN,
    single: { en: 'Final single, December 2011', zh: '最後一支單曲，2011 年 12 月' },
    overview: {
      en: 'A ukulele-sweet song about a love that others judge, and why their opinions do not matter.',
      zh: '一首像烏克麗麗般甜美的歌，寫一段被旁人評頭品足的愛情，以及為何旁人的意見並不重要。',
    },
    story: {
      en: 'A deluxe-edition song written alone, "Ours" is gentle and defiant at once. The couple faces judgement, perhaps about their differences or circumstances, and she insists that what they have belongs to them.\n\nIts video, directed by [[Declan Whitebloom]], follows an office worker waiting for her boyfriend to come home from military service.',
      zh: '〈Ours〉是 deluxe 版中的歌曲，由她獨力寫成，既溫柔又倔強。這對戀人面對旁人的批判，也許是因為兩人的差異或處境，而她堅持兩人擁有的東西只屬於他們自己。\n\n由 [[Declan Whitebloom]] 執導的 MV，講述一位上班族等待男友服役歸來的故事。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'People whisper about the two of them, and she notices the looks.', zh: '人們對兩人竊竊私語，她察覺到那些目光。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Whatever anyone says, what they have is theirs. She chooses him over the opinions of strangers.', zh: '無論別人說甚麼，兩人擁有的都屬於他們。她選擇他，而不是陌生人的意見。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She acknowledges his imperfections, including details about his appearance, and loves him for them.', zh: '她承認他的不完美，包括外表上的小細節，並因此更愛他。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/our-song', note: { en: 'The near-namesake from the debut: another song about a love that belongs only to the two people in it.', zh: '出道專輯中幾乎同名的歌：另一首寫只屬於兩個人的愛。' } },
      { ref: 'reputation/call-it-what-you-want', note: { en: 'Seven years later, a love protected from outside noise.', zh: '七年後，一份被保護、不受外界噪音干擾的愛。' } },
    ],
  },
  {
    slug: 'superman', title: 'Superman', track: 16, section: 'deluxe',
    writers: ['Taylor Swift'], producers: SN,
    overview: {
      en: 'Watching someone leave for his important life, and waiting for him to fly back.',
      zh: '看着某人離開，去過他重要的生活，然後等待他飛回來。',
    },
    story: {
      en: 'A deluxe track written alone, "Superman" is about admiring someone who always has to leave, who seems larger than life, and whose departures she has learned to accept.\n\nThe superhero image is affectionate and a little sad: she is the one who waits on the ground.',
      zh: '〈Superman〉是一首獨力寫成的 deluxe 版歌曲，寫欣賞一個總要離開、看似超凡的人，以及她如何學會接受他的離去。\n\n超級英雄的意象既帶愛意，又帶點哀傷：她是留在地面等待的那一個。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'He leaves for work with his briefcase and his big plans, and she watches him go.', zh: '他帶着公事包和遠大計劃出門，她目送他離開。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She sees him as a hero flying off to save the world, and hopes he will come back to her.', zh: '她把他看作飛去拯救世界的英雄，盼望他會回到她身邊。' } },
    ],
  },
];
