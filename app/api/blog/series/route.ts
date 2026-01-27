import { NextResponse } from "next/server";
import { getAllSeries } from "@lib/blog";

export const revalidate = 60;

export async function GET() {
  try {
    const series = await getAllSeries();
    return NextResponse.json(series);
  } catch (error) {
    console.error("❌ Blog Series API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog series" },
      { status: 500 }
    );
  }
}

