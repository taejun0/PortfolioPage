// app/api/projects/[slug]/route.ts
import { NextResponse } from "next/server";
import { getProjectBySlug } from "@lib/projects";

export const revalidate = 60;

export async function GET(req: Request, ctx: any) {
  const { slug } = ctx.params as { slug: string };
  const data = await getProjectBySlug(slug);
  if (!data) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(data);
}
