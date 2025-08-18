import { NextResponse } from "next/server";
import { getProjects } from "@lib/projects";

export const revalidate = 60;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") ?? undefined;
  const data = await getProjects(category);
  return NextResponse.json(data);
}
