// utils/fetchVelog.ts
type VelogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
};

const fetchVelogPosts = async (): Promise<VelogPost[]> => {
  try {
    const res = await fetch("/api/velog"); // ✅ 우리 서버 API로 요청
    if (!res.ok) throw new Error("서버 응답 실패");

    const posts: VelogPost[] = await res.json();
    return posts;
  } catch (e) {
    console.error("❌ Velog API 요청 실패:", e);
    return [];
  }
};

export default fetchVelogPosts;
