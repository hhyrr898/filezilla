import { GoogleGenAI } from "@google/genai";
import fs from "node:fs/promises";
import path from "node:path";
import { countChineseChars, shortenBodyIfNeeded } from "./article-validation.js";

const root = process.cwd();
const blogDir = path.join(root, "src", "blog");
const outputFile = path.join(root, ".generated-urls.json");
const MAX_ATTEMPTS = 5;

const banned = [/seo/i, /关键词/g, /优化/g, /排名/g, /收录/g, /曝光/g];

const tagPool = [
  "Windows客户端",
  "macOS客户端",
  "Linux环境",
  "FTP连接",
  "SFTP传输",
  "FTPS安全",
  "站点管理",
  "文件上传",
  "防火墙配置",
  "服务器部署",
  "WordPress",
  "批量传输"
];

function getCharLimitsLocal() {
  return { min: 600, max: 1200 };
}

function getCount() {
  const arg = process.argv.find((item) => item.startsWith("--count="));
  const raw = arg ? arg.split("=")[1] : process.env.GENERATE_COUNT || "1";
  const count = Number.parseInt(raw, 10);
  if (!Number.isInteger(count) || count < 1 || count > 9) {
    throw new Error("Count must be between 1 and 9.");
  }
  return count;
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/filezilla/g, "filezilla")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function cleanText(input) {
  let text = String(input || "");
  for (const pattern of banned) text = text.replace(pattern, "");
  return text.trim();
}

function pickTags(seed) {
  const first = tagPool[seed % tagPool.length];
  const second = tagPool[(seed + 5) % tagPool.length];
  const third = tagPool[(seed + 9) % tagPool.length];
  return [...new Set([first, second, third])];
}

function validateArticle({ title, body }) {
  const issues = [];
  const { min: minChars, max: maxChars } = getCharLimitsLocal();
  const charCount = countChineseChars(body);

  if (!title.startsWith("FileZilla")) issues.push("标题必须以 FileZilla 开头");
  if (charCount < minChars || charCount > maxChars) {
    issues.push(`正文字数 ${charCount}，应在 ${minChars}-${maxChars} 之间`);
  }
  return issues;
}

function frontMatter(data) {
  const tags = JSON.stringify(data.tags);
  return `---\nlayout: article.njk\ntitle: ${data.title}\ndescription: ${data.description}\ndate: ${data.date}\ngenerated: true\ncategory: ${data.category}\ntags: ${tags}\nheroImage: "${data.heroImage}"\nheroAlt: "${data.heroAlt}"\n---\n\n${data.body}\n`;
}

async function createArticle(ai, index) {
  const today = new Date();
  const date = today.toISOString().slice(0, 10);
  const seed = Math.floor(Date.now() / 1000) + index;
  const tags = pickTags(seed);
  const topic = tags.join("、");
  const { min: minChars, max: maxChars } = getCharLimitsLocal();

  let lastIssues = [];
  let parsed = null;
  let title = "";
  let body = "";

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const retryNote = attempt > 0 ? `\n\n上次不合格：${lastIssues.join("；")}。请修正。` : "";
    const prompt = [
      "Write one original Chinese markdown article for a normal FileZilla resource website.",
      "Return strict JSON only with fields: title, description, category, body.",
      "The title must start with FileZilla and be a long-tail article title.",
      `Topic direction: ${topic}.`,
      `Body must use h2/h3 headings only, no h1. Chinese character count must be ${minChars}-${maxChars}.`,
      "Include one or two markdown images using ![Chinese alt text](/static/images/photo-1486406146926-c627a92ad1ab.jpg).",
      "Do not include external links, promotional claims, or words: seo, 关键词, 优化, 排名, 收录, 曝光."
    ].join("\n");

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt + retryNote
    });
    const raw = result.text.replace(/^```json\s*|```$/g, "").trim();
    parsed = JSON.parse(raw);

    title = cleanText(parsed.title).startsWith("FileZilla")
      ? cleanText(parsed.title)
      : `FileZilla ${cleanText(parsed.title)}`;
    body = cleanText(parsed.body);
    lastIssues = validateArticle({ title, body });

    if (lastIssues.length === 0) break;

    const onlyTooLong =
      lastIssues.length === 1 && lastIssues[0].includes("正文字数") && countChineseChars(body) > maxChars;
    if (onlyTooLong && attempt >= MAX_ATTEMPTS - 2) {
      try {
        body = cleanText(await shortenBodyIfNeeded(ai, body, maxChars));
        lastIssues = validateArticle({ title, body });
        if (lastIssues.length === 0) break;
      } catch (error) {
        console.warn("正文压缩失败，继续重试:", error.message);
      }
    }
  }

  if (lastIssues.length > 0) {
    throw new Error(`Article validation failed after ${MAX_ATTEMPTS} attempts: ${lastIssues.join("；")}`);
  }

  const description = cleanText(parsed.description).slice(0, 120);
  const category = cleanText(parsed.category || tags[0]);
  const slug = `${slugify(title)}-${Date.now()}-${index}`;

  return {
    slug,
    url: `/blog/${slug}/`,
    content: frontMatter({
      title,
      description,
      date,
      category,
      tags,
      heroImage: `/static/images/photo-1486406146926-c627a92ad1ab.jpg`,
      heroAlt: `${title} 配图`,
      body
    })
  };
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new Error("Set GEMINI_API_KEY or GOOGLE_API_KEY before generating articles.");

  const ai = new GoogleGenAI({ apiKey });
  const count = getCount();
  await fs.mkdir(blogDir, { recursive: true });

  const urls = [];
  for (let i = 0; i < count; i += 1) {
    const article = await createArticle(ai, i);
    await fs.writeFile(path.join(blogDir, `${article.slug}.md`), article.content, "utf8");
    urls.push(article.url);
  }

  await fs.writeFile(outputFile, JSON.stringify({ urls }, null, 2), "utf8");
  console.log(`Generated ${urls.length} article(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
