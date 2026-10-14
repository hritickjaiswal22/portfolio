// src/app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getAllPosts, getPost, groupBySeries } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.data.title, description: post.data.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { html, headings } = await post.render();
  const allPosts = await getAllPosts();
  const seriesGroups = groupBySeries(allPosts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_240px] gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Left: Series & Articles Sidebar */}
      <aside className="sticky top-24 h-fit hidden lg:block">
        {Object.entries(seriesGroups).map(([series, posts]) => (
          <div key={series} className="mb-6">
            <h3 className="text-sm font-semibold mb-2">{series}</h3>
            <ul className="space-y-1 text-sm">
              {posts.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/posts/${p.slug}`}
                    className={`block px-2 py-1 rounded ${
                      p.slug === slug
                        ? "bg-blue-100 dark:bg-blue-900 font-medium"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {p.data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Middle: Rendered Article */}
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Right: Scrollspy TOC */}
      <aside className="sticky top-24 h-fit hidden lg:block">
        <h3 className="text-sm font-semibold mb-3">On This Page</h3>
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li key={h.slug} style={{ paddingLeft: `${(h.depth - 2) * 12}px` }}>
              <a
                href={`#${h.slug}`}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
