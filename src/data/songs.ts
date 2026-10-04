import type { Song, L, SongSection } from './types';

// 每張專輯一個檔案：src/data/songs/<專輯 slug>.ts，匯出 default Song[]
const mods = import.meta.glob<{ default: Song[] }>('./songs/*.ts', { eager: true });

export const songsByAlbum: Record<string, Song[]> = Object.fromEntries(
  Object.entries(mods).map(([path, m]) => [path.replace(/^\.\/songs\/|\.ts$/g, ''), m.default]),
);

/** 以「專輯slug/歌曲slug」找出歌曲，供「前後呼應」連結使用 */
export const songByRef = (ref: string): { album: string; song: Song } | undefined => {
  const [album, slug] = ref.split('/');
  const song = songsByAlbum[album]?.find((s) => s.slug === slug);
  return song ? { album, song } : undefined;
};

export const sectionLabel: Record<SongSection, L> = {
  standard: { en: 'Standard Edition', zh: '標準版' },
  deluxe: { en: 'Deluxe Edition', zh: '豪華版' },
  bonus: { en: 'Bonus Tracks', zh: '附加曲目' },
  vault: { en: 'From the Vault', zh: '塵封寶庫 From the Vault' },
  '3am': { en: '3am Edition', zh: '3am 版' },
  tilldawn: { en: 'Til Dawn Edition', zh: 'Til Dawn 版' },
  anthology: { en: 'The Anthology', zh: 'The Anthology 選集' },
};
export const sectionOrder: SongSection[] = ['standard', 'deluxe', 'bonus', '3am', 'tilldawn', 'anthology', 'vault'];
