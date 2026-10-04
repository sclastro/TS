import type { Song } from '../types';

// 1989 (Taylor's Version)：第 1–7 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
export const part1: Song[] = [
  {
    slug: 'welcome-to-new-york', title: 'Welcome to New York', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Ryan Tedder'], producers: ['Taylor Swift', 'Ryan Tedder', 'Noel Zancanella'],
    single: { en: 'Promotional single, 20 October 2014', zh: '宣傳單曲，2014 年 10 月 20 日' },
    overview: {
      en: 'The album opens the moment she arrives: a bright, wide-eyed synth-pop greeting to a city where she could start again.',
      zh: '專輯由她抵達紐約那一刻開始：一首明亮、充滿好奇的合成器流行曲，向一個可以讓她重新開始的城市打招呼。',
    },
    context: {
      en: 'In early 2014 Swift bought an apartment in Manhattan. After years in Nashville, the move meant anonymity was gone but possibility was everywhere: new friends, new routines, and a city that did not care what genre she belonged to. The album that grew from that year was designed as a story with New York as its opening scene.',
      zh: '2014 年初，Swift 在曼哈頓買下寓所。在納什維爾生活多年後，這次搬遷意味着她失去了最後一點隱私，卻換來無處不在的可能性：新朋友、新的生活節奏，以及一個毫不在乎她屬於哪種曲風的城市。由那一年孕育出來的專輯，被設計成一個以紐約為開場的故事。',
    },
    story: {
      en: 'Swift wrote the song with [[Ryan Tedder]], who also helped produce it. She has described New York as a place that made her feel that anything could happen, and wanted the opening track to sound like stepping out of a car into bright lights. Its placement was deliberate: if the album was the story of her twenties so far, it had to begin with the arrival.\n\nThe song divided critics, some of whom found it too sweet, but it set the tone the rest of the record would complicate. Swift donated all of her proceeds from the song to New York City public schools.',
      zh: 'Swift 與 [[Ryan Tedder]] 合寫這首歌，Tedder 亦參與監製。她形容紐約令她覺得任何事都可能發生，並希望開場曲聽起來像剛下車就走進燦爛燈光之中。曲序是刻意安排的：如果這張專輯是她二十多歲的故事，就必須由抵達的一刻說起。\n\n這首歌的評價兩極，有評論認為它過於甜美，但它為整張專輯定下基調，其後的歌曲再逐步加入複雜的層次。Swift 把這首歌的全部收益捐給紐約市的公立學校。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She walks through a city humming with noise and light, and describes the feeling of a heart that has been reset, as if the past has been cleared away by arriving somewhere new.', zh: '她走過一個充滿聲響與燈光的城市，形容自己的心彷彿被重新設定，彷彿抵達新地方就把過去一筆勾銷。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'A repeated, almost chant-like welcome. The city itself seems to be greeting her, and the point is that it has been waiting for people like her: newcomers who want to reinvent themselves.', zh: '一句反覆、近乎口號式的歡迎。彷彿城市本身在向她打招呼，重點是紐約一直在等待像她這樣的人：想重新塑造自己的新來者。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She describes the freedom of the city in terms of identity: people can dress, live and love however they choose. One line celebrates that love in New York comes in every combination, a quiet statement of LGBTQ inclusion on a mainstream pop record.', zh: '她以身份認同來描寫城市的自由：人們可以隨心穿着、生活和戀愛。其中一句讚揚紐約的愛情不拘任何組合，是主流流行專輯中一次含蓄的 LGBTQ 共融表態。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits the city can be overwhelming and that she is still finding her way, but the newness is the point: being lost here feels like freedom rather than fear.', zh: '她承認城市有時令人應接不暇，自己仍在摸索方向，但新鮮感正是重點：在這裏迷路，感覺是自由而不是恐懼。' } },
    ],
    echoes: [
      { ref: 'lover/cornelia-street', note: { en: 'Five years later, New York returns as the setting of a love story, tied to one specific street and the fear of losing it.', zh: '五年後，紐約再次成為愛情故事的場景，這次聚焦於一條街道，以及失去它的恐懼。' } },
      { ref: '1989/clean', note: { en: 'The album’s bookends: arrival and excitement at the start, quiet recovery at the end.', zh: '專輯的首尾兩端：開場是抵達的興奮，結尾是寧靜的復原。' } },
    ],
    trivia: [
      { en: 'It was the first of several promotional tracks released before the album came out.', zh: '這是專輯推出前率先發佈的幾首宣傳歌曲之一。' },
      { en: 'Swift was named a Welcome Ambassador for New York City by its tourism board in 2014.', zh: '2014 年，紐約市旅遊局委任 Swift 為「全球歡迎大使」。' },
    ],
  },
  {
    slug: 'blank-space', title: 'Blank Space', track: 2, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Second single, 10 November 2014 · Hot 100 No. 1 for seven weeks', zh: '第二支單曲，2014 年 11 月 10 日．Hot 100 冠軍七週' },
    overview: {
      en: 'A satire disguised as a love song: Swift plays the man-eating serial dater the tabloids had invented, and plays her so well that many listeners missed the joke.',
      zh: '一首偽裝成情歌的諷刺歌：Swift 飾演小報虛構出來、不斷換男友的「食人花」，演得太入戲，以致不少聽眾沒有察覺這是反諷。',
    },
    context: {
      en: 'By 2014, Swift’s love life had become a running joke in the media, which portrayed her as someone who dated men only to write songs about them. She had been mocked on award shows and in headlines. Rather than defend herself, she decided to write from inside the caricature.',
      zh: '到了 2014 年，Swift 的感情生活已成為傳媒的笑柄，被描繪成「為了寫歌才談戀愛」的人。她在頒獎禮上被取笑，也屢上新聞標題。她沒有為自己辯護，而是決定從這幅漫畫式形象的內部落筆。',
    },
    story: {
      en: 'Swift wrote the song with [[Max Martin]] and [[Shellback]], and has explained that she built the narrator from everything she had read about herself: a girl who is charming and fun at first, then clingy, jealous and dramatic, and who knows the relationship will end in disaster but goes ahead anyway because the drama is worth it.\n\nShe has said she was amused that some people took it literally. Its success was enormous: it replaced "Shake It Off" at number one, making Swift the first woman in Hot 100 history to succeed herself at the top.',
      zh: 'Swift 與 [[Max Martin]]、[[Shellback]] 合寫這首歌。她解釋，歌中的敘述者是由她讀過的所有關於自己的報道拼湊而成：一個起初迷人有趣、後來黏人善妒又小題大做的女孩，明知這段感情會以災難收場，仍然義無反顧，因為那份戲劇性值得。\n\n她說有些人照字面理解這首歌，令她覺得很好笑。這首歌大受歡迎：它接替〈Shake It Off〉登上冠軍，令 Swift 成為 Hot 100 史上首位「自己取代自己」登上榜首的女歌手。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The narrator spots a new man and sizes him up like a prize, already imagining the romance, and already aware of her own reputation. The tone is flirtatious and theatrical.', zh: '敘述者看中一個新對象，像打量獎品一樣審視他，腦中已在想像這段戀情，同時清楚知道自己的名聲。語氣調情而富戲劇感。' } },
      { part: { en: 'Pre-chorus', zh: '導歌' }, meaning: { en: 'She promises an intoxicating ride and admits it may end badly. She describes the relationship as a game she knows how to play.', zh: '她承諾一段令人沉醉的旅程，也承認結局可能很糟。她把這段關係形容為一場她很懂得玩的遊戲。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The heart of the satire: she admits her romantic history is long and that her exes all say she is unstable, yet she still has room for one more name. One line is famously misheard as the name of a coffee chain, a meme Swift herself enjoyed.', zh: '諷刺的核心：她承認自己情史豐富，前度們都說她情緒不穩，但她仍有空位留給下一個名字。其中一句被廣泛聽錯成咖啡店的名字，成為網上笑話，連 Swift 本人也樂在其中。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The romance runs through its stages at high speed: the passion, the jealousy, the screaming. She describes herself as something frightening disguised as something lovely, which sums up the character.', zh: '戀情高速走完每一個階段：激情、妒忌、爭吵。她形容自己是包裝得很美麗的可怕之物，正好概括了整個角色。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She suggests that the men who chase this kind of drama secretly want to be tormented, flipping the blame back onto them.', zh: '她暗示那些追求這種戲劇性的男人，其實暗地裏想被折磨，把責任反推給他們。' } },
    ],
    mv: {
      id: 'e-ORhEE9VVg', director: 'Joseph Kahn', date: '2014-11-10',
      scenes: [
        { scene: { en: 'Arrival at the mansion', zh: '抵達大宅' }, meaning: { en: 'A handsome man (model [[Sean O’Pry]]) drives up to her estate. The opulent setting, filmed at Oheka Castle and another Long Island mansion, makes her a fairy-tale lady of the manor from the first frame.', zh: '一位英俊男子（模特兒 [[Sean O’Pry]]）駕車來到她的莊園。拍攝地點包括長島的 Oheka Castle 及另一座大宅，奢華佈景令她一開場就是童話式的莊園女主人。' } },
        { scene: { en: 'The perfect romance', zh: '完美的戀愛' }, meaning: { en: 'Horse rides, painting his portrait, dancing, carving initials into a tree. Every cliché of a dream relationship is staged deliberately, so the collapse that follows feels even funnier.', zh: '騎馬、為他畫肖像、跳舞、在樹上刻名字。夢幻戀愛的每一個陳腔濫調都被刻意演出，令之後的崩潰更加好笑。' } },
        { scene: { en: 'The suspicion', zh: '猜疑' }, meaning: { en: 'She checks his phone and her mood flips. The cut from bliss to paranoia mirrors the song’s point: the tabloid version of her goes from zero to jealous in seconds.', zh: '她偷看他的手機，情緒瞬間逆轉。由甜蜜剪接到多疑，正好對應歌曲的重點：小報筆下的她，可以在幾秒內由平靜變成妒火中燒。' } },
        { scene: { en: 'The destruction', zh: '破壞' }, meaning: { en: 'She cuts up his clothes, throws his phone into a fountain, slashes the portrait and smashes his car with a golf club. The violence is cartoonish on purpose: this is the “crazy ex” fantasy exaggerated until it is absurd.', zh: '她剪爛他的衣服、把手機扔進噴水池、割破那幅肖像，又用高爾夫球棍砸他的車。暴力刻意拍得像卡通：這是把「瘋狂前度」的想像誇大至荒謬。' } },
        { scene: { en: 'The next one', zh: '下一位' }, meaning: { en: 'As he drives away, another man arrives, and the cycle begins again. The ending confirms the satire: the media story about her is a loop.', zh: '他駕車離去之際，另一位男子到達，循環再度開始。結尾印證了諷刺：傳媒對她的描述，本身就是一個無限循環。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Another song that takes the public caricature of her and performs it to the extreme, this time with a darker edge.', zh: '另一首把公眾對她的漫畫式形象演到極致的歌，這次更陰暗。' } },
      { ref: 'lover/the-man', note: { en: 'Five years later she makes the same argument directly: a man with her dating history would be called a player, not a villain.', zh: '五年後她把同一論點直接說出來：如果是男人有同樣的戀愛經歷，只會被稱為情場高手，而不是壞人。' } },
    ],
    trivia: [
      { en: 'The video won Best Pop Video and Best Female Video at the 2015 MTV VMAs.', zh: 'MV 奪得 2015 年 MTV VMA 最佳流行音樂錄影帶及最佳女歌手音樂錄影帶。' },
      { en: 'It was nominated for Record of the Year and Song of the Year at the 2016 Grammys.', zh: '它獲得 2016 年格林美年度製作及年度歌曲提名。' },
    ],
    spotifyTrack: '45wMBGri1PORPjM9PwFfrS',
  },
  {
    slug: 'style', title: 'Style', track: 3, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback', 'Ali Payami'], producers: ['Max Martin', 'Shellback', 'Ali Payami'],
    single: { en: 'Third single, 9 February 2015', zh: '第三支單曲，2015 年 2 月 9 日' },
    overview: {
      en: 'A cool, late-night drive of a song about an on-again, off-again romance that, like a classic look, never quite goes out of fashion.',
      zh: '一首像深夜兜風的冷峻歌曲，寫一段分分合合的感情：就像經典造型一樣，永遠不會真正過時。',
    },
    context: {
      en: 'The song is set in the glamorous, paparazzi-lit world Swift moved through in 2012 and 2013. The press widely linked it to her brief relationship with [[Harry Styles]], a reading encouraged by the title, though Swift has never confirmed whom it is about.',
      zh: '歌曲的背景是 Swift 在 2012 至 2013 年身處的那個光鮮、被狗仔閃光燈照亮的世界。由於歌名的緣故，傳媒普遍把它與她和 [[Harry Styles]] 短暫的戀情聯繫起來，但 Swift 從未證實歌曲寫的是誰。',
    },
    story: {
      en: 'The song began with a guitar riff that [[Ali Payami]], a young Swedish producer, had been working on. [[Max Martin]] played it for Swift, and she immediately heard a moody, cinematic song in it. The funk-tinged guitar and pulsing bass make it one of the most sophisticated productions on the album.\n\nThe lyric is built on a fashion metaphor: two people whose attraction is as timeless as a white T-shirt and a red lip, and who keep circling back to each other despite everything.',
      zh: '歌曲源自瑞典年輕監製 [[Ali Payami]] 正在製作的一段結他旋律。[[Max Martin]] 把它播給 Swift 聽，她隨即從中聽到一首帶情緒、富電影感的歌。帶放克味的結他和脈動的低音，令這首歌成為全碟編曲最精緻的作品之一。\n\n歌詞建基於時裝的比喻：兩個人之間的吸引力，就像白 T 恤和紅唇一樣永恆；無論發生甚麼事，他們總會兜兜轉轉回到對方身邊。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He picks her up at midnight and they drive with the lights off, a scene of secrecy and thrill. She knows where this is heading and gets in anyway.', zh: '他在午夜接她，兩人關掉車頭燈駕車，是一個充滿秘密與刺激的場景。她清楚這會走向何方，仍然上了車。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She describes his look as an old-Hollywood rebel and her own as a classic, glamorous one. They each have a signature style, and so does their relationship: whatever happens, it never goes out of fashion.', zh: '她把他描寫成舊荷里活的叛逆型男，把自己描寫成經典而光鮮的模樣。兩人各有招牌風格，他們的關係也一樣：無論發生甚麼事，都永不過時。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'Rumours reach her that he has been with someone else. She confronts him, and admits she has her own secrets too. Neither is innocent.', zh: '她聽聞他與別人有染，於是當面質問，同時承認自己也並不清白。兩人都不是無辜的。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'He asks if she has been with someone else; she does not deny it. The confession hangs in the air, and then they fall back into each other, which is exactly the pattern the chorus describes.', zh: '他問她是否也與別人有過關係，她沒有否認。這句坦白懸在空中，然後兩人又再次投入對方懷抱，正是副歌所描述的模式。' } },
    ],
    mv: {
      id: '-CmadmM5cOk', director: 'Kyle Newman', date: '2015-02-13',
      scenes: [
        { scene: { en: 'Silhouettes and double exposures', zh: '剪影與雙重曝光' }, meaning: { en: 'The video is built from layered images: Swift’s silhouette filled with ocean, smoke or the face of the man ([[Dominic Sherwood]]). It feels like trying to remember someone and only half succeeding.', zh: 'MV 由層疊的影像構成：Swift 的剪影中填滿海浪、煙霧，或那位男子（[[Dominic Sherwood]]）的臉。感覺就像努力回想一個人，卻只記得一半。' } },
        { scene: { en: 'The cracked mirror', zh: '碎裂的鏡子' }, meaning: { en: 'Her reflection splits in a shattered mirror, an image of a relationship broken into pieces that still reflect each other.', zh: '她的倒影在碎鏡中分裂，象徵一段破碎卻仍互相映照的感情。' } },
        { scene: { en: 'The car and the coast', zh: '車與海岸' }, meaning: { en: 'Fragments of driving at night and walking by the sea echo the lyric’s midnight drive. Nothing is told in order, because memory does not work in order.', zh: '夜間駕車和在海邊漫步的片段，呼應歌詞中的午夜兜風。一切都不按次序呈現，因為回憶本來就沒有次序。' } },
      ],
    },
    echoes: [
      { ref: '1989/is-it-over-now', note: { en: 'The vault track revisits the same era of her life with far more bitterness than the glamour of "Style".', zh: '這首 vault 歌曲重訪同一段人生時期，卻遠比〈Style〉的光鮮苦澀。' } },
      { ref: '1989/wildest-dreams', note: { en: 'Both songs are obsessed with how a love will look in memory, as a timeless image rather than as it really was.', zh: '兩首歌都執着於一段愛情在回憶中的樣子：是一幅永恆的畫面，而不是它真實的模樣。' } },
    ],
    trivia: [
      { en: 'It peaked at No. 6 on the Billboard Hot 100.', zh: '最高位列 Billboard Hot 100 第六位。' },
    ],
  },
  {
    slug: 'out-of-the-woods', title: 'Out of the Woods', track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff'], producers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Promotional single October 2014; sixth single, January 2016', zh: '2014 年 10 月宣傳單曲；2016 年 1 月成為第六支單曲' },
    overview: {
      en: 'The anxious heart of 1989: a relationship that never felt safe, and a question repeated so many times it becomes a panic attack set to a drumbeat.',
      zh: '《1989》焦慮的核心：一段從未令人感到安穩的感情，一個被反覆追問到變成恐慌發作的問題，配上鼓點。',
    },
    context: {
      en: 'Swift has described the relationship behind the song as one in which every day felt fragile, as though they were always one bad moment away from it ending. It was also the beginning of her partnership with [[Jack Antonoff]], which would shape much of her later work.',
      zh: 'Swift 形容歌曲背後的那段感情，每一天都很脆弱，彷彿隨時只差一個糟糕時刻就會結束。這首歌亦是她與 [[Jack Antonoff]] 合作的起點，這段合作日後深深影響她的作品。',
    },
    story: {
      en: '[[Jack Antonoff]] sent Swift an instrumental track, and she wrote the lyrics very quickly. She said the music sounded exactly like the feeling of that relationship: restless, looping, never settling. The repeated question at the centre of the chorus is the sound of someone who cannot stop asking whether things are finally okay.\n\nThe second verse contains the song’s most concrete memory, a snowmobile accident that ended with stitches in a hospital. Swift has said the event really happened.',
      zh: '[[Jack Antonoff]] 把一段樂曲寄給 Swift，她很快便寫好歌詞。她說這段音樂正好就是那段感情的感覺：焦躁、不斷循環、無法安定。副歌中心反覆出現的那個問題，是一個人無法停止追問「現在終於沒事了嗎」的聲音。\n\n第二段主歌包含全曲最具體的回憶：一場以醫院縫針收場的雪地電單車意外。Swift 表示這件事真的發生過。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She looks at Polaroid-like snapshots of the relationship and remembers small objects and moments, details that feel precious precisely because the whole thing felt so breakable.', zh: '她看着像寶麗來一樣的戀愛快照，回想一些細小的物件和片刻；正因為整段感情如此易碎，這些細節才顯得珍貴。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The same question about whether they are finally safe, asked again and again. The repetition is the meaning: a secure relationship would not need to keep asking.', zh: '她一再追問兩人是否終於安全了。重複本身就是意思：一段安穩的關係，根本毋須不停追問。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'The snowmobile accident, the hospital, the stitches: a real scare that, for a moment, made everything else irrelevant. She remembers how he looked at her afterwards.', zh: '雪地電單車意外、醫院、縫針：一次真實的驚嚇，令其他一切在那一刻變得無關重要。她記得事後他怎樣看着她。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She recalls the moment she realised they would not make it, and the strange relief of finally knowing. The question is answered, just not the way she hoped.', zh: '她回想察覺兩人不會走下去的那一刻，以及終於知道答案時那份奇怪的釋然。問題得到了回答，只是答案不如她所願。' } },
    ],
    mv: {
      id: 'JLf9q36UsBk', director: 'Joseph Kahn', date: '2015-12-31',
      note: { en: 'Premiered on ABC’s Dick Clark’s New Year’s Rockin’ Eve.', zh: '在 ABC 的 Dick Clark’s New Year’s Rockin’ Eve 節目中首播。' },
      scenes: [
        { scene: { en: 'Chased by wolves', zh: '被狼群追趕' }, meaning: { en: 'She runs through a dark forest pursued by wolves, a literal version of the song’s title. The danger is never fully explained, which is the point: anxiety rarely is.', zh: '她在漆黑森林中被狼群追趕，是歌名的字面演繹。危險從未被完全解釋，這正是重點：焦慮往往說不出原因。' } },
        { scene: { en: 'The forest keeps changing', zh: '不斷變幻的森林' }, meaning: { en: 'Thorns, mud, snow, fire and water: each new landscape is a different stage of the struggle, and every time she escapes one, another begins.', zh: '荊棘、泥濘、冰雪、火焰與水：每一種地貌都是掙扎的不同階段，她每逃出一處，下一處又接踵而來。' } },
        { scene: { en: 'Meeting herself on the beach', zh: '在海灘遇見自己' }, meaning: { en: 'She finally reaches the shore and finds a version of herself waiting there. The closing message is that she lost the relationship but found herself, and that this was everything.', zh: '她終於抵達海岸，發現另一個自己在那裏等待。結尾的訊息是：她失去了那段感情，卻找回了自己，而這就是一切。' } },
      ],
    },
    echoes: [
      { ref: '1989/is-it-over-now', note: { en: 'The vault track is its bitter sequel: the same relationship and the same snowy accident, asked about again nine years later. One song asks if the danger is over; the other asks if it is truly over.', zh: '這首 vault 歌曲是它苦澀的續篇：同一段感情、同一場雪地意外，在九年後再被提起。一首問危險過去了沒有，另一首問一切是否真的結束。' } },
      { ref: '1989/i-wish-you-would', note: { en: 'Another early Antonoff collaboration built on the same restless, looping energy.', zh: '另一首早期與 Antonoff 合作的歌，同樣建基於焦躁、循環的能量。' } },
    ],
    trivia: [
      { en: 'It was the first song Swift and Antonoff wrote together.', zh: '這是 Swift 與 Antonoff 合寫的第一首歌。' },
      { en: 'Parts of the video were shot in New Zealand.', zh: 'MV 部分場景在新西蘭拍攝。' },
    ],
  },
  {
    slug: 'all-you-had-to-do-was-stay', title: 'All You Had to Do Was Stay', track: 5, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin'], producers: ['Max Martin', 'Shellback'],
    overview: {
      en: 'An ex comes back asking for another chance, and the answer is a frustrated, shimmering no: none of this had to happen if he had only stayed.',
      zh: '前度回頭要求再給一次機會，答案是一句既氣結又閃亮的「不」：如果他當初留下，這一切根本不必發生。',
    },
    story: {
      en: 'Swift has explained that the song’s distinctive high hook came from a dream. An ex appeared at her door, and when she opened her mouth to speak, the only thing that came out was a single, high-pitched word. She woke up and built a song around that moment with [[Max Martin]].\n\nThe dream logic suits the lyric: she is not angry so much as baffled that someone would break something good and then expect to walk back in.',
      zh: 'Swift 解釋，這首歌獨特的高音段落來自一個夢。她夢見一位前度出現在門前，當她張口想說話時，只能發出一個高音的字。醒來後，她便與 [[Max Martin]] 圍繞那一刻寫成這首歌。\n\n夢的邏輯正適合這段歌詞：她與其說憤怒，不如說是困惑，不明白為何有人會親手破壞美好的東西，然後以為可以若無其事地回來。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He reappears, regretful, wanting to try again. She notes how strange it is to see him wanting what he gave up.', zh: '他再次出現，滿懷悔意，想重新開始。她覺得很荒謬：看着他想要回自己親手放棄的東西。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The title says everything: he had it all, and the only thing required was not to leave. The single high word cuts through like a scream in a dream.', zh: '歌名已說明一切：他本來擁有一切，唯一要做的只是不要離開。那個高音字像夢中的一聲尖叫，劃破全曲。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She remembers the moment he walked away and how she would have given anything for him to stay then. Now it is too late, and the door stays shut.', zh: '她回想他轉身離去的一刻，那時她願意付出一切換他留下。如今已太遲，門不會再打開。' } },
    ],
    echoes: [
      { ref: '1989/is-it-over-now', note: { en: 'Both songs are written to an ex who wants back in, but the vault track is far angrier.', zh: '兩首歌都寫給想回頭的前度，但 vault 歌曲憤怒得多。' } },
    ],
    trivia: [
      { en: 'Swift has said the dream-born hook is the reason the song exists at all.', zh: 'Swift 說，正是夢中得來的那個段落，這首歌才得以誕生。' },
    ],
  },
  {
    slug: 'shake-it-off', title: 'Shake It Off', track: 6, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'], producers: ['Max Martin', 'Shellback'],
    single: { en: 'Lead single, 18 August 2014 · debuted at No. 1 on the Hot 100', zh: '首支單曲，2014 年 8 月 18 日．空降 Hot 100 冠軍' },
    overview: {
      en: 'The lead single and the mission statement of the era: a horn-driven refusal to be defined by critics, which announced her full move into pop.',
      zh: '首支單曲，也是這個時期的宣言：一首以銅管樂推動、拒絕被批評者定義的歌，宣告她全面轉向流行樂。',
    },
    context: {
      en: 'Swift announced 1989 and premiered this song and its video in a Yahoo! livestream on 18 August 2014. Choosing such an exuberant, unmistakably pop track as the first single was a statement that the country chapter was over. Speaking on Good Morning America that day, she said we live in a “takedown culture”.',
      zh: '2014 年 8 月 18 日，Swift 在 Yahoo! 網上直播中宣佈《1989》，並首播這首歌及其 MV。選擇如此歡騰、毫無疑問屬於流行樂的歌作為首支單曲，等於宣告鄉村時期已經結束。她當日在 Good Morning America 中表示，我們活在一種「拆台文化」之中。',
    },
    story: {
      en: 'Swift said she had learned that people would talk about her no matter what she did, and that she could choose not to let it hurt her. Written with [[Max Martin]] and [[Shellback]], the song lists every criticism she had heard, then dances past them.\n\nIt debuted at number one, became one of the biggest songs of the decade, and was nominated for Record of the Year and Song of the Year.',
      zh: 'Swift 說，她明白無論做甚麼，別人都會議論她，而她可以選擇不受傷害。這首歌與 [[Max Martin]]、[[Shellback]] 合寫，把她聽過的每一句批評逐一列出，然後跳舞跳過去。\n\n歌曲空降冠軍，成為那個十年最大熱的歌曲之一，並獲得年度製作及年度歌曲提名。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She rattles off the gossip about her: that she stays out too late, dates too much, has nothing in her brain. She repeats the insults almost cheerfully, which takes away their sting.', zh: '她一口氣數出關於自己的流言：太晚回家、約會太多、腦袋空空。她幾乎是開心地複述這些侮辱，反而令它們失去殺傷力。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Some people will always play games and some will always criticise; she will simply shrug it off. Criticism, the chorus argues, says more about the critic than about her.', zh: '總有人愛玩弄感情，總有人愛批評；她只會一笑置之。副歌的邏輯是：批評反映的是批評者本身，而不是她。' } },
      { part: { en: 'Spoken bridge', zh: '獨白橋段' }, meaning: { en: 'A playful spoken section imagines her ex with his new girlfriend and turns it into a joke. It is the most direct sign that this is a different, lighter Taylor Swift.', zh: '一段俏皮的獨白，想像前度與新女友的情景，然後把它變成笑話。這是最直接的信號：這是一個更輕鬆、不一樣的 Taylor Swift。' } },
    ],
    mv: {
      id: 'nfWlot6h_JM', director: 'Mark Romanek', date: '2014-08-18',
      scenes: [
        { scene: { en: 'Trying every dance style', zh: '嘗試每一種舞蹈' }, meaning: { en: 'Ballet, modern dance, cheerleading, breakdancing, rhythmic gymnastics: she fails at all of them, cheerfully. It is a visual version of the lyric: she is not trying to fit in.', zh: '芭蕾、現代舞、啦啦隊、霹靂舞、韻律體操：她樣樣都跳不好，卻跳得很開心。這是歌詞的視覺版本：她根本不打算迎合別人。' } },
        { scene: { en: 'The professionals around her', zh: '身邊的專業舞者' }, meaning: { en: 'The joke works because the dancers around her are excellent. Some critics at the time questioned how certain hip-hop dance imagery was used; the video’s stated intention was to celebrate every style of dance, and to show Swift as the one who does not fit.', zh: '這個笑話之所以成立，是因為她身邊的舞者都非常出色。當時有評論質疑片中部分嘻哈舞蹈的呈現手法；MV 的原意是讚頌各種舞蹈風格，並突顯 Swift 才是格格不入的那一個。' } },
        { scene: { en: 'Dancing with fans', zh: '與歌迷一起跳舞' }, meaning: { en: 'The video ends with Swift dancing with a crowd of fans, none of them professionals. The message: you do not have to be good at it, you just have to be yourself.', zh: 'MV 以 Swift 與一群歌迷一起跳舞作結，他們都不是專業舞者。訊息是：你不必跳得好，只要做自己。' } },
      ],
    },
    echoes: [
      { ref: 'midnights/anti-hero', note: { en: 'Eight years later, the critic’s voice turns inward: instead of brushing off what others say, she examines her own worst fears about herself.', zh: '八年後，批評的聲音轉向內心：她不再一笑置之別人的說法，而是審視自己對自己最深的恐懼。' } },
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'Three years later, shaking it off gives way to striking back.', zh: '三年後，「一笑置之」變成了「反擊」。' } },
    ],
    trivia: [
      { en: 'It was the first single from 1989 and debuted at No. 1 on the Hot 100.', zh: '這是《1989》的首支單曲，空降 Hot 100 冠軍。' },
      { en: 'On the 1989 World Tour, she often performed it with surprise guests.', zh: '在 1989 World Tour 上，她經常與驚喜嘉賓合唱這首歌。' },
    ],
  },
  {
    slug: 'i-wish-you-would', title: 'I Wish You Would', track: 7, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    overview: {
      en: 'Two people who still love each other, too proud to say it first, both awake at two in the morning.',
      zh: '兩個仍然愛着對方的人，都太驕傲而不肯先開口，同樣在凌晨兩點無法入睡。',
    },
    story: {
      en: '[[Jack Antonoff]] had an instrumental with a choppy, eighties-style guitar part, and Swift wrote a story to go with it. The scene is very specific: one person drives past the other’s street in the middle of the night, hoping to be seen, while the other lies awake hoping for exactly that.\n\nThe song captures a very particular kind of stalemate, where both people want to fix things but neither will risk going first.',
      zh: '[[Jack Antonoff]] 有一段帶八十年代風格、斷奏式結他的樂曲，Swift 為它寫了一個故事。場景非常具體：一個人在深夜駕車經過另一個人家門前的街道，希望被看見；另一個人則失眠躺着，盼望的正是這件事。\n\n這首歌捕捉了一種非常特別的僵局：兩人都想修補關係，卻都不肯冒險先踏出第一步。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'It is two in the morning; he is driving past her street, thinking about her and regretting how things ended.', zh: '凌晨兩點，他駕車經過她的街道，想着她，後悔事情以那種方式結束。' } },
      { part: { en: 'Pre-chorus and chorus', zh: '導歌與副歌' }, meaning: { en: 'She describes their differences and their fights, and then the wish of the title: she wishes he would come back and make the first move. Neither of them knows the other is thinking the same thing.', zh: '她描述兩人的分歧與爭吵，然後是歌名的願望：她希望他會回來，先踏出那一步。兩人都不知道對方想的是同一件事。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits she was wrong too and that she always wanted him back. The pride breaks, at least in private.', zh: '她承認自己也有錯，而且一直希望他回來。驕傲終於崩潰，至少在私底下是這樣。' } },
    ],
    echoes: [
      { ref: '1989/out-of-the-woods', note: { en: 'Written in the same early sessions with Antonoff, it shares that song’s sleepless, circling energy.', zh: '與〈Out of the Woods〉同屬與 Antonoff 早期合作的作品，同樣帶着失眠、打轉的能量。' } },
      { ref: 'midnights/midnight-rain', note: { en: 'Late-night regret becomes a whole album concept eight years later.', zh: '八年後，深夜的懊悔發展成一整張專輯的概念。' } },
    ],
  },
];
