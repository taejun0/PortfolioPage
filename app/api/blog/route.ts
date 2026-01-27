import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@lib/blog";

export const revalidate = 60;

export async function GET() {
  try {
    // Velog 포스트는 제외하고 가져오기
    const posts = await getAllBlogPosts(false);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("❌ Blog API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

