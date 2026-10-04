import type { Song } from '../types';

// Taylor Swift（2006）：第 1–7 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
export const part1: Song[] = [
  {
    slug: 'tim-mcgraw', title: 'Tim McGraw', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Nathan Chapman'],
    single: { en: 'Debut single, 19 June 2006 · No. 6 on Hot Country Songs', zh: '出道單曲，2006 年 6 月 19 日．Hot Country Songs 第六位' },
    overview: {
      en: 'The very first single: a fifteen-year-old imagining how a summer love will be remembered after he leaves, through the songs they shared.',
      zh: '她的第一支單曲：一個十五歲女孩想像男友離開後，這段夏日戀情會如何透過兩人共享的歌被記住。',
    },
    context: {
      en: 'Swift was a high-school freshman in Hendersonville, Tennessee, writing songs after school with [[Liz Rose]] and recording demos. Her boyfriend at the time was a senior about to leave for college, and she knew the relationship had an end date.',
      zh: '當時 Swift 是田納西州 Hendersonville 的高中一年級生，放學後與 [[Liz Rose]] 寫歌、錄製試聽帶。她當時的男友是高年級生，即將離家升讀大學，她知道這段感情有限期。',
    },
    story: {
      en: 'Swift has said she began the song during a maths class, humming the melody, because she was thinking about what would happen when he left. She realised that the thing that would remind him of her was music, in particular a [[Tim McGraw]] song they both loved. She finished it with [[Liz Rose]].\n\nNaming a debut single after one of country music’s biggest stars was risky, but it worked: radio programmers were curious, and the song introduced her as a writer with a very specific, visual memory. A year later she met McGraw himself at an awards show.',
      zh: 'Swift 說她是在數學課上開始構思這首歌的，一邊哼着旋律，一邊想着他離開後會怎樣。她察覺到，最能令他想起她的會是音樂，尤其是兩人都很喜歡的一首 [[Tim McGraw]] 的歌。她其後與 [[Liz Rose]] 完成這首歌。\n\n以鄉村樂壇巨星的名字作為出道單曲的歌名是一場冒險，但效果很好：電台節目編排人員感到好奇，而這首歌亦讓人認識到她是一位擁有非常具體、畫面感強烈的記憶的作者。一年後，她在頒獎禮上見到了 McGraw 本人。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She pictures him in the future, on a summer night, and lists what will remind him of her: the details of a small-town summer, the truck, the stars, the moonlight.', zh: '她想像將來某個夏夜的他，並列出會令他想起她的東西：小鎮夏天的種種細節、貨車、星星、月光。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'When he hears the Tim McGraw song that was "their" song, she hopes he thinks of her. The song becomes a time capsule for the relationship.', zh: '當他聽到那首屬於兩人的 Tim McGraw 歌曲，她希望他會想起她。那首歌成為這段感情的時間囊。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'More concrete memories: a faded pair of jeans, a dirt road, a first dance. The specificity that would become her trademark is already here.', zh: '更多具體的回憶：一條褪色的牛仔褲、一條泥路、第一支舞。日後成為她招牌的細節描寫，在這裏已經出現。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She reveals she has left him a letter to read after she has gone, so that the last word, and the memory, will be hers.', zh: '她透露自己留下了一封信，讓他在她離開後閱讀；這樣最後一句話和那份回憶，都會屬於她。' } },
    ],
    mv: {
      id: 'GkD20ajVxnY', director: 'Trey Fanjoy', date: '2006',
      scenes: [
        { scene: { en: 'By the lake', zh: '湖畔' }, meaning: { en: 'Swift sings by a cabin and a lake in a simple summer dress. The setting is rural Tennessee, the world of the song.', zh: 'Swift 穿着簡單的夏日裙子，在小屋和湖畔演唱。場景是田納西州的鄉郊，正是歌曲中的世界。' } },
        { scene: { en: 'Flashbacks', zh: '回憶片段' }, meaning: { en: 'Scenes of the couple in the truck bed, looking at the stars, dancing slowly. The memories are filmed in warm, faded tones, as if already old.', zh: '兩人躺在貨車車斗看星、慢舞的片段。回憶以溫暖褪色的色調拍攝，彷彿早已成為往事。' } },
        { scene: { en: 'The letter', zh: '那封信' }, meaning: { en: 'At the end the young man finds and reads her letter, completing the story told in the bridge.', zh: '結尾，年輕男子找到並讀了她的信，完成橋段所講的故事。' } },
      ],
    },
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'The same instinct, six years later: a lost relationship remembered through objects and small physical details.', zh: '六年後同樣的本能：透過物件和細小的實體細節記住一段失去的感情。' } },
      { ref: 'taylor-swift/our-song', note: { en: 'The album begins and ends with the idea of a song that belongs to a couple.', zh: '專輯以「屬於一對戀人的歌」這個概念開始，也以此作結。' } },
    ],
    trivia: [
      { en: 'Swift performed the song at the 2007 Academy of Country Music Awards with Tim McGraw and Faith Hill in the audience; she later toured with them.', zh: 'Swift 在 2007 年 ACM 頒獎禮上演唱這首歌，Tim McGraw 與 Faith Hill 就在台下；其後她更擔任兩人巡迴演唱會的嘉賓。' },
      { en: 'It was the opening number of the debut album and of her first chapter in the Eras Tour’s surprise-song history.', zh: '這是出道專輯的第一首歌，也是她整個創作生涯的起點。' },
    ],
  },
  {
    slug: 'picture-to-burn', title: 'Picture to Burn', track: 2, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Nathan Chapman'],
    single: { en: 'Fourth single, February 2008 · No. 3 on Hot Country Songs', zh: '第四支單曲，2008 年 2 月．Hot Country Songs 第三位' },
    overview: {
      en: 'A banjo-driven, tongue-in-cheek revenge song: the first sign that Swift could be funny and furious at the same time.',
      zh: '一首以班祖琴推動、半開玩笑的復仇歌：這是 Swift 第一次展示她可以同時幽默又憤怒。',
    },
    story: {
      en: 'Swift has said the song was about a boy she never actually dated, someone she found arrogant and controlling, and that she wrote it in a burst of anger. With [[Liz Rose]] she turned the anger into comedy: the narrator threatens to date his friends, to tell everyone his faults, and to burn his photographs.\n\nThe song showed early on that she would not only write sad songs about boys; she would also write sharp, mischievous ones. For the radio single, one line was changed to remove a potentially offensive phrase.',
      zh: 'Swift 說這首歌寫的是一個她其實從未正式交往過的男孩，一個她覺得自大又愛控制別人的人，她是在一陣怒火中寫成的。她與 [[Liz Rose]] 把怒氣變成喜劇：敘述者揚言要和他的朋友約會、把他的缺點告訴所有人，還要燒掉他的照片。\n\n這首歌很早便證明，她不會只寫關於男孩的傷心歌，也會寫尖銳又頑皮的歌。推出電台單曲時，其中一句被修改，刪去了可能冒犯人的字眼。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She mocks his pickup truck and his ego: he never let her drive, he thought he was too cool. The details make him ridiculous.', zh: '她嘲笑他的貨車和他的自負：他從不讓她開車，自以為很酷。這些細節令他顯得可笑。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He is nothing to her now but a picture to burn. The image is dramatic and a little childish on purpose, the kind of thing you say when you are hurt and pretending not to be.', zh: '如今他對她來說，只是一張要燒掉的照片。這個意象刻意誇張又帶點孩子氣，是受了傷卻假裝不在乎時會說的話。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She warns that she will start dating his friends and tell them what he is really like. The threats are comic exaggerations.', zh: '她警告說會開始和他的朋友約會，並告訴他們他的真面目。這些威脅都是喜劇式的誇張。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'If he comes back, she says, she will be ready, and her father is too. The joke lands as a classic country-song move.', zh: '她說如果他回來，她已準備好，她爸爸也一樣。這個笑點是典型的鄉村歌曲手法。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/shouldve-said-no', note: { en: 'Two sides of the same debut-era anger: one comic, one wounded.', zh: '出道時期同一種憤怒的兩面：一首是喜劇式的，一首是受傷的。' } },
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Revenge played for theatre returns, ten years later, with far higher stakes.', zh: '十年後，戲劇化的復仇再度登場，這次的賭注高得多。' } },
    ],
  },
  {
    slug: 'teardrops-on-my-guitar', title: 'Teardrops on My Guitar', track: 3, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Nathan Chapman'],
    single: { en: 'Second single, February 2007 · No. 13 on the Hot 100', zh: '第二支單曲，2007 年 2 月．Hot 100 第十三位' },
    overview: {
      en: 'Unrequited love for a classmate who only sees her as a friend, and the song that first carried her onto pop radio.',
      zh: '暗戀一位只把她當朋友的同學；這首歌第一次把她帶上流行樂電台。',
    },
    context: {
      en: 'The song is about a real classmate, Drew, whom Swift had a crush on while he was dating someone else. She used his real first name, a choice that became famous because it was so unguarded.',
      zh: '這首歌寫的是她真實的同學 Drew：當時 Swift 暗戀他，他卻有女朋友。她直接用了他的真名，這個毫不設防的選擇後來成為佳話。',
    },
    story: {
      en: 'Swift sat next to Drew in class and listened to him talk about his girlfriend, smiling and saying nothing about her own feelings. She wrote the song with [[Liz Rose]] about that private heartbreak.\n\nSwift has said that years later Drew showed up at her house, and that by then she had moved on. A pop remix took the song to number 13 on the Hot 100, making it her first major crossover hit and an early sign of where her career would go.',
      zh: 'Swift 在課堂上坐在 Drew 旁邊，聽他談論自己的女朋友，她只是微笑，對自己的感受隻字不提。她與 [[Liz Rose]] 把這份不為人知的心碎寫成這首歌。\n\nSwift 說，多年後 Drew 曾出現在她家門前，但那時她早已放下。這首歌的流行混音版打入 Hot 100 第十三位，成為她第一首主要的跨界熱門歌，亦預示了她日後的事業方向。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Drew looks at her, and she puts on a smile, while he talks about the girl he loves. She hides everything.', zh: 'Drew 望向她，她擠出笑容，而他則談論着他愛的女孩。她把一切藏起來。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He is the reason for the teardrops on her guitar, and the only thing she wishes on stars. The guitar is where her secret feelings go.', zh: '他是她結他上淚滴的原因，也是她向星星許的唯一願望。結他是她安放秘密心事的地方。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She knows his girlfriend is beautiful and wishes her well, which makes the hurt purer: there is no villain, just bad luck.', zh: '她知道他的女朋友很漂亮，也真心祝福她，這令傷痛更純粹：這裏沒有壞人，只有運氣不好。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She drives home alone, still thinking about him, unable to stop herself even though she knows better.', zh: '她獨自駕車回家，仍在想着他，明知不該，卻停不下來。' } },
    ],
    mv: {
      id: 'xKCek6_dB0M', director: 'Trey Fanjoy', date: '2007-02-15',
      scenes: [
        { scene: { en: 'Lab partners', zh: '實驗室拍檔' }, meaning: { en: 'In a school, she works beside "Drew" (played by [[Tyler Hilton]]), quietly watching him while he focuses on someone else.', zh: '在學校裏，她在「Drew」（由 [[Tyler Hilton]] 飾演）身旁做實驗，默默望着他，而他的心思卻在別人身上。' } },
        { scene: { en: 'Alone in a gown', zh: '獨自穿着禮服' }, meaning: { en: 'Intercut scenes show her alone in a formal dress, a fantasy version of herself that he never gets to see.', zh: '穿插的畫面中，她獨自穿着華麗禮服，是一個他永遠看不見的、幻想中的自己。' } },
      ],
    },
    echoes: [
      { ref: 'fearless/you-belong-with-me', note: { en: 'Two years later, the same situation, but now she fights for him, and in the video, she wins.', zh: '兩年後，同樣的處境，但這次她為他而爭取，而在 MV 中，她贏了。' } },
      { ref: 'taylor-swift/invisible', note: { en: 'The deluxe track explores the same feeling of being overlooked by someone you love.', zh: '這首 deluxe 歌曲探討同一種被心上人忽略的感覺。' } },
    ],
    trivia: [
      { en: 'Swift has joked that Drew is the first person she named in a song, and that she learned from the experience.', zh: 'Swift 曾開玩笑說，Drew 是她第一個寫進歌名中的真人，她也從中學到了教訓。' },
    ],
  },
  {
    slug: 'a-place-in-this-world', title: 'A Place in This World', track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Robert Ellis Orrall', 'Angelo Petraglia'],
    overview: {
      en: 'A thirteen-year-old’s anthem of not knowing where you belong, written soon after moving to Nashville to chase music.',
      zh: '一首十三歲女孩的歌：不知道自己屬於哪裏，寫於她為追逐音樂而遷往納什維爾後不久。',
    },
    story: {
      en: 'Swift wrote this when she was about thirteen, during the period when her family had relocated so that she could pursue music. She has described it as a song about being young, knowing what you want, and having no idea how to get there.\n\nIt is earnest and hopeful rather than sad, and it captures the restlessness of a teenager who already felt she had a purpose but not yet a place.',
      zh: 'Swift 約十三歲時寫下這首歌，正值她家人為了讓她追求音樂而搬遷的時期。她形容這首歌寫的是年輕、清楚自己想要甚麼，卻完全不知道如何達到的那種狀態。\n\n這首歌真摯而充滿希望，並不悲傷，捕捉了一個已覺得自己有目標、卻未找到位置的少女的躁動。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She does not know what she wants yet, only that she is restless and wants to be somewhere, doing something that matters.', zh: '她還不知道自己想要甚麼，只知道自己坐立不安，想到某個地方，做一些有意義的事。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She is just a girl trying to find a place in this world. The line is simple, almost diary-like, and that directness is its strength.', zh: '她只是一個想在這世界找到位置的女孩。這句話簡單得像日記，而直接正是它的力量。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She chooses to keep going even without a map, trusting that she will find her way eventually.', zh: '即使沒有地圖，她仍選擇繼續前行，相信自己終會找到方向。' } },
    ],
    echoes: [
      { ref: 'midnights/youre-on-your-own-kid', note: { en: 'Sixteen years later she looks back at this same girl and tells her the truth about what the journey would cost.', zh: '十六年後，她回望同一個女孩，告訴她這段旅程將要付出的代價。' } },
      { ref: '1989/welcome-to-new-york', note: { en: 'A decade on, she finally describes finding a place, this time a city.', zh: '十年後，她終於寫出找到位置的感覺，這次是一座城市。' } },
    ],
  },
  {
    slug: 'cold-as-you', title: 'Cold as You', track: 5, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Nathan Chapman'],
    overview: {
      en: 'A slow, bruised ballad about giving everything to someone who gives nothing back, and one of her early favourites lyrically.',
      zh: '一首緩慢、帶傷的抒情歌，寫為一個毫無回報的人付出一切；也是她早期最滿意的歌詞之一。',
    },
    story: {
      en: 'Swift has said "Cold as You" contains some of the lines she was proudest of on the debut album. Written with [[Liz Rose]], it is about realising, too late, that the person you have been making excuses for is simply unkind.\n\nThe imagery is wintry and grey: rain, empty streets, a sky that never clears. It foreshadows the more devastating ballads she would write later.',
      zh: 'Swift 說〈Cold as You〉包含了她在出道專輯中最自豪的幾句歌詞。這首歌與 [[Liz Rose]] 合寫，寫的是太遲才明白，那個你一直為他找藉口的人，其實只是冷漠無情。\n\n意象寒冷灰暗：雨、空蕩的街道、永不放晴的天空。它預示了她日後更令人心碎的抒情歌。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She has been painting a better picture of him than he deserves, and finally sees the gap.', zh: '她一直把他描繪得比他應得的更好，終於看清兩者之間的落差。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She has never been anywhere as cold as being with him. The temperature metaphor turns emotional absence into something you can feel on your skin.', zh: '她從未去過比與他一起更冷的地方。溫度的比喻，把情感上的缺席變成皮膚也感受得到的東西。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines that one day he will be alone with his regrets, and accepts that she cannot save him.', zh: '她想像有一天他會獨自面對自己的懊悔，並接受自己無法拯救他。' } },
    ],
    echoes: [
      { ref: 'evermore/tolerate-it', note: { en: 'The same imbalance, years later, written with far greater precision and pain.', zh: '多年後同樣的失衡，寫得更精準、更痛。' } },
      { ref: 'speak-now/dear-john', note: { en: 'Another ballad that finally names how badly someone treated her.', zh: '另一首終於說出某人如何虧待她的抒情歌。' } },
    ],
  },
  {
    slug: 'the-outside', title: 'The Outside', track: 6, section: 'standard',
    writers: ['Taylor Swift'],
    overview: {
      en: 'Written alone at about twelve: the loneliness of being the girl no one sat with at school.',
      zh: '約十二歲時獨力寫成：在學校裏沒有人願意坐在她身旁的孤獨。',
    },
    context: {
      en: 'Swift has spoken often about being excluded at school in Pennsylvania, where her love of country music made her an outsider. She has said she started writing songs partly to cope with that loneliness.',
      zh: 'Swift 多次談及在賓夕法尼亞州上學時被排擠的經歷：她對鄉村音樂的熱愛，令她成為格格不入的人。她說自己開始寫歌，部分原因正是為了排解那份孤獨。',
    },
    story: {
      en: 'One of the earliest songs on the album, written entirely by Swift. It describes looking in at a group that will not let you in, and wondering what is wrong with you.\n\nShe has said that this experience shaped her: the outsider who watches closely becomes the songwriter who notices everything.',
      zh: '這是專輯中最早期的歌之一，完全由 Swift 獨力創作。歌曲描寫望着一群不讓你加入的人，懷疑自己究竟哪裏出了問題。\n\n她說這段經歷塑造了她：那個在旁仔細觀察的局外人，後來成了一個甚麼都留意得到的作曲人。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes trying to fit in and being shut out, again and again.', zh: '她描述自己一次又一次嘗試融入，卻一次又一次被拒諸門外。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She has been on the outside looking in, and asks to be let in. The plea is direct and unguarded.', zh: '她一直在外面往裏看，懇求別人讓她進去。這個請求直接而毫無防備。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She suggests that one day the people who left her out might see things differently, a quiet hope rather than a threat.', zh: '她暗示有一天，那些排擠她的人或許會改變看法。這是一個安靜的希望，而不是威脅。' } },
    ],
    echoes: [
      { ref: 'midnights/youre-on-your-own-kid', note: { en: 'The grown-up answer to this song: you are on your own, and that is how you become yourself.', zh: '這首歌的成年版答案：你只能靠自己，而這正是你成為自己的方法。' } },
      { ref: 'fearless/fifteen', note: { en: 'School life seen again two years later, now with wisdom to pass on.', zh: '兩年後再寫校園生活，這次多了可以傳授的智慧。' } },
    ],
  },
  {
    slug: 'tied-together-with-a-smile', title: 'Tied Together with a Smile', track: 7, section: 'standard',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Nathan Chapman'],
    overview: {
      en: 'A gentle, heartbreaking song for a friend who seemed perfect on the outside while struggling with an eating disorder.',
      zh: '一首溫柔而令人心碎的歌，寫給一位外表看似完美、內心卻與飲食失調搏鬥的朋友。',
    },
    story: {
      en: 'Swift has said she wrote this song the day she found out that a friend she admired, a girl who seemed to have everything, was struggling with bulimia. She wrote it with [[Liz Rose]].\n\nThe song is compassionate rather than preachy. It asks why someone so loved feels she has to hide, and it holds the friend’s pain with care.',
      zh: 'Swift 說，她在得知一位她很欣賞、看似擁有一切的朋友患上暴食症的那一天，寫下了這首歌。她與 [[Liz Rose]] 合寫。\n\n這首歌充滿同理心而不說教。它問為何一個被如此愛着的人，會覺得自己必須躲藏，並小心翼翼地承載朋友的痛苦。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The friend appears beautiful and confident, but the narrator sees that she is holding herself together with effort.', zh: '這位朋友看似美麗自信，但敘述者看得出她是努力撐着自己。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She is tied together with a smile but coming undone. The image is of someone held up by a performance.', zh: '她用一個微笑把自己綁在一起，卻正在逐漸散開。這個意象寫的是一個靠表演撐着的人。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'The narrator wishes the friend could see herself as others see her, and know that she does not need to be perfect.', zh: '敘述者希望朋友能像別人一樣看見自己，明白她毋須完美。' } },
    ],
    echoes: [
      { ref: 'midnights/anti-hero', note: { en: 'Swift later wrote openly about her own struggles with body image, connecting to the pain she saw in her friend.', zh: 'Swift 後來公開寫及自己對身形的掙扎，與她當年在朋友身上看到的痛苦遙相呼應。' } },
      { ref: 'lover/soon-youll-get-better', note: { en: 'Another song written from beside someone who is suffering.', zh: '另一首站在受苦之人身旁寫成的歌。' } },
    ],
  },
];
