import SiteAction from "@/components/site-action";
import { cn } from "cn";

interface HomeDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

function HomeDivider({ className = "", ...props }: HomeDividerProps) {
  return (
    <hr className={cn("border-t border-border-subtle", className)} {...props} />
  );
}

export default function Home() {
  return (
    <main className="max-w-[100ch] w-full mx-auto">
      <section className="flex gap-3 px-4 py-8 flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold leading-5 text-foreground">
          Hritick Jaiswal
        </h1>

        <p className="text-xl leading-6 text-secondary-foreground">
          Full Stack Software Engineer
        </p>

        <div className="flex flex-wrap gap-3 mt-2 justify-center items-center">
          <SiteAction
            href="https://github.com/hritickjaiswal22"
            forceNewTab={true}
          >
            GitHub
          </SiteAction>

          <SiteAction
            href="https://www.linkedin.com/in/hritick-jaiswal"
            forceNewTab={true}
          >
            LinkedIn
          </SiteAction>
        </div>
      </section>

      <HomeDivider className="my-12" />
    </main>
  );
}
