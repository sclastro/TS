import type { Song } from './types';
import { songsA } from './songs-1989-a';
import { songsB } from './songs-1989-b';

// 每張專輯的歌曲；日後逐張加入
export const songsByAlbum: Record<string, Song[]> = {
  '1989': [...songsA, ...songsB],
};

export const sectionLabel = {
  standard: { en: 'Standard Edition', zh: '標準版' },
  deluxe: { en: 'Deluxe Edition', zh: '豪華版' },
  vault: { en: 'From the Vault', zh: '塵封寶庫 From the Vault' },
} as const;
