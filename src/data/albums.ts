import type { Album, Photo } from './types';

const PV = 'Paolo Villanueva';
const eras = (file: string, en: string, zh: string): Photo => ({
  file, credit: PV, license: 'CC BY 2.0', year: 2023,
  caption: { en: `The Eras Tour, SoFi Stadium, Aug 2023 — ${en}`, zh: `The Eras Tour，SoFi Stadium，2023 年 8 月：${zh}` },
});

export const albums: Album[] = [
  {
    slug: 'taylor-swift', title: 'Taylor Swift', year: 2006, date: '2006-10-24', ready: false,
    theme: { bg: '#eaf3ee', bg2: '#c8e2da', ink: '#183531', muted: '#4c6c65', accent: '#318b7f', accent2: '#c1a266', card: '#f8fdfb', font: 'Satisfy', particles: 'butterflies', dark: false },
    tagline: { en: 'A girl, a guitar and a notebook full of songs', zh: '一個女孩、一支結他、一本寫滿歌的筆記簿' },
    summary: {
      en: 'Released when Swift was sixteen, her debut introduced a teenage songwriter who wrote or co-wrote every track. Country radio embraced singles such as "Tim McGraw", "Teardrops on My Guitar" and "Our Song", the last making her the youngest person at the time to solely write and perform a number-one country hit.',
      zh: '這張出道專輯推出時，Swift 只有十六歲，每一首歌都由她親自創作或參與創作。〈Tim McGraw〉、〈Teardrops on My Guitar〉、〈Our Song〉等單曲深受鄉村電台歡迎；其中〈Our Song〉令她成為當時最年輕、獨力包辦詞曲並主唱鄉村榜冠軍歌的歌手。',
    },
    chapters: [
      {
        title: { en: 'A Christmas tree farm in Pennsylvania', zh: '賓夕法尼亞州的聖誕樹農場' },
        body: {
          en: 'Swift grew up on a Christmas tree farm in Pennsylvania and fell in love with country music through singers like [[LeAnn Rimes]], [[Shania Twain]] and [[Faith Hill]]. She sang at local fairs and karaoke contests, and at about twelve a computer repairman who came to fix the family computer taught her three chords on the guitar. She started writing songs almost immediately, partly as a way to cope with feeling left out at school.',
          zh: 'Swift 在賓夕法尼亞州的聖誕樹農場長大，透過 [[LeAnn Rimes]]、[[Shania Twain]] 和 [[Faith Hill]] 等歌手愛上鄉村音樂。她在地方市集和卡拉 OK 比賽中演唱；約十二歲時，一位上門修理電腦的技術員教她彈了三個結他和弦。她幾乎立即開始寫歌，部分原因是為了排解在學校被排擠的感受。',
        },
      },
      {
        title: { en: 'Nashville, after school', zh: '放學後的納什維爾' },
        body: {
          en: 'Her family moved to Hendersonville, Tennessee, so that she could pursue music. At fourteen she signed a songwriting deal with Sony/ATV, becoming the youngest staff writer the company had signed at the time. After school she would go to writing sessions on Music Row, most often with [[Liz Rose]], who has said that Swift arrived with the ideas and the stories, and that her own job was mostly to help shape them.',
          zh: '她一家遷往田納西州 Hendersonville，讓她追求音樂。十四歲時，她與 Sony/ATV 簽下作曲合約，成為該公司當時簽下的最年輕駐場作曲人。放學後，她便到 Music Row 參加寫歌工作，最常合作的是 [[Liz Rose]]。Rose 說，構思和故事都是 Swift 帶來的，她的工作主要是幫忙打磨。',
        },
      },
      {
        title: { en: 'The Bluebird Café', zh: 'Bluebird Café' },
        body: {
          en: 'In 2005 she performed at the Bluebird Café, Nashville’s famous listening room. In the audience was [[Scott Borchetta]], who was starting a new label, Big Machine Records. He signed her, and she worked on the debut album mainly with producer [[Nathan Chapman]], who had produced her demos and believed in her sound.',
          zh: '2005 年，她在納什維爾著名的音樂表演場地 Bluebird Café 演出。台下的 [[Scott Borchetta]] 正準備成立新唱片公司 Big Machine Records，他與她簽約。她主要與監製 [[Nathan Chapman]] 製作出道專輯；Chapman 曾為她監製試聽帶，一直相信她的聲音。',
        },
      },
      {
        title: { en: 'Radio tours and MySpace', zh: '電台巡迴與 MySpace' },
        body: {
          en: 'Before and after the album came out on 24 October 2006, Swift travelled to radio stations across the country, often driven by her mother, to introduce herself and her songs. At the same time she built a following on MySpace, writing to fans directly. She opened for [[Rascal Flatts]], [[George Strait]], [[Brad Paisley]], and [[Tim McGraw]] and [[Faith Hill]], learning to win over crowds who had come to see someone else.',
          zh: '專輯於 2006 年 10 月 24 日推出，前後期間，Swift 走遍全國各地的電台介紹自己和作品，往往由母親開車接送。同時，她在 MySpace 上直接寫信給歌迷，建立追隨者。她曾為 [[Rascal Flatts]]、[[George Strait]]、[[Brad Paisley]]，以及 [[Tim McGraw]] 與 [[Faith Hill]] 擔任開場嘉賓，學會如何打動那些本來是來看別人的觀眾。',
        },
      },
      {
        title: { en: 'What the debut proved', zh: '出道專輯證明了甚麼' },
        body: {
          en: 'Teenagers rarely had a voice on country radio, and certainly not one writing her own material about her own life. The album stayed on the Billboard 200 for years, won her the CMA Horizon Award in 2007 and a Grammy nomination for Best New Artist. More importantly, it established the method she still uses: specific details, real names and real places, and the belief that a personal story can be universal.',
          zh: '在鄉村電台上，少年人很少有發聲的機會，更遑論一個親自寫自己生活的少女。這張專輯在 Billboard 200 停留多年，為她贏得 2007 年 CMA Horizon Award，以及格林美最佳新人提名。更重要的是，它確立了她至今仍在使用的方法：具體的細節、真實的名字與地點，以及相信個人的故事也可以是普遍的。',
        },
      },
    ],
    facts: [
      { en: 'Label: Big Machine Records', zh: '唱片公司：Big Machine Records' },
      { en: 'Lead single: "Tim McGraw" (June 2006)', zh: '首支單曲：〈Tim McGraw〉（2006 年 6 月）' },
    ],
    photos: [
      { file: 'Swift, Taylor (2007).jpg', year: 2007, caption: { en: 'Performing live, August 2007', zh: '現場演出，2007 年 8 月' } },
      { file: 'Taylor Swift at Yahoo crop.jpg', year: 2007, caption: { en: 'Performing at Yahoo! headquarters, May 2007', zh: '在 Yahoo! 總部演出，2007 年 5 月' } },
    ],
  },
  {
    slug: 'fearless', title: 'Fearless', year: 2008, date: '2008-11-11', ready: false,
    theme: { bg: '#191308', bg2: '#392a11', ink: '#faf0d7', muted: '#cdb78b', accent: '#e5bf52', accent2: '#f8e9b0', card: '#261d0d', font: 'Cinzel Decorative', particles: 'glitter', dark: true },
    tagline: { en: 'Fairy tales, golden hair and the first Album of the Year', zh: '童話、金髮與第一座年度專輯大獎' },
    summary: {
      en: 'Fearless turned Swift from a country newcomer into a global star. "Love Story" and "You Belong with Me" crossed over to pop radio, and the album won four Grammys including Album of the Year, making her, at twenty, the youngest winner of that award at the time.',
      zh: '《Fearless》令 Swift 由鄉村樂壇新人躍升為國際巨星。〈Love Story〉和〈You Belong with Me〉打入流行樂電台，專輯奪得四項格林美獎，包括年度專輯；當年她只有二十歲，是該獎項史上最年輕的得主。',
    },
    chapters: [
      {
        title: { en: 'Written on the road', zh: '在旅途中寫成' },
        body: {
          en: 'Much of Fearless was written while Swift was opening for other artists in 2007 and 2008. She wrote more of this album alone than the debut, including "Love Story", "Fifteen" and "You Belong with Me"’s companion pieces, and co-produced it with [[Nathan Chapman]], the first time she took a production credit on a full album.',
          zh: '《Fearless》大部分歌曲寫於 2007 至 2008 年她為其他歌手擔任開場嘉賓期間。比起出道專輯，她在這張專輯中獨力創作的歌曲更多，包括〈Love Story〉和〈Fifteen〉等，並與 [[Nathan Chapman]] 共同監製，這是她第一次在整張專輯掛名監製。',
        },
      },
      {
        title: { en: 'What fearless means', zh: '「無畏」的意思' },
        body: {
          en: 'In the album booklet Swift explained that, to her, fearless did not mean being without fear. It meant having doubts and fears and still jumping, falling in love again after being hurt, walking into a school where you do not fit in. The fairy-tale imagery of the era, castles, princes, white horses, was both embraced and questioned on the same record.',
          zh: 'Swift 在專輯歌詞冊中解釋，對她來說，無畏不是沒有恐懼，而是心存懷疑和恐懼，卻仍然一躍而下：受傷後再次愛上一個人、走進一所自己格格不入的學校。這個時期的童話意象，城堡、王子、白馬，在同一張專輯中既被擁抱，也被質疑。',
        },
      },
      {
        title: { en: 'The crossover', zh: '跨界' },
        body: {
          en: '"Love Story" and "You Belong with Me" were played on pop radio around the world, and Fearless became the best-selling album of 2009 in the United States. In September 2009, accepting Best Female Video at the MTV VMAs for "You Belong with Me", she was interrupted on stage by [[Kanye West]], a moment that would echo through her career for years.',
          zh: '〈Love Story〉和〈You Belong with Me〉在世界各地的流行電台播放，《Fearless》成為 2009 年美國最暢銷的專輯。2009 年 9 月，她以〈You Belong with Me〉在 MTV VMA 領取最佳女歌手音樂錄影帶時，被 [[Kanye West]] 走上台打斷。這一刻在其後多年不斷影響她的事業。',
        },
      },
      {
        title: { en: 'The Fearless Tour and the Grammys', zh: 'Fearless Tour 與格林美' },
        body: {
          en: 'Her first headlining tour, from April 2009 to June 2010, was full of theatrical touches: costume changes, a fairy-tale castle set, and a moment where she walked through the crowd to a small stage at the back. In January 2010 Fearless won four Grammys, including Album of the Year, making her, at twenty, the youngest winner of that award at the time.',
          zh: '她的首個主角巡迴演唱會由 2009 年 4 月至 2010 年 6 月，充滿戲劇元素：多次換裝、童話城堡佈景，還有她穿過人群走到場館後方小舞台的一幕。2010 年 1 月，《Fearless》奪得四項格林美獎，包括年度專輯；二十歲的她成為當時該獎項最年輕的得主。',
        },
      },
      {
        title: { en: 'The first re-recording', zh: '第一張重錄專輯' },
        body: {
          en: 'After the masters of her first six albums were sold in 2019, Swift began re-recording them so that she would own new versions. Fearless (Taylor’s Version), released on 9 April 2021, was the first. It included six vault tracks and debuted at number one, the first re-recorded album to do so, proving that fans would follow her to the new versions.',
          zh: '2019 年首六張專輯的母帶被出售後，Swift 開始重新錄製這些專輯，讓自己擁有新版本。2021 年 4 月 9 日推出的《Fearless (Taylor’s Version)》是第一張。它收錄六首 vault 歌曲，並空降榜首，成為首張登上冠軍的重錄專輯，證明歌迷會跟隨她轉聽新版本。',
        },
      },
    ],
    facts: [
      { en: 'Grammy Album of the Year (2010)', zh: '格林美年度專輯（2010 年）' },
      { en: "Re-recorded as Fearless (Taylor's Version), 9 April 2021", zh: "重錄版 Fearless (Taylor's Version)：2021 年 4 月 9 日" },
    ],
    photos: [
      { file: 'Taylor Swift during Fearless Tour concert in Portland.jpg', year: 2009, caption: { en: 'Fearless Tour, Portland', zh: 'Fearless Tour，波特蘭' } },
      { file: 'Taylor Swift 2009 MTV VMA.jpg', year: 2009, caption: { en: 'MTV Video Music Awards, September 2009', zh: 'MTV 音樂錄影帶大獎，2009 年 9 月' } },
      eras('Taylor Swift The Eras Tour Fearless Set Era (53109821975).jpg', 'Fearless set', 'Fearless 環節'),
    ],
    tv: { title: "Fearless (Taylor's Version)", date: '2021-04-09' },
  },
  {
    slug: 'speak-now', title: 'Speak Now', year: 2010, date: '2010-10-25', ready: false,
    theme: { bg: '#180d24', bg2: '#3a1d52', ink: '#f4ebfb', muted: '#c4add7', accent: '#c08bed', accent2: '#f5cfee', card: '#261636', font: 'Pinyon Script', particles: 'magic', dark: true },
    tagline: { en: 'Every word written by her alone', zh: '每一個字，都由她獨力寫成' },
    summary: {
      en: 'Swift wrote every song on Speak Now by herself, partly to answer critics who doubted her songwriting. The album is a set of confessions addressed to people she had never spoken to directly, framed in sweeping, theatrical arrangements.',
      zh: '《Speak Now》全碟歌曲都由 Swift 獨力創作，某程度上是回應質疑她創作能力的評論。整張專輯好比一封封從未當面說出口的信，配上恢宏而富戲劇感的編曲。',
    },
    chapters: [
      {
        title: { en: 'An answer to the doubters', zh: '回應質疑者' },
        body: {
          en: 'After Fearless, some critics suggested that Swift’s co-writers deserved the credit for her success. Her response was to write every song on Speak Now entirely by herself. She co-produced it with [[Nathan Chapman]], and the album became a statement that the voice in the songs was hers alone.',
          zh: '《Fearless》之後，有評論暗示 Swift 的成功應歸功於她的合寫人。她的回應，是獨力寫下《Speak Now》的每一首歌。她與 [[Nathan Chapman]] 共同監製，這張專輯成為一個宣言：歌中的聲音只屬於她自己。',
        },
      },
      {
        title: { en: 'Confessions she never made', zh: '從未當面說出的告白' },
        body: {
          en: 'Swift described the album as a collection of things she wished she had said to people in the moment: apologies, accusations, thank-yous and declarations. Each song is addressed to someone. In the booklet, the hidden capital-letter messages continued, now reading like footnotes to those confessions.',
          zh: 'Swift 形容這張專輯收集了她希望當時能對某些人說出口的話：道歉、指控、感謝與表白。每一首歌都寫給某一個人。歌詞冊中隱藏的大楷字母訊息仍然延續，如今讀起來像這些告白的註腳。',
        },
      },
      {
        title: { en: 'The Speak Now World Tour', zh: 'Speak Now World Tour' },
        body: {
          en: 'The tour ran through 2011 and 2012 and was her most theatrical yet, inspired by Broadway: a moving bridge, a balcony that flew over the audience, aerial acrobatics, and a different cover song in each city. A live album, Speak Now World Tour Live, followed.',
          zh: '巡演於 2011 至 2012 年舉行，是她迄今最富舞台劇色彩的演出，靈感來自百老匯：會移動的橋、在觀眾頭上飛越的露台、空中雜技，以及在每個城市演唱不同的翻唱歌曲。其後推出了現場專輯《Speak Now World Tour Live》。',
        },
      },
      {
        title: { en: 'Recognition and a snub', zh: '肯定與遺珠' },
        body: {
          en: '"Mean" won two Grammys in 2012, but the album itself was not nominated for Album of the Year, which surprised many. Swift performed "Mean" at that ceremony on a porch set with a banjo.',
          zh: '〈Mean〉在 2012 年奪得兩項格林美獎，但專輯本身未獲年度專輯提名，令不少人感到意外。Swift 在那屆頒獎禮上，於門廊佈景中彈着班祖琴演唱〈Mean〉。',
        },
      },
      {
        title: { en: 'Speak Now (Taylor’s Version)', zh: 'Speak Now (Taylor’s Version)' },
        body: {
          en: 'Swift announced the re-recording on stage at the Eras Tour in Nashville in May 2023, and released it on 7 July 2023. It added six vault tracks, guest vocals from [[Fall Out Boy]] and [[Hayley Williams]], and one notable change of lyric in "Better than Revenge". It debuted at number one.',
          zh: 'Swift 於 2023 年 5 月在 Eras Tour 納什維爾站的舞台上宣佈重錄版，並於 2023 年 7 月 7 日推出。重錄版加入六首 vault 歌曲、[[Fall Out Boy]] 和 [[Hayley Williams]] 的客席演唱，以及〈Better than Revenge〉中一處引人注目的歌詞修改。專輯空降冠軍。',
        },
      },
    ],
    facts: [
      { en: 'Entirely self-written', zh: '全碟歌曲由她一人包辦詞曲' },
      { en: "Re-recorded as Speak Now (Taylor's Version), 7 July 2023", zh: "重錄版 Speak Now (Taylor's Version)：2023 年 7 月 7 日" },
    ],
    photos: [
      { file: 'Taylor Swift Speak Now Tour 2011.jpg', year: 2011, caption: { en: 'Speak Now World Tour, Pittsburgh, 2011', zh: 'Speak Now World Tour，匹茲堡，2011 年' } },
      { file: 'Taylor Swift - SPEAK NOW World Tour Live in Sydney 2012 - Speak Now.jpg', year: 2012, caption: { en: 'Speak Now World Tour, Sydney, 2012', zh: 'Speak Now World Tour，悉尼，2012 年' } },
      eras('Taylor Swift The Eras Tour Speak Now Set Era (53109969638).jpg', 'Speak Now set', 'Speak Now 環節'),
    ],
    tv: { title: "Speak Now (Taylor's Version)", date: '2023-07-07' },
  },
  {
    slug: 'red', title: 'Red', year: 2012, date: '2012-10-22', ready: false,
    theme: { bg: '#21090a', bg2: '#541216', ink: '#faede7', muted: '#d7b0a3', accent: '#d73f3d', accent2: '#edc39d', card: '#300f11', font: 'Abril Fatface', particles: 'leaves', dark: true },
    tagline: { en: 'Autumn leaves, a scarf and the colour of intense emotion', zh: '秋葉、圍巾，以及最濃烈的情感顏色' },
    summary: {
      en: 'Red mixes country, rock and electronic pop, and marks Swift’s first work with producers Max Martin and Shellback. She described the album as being about the tumultuous, crazy, intense feelings of falling in and out of love. "All Too Well" later became one of her most celebrated songs.',
      zh: '《Red》融合鄉村、搖滾和電子流行樂，亦是 Swift 首次與監製 Max Martin、Shellback 合作。她形容這張專輯描寫的是戀愛與失戀之間那些混亂、瘋狂而強烈的情緒。〈All Too Well〉後來成為她最受推崇的作品之一。',
    },
    chapters: [
      {
        title: { en: 'The colour of intense emotion', zh: '濃烈情感的顏色' },
        body: {
          en: 'Swift has explained that she named the album Red because the emotions it describes, from falling in love to heartbreak, jealousy and anger, all felt like the colour red to her: intense, overwhelming and impossible to ignore. Many of the songs were written in the aftermath of a painful breakup.',
          zh: 'Swift 解釋，她把專輯命名為《Red》，是因為專輯描述的情感，由墮入愛河到心碎、妒忌和憤怒，在她看來全都是紅色的：濃烈、壓倒一切、無法忽視。不少歌曲寫於一段痛苦分手之後。',
        },
      },
      {
        title: { en: 'Between two worlds', zh: '介乎兩個世界之間' },
        body: {
          en: 'Red mixes country, folk, arena rock and electronic pop. Swift worked with a wide range of producers for the first time, including [[Max Martin]] and [[Shellback]], [[Jeff Bhasker]], [[Dan Wilson]], [[Butch Walker]] and [[Jacknife Lee]], while still recording some songs with [[Nathan Chapman]]. Critics debated whether it was still a country album; Swift later said it was the moment she knew pop was where she was heading.',
          zh: '《Red》混合了鄉村、民謠、體育館搖滾和電子流行樂。Swift 首次與多位不同監製合作，包括 [[Max Martin]] 與 [[Shellback]]、[[Jeff Bhasker]]、[[Dan Wilson]]、[[Butch Walker]] 和 [[Jacknife Lee]]，同時仍與 [[Nathan Chapman]] 錄製部分歌曲。評論界爭論它是否仍算鄉村專輯；Swift 後來表示，那一刻她已知道自己將走向流行樂。',
        },
      },
      {
        title: { en: 'The Red Tour', zh: 'The Red Tour' },
        body: {
          en: 'The Red Tour ran from March 2013 to June 2014, with [[Ed Sheeran]] as an opening act on much of the North American leg. It featured a red-and-white circus-inspired staging for "We Are Never Ever Getting Back Together" and an acoustic moment on a small stage among the crowd.',
          zh: 'The Red Tour 由 2013 年 3 月至 2014 年 6 月舉行，[[Ed Sheeran]] 擔任北美大部分場次的開場嘉賓。演出包括以紅白色馬戲團為靈感的〈We Are Never Ever Getting Back Together〉舞台，以及在人群中小舞台上的木結他環節。',
        },
      },
      {
        title: { en: 'Recognition', zh: '肯定' },
        body: {
          en: 'Red was nominated for Album of the Year at the 2014 Grammys. Over the following decade, critics came to rank it among her very best work, largely because of "All Too Well", which many consider the finest song she has written.',
          zh: '《Red》獲得 2014 年格林美年度專輯提名。在其後十年，評論界逐漸把它列為她最出色的作品之一，很大程度上是因為〈All Too Well〉，不少人認為那是她寫過最好的歌。',
        },
      },
      {
        title: { en: 'Red (Taylor’s Version) and the ten minutes', zh: 'Red (Taylor’s Version) 與那十分鐘' },
        body: {
          en: 'The re-recording, released on 12 November 2021, added nine vault tracks, including the long-awaited ten-minute "All Too Well". Swift also released All Too Well: The Short Film, which she wrote and directed. The ten-minute version became the longest song ever to top the Hot 100, and the album debuted at number one.',
          zh: '重錄版於 2021 年 11 月 12 日推出，加入九首 vault 歌曲，包括期待已久的十分鐘版〈All Too Well〉。Swift 亦推出由她編劇及執導的《All Too Well: The Short Film》。十分鐘版成為 Hot 100 史上最長的冠軍歌，專輯亦空降榜首。',
        },
      },
    ],
    facts: [
      { en: "Re-recorded as Red (Taylor's Version), 12 November 2021, with All Too Well: The Short Film", zh: "重錄版 Red (Taylor's Version)：2021 年 11 月 12 日，同日推出 All Too Well: The Short Film" },
    ],
    photos: [
      { file: 'Taylor Swift 2013 RED tour (8588016225).jpg', year: 2013, credit: 'Jana Zills', license: 'CC BY 2.0', caption: { en: 'The Red Tour, St. Louis, March 2013', zh: 'The Red Tour，聖路易斯，2013 年 3 月' } },
      { file: 'Taylor Swift Red Tour 2, 2013.jpg', year: 2013, caption: { en: 'The Red Tour, St. Louis, 2013', zh: 'The Red Tour，聖路易斯，2013 年' } },
      { file: 'Taylor Swift RED Tour (8642419792).jpg', year: 2013, credit: 'Jana Zills', license: 'CC BY 2.0', caption: { en: 'The Red Tour, Scottrade Center, 2013', zh: 'The Red Tour，Scottrade Center，2013 年' } },
    ],
    tv: { title: "Red (Taylor's Version)", date: '2021-11-12' },
  },
  {
    slug: '1989', title: '1989', year: 2014, date: '2014-10-27', ready: true,
    theme: { bg: '#eaf3f9', bg2: '#c1dcef', ink: '#1c3347', muted: '#516b81', accent: '#3b81b9', accent2: '#deab9a', card: '#ffffff', font: 'Permanent Marker', particles: 'seagulls', dark: false },
    tagline: { en: 'Polaroids, New York City and her first official pop album', zh: '寶麗來、紐約，以及她第一張正式的流行專輯' },
    summary: {
      en: 'Named after the year she was born, 1989 was what Swift called her first documented, official pop album. Inspired by late-1980s synth-pop and her move to New York City, she made it with Max Martin as co-executive producer. It sold almost 1.29 million copies in its first US week, produced three Billboard Hot 100 number ones, and won the Grammy for Album of the Year, making her the first woman to win that award twice as a lead artist.',
      zh: '《1989》以她的出生年份命名，Swift 稱之為她「第一張有據可查、正式的流行專輯」。專輯靈感來自八十年代末的合成器流行樂，以及她遷居紐約的經歷，由她與 Max Martin 共同擔任執行監製。專輯在美國首週售出近 129 萬張，誕生三首 Billboard Hot 100 冠軍歌，並奪得格林美年度專輯，令她成為史上首位兩度以主唱身份贏得此獎的女歌手。',
    },
    chapters: [
      {
        title: { en: 'Leaving country behind', zh: '告別鄉村樂' },
        body: {
          en: 'Red had already mixed country with rock and electronic pop, and critics argued about which genre it belonged to. Swift decided the honest answer was to stop straddling the line. She has said that when she told her label she wanted to make a fully pop album, she was asked to include a few country songs to keep that audience; she declined. 1989 would be, in her words, her first documented, official pop album.',
          zh: '《Red》已把鄉村樂與搖滾、電子流行樂混合，評論界為它屬於哪種曲風爭論不休。Swift 認為最誠實的答案，就是不再兩邊兼顧。她說當她告訴唱片公司想做一張完全的流行專輯時，對方要求她保留幾首鄉村歌曲，以免流失那批聽眾；她拒絕了。用她自己的話說，《1989》是她「第一張有據可查、正式的流行專輯」。',
        },
      },
      {
        title: { en: 'A new city, a new rule', zh: '新城市，新規則' },
        body: {
          en: 'The move to New York in 2014 brought freedom and a new circle of friends, but the media scrutiny of her love life had reached a peak. In the prologue to the 2023 re-recording, she wrote that she made a decision during this period to stop dating altogether, so that no one could use it against her, and to spend her time with her friends instead. Many of the album’s songs look back on romances from before that decision, often with irony.',
          zh: '2014 年遷居紐約，為她帶來自由和一群新朋友，但傳媒對她感情生活的追擊亦達到頂峰。她在 2023 年重錄版的序言中寫道，她在這段時期決定完全停止約會，讓任何人都無法以此攻擊她，並把時間留給朋友。專輯中不少歌曲回望的，正是她作出這個決定之前的戀情，而且往往帶着反諷。',
        },
      },
      {
        title: { en: 'The sound of 1989', zh: '1989 的聲音' },
        body: {
          en: 'Swift wanted the album to evoke the synth-pop of the late 1980s: big drums, shimmering keyboards, layered vocals. [[Max Martin]] served as co-executive producer, with [[Shellback]] on many tracks. She began her partnership with [[Jack Antonoff]] here, and also worked with [[Ryan Tedder]] and [[Imogen Heap]]. The cover, a cropped Polaroid with her face cut off at the eyes and the album title handwritten below, matched the instant-camera theme of the physical edition, which came with a set of Polaroid-style photos.',
          zh: 'Swift 希望專輯能喚起八十年代末的合成器流行樂：厚重的鼓聲、閃爍的鍵盤、層疊的人聲。[[Max Martin]] 擔任聯合執行監製，[[Shellback]] 參與多首歌曲。她與 [[Jack Antonoff]] 的合作亦由此開始，另外還與 [[Ryan Tedder]] 和 [[Imogen Heap]] 合作。封面是一張只拍到她眼睛以下的寶麗來相片，下方手寫專輯名稱，與實體版附送的一套寶麗來風格相片互相呼應。',
        },
      },
      {
        title: { en: 'The 1989 World Tour', zh: '1989 世界巡迴演唱會' },
        body: {
          en: 'The tour opened at the Tokyo Dome in May 2015 and ran until December. It became known for its stream of surprise guests, from musicians to actors and athletes, who joined her on the catwalk stage, often during "Style" or "Shake It Off". The audience wore light-up wristbands that turned the stadiums into part of the show. A concert film was released on Apple Music in December 2015.',
          zh: '巡演於 2015 年 5 月在東京巨蛋揭幕，一直持續到 12 月。它以接連不斷的驚喜嘉賓見稱，由音樂人到演員和運動員，都曾登上天橋舞台與她同台，往往在〈Style〉或〈Shake It Off〉期間出場。觀眾配戴的發光手環，令整個體育場也成為演出的一部分。演唱會電影於 2015 年 12 月在 Apple Music 推出。',
        },
      },
      {
        title: { en: '1989 (Taylor’s Version)', zh: '1989 (Taylor’s Version)' },
        body: {
          en: 'The re-recording arrived on 27 October 2023, the ninth anniversary of the original, in the middle of the Eras Tour. Its cover shows Swift smiling under a blue sky full of seagulls, a lighter mood than the original’s cropped face. Five vault tracks revealed songs that had not fitted the album in 2014, and the prologue recast the era as a story about surviving scrutiny. It sold more than 1.6 million units in its first US week.',
          zh: '重錄版於 2023 年 10 月 27 日推出，正值原版九週年，亦是 Eras Tour 期間。封面是 Swift 在藍天下微笑，天空滿是海鷗，比原版只見半張臉的封面輕鬆得多。五首 vault 歌曲揭示了當年未能放進專輯的作品，序言則把這個時期重新詮釋為一個關於熬過外界審視的故事。重錄版在美國首週錄得超過 160 萬等量銷量。',
        },
      },
    ],
    facts: [
      { en: 'Announced via a Yahoo! livestream, 18 August 2014', zh: '2014 年 8 月 18 日透過 Yahoo! 網上直播宣佈' },
      { en: 'Hot 100 number ones: "Shake It Off", "Blank Space", "Bad Blood"', zh: 'Hot 100 冠軍歌：〈Shake It Off〉、〈Blank Space〉、〈Bad Blood〉' },
      { en: 'Grammys 2016: Album of the Year, Best Pop Vocal Album, Best Music Video ("Bad Blood")', zh: '2016 年格林美：年度專輯、最佳流行演唱專輯、最佳音樂錄像（〈Bad Blood〉）' },
      { en: 'The physical edition came with a set of Polaroid-style photos', zh: '實體版附送一套寶麗來風格的相片' },
      { en: "Re-recorded as 1989 (Taylor's Version), 27 October 2023, with five From the Vault tracks", zh: "重錄版 1989 (Taylor's Version)：2023 年 10 月 27 日，加入五首 From the Vault 歌曲" },
    ],
    photos: [
      { file: 'Taylor Swift - 1989 World Tour.jpg', year: 2015, credit: 'James Honeyball', license: 'CC BY-SA 2.0', caption: { en: 'The 1989 World Tour, Hyde Park, London, June 2015', zh: 'The 1989 World Tour，倫敦海德公園，2015 年 6 月' } },
      { file: 'Taylor Swift - The 1989 World Tour - LOS ANGELES - Blank Space (cropped).jpg', year: 2015, caption: { en: '"Blank Space", Los Angeles, 2015', zh: '〈Blank Space〉，洛杉磯，2015 年' } },
      { file: 'Taylor Swift - 1989 Tour Singapore - Style (23409003734).jpg', year: 2015, caption: { en: '"Style", Singapore, 2015', zh: '〈Style〉，新加坡，2015 年' } },
      { file: 'Taylor Swift - The 1989 World Tour - SANTA CLARA - Out of the Woods.jpg', year: 2015, caption: { en: '"Out of the Woods", Santa Clara, 2015', zh: '〈Out of the Woods〉，聖克拉拉，2015 年' } },
      { file: 'Taylor Swift - The 1989 World Tour - LOS ANGELES - Wildest Dreams & Enchanted.jpg', year: 2015, caption: { en: '"Wildest Dreams", Los Angeles, 2015', zh: '〈Wildest Dreams〉，洛杉磯，2015 年' } },
      { file: 'Taylor Swift 1989 Tour at Ford Field in Detroit, 5-30-15.jpg', year: 2015, caption: { en: 'Ford Field, Detroit, 30 May 2015', zh: 'Ford Field，底特律，2015 年 5 月 30 日' } },
      { file: 'Taylor Swift - The 1989 World Tour - Whole view of the stage before the show.jpg', year: 2015, caption: { en: 'The stage before the show', zh: '開場前的舞台全景' } },
      { file: 'Taylor Swift - The 1989 World Tour - Crowd at HYDE Park during Wildest Dream & Enchanted performance.jpg', year: 2015, caption: { en: 'The crowd at Hyde Park, London', zh: '倫敦海德公園的觀眾' } },
      eras('Taylor Swift The Eras Tour 1989 Era Set (53109542801).jpg', '1989 set', '1989 環節'),
      eras('Taylor Swift The Eras Tour 1989 Era Set (53109523971).jpg', '1989 set', '1989 環節'),
      eras('Taylor Swift The Eras Tour 1989 Era Set (53109525151).jpg', '1989 set', '1989 環節'),
    ],
    spotifyAlbum: '1o59UpKw81iHR0HPiSkJR0',
    tv: { title: "1989 (Taylor's Version)", date: '2023-10-27', spotifyAlbum: '1o59UpKw81iHR0HPiSkJR0' },
  },
  {
    slug: 'reputation', title: 'reputation', year: 2017, date: '2017-11-10', ready: false,
    theme: { bg: '#0c0c0c', bg2: '#202020', ink: '#f0f0f0', muted: '#a2a2a2', accent: '#cbcbcb', accent2: '#4c986a', card: '#171717', font: 'UnifrakturMaguntia', particles: 'smoke', dark: true },
    tagline: { en: 'Snakes, newsprint and a reputation reclaimed', zh: '蛇、報紙鉛字，以及奪回的名聲' },
    summary: {
      en: 'After a year away from the public eye, Swift returned with a darker, heavier electro-pop record that answered the media narratives around her. She gave almost no interviews for the album, letting the music, and a tour that became the highest-grossing in US history at the time, speak for her.',
      zh: '淡出公眾視線一年後，Swift 帶着一張更陰暗、更沉重的電子流行專輯回歸，回應媒體對她的種種描述。她為這張專輯幾乎沒有接受任何訪問，讓音樂和巡迴演唱會替她發聲；這次巡迴演唱會更成為當時美國史上票房最高的巡演。',
    },
    chapters: [
      {
        title: { en: 'The disappearance', zh: '消失' },
        body: {
          en: 'In July 2016, a dispute over [[Kanye West]]’s song "Famous" exploded online after [[Kim Kardashian]] published an edited recording of a phone call. Swift was flooded with snake emojis and accusations of lying. She withdrew from public life for about a year, later describing it as the lowest point of her life.',
          zh: '2016 年 7 月，[[Kim Kardashian]] 公開一段經剪輯的電話錄音，令一場關於 [[Kanye West]] 歌曲〈Famous〉的爭議在網上爆發。Swift 的帳戶被蛇的表情符號淹沒，並被指說謊。她其後淡出公眾生活約一年，後來形容那是她人生的最低谷。',
        },
      },
      {
        title: { en: 'Reclaiming the snake', zh: '把蛇據為己有' },
        body: {
          en: 'When she returned in August 2017, she took the insult and turned it into the era’s emblem: snake rings, snake microphones, and giant inflatable snakes on stage. The album’s artwork used black-and-white photography and newspaper-style type, as if she were writing her own headlines.',
          zh: '2017 年 8 月回歸時，她把那個侮辱變成這個時期的標誌：蛇形戒指、蛇形咪高峰，以及舞台上的巨型充氣蛇。專輯封面採用黑白攝影和報紙式字體，彷彿她在為自己撰寫頭條。',
        },
      },
      {
        title: { en: 'No interviews', zh: '不接受訪問' },
        body: {
          en: 'Swift did almost no press for reputation. Instead she published a short note with the album, saying there would be no further explanation, only reputation. The deluxe editions came as magazines filled with photographs and her own poems.',
          zh: 'Swift 幾乎沒有為《reputation》做任何宣傳訪問。她只隨專輯發表一段短文，表示不會再有更多解釋，只有《reputation》。豪華版以雜誌形式推出，載滿照片和她親筆的詩。',
        },
      },
      {
        title: { en: 'A love story underneath', zh: '底下的愛情故事' },
        body: {
          en: 'Behind the armour, many of the songs describe a new, private relationship that began during her year away, with the English actor [[Joe Alwyn]]. Swift later said that reputation was a love story at heart, and that the loud songs were the walls around it.',
          zh: '在盔甲背後，不少歌曲描述她淡出期間開始的一段新的私密感情，對象是英國演員 [[Joe Alwyn]]。Swift 後來表示，《reputation》本質上是一個愛情故事，那些響亮的歌只是包圍着它的圍牆。',
        },
      },
      {
        title: { en: 'The reputation Stadium Tour', zh: 'reputation Stadium Tour' },
        body: {
          en: 'From May to November 2018 she played stadiums across North America, Europe, Oceania and Japan, with towering snakes, a moving catwalk and floating cages. It became the highest-grossing US tour in history at the time, and one of its nights in Arlington, Texas, was released as a concert film on Netflix.',
          zh: '2018 年 5 月至 11 月，她在北美、歐洲、大洋洲和日本的體育場巡演，舞台上有高聳的巨蛇、移動的天橋和懸浮的籠子。它成為當時美國史上票房最高的巡迴演唱會，其中在德州阿靈頓的一場更以演唱會電影形式在 Netflix 推出。',
        },
      },
    ],
    facts: [
      { en: 'Lead single: "Look What You Made Me Do"', zh: '首支單曲：〈Look What You Made Me Do〉' },
      { en: 'Last album released under Big Machine Records', zh: '在 Big Machine Records 推出的最後一張專輯' },
    ],
    photos: [
      { file: 'Taylor Swift Reputation Tour1.jpg', year: 2018, caption: { en: "reputation Stadium Tour, Levi's Stadium, May 2018", zh: "reputation Stadium Tour，Levi's Stadium，2018 年 5 月" } },
      { file: 'Taylor Swift - Reputation Tour Seattle - End Game.jpg', year: 2018, caption: { en: 'reputation Stadium Tour, Seattle, May 2018', zh: 'reputation Stadium Tour，西雅圖，2018 年 5 月' } },
      eras('Taylor Swift The Eras Tour Reputation Era Set (53109853495) (cropped).jpg', 'reputation set', 'reputation 環節'),
    ],
  },
  {
    slug: 'lover', title: 'Lover', year: 2019, date: '2019-08-23', ready: false,
    theme: { bg: '#fdeaf2', bg2: '#ddeafd', ink: '#532a45', muted: '#88607a', accent: '#ee6ba5', accent2: '#7cb2f0', card: '#fff8fb', font: 'Pacifico', particles: 'hearts', dark: false },
    tagline: { en: 'Pastel skies and the first album she owns', zh: '粉彩天空，以及第一張由她擁有母帶的專輯' },
    summary: {
      en: 'Lover is a bright, romantic counterpoint to reputation, which Swift described as a love letter to love itself. It was her first album with Republic Records, and the first whose master recordings she owns outright.',
      zh: '《Lover》明亮而浪漫，與《reputation》形成對比；Swift 形容它是「寫給愛情本身的情書」。這是她加盟 Republic Records 後的首張專輯，也是她第一張完全擁有母帶版權的作品。',
    },
    chapters: [
      {
        title: { en: 'Out of the dark', zh: '走出黑暗' },
        body: {
          en: 'If reputation was night, Lover was meant to be daylight. Swift described the album as a love letter to love itself, in all its forms: giddy, anxious, domestic, political. The visual world changed completely, from black and white to pastel pinks, blues and glitter.',
          zh: '如果《reputation》是黑夜，《Lover》就是日光。Swift 形容這張專輯是寫給愛情本身的情書，包括愛的各種模樣：暈眩的、焦慮的、居家的、政治的。視覺世界完全轉變，由黑白變成粉紅、粉藍和閃粉。',
        },
      },
      {
        title: { en: 'Owning her work', zh: '擁有自己的作品' },
        body: {
          en: 'Lover was her first album under her new deal with Republic Records, which allowed her to own the master recordings of her new music. In June 2019, two months before its release, her former label Big Machine was acquired by [[Scooter Braun]]’s company, along with the masters of her first six albums. Swift objected publicly, and the dispute shaped everything that followed, including the re-recordings.',
          zh: '《Lover》是她與 Republic Records 簽訂新合約後的首張專輯，新合約讓她擁有新作品的母帶。2019 年 6 月，即專輯推出前兩個月，她的前唱片公司 Big Machine 連同她首六張專輯的母帶，被 [[Scooter Braun]] 的公司收購。Swift 公開反對，這場爭議影響了其後的一切，包括重錄計劃。',
        },
      },
      {
        title: { en: 'Speaking up', zh: '開口發聲' },
        body: {
          en: 'After years of avoiding politics, Swift endorsed candidates in Tennessee in 2018. Lover reflects that change: "You Need to Calm Down" supports LGBTQ+ rights, "The Man" confronts sexism, and "Miss Americana & the Heartbreak Prince" uses a high school to describe political disillusionment. The documentary Miss Americana, released in January 2020, showed the process behind the decision.',
          zh: '多年來迴避政治之後，Swift 在 2018 年支持田納西州的候選人。《Lover》反映了這個轉變：〈You Need to Calm Down〉支持 LGBTQ+ 權利，〈The Man〉挑戰性別歧視，〈Miss Americana & the Heartbreak Prince〉則以一所高中描寫對政治的幻滅。2020 年 1 月推出的紀錄片《Miss Americana》呈現了這個決定背後的過程。',
        },
      },
      {
        title: { en: 'Family and fear', zh: '家人與恐懼' },
        body: {
          en: 'Among the album’s joyful songs is "Soon You’ll Get Better", written about her mother’s cancer. Swift said she almost did not include it. Its presence gives the album weight: love is not only romance, but also the fear of losing the people closest to you.',
          zh: '在一眾快樂的歌曲之中，〈Soon You’ll Get Better〉寫的是她母親的癌症。Swift 說她差點沒有收錄這首歌。它的存在令專輯更有份量：愛不只是浪漫，也是害怕失去至親的恐懼。',
        },
      },
      {
        title: { en: 'Lover Fest, cancelled', zh: '被取消的 Lover Fest' },
        body: {
          en: 'Swift planned a small series of festival-style concerts called Lover Fest for 2020, but they were cancelled because of the COVID-19 pandemic. The Lover songs finally got their stage on the Eras Tour in 2023, where the Lover set opened every show.',
          zh: 'Swift 原計劃在 2020 年舉行一系列音樂節式的演唱會 Lover Fest，但因新冠疫情而取消。Lover 的歌曲終於在 2023 年的 Eras Tour 登上舞台，Lover 環節更是每場演出的開場。',
        },
      },
    ],
    facts: [
      { en: 'First album under Republic Records', zh: '加盟 Republic Records 後的首張專輯' },
      { en: 'Lover Fest concerts were cancelled because of the COVID-19 pandemic', zh: 'Lover Fest 演唱會因新冠疫情取消' },
    ],
    photos: [
      eras('Taylor Swift The Eras Tour Lover Set (53109377766).jpg', 'Lover set', 'Lover 環節'),
      eras('Taylor Swift The Eras Tour Lover Set (53108816372).jpg', 'Lover set', 'Lover 環節'),
    ],
  },
  {
    slug: 'folklore', title: 'folklore', year: 2020, date: '2020-07-24', ready: false,
    theme: { bg: '#e5e5e1', bg2: '#b2b5b1', ink: '#262926', muted: '#595e59', accent: '#4b594b', accent2: '#d7d6d2', card: '#f3f3f0', font: 'IM Fell English', particles: 'fog', dark: false },
    tagline: { en: 'A cardigan, a misty forest and stories told in lockdown', zh: '羊毛開襟衫、迷霧森林，以及封城時寫下的故事' },
    summary: {
      en: 'Written and recorded remotely during the pandemic, folklore was announced only hours before release. Working with Aaron Dessner and Jack Antonoff, Swift turned to indie folk and fictional characters, and the album won the Grammy for Album of the Year, her third.',
      zh: '《folklore》在疫情期間遙距創作和錄音，推出前數小時才公佈。Swift 與 Aaron Dessner、Jack Antonoff 合作，轉向獨立民謠，並以虛構角色說故事。專輯奪得格林美年度專輯，是她第三次獲得此獎。',
    },
    chapters: [
      {
        title: { en: 'Written in lockdown', zh: '封城中寫成' },
        body: {
          en: 'When the pandemic cancelled her plans for 2020, Swift began writing with [[Aaron Dessner]] of The National, who sent her instrumental sketches from his home studio. She also continued working with [[Jack Antonoff]]. Everyone recorded remotely, and almost no one knew the album existed until she announced it on the morning of its release.',
          zh: '疫情打亂了她 2020 年的計劃後，Swift 開始與 The National 的 [[Aaron Dessner]] 寫歌，他從家中錄音室把樂曲草稿寄給她。她亦繼續與 [[Jack Antonoff]] 合作。所有人都遙距錄音，直至她在推出當天早上宣佈之前，幾乎沒有人知道這張專輯存在。',
        },
      },
      {
        title: { en: 'Stories, not diaries', zh: '故事，而非日記' },
        body: {
          en: 'For the first time, Swift wrote mainly about characters rather than her own life: a scandalous heiress, a teenage love triangle, a soldier, a woman in an affair. She mixed these with personal songs, and invited listeners to guess which was which. The result felt like a book of short stories.',
          zh: 'Swift 首次主要寫人物，而不是寫自己的生活：一位惹人非議的女繼承人、一段少年三角戀、一名士兵、一個身陷婚外情的女人。她把這些故事與私人的歌混在一起，讓聽眾猜哪些是哪些。成品就像一本短篇小說集。',
        },
      },
      {
        title: { en: 'The sound of the woods', zh: '森林的聲音' },
        body: {
          en: 'The music moved away from big pop production towards piano, acoustic guitar, strings and soft electronics, often described as indie folk. The photographs were black and white, taken in a forest, and the cardigan became the era’s symbol.',
          zh: '音樂離開了大型流行樂製作，轉向鋼琴、木結他、弦樂和柔和的電子聲音，常被形容為獨立民謠。照片是在森林中拍攝的黑白相片，開襟毛衣成為這個時期的象徵。',
        },
      },
      {
        title: { en: 'The Long Pond Studio Sessions', zh: 'The Long Pond Studio Sessions' },
        body: {
          en: 'In November 2020 Swift released a film on Disney+ in which she, Dessner and Antonoff performed the whole album together for the first time at Long Pond Studio in upstate New York, and talked through how each song was written. It revealed that the co-writer credited as William Bowery was [[Joe Alwyn]].',
          zh: '2020 年 11 月，Swift 在 Disney+ 推出一部影片：她與 Dessner、Antonoff 首次在紐約州北部的 Long Pond 錄音室一同演唱整張專輯，並逐首講述創作經過。影片揭示署名 William Bowery 的合寫人就是 [[Joe Alwyn]]。',
        },
      },
      {
        title: { en: 'A third Album of the Year', zh: '第三座年度專輯' },
        body: {
          en: 'folklore won the Grammy for Album of the Year in March 2021, making Swift the first woman to win the award three times as a lead artist. Before that ceremony she had already released its sister album, evermore.',
          zh: '2021 年 3 月，《folklore》奪得格林美年度專輯，令 Swift 成為首位三度以主唱身份奪得此獎的女歌手。在那屆頒獎禮之前，她已推出了姊妹專輯《evermore》。',
        },
      },
    ],
    facts: [
      { en: 'Surprise release, announced the same day', zh: '突襲發行，當日才宣佈' },
      { en: 'Grammy Album of the Year (2021)', zh: '格林美年度專輯（2021 年）' },
    ],
    photos: [eras('Taylor Swift The Eras Tour The Folklore Set Era (53108930417).jpg', 'folklore set', 'folklore 環節')],
  },
  {
    slug: 'evermore', title: 'evermore', year: 2020, date: '2020-12-11', ready: false,
    theme: { bg: '#22170f', bg2: '#50331c', ink: '#f5e8d7', muted: '#c9b192', accent: '#d58a4e', accent2: '#b9a88b', card: '#2f1f14', font: 'IM Fell English SC', particles: 'snow', dark: true },
    tagline: { en: 'The sister record: winter woods and a plaid coat', zh: '姊妹專輯：冬日樹林與格子大衣' },
    summary: {
      en: 'Released less than five months after folklore, evermore continues its storytelling approach. Swift called it a sister record, explaining that she and her collaborators simply could not stop writing songs.',
      zh: '《evermore》在《folklore》推出後不足五個月面世，延續其說故事的創作手法。Swift 稱之為姊妹專輯，並解釋她與合作者根本停不了寫歌。',
    },
    chapters: [
      {
        title: { en: 'We just kept writing', zh: '停不了的創作' },
        body: {
          en: 'After folklore, Swift and [[Aaron Dessner]] kept exchanging ideas. Songs continued to arrive, and the characters seemed to have more to say. She announced evermore only the day before its release, in December 2020, calling it folklore’s sister record.',
          zh: '《folklore》之後，Swift 與 [[Aaron Dessner]] 繼續交換構思。新歌不斷出現，那些角色彷彿還有話要說。她在 2020 年 12 月推出前一天才宣佈《evermore》，稱之為《folklore》的姊妹專輯。',
        },
      },
      {
        title: { en: 'From autumn to winter', zh: '由秋入冬' },
        body: {
          en: 'If folklore felt like late summer and autumn in the woods, evermore moved into winter: plaid coats, snow, holiday parties and the long dark evenings of December. The colours turned to amber, rust and brown.',
          zh: '如果說《folklore》像林間的夏末與秋天，《evermore》則走進了冬季：格子大衣、雪、節日派對，以及十二月漫長的黑夜。色調轉為琥珀、鐵鏽與啡色。',
        },
      },
      {
        title: { en: 'A town full of characters', zh: '滿是角色的小鎮' },
        body: {
          en: 'The storytelling went further. A woman refuses a proposal; two friends solve a crime; a star returns to her hometown while an old friend writes to her; two con artists fall in love. Some songs answer each other, building a small connected world.',
          zh: '說故事的手法走得更遠：一位女子拒絕求婚；兩個朋友解決一宗罪案；一位明星回鄉，一位舊友寫信給她；兩個騙子墮入愛河。有些歌互相呼應，建構出一個相連的小世界。',
        },
      },
      {
        title: { en: 'Family and memory', zh: '家人與記憶' },
        body: {
          en: 'Among the fiction sit deeply personal songs. "marjorie" honours Swift’s grandmother, an opera singer, and includes recordings of her voice. "long story short" looks back on the hard years with a light touch.',
          zh: '在虛構故事之間，也有非常私人的歌。〈marjorie〉紀念 Swift 身為歌劇歌手的外祖母，並收錄了她的歌聲錄音。〈long story short〉則以輕鬆的筆觸回望那段艱難歲月。',
        },
      },
      {
        title: { en: 'The two sisters on tour', zh: '兩姊妹同登舞台' },
        body: {
          en: 'On the Eras Tour, evermore had its own set with a mossy stage and a glowing piano, sitting beside the folklore set. Together the two albums closed one chapter of quiet, remote work before the return to pop with Midnights.',
          zh: '在 Eras Tour 上，《evermore》擁有獨立環節：長滿青苔的舞台和發光的鋼琴，與《folklore》環節並列。兩張專輯一同為一段安靜、遙距創作的時期作結，之後她便以《Midnights》重返流行樂。',
        },
      },
    ],
    facts: [{ en: 'Second surprise album of 2020', zh: '2020 年第二張突襲發行的專輯' }],
    photos: [
      eras('Taylor Swift The Eras Tour Evermore Era Set (53109927033).jpg', 'evermore set', 'evermore 環節'),
      { file: 'Taylor Swift The Eras Tour Evermore set Champagne Problems.jpg', year: 2023, caption: { en: 'evermore set, Philadelphia, 2023', zh: 'evermore 環節，費城，2023 年' } },
    ],
  },
  {
    slug: 'midnights', title: 'Midnights', year: 2022, date: '2022-10-21', ready: false,
    theme: { bg: '#0b0f29', bg2: '#222553', ink: '#edefff', muted: '#b1b5e2', accent: '#b19ff7', accent2: '#ebbf7b', card: '#151a3e', font: 'Bodoni Moda', particles: 'stars', dark: true },
    tagline: { en: 'Thirteen sleepless nights across her life', zh: '一生中十三個不眠之夜' },
    summary: {
      en: 'Midnights is a concept album about thirteen sleepless nights scattered throughout Swift’s life. In its release week she became the first artist to occupy the entire top ten of the Billboard Hot 100, and it won Album of the Year, her record fourth.',
      zh: '《Midnights》是一張概念專輯，描寫 Swift 一生中十三個失眠的夜晚。推出當週，她成為史上首位同時包辦 Billboard Hot 100 頭十位的歌手；專輯其後奪得格林美年度專輯，是她破紀錄的第四座。',
    },
    facts: [
      { en: 'First artist to hold the entire Hot 100 top ten', zh: '史上首位包辦 Hot 100 頭十位的歌手' },
      { en: 'Grammy Album of the Year (2024), a record fourth win', zh: '格林美年度專輯（2024 年），破紀錄第四座' },
    ],
    photos: [
      eras('Taylor Swift The Eras Tour Midnights Era Set (53110112943).jpg', 'Midnights set', 'Midnights 環節'),
      { file: 'Taylor Swift Eras Tour - Arlington, TX - Midnights act (cropped).jpg', year: 2023, caption: { en: 'Midnights act, Arlington, Texas, 2023', zh: 'Midnights 環節，德州阿靈頓，2023 年' } },
    ],
  },
  {
    slug: 'the-tortured-poets-department', title: 'The Tortured Poets Department', year: 2024, date: '2024-04-19', ready: false,
    theme: { bg: '#f2ede5', bg2: '#ddd6c9', ink: '#1b1a1a', muted: '#5e5950', accent: '#33312e', accent2: '#8a7d68', card: '#faf7f2', font: 'Special Elite', particles: 'letters', dark: false },
    tagline: { en: 'Typewriters, sepia ink and raw confession', zh: '打字機、褐色墨水與赤裸的告白' },
    summary: {
      en: 'Announced during her acceptance speech at the 2024 Grammys, The Tortured Poets Department arrived with a surprise second half two hours later, The Anthology, bringing the total to 31 songs. It is a dense, literary record, and was written in large part during the Eras Tour.',
      zh: '《The Tortured Poets Department》在 2024 年格林美的得獎致辭中宣佈。推出兩小時後，她再突襲發佈下半部 The Anthology，令全碟增至 31 首歌。這是一張文字密度極高、充滿文學氣息的專輯，大部分在 Eras Tour 期間寫成。',
    },
    facts: [
      { en: 'The Anthology edition: 31 tracks', zh: 'The Anthology 版本共 31 首歌' },
      { en: 'Added as a new set on the Eras Tour in 2024', zh: '2024 年加入 Eras Tour，成為新的演出環節' },
    ],
    photos: [
      { file: 'Taylor Swift Eras Tour TTPD Set Fortnight.jpg', year: 2024, caption: { en: 'TTPD set, Paris, May 2024', zh: 'TTPD 環節，巴黎，2024 年 5 月' } },
      { file: 'Taylor Swift Eras Tour TTPD Set Down Bad.jpg', year: 2024, caption: { en: 'TTPD set, Paris, May 2024', zh: 'TTPD 環節，巴黎，2024 年 5 月' } },
    ],
  },
  {
    slug: 'the-life-of-a-showgirl', title: 'The Life of a Showgirl', year: 2025, date: '2025-10-03', ready: false,
    theme: { bg: '#082623', bg2: '#10443d', ink: '#fdf3e5', muted: '#b5d8cc', accent: '#f7812a', accent2: '#98e1cb', card: '#0e3531', font: 'Limelight', particles: 'confetti', dark: true },
    tagline: { en: 'Orange, mint green and sequins under the spotlight', zh: '橙色、薄荷綠，以及射燈下的亮片' },
    summary: {
      en: 'Swift’s twelfth album was announced in August 2025 on the New Heights podcast and reunited her with Max Martin and Shellback. Its imagery draws on showgirls and the backstage life she lived during the Eras Tour, and it set a new US record for first-week sales.',
      zh: '第十二張專輯於 2025 年 8 月在 New Heights podcast 中宣佈，她亦再次與 Max Martin、Shellback 合作。專輯的意象取材自歌舞女郎，以及她在 Eras Tour 期間的後台生活；專輯推出後，打破了美國首週銷量紀錄。',
    },
    facts: [
      { en: 'Lead single: "The Fate of Ophelia"', zh: '首支單曲：〈The Fate of Ophelia〉' },
      { en: 'Produced with Max Martin and Shellback', zh: '與 Max Martin、Shellback 合作監製' },
    ],
    photos: [
      { ...eras('Taylor Swift The Eras Tour (53109376836).jpg', 'stage', '舞台'), caption: { en: 'The Eras Tour stage, 2023 (no CC-licensed photos from the Showgirl era yet)', zh: 'The Eras Tour 舞台，2023 年（Showgirl 時期暫未有 CC 授權照片）' } },
    ],
  },
];

export const others = {
  slug: 'others', title: 'Other Works',
  theme: { bg: '#120f17', bg2: '#251e2e', ink: '#f3ece0', muted: '#c8beac', accent: '#cfac4e', accent2: '#eddda7', card: '#1c1725', font: 'Playfair Display', particles: 'sparkle' as const, dark: true },
};

export const albumBySlug = Object.fromEntries(albums.map((a) => [a.slug, a]));
