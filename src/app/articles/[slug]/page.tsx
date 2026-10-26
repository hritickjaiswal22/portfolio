// src/app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function ArticleContent({ params }: PageProps) {
  const { slug } = await params;

  try {
    // Dynamically import the MDX file based on the slug
    const { default: Post } = await import(`@/content/articles/${slug}.mdx`);

    return <Post />;
  } catch (error) {
    // If the import fails (e.g., file doesn't exist), show a 404 page
    notFound();
  }
}

export default async function ArticlePage({ params }: PageProps) {
  return (
    <article className="prose lg:prose-xl">
      <Suspense fallback={<p>Loading article...</p>}>
        <ArticleContent params={params} />
      </Suspense>
    </article>
  );
}

// Optional: Prerender specific articles at build time
export function generateStaticParams() {
  return [
    { slug: "rendering-architectures" },
    // Add other slugs here
  ];
}

// Optional: Return a 404 for any slug not listed in generateStaticParams
// Remove this if you want to allow dynamic rendering for unknown slugs
// export const dynamicParams = false;
