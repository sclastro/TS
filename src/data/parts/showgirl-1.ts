import type { Song } from '../types';

// The Life of a Showgirl（2025）：第 1–6 首
// 版權說明：歌詞只作逐段解讀，不引用原文。
const TMS = ['Taylor Swift', 'Max Martin', 'Shellback'];

export const part1: Song[] = [
  {
    slug: 'the-fate-of-ophelia', title: 'The Fate of Ophelia', track: 1, section: 'standard',
    writers: TMS, producers: TMS,
    single: { en: 'Lead single, 3 October 2025 · debuted at No. 1, her longest-running Hot 100 number one', zh: '首支單曲，2025 年 10 月 3 日．空降 Hot 100 冠軍，並成為她蟬聯冠軍最久的歌' },
    overview: {
      en: 'A glossy pop opener that borrows Shakespeare’s tragic Ophelia to say that love rescued the narrator from a similar fate.',
      zh: '一首光鮮亮麗的流行開場曲，借用莎士比亞筆下的悲劇人物 Ophelia，訴說愛情把敘述者從相似的命運中救出。',
    },
    context: {
      en: 'Swift announced The Life of a Showgirl in August 2025 on New Heights, the podcast hosted by [[Travis Kelce]] and his brother [[Jason Kelce]]. It was recorded in Sweden in 2024 with [[Max Martin]] and [[Shellback]], between shows of the European leg of the Eras Tour, and released on 3 October 2025.',
      zh: 'Swift 於 2025 年 8 月在 [[Travis Kelce]] 與其兄 [[Jason Kelce]] 主持的 podcast《New Heights》中宣佈《The Life of a Showgirl》。專輯於 2024 年 Eras Tour 歐洲站演出之間，在瑞典與 [[Max Martin]] 及 [[Shellback]] 錄製，並於 2025 年 10 月 3 日推出。',
    },
    story: {
      en: 'In Hamlet, Ophelia is driven to despair and drowns. Swift uses her as the image of where she might have ended up, worn down by fame and heartbreak. Instead, someone pulled her out of the water.\n\nThe song reunites her with [[Max Martin]] and [[Shellback]], the producers behind Red’s and 1989’s biggest hits, and opens the album with confident, bright pop.',
      zh: '在《哈姆雷特》中，Ophelia 被逼至絕望而溺斃。Swift 以她象徵自己本可能落得的下場：被名氣與心碎消磨殆盡。然而，有人把她從水中拉了出來。\n\n這首歌令她與 [[Max Martin]] 及 [[Shellback]] 再度合作——他們正是《Red》和《1989》多首熱門作品的監製——並以自信明亮的流行樂為專輯揭幕。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'She recalls a time of isolation, shut away and sinking into sadness.', zh: '她回想一段孤立的日子：把自己關起來，沉溺於哀傷。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Her partner saved her from Ophelia’s fate, and she gives herself to him in gratitude.', zh: '伴侶把她從 Ophelia 的命運中拯救出來，她懷着感激把自己交給他。' } },
      { part: { en: 'Bridge', zh: '橋段' }, meaning: { en: 'She imagines what might have happened without him, and the image is stark.', zh: '她想像若沒有他會怎樣，畫面令人心寒。' } },
    ],
    mv: {
      id: 'AOAcrl7Olps', director: 'Taylor Swift', date: '2025-10-05',
      note: { en: 'First shown in cinemas during the album’s release weekend, then posted on YouTube. Swift’s Eras Tour dancers, singers and band appear throughout.', zh: '先於專輯推出的週末在戲院放映，其後上載 YouTube。Eras Tour 的舞者、和音歌手和樂隊貫穿全片。' },
      scenes: [
        { scene: { en: 'The living painting', zh: '活的畫作' }, meaning: { en: 'Swift recreates a nineteenth-century painting of Ophelia in a white dress among the reeds. Then she sits up and reveals that it is a set: she will not drown.', zh: 'Swift 重現一幅十九世紀的 Ophelia 畫作：白衣女子躺在蘆葦之間。接着她坐起來，揭示這只是佈景：她不會溺斃。' } },
        { scene: { en: 'Showgirls through history', zh: '歷代的歌舞女郎' }, meaning: { en: 'She moves through different eras of performing women: a painter’s model, a Golden Age Hollywood musical star, a 1960s girl-group singer. Being looked at has always been part of the job.', zh: '她穿梭於不同年代的表演女性之間：畫家的模特兒、荷里活黃金時代的歌舞片明星、六十年代女子組合的主唱。被注視，一直是這份工作的一部分。' } },
        { scene: { en: 'The family of the tour', zh: '巡演大家庭' }, meaning: { en: 'Her Eras Tour dancers and band surround her, a tribute to the people who shared the two-year journey.', zh: 'Eras Tour 的舞者與樂隊圍繞着她，向陪她走過兩年旅程的人致敬。' } },
        { scene: { en: 'The bathtub', zh: '浴缸' }, meaning: { en: 'The video ends with Swift submerged in a bathtub in full glamour: the album cover. Ophelia’s water has become a stage.', zh: 'MV 以 Swift 盛裝浸在浴缸中作結：正是專輯封面。Ophelia 的水，變成了舞台。' } },
      ],
    },
    echoes: [
      { ref: 'fearless/love-story', note: { en: 'Shakespeare again, and again a tragedy rewritten with a happy ending.', zh: '再次借用莎士比亞，再次把悲劇改寫成快樂結局。' } },
      { ref: 'the-tortured-poets-department/the-alchemy', note: { en: 'The same relationship, now spoken of with certainty.', zh: '同一段感情，如今以篤定的語氣訴說。' } },
      { ref: '1989/blank-space', note: { en: 'Max Martin and Shellback’s sound, ten years later.', zh: '十年後，再度與 Max Martin 和 Shellback 合作的聲音。' } },
    ],
  },
  {
    slug: 'elizabeth-taylor', title: 'Elizabeth Taylor', track: 2, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A love song told through the life of Elizabeth Taylor, the film star whose romances were watched by the whole world.',
      zh: '一首借 Elizabeth Taylor 一生訴說的情歌：這位電影明星的感情生活，曾被全世界注視。',
    },
    story: {
      en: 'Swift has called [[Elizabeth Taylor]] one of the most quintessential showgirls: an actress under an intense microscope who answered with humour and kept making great work. Taylor was famous for her marriages, including two to [[Richard Burton]].\n\nThe song asks whether a woman so publicly scrutinised can find a love that lasts, and draws a clear parallel with Swift’s own life.',
      zh: 'Swift 稱 [[Elizabeth Taylor]] 是最典型的「showgirl」之一：一位被放在顯微鏡下審視的女演員，以幽默回應，並繼續創作出色的作品。Taylor 以多段婚姻聞名，包括兩度嫁給 [[Richard Burton]]。\n\n這首歌問：一個被公眾如此審視的女人，能否找到長久的愛？並明顯與 Swift 自己的人生互相映照。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Glamour, jewels and gossip: the public image of a star.', zh: '華麗、珠寶與八卦：一位明星的公眾形象。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Behind the image, she asks her partner whether this love is real and will stay.', zh: '在形象背後，她問伴侶：這份愛是否真實，會否留下？' } },
    ],
    echoes: [
      { ref: 'reputation/delicate', note: { en: 'Love under public scrutiny, and the fear that it will not survive.', zh: '在公眾審視下的愛，以及害怕它無法存活的恐懼。' } },
      { ref: 'the-tortured-poets-department/clara-bow', note: { en: 'Another Hollywood legend used as a mirror.', zh: '另一位被用作鏡子的荷里活傳奇人物。' } },
    ],
  },
  {
    slug: 'opalite', title: 'Opalite', track: 3, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A sunny love song named after a man-made gemstone: happiness that is not found by chance but created.',
      zh: '一首陽光燦爛的情歌，以一種人造寶石命名：幸福不是偶然尋獲，而是親手創造的。',
    },
    story: {
      en: 'Opal is the birthstone for October. Opalite is its man-made counterpart, and Swift said she chose it because it does not occur naturally: it is a metaphor for the happiness she has learned to make for herself.\n\nThe narrator looks back at her own past heartbreaks and her partner’s, and celebrates having found each other afterwards.',
      zh: '蛋白石是十月的誕生石，而 opalite 是它的人造版本。Swift 說她選用這個名字，正因為它並非天然：它比喻她學會為自己創造的幸福。\n\n敘述者回望自己與伴侶過去各自的心碎，並慶幸其後找到彼此。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'Both of them went through hard times in previous relationships.', zh: '兩人在過去的感情中都經歷過艱難。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'Their happiness is like opalite: made, not found, and no less beautiful for it.', zh: '他們的幸福就像 opalite：是創造而非尋獲的，卻不因此減少半分美麗。' } },
    ],
    echoes: [
      { ref: 'lover/daylight', note: { en: 'Arriving in the light after darker years.', zh: '在黑暗歲月後走進光明。' } },
      { ref: 'midnights/bejeweled', note: { en: 'Gem imagery for self-worth and joy.', zh: '以寶石意象表達自我價值與喜悅。' } },
    ],
  },
  {
    slug: 'father-figure', title: 'Father Figure', track: 4, section: 'standard',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback', 'George Michael'], producers: TMS,
    overview: {
      en: 'A dark, dramatic song about power in the music industry, which interpolates George Michael’s 1987 hit of the same name.',
      zh: '一首陰暗而富戲劇性的歌，探討音樂業的權力，並引用 George Michael 1987 年同名名曲的旋律。',
    },
    story: {
      en: 'Because the song borrows from [[George Michael]]’s "Father Figure", he is credited as a writer. Swift has explained that it uses the idea of a protective mentor to describe the power structures of the music business, which she has experienced from both sides.\n\nIn the story, a powerful older figure takes a young artist under his wing, but the balance of power eventually shifts, and the protégée ends up in control.',
      zh: '由於這首歌借用了 [[George Michael]] 的〈Father Figure〉，他亦被列為作曲人。Swift 解釋，這首歌以「保護人」的概念，描述音樂業的權力結構，而她曾身處兩方。\n\n在故事中，一位有權勢的長者把年輕藝人納入羽翼之下，但權力最終轉移，被扶植的一方反而掌控大局。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'A mentor promises protection and success to a newcomer.', zh: '一位前輩向新人承諾保護與成功。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'The roles reverse: the one who was guided now holds the power.', zh: '角色逆轉：昔日被引導的人，如今手握權力。' } },
    ],
    echoes: [
      { ref: 'lover/the-man', note: { en: 'Power in the music industry, from another angle.', zh: '從另一角度看音樂業的權力。' } },
      { ref: 'evermore/its-time-to-go', note: { en: 'Trust in the business, betrayed and then reclaimed.', zh: '在業界的信任：被背叛，然後奪回。' } },
    ],
  },
  {
    slug: 'eldest-daughter', title: 'Eldest Daughter', track: 5, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'The album’s track five: a vulnerable song about always having to be the strong one, and finally being allowed to drop the act.',
      zh: '專輯的第五首：一首脆弱的歌，寫總要扮演堅強的那一個，最終獲准卸下偽裝。',
    },
    story: {
      en: 'Swift is the elder of two children. The song draws on the idea of the eldest daughter who learns early to be responsible, capable and unbothered, and who then struggles to admit when she needs care.\n\nIt also touches on how people present a cool, cynical front online. In the end, a loving relationship lets the narrator be soft and sincere.',
      zh: 'Swift 是家中兩個孩子中的長女。這首歌借用「長女」的概念：很早便學會負責、能幹、處變不驚，之後卻難以承認自己也需要照顧。\n\n它亦觸及人們如何在網上擺出冷淡、犬儒的姿態。最後，一段充滿愛的關係，讓敘述者可以柔軟而真誠。',
    },
    lyrics: [
      { part: { en: 'Verse', zh: '主歌' }, meaning: { en: 'She has always acted tough and cynical to protect herself.', zh: '她一直以強悍和犬儒保護自己。' } },
      { part: { en: 'Chorus', zh: '副歌' }, meaning: { en: 'With the right person, she admits she wants to be loved simply and sincerely.', zh: '遇上對的人，她承認自己只想被簡單而真誠地愛。' } },
    ],
    echoes: [
      { ref: 'midnights/youre-on-your-own-kid', note: { en: 'Another track five about growing up having to be self-reliant.', zh: '另一首第五首歌，寫在必須自立中成長。' } },
      { ref: 'midnights/mastermind', note: { en: 'Admitting the effort behind looking effortless.', zh: '承認看似輕鬆背後的努力。' } },
    ],
  },
  {
    slug: 'ruin-the-friendship', title: 'Ruin the Friendship', track: 6, section: 'standard',
    writers: TMS, producers: TMS,
    overview: {
      en: 'A gentle, heartbreaking memory of a high-school friend she never told how she felt, and the lesson she took from losing him.',
      zh: '一段溫柔而令人心碎的回憶：一位她從未表白的中學朋友，以及失去他後她所領悟的道理。',
    },
    story: {
      en: 'The song recalls teenage moments with a boy she liked but never kissed, because she was afraid of spoiling the friendship. Years later, her friend Abigail, who also appears in "Fifteen", called with the news that he had died, and Swift flew home.\n\nThe conclusion is simple advice: take the risk. Regret for what was never said lasts longer than any awkwardness.',
      zh: '這首歌回憶少年時與一個她喜歡、卻從未親吻的男孩的片段，因為她害怕破壞友誼。多年後，亦曾出現在〈Fifteen〉中的好友 Abigail 來電，告訴她那男孩去世的消息，Swift 於是飛回家鄉。\n\n結論是一個簡單的忠告：冒險吧。沒說出口的遺憾，比任何尷尬都更長久。',
    },
    lyrics: [
      { part: { en: 'Verse 1', zh: '第一段主歌' }, meaning: { en: 'Small memories of high school: a boy she liked, and a moment that almost happened.', zh: '中學的點滴回憶：一個她喜歡的男孩，以及一個幾乎發生的時刻。' } },
      { part: { en: 'Verse 2', zh: '第二段主歌' }, meaning: { en: 'News of his death, and a journey home to say goodbye.', zh: '他離世的消息，以及回鄉道別的旅程。' } },
      { part: { en: 'Outro', zh: '尾聲' }, meaning: { en: 'Her advice: say what you feel, even if it changes everything.', zh: '她的忠告：說出你的感受，即使會改變一切。' } },
    ],
    echoes: [
      { ref: 'fearless/fifteen', note: { en: 'Abigail returns, and high school is remembered once more.', zh: 'Abigail 再次出現，中學時光再被憶起。' } },
      { ref: 'evermore/marjorie', note: { en: 'Grief for someone gone, and words left unsaid.', zh: '為逝去的人哀悼，以及沒說出口的話。' } },
    ],
  },
];
