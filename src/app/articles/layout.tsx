// src/app/articles/layout.tsx
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Left Sidebar */}
      <aside className="w-64 shrink-0 hidden lg:block">
        <h3 className="font-semibold text-lg mb-4 text-foreground">Series</h3>
        <ul className="space-y-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm block"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
