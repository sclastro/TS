import type { Song } from './types';

// 1989 (Taylor's Version) 曲目 1–13（標準版）
// 注意：為尊重版權，這裏不引用任何歌詞原文，只作主題解讀。
export const songsA: Song[] = [
  {
    slug: 'welcome-to-new-york', title: 'Welcome to New York', track: 1, section: 'standard',
    writers: ['Taylor Swift', 'Ryan Tedder'],
    single: { en: 'Promotional single, 20 October 2014', zh: '宣傳單曲，2014 年 10 月 20 日' },
    themes: {
      en: 'A wide-eyed arrival song: the city as a place of reinvention, where anyone can become whoever they want, and where love comes in every form.',
      zh: '一首初到貴境的歌：紐約是重新塑造自我的地方，任何人都可以成為想成為的人，愛情亦有千百種模樣。',
    },
    story: {
      en: 'In 2014 Swift moved to New York City, and the move shaped the whole album. She wrote the opener with [[Ryan Tedder]] to capture the feeling of starting over somewhere that felt full of possibility. She placed it first deliberately: the album begins the moment she arrives. She donated her proceeds from the song to New York City public schools.',
      zh: '2014 年，Swift 遷居紐約，這次搬遷塑造了整張專輯。她與 [[Ryan Tedder]] 合寫這首開場曲，捕捉在一個充滿可能性的地方重新出發的感覺。她刻意把它放在第一首：專輯由她抵達紐約那一刻開始。她把這首歌的收益全數捐給紐約市的公立學校。',
    },
  },
  {
    slug: 'blank-space', title: 'Blank Space', track: 2, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    single: { en: 'Second single, 10 November 2014 · Billboard Hot 100 No. 1 for seven weeks', zh: '第二支單曲，2014 年 11 月 10 日．Billboard Hot 100 冠軍七週' },
    themes: {
      en: 'Satire. The narrator is the man-eating serial dater the tabloids invented, played at full volume: charming at first, then possessive and dramatic, fully aware of how the story will end.',
      zh: '一首諷刺歌。主角正是小報虛構出來、不斷換男友的「食人花」形象，而且演得淋漓盡致：起初魅力四射，隨後佔有慾強、情緒誇張，並清楚知道故事會如何收場。',
    },
    story: {
      en: 'By 2014 the media had spent years portraying Swift as someone who dated men only to write songs about them. Instead of denying it, she decided to write from inside the caricature, exaggerating it until it became absurd. She has said many listeners missed the joke at first, which only proved her point. One line is famously misheard as the name of a coffee chain. The music video by [[Joseph Kahn]] pushes the character to cinematic extremes inside a Long Island mansion.',
      zh: '到了 2014 年，媒體多年來把 Swift 描繪成「為了寫歌才談戀愛」的人。她沒有否認，反而決定從這幅漫畫式形象的內部落筆，把它誇大至荒謬。她說很多聽眾起初沒有察覺這是反諷，這正好印證了她的觀點。歌中有一句經常被聽錯成某咖啡店的名字。[[Joseph Kahn]] 執導的 MV 在長島一座大宅內，把這個角色推向電影式的極致。',
    },
    facts: [
      { en: 'Replaced "Shake It Off" at No. 1, making Swift the first woman to succeed herself at the top of the Hot 100', zh: '接替〈Shake It Off〉登上冠軍，令 Swift 成為首位在 Hot 100 榜首「自己取代自己」的女歌手' },
      { en: 'MV won Best Pop Video and Best Female Video at the 2015 MTV VMAs', zh: 'MV 奪得 2015 年 MTV VMA 最佳流行音樂錄影帶及最佳女歌手音樂錄影帶' },
    ],
    mv: { id: 'e-ORhEE9VVg', director: 'Joseph Kahn' },
    spotifyTrack: '45wMBGri1PORPjM9PwFfrS',
  },
  {
    slug: 'style', title: 'Style', track: 3, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback', 'Ali Payami'],
    single: { en: 'Third single, 9 February 2015', zh: '第三支單曲，2015 年 2 月 9 日' },
    themes: {
      en: 'An on-again, off-again romance described as timeless fashion: two people who keep returning to each other because, like a classic look, they never quite go out of style.',
      zh: '一段分分合合的感情，被比喻為永不過時的時尚：兩個人總會回到對方身邊，就像經典造型一樣，永遠不會過時。',
    },
    story: {
      en: 'Built on a sleek, funk-tinged guitar riff that [[Ali Payami]] brought to [[Max Martin]], "Style" is the album’s coolest, most cinematic moment. Swift wanted it to feel like a late-night drive. The press widely linked it to her brief relationship with [[Harry Styles]]; Swift herself has never confirmed the subject. The video, directed by [[Kyle Newman]] and starring [[Dominic Sherwood]], uses mirrors, smoke and double exposures to suggest memory.',
      zh: '這首歌建基於 [[Ali Payami]] 帶給 [[Max Martin]] 的一段帶放克味的結他旋律，是全碟最冷峻、最有電影感的一首。Swift 希望它聽起來像深夜駕車兜風。傳媒普遍把它與她和 [[Harry Styles]] 短暫的戀情聯繫起來，但 Swift 本人從未證實歌曲寫的是誰。由 [[Kyle Newman]] 執導、[[Dominic Sherwood]] 主演的 MV，以鏡子、煙霧和雙重曝光營造回憶的感覺。',
    },
    mv: { id: '-CmadmM5cOk', director: 'Kyle Newman' },
  },
  {
    slug: 'out-of-the-woods', title: 'Out of the Woods', track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Promotional single October 2014; sixth single, 2016', zh: '2014 年 10 月宣傳單曲；2016 年成為第六支單曲' },
    themes: {
      en: 'The anxiety of a relationship that never feels safe. A repeated question asks whether the couple has finally made it through, and the song never quite answers it. Fragile memories, a snowy accident and a hospital visit surface along the way.',
      zh: '描寫一段始終不覺安穩的感情所帶來的焦慮。歌中反覆追問兩人是否終於走出困境，卻始終沒有給出答案。沿途浮現的是一些脆弱的回憶：一場雪地意外，以及一次醫院探望。',
    },
    story: {
      en: 'This was Swift’s first collaboration with [[Jack Antonoff]], who would become one of her most important creative partners. He sent her an instrumental track and she wrote the lyrics quickly, saying the music matched the way that relationship felt: every day was a struggle to hold on to something fragile. The music video, directed by [[Joseph Kahn]] and filmed in New Zealand, premiered on New Year’s Eve 2015; it shows her running through a hostile, shifting forest.',
      zh: '這是 Swift 首次與 [[Jack Antonoff]] 合作，他後來成為她最重要的創作夥伴之一。Antonoff 把一段樂曲寄給她，她很快便寫好歌詞，並說這段音樂正好吻合那段感情的感覺：每一天都在努力抓緊一些脆弱的東西。MV 由 [[Joseph Kahn]] 執導，在新西蘭拍攝，於 2015 年除夕首播，畫面是她在一片充滿敵意、不斷變幻的森林中奔跑。',
    },
    mv: { id: 'JLf9q36UsBk', director: 'Joseph Kahn' },
  },
  {
    slug: 'all-you-had-to-do-was-stay', title: 'All You Had to Do Was Stay', track: 5, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin'],
    themes: {
      en: 'An ex returns asking for another chance, and the narrator is exasperated: none of this would have been necessary if he had simply not left.',
      zh: '前度回頭要求再給一次機會，主角卻只覺氣結：如果他當初沒有離開，根本毋須走到這一步。',
    },
    story: {
      en: 'Swift has explained that the high, repeated hook came from a dream. In it, an ex showed up at her door, and when she opened her mouth to speak, the only word that came out was that single high-pitched plea. She woke up and built the song around it with [[Max Martin]].',
      zh: 'Swift 解釋，歌中那句反覆出現的高音副歌來自一個夢。她夢見前度出現在門前，當她張口想說話時，只能發出那一個高音的懇求。醒來之後，她便與 [[Max Martin]] 以此為核心寫成這首歌。',
    },
  },
  {
    slug: 'shake-it-off', title: 'Shake It Off', track: 6, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    single: { en: 'Lead single, 18 August 2014 · debuted at No. 1 on the Hot 100', zh: '首支單曲，2014 年 8 月 18 日．空降 Hot 100 冠軍' },
    themes: {
      en: 'A buoyant refusal to be defined by critics. Gossip, judgement and mockery are listed, then simply danced away.',
      zh: '一首輕快地拒絕被批評者定義的歌。流言、指點和嘲笑被逐一列出，然後一笑置之，跳舞跳走。',
    },
    story: {
      en: 'Swift said she had learned that people were going to talk about her no matter what, and that she could choose not to let it get to her. Speaking on Good Morning America on the day of release, she described living in a "takedown culture". She chose an upbeat, horn-driven pop song, written with [[Max Martin]] and [[Shellback]], to announce the new era. The video, directed by [[Mark Romanek]], shows her cheerfully failing at ballet, hip-hop, cheerleading and other dance styles, ending as herself.',
      zh: 'Swift 說，她明白無論如何別人都會議論她，而她可以選擇不受影響。發佈當日她在 Good Morning America 中形容，我們活在一種「拆台文化」之中。她選了這首與 [[Max Martin]]、[[Shellback]] 合寫、以銅管樂推動的輕快流行曲來宣告新時代的開始。[[Mark Romanek]] 執導的 MV 中，她興高采烈地嘗試芭蕾、嘻哈、啦啦隊等舞蹈，樣樣都跳不好，最後做回自己。',
    },
    facts: [
      { en: 'Nominated for Record and Song of the Year at the 2015 Grammys', zh: '2015 年格林美年度製作及年度歌曲提名' },
    ],
    mv: { id: 'nfWlot6h_JM', director: 'Mark Romanek' },
  },
  {
    slug: 'i-wish-you-would', title: 'I Wish You Would', track: 7, section: 'standard',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    themes: {
      en: 'Two estranged lovers in the middle of the night, each wishing the other would make the first move to fix things.',
      zh: '深夜裏兩個疏遠了的戀人，各自盼望對方先踏出修補關係的第一步。',
    },
    story: {
      en: 'The second [[Jack Antonoff]] collaboration on the album grew out of a guitar track he had already recorded. Swift wrote a story set at two in the morning, with one person driving past the other’s street. The pulsing, eighties-style production keeps the song restless, like a racing mind that cannot sleep.',
      zh: '這是專輯中第二首與 [[Jack Antonoff]] 合作的歌，源自他早已錄好的一段結他音軌。Swift 寫了一個發生在凌晨兩點的故事：一個人駕車經過另一個人家門前的街道。八十年代風格的脈動編曲令整首歌坐立不安，就像一個無法入睡、思緒飛馳的人。',
    },
  },
  {
    slug: 'bad-blood', title: 'Bad Blood', track: 8, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    single: { en: 'Remix featuring Kendrick Lamar released as the fourth single, May 2015 · Hot 100 No. 1', zh: '與 Kendrick Lamar 合作的混音版成為第四支單曲，2015 年 5 月．Hot 100 冠軍' },
    themes: {
      en: 'A friendship broken by betrayal, described as a wound that will not heal.',
      zh: '一段因背叛而破裂的友誼，被形容為一道無法癒合的傷口。',
    },
    story: {
      en: 'In a 2014 Rolling Stone interview, Swift said the song was about a fellow female artist who, she felt, tried to sabotage one of her tours by hiring away some of her dancers. She did not name the artist. For the single, she brought in [[Kendrick Lamar]] to add new verses, and [[Joseph Kahn]] directed an action-film video set in a stylised London, with a long list of famous friends playing assassins.',
      zh: '在 2014 年 Rolling Stone 的訪問中，Swift 表示這首歌寫的是一位女歌手，她覺得對方挖走她的部分舞蹈員，企圖破壞她的巡迴演唱會。她沒有說出對方的名字。推出單曲時，她邀請 [[Kendrick Lamar]] 加寫新段落；[[Joseph Kahn]] 則把 MV 拍成動作片，場景是風格化的倫敦，多位知名好友客串飾演殺手。',
    },
    facts: [
      { en: 'Broke Vevo’s 24-hour viewing record at release', zh: 'MV 推出時打破 Vevo 二十四小時觀看次數紀錄' },
      { en: 'Video of the Year at the 2015 MTV VMAs; Grammy for Best Music Video', zh: '2015 年 MTV VMA 年度音樂錄影帶；格林美最佳音樂錄像' },
    ],
    mv: { id: 'QcIy9NiNbmo', director: 'Joseph Kahn', note: { en: 'Single version featuring Kendrick Lamar', zh: '與 Kendrick Lamar 合作的單曲版本' } },
  },
  {
    slug: 'wildest-dreams', title: 'Wildest Dreams', track: 9, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    single: { en: 'Fifth single, 31 August 2015', zh: '第五支單曲，2015 年 8 月 31 日' },
    themes: {
      en: 'Knowing a romance will not last, the narrator asks only to be remembered beautifully, like a scene from an old film.',
      zh: '明知這段感情不會長久，主角只求被美好地記住，就像舊電影中的一幕。',
    },
    story: {
      en: 'Swift has spoken of the song’s breathy, cinematic quality, inspired by classic Hollywood romance. The video, directed by [[Joseph Kahn]] and co-starring [[Scott Eastwood]], depicts two 1950s film stars falling for each other on location in Africa; proceeds were donated to the African Parks Foundation of America. In 2021 a slowed-down version went viral on TikTok, and Swift responded by releasing the Taylor’s Version early.',
      zh: 'Swift 談及這首歌那種氣聲迷離、富電影感的質感，靈感來自荷里活經典愛情片。MV 由 [[Joseph Kahn]] 執導，[[Scott Eastwood]] 合演，講述兩位五十年代電影明星在非洲拍外景時墮入愛河；MV 收益捐給 African Parks Foundation of America。2021 年，一個放慢版本在 TikTok 爆紅，Swift 隨即提早推出這首歌的 Taylor’s Version 作為回應。',
    },
    mv: { id: 'IdneKLhsWOQ', director: 'Joseph Kahn' },
  },
  {
    slug: 'how-you-get-the-girl', title: 'How You Get the Girl', track: 10, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    themes: {
      en: 'A cheeky step-by-step guide to winning someone back after breaking their heart.',
      zh: '一份俏皮的分步指南：教你傷透對方的心之後，怎樣把她追回來。',
    },
    story: {
      en: 'Opening with bright acoustic strumming before the synths arrive, this is one of the album’s most playful songs. Swift wrote it with [[Max Martin]] and [[Shellback]] as a tongue-in-cheek instruction manual, written from the point of view of someone who knows exactly how a romantic comedy is supposed to go.',
      zh: '歌曲以明亮的木結他掃弦開始，然後才加入合成器，是全碟最俏皮的歌之一。Swift 與 [[Max Martin]]、[[Shellback]] 把它寫成一本半開玩笑的說明書，敘述者完全清楚一齣愛情喜劇應該怎樣發展。',
    },
  },
  {
    slug: 'this-love', title: 'This Love', track: 11, section: 'standard',
    writers: ['Taylor Swift'],
    themes: {
      en: 'Love compared to the tide: it goes out, and it comes back.',
      zh: '把愛情比作潮汐：退去，然後再回來。',
    },
    story: {
      en: 'The only song on 1989 written by Swift alone, "This Love" began life as a poem. She turned it into a song and produced it with her longtime collaborator [[Nathan Chapman]], the producer of her early albums. Its Taylor’s Version was released early, in May 2022, after appearing in the trailer for the series The Summer I Turned Pretty.',
      zh: '〈This Love〉是《1989》中唯一一首由 Swift 獨力創作的歌，最初是一首詩。她把詩改寫成歌，並與長期合作的 [[Nathan Chapman]] 一同監製；Chapman 正是她早期專輯的監製。這首歌的 Taylor’s Version 在劇集 The Summer I Turned Pretty 的預告片中出現後，於 2022 年 5 月提早推出。',
    },
  },
  {
    slug: 'i-know-places', title: 'I Know Places', track: 12, section: 'standard',
    writers: ['Taylor Swift', 'Ryan Tedder'],
    themes: {
      en: 'Lovers as foxes hunted by the press. The narrator promises she knows where they can hide.',
      zh: '一對戀人好比被傳媒追獵的狐狸，主角承諾她知道可以躲在哪裏。',
    },
    story: {
      en: 'Written with [[Ryan Tedder]], this song turns the experience of being followed by photographers into a dark chase, with the paparazzi as hunters. Swift has said that when you are in the public eye, a relationship can feel like something you have to protect from the world.',
      zh: '這首歌與 [[Ryan Tedder]] 合寫，把被攝影師跟蹤的經歷寫成一場陰暗的追逐，狗仔隊就是獵人。Swift 說，身為公眾人物，一段感情往往像是需要保護、不讓外界傷害的東西。',
    },
  },
  {
    slug: 'clean', title: 'Clean', track: 13, section: 'standard',
    writers: ['Taylor Swift', 'Imogen Heap'],
    themes: {
      en: 'Getting over someone described like recovering from an addiction; the closing image is of finally being free.',
      zh: '把放下一個人比作戒除癮癖；結尾的意象，是終於重獲自由。',
    },
    story: {
      en: 'Swift wrote the closing track in London and recorded it with [[Imogen Heap]], whose layered, experimental sound she had long admired. She described the song as being about the moment you realise you no longer miss someone. Ending the album here was intentional: after the excitement of arriving in New York, the story closes with a quiet sense of renewal.',
      zh: 'Swift 在倫敦寫下這首壓軸歌，並與 [[Imogen Heap]] 一同錄製；她一直欣賞 Heap 多層次而具實驗性的聲音。她形容這首歌寫的是你察覺自己不再思念某人的那一刻。以這首歌結束專輯是刻意的安排：初到紐約的興奮過後，故事在寧靜的新生感中落幕。',
    },
  },
];
