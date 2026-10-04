import type { Interview } from './types';

// YouTube 影片 ID 均已逐一核實；文章類訪問以 url 連結
export const interviews: Interview[] = [
  {
    id: 'grammys-2016', date: '2016-02-15', outlet: 'The GRAMMYs', album: '1989',
    title: { en: 'Album of the Year acceptance speech for 1989', zh: '《1989》奪得年度專輯的得獎致辭' },
    summary: {
      en: 'As the first woman to win Album of the Year twice, Swift urged young women to focus on the work and not let people who try to take credit for their success sidetrack them.',
      zh: '作為首位兩度奪得年度專輯的女歌手，Swift 勉勵年輕女性專注於自己的工作，不要讓那些試圖搶走她們成就的人令自己分心。',
    },
    url: 'https://www.grammy.com/video/taylor-swift-1989-album-of-the-year-win-2016-grammys-acceptance-speech/',
  },
  {
    id: 'vogue-73', date: '2016-04', outlet: 'Vogue', album: '1989',
    title: { en: '73 Questions', zh: '「73 條問題」' },
    summary: {
      en: 'Filmed during Grammy week at her Beverly Hills home, at the end of the 1989 era: rapid-fire questions on her habits, her cats and advice to her younger self.',
      zh: '在格林美頒獎週於她比華利山的家中拍攝，正值《1989》時期尾聲：連珠炮發問她的生活習慣、她的貓，以及她會給年輕時的自己甚麼忠告。',
    },
    youtube: 'XnbCSboujF4',
  },
  {
    id: 'time-1989', date: '2023-10', outlet: 'TIME', album: '1989',
    title: { en: 'How 1989 changed Taylor Swift’s career forever', zh: '《1989》如何永遠改變了她的事業' },
    summary: {
      en: 'A retrospective published for the release of 1989 (Taylor’s Version), looking at the album’s pop pivot and its legacy.',
      zh: '配合《1989 (Taylor’s Version)》推出而刊登的回顧文章，探討這張專輯的流行樂轉型及其影響。',
    },
    url: 'https://time.com/6328790/taylor-swift-1989-2/',
  },
  {
    id: 'zane-lowe-me', date: '2019-05-01', outlet: 'Apple Music', album: 'lover',
    title: { en: '"ME!" interview with Zane Lowe', zh: '與 Zane Lowe 談〈ME!〉' },
    summary: {
      en: 'A FaceTime conversation on the day the Lover era began, about working with Brendon Urie and moving from the darkness of reputation into a brighter, playful sound.',
      zh: 'Lover 時期揭幕當日的 FaceTime 對談，談及與 Brendon Urie 合作，以及由《reputation》的陰暗走向明亮、俏皮的曲風。',
    },
    youtube: 'ayE6aGP-3Yw',
  },
  {
    id: 'miss-americana', date: '2020-01-31', outlet: 'Netflix', album: 'lover',
    title: { en: 'Miss Americana (documentary)', zh: '紀錄片《Miss Americana》' },
    summary: {
      en: 'Directed by Lana Wilson, the documentary follows Swift through the making of Lover, her struggles with public scrutiny, and her decision to speak publicly about politics.',
      zh: '由 Lana Wilson 執導，記錄 Swift 製作《Lover》的過程、她在公眾目光下的掙扎，以及她決定公開談論政治的經過。',
    },
    url: 'https://www.netflix.com/title/81028336',
  },
  {
    id: 'nyu-2022', date: '2022-05-18', outlet: 'New York University', album: 'midnights',
    title: { en: 'NYU commencement address', zh: '紐約大學畢業典禮致辭' },
    summary: {
      en: 'After receiving an honorary Doctor of Fine Arts, Swift addressed the Class of 2022 at Yankee Stadium on making mistakes, learning to live alongside cringe, and choosing joy.',
      zh: 'Swift 獲頒榮譽藝術博士學位後，在洋基球場向 2022 年畢業生致辭，談犯錯、學會與尷尬共存，以及選擇快樂。',
    },
    youtube: 'OBG50aoUwlI',
  },
  {
    id: 'time-poy-2023', date: '2023-12-06', outlet: 'TIME',
    title: { en: 'Person of the Year 2023', zh: 'TIME 2023 年度風雲人物' },
    summary: {
      en: 'Her first in-depth interview in nearly four years, with Sam Lansky: the Eras Tour, the re-recordings, and how she describes 2023 as the breakthrough moment of her career.',
      zh: '她近四年來首次深度專訪，由 Sam Lansky 主筆：談 Eras Tour、重錄計劃，以及她為何形容 2023 年是她事業的突破時刻。',
    },
    url: 'https://time.com/6342806/person-of-the-year-2023-taylor-swift/',
  },
  {
    id: 'rolling-stone-2019', date: '2019-09-18', outlet: 'Rolling Stone', album: 'lover',
    title: { en: 'The Rolling Stone Interview', zh: '《Rolling Stone》封面專訪' },
    summary: {
      en: 'A long conversation with Brian Hiatt, begun in her mother’s kitchen in Nashville, about the hard road from reputation to Lover, the years of public hostility, and how close she came to stepping away from music.',
      zh: '與 Brian Hiatt 的長篇對談，由她母親在納什維爾的廚房開始，談由《reputation》走到《Lover》的艱難路程、多年的公眾敵意，以及她曾經多麼接近離開樂壇。',
    },
    url: 'https://www.rollingstone.com/music/music-features/taylor-swift-rolling-stone-interview-880794/',
  },
  {
    id: 'billboard-2019', date: '2019-12-12', outlet: 'Billboard', album: 'lover',
    title: { en: 'Woman of the Decade speech, Women in Music', zh: 'Billboard Women in Music「十年代女性」得獎致辭' },
    summary: {
      en: 'Accepting the first Woman of the Decade award, Swift spoke for more than fifteen minutes about sexism in the music industry, unfair business practices, and the right of artists to own their work, including the sale of her masters.',
      zh: 'Swift 領取首屆「十年代女性」獎時，發表超過十五分鐘的演說，談音樂業的性別歧視、不公平的商業手法，以及藝人擁有自己作品的權利，包括她的母帶被出售一事。',
    },
    url: 'https://www.billboard.com/music/awards/taylor-swift-woman-of-the-decade-speech-billboard-women-in-music-8546156/',
  },
  {
    id: 'tribeca-2022', date: '2022-06-11', outlet: 'Tribeca Festival', album: 'red', songs: ['all-too-well-10-minute-version'],
    title: { en: 'In conversation about All Too Well: The Short Film', zh: '談《All Too Well: The Short Film》' },
    summary: {
      en: 'After a screening at New York’s Beacon Theatre, Swift talked with the director Mike Mills about writing and directing the film, reclaiming her music, and her hopes to direct a feature, then performed the song live.',
      zh: '在紐約 Beacon Theatre 放映後，Swift 與導演 Mike Mills 對談，講述編寫及執導這部短片的經過、奪回自己的音樂，以及日後執導長片的期望，最後現場演唱這首歌。',
    },
    url: 'https://deadline.com/2022/06/taylor-swift-reclaiming-her-music-directing-all-too-well-feature-film-tribeca-festival-1235043434/',
  },
  {
    id: 'new-heights-2025', date: '2025-08-13', outlet: 'New Heights', album: 'the-life-of-a-showgirl',
    title: { en: 'The Taylor Swift episode', zh: '《New Heights》Taylor Swift 特輯' },
    summary: {
      en: 'Her first long interview since 2023, with Travis and Jason Kelce. She revealed the cover, tracklist and release date of The Life of a Showgirl and talked about owning her masters. The video drew a record 13 million YouTube views in a day.',
      zh: '她自 2023 年以來首次長篇訪問，與 Travis 及 Jason Kelce 對談。她揭曉《The Life of a Showgirl》的封面、曲目和推出日期，並談及擁有自己的母帶。影片一日內在 YouTube 錄得破紀錄的一千三百萬次觀看。',
    },
    url: 'https://podcasts.apple.com/us/podcast/the-taylor-swift-episode/id1643745036?i=1000721865340',
  },
  {
    id: 'graham-norton-2025', date: '2025-10-03', outlet: 'BBC · The Graham Norton Show', album: 'the-life-of-a-showgirl',
    title: { en: 'On the night of the release', zh: '專輯推出當晚的訪問' },
    summary: {
      en: 'Swift appeared on the sofa on the day The Life of a Showgirl came out, alongside actors including Cillian Murphy, talking about the album and life after the Eras Tour.',
      zh: '《The Life of a Showgirl》推出當日，Swift 與 Cillian Murphy 等演員同場上節目，談新專輯及 Eras Tour 之後的生活。',
    },
    url: 'https://www.bbc.co.uk/programmes/m002k7rj',
  },
  {
    id: 'seth-meyers-2025', date: '2025-10-08', outlet: 'Late Night with Seth Meyers', album: 'the-life-of-a-showgirl',
    title: { en: 'The Life of a Showgirl, the engagement and more', zh: '談《The Life of a Showgirl》、訂婚及其他' },
    summary: {
      en: 'As the only guest of the night, Swift talked at length about the new album, its record-breaking release and her engagement to Travis Kelce.',
      zh: 'Swift 是當晚唯一嘉賓，詳談新專輯、專輯破紀錄的發行，以及她與 Travis Kelce 訂婚。',
    },
    youtube: 'Wd7S1wZqkbI',
  },
];

export const interviewById = Object.fromEntries(interviews.map((i) => [i.id, i]));
