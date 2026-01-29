import { NextResponse } from "next/server";
import Parser from "rss-parser";
import { JSDOM } from "jsdom";

const BLOG_URL = "https://v2.velog.io/rss/@taejun0";

// 특정 포스트 제목 키워드
const TARGET_POSTS = [
  { keywords: ["2025", "회고"], title: "[2025 회고] 2025, 2026 둘에게 보내는 인사" },
  { keywords: ["바이브", "코딩", "24시간"], title: "24시간 안에 서비스를 만들면서 느낀점, 바이브 코딩" },
];

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(BLOG_URL);

    const foundPosts: any[] = [];

    // 모든 포스트를 순회하면서 타겟 포스트 찾기
    for (const target of TARGET_POSTS) {
      const post = feed.items.find((item) => {
        const title = item.title || "";
        return target.keywords.some((keyword) =>
          title.includes(keyword)
        );
      });

      if (post) {
        const rawHTML =
          post["content:encoded"] || post.content || post.description || "";

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

        foundPosts.push({
          title: post.title,
          link: post.link,
          pubDate: post.isoDate,
          description: desc,
          thumbnail,
        });
      }
    }

    // 순서 보장: 2025 회고가 먼저, 바이브 코딩이 두 번째
    const sortedPosts = foundPosts.sort((a, b) => {
      const aIndex = a.title.includes("2025") && a.title.includes("회고") ? 0 : 1;
      const bIndex = b.title.includes("2025") && b.title.includes("회고") ? 0 : 1;
      return aIndex - bIndex;
    });

    return NextResponse.json(sortedPosts.slice(0, 2));
  } catch (e) {
    console.error("❌ API Error:", e);
    return NextResponse.json({ error: "RSS fetch failed" }, { status: 500 });
  }
}
