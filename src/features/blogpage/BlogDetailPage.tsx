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
import { useState, useEffect, useMemo } from "react";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

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

interface Heading {
  id: string;
  text: string;
  level: number;
}

const BlogDetailPage = ({ post }: BlogDetailPageProps) => {
  const router = useRouter();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  const formattedDate = format(new Date(post.frontMatter.date), "yyyy년 M월 d일", {
    locale: ko,
  });

  const velogDate = post.frontMatter.velogDate
    ? format(new Date(post.frontMatter.velogDate), "yyyy년 M월 d일", {
        locale: ko,
      })
    : null;

  // 목차 생성 함수
  // 헤딩 ID 생성 함수 (한글 포함)
  const generateHeadingId = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const generateTOC = (content: string): Heading[] => {
    const headingRegex = /^(#{1,4})\s+(.+)$/gm;
    const toc: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = generateHeadingId(text);

      toc.push({ id, text, level });
    }

    return toc;
  };

  // 목차 추출
  useEffect(() => {
    const toc = generateTOC(post.content);
    setHeadings(toc);
  }, [post.content]);

  // 스크롤 시 활성 헤딩 감지
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeading(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    // 약간의 지연을 두어 DOM이 완전히 렌더링된 후 스크롤
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // 헤더 높이 고려
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // ID가 정확히 일치하지 않을 경우, 대체 방법 시도
        const allHeadings = document.querySelectorAll("h1, h2, h3, h4");
        allHeadings.forEach((heading) => {
          const headingText = heading.textContent?.trim() || "";
          const headingId = generateHeadingId(headingText);
          if (headingId === id) {
            const offset = 100;
            const elementPosition = heading.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        });
      }
    }, 50);
  };

  // 토글 컴포넌트
  const ToggleBlock = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // children에서 summary와 content 분리
    const childrenArray = React.Children.toArray(children);
    const summaryElement = childrenArray.find(
      (child: any) => child?.type === "summary" || child?.props?.node?.tagName === "summary"
    );
    const contentElements = childrenArray.filter(
      (child: any) => child?.type !== "summary" && child?.props?.node?.tagName !== "summary"
    );

    const summaryText = summaryElement 
      ? (typeof summaryElement === 'object' && 'props' in summaryElement 
          ? summaryElement.props.children 
          : summaryElement)
      : "토글";

    return (
      <S.ToggleContainer>
        <S.ToggleHeader onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          <span>{summaryText}</span>
        </S.ToggleHeader>
        {isOpen && <S.ToggleContent>{contentElements}</S.ToggleContent>}
      </S.ToggleContainer>
    );
  };

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
                <S.Tag key={tag}>{tag.replace(/^#/, "")}</S.Tag>
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

        {headings.length > 0 && (
          <S.TOCContainer>
            <S.TOCTitle>목차</S.TOCTitle>
            <S.TOCList>
              {headings.map((heading) => (
                <S.TOCItem
                  key={heading.id}
                  $level={heading.level}
                  $active={activeHeading === heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                >
                  {heading.text}
                </S.TOCItem>
              ))}
            </S.TOCList>
          </S.TOCContainer>
        )}

        <S.Content>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h1: ({ children }) => {
                const id = generateHeadingId(String(children));
                return <S.MarkdownH1 id={id}>{children}</S.MarkdownH1>;
              },
              h2: ({ children }) => {
                const id = generateHeadingId(String(children));
                return <S.MarkdownH2 id={id}>{children}</S.MarkdownH2>;
              },
              h3: ({ children }) => {
                const id = generateHeadingId(String(children));
                return <S.MarkdownH3 id={id}>{children}</S.MarkdownH3>;
              },
              h4: ({ children }) => {
                const id = generateHeadingId(String(children));
                return <S.MarkdownH4 id={id}>{children}</S.MarkdownH4>;
              },
              details: ({ children, ...props }) => {
                return <ToggleBlock>{children}</ToggleBlock>;
              },
              summary: ({ children }) => <>{children}</>,
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

