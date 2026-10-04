import type { Song } from '../types';

// Lover（2019）：第 10–18 首
const JA = ['Taylor Swift', 'Jack Antonoff'];

export const part2: Song[] = [
  {
    slug: 'death-by-a-thousand-cuts', title: 'Death by a Thousand Cuts', track: 10, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A breakup song on a happy album, inspired not by her own life but by a film she watched.',
      zh: '一張快樂專輯中的分手歌，靈感不是來自她自己的人生，而是一部她看過的電影。',
    },
    story: {
      en: 'Swift has said that after watching the Netflix film Someone Great, by [[Jennifer Kaytin Robinson]], she was so moved by its story of a breakup that she wrote this song from the main character’s point of view. At a time when she was happy, she found it freeing to write heartbreak as fiction.\n\nThe title describes a breakup that is not one dramatic wound but countless small ones, every place and memory a fresh cut.',
      zh: 'Swift 說，她看了 [[Jennifer Kaytin Robinson]] 執導的 Netflix 電影《Someone Great》後，深受片中分手故事感動，便以女主角的角度寫下這首歌。在她自己快樂的時候，把心碎當作虛構故事來寫，令她感到自由。\n\n歌名描述的分手，不是一道戲劇性的大傷口，而是無數細小的傷口：每一個地方、每一段回憶，都是一道新的割痕。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She tries to move on but every song and every street reminds her of the relationship.', zh: '她努力向前，但每一首歌、每一條街都令她想起那段感情。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The pain is not one blow but a thousand small ones, which is somehow worse.', zh: '痛苦不是一下重擊，而是千百下輕割，而這不知怎的更難受。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'In a rush of images she describes the relationship as a city she can no longer live in, and the slow, painful work of leaving.', zh: '她以一連串意象，把這段感情形容為一座她再也無法居住的城市，以及緩慢而痛苦地離開的過程。' } },
    ],
    echoes: [
      { ref: 'folklore/the-1', note: { en: 'A year later, writing from imagination becomes the method of a whole album.', zh: '一年後，從想像出發寫作，成為整張專輯的方法。' } },
      { ref: 'red/all-too-well', note: { en: 'Heartbreak felt through places and memories, as on Red.', zh: '如同《Red》，透過地方和回憶感受心碎。' } },
    ],
  },
  {
    slug: 'london-boy', title: 'London Boy', track: 11, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff', 'Mark Anthony Spears', 'Joshua Karpeh'], producers: ['Taylor Swift', 'Jack Antonoff', 'Sounwave'],
    overview: {
      en: 'A cheeky love letter to London and the Englishman who showed it to her.',
      zh: '一封俏皮的情書，寫給倫敦，也寫給那位帶她認識倫敦的英國男子。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], with production from [[Sounwave]], "London Boy" interpolates the song "Cold War" by [[Cautious Clay]], who is credited as a co-writer. It opens with a short spoken clip from the actor [[Idris Elba]].\n\nThe song is a playful travel guide to a relationship, listing London neighbourhoods, pubs and pastimes, and contrasting them with her American upbringing.',
      zh: '〈London Boy〉與 [[Jack Antonoff]] 合寫，由 [[Sounwave]] 參與製作，並引用了 [[Cautious Clay]] 的歌曲〈Cold War〉，Cautious Clay 亦列為合寫人。歌曲以演員 [[Idris Elba]] 的一段簡短說話錄音開場。\n\n這首歌像一本關於這段感情的俏皮旅遊指南，數出倫敦的地區、酒館和消遣，並與她美國式的成長背景對比。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits she loves American things, but she has fallen for someone from London and his way of life.', zh: '她承認自己喜歡美國的東西，卻愛上了一個來自倫敦的人，以及他的生活方式。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She lists the parts of London he shows her, from neighbourhoods to rainy afternoons, delighted by all of it.', zh: '她數出他帶她認識的倫敦，由不同地區到下雨的午後，一切都令她欣喜。' } },
    ],
    echoes: [
      { ref: 'reputation/end-game', note: { en: 'The London scenes of the End Game video hinted at this.', zh: '〈End Game〉MV 中的倫敦場景早已暗示這一點。' } },
      { ref: 'the-tortured-poets-department/so-long-london', note: { en: 'Five years later, she says goodbye to the same city with heartbreaking sadness.', zh: '五年後，她以令人心碎的哀傷向同一座城市道別。' } },
    ],
  },
  {
    slug: 'soon-youll-get-better', title: "Soon You'll Get Better", track: 12, section: 'standard', feat: 'The Chicks',
    writers: JA, producers: JA,
    overview: {
      en: 'A fragile, deeply personal song about her mother’s illness, sung with The Chicks.',
      zh: '一首脆弱而極度私密的歌，寫她母親的病，與 The Chicks 合唱。',
    },
    context: {
      en: 'Swift’s mother, [[Andrea Swift]], had been diagnosed with cancer, and in 2019 Swift revealed that the illness had returned. She has said this song was very hard to write and very hard to put on the album.',
      zh: 'Swift 的母親 [[Andrea Swift]] 曾確診癌症，2019 年 Swift 透露病情復發。她說這首歌非常難寫，要收錄進專輯也同樣艱難。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]] and sung with [[The Chicks]], one of the country groups she grew up idolising, the song is almost entirely acoustic, built on banjo and harmonies. It is written as a conversation with someone in the hospital, half comfort and half fear.\n\nSwift has said the song is about how families tell each other things will be fine, even when they are not sure.',
      zh: '這首歌與 [[Jack Antonoff]] 合寫，並與她自小崇拜的鄉村組合之一 [[The Chicks]] 合唱，幾乎全是原聲樂器，以班祖琴與和聲構成。它寫成一段與病床上親人的對話，一半安慰，一半恐懼。\n\nSwift 說，這首歌寫的是家人之間如何互相說一切都會好起來，即使大家其實並不肯定。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She describes hospital routines and the small details of a loved one’s treatment.', zh: '她描述醫院的日常，以及至親接受治療時的種種細節。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She keeps repeating that her mother will get better, as much to convince herself as to comfort her.', zh: '她不斷重複母親會好起來，既是安慰對方，也是說服自己。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She admits the fear she cannot say out loud: what will she do if her mother is not there?', zh: '她承認那份不敢說出口的恐懼：如果母親不在了，她該怎麼辦？' } },
    ],
    echoes: [
      { ref: 'fearless/the-best-day', note: { en: 'The song she wrote her mother as a gift, eleven years earlier.', zh: '十一年前，她寫給母親作禮物的歌。' } },
      { ref: 'red/ronan', note: { en: 'Another song written from beside illness and fear.', zh: '另一首陪伴在疾病與恐懼旁寫成的歌。' } },
    ],
  },
  {
    slug: 'false-god', title: 'False God', track: 13, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'A sultry, saxophone-led song that describes love in the language of religion, even if it is a false god.',
      zh: '一首以色士風帶動的性感歌曲，以宗教的語言形容愛情，即使那是一個虛假的神。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "False God" is jazzy and R&B-tinged, with a saxophone that winds through the track. It describes a long-distance relationship that requires faith to keep going, and uses religious imagery to describe devotion and doubt.\n\nThe idea is that even if their love is a kind of worship of something imperfect, they will keep the faith.',
      zh: '〈False God〉與 [[Jack Antonoff]] 合寫，帶爵士和 R&B 色彩，色士風在歌中蜿蜒穿梭。它描述一段需要信念才能維持的遠距離感情，並以宗教意象寫虔誠與懷疑。\n\n意思是：即使兩人的愛是對某種不完美之物的崇拜，他們仍會堅守這份信仰。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The distance between them, and the effort it takes to keep believing.', zh: '兩人之間的距離，以及持續相信所需要的努力。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'They might be worshipping a false god, but they will keep the faith anyway.', zh: '他們崇拜的也許是一個虛假的神，但仍會堅守信仰。' } },
    ],
    echoes: [
      { ref: 'reputation/dont-blame-me', note: { en: 'Love described as religion, two years earlier.', zh: '兩年前，同樣以宗教形容愛情。' } },
    ],
  },
  {
    slug: 'you-need-to-calm-down', title: 'You Need to Calm Down', track: 14, section: 'standard',
    writers: ['Taylor Swift', 'Joel Little'], producers: ['Taylor Swift', 'Joel Little'],
    single: { en: 'Second single, 14 June 2019', zh: '第二支單曲，2019 年 6 月 14 日' },
    overview: {
      en: 'A breezy pop song telling online trolls and homophobic protesters to calm down: her most direct statement of support for the LGBTQ+ community.',
      zh: '一首輕快的流行曲，叫網絡酸民和恐同示威者冷靜下來：她對 LGBTQ+ 群體最直接的支持表態。',
    },
    story: {
      en: 'Written with [[Joel Little]], the song moves from Swift’s own experience with online trolls to the hostility faced by LGBTQ+ people, and argues that both kinds of hatred come from people who need to calm down. It was released during Pride Month in 2019.\n\nThe video ended with a call to sign a petition supporting the Equality Act, a US bill to protect LGBTQ+ people from discrimination, and won Video of the Year at the 2019 MTV VMAs.',
      zh: '這首歌與 [[Joel Little]] 合寫，由 Swift 自己面對網絡酸民的經驗，延伸到 LGBTQ+ 人士所受的敵意，指出兩種仇恨都來自需要冷靜下來的人。它在 2019 年驕傲月期間推出。\n\nMV 結尾呼籲觀眾聯署支持《平等法案》，這是一條保障 LGBTQ+ 人士免受歧視的美國法案。MV 奪得 2019 年 MTV VMA 年度音樂錄影帶。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She addresses people who attack her online, telling them their anger says more about them.', zh: '她向在網上攻擊她的人說話，告訴他們，他們的憤怒更多反映的是自己。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'She turns to protesters with hateful signs and defends people’s right to love whom they love.', zh: '她轉向那些舉着仇恨標語的示威者，捍衛人們愛自己所愛之人的權利。' } },
      { part: { en: 'Verse 3', zh: '第三段主歌' }, meaning: { en: 'She addresses the habit of pitting women in pop against each other, and says that era is over.', zh: '她談到把流行樂壇女歌手互相比較的風氣，並說那個時代已經過去。' } },
    ],
    mv: {
      id: 'Dkk9gvTmCXY', director: 'Drew Kirsch & Taylor Swift', date: '2019-06-17',
      note: { en: 'Won Video of the Year at the 2019 MTV VMAs.', zh: '奪得 2019 年 MTV VMA 年度音樂錄影帶。' },
      scenes: [
        { scene: { en: 'The trailer park', zh: '拖車營地' }, meaning: { en: 'A colourful trailer park full of LGBTQ+ celebrities celebrating, getting married and having fun.', zh: '一個色彩繽紛的拖車營地，滿是 LGBTQ+ 名人在慶祝、結婚和玩樂。' } },
        { scene: { en: 'The protesters', zh: '示威者' }, meaning: { en: 'A group of angry protesters with misspelled signs are shown as small and ridiculous next to the joy of the community.', zh: '一群舉着錯字標語的憤怒示威者，在群體的歡樂旁顯得渺小又可笑。' } },
        { scene: { en: 'The burger and the fries', zh: '漢堡與薯條' }, meaning: { en: 'Swift, dressed as fries, embraces [[Katy Perry]], dressed as a burger. The scene symbolised the public end of their long-rumoured feud.', zh: '扮成薯條的 Swift 擁抱扮成漢堡的 [[Katy Perry]]。這一幕象徵兩人傳聞已久的不和公開劃上句號。' } },
      ],
    },
    echoes: [
      { ref: '1989/bad-blood', note: { en: 'The feud fans connected to Bad Blood is symbolically resolved here.', zh: '歌迷聯想到〈Bad Blood〉的那段不和，在這裏象徵式地化解。' } },
      { ref: '1989/welcome-to-new-york', note: { en: 'An earlier, quieter nod to LGBTQ+ inclusion.', zh: '更早、更含蓄的一次 LGBTQ+ 共融表態。' } },
    ],
  },
  {
    slug: 'afterglow', title: 'Afterglow', track: 15, section: 'standard',
    writers: ['Taylor Swift', 'Louis Bell', 'Frank Dukes'], producers: ['Taylor Swift', 'Louis Bell', 'Frank Dukes'],
    overview: {
      en: 'An apology for her own overreaction in a fight, and a plea to meet in the warmth after the storm.',
      zh: '為自己在吵架時反應過度而道歉，並懇求在風暴過後的餘暉中重逢。',
    },
    story: {
      en: 'Written with [[Louis Bell]] and [[Frank Dukes]], "Afterglow" is one of the rare songs in which Swift takes full responsibility for a fight. She admits she blew a small thing out of proportion and hurt someone she loves.\n\nIt shows the growth of the Lover era: the ability to say sorry and mean it.',
      zh: '〈Afterglow〉與 [[Louis Bell]]、[[Frank Dukes]] 合寫，是 Swift 少數完全為一場爭吵承擔責任的歌之一。她承認自己把小事鬧大，傷害了所愛的人。\n\n它展現了 Lover 時期的成長：懂得道歉，而且真心誠意。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits she let her fear turn a small misunderstanding into a fight.', zh: '她承認自己任由恐懼把一個小誤會變成一場爭吵。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She asks him to meet her in the afterglow, the calm, warm moment after the anger has passed.', zh: '她請他在餘暉中與她相見，那是怒氣過後平靜而溫暖的一刻。' } },
    ],
    echoes: [
      { ref: 'speak-now/back-to-december', note: { en: 'Her first apology song, nine years earlier.', zh: '九年前，她第一首道歉歌。' } },
      { ref: 'lover/the-archer', note: { en: 'The self-criticism of The Archer turns into an apology here.', zh: '〈The Archer〉的自我批判，在這裏化為道歉。' } },
    ],
  },
  {
    slug: 'me', title: 'ME!', track: 16, section: 'standard', feat: 'Brendon Urie',
    writers: ['Taylor Swift', 'Brendon Urie', 'Joel Little'], producers: ['Taylor Swift', 'Joel Little'],
    single: { en: 'Lead single, 26 April 2019', zh: '首支單曲，2019 年 4 月 26 日' },
    overview: {
      en: 'A candy-coloured anthem about self-worth and individuality: the bright, almost childlike announcement that the dark era was over.',
      zh: '一首糖果色的頌歌，寫自我價值與個性：明亮、近乎童真地宣告黑暗時期已經結束。',
    },
    story: {
      en: 'Swift and [[Brendon Urie]] of Panic! at the Disco wrote the song with [[Joel Little]]. Swift has said she wanted to write a song that would help children, especially, feel good about who they are.\n\nThe song was the first taste of Lover, and its relentless cheerfulness divided critics. A line in the bridge about spelling became a running joke. In later versions of the album, Swift removed that line.',
      zh: 'Swift 與 Panic! at the Disco 的 [[Brendon Urie]] 與 [[Joel Little]] 合寫這首歌。Swift 說她想寫一首能令人，尤其是小朋友，對自己感覺良好的歌。\n\n這首歌是《Lover》的第一首試聽曲，它毫不間斷的歡樂令評論界意見分歧。橋段中一句關於拼字的歌詞成為笑話，Swift 後來在專輯的較新版本中把那一句刪去。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She admits she can be difficult and dramatic, but she knows she is worth it.', zh: '她承認自己有時難以相處、小題大做，但她知道自己值得。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She insists she is irreplaceable and that no one else could be quite like her: a simple statement of self-worth.', zh: '她強調自己無可取代，沒有人能完全像她：簡單地宣示自我價值。' } },
      { part: { en: 'Urie’s verse', zh: 'Urie 的段落' }, meaning: { en: 'Urie sings the other side, admitting his own flaws and promising to love her as she is.', zh: 'Urie 唱出另一方，承認自己的缺點，並承諾愛她本來的樣子。' } },
    ],
    mv: {
      id: 'FuXNumBwDOM', director: 'Dave Meyers & Taylor Swift', date: '2019-04-26',
      scenes: [
        { scene: { en: 'The snake becomes butterflies', zh: '蛇化作蝴蝶' }, meaning: { en: 'The video opens with a snake slithering through a pastel street, then bursting into a cloud of butterflies: reputation transforming into Lover.', zh: 'MV 以一條蛇在粉彩街道上爬行開場，然後爆散成一群蝴蝶：reputation 化身為 Lover。' } },
        { scene: { en: 'The argument in French', zh: '法語吵架' }, meaning: { en: 'Swift and Urie argue in French, a playful, theatrical scene of a couple’s spat.', zh: 'Swift 與 Urie 以法語吵架，一幕俏皮而戲劇化的情侶鬥嘴。' } },
        { scene: { en: 'A world of colour', zh: '色彩世界' }, meaning: { en: 'The pair dance through rooms that change colour, under an umbrella in a rain of paint, in a candy-coloured version of a classic musical.', zh: '兩人在變色的房間中起舞，在顏料雨中撐傘，像一齣糖果色版本的經典歌舞片。' } },
        { scene: { en: 'Benjamin Button', zh: 'Benjamin Button' }, meaning: { en: 'The video introduced Swift’s third cat, Benjamin Button, whom she adopted on set.', zh: '這支 MV 介紹了 Swift 的第三隻貓 Benjamin Button，她在片場收養了牠。' } },
      ],
    },
    echoes: [
      { ref: 'reputation/look-what-you-made-me-do', note: { en: 'The dark comeback of 2017 is answered by this bright one.', zh: '2017 年陰暗的回歸，由這次明亮的回歸回應。' } },
      { ref: '1989/shake-it-off', note: { en: 'Another bubbly lead single announcing a new era.', zh: '另一首宣告新時期的歡快首支單曲。' } },
    ],
  },
  {
    slug: 'its-nice-to-have-a-friend', title: "It's Nice to Have a Friend", track: 17, section: 'standard',
    writers: ['Taylor Swift', 'Louis Bell', 'Frank Dukes'], producers: ['Taylor Swift', 'Louis Bell', 'Frank Dukes'],
    overview: {
      en: 'A delicate, almost nursery-rhyme song tracing a friendship that slowly becomes love.',
      zh: '一首纖細、近乎童謠的歌，描寫一段慢慢變成愛情的友誼。',
    },
    story: {
      en: 'Written with [[Louis Bell]] and [[Frank Dukes]], the song uses a children’s choir and steel drums to create a gentle, music-box sound. It moves through three stages of life: childhood friendship, teenage romance, and marriage.\n\nThe simplicity is the point: love that grows out of friendship, without drama.',
      zh: '這首歌與 [[Louis Bell]]、[[Frank Dukes]] 合寫，以兒童合唱團和鋼鼓營造溫柔的音樂盒聲音。它走過人生的三個階段：童年的友誼、少年的戀愛，以及婚姻。\n\n簡單正是重點：由友誼中生長出來、沒有戲劇性的愛。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Two children play together and share small kindnesses.', zh: '兩個小孩一起玩耍，分享小小的善意。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'As teenagers, the friendship turns into something more.', zh: '到了少年時代，友誼變成了更深的感情。' } },
      { part: { en: 'Verse 3', zh: '第三段主歌' }, meaning: { en: 'They marry, and the friendship remains at the heart of it.', zh: '他們結婚了，友誼仍是一切的核心。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/marys-song-oh-my-my-my', note: { en: 'Childhood friends who grow old together, imagined thirteen years earlier.', zh: '十三年前，她已想像過一對童年玩伴白頭到老。' } },
    ],
  },
  {
    slug: 'daylight', title: 'Daylight', track: 18, section: 'standard',
    writers: JA, producers: JA,
    overview: {
      en: 'The closing song: after years in the dark, she steps into daylight, and redefines what love looks like.',
      zh: '壓軸歌：經歷多年黑暗後，她走進日光，並重新定義愛的模樣。',
    },
    story: {
      en: 'Written with [[Jack Antonoff]], "Daylight" sums up the mood of the whole album. It looks back on her past views of love, including the intense, red, painful love of earlier albums, and decides that real love is golden: warm, steady and bright.\n\nThe song ends with a spoken passage in which she says she wants to be defined by the things she loves, not the things she hates or fears.',
      zh: '〈Daylight〉與 [[Jack Antonoff]] 合寫，概括了整張專輯的氛圍。它回望她過去對愛情的看法，包括早期專輯中那種濃烈、紅色、痛苦的愛，然後認定真正的愛是金色的：溫暖、穩定、明亮。\n\n歌曲以一段獨白作結，她說希望被自己所愛的東西定義，而不是被自己所恨或所懼的東西定義。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She looks back on her past and admits she has wounded people as well as been wounded.', zh: '她回望過去，承認自己既被傷害過，也傷害過別人。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'After all the darkness, she steps into the daylight and lets the past go.', zh: '經歷所有黑暗之後，她走進日光，放下過去。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She revisits the colour metaphor from Red: she once thought love was red and burning; now she sees it as golden.', zh: '她重訪《Red》的顏色比喻：她曾以為愛是紅色、燃燒的；如今她看見愛是金色的。' } },
      { part: { en: 'Spoken outro', zh: '獨白尾段' }, meaning: { en: 'A short reflection on wanting to be defined by love rather than fear or hatred.', zh: '一段簡短的反思：希望被愛定義，而不是被恐懼或仇恨定義。' } },
    ],
    echoes: [
      { ref: 'red/red', note: { en: 'The colour of love, redefined seven years later.', zh: '愛的顏色，七年後被重新定義。' } },
      { ref: 'reputation/new-years-day', note: { en: 'The quiet love at the end of reputation becomes the whole sky here.', zh: '《reputation》結尾那份安靜的愛，在這裏成為整片天空。' } },
    ],
  },
];
