import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const revalidate = 60;

export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string; path: string[] }> }
) {
  const { slug, path: imagePath } = await ctx.params;
  
  if (!imagePath || imagePath.length === 0) {
    return new NextResponse("Image path required", { status: 400 });
  }

  const imageFileName = imagePath.join("/");
  const imagePathFull = path.join(
    process.cwd(),
    "content",
    "blog",
    slug,
    imageFileName
  );

  // 보안: 상위 디렉토리 접근 방지
  const normalizedPath = path.normalize(imagePathFull);
  const blogDir = path.join(process.cwd(), "content", "blog", slug);
  
  if (!normalizedPath.startsWith(blogDir)) {
    return new NextResponse("Invalid path", { status: 403 });
  }

  if (!fs.existsSync(imagePathFull)) {
    return new NextResponse("Image not found", { status: 404 });
  }

  const imageBuffer = fs.readFileSync(imagePathFull);
  const ext = path.extname(imageFileName).toLowerCase();
  
  let contentType = "image/jpeg";
  if (ext === ".png") contentType = "image/png";
  else if (ext === ".gif") contentType = "image/gif";
  else if (ext === ".webp") contentType = "image/webp";
  else if (ext === ".svg") contentType = "image/svg+xml";

  return new NextResponse(imageBuffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

