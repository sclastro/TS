import type { Song } from '../types';

// Red (Taylor's Version)：From the Vault（第 22–30 首）
export const part3: Song[] = [
  {
    slug: 'better-man', title: 'Better Man', track: 22, section: 'vault',
    writers: ['Taylor Swift'],
    overview: {
      en: 'A mature, regretful ballad she first gave to Little Big Town, who turned it into an award-winning hit.',
      zh: '一首成熟而帶悔意的抒情歌，她最初把它送給 Little Big Town，對方更把它唱成得獎熱門歌。',
    },
    story: {
      en: 'Swift wrote "Better Man" alone during the Red sessions but did not include it on the album. In 2016 she gave it to the country group [[Little Big Town]], whose version won Song of the Year at the CMA Awards, with Swift receiving the award as its writer.\n\nHer own recording finally appeared in 2021. The song describes leaving someone she loved because he would not change, and wishing he had been a better man.',
      zh: 'Swift 在 Red 錄音時期獨力寫下〈Better Man〉，卻沒有收錄進專輯。2016 年，她把歌曲送給鄉村組合 [[Little Big Town]]，他們的版本奪得 CMA 年度歌曲，Swift 以作曲人身份獲獎。\n\n她自己的錄音終於在 2021 年面世。歌曲描述她離開一個深愛的人，因為他不肯改變；她希望他當初能做一個更好的人。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She remembers his temper and his need for control, and how she made herself smaller to keep the peace.', zh: '她回想他的脾氣和控制欲，以及自己如何為了息事寧人而委屈自己。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She still misses him, but she knows she would only go back if he had been a better man, and he was not.', zh: '她仍然想念他，但她知道除非他當初是更好的人，否則她不會回頭，而他偏偏不是。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She acknowledges the good memories, which make the decision harder but not wrong.', zh: '她承認那些美好的回憶，這令決定更艱難，卻不代表錯誤。' } },
    ],
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'Two songs from the same sessions about a relationship that ended badly; this one is calmer and more resolved.', zh: '同期錄音中兩首寫一段不歡而散感情的歌；這一首更平靜、更決斷。' } },
    ],
  },
  {
    slug: 'nothing-new', title: 'Nothing New', track: 23, section: 'vault', feat: 'Phoebe Bridgers',
    writers: ['Taylor Swift'], producers: ['Aaron Dessner'],
    overview: {
      en: 'A haunting duet with Phoebe Bridgers about the fear, at twenty-two, of being replaced by someone younger and newer.',
      zh: '一首與 Phoebe Bridgers 合唱、令人不安的歌，寫二十二歲時便害怕被更年輕、更新鮮的人取代。',
    },
    story: {
      en: 'Swift wrote "Nothing New" alone at about twenty-two, already worried about how the music industry and the public treat young women as they age. In 2021 she recorded it with [[Phoebe Bridgers]], a younger artist who had grown up listening to her.\n\nThe pairing gives the song an extra layer: the "new girl" Swift feared is, in a sense, singing alongside her, as a friend rather than a rival.',
      zh: 'Swift 約二十二歲時獨力寫下〈Nothing New〉，那時她已擔心音樂產業和公眾如何對待逐漸年長的年輕女性。2021 年，她與聽着她的歌長大的年輕歌手 [[Phoebe Bridgers]] 合唱這首歌。\n\n這個組合為歌曲增添了一層意義：Swift 當年害怕的「新來的女孩」，某程度上正與她並肩合唱，而且是朋友而不是對手。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She wonders how long people will still find her interesting before they lose interest.', zh: '她想知道人們對她的興趣還能維持多久，才會轉移視線。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She fears she will become nothing new, overtaken by a younger girl who has everything she once had.', zh: '她害怕自己會變得不再新鮮，被一個擁有她曾經擁有一切的年輕女孩超越。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines meeting that younger girl one day, and admits she might envy her, and also want to warn her.', zh: '她想像有一天遇見那個年輕女孩，承認自己或許會羨慕她，也想提醒她。' } },
    ],
    echoes: [
      { ref: 'red/the-lucky-one', note: { en: 'Two Red-era songs about the fragility of fame.', zh: '兩首 Red 時期寫名氣脆弱的歌。' } },
      { ref: 'the-tortured-poets-department/clara-bow', note: { en: 'In 2024 she returns to the same fear, now from the other side of a long career.', zh: '2024 年，她從漫長事業的另一端，重訪同樣的恐懼。' } },
    ],
  },
  {
    slug: 'babe', title: 'Babe', track: 24, section: 'vault',
    writers: ['Taylor Swift', 'Pat Monahan'],
    overview: {
      en: 'A brassy, heartbroken song about a partner’s betrayal, first released by Sugarland featuring Swift in 2018.',
      zh: '一首帶銅管樂、心碎的歌，寫伴侶的背叛；2018 年首先由 Sugarland 推出，Swift 客串。',
    },
    story: {
      en: 'Co-written with [[Pat Monahan]] of the band Train, "Babe" was released in 2018 by the country duo [[Sugarland]], with Swift as a featured vocalist. Her own full recording arrived in 2021, with horns that give it a bright, almost defiant sound.\n\nThe lyric is a mix of sadness and accusation: he broke a promise, and the familiar pet name now sounds empty.',
      zh: '〈Babe〉與 Train 樂隊的 [[Pat Monahan]] 合寫，2018 年由鄉村二人組 [[Sugarland]] 推出，Swift 擔任客串歌手。她自己的完整錄音於 2021 年推出，銅管樂令它聽起來明亮，甚至帶點倔強。\n\n歌詞混合了哀傷與指責：他打破了承諾，那個熟悉的暱稱如今聽起來空洞無比。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She finds out he has been unfaithful and cannot believe he would throw away what they had.', zh: '她發現他不忠，無法相信他會拋棄兩人擁有的一切。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The pet name of the title becomes a reproach: he was supposed to be the one.', zh: '歌名中的暱稱變成責備：他本應是那個對的人。' } },
    ],
    echoes: [
      { ref: 'fearless/youre-not-sorry', note: { en: 'Betrayal again, sung with weariness rather than shock.', zh: '又是背叛，這次唱得疲憊而非震驚。' } },
    ],
  },
  {
    slug: 'message-in-a-bottle', title: 'Message in a Bottle', track: 25, section: 'vault',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    overview: {
      en: 'A glittering synth-pop song from the Red sessions that sounds like a sneak preview of 1989.',
      zh: '一首閃亮的合成器流行曲，來自 Red 錄音時期，聽起來像《1989》的預告。',
    },
    story: {
      en: 'Written with [[Max Martin]] and [[Shellback]], "Message in a Bottle" shows how early Swift was already moving towards full pop. Its bright synths and pulsing rhythm would have fitted on 1989.\n\nThe song is about long-distance longing: sending your feelings out into the world and hoping they reach the right person.',
      zh: '〈Message in a Bottle〉與 [[Max Martin]]、[[Shellback]] 合寫，顯示 Swift 早在那時已走向全面的流行樂。明亮的合成器和脈動的節奏，放在《1989》中也毫不違和。\n\n歌曲寫遠距離的思念：把自己的感情送往世界，盼望它能到達對的人手中。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She meets someone exciting and then has to watch them leave for another place.', zh: '她遇上一個令人心動的人，然後只能看着對方前往另一個地方。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Her feelings are like a message in a bottle: thrown out to sea, uncertain if they will ever arrive.', zh: '她的感情就像瓶中信：拋進大海，不知道能否送達。' } },
    ],
    echoes: [
      { ref: '1989/wonderland', note: { en: 'The Max Martin synth-pop sound fully arrives on 1989.', zh: 'Max Martin 式的合成器流行樂，在《1989》中全面登場。' } },
      { ref: 'red/come-back-be-here', note: { en: 'Another Red-era song about someone far away.', zh: '另一首 Red 時期寫遠方之人的歌。' } },
    ],
  },
  {
    slug: 'i-bet-you-think-about-me', title: 'I Bet You Think About Me', track: 26, section: 'vault', feat: 'Chris Stapleton',
    writers: ['Taylor Swift', 'Lori McKenna'],
    overview: {
      en: 'A witty, country-flavoured takedown of a pretentious ex, with a music video in which Swift crashes his wedding.',
      zh: '一首機智、帶鄉村風味的歌，嘲諷一位自命不凡的前度；MV 中 Swift 更大鬧他的婚禮。',
    },
    story: {
      en: 'Written with [[Lori McKenna]] and sung with [[Chris Stapleton]], the song mocks an ex who looked down on her background: his refined tastes, his expensive habits, his sense that he was above her.\n\nThe video, directed by [[Blake Lively]] in her directing debut, stars [[Miles Teller]] as the groom whose wedding Swift ruins with glee.',
      zh: '這首歌與 [[Lori McKenna]] 合寫，並與 [[Chris Stapleton]] 合唱，嘲諷一位看不起她出身的前度：他講究的品味、昂貴的習慣，以及自覺高她一等的態度。\n\nMV 是 [[Blake Lively]] 的導演處女作，由 [[Miles Teller]] 飾演新郎，Swift 則興高采烈地破壞他的婚禮。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She mocks his upper-class pretensions and his assumption that she was beneath him.', zh: '她嘲笑他的上流做派，以及他認為她配不上他的假設。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She bets that, for all his superiority, he still thinks about her, and that she was the best thing that happened to him.', zh: '她打賭，即使他再自命不凡，仍會想起她，而她是他遇過最好的事。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She lists the ways his new life is a performance, and suggests he knows it.', zh: '她數出他的新生活如何只是一場表演，並暗示他自己也心知肚明。' } },
    ],
    mv: {
      id: 'qEU3h8WSB7U', director: 'Blake Lively', date: '2021-11-15',
      scenes: [
        { scene: { en: 'The wedding', zh: '婚禮' }, meaning: { en: 'Swift, in a red dress, turns up uninvited at the elegant wedding of her ex ([[Miles Teller]]).', zh: 'Swift 穿着紅裙，不請自來地出現在前度（[[Miles Teller]]）優雅的婚禮上。' } },
        { scene: { en: 'The chaos', zh: '混亂' }, meaning: { en: 'She causes small disasters, from the cake to the guests, while the groom imagines her everywhere: the "you think about me" of the title made literal.', zh: '她製造一連串小災難，由蛋糕到賓客都不放過；而新郎彷彿到處都看見她，把歌名「你一定會想起我」拍成了現實。' } },
        { scene: { en: 'The exit', zh: '退場' }, meaning: { en: 'She leaves laughing; the joke is on him.', zh: '她笑着離開；被取笑的是他。' } },
      ],
    },
    echoes: [
      { ref: 'red/we-are-never-ever-getting-back-together', note: { en: 'The same playful, mocking tone, with a country twang.', zh: '同樣俏皮嘲諷的語氣，這次帶着鄉村腔調。' } },
      { ref: 'red/all-too-well', note: { en: 'Fans read it as a wry companion to the album’s most serious song.', zh: '歌迷把它視為專輯中最嚴肅那首歌的嘲諷式姊妹篇。' } },
    ],
  },
  {
    slug: 'forever-winter', title: 'Forever Winter', track: 27, section: 'vault',
    writers: ['Taylor Swift', 'Mark Foster'],
    overview: {
      en: 'A worried, tender song about someone she loves who is hiding a deep sadness.',
      zh: '一首擔憂而溫柔的歌，寫一個她愛的人隱藏着深沉的悲傷。',
    },
    story: {
      en: 'Written with [[Mark Foster]] of Foster the People, the song is about watching someone you care about struggle with darkness that they try to hide. The horns and upbeat rhythm contrast with the seriousness of the subject.\n\nShe imagines that if she had been there at the right moment, she could have helped, and wants them to know they are not alone.',
      zh: '這首歌與 Foster the People 的 [[Mark Foster]] 合寫，寫看着一個在乎的人與他試圖隱藏的黑暗搏鬥。銅管樂和輕快節奏，與題材的沉重形成對比。\n\n她想像如果自己在適當時候陪在身邊，就能幫到對方，並希望對方知道他並不孤單。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She notices that someone she loves seems fine on the surface but is clearly struggling.', zh: '她察覺一個她愛的人表面看來沒事，其實明顯在掙扎。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She wishes she could melt the cold that has settled over them, and promises to stay close.', zh: '她希望能融化籠罩着對方的寒冷，並承諾會留在身旁。' } },
    ],
    echoes: [
      { ref: 'taylor-swift/tied-together-with-a-smile', note: { en: 'The debut’s song for a friend who hid her pain, revisited with more maturity.', zh: '出道專輯中寫給隱藏痛苦的朋友的歌，在這裏以更成熟的眼光重訪。' } },
    ],
  },
  {
    slug: 'run', title: 'Run', track: 28, section: 'vault', feat: 'Ed Sheeran',
    writers: ['Taylor Swift', 'Ed Sheeran'],
    overview: {
      en: 'A soft acoustic duet with Ed Sheeran about running away together from everyone who does not understand.',
      zh: '一首與 Ed Sheeran 合唱的柔和木結他對唱，寫兩人一同逃離所有不理解他們的人。',
    },
    story: {
      en: 'Swift and [[Ed Sheeran]] wrote "Run" during the same period as "Everything Has Changed", but it stayed in the vault until 2021. It is quieter and more intimate, two voices over a gentle guitar.\n\nThe idea is simple: when the world gets too loud, escape together.',
      zh: 'Swift 與 [[Ed Sheeran]] 在寫〈Everything Has Changed〉的同一時期寫下〈Run〉，但它一直塵封至 2021 年。這首歌更安靜、更私密，兩把聲音配上輕柔的結他。\n\n構思很簡單：當世界太嘈吵時，就一起逃走。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'They are surrounded by people with opinions about their relationship.', zh: '兩人被一群對他們關係議論紛紛的人包圍。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The answer is to leave together and find somewhere quiet.', zh: '答案是一起離開，找一個安靜的地方。' } },
    ],
    echoes: [
      { ref: 'red/everything-has-changed', note: { en: 'The sibling song from the same sessions.', zh: '同期錄音的姊妹作。' } },
      { ref: '1989/i-know-places', note: { en: 'Escaping the watching world together, two years later.', zh: '兩年後，再次寫兩人一同逃離注視的世界。' } },
    ],
  },
  {
    slug: 'the-very-first-night', title: 'The Very First Night', track: 29, section: 'vault',
    writers: ['Taylor Swift', 'Amund Bjørklund', 'Espen Lind'],
    overview: {
      en: 'An upbeat, nostalgic pop song about looking at old photographs and missing the very first night of a relationship.',
      zh: '一首輕快、懷舊的流行曲，寫看着舊照片，懷念一段感情的第一個晚上。',
    },
    story: {
      en: 'Written with the Norwegian producers [[Amund Bjørklund]] and [[Espen Lind]], the song is one of the most cheerful in the vault despite its theme of loss. It looks back at the start of a relationship with sweetness rather than pain.\n\nIt shows how Swift was experimenting with bright, rhythmic pop well before 1989.',
      zh: '這首歌與挪威監製 [[Amund Bjørklund]]、[[Espen Lind]] 合寫，雖然主題是失去，卻是 vault 中最開朗的歌之一。它以甜蜜而非痛苦的心情，回望一段感情的開端。\n\n它顯示 Swift 早在《1989》之前，已在嘗試明亮、富節奏感的流行樂。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She looks through old photographs and remembers their first night together.', zh: '她翻看舊照片，回想兩人共度的第一個晚上。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She wishes she could return to that night, when everything was new and possible.', zh: '她希望能回到那一晚，那時一切都是新的、充滿可能。' } },
    ],
    echoes: [
      { ref: 'red/holy-ground', note: { en: 'Two Red-era songs that look back on love with fondness rather than bitterness.', zh: '兩首 Red 時期以溫情而非苦澀回望愛情的歌。' } },
    ],
  },
  {
    slug: 'all-too-well-10-minute-version', title: 'All Too Well (10 Minute Version)', track: 30, section: 'vault',
    writers: ['Taylor Swift', 'Liz Rose'], producers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'November 2021 · the longest song ever to reach No. 1 on the Hot 100', zh: '2021 年 11 月．Hot 100 史上最長的冠軍歌' },
    overview: {
      en: 'The legendary uncut version: ten minutes and thirteen seconds of memory, anger and grief, with whole verses fans had only heard about.',
      zh: '傳說中的未刪減版本：十分十三秒的回憶、憤怒與哀傷，包含歌迷多年來只聞其名的整段歌詞。',
    },
    context: {
      en: 'For years, fans had known that the original "All Too Well" was cut down from a much longer version improvised in 2011. When Swift announced Red (Taylor’s Version), the ten-minute version was the most anticipated song of the entire re-recording project.',
      zh: '多年來，歌迷都知道原版〈All Too Well〉是由 2011 年即興寫成的一個更長版本刪減而來。Swift 宣佈推出《Red (Taylor’s Version)》時，十分鐘版是整個重錄計劃中最令人期待的歌曲。',
    },
    story: {
      en: 'Swift recovered the original lyrics from 2011 and recorded them with [[Jack Antonoff]]. The new verses add sharper details: arguments, a parent’s comment, the sense of being dismissed, and a striking image of the relationship being remembered differently by each person.\n\nShe also wrote and directed All Too Well: The Short Film, starring [[Sadie Sink]] and [[Dylan O’Brien]], and performed the full ten minutes on Saturday Night Live. The song became the longest number one in Hot 100 history.',
      zh: 'Swift 找回 2011 年的原始歌詞，與 [[Jack Antonoff]] 一同錄製。新增的段落加入更尖銳的細節：爭吵、一位家長的評語、被輕視的感覺，以及一個震撼的意象：兩人對這段感情的記憶截然不同。\n\n她亦編寫並執導了由 [[Sadie Sink]] 和 [[Dylan O’Brien]] 主演的《All Too Well: The Short Film》，並在 Saturday Night Live 上完整演唱十分鐘版。這首歌成為 Hot 100 史上最長的冠軍歌。',
    },
    lyrics: [
      { part: { en: 'The familiar opening', zh: '熟悉的開頭' }, meaning: { en: 'The scarf, the autumn visit, the car ride: the original song’s images return, now with more room to breathe.', zh: '頸巾、秋日的探訪、車程：原版歌曲的意象再次出現，這次有更多空間舒展。' } },
      { part: { en: 'New verse: the dismissal', zh: '新段落：被輕視' }, meaning: { en: 'She describes being made to feel that her feelings were too much, and being brushed off by someone who said he was simply being honest.', zh: '她描述自己被迫覺得感受太多餘，被一個聲稱自己只是坦白的人隨手打發。' } },
      { part: { en: 'New verse: the birthday', zh: '新段落：生日' }, meaning: { en: 'A birthday that he did not show up to, connecting this song to "The Moment I Knew".', zh: '一個他沒有出現的生日，把這首歌與〈The Moment I Knew〉連在一起。' } },
      { part: { en: 'New verse: the age gap', zh: '新段落：年齡差距' }, meaning: { en: 'She reflects on how young she was, and how he seemed to move on to other young women as he got older.', zh: '她反思自己當時有多年輕，以及他年紀漸長，卻似乎仍不斷轉向其他年輕女子。' } },
      { part: { en: 'The extended outro', zh: '延長的尾段' }, meaning: { en: 'Instead of fading, the song circles back again and again, as if she cannot stop remembering. The length itself becomes the meaning: some memories refuse to be shortened.', zh: '歌曲沒有淡出，而是一再兜轉回來，彷彿她無法停止回憶。長度本身就是意義：有些回憶拒絕被刪短。' } },
    ],
    mv: {
      id: 'tollGa3S0o8', director: 'Taylor Swift', date: '2021-11-12',
      note: { en: 'All Too Well: The Short Film (about fifteen minutes), written and directed by Swift.', zh: '《All Too Well: The Short Film》（約十五分鐘），由 Swift 編劇及執導。' },
      scenes: [
        { scene: { en: 'Early love', zh: '初戀' }, meaning: { en: 'The film is divided into titled chapters. It opens with the young couple (Sink and O’Brien) in the glow of early love, driving through autumn.', zh: '電影分為多個章節。開場是年輕情侶（Sink 與 O’Brien）沉浸在初戀的光芒中，駕車穿過秋色。' } },
        { scene: { en: 'The dinner party', zh: '晚宴' }, meaning: { en: 'At a dinner with his friends she is ignored and later belittled, a scene that shows the power imbalance in quiet, painful detail.', zh: '在與他朋友的晚宴上，她被冷落，事後又被貶低。這一幕以安靜而痛苦的細節，呈現兩人之間權力的不對等。' } },
        { scene: { en: 'The kitchen argument', zh: '廚房的爭吵' }, meaning: { en: 'An argument in the kitchen escalates, filmed so closely and naturally that it feels uncomfortably real.', zh: '廚房中的爭吵逐步升級，鏡頭貼近而自然，令這一幕真實得令人不安。' } },
        { scene: { en: 'Thirteen years later', zh: '十三年後' }, meaning: { en: 'The final chapter jumps forward: the young woman has become a writer, played by Swift, reading from her book at a signing. Outside, the man looks through the window. She turned the memory into art.', zh: '最後一章時間跳躍：那位年輕女子已成為作家，由 Swift 飾演，在簽書會上朗讀自己的書。窗外，那個男人正望進來。她把回憶化成了藝術。' } },
      ],
    },
    echoes: [
      { ref: 'red/all-too-well', note: { en: 'The edited album version, nine years earlier.', zh: '九年前的專輯剪輯版本。' } },
      { ref: 'fearless/mr-perfectly-fine', note: { en: 'A phrase about cruelty disguised as honesty connects the two songs.', zh: '一個關於「以坦白為名的殘忍」的詞組，把兩首歌連在一起。' } },
      { ref: 'red/the-moment-i-knew', note: { en: 'The birthday that no one showed up to appears in both.', zh: '那個無人出現的生日，在兩首歌中都有出現。' } },
    ],
    trivia: [
      { en: 'At ten minutes and thirteen seconds, it is the longest song to top the Billboard Hot 100.', zh: '全長十分十三秒，是史上最長的 Billboard Hot 100 冠軍歌。' },
      { en: 'Swift performed the full version on Saturday Night Live in November 2021, with the short film projected behind her.', zh: '2021 年 11 月，Swift 在 Saturday Night Live 上完整演唱，身後投映着短片。' },
    ],
  },
];
