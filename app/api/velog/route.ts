import { NextResponse } from "next/server";
import Parser from "rss-parser";
import { JSDOM } from "jsdom";

const BLOG_URL = "https://v2.velog.io/rss/@taejun0";
const MAX_POSTS = 2;

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(BLOG_URL);

    const posts = feed.items.slice(0, MAX_POSTS).map((item) => {
      const rawHTML =
        item["content:encoded"] || item.content || item.description || "";

      const intermediateDOM = new JSDOM(rawHTML);
      const decodedHTML = intermediateDOM.window.document.body.innerHTML;

      const { window } = new JSDOM(decodedHTML);
      const document = window.document;

      const input = document.querySelector("input[type='hidden']");
      const ogImage = document.querySelector("meta[property='og:image']");
      const img = document.querySelector("img");
      const figureImg = document.querySelector("figure img");
      const linkImg = document.querySelector("a img");

      const thumbnail =
        input?.getAttribute("value") ||
        ogImage?.getAttribute("content") ||
        figureImg?.getAttribute("src") ||
        linkImg?.getAttribute("src") ||
        img?.getAttribute("src");

      const desc = document.body.textContent?.trim().slice(0, 200) || "";

      return {
        title: item.title,
        link: item.link,
        pubDate: item.isoDate,
        description: desc,
        thumbnail,
      };
    });

    return NextResponse.json(posts);
  } catch (e) {
    console.error("❌ API Error:", e);
    return NextResponse.json({ error: "RSS fetch failed" }, { status: 500 });
  }
}
