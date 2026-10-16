import { cn } from "cn";
import Link from "next/link";

interface SiteActionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  forceNewTab?: boolean;
}

function SiteAction({
  href,
  children,
  forceNewTab,
  className,
  ...props
}: SiteActionProps) {
  const styles =
    "rounded-sm font-semibold text-sm text-primary cursor-pointer px-6 py-2.5 border border-border hover:bg-accent hover:border-primary transition-colors";

  const isExternal = href.startsWith("http") || href.startsWith("//");

  const shouldOpenNewTab = isExternal || forceNewTab;

  const targetProps = shouldOpenNewTab
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(styles, className)}
        {...targetProps}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={cn(styles, className)}
      href={href}
      {...targetProps}
      {...props}
    >
      {children}
    </Link>
  );
}

export default SiteAction;
