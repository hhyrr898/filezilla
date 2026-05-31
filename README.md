# FileZilla 资源站点

基于 Eleventy (11ty) 的 FileZilla FTP/SFTP 客户端资源站，支持 GitHub Pages / Cloudflare Pages 部署。

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:8091

## 构建

```bash
npm run build
```

输出目录 `_site/`

## 自动生成文章

手动测试（1-9 篇）：

```bash
set GEMINI_API_KEY=your_key
npm run generate:articles -- --count=3
```

GitHub Actions 工作流 `generate-filezilla-articles.yml` 每天自动运行，支持手动触发并选择生成数量。

## 必应推送

首次全站推送：

```bash
set SITE_URL=https://your-domain.com
set BING_API_KEY=your_bing_key
npm run build
npm run push:bing:all
```

日常仅推送更新文章：

```bash
npm run push:bing:updated
```

## GitHub 配置

- **Secrets**: `GEMINI_API_KEY`, `BING_API_KEY`
- **Variables**: `SITE_URL`

## 目录结构

- `src/index.njk` — 首页（分栏 Hero + 统计条 + 马赛克文章区）
- `src/blog/` — Markdown 文章
- `src/categories/` — 目录聚合页
- `src/tags/` — Tags 聚合页
- `src/dows.html` — 下载中心
- `scripts/generate-articles.js` — Gemini 自动生成
- `scripts/push-bing.js` — 必应 URL 提交
