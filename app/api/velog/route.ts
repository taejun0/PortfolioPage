import { NextResponse } from "next/server";
import Parser from "rss-parser";
import { JSDOM } from "jsdom";

const BLOG_URL = "https://v2.velog.io/rss/@taejun0";

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(BLOG_URL);

    // 바이브 코딩 글 찾기
    const vibecodingPost = feed.items.find((item) => {
      const title = item.title || "";
      return (
        title.includes("바이브") &&
        (title.includes("코딩") || title.includes("24시간"))
      );
    });

    if (!vibecodingPost) {
      return NextResponse.json({
        post: null,
        totalPosts: feed.items.length,
      });
    }

    const rawHTML =
      vibecodingPost["content:encoded"] ||
      vibecodingPost.content ||
      vibecodingPost.description ||
      "";

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
      img?.getAttribute("src") ||
      "";

    const desc = document.body.textContent?.trim().slice(0, 200) || "";

    // 성과 정보 (현재는 하드코딩, 추후 API로 가져올 수 있으면 수정)
    const stats = {
      likes: 14,
      views: 500,
    };

    return NextResponse.json({
      post: {
        title: vibecodingPost.title,
        link: vibecodingPost.link,
        pubDate: vibecodingPost.isoDate,
        description: desc,
        thumbnail,
        stats,
      },
      totalPosts: feed.items.length,
    });
  } catch (e) {
    console.error("❌ API Error:", e);
    return NextResponse.json({ error: "RSS fetch failed" }, { status: 500 });
  }
}
