# Taylor Swift · The Eras Archive

個人收藏用途的 Taylor Swift 網站：十二個時期的專輯、歌曲創作背景、官方 MV、生平與專輯對照時間線、訪問資料庫，中英對照，人名附 0.8 倍速讀音。

## 本機預覽（Windows CMD）

```
npm install
npm run dev
```

然後開啟 http://localhost:4321/TS/

## 內容檔案（日後增補只需改這些）

| 檔案 | 內容 |
|---|---|
| `src/data/albums.ts` | 十二張專輯：配色、字體、粒子特效、簡介、照片 |
| `src/data/songs-1989-*.ts` | 1989 的 21 首歌（創作背景、主題解讀、MV、作曲人） |
| `src/data/songs.ts` | 登記每張專輯的歌曲檔案 |
| `src/data/timeline.ts` | 生平大事 |
| `src/data/interviews.ts` | 訪問與演說（YouTube ID 或文章網址） |

文字中以 `[[人名]]` 標記的英文名會自動加上喇叭按鈕。照片填 Wikimedia Commons 檔名即可。

## 版權說明

本站不轉載歌詞，只作主題解讀，並連結至 Spotify、Apple Music、Genius。照片來自 Wikimedia Commons（CC 授權），MV 嵌入自官方 YouTube。

## 部署

推送到 `main` 後，GitHub Actions 會自動建置並發佈至 GitHub Pages（需在 repo 的 Settings → Pages 把 Source 設為 GitHub Actions）。
