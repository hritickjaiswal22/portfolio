// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

// Define your custom components, using your CSS variables via Tailwind utilities
const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-bold text-foreground mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-semibold text-foreground mt-8 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-foreground-secondary leading-7 my-4" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => (
    <Link
      href={href as string}
      className="text-primary underline underline-offset-4 hover:text-accent-hover transition-colors"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-inside text-foreground-secondary my-4 space-y-2"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-inside text-foreground-secondary my-4 space-y-2"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-blockquote-border bg-blockquote-bg pl-4 italic text-foreground-muted my-6"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code
      className="bg-background-code text-code-text px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="bg-background-code text-code-text p-4 rounded-lg overflow-x-auto my-6 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }) => (
    <Image
      src={src as string}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-lg my-6 border border-border-subtle"
      {...props}
    />
  ),
  hr: (props) => <hr className="border-border-subtle my-8" {...props} />,
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-border-subtle"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border-subtle bg-background-alt p-2 text-left text-foreground"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="border border-border-subtle p-2 text-foreground-secondary"
      {...props}
    >
      {children}
    </td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
