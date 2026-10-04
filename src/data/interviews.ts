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
];

export const interviewById = Object.fromEntries(interviews.map((i) => [i.id, i]));
