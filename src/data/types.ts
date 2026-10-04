// 雙語字串：所有顯示文字都以此格式儲存
export type L = { en: string; zh: string };

export type ParticleMode =
  | 'butterflies' | 'glitter' | 'magic' | 'leaves' | 'seagulls' | 'smoke'
  | 'hearts' | 'fog' | 'snow' | 'stars' | 'letters' | 'confetti' | 'sparkle';

export interface Theme {
  bg: string;        // 主背景
  bg2: string;       // 次背景（漸變終點）
  ink: string;       // 主文字
  muted: string;     // 次文字
  accent: string;    // 強調色
  accent2: string;   // 第二強調色
  card: string;      // 卡片底色
  font: string;      // 標題字體（Google Fonts 名稱）
  particles: ParticleMode;
  dark: boolean;
}

export interface Photo {
  file: string;      // Wikimedia Commons 檔名（不含 "File:"）
  caption: L;
  credit?: string;   // 攝影師
  license?: string;
  year?: number;
  focus?: string;    // CSS object-position
}

/** 專輯頁的章節（時期序章、聲音、視覺、巡演、影響等） */
export interface Chapter { title: L; body: L }

export interface Album {
  slug: string;
  title: string;
  year: number;
  date: string;      // YYYY-MM-DD
  ready: boolean;    // 是否已有完整歌曲內容
  theme: Theme;
  tagline: L;
  summary: L;
  chapters?: Chapter[];
  facts: L[];
  photos: Photo[];
  spotifyAlbum?: string;
  tv?: { title: string; date: string; spotifyAlbum?: string };
}

export type SongSection =
  | 'standard' | 'deluxe' | 'bonus' | 'vault'
  | '3am' | 'tilldawn' | 'anthology' | 'encore' | 'other';

/** 歌詞逐段解讀：只解釋含義，不引用原文 */
export interface LyricPart { part: L; meaning: L }

/** MV 逐場解析 */
export interface MvScene { scene: L; meaning: L }

/** 前後呼應：ref 為「專輯slug/歌曲slug」，或任意歌名 */
export interface Echo { ref: string; note: L }

export interface Song {
  slug: string;
  title: string;
  track: number;
  section: SongSection;
  feat?: string;
  writers: string[];   // 英文人名（會附讀音按鈕）
  producers?: string[];
  single?: L;          // 單曲資料
  overview: L;         // 一句至一段的概覽
  context?: L;         // 當時的人生與時期背景
  story: L;            // 創作心路歷程，可用 [[人名]] 標記
  lyrics: LyricPart[]; // 歌詞逐段解讀
  mv?: { id: string; director?: string; date?: string; note?: L; scenes?: MvScene[] };
  echoes?: Echo[];
  trivia?: L[];
  spotifyTrack?: string;
  photos?: Photo[];
}

export type EventCat = 'life' | 'career' | 'award' | 'tour' | 'business' | 'advocacy';

export interface TimelineEvent {
  date: string;        // YYYY-MM-DD 或 YYYY-MM 或 YYYY
  cat: EventCat;
  album?: string;      // 關聯專輯 slug
  title: L;
  body?: L;
  interview?: string;  // 關聯訪問 id
}

export interface Interview {
  id: string;
  date: string;
  outlet: string;
  title: L;
  summary: L;
  youtube?: string;
  url?: string;
  album?: string;
  songs?: string[];
}
