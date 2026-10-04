import type { Song } from '../types';

// The Life of a Showgirl: The Encore（2026）：第 13–16 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TMS = ['Taylor Swift', 'Max Martin', 'Shellback'];

export const part3: Song[] = [
  {
    slug: 'patient-zero', title: 'Patient Zero', track: 13, section: 'encore',
    writers: TMS, producers: TMS,
    single: { en: 'Lead single of The Encore, 25 September 2026', zh: '《The Encore》首支單曲，2026 年 9 月 25 日' },
    overview: {
      en: 'A tense song shaped like one side of a phone call: an ex’s new partner calls the narrator, who recognises every symptom because she was the first to suffer them.',
      zh: '一首緊張的歌，形式猶如一通電話的其中一方：前度的新伴侶打電話來，而敘述者認得每一個「病徵」，因為她正是第一個受害的人。',
    },
    context: {
      en: 'Almost a year after The Life of a Showgirl, Swift returned with The Encore, an expanded edition with four new songs. She wrote them in Sweden with [[Max Martin]] and [[Shellback]] after the album’s record-breaking first week, describing them as born out of gratitude to her fans. The four-song expansion became the biggest debut for a deluxe album in Spotify’s history.',
      zh: '《The Life of a Showgirl》推出差不多一年後，Swift 推出加長版《The Encore》，加入四首新歌。專輯首週打破紀錄後，她回到瑞典與 [[Max Martin]] 和 [[Shellback]] 寫成這些歌，形容它們源自對歌迷的感激。這四首新歌令《The Encore》成為 Spotify 史上首日成績最佳的加長版專輯。',
    },
    story: {
      en: 'Swift explained that the idea came from a real conversation among friends about receiving unexpected calls from the new partners of their exes. "Patient zero" is the term for the first person in an outbreak: the narrator was the first to be harmed by this man, and now she hears the same story again.\n\nThe song is less about romance than about solidarity between women who have been hurt by the same person.',
      zh: 'Swift 解釋，構思源自朋友之間一次真實的對話：她們都曾意外接到前度新伴侶的來電。「Patient zero」是指一場疫症中的第一位患者：敘述者是第一個被這個男人傷害的人，如今再次聽到同樣的故事。\n\n這首歌與其說關於愛情，不如說是關於被同一個人傷害過的女性之間的互相扶持。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'The phone rings, and a stranger begins describing a relationship that sounds painfully familiar.', zh: '電話響起，一個陌生人開始描述一段聽來熟悉得令人心痛的關係。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'She explains that she was the first to catch this sickness, and she knows how it progresses.', zh: '她解釋自己是第一個「染病」的人，知道病情會怎樣發展。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She urges the caller to get out while she still can.', zh: '她勸告來電者趁還來得及便離開。' } },
    ],
    mv: {
      id: 'mw3kSNIxjqo', director: 'Taylor Swift', date: '2026-09-29',
      note: { en: 'Premiered at the 2026 MTV Video Music Awards on 27 September, then posted on YouTube. With [[Dakota Johnson]], [[Colin Farrell]] and [[Cara Delevingne]]; cinematography by [[Emmanuel Lubezki]].', zh: '2026 年 9 月 27 日在 MTV 音樂錄像頒獎禮首播，其後上載 YouTube。演員包括 [[Dakota Johnson]]、[[Colin Farrell]] 及 [[Cara Delevingne]]；攝影指導為 [[Emmanuel Lubezki]]。' },
      scenes: [
        { scene: { en: 'The cold house', zh: '冰冷的大宅' }, meaning: { en: 'A woman (Dakota Johnson) lives with a charming man (Colin Farrell) in a grand, chilly house. Swift said the house stands for the coldness of a relationship that has faded.', zh: '一位女子（Dakota Johnson）與一個迷人的男人（Colin Farrell）住在一所宏偉卻冰冷的大宅。Swift 說，這所房子象徵一段已褪色的感情的冷漠。' } },
        { scene: { en: 'The watcher', zh: '旁觀者' }, meaning: { en: 'Swift appears nearby, dressed exactly like the woman, as if she has lived this life before.', zh: 'Swift 在旁出現，衣着與那女子一模一樣，彷彿她曾經活過同樣的人生。' } },
        { scene: { en: 'The illness', zh: '病' }, meaning: { en: 'The woman grows mysteriously sick as the relationship worsens: the "infection" of the title made literal.', zh: '隨着關係惡化，女子莫名其妙地病倒：把歌名的「感染」直接呈現。' } },
        { scene: { en: 'The twist', zh: '反轉' }, meaning: { en: 'The ending reveals that Swift’s character is a ghost, who suffered the same fate and has come back to warn the next woman to run. Swift said she drew on gothic ghost stories, true crime and psychological thrillers.', zh: '結局揭示 Swift 的角色原來是鬼魂：她曾遭遇同一命運，回來警告下一個女子快逃。Swift 說她參考了哥德式鬼故事、真實罪案和心理驚悚片。' } },
      ],
    },
    echoes: [
      { ref: 'evermore/no-body-no-crime', note: { en: 'Women uncovering a dangerous man’s secrets, told as a thriller.', zh: '女性揭發危險男人的秘密，以驚悚故事講述。' } },
      { ref: 'midnights/vigilante-shit', note: { en: 'Helping another woman escape a bad man.', zh: '幫助另一個女人逃離壞男人。' } },
      { ref: 'midnights/anti-hero', note: { en: 'Another video in which Swift appears as a ghost.', zh: '另一支 Swift 以鬼魂形象出現的 MV。' } },
    ],
  },
  {
    slug: 'cleveland', title: 'Cleveland!', track: 14, section: 'encore',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A joyful, defiant love song named after her husband’s hometown, answering the critics with happiness.',
      zh: '一首歡欣而帶點挑釁的情歌，以丈夫的家鄉命名，以幸福回應批評者。',
    },
    story: {
      en: '[[Travis Kelce]] grew up in Cleveland Heights, Ohio. In the song, being taken to someone’s hometown and shown the house where they grew up is a sign of how serious the love has become.\n\nThe "Heights" also nods to New Heights, the podcast where Swift announced the album. Later in the song the chorus changes to refer to their wedding in July 2026.',
      zh: '[[Travis Kelce]] 在俄亥俄州 Cleveland Heights 長大。在歌中，被帶到對方的家鄉、看他成長的房子，象徵這份愛已變得多麼認真。\n\n「Heights」一字亦暗指她宣佈這張專輯的 podcast《New Heights》。歌曲後段，副歌改為指涉二人 2026 年 7 月的婚禮。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Critics list her supposed flaws; her partner loves exactly those things.', zh: '批評者列出她所謂的缺點；她的伴侶卻正正喜愛這些地方。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'He has shown her where he comes from, and that settles it: whatever anyone says, this is the love of her life.', zh: '他已帶她看過自己成長的地方，一切再無疑問：無論別人怎樣說，這就是她一生所愛。' } },
      { part: { en: 'Final chorus', zh: '最後副歌' }, meaning: { en: 'The chorus returns, now referring to their wedding.', zh: '副歌再現，這次指向二人的婚禮。' } },
    ],
    echoes: [
      { ref: 'lover/london-boy', note: { en: 'Another love song built on a partner’s home city.', zh: '另一首以伴侶家鄉城市為題的情歌。' } },
      { ref: 'the-life-of-a-showgirl/opalite', note: { en: 'The same love, now married.', zh: '同一段愛情，如今已成婚。' } },
      { ref: 'the-tortured-poets-department/so-high-school', note: { en: 'The giddy start of the relationship, two years earlier.', zh: '兩年前，這段感情雀躍的開端。' } },
    ],
  },
  {
    slug: 'pink-clouding', title: 'Pink Clouding', track: 15, section: 'encore',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A regretful song that borrows a term from addiction recovery to describe rushing into a relationship before she was ready, and the apology she never gave.',
      zh: '一首充滿懊悔的歌，借用戒癮康復的術語，描述自己未準備好便投入一段感情，以及從未說出口的道歉。',
    },
    story: {
      en: '"Pink clouding" describes the early stage of recovery when a person feels a burst of euphoria, often followed by a crash when reality returns. Swift uses it for a relationship that began just after a painful period, when the thrill felt like healing but was not.\n\nThe song is an apology to a good person who was hurt in the process. Swift has not said who it is about.',
      zh: '「Pink clouding」指戒癮康復初期一陣強烈的欣快感，往往在現實回歸時隨之崩落。Swift 以此形容一段在痛苦時期剛過便開始的感情：那份興奮看似是痊癒，其實不是。\n\n這首歌是向一個在過程中受傷的好人道歉。Swift 沒有透露歌曲寫的是誰。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She had just come out of something hard and leapt into something new.', zh: '她剛走出一段艱難的日子，便跳進新的感情。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Years later she still wonders how to say sorry for leaving him behind.', zh: '多年後，她仍在想該如何為丟下他而道歉。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She worries that she hurt someone who did not deserve it.', zh: '她擔心自己傷害了一個不應受傷的人。' } },
    ],
    echoes: [
      { ref: 'speak-now/back-to-december', note: { en: 'Her first great apology song, sixteen years earlier.', zh: '十六年前，她第一首重要的道歉之歌。' } },
      { ref: 'the-tortured-poets-department/fresh-out-the-slammer', note: { en: 'Running straight into something new after leaving something hard.', zh: '離開艱難的關係後，直奔新的感情。' } },
    ],
  },
  {
    slug: 'babylon', title: 'Babylon', track: 16, section: 'encore',
    writers: TMS, producers: TMS,
    overview: {
      en: 'The final song of The Encore: a haunting second-person story about a man who left his small town for a glittering life, and what he lost.',
      zh: '《The Encore》的最後一首：一個以第二人稱講述、縈繞不去的故事，寫一個男人離開小鎮追求璀璨人生，以及他所失去的一切。',
    },
    story: {
      en: 'Ancient Babylon, a city of wealth and excess on the Euphrates that eventually fell, becomes a metaphor for a dazzling world that promises everything and leaves people empty. The song addresses a restless, ambitious man who chased that world.\n\nIn the end he longs for home, while the life he walked away from carries on without him. It closes the album with a warning about the cost of fame and status, a fitting end for a record about showbusiness.',
      zh: '古巴比倫是幼發拉底河畔一座富裕奢華、最終衰落的城市，在歌中比喻一個承諾一切、卻令人空虛的璀璨世界。歌曲向一個不安於室、野心勃勃、追逐這個世界的男人說話。\n\n最後他渴望回家，而他捨棄的生活卻在沒有他的情況下繼續。歌曲以對名利代價的警告為專輯作結，正適合一張關於演藝生涯的專輯。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'He leaves his small town, certain that a bigger, brighter life is waiting.', zh: '他離開小鎮，深信一個更宏大、更光明的人生正在等待。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Babylon dazzles, but it is empty, and it will not last.', zh: '巴比倫令人目眩，卻是空洞的，也不會長久。' } },
      { part: { en: 'Final verse', zh: '最後一段' }, meaning: { en: 'Alone, he watches from a distance as the family he left builds a warm life without him.', zh: '他孤身一人，遠遠看着被他拋下的家人在沒有他的情況下建立溫暖的生活。' } },
    ],
    echoes: [
      { ref: 'evermore/cowboy-like-me', note: { en: 'The same ancient image of Babylon appeared in this earlier song.', zh: '同一個古巴比倫意象，曾在這首較早的歌中出現。' } },
      { ref: 'midnights/midnight-rain', note: { en: 'Choosing ambition over home, seen this time from the outside.', zh: '在野心與家庭之間選擇前者，這次從旁觀者角度看。' } },
      { ref: 'evermore/dorothea', note: { en: 'Leaving a small town for a glamorous life.', zh: '離開小鎮，追求光鮮的人生。' } },
    ],
  },
];
