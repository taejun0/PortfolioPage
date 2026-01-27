import { NextResponse } from "next/server";
import { getAllTags } from "@lib/blog";

export const revalidate = 60;

export async function GET() {
  try {
    const tags = await getAllTags();
    return NextResponse.json(tags);
  } catch (error) {
    console.error("❌ Blog Tags API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog tags" },
      { status: 500 }
    );
  }
}

