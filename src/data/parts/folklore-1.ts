import type { Song } from '../types';

// folklore（2020）：第 1–9 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const AD = ['Taylor Swift', 'Aaron Dessner'];
const JA = ['Taylor Swift', 'Jack Antonoff'];

export const part1: Song[] = [
  {
    slug: 'the-1', title: 'the 1', track: 1, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A casual, rueful opener about running into an old love and wondering, without bitterness, what might have been.',
      zh: '一首隨意又帶點懊悔的開場曲，寫偶遇舊愛，然後不帶苦澀地想：當初本可以怎樣。',
    },
    context: {
      en: 'folklore was written and recorded in secret during the 2020 lockdown, with collaborators working remotely. Swift announced it only hours before release on 24 July 2020.',
      zh: '《folklore》在 2020 年封城期間秘密寫成和錄製，合作者都是遙距工作。Swift 在 2020 年 7 月 24 日推出前僅數小時才宣佈。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]] of the band The National, "the 1" sets the tone for the whole album: piano, soft beats and a conversational voice. The narrator is doing fine, has moved on, and still imagines an alternative life in which someone else was "the one".\n\nIt opens folklore with a shrug rather than a statement, a sign that this album would be quieter and more reflective than anything before it.',
      zh: '這首歌與 The National 樂隊的 [[Aaron Dessner]] 合寫，為整張專輯定下基調：鋼琴、輕柔的節拍、聊天般的聲線。敘述者過得不錯，已經放下，卻仍會想像另一種人生：如果某人當初就是「那一個」。\n\n它以一個聳肩而不是一個宣言為《folklore》揭幕，顯示這張專輯將比她以往任何作品都更安靜、更沉思。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes her new, healthier life, trying new things and saying yes more often.', zh: '她描述自己更健康的新生活：嘗試新事物，更常對生活說好。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She allows herself to imagine that if things had been different, this person might have been the one, and then lets the thought go.', zh: '她容許自己想像：如果當初有所不同，這個人也許就是「那一個」；然後放下這個念頭。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits that some stories are better left as what-ifs.', zh: '她承認，有些故事最好只停留在「如果」。' } },
    ],
    echoes: [
      { ref: 'speak-now/back-to-december', note: { en: 'Regret for a love she let go, ten years earlier, sung far more anxiously.', zh: '十年前，同樣為放走的愛而懊悔，那時唱得焦慮得多。' } },
    ],
  },
  {
    slug: 'cardigan', title: 'cardigan', track: 2, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    single: { en: 'Lead single, 24 July 2020 · debuted at No. 1 on the Hot 100', zh: '首支單曲，2020 年 7 月 24 日．空降 Hot 100 冠軍' },
    overview: {
      en: 'An old, worn cardigan as a symbol of how one person made you feel valued: the first chapter of the album’s teenage love triangle.',
      zh: '一件舊開襟毛衣，象徵某人如何令你覺得自己被珍惜：專輯中少年三角戀的第一章。',
    },
    context: {
      en: 'Swift revealed that three songs on folklore form a love triangle told from three perspectives: "cardigan" from Betty, "august" from the other girl, and "betty" from James, the boy caught between them.',
      zh: 'Swift 透露，《folklore》中有三首歌構成一段三角戀，以三個角度講述：〈cardigan〉是 Betty 的角度，〈august〉是另一個女孩的角度，〈betty〉則是夾在兩人之間的男孩 James 的角度。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "cardigan" is told by Betty, looking back years later on her teenage romance with James and his betrayal. The central image is a cardigan: something old and overlooked that someone picked up and wore, making her feel she still mattered.\n\nIt debuted at number one, making Swift the first artist to debut a song and an album at number one in the same week in the US.',
      zh: '〈cardigan〉與 [[Aaron Dessner]] 合寫，由 Betty 講述：多年後，她回望自己與 James 的少年戀情，以及他的背叛。核心意象是一件開襟毛衣：一件陳舊、被忽略的東西，被某人拾起來穿上，令她覺得自己仍然重要。\n\n這首歌空降冠軍，令 Swift 成為首位在同一週內，在美國同時以歌曲和專輯空降冠軍的歌手。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Betty remembers the details of being sixteen with James: the clothes, the places, the feeling of being chosen.', zh: 'Betty 回想十六歲時與 James 一起的細節：衣着、地方，以及被選中的感覺。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She felt forgotten and worn out, like an old piece of clothing tossed aside, until he picked her up and made her feel treasured.', zh: '她覺得自己像一件被丟在一旁、陳舊破損的衣服，直至他把她拾起，令她覺得自己被珍惜。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She learns he has been with someone else over the summer, and her heart breaks.', zh: '她得知他在那個夏天與別人在一起，心碎了。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She predicts that he will come back to her, because she knows him better than anyone, and she is right.', zh: '她預言他會回到她身邊，因為她比任何人都了解他，而她說對了。' } },
    ],
    mv: {
      id: 'K-a8s8OLBSE', director: 'Taylor Swift', date: '2020-07-23',
      note: { en: 'Written, directed and styled by Swift; filmed under strict pandemic safety rules, with cinematography by Rodrigo Prieto.', zh: '由 Swift 編寫、執導及負責造型；在嚴格的防疫措施下拍攝，攝影指導為 Rodrigo Prieto。' },
      scenes: [
        { scene: { en: 'The cabin', zh: '小屋' }, meaning: { en: 'Swift sits at a piano in a cosy cabin at night, the image of solitude and safety.', zh: 'Swift 在夜裏的溫馨小屋中彈鋼琴，象徵獨處與安全。' } },
        { scene: { en: 'Through the piano', zh: '穿過鋼琴' }, meaning: { en: 'She climbs into the piano and emerges in an enchanted, moss-covered forest with a waterfall: the memory and magic of young love.', zh: '她爬進鋼琴，出現在一片長滿青苔、有瀑布的魔法森林：那是少年愛情的回憶與魔力。' } },
        { scene: { en: 'The storm at sea', zh: '海上的風暴' }, meaning: { en: 'Next she is clinging to the piano in a raging ocean, alone: the heartbreak.', zh: '接着她在怒海中緊抱鋼琴，孤身一人：那是心碎。' } },
        { scene: { en: 'The cardigan', zh: '開襟毛衣' }, meaning: { en: 'Soaked, she returns to the cabin and someone has left a cardigan for her. She puts it on: comfort after the storm.', zh: '她渾身濕透回到小屋，發現有人為她留下一件開襟毛衣。她穿上它：風暴後的安慰。' } },
      ],
    },
    echoes: [
      { ref: 'folklore/august', note: { en: 'The same summer told by the other girl.', zh: '同一個夏天，由另一個女孩講述。' } },
      { ref: 'folklore/betty', note: { en: 'James’s apology, from the boy’s side of the triangle.', zh: 'James 的道歉，來自三角關係中男孩的一方。' } },
    ],
  },
  {
    slug: 'the-last-great-american-dynasty', title: 'the last great american dynasty', track: 3, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'The true story of Rebekah Harkness, the scandalous heiress who once owned Swift’s Rhode Island house, told with a twist at the end.',
      zh: 'Rebekah Harkness 的真實故事：這位曾擁有 Swift 羅德島大宅、惹人非議的女繼承人；歌曲結尾有一個轉折。',
    },
    story: {
      en: 'In 2013 Swift bought Holiday House in Watch Hill, Rhode Island. Its earlier owner was [[Rebekah Harkness]], who married into the Standard Oil fortune, scandalised the town with lavish parties and eccentric behaviour, and was blamed for "ruining" the family.\n\nWritten with [[Aaron Dessner]], the song tells her story like a ballad, and then, in the last verse, switches to first person: Swift reveals that she now owns the house, and that the town says the same things about her.',
      zh: '2013 年，Swift 買下羅德島 Watch Hill 的 Holiday House。這座大宅的前主人是 [[Rebekah Harkness]]：她嫁入標準石油的富豪家族，以奢華派對和古怪行徑令小鎮議論紛紛，更被指「毀了」這個家族。\n\n這首歌與 [[Aaron Dessner]] 合寫，像一首敘事民謠一樣講述她的故事；然後在最後一段轉為第一人稱：Swift 透露自己如今擁有這座大宅，而小鎮對她的議論也如出一轍。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Rebekah, a divorcée from St. Louis, marries the heir to an oil fortune and moves into the big house by the sea.', zh: 'Rebekah 是一位來自聖路易斯、離過婚的女子，她嫁給石油財富的繼承人，搬進海邊的大宅。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The town blames her for everything, saying she enjoyed herself enormously while wrecking the family’s reputation.', zh: '小鎮把一切都歸咎於她，說她自己玩得盡興，卻毀了整個家族的名聲。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'After her husband dies, she fills the house with friends, art and extravagance, and the neighbours are horrified.', zh: '丈夫死後，她讓大宅充滿朋友、藝術與奢華，令鄰居大驚失色。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'The twist: decades later, the house is bought by someone else the town disapproves of, and it is Swift herself.', zh: '轉折：數十年後，大宅被另一個小鎮不認同的人買下，而那個人正是 Swift 本人。' } },
    ],
    echoes: [
      { ref: 'red/starlight', note: { en: 'Eight years earlier, another song built on a real American family’s story.', zh: '八年前，另一首建基於美國真實家族故事的歌。' } },
      { ref: 'folklore/mad-woman', note: { en: 'A woman labelled mad by others, a theme the album returns to.', zh: '一個被別人標籤為瘋狂的女人，專輯再次回到這個主題。' } },
    ],
  },
  {
    slug: 'exile', title: 'exile', track: 4, section: 'standard', feat: 'Bon Iver',
    writers: ['Taylor Swift', 'William Bowery', 'Justin Vernon'],
    overview: {
      en: 'A devastating duet with Bon Iver: two former lovers, each certain the other never understood.',
      zh: '一首與 Bon Iver 合唱、令人心碎的對唱：一對舊情人，各自確信對方從未真正理解自己。',
    },
    context: {
      en: 'Some songs on folklore are credited to "William Bowery", a pseudonym later revealed to be Swift’s then-partner, the actor [[Joe Alwyn]], who wrote the piano parts and lines with her during lockdown.',
      zh: '《folklore》中部分歌曲由「William Bowery」合寫，這個筆名後來被揭示是 Swift 當時的伴侶、演員 [[Joe Alwyn]]；他在封城期間與她一同寫下鋼琴部分和部分歌詞。',
    },
    story: {
      en: '"exile" was written by Swift and Bowery, then sent to [[Justin Vernon]] of Bon Iver, who added his own lines and a deep, broken voice. The song is structured as two monologues that eventually overlap, each lover describing the same relationship and missing the other’s signals.\n\nIt is one of the most acclaimed songs of the album, and the vocal contrast between the two singers makes the distance between the characters audible.',
      zh: '〈exile〉由 Swift 與 Bowery 寫成，再寄給 Bon Iver 的 [[Justin Vernon]]，他加入自己的歌詞和低沉、破碎的聲音。歌曲由兩段獨白構成，最後交疊在一起：兩位戀人各自描述同一段感情，卻都錯過了對方的訊號。\n\n這是專輯中最受讚譽的歌之一，兩位歌手聲音的反差，令角色之間的距離變得聽得見。',
    },
    lyrics: [
      { part: { en: 'His verse', zh: '他的段落' }, meaning: { en: 'He watches her with someone new and feels like he is watching a film he has already seen.', zh: '他看着她與新對象一起，感覺像在看一部早已看過的電影。' } },
      { part: { en: 'Her verse', zh: '她的段落' }, meaning: { en: 'She says she gave him so many warnings and signs, and he never noticed.', zh: '她說自己給過他無數警告和暗示，他卻從未察覺。' } },
      { part: { en: 'Overlapping bridge', zh: '交疊的橋段' }, meaning: { en: 'Their voices overlap but do not answer each other: two people talking past each other until the very end.', zh: '兩把聲音交疊，卻沒有回應對方：兩個人各說各話，直到最後。' } },
    ],
    echoes: [
      { ref: 'red/the-last-time', note: { en: 'Another duet about two people who cannot quite reach each other.', zh: '另一首寫兩個人無法真正觸及對方的對唱。' } },
      { ref: 'evermore/evermore', note: { en: 'Swift and Vernon reunite on evermore’s closing song.', zh: 'Swift 與 Vernon 在《evermore》的壓軸歌中再度合作。' } },
    ],
  },
  {
    slug: 'my-tears-ricochet', title: 'my tears ricochet', track: 5, section: 'standard',
    writers: ['Taylor Swift'], producers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'The track five of folklore, and the first song written for it: a funeral attended by the person who caused the death.',
      zh: '《folklore》的第五首，也是為這張專輯寫的第一首歌：一場葬禮，而造成死亡的人亦出席其中。',
    },
    story: {
      en: 'Swift has said "my tears ricochet" was the first song she wrote for folklore, and that it was inspired by imagery of a bitter divorce. She wrote it alone. The narrator is a ghost watching her own funeral, where the person who wronged her shows up to mourn.\n\nMany listeners read it as an allegory for the sale of her master recordings by people she had once trusted. Its choir-like, echoing production makes it feel like a hymn.',
      zh: 'Swift 說〈my tears ricochet〉是她為《folklore》寫的第一首歌，靈感來自一段苦澀離婚的意象。這首歌由她獨力寫成。敘述者是一個鬼魂，看着自己的葬禮，而那個虧待她的人竟然出席哀悼。\n\n不少聽眾把它解讀為一則寓言，指向她曾經信任的人出售她的母帶一事。如合唱團般迴盪的編曲，令它聽起來像一首聖詩。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes the betrayal by someone who once promised to protect her.', zh: '她描述一個曾承諾保護她的人如何背叛她。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'When she cries, her tears ricochet: the pain bounces back and hits the person who caused it.', zh: '她流下的淚會反彈：痛苦反彈回去，擊中造成痛苦的人。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She asks why the other person still wants her if they wanted to destroy her, and why they came to the funeral at all.', zh: '她質問：如果對方想毀掉她，為何仍要纏着她？為何還要來參加葬禮？' } },
    ],
    echoes: [
      { ref: 'folklore/mad-woman', note: { en: 'Another folklore song widely connected to the dispute over her masters.', zh: '《folklore》中另一首普遍被認為與母帶爭議有關的歌。' } },
      { ref: 'lover/the-archer', note: { en: 'The previous album’s track five.', zh: '上一張專輯的第五首歌。' } },
    ],
  },
  {
    slug: 'mirrorball', title: 'mirrorball', track: 6, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A shimmering song in which she compares herself to a disco ball: broken into pieces, reflecting everyone else back to them.',
      zh: '一首閃爍的歌，她把自己比作迪斯可燈球：碎成千百塊，把每個人的模樣反射回他們身上。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]] when her tour had just been cancelled, "mirrorball" is one of the most personal metaphors Swift has used for herself as a performer. She has said it is about wanting to be what people need, and about how a performer reflects the audience back to itself.\n\nThe dreamy, reverb-soaked production sounds like a dance hall at the end of the night.',
      zh: '〈mirrorball〉與 [[Jack Antonoff]] 合寫，寫於她的巡演剛剛被取消之時，是 Swift 為作為表演者的自己所用過最私密的比喻之一。她說這首歌寫的是想成為別人所需要的樣子，以及表演者如何把觀眾的模樣反射回他們身上。\n\n夢幻、充滿迴響的編曲，聽起來像深夜將盡的舞廳。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes herself as a mirrorball, broken into countless pieces that each show a different version of the people looking at her.', zh: '她形容自己是一顆迪斯可燈球，碎成無數塊，每一塊都映照出注視她的人的不同模樣。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She will keep spinning and performing, trying everything to be noticed and loved.', zh: '她會繼續旋轉、繼續表演，用盡一切方法被看見、被愛。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She mentions that the show she was preparing has been cancelled, but she is still trying, still on the tightrope.', zh: '她提到自己準備的演出被取消了，但她仍在努力，仍走在鋼索上。' } },
    ],
    echoes: [
      { ref: 'speak-now/long-live', note: { en: 'Her relationship with the audience, celebrated in 2010 and questioned here.', zh: '她與觀眾的關係：2010 年被讚頌，在這裏被質疑。' } },
      { ref: 'the-tortured-poets-department/i-can-do-it-with-a-broken-heart', note: { en: 'Four years later, the performer who keeps going regardless, seen in a much darker light.', zh: '四年後，那個無論如何都繼續表演的人，以更陰暗的角度呈現。' } },
    ],
  },
  {
    slug: 'seven', title: 'seven', track: 7, section: 'standard',
    writers: AD, producers: ['Aaron Dessner'],
    overview: {
      en: 'A dreamy memory of childhood in Pennsylvania and a friend whose home life was sad, seen through the eyes of a seven-year-old.',
      zh: '一段夢幻的賓夕法尼亞州童年回憶，寫一位家境悲傷的朋友，以七歲小孩的眼睛觀看。',
    },
    story: {
      en: 'Written with [[Aaron Dessner]], "seven" looks back at a childhood friendship. The narrator realises, only as an adult, that her friend’s home was troubled, and remembers the innocent plans they made, including running away to live as pirates.\n\nThe song captures how children understand serious things in simple, magical terms.',
      zh: '〈seven〉與 [[Aaron Dessner]] 合寫，回望一段童年友誼。敘述者直到長大後才明白，朋友的家庭其實有問題；她記得兩人天真的計劃，包括逃走去當海盜。\n\n這首歌捕捉了小孩如何以簡單而神奇的方式理解嚴肅的事情。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers summer days in Pennsylvania: swings, creeks and a best friend.', zh: '她回想在賓夕法尼亞州的夏日：鞦韆、小溪和最好的朋友。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The memory is fading but the love is still there, as it was when she was seven.', zh: '回憶正在褪色，但那份愛仍在，一如她七歲時。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She realises her friend’s home was frightening, and remembers suggesting they run away together. Her childish solution now feels heartbreaking.', zh: '她明白朋友的家其實令人害怕，並記得自己曾提議一起逃走。那個孩子氣的辦法，如今想來令人心碎。' } },
    ],
    echoes: [
      { ref: 'speak-now/never-grow-up', note: { en: 'Childhood innocence remembered tenderly, ten years earlier.', zh: '十年前，同樣溫柔地回憶童年的純真。' } },
      { ref: 'fearless/the-best-day', note: { en: 'Another look at childhood days that seemed ordinary.', zh: '另一次回望看似平凡的童年日子。' } },
    ],
  },
  {
    slug: 'august', title: 'august', track: 8, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'The other girl’s side of the love triangle: a summer romance she knew was never really hers.',
      zh: '三角戀中另一個女孩的一方：一段她知道從來不真正屬於自己的夏日戀情。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "august" is sung by the girl James was with during the summer while he was away from Betty. Swift has said she wanted to give this character empathy rather than make her a villain.\n\nThe song is lush and nostalgic, full of sun and salt air, but underneath is the knowledge that she was only ever borrowing him.',
      zh: '〈august〉與 [[Jack Antonoff]] 合寫，由 James 在離開 Betty 的那個夏天交往的女孩唱出。Swift 說她想給予這個角色同理心，而不是把她寫成壞人。\n\n歌曲豐盛而懷舊，充滿陽光和鹹鹹的海風，但底下是她清楚知道，自己從來只是暫借了他。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers the summer with him: car rides, the beach, the feeling of being chosen for a while.', zh: '她回想與他共度的夏天：兜風、海灘，以及被選中一段時間的感覺。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The summer drained away quickly; she never truly had him, but she lived on the hope that she might.', zh: '夏天很快便流逝了；她從未真正擁有他，卻靠着「也許可以」的希望活下去。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She remembers waiting for him to call, and pretending she did not care that he was going back.', zh: '她回想等待他來電，又假裝不在乎他會回去。' } },
    ],
    echoes: [
      { ref: 'folklore/cardigan', note: { en: 'Betty’s side of the same summer.', zh: '同一個夏天中 Betty 的一方。' } },
      { ref: 'folklore/betty', note: { en: 'James’s side, and his attempt to explain the summer.', zh: 'James 的一方，以及他試圖解釋那個夏天。' } },
      { ref: 'fearless/you-belong-with-me', note: { en: 'Swift once wrote from the point of view of the girl next door; here she writes with sympathy for the other side.', zh: 'Swift 曾以鄰家女孩的角度寫作；在這裏她同情地書寫另一方。' } },
    ],
  },
  {
    slug: 'this-is-me-trying', title: 'this is me trying', track: 9, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A song about struggling and trying anyway, written from several perspectives, including someone fighting addiction.',
      zh: '一首寫掙扎卻仍然努力的歌，以數個角度寫成，包括一個正與成癮搏鬥的人。',
    },
    story: {
      en: 'Swift has said that "this is me trying" was written from three perspectives: someone who has hit a wall in life, someone struggling with addiction, and someone in a relationship who has made mistakes. Written with [[Jack Antonoff]], the production is hazy and distant, as if heard through water.\n\nThe point is that the effort itself matters, even when the result does not look like much.',
      zh: 'Swift 說〈this is me trying〉以三個角度寫成：一個在人生中碰壁的人、一個與成癮搏鬥的人，以及一個在感情中犯過錯的人。這首歌與 [[Jack Antonoff]] 合寫，編曲朦朧而遙遠，彷彿隔着水聽見。\n\n重點是：努力本身就有意義，即使成果看來微不足道。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits she has hurt someone and has been ashamed of how she behaved.', zh: '她承認自己傷害了某人，並為自己的行為感到羞愧。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks the other person to see that this is her trying, even if it does not look like enough.', zh: '她請對方看見：這就是她在努力，即使看來還不夠。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She describes drinking to forget and feeling she wasted her potential.', zh: '她描述借酒忘憂，並覺得自己浪費了潛能。' } },
    ],
    echoes: [
      { ref: 'lover/afterglow', note: { en: 'Apologising and trying to do better, one album earlier.', zh: '上一張專輯中，同樣在道歉並努力做得更好。' } },
    ],
  },
];
