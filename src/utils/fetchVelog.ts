// utils/fetchVelog.ts
export type VelogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  stats?: {
    likes: number;
    views: number;
  };
};

export type VelogData = {
  post: VelogPost | null;
  totalPosts: number;
};

const fetchVelogPosts = async (): Promise<VelogData> => {
  try {
    const res = await fetch("/api/velog"); // ✅ 우리 서버 API로 요청
    if (!res.ok) throw new Error("서버 응답 실패");

    const data: VelogData = await res.json();
    return data;
  } catch (e) {
    console.error("❌ Velog API 요청 실패:", e);
    return { post: null, totalPosts: 0 };
  }
};

export default fetchVelogPosts;
