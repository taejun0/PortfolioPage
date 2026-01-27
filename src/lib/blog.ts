import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogFrontMatter {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  isVelogPost?: boolean;
  velogUrl?: string;
  velogDate?: string;
  series?: string; // 폴더/시리즈 이름
  thumbnail?: string; // 썸네일 이미지 경로
}

export async function getAllBlogPosts(
  includeVelogPosts: boolean = false
): Promise<Array<{ slug: string; frontMatter: BlogFrontMatter }>> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  // 디렉토리 목록 가져오기
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  const posts = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const indexPath = path.join(BLOG_DIR, slug, "index.md");

      // index.md 파일이 있는지 확인
      if (!fs.existsSync(indexPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(indexPath, "utf8");
      const { data } = matter(fileContents);

      // 썸네일 이미지 자동 감지
      // 1. frontMatter에 thumbnail이 지정되어 있으면 사용
      // 2. 없으면 폴더 내 "cover.*" 파일 찾기 (cover.jpg, cover.png 등)
      // 3. 그것도 없으면 폴더 내 첫 번째 이미지 파일 사용
      let thumbnail = (data as BlogFrontMatter).thumbnail;
      if (!thumbnail) {
        const postDir = path.join(BLOG_DIR, slug);
        if (fs.existsSync(postDir)) {
          const files = fs.readdirSync(postDir);
          const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
          
          // 먼저 cover.* 파일 찾기
          const coverFile = files.find((file) => {
            const ext = path.extname(file).toLowerCase();
            const nameWithoutExt = path.basename(file, ext).toLowerCase();
            return imageExtensions.includes(ext) && nameWithoutExt === "cover";
          });
          
          if (coverFile) {
            thumbnail = coverFile;
          } else {
            // cover 파일이 없으면 첫 번째 이미지 파일 사용
            const firstImage = files.find((file) => {
              const ext = path.extname(file).toLowerCase();
              return imageExtensions.includes(ext) && file !== "index.md";
            });
            if (firstImage) {
              thumbnail = firstImage;
            }
          }
        }
      }

      return {
        slug,
        frontMatter: {
          ...(data as BlogFrontMatter),
          ...(thumbnail ? { thumbnail } : {}),
        } as BlogFrontMatter,
      };
    })
    .filter((post): post is { slug: string; frontMatter: BlogFrontMatter } => post !== null)
    .filter((post) => {
      // Velog 포스트 필터링 (기본적으로 제외)
      if (!includeVelogPosts && post.frontMatter.isVelogPost) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontMatter.date).getTime();
      const dateB = new Date(b.frontMatter.date).getTime();
      return dateB - dateA; // 최신순
    });

  return posts;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<{ frontMatter: BlogFrontMatter; content: string; slug: string } | null> {
  const indexPath = path.join(BLOG_DIR, slug, "index.md");

  if (!fs.existsSync(indexPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(indexPath, "utf8");
  const { data, content } = matter(fileContents);

  // 썸네일 이미지 자동 감지
  // 1. frontMatter에 thumbnail이 지정되어 있으면 사용
  // 2. 없으면 폴더 내 "cover.*" 파일 찾기 (cover.jpg, cover.png 등)
  // 3. 그것도 없으면 폴더 내 첫 번째 이미지 파일 사용
  let thumbnail = (data as BlogFrontMatter).thumbnail;
  if (!thumbnail) {
    const postDir = path.join(BLOG_DIR, slug);
    if (fs.existsSync(postDir)) {
      const files = fs.readdirSync(postDir);
      const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
      
      // 먼저 cover.* 파일 찾기
      const coverFile = files.find((file) => {
        const ext = path.extname(file).toLowerCase();
        const nameWithoutExt = path.basename(file, ext).toLowerCase();
        return imageExtensions.includes(ext) && nameWithoutExt === "cover";
      });
      
      if (coverFile) {
        thumbnail = coverFile;
      } else {
        // cover 파일이 없으면 첫 번째 이미지 파일 사용
        const firstImage = files.find((file) => {
          const ext = path.extname(file).toLowerCase();
          return imageExtensions.includes(ext) && file !== "index.md";
        });
        if (firstImage) {
          thumbnail = firstImage;
        }
      }
    }
  }

  return {
    frontMatter: {
      ...(data as BlogFrontMatter),
      ...(thumbnail ? { thumbnail } : {}),
    } as BlogFrontMatter,
    content,
    slug,
  };
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.frontMatter.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export async function getAllSeries(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const seriesSet = new Set<string>();

  posts.forEach((post) => {
    if (post.frontMatter.series) {
      seriesSet.add(post.frontMatter.series);
    }
  });

  return Array.from(seriesSet).sort();
}

// 포스트 폴더 내의 이미지 파일 목록 가져오기
export async function getPostImages(slug: string): Promise<string[]> {
  const postDir = path.join(BLOG_DIR, slug);
  
  if (!fs.existsSync(postDir)) {
    return [];
  }

  const files = fs.readdirSync(postDir);
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
  
  return files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext) && file !== "index.md";
    })
    .map((file) => `/blog/${slug}/${file}`);
}
