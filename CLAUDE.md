# CLAUDE.md

Taylor Swift · The Eras Archive：中英對照的 Taylor Swift 資料網站，涵蓋十二張專輯及「其他作品」的每首歌的創作背景、歌詞逐段解讀、MV 逐場解析、生平時間線及訪問資料庫。

## 使用者與語言

- 使用者是香港中學教師。回覆一律用繁體中文正統書面語、全形標點；技術名詞和程式碼保留英文。行文簡潔，以段落為主。
- 網站中文內容同樣用正統書面語，參考陳雲《中文解讀》，避免「進行」「作出」、濫用被動式、「的」字過多等歐化句式。
- 親屬稱謂要準確：Dean Swift 是祖父（父系），Marjorie Finlay 是外祖母（母系）。

## 分支與部署

- 只在 `claude/sweet-babbage-17lcda` 開發和推送，這也是兩個網站的部署分支。除非使用者要求，不開 PR。
- 推送：`git push -u origin claude/sweet-babbage-17lcda`；網絡錯誤時以 2、4、8、16 秒退避重試。
- GitHub Pages：https://sclastro.github.io/TS/ ，由 `.github/workflows/deploy.yml` 在推送後自動建置（base 為 `/TS`）。
- Vercel：https://cc-taylor-swift.vercel.app/ ，`vercel.json` 設定建置；設有 `VERCEL` 環境變數時 base 為 `/`（見 `astro.config.mjs`）。
- Vercel 偶爾因 GitHub 暫時拒絕存取（Git provider error 403）而部署失敗，程式碼本身無問題；請使用者在 Vercel 對最新部署按 Redeploy 即可。

## 指令

```
npm install
npm run dev      # http://localhost:4321/TS/
npm run build    # 推送前必須通過；目前應生成 275 頁
```

## 架構

Astro 靜態網站。主要目錄：

| 路徑 | 用途 |
|---|---|
| `src/data/types.ts` | 資料型別。所有顯示文字皆為 `L = { en, zh }` |
| `src/data/albums.ts` | 專輯：配色、字體、粒子特效、章節、照片、Spotify 專輯 ID |
| `src/data/songs/<album>.ts` | 每張專輯一個檔案，只負責合併 `parts/` |
| `src/data/parts/*.ts` | 歌曲基本資料：作曲人、製作人、概覽、創作故事、MV、前後呼應、冷知識 |
| `src/data/deep/<album>.ts` | 深度解讀，按歌曲 slug 覆蓋 `lyrics`、MV `scenes` 及 `video` |
| `src/data/deep-parts/*.ts` | 深度解讀的實際內容，用 `deep-lib.ts` 的 `p()`、`sc()` 撰寫 |
| `src/data/timeline.ts` / `interviews.ts` | 生平時間線、訪問資料庫 |
| `src/data/yt-manifest.json` | 官方 YouTube 配對結果（已覆核，存入 repo） |
| `src/lib/util.ts` | `bi()` 雙語輸出、`rich()` 人名讀音、照片網址等 |
| `src/pages/eras/[slug]/[song].astro` | 歌曲頁 |

專輯 slug：`taylor-swift`、`fearless`、`speak-now`、`red`、`1989`、`reputation`、`lover`、`folklore`、`evermore`、`midnights`、`the-tortured-poets-department`、`the-life-of-a-showgirl`，另有 `others`（非專輯作品）。

歌曲 section：`standard`、`deluxe`、`bonus`、`3am`、`tilldawn`、`anthology`、`encore`、`vault`、`other`。

## 撰寫內容的格式

- 文字中的 `[[人名]]` 會自動加上 0.8 倍速讀音按鈕。
- 以 `bi(..., { tag: 'p' })` 輸出的文字以空行（`\n\n`）分段。
- TS 字串內的換行必須寫成 `\n` 轉義，不可插入真正換行，否則建置失敗（Unterminated string）。用 Python 修改這些檔案時，比對字串要把 `\n` 寫成 `\\n`。
- `p(label, en, zh, zhLabel?)` 只接受三或四個參數。英文 label 會按 `deep-lib.ts` 的 LABEL 表自動配中文（Verse 1、Pre-chorus、Chorus、Bridge、Outro、Final chorus、Whole song 等）；表外的 label 要以第四個參數提供中文。切勿多傳參數，否則中英文會錯位。
- `sc(enTitle, zhTitle, en, zh)` 用於 MV 場景。
- 深度解讀的標準篇幅：每首歌四至五段，每段中英文各兩小段；MV 每支四至六個場景。

## 內容守則

- **版權：** 不轉載歌詞，也不逐句或貼近原文改寫；只作抽象的分析性解讀，歌詞以超連結交代。
- **影片：** 只嵌入 Taylor Swift 官方 YouTube 頻道的影片。
- **事實：** 作曲人、日期、名次、MV 細節須核實；無法核實的寧可刪去。已核實並曾經出錯的例子：
  - 〈betty〉作曲人只有 Swift 與 William Bowery，Antonoff 和 Dessner 只負責製作。
  - TTPD 中 Swift 獨自寫成的歌：〈Who’s Afraid of Little Old Me?〉、〈My Boy Only Breaks His Favorite Toys〉、〈The Black Dog〉、〈Peter〉、〈The Manuscript〉。〈The Prophecy〉、〈thanK you aIMee〉的作曲人是 Swift 與 Aaron Dessner。
  - 〈"Slut!"〉作曲人是 Swift、Jack Antonoff 與 Patrik Berger。

## YouTube 配對

- `scripts/fetch-youtube.mjs` 只在 GitHub Actions 執行，搜尋官方頻道，結果寫入 `src/data/yt-manifest.json`。
- 規則：Taylor’s Version 專輯要求標題含 Taylor’s Version；vault 歌曲要求標題含 From The Vault；排除 live、remix 等版本。特殊標題以腳本內的 OVERRIDES 指定。
- Vercel 不會執行這個腳本，只讀 repo 內的 manifest。新增歌曲後，CI 配對到的結果要從 Actions 記錄取回，覆核後提交到 repo。
- 在 workflow_dispatch 勾選 `yt_refresh` 可強制重新搜尋所有歌曲。

## 照片

`scripts/fetch-images.mjs` 在建置前把資料檔引用的 Wikimedia Commons 照片下載並轉成 WebP，存於 `public/photos/`（不入 repo），並更新 `photo-manifest.json`。照片欄位只需填 Commons 檔名。

## 沙盒限制

雲端沙盒無法連接 YouTube、Wikimedia、Spotify、Wikipedia 和 Vercel。核實資料要用 WebSearch；查看 CI 記錄要用 GitHub MCP 的 `get_job_logs`。
