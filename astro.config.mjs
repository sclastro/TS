import { defineConfig } from 'astro/config';

// 同一份程式碼可部署到兩個地方：
// GitHub Pages：https://sclastro.github.io/TS/（子目錄 /TS）
// Vercel：網站位於根目錄（Vercel 建置時會自動設定 VERCEL=1）
const onVercel = !!process.env.VERCEL;
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export default defineConfig({
  site: onVercel && vercelHost ? `https://${vercelHost}` : 'https://sclastro.github.io',
  base: onVercel ? '/' : '/TS',
  trailingSlash: 'always',
});
