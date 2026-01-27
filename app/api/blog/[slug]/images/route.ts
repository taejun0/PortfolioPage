import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const revalidate = 60;

export async function GET(req: Request, ctx: any) {
  const { slug } = ctx.params as { slug: string };
  const postDir = path.join(process.cwd(), "content", "blog", slug);

  if (!fs.existsSync(postDir)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const files = fs.readdirSync(postDir);
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
  const images = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext) && file !== "index.md";
  });

  return NextResponse.json(images);
}

