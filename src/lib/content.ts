// src/lib/content.ts
import { createContentLayer } from "@pagesmith/site";
import { collections } from "@/content.config";

export const content = createContentLayer({ collections });

// Helper: get a single post by slug
export async function getPost(slug: string) {
  return content.getEntry("posts", slug);
}

// Helper: get all posts sorted by date (newest first)
export async function getAllPosts() {
  const entries = await content.getCollection("posts");
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Helper: group posts by series for the left sidebar
export function groupBySeries(posts: Awaited<ReturnType<typeof getAllPosts>>) {
  return posts.reduce(
    (acc, post) => {
      const series = post.data.series ?? "Uncategorized";
      if (!acc[series]) acc[series] = [];
      acc[series].push(post);
      return acc;
    },
    {} as Record<string, typeof posts>,
  );
}
