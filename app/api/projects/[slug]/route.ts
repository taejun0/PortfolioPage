import { NextResponse, NextRequest } from "next/server";
import { getProjectBySlug } from "@lib/projects";

export const revalidate = 60;

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const data = await getProjectBySlug(params.slug);
  if (!data) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(data);
}
