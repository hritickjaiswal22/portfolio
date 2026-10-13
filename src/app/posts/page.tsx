// src/app/posts/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export default async function PostsIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Articles</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <h2 className="text-xl font-semibold">{post.data.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {post.data.description}
              </p>
              <time className="text-sm text-gray-400 mt-2 block">
                {post.data.date.toLocaleDateString()}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
