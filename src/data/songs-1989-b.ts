import type { Song } from './types';

// 1989 (Taylor's Version) 曲目 14–21（Deluxe 及 From the Vault）
export const songsB: Song[] = [
  {
    slug: 'wonderland', title: 'Wonderland', track: 14, section: 'deluxe',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    themes: {
      en: 'A whirlwind romance retold through Alice in Wonderland: falling down the rabbit hole, losing one’s bearings, and emerging changed.',
      zh: '借《愛麗絲夢遊仙境》重述一段旋風式戀愛：掉進兔子洞、迷失方向，最後脫胎換骨地走出來。',
    },
    story: {
      en: 'A deluxe-edition track built from storybook imagery: a rabbit hole, a cat with a grin, a fall into a strange world. Swift uses the fairy tale to describe how quickly a relationship can become disorienting, and how leaving it can feel like waking from a dream.',
      zh: '這首 deluxe 版歌曲以童話意象構成：兔子洞、咧嘴而笑的貓、墮入奇異世界。Swift 借這個童話，描寫一段感情如何轉眼間令人迷失，以及離開時那種猶如從夢中醒來的感覺。',
    },
  },
  {
    slug: 'you-are-in-love', title: 'You Are in Love', track: 15, section: 'deluxe',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    themes: {
      en: 'A quiet list of small, ordinary moments that add up to the realisation of being in love.',
      zh: '一連串細碎、平凡的片段，靜靜累積成「原來已經愛上」的領悟。',
    },
    story: {
      en: 'One of the gentlest songs of the era, written with [[Jack Antonoff]]. Swift wrote it as an observer: she has explained that she was writing about love she had seen in other people’s relationships rather than her own at the time. [[Lena Dunham]], then Antonoff’s partner, said the song drew on their story.',
      zh: '這是這個時期最溫柔的歌之一，與 [[Jack Antonoff]] 合寫。Swift 以旁觀者的角度落筆：她解釋，當時寫的是她在別人感情中看見的愛，而不是她自己的經歷。Antonoff 當時的伴侶 [[Lena Dunham]] 曾表示，這首歌取材自他們二人的故事。',
    },
  },
  {
    slug: 'new-romantics', title: 'New Romantics', track: 16, section: 'deluxe',
    writers: ['Taylor Swift', 'Max Martin', 'Shellback'],
    single: { en: 'Seventh and final single, 23 February 2016', zh: '第七支、亦是最後一支單曲，2016 年 2 月 23 日' },
    themes: {
      en: 'An anthem for a generation that turns heartbreak into a party: young, reckless and determined to have fun regardless.',
      zh: '一首屬於這一代人的頌歌：把心碎變成派對，年輕、魯莽，無論如何都要盡興。',
    },
    story: {
      en: 'Swift has called this one of her favourite songs from the era and was surprised by how strongly fans embraced it as a deluxe track. It became the closing single. Its video, directed by [[Jonas Åkerlund]], is a montage of performance and behind-the-scenes footage from The 1989 World Tour, so it doubles as a scrapbook of the tour.',
      zh: 'Swift 形容這是她在這個時期最喜歡的歌之一；作為 deluxe 版歌曲，它受歌迷熱烈追捧，連她也感到意外。這首歌最終成為這個時期的壓軸單曲。由 [[Jonas Åkerlund]] 執導的 MV 剪輯了 The 1989 World Tour 的演出及幕後片段，因此亦是這次巡演的一本剪貼簿。',
    },
    mv: { id: 'wyK7YuwUWsU', director: 'Jonas Åkerlund', note: { en: 'Official video assembled from tour and backstage footage', zh: '官方 MV，由巡演及後台片段剪輯而成' } },
  },
  {
    slug: 'slut', title: '"Slut!"', track: 17, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    themes: {
      en: 'A dreamy, tender love song under a deliberately provocative title: choosing to be with someone even knowing the cruel labels the world will throw.',
      zh: '一首夢幻而溫柔的情歌，卻配上一個刻意挑釁的歌名：即使知道世界會扔來殘酷的標籤，仍然選擇與對方在一起。',
    },
    story: {
      en: 'In the prologue to 1989 (Taylor’s Version), Swift wrote about how, during this period, she felt the media’s judgement of her love life had become relentless, and how she responded by stepping back from dating and spending her time with female friends. This vault track, written with [[Jack Antonoff]], reclaims the insult in the title by setting it to one of the softest melodies of the era.',
      zh: '在《1989 (Taylor’s Version)》的序言中，Swift 寫到那段時期她覺得傳媒對她感情生活的批判已到了無休止的地步，於是她暫停約會，把時間留給女性好友。這首與 [[Jack Antonoff]] 合寫的 vault 歌曲，把歌名中的侮辱配上這個時期最柔和的旋律之一，藉此奪回這個字眼。',
    },
  },
  {
    slug: 'say-dont-go', title: "Say Don't Go", track: 18, section: 'vault',
    writers: ['Taylor Swift', 'Diane Warren'],
    themes: {
      en: 'Pleading with a partner to show, just once, that they want her to stay.',
      zh: '懇求伴侶哪怕只有一次，表示希望她留下。',
    },
    story: {
      en: 'This vault track is Swift’s first released collaboration with [[Diane Warren]], one of the most celebrated songwriters of power ballads. The song was written during the original 1989 sessions. When it came out in 2023, Warren expressed her delight that the song had finally been heard.',
      zh: '這首 vault 歌曲是 Swift 與 [[Diane Warren]] 首次公開發表的合作；Warren 是最負盛名的抒情大歌作曲人之一。歌曲寫於《1989》原版的錄音時期。2023 年推出時，Warren 表示很高興這首歌終於得以面世。',
    },
  },
  {
    slug: 'now-that-we-dont-talk', title: "Now That We Don't Talk", track: 19, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    themes: {
      en: 'The strange relief after a breakup: no longer having to pretend to like things for someone else’s sake, alongside the ache of silence.',
      zh: '分手後一種奇怪的釋然：不必再為了遷就對方而假裝喜歡某些東西，同時又承受着沉默帶來的痛。',
    },
    story: {
      en: 'One of the shortest songs in Swift’s catalogue, this vault track with [[Jack Antonoff]] moves quickly, as if trying not to dwell. Swift described the vault songs as pieces that did not fit the album she wanted to make in 2014, but that she was glad to finally share.',
      zh: '這首與 [[Jack Antonoff]] 合寫的 vault 歌曲是 Swift 作品中最短的歌之一，節奏輕快，彷彿不願久留在情緒之中。Swift 形容這些 vault 歌曲當年未能融入她在 2014 年想做的專輯，但她很高興終於可以與大家分享。',
    },
  },
  {
    slug: 'suburban-legends', title: 'Suburban Legends', track: 20, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    themes: {
      en: 'Nostalgia for a love that felt destined to become a hometown legend, and the disappointment that it never quite did.',
      zh: '懷念一段本應成為家鄉傳奇的愛情，以及它終究未能成真的失落。',
    },
    story: {
      en: 'Another [[Jack Antonoff]] collaboration from the vault, built on shimmering synths. The song imagines how a relationship might have been remembered in the place both people came from, and quietly mourns that version of the story.',
      zh: '又一首與 [[Jack Antonoff]] 合寫的 vault 歌曲，以閃爍的合成器聲構成。歌曲想像這段感情在兩人出身的地方會如何被傳頌，並靜靜地悼念那個未能成真的故事版本。',
    },
  },
  {
    slug: 'is-it-over-now', title: 'Is It Over Now?', track: 21, section: 'vault',
    writers: ['Taylor Swift', 'Jack Antonoff'],
    single: { en: 'Debuted at No. 1 on the Billboard Hot 100, November 2023', zh: '2023 年 11 月空降 Billboard Hot 100 冠軍' },
    themes: {
      en: 'A bitter companion piece to "Out of the Woods", revisiting the same relationship and some of the same memories with nine years of hindsight.',
      zh: '〈Out of the Woods〉的苦澀姊妹篇，以九年後的眼光重訪同一段感情和部分相同的回憶。',
    },
    story: {
      en: 'Fans immediately recognised imagery echoing "Out of the Woods", and the two songs are now often discussed as a pair: one asking whether the danger has passed, the other asking whether the relationship has truly ended. Written with [[Jack Antonoff]], it became the most successful of the vault tracks.',
      zh: '歌迷隨即察覺歌中的意象與〈Out of the Woods〉互相呼應，兩首歌現在經常被一併討論：一首問危險是否已經過去，另一首問這段感情是否真的結束。這首歌與 [[Jack Antonoff]] 合寫，是五首 vault 歌曲中成績最好的一首。',
    },
  },
];
