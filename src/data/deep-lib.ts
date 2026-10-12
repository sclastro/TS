import type { L, LyricPart, MvScene } from './types';

// 深度解讀的資料格式及簡寫函數
export type DeepEntry = { lyrics?: LyricPart[]; scenes?: MvScene[]; video?: { note?: L; scenes?: MvScene[] } };
export type DeepMap = Record<string, DeepEntry>;

const LABEL: Record<string, string> = {
  'Intro': '前奏', 'Verse 1': '第一段主歌', 'Verse 2': '第二段主歌', 'Verse 3': '第三段主歌', 'Final verse': '最後一段主歌',
  'Pre-chorus': '前副歌', 'Chorus': '副歌', 'Post-chorus': '副歌後段', 'Final chorus': '最後副歌', 'Bridge': '橋段',
  'Outro': '尾聲', 'Refrain': '疊句', 'Whole song': '全曲結構',
};

/** 歌詞段落：label 用英文，中文自動配對（可另行指定） */
export const p = (label: string, en: string, zh: string, zhLabel?: string): LyricPart => ({
  part: { en: label, zh: zhLabel ?? LABEL[label] ?? label },
  meaning: { en, zh },
});

/** MV 場景 */
export const sc = (enTitle: string, zhTitle: string, en: string, zh: string): MvScene => ({
  scene: { en: enTitle, zh: zhTitle },
  meaning: { en, zh },
});
