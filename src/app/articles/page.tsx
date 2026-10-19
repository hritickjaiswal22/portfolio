import Link from "next/link";

interface SiteCardProps {
  name: string;
  description: string;
  tags: Array<string>;
  slug: string;
}

const series = [
  {
    series: "Frontend System Design",
    description:
      "Rendering, client performance, state, and frontend system design exercises.",
    artciles: [
      {
        name: "Modern Rendering Architectures: RSC, Streaming, Islands, and Resumability",
        description:
          "How modern frameworks compose static, server-streamed, and client-only rendering inside one page — React Server Components, Suspense streaming, islands architecture, Partial Prerendering, and Qwik resumability — with a decision framework grounded in INP and bundle cost.",
        tags: ["Frontend", "Rendering", "React"],
        slug: "rendering-architectures",
      },
      {
        name: "Modern Rendering Architectures: RSC, Streaming, Islands, and Resumability",
        description:
          "How modern frameworks compose static, server-streamed, and client-only rendering inside one page — React Server Components, Suspense streaming, islands architecture, Partial Prerendering, and Qwik resumability — with a decision framework grounded in INP and bundle cost.",
        tags: ["Frontend", "Rendering", "React"],
        slug: "rendering-architectures2",
      },
    ],
  },
  {
    series: "Frontend System Design2",
    description:
      "Rendering, client performance, state, and frontend system design exercises.",
    artciles: [
      {
        name: "Modern Rendering Architectures: RSC, Streaming, Islands, and Resumability",
        description:
          "How modern frameworks compose static, server-streamed, and client-only rendering inside one page — React Server Components, Suspense streaming, islands architecture, Partial Prerendering, and Qwik resumability — with a decision framework grounded in INP and bundle cost.",
        tags: ["Frontend", "Rendering", "React"],
        slug: "rendering-architectures",
      },
      {
        name: "Modern Rendering Architectures: RSC, Streaming, Islands, and Resumability",
        description:
          "How modern frameworks compose static, server-streamed, and client-only rendering inside one page — React Server Components, Suspense streaming, islands architecture, Partial Prerendering, and Qwik resumability — with a decision framework grounded in INP and bundle cost.",
        tags: ["Frontend", "Rendering", "React"],
        slug: "rendering-architectures2",
      },
    ],
  },
];

function SiteCard({ description, name, tags, slug }: SiteCardProps) {
  return (
    <Link href={`/articles/${slug}`}>
      <div className="rounded-sm transition-colors transition-transform p-4 flex flex-col gap-3 hover:bg-accent cursor-pointer border-l-2 border-l-transparent hover:border-l-primary hover:translate-x-0.5 group">
        <span className="text-foreground font-semibold group-hover:underline">
          {name}
        </span>
        <p className="text-secondary-foreground text-sm leading-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="text-sm px-2 py-0.5 font-semibold bg-card text-secondary-foreground border-border-subtle border"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

function Articles() {
  return (
    <article className="py-8 px-2">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>

      <p className="text-base text-secondary-foreground mb-8">
        Browse by series or pick an article to read.
      </p>

      {series.map(({ artciles, description, series }) => (
        <section key={series}>
          <h2 className="mt-10 mb-3 text-2xl font-semibold pb-2 border-b border-b-border-subtle">
            {series}
          </h2>

          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          {artciles.map((artcile) => (
            <SiteCard key={artcile.slug} {...artcile} />
          ))}
        </section>
      ))}
    </article>
  );
}

export default Articles;
