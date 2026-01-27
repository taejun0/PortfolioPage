"use client";

import * as S from "./BlogDetailPage.styled";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";
import "highlight.js/styles/github-dark.css";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

interface BlogDetailPageProps {
  post: {
    frontMatter: {
      title: string;
      date: string;
      description?: string;
      tags?: string[];
      isVelogPost?: boolean;
      velogUrl?: string;
      velogDate?: string;
    };
    content: string;
    slug: string;
  };
}

const BlogDetailPage = ({ post }: BlogDetailPageProps) => {
  const router = useRouter();
  const formattedDate = format(new Date(post.frontMatter.date), "yyyy년 M월 d일", {
    locale: ko,
  });

  const velogDate = post.frontMatter.velogDate
    ? format(new Date(post.frontMatter.velogDate), "yyyy년 M월 d일", {
        locale: ko,
      })
    : null;

  return (
    <S.Wrapper>
      <S.Container>
        <S.BackButton onClick={() => router.push("/blog")}>
          <FaArrowLeft /> 목록으로
        </S.BackButton>

        <S.Header>
          <S.Title>{post.frontMatter.title}</S.Title>
          {post.frontMatter.isVelogPost && (
            <S.VelogBadge>Velog</S.VelogBadge>
          )}
        </S.Header>

        <S.Meta>
          <S.Date>{formattedDate}</S.Date>
          {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
            <S.TagContainer>
              {post.frontMatter.tags.map((tag) => (
                <S.Tag key={tag}>#{tag}</S.Tag>
              ))}
            </S.TagContainer>
          )}
        </S.Meta>

        {post.frontMatter.isVelogPost && post.frontMatter.velogUrl && (
          <S.VelogNotice>
            <S.VelogNoticeText>
              {velogDate ? `${velogDate} 까지의 기술 블로그는 Velog에서 작성되었습니다.` : "까지의 기술 블로그는 Velog에서 작성되었습니다."}
            </S.VelogNoticeText>
            <S.VelogLink
              href={post.frontMatter.velogUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Velog에서 보기 →
            </S.VelogLink>
          </S.VelogNotice>
        )}

        <S.Content>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h1: ({ children }) => <S.MarkdownH1>{children}</S.MarkdownH1>,
              h2: ({ children }) => <S.MarkdownH2>{children}</S.MarkdownH2>,
              h3: ({ children }) => <S.MarkdownH3>{children}</S.MarkdownH3>,
              h4: ({ children }) => <S.MarkdownH4>{children}</S.MarkdownH4>,
              p: ({ children }) => <S.MarkdownP>{children}</S.MarkdownP>,
              ul: ({ children }) => <S.MarkdownUl>{children}</S.MarkdownUl>,
              ol: ({ children }) => <S.MarkdownOl>{children}</S.MarkdownOl>,
              li: ({ children }) => <S.MarkdownLi>{children}</S.MarkdownLi>,
              code: ({ className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <S.MarkdownCodeBlock {...props} className={className}>
                    {children}
                  </S.MarkdownCodeBlock>
                ) : (
                  <S.MarkdownInlineCode {...props}>{children}</S.MarkdownInlineCode>
                );
              },
              pre: ({ children }) => <S.MarkdownPre>{children}</S.MarkdownPre>,
              blockquote: ({ children }) => (
                <S.MarkdownBlockquote>{children}</S.MarkdownBlockquote>
              ),
              a: ({ href, children }) => (
                <S.MarkdownLink href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </S.MarkdownLink>
              ),
              img: ({ src, alt, ...props }) => {
                if (!src) return null;
                
                // alt 텍스트에서 크기 정보 추출 (예: "설명|width:500" 또는 "설명|50%")
                let imageAlt = alt || '';
                let width: string | undefined = undefined;
                
                if (imageAlt.includes('|')) {
                  const parts = imageAlt.split('|');
                  imageAlt = parts[0];
                  const sizePart = parts[1]?.trim();
                  
                  if (sizePart) {
                    // "width:500" 또는 "500px" 또는 "50%" 형식 지원
                    if (sizePart.startsWith('width:')) {
                      width = sizePart.replace('width:', '').trim();
                    } else if (sizePart.endsWith('px') || sizePart.endsWith('%')) {
                      width = sizePart;
                    } else {
                      // 숫자만 있으면 px로 간주
                      width = `${sizePart}px`;
                    }
                  }
                }
                
                // HTML 속성에서 width 추출 (HTML 이미지 태그 사용 시)
                const htmlWidth = (props as any).width || width;
                
                // 절대 URL (http://, https://)인 경우 그대로 사용
                if (src.startsWith('http://') || src.startsWith('https://')) {
                  return <S.MarkdownImg src={src} alt={imageAlt} style={{ width: htmlWidth }} />;
                }
                
                // public 폴더의 이미지 (절대 경로로 시작)
                if (src.startsWith('/')) {
                  return <S.MarkdownImg src={src} alt={imageAlt} style={{ width: htmlWidth }} />;
                }
                
                // 상대 경로인 경우 (포스트 폴더 내 이미지)
                // ./image.png 또는 image.png 형태
                const cleanPath = src.replace(/^\.\//, '');
                const imageSrc = `/api/blog/${post.slug}/image/${cleanPath}`;
                return <S.MarkdownImg src={imageSrc} alt={imageAlt} style={{ width: htmlWidth }} />;
              },
              hr: () => <S.MarkdownHr />,
              strong: ({ children }) => <S.MarkdownStrong>{children}</S.MarkdownStrong>,
              em: ({ children }) => <S.MarkdownEm>{children}</S.MarkdownEm>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default BlogDetailPage;

