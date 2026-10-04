import type { Album, Photo } from './types';

const PV = 'Paolo Villanueva';
const eras = (file: string, en: string, zh: string): Photo => ({
  file, credit: PV, license: 'CC BY 2.0', year: 2023,
  caption: { en: `The Eras Tour, SoFi Stadium, Aug 2023 — ${en}`, zh: `The Eras Tour，SoFi Stadium，2023 年 8 月：${zh}` },
});

export const albums: Album[] = [
  {
    slug: 'taylor-swift', title: 'Taylor Swift', year: 2006, date: '2006-10-24', ready: false,
    theme: { bg: '#e6f3ee', bg2: '#b7ded3', ink: '#123b36', muted: '#3f6b64', accent: '#2a8c7f', accent2: '#c9a86a', card: '#f8fffc', font: 'Satisfy', particles: 'butterflies', dark: false },
    tagline: { en: 'A girl, a guitar and a notebook full of songs', zh: '一個女孩、一支結他、一本寫滿歌的筆記簿' },
    summary: {
      en: 'Released when Swift was sixteen, her debut introduced a teenage songwriter who wrote or co-wrote every track. Country radio embraced singles such as "Tim McGraw", "Teardrops on My Guitar" and "Our Song", the last making her the youngest person at the time to solely write and perform a number-one country hit.',
      zh: '這張出道專輯推出時，Swift 只有十六歲，每一首歌都由她親自創作或參與創作。〈Tim McGraw〉、〈Teardrops on My Guitar〉、〈Our Song〉等單曲深受鄉村電台歡迎；其中〈Our Song〉令她成為當時最年輕、獨力包辦詞曲並主唱鄉村榜冠軍歌的歌手。',
    },
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
    theme: { bg: '#1c1405', bg2: '#4d3812', ink: '#fff4d8', muted: '#d8bf8c', accent: '#f2c94c', accent2: '#fff1b8', card: '#2a1e09', font: 'Cinzel Decorative', particles: 'glitter', dark: true },
    tagline: { en: 'Fairy tales, golden hair and the first Album of the Year', zh: '童話、金髮與第一座年度專輯大獎' },
    summary: {
      en: 'Fearless turned Swift from a country newcomer into a global star. "Love Story" and "You Belong with Me" crossed over to pop radio, and the album won four Grammys including Album of the Year, making her, at twenty, the youngest winner of that award at the time.',
      zh: '《Fearless》令 Swift 由鄉村樂壇新人躍升為國際巨星。〈Love Story〉和〈You Belong with Me〉打入流行樂電台，專輯奪得四項格林美獎，包括年度專輯；當年她只有二十歲，是該獎項史上最年輕的得主。',
    },
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
    theme: { bg: '#1b0a2b', bg2: '#4e1f73', ink: '#f7ecff', muted: '#cdb3e6', accent: '#c58cff', accent2: '#ffd6f5', card: '#2a1240', font: 'Pinyon Script', particles: 'magic', dark: true },
    tagline: { en: 'Every word written by her alone', zh: '每一個字，都由她獨力寫成' },
    summary: {
      en: 'Swift wrote every song on Speak Now by herself, partly to answer critics who doubted her songwriting. The album is a set of confessions addressed to people she had never spoken to directly, framed in sweeping, theatrical arrangements.',
      zh: '《Speak Now》全碟歌曲都由 Swift 獨力創作，某程度上是回應質疑她創作能力的評論。整張專輯好比一封封從未當面說出口的信，配上恢宏而富戲劇感的編曲。',
    },
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
    theme: { bg: '#2a0507', bg2: '#7c1018', ink: '#fff1ea', muted: '#e7b8a8', accent: '#e23b3b', accent2: '#f5d0a9', card: '#3a0a0d', font: 'Abril Fatface', particles: 'leaves', dark: true },
    tagline: { en: 'Autumn leaves, a scarf and the colour of intense emotion', zh: '秋葉、圍巾，以及最濃烈的情感顏色' },
    summary: {
      en: 'Red mixes country, rock and electronic pop, and marks Swift’s first work with producers Max Martin and Shellback. She described the album as being about the tumultuous, crazy, intense feelings of falling in and out of love. "All Too Well" later became one of her most celebrated songs.',
      zh: '《Red》融合鄉村、搖滾和電子流行樂，亦是 Swift 首次與監製 Max Martin、Shellback 合作。她形容這張專輯描寫的是戀愛與失戀之間那些混亂、瘋狂而強烈的情緒。〈All Too Well〉後來成為她最受推崇的作品之一。',
    },
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
    theme: { bg: '#e3f1fb', bg2: '#a8d2ee', ink: '#1b3850', muted: '#4c6c86', accent: '#2f7fbf', accent2: '#e7b3a2', card: '#ffffff', font: 'Permanent Marker', particles: 'seagulls', dark: false },
    tagline: { en: 'Polaroids, New York City and her first official pop album', zh: '寶麗來、紐約，以及她第一張正式的流行專輯' },
    summary: {
      en: 'Named after the year she was born, 1989 was what Swift called her first documented, official pop album. Inspired by late-1980s synth-pop and her move to New York City, she made it with Max Martin as co-executive producer. It sold almost 1.29 million copies in its first US week, produced three Billboard Hot 100 number ones, and won the Grammy for Album of the Year, making her the first woman to win that award twice as a lead artist.',
      zh: '《1989》以她的出生年份命名，Swift 稱之為她「第一張有據可查、正式的流行專輯」。專輯靈感來自八十年代末的合成器流行樂，以及她遷居紐約的經歷，由她與 Max Martin 共同擔任執行監製。專輯在美國首週售出近 129 萬張，誕生三首 Billboard Hot 100 冠軍歌，並奪得格林美年度專輯，令她成為史上首位兩度以主唱身份贏得此獎的女歌手。',
    },
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
    theme: { bg: '#0a0a0a', bg2: '#262626', ink: '#f1f1f1', muted: '#a6a6a6', accent: '#d0d0d0', accent2: '#3f9f66', card: '#151515', font: 'UnifrakturMaguntia', particles: 'smoke', dark: true },
    tagline: { en: 'Snakes, newsprint and a reputation reclaimed', zh: '蛇、報紙鉛字，以及奪回的名聲' },
    summary: {
      en: 'After a year away from the public eye, Swift returned with a darker, heavier electro-pop record that answered the media narratives around her. She gave almost no interviews for the album, letting the music, and a tour that became the highest-grossing in US history at the time, speak for her.',
      zh: '淡出公眾視線一年後，Swift 帶着一張更陰暗、更沉重的電子流行專輯回歸，回應媒體對她的種種描述。她為這張專輯幾乎沒有接受任何訪問，讓音樂和巡迴演唱會替她發聲；這次巡迴演唱會更成為當時美國史上票房最高的巡演。',
    },
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
    theme: { bg: '#ffe3ef', bg2: '#cfe5ff', ink: '#5a2a4a', muted: '#8a5a7a', accent: '#ff6fae', accent2: '#7fbcff', card: '#fff6fb', font: 'Pacifico', particles: 'hearts', dark: false },
    tagline: { en: 'Pastel skies and the first album she owns', zh: '粉彩天空，以及第一張由她擁有母帶的專輯' },
    summary: {
      en: 'Lover is a bright, romantic counterpoint to reputation, which Swift described as a love letter to love itself. It was her first album with Republic Records, and the first whose master recordings she owns outright.',
      zh: '《Lover》明亮而浪漫，與《reputation》形成對比；Swift 形容它是「寫給愛情本身的情書」。這是她加盟 Republic Records 後的首張專輯，也是她第一張完全擁有母帶版權的作品。',
    },
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
    theme: { bg: '#dcdcd8', bg2: '#8e938e', ink: '#262926', muted: '#545954', accent: '#3f4c40', accent2: '#ffffff', card: '#efefec', font: 'IM Fell English', particles: 'fog', dark: false },
    tagline: { en: 'A cardigan, a misty forest and stories told in lockdown', zh: '羊毛開襟衫、迷霧森林，以及封城時寫下的故事' },
    summary: {
      en: 'Written and recorded remotely during the pandemic, folklore was announced only hours before release. Working with Aaron Dessner and Jack Antonoff, Swift turned to indie folk and fictional characters, and the album won the Grammy for Album of the Year, her third.',
      zh: '《folklore》在疫情期間遙距創作和錄音，推出前數小時才公佈。Swift 與 Aaron Dessner、Jack Antonoff 合作，轉向獨立民謠，並以虛構角色說故事。專輯奪得格林美年度專輯，是她第三次獲得此獎。',
    },
    facts: [
      { en: 'Surprise release, announced the same day', zh: '突襲發行，當日才宣佈' },
      { en: 'Grammy Album of the Year (2021)', zh: '格林美年度專輯（2021 年）' },
    ],
    photos: [eras('Taylor Swift The Eras Tour The Folklore Set Era (53108930417).jpg', 'folklore set', 'folklore 環節')],
  },
  {
    slug: 'evermore', title: 'evermore', year: 2020, date: '2020-12-11', ready: false,
    theme: { bg: '#2a1a10', bg2: '#744624', ink: '#f7ead8', muted: '#d2b896', accent: '#de8a4b', accent2: '#c7a17a', card: '#382315', font: 'IM Fell English SC', particles: 'snow', dark: true },
    tagline: { en: 'The sister record: winter woods and a plaid coat', zh: '姊妹專輯：冬日樹林與格子大衣' },
    summary: {
      en: 'Released less than five months after folklore, evermore continues its storytelling approach. Swift called it a sister record, explaining that she and her collaborators simply could not stop writing songs.',
      zh: '《evermore》在《folklore》推出後不足五個月面世，延續其說故事的創作手法。Swift 稱之為姊妹專輯，並解釋她與合作者根本停不了寫歌。',
    },
    facts: [{ en: 'Second surprise album of 2020', zh: '2020 年第二張突襲發行的專輯' }],
    photos: [
      eras('Taylor Swift The Eras Tour Evermore Era Set (53109927033).jpg', 'evermore set', 'evermore 環節'),
      { file: 'Taylor Swift The Eras Tour Evermore set Champagne Problems.jpg', year: 2023, caption: { en: 'evermore set, Philadelphia, 2023', zh: 'evermore 環節，費城，2023 年' } },
    ],
  },
  {
    slug: 'midnights', title: 'Midnights', year: 2022, date: '2022-10-21', ready: false,
    theme: { bg: '#0a0f2e', bg2: '#2b2e6e', ink: '#eef0ff', muted: '#b7bbe8', accent: '#b9a7ff', accent2: '#f2c27b', card: '#141a44', font: 'Bodoni Moda', particles: 'stars', dark: true },
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
    theme: { bg: '#f1ece3', bg2: '#d6cec0', ink: '#1a1a1a', muted: '#5a554c', accent: '#2a2a2a', accent2: '#8a7d6a', card: '#faf7f1', font: 'Special Elite', particles: 'letters', dark: false },
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
    theme: { bg: '#05302b', bg2: '#0f5b51', ink: '#fff4e6', muted: '#bfe3d6', accent: '#ff7a1a', accent2: '#9fe8d2', card: '#0a3e38', font: 'Limelight', particles: 'confetti', dark: true },
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
  theme: { bg: '#120d1c', bg2: '#2d2240', ink: '#f6efe3', muted: '#c9bda8', accent: '#d4af37', accent2: '#f3e5ab', card: '#1d1530', font: 'Playfair Display', particles: 'sparkle' as const, dark: true },
};

export const albumBySlug = Object.fromEntries(albums.map((a) => [a.slug, a]));
