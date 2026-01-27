import type { Metadata } from "next";
import BlogPage from "@features/blogpage/BlogPage";

export const metadata: Metadata = { title: "Blog" };

export default async function Blog() {
  return <BlogPage />;
}

