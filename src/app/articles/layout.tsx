// src/app/articles/layout.tsx
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-6xl w-full mx-auto p-2">{children}</main>;
}
