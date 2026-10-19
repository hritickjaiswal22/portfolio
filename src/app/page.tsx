import { cn } from "cn";

import SiteAction from "@/components/site-action";
import CopyButton from "@/components/copy-button";

const EMAIL = "hritickjaiswal22@gmail.com";

interface HomeDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

function HomeDivider({ className = "", ...props }: HomeDividerProps) {
  return (
    <hr className={cn("border-t border-border-subtle", className)} {...props} />
  );
}

interface ExperienceListProps {
  list: Array<string>;
}

function ExperienceList({ list }: ExperienceListProps) {
  return (
    <div>
      {list.map((bullet, index) => (
        <div
          className={cn("flex gap-4", index !== list.length - 1 && "mb-4")}
          key={index}
        >
          <span>•</span>

          <p className="text-base">{bullet}</p>
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex gap-3 px-4 py-8 flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold leading-5 text-foreground">
        Hritick Jaiswal
      </h1>

      <p className="text-xl leading-6 text-secondary-foreground">
        Full Stack Software Engineer
      </p>

      <div className="flex flex-wrap gap-3 mt-2 justify-center items-center">
        <SiteAction
          href="/articles"
          forceNewTab={false}
          className="bg-primary text-primary-foreground hover:bg-accent-hover hover:border-accent-hover"
        >
          Browse Articles
        </SiteAction>

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
  );
}

function WorkExperienceSection() {
  const fixerraWorkExperiencePoints = [
    "Architected an in-app SSFB payment journey using React, JavaScript and REST APIs, improving UX and reducing external redirects through UPI/Netbanking, UPI intent, async polling, retries and state recovery, processing Rs.14.5Cr+/month across 3K+ transactions.",
    "Led the 0→1 Next.js and TypeScript-based frontend build of the Recurring Deposit product as the sole developer, reusing existing FD architecture and components while adapting REST API and journey logic, launched to production and scaled to Rs.7L+/month in recurring transactions.",
    "Re-engineered the FD Renewal flow using TypeScript and Redux Toolkit to sanitize inconsistent partner SSO data with configurable business-safe defaults and user guidance, reliably powering 9,000+ monthly bookings.",
    "Optimized the Shriram issuer flow using Redux Toolkit, HTML, and CSS, prefetching its consistency-critical check-status API to mitigate 10–12s upstream latency through parallel background execution, supporting Rs.2Cr+/month in transactions.",
    "Architected the end-to-end SSFB Break FD flow using Node.js, Next.js, MySQL and Redis, adding OTP verification, TTL-based state, and per-user rate limiting to control withdrawal attempts, handling Rs. 1Cr+/month with <500ms backend latency.",
    "Engineered a reusable React and TypeScript feedback component to surface journey-level customer pain points, attaching flow-specific context for centralized analysis across 10+ vKYC, eKYC, and payment flows.",
    "Architected JWT-based SSO for RD product(token management, redirect flows end-to-end); extended it across multiple product flows powering partner integrations with Tata Digital, Zomato, and others.",
    "Managed GitHub Actions CI/CD deployments to AWS (ECR and ECS), monitoring container rollouts, debugging logs, and resolving release issues with DevOps.",
  ];

  const tooliqaExperiencePoints = [
    "Optimized React data-grid rendering for 10K+ nested rows using virtualization, memoization, CSS and JavaScript reducing DOM workload and improving responsiveness of the data-intensive interface.",
    "Optimized a React-based 3D product configurator by dynamically loading relevant texture assets based on the selected surface, avoiding upfront loading of 10K+ assets and enabling responsive browsing and previewing.",
    "Built an Angular canvas app for architects and designers, featuring real-time rendering, drag-and-drop layout manipulation, and precise geometry controls for room planning.",
  ];

  const mywaysWorkExperiencePoints = [
    "Optimized the PersonalityInsight questionnaire using React, JavaScript, HTML, and CSS, batching responses in groups of 10 to reduce API calls by 80–90% while preserving journey resumability and response edits",
    "Built and launched a core product feature used by 80K+ users, implementing it with React, Material UI, and REST APIs",
  ];

  return (
    <section className="px-2">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Work History</h2>
      </div>

      <div>
        <div className="flex mb-4 flex-col gap-5 justify-between md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <h3 className="text-xl font-semibold">Codebuddy</h3>
            <p className="text-xl font-medium text-muted-foreground hidden md:block">
              /
            </p>
            <p className="text-xl font-semibold text-muted-foreground">
              Full Stack Software Engineer
            </p>
          </div>
          <h4 className="font-semibold text-base">April 2026 - June 2026</h4>
        </div>
        <ExperienceList
          list={[
            "Built 15+ React Native screens using reusable TypeScript components, shared styling patterns, and Cursor to rapidly deliver a complete cross-platform frontend under a tight project deadline.",
            "Engineered an AI-assisted BRD generation workflow using Python, React, and OpenAI/Claude APIs, integrating Figma context and prompt-driven generation to accelerate initial requirement drafting and enable conversational document refinement.",
          ]}
        />
      </div>

      <HomeDivider className="my-12" />

      <div>
        <div className="flex mb-4 flex-col gap-5 justify-between md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <h3 className="text-xl font-semibold">Fixerra</h3>
            <p className="text-xl font-medium text-muted-foreground hidden md:block">
              /
            </p>
            <p className="text-xl font-semibold text-muted-foreground">
              Software Development Engineer
            </p>
          </div>
          <h4 className="font-semibold text-base">July 2024 - March 2026</h4>
        </div>
        <ExperienceList list={fixerraWorkExperiencePoints} />
      </div>

      <HomeDivider className="my-12" />

      <div>
        <div className="flex mb-4 flex-col gap-5 justify-between md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <h3 className="text-xl font-semibold">Tooliqa</h3>
            <p className="text-xl font-medium text-muted-foreground hidden md:block">
              /
            </p>
            <p className="text-xl font-semibold text-muted-foreground">
              Full Stack Software Engineer
            </p>
          </div>
          <h4 className="font-semibold text-base">March 2023 - March 2024</h4>
        </div>
        <ExperienceList list={tooliqaExperiencePoints} />
      </div>

      <HomeDivider className="my-12" />

      <div>
        <div className="flex mb-4 flex-col gap-5 justify-between md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <h3 className="text-xl font-semibold">MyWays</h3>
            <p className="text-xl font-medium text-muted-foreground hidden md:block">
              /
            </p>
            <p className="text-xl font-semibold text-muted-foreground">
              Software Engineer Intern
            </p>
          </div>
          <h4 className="font-semibold text-base">
            February 2022 - August 2022
          </h4>
        </div>
        <ExperienceList list={mywaysWorkExperiencePoints} />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <section className="flex-col flex justify-center md:justify-between items-center gap-4 pb-10 md:flex-row md:items-center">
        <div className="text-center md:text-start">
          <h1 className="text-base font-medium leading-4 text-foreground">
            Hritick Jaiswal
          </h1>

          <p className="text-muted-foreground text-sm mt-2">
            Open to full-time and contract work
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            className="text-base font-semibold leading-4 text-foreground hover:underline cursor-pointer"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
          <CopyButton text={EMAIL} />
        </div>
      </section>

      <HomeDivider />

      <p className="text-center text-xs text-muted-foreground my-8">
        Made with ❤ is maintained by Hritick Jaiswal
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="max-w-[100ch] w-full mx-auto p-2">
      <HeroSection />

      <HomeDivider className="my-12" />

      <WorkExperienceSection />

      <HomeDivider className="my-12" />

      <Footer />
    </main>
  );
}
