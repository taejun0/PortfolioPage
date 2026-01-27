import { NextResponse } from "next/server";
import { getBlogPostBySlug } from "@lib/blog";

export const revalidate = 60;

export async function GET(req: Request, ctx: any) {
  const { slug } = ctx.params as { slug: string };
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.json(post);
}

