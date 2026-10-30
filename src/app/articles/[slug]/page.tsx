// src/app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Suspense } from "react";

import SeriesAccordion from "@/components/series-accordion";
import { SERIES } from "@/lib/series";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface LeftSidebarProps {
  slug: string;
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

function LeftSidebar({ slug }: LeftSidebarProps) {
  const selectedSeries = SERIES.find((series) =>
    series.artciles.find((obj) => obj.slug === slug),
  );

  return (
    <aside className="hidden xl:block py-6 px-4 h-[calc(100vh-60px)] w-3xs border-r border-r-border-subtle">
      <h4 className="text-xs uppercase py-1 px-2 font-semibold text-muted-foreground tracking-widest mb-1">
        Series
      </h4>

      <SeriesAccordion
        selectedSeriesId={selectedSeries?.id || ""}
        activeSlug={slug}
      />
    </aside>
  );
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <section className="max-w-7xl mx-auto w-full flex">
      <LeftSidebar slug={slug} />
      <article>
        <Suspense fallback={<p>Loading article...</p>}>
          <ArticleContent params={params} />
        </Suspense>
      </article>
    </section>
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
