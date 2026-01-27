"use client";

import * as S from "./Second.styled";
import { useState, useEffect } from "react";
import ModeToggle from "../modetoggle/ModeToggle";
import BlogList from "../bloglist/BlogList";

interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    isVelogPost?: boolean;
    velogUrl?: string;
    velogDate?: string;
    series?: string;
    thumbnail?: string;
  };
}

const Second = () => {
  const [mode, setMode] = useState<"all" | "series">("all");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [series, setSeries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, seriesRes] = await Promise.all([
          fetch("/api/blog"),
          fetch("/api/blog/series"),
        ]);

        if (postsRes.ok) {
          const postsData = await postsRes.json();
          setPosts(postsData);
        }

        if (seriesRes.ok) {
          const seriesData = await seriesRes.json();
          setSeries(seriesData);
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Wrapper>
      <ModeToggle mode={mode} onModeChange={setMode} />
      <BlogList mode={mode} posts={posts} series={series} loading={loading} />
    </S.Wrapper>
  );
};

export default Second;

