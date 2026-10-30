export const SERIES = [
  {
    id: "1",
    series: "Frontend System Design",
    description:
      "Rendering, client performance, state, and frontend system design exercises.",
    artciles: [
      {
        id: "1",
        name: "Modern Rendering Architectures: RSC, Streaming, Islands, and Resumability",
        shortName: "Modern Rendering",
        description:
          "How modern frameworks compose static, server-streamed, and client-only rendering inside one page — React Server Components, Suspense streaming, islands architecture, Partial Prerendering, and Qwik resumability — with a decision framework grounded in INP and bundle cost.",
        tags: ["Frontend", "Rendering", "React"],
        slug: "rendering-architectures",
      },
      {
        id: "2",
        name: "Image Loading Optimization",
        shortName: "Image Loading Optimization",
        description:
          "How to deliver images on the web without trading LCP for CLS or bandwidth for fidelity — native lazy loading, responsive images, AVIF/WebP negotiation, fetchpriority, preload, and the layout-shift mechanics behind width/height.",
        tags: ["Frontend", "Optimization"],
        slug: "img-ldng-optmz",
      },
    ],
  },
  {
    id: "2",
    series: "Interview Experiences",
    description: "Interview experiences for various roles and companies",
    artciles: [
      {
        id: "1",
        name: "SDE1 Frontend - Swiggy",
        shortName: "SDE1 Frontend - Swiggy",
        description: "",
        tags: ["Machine Coding", "PSDS", "Hiring manager", "Frontend"],
        slug: "intrvw-exp-swgy",
      },
      {
        id: "2",
        name: "SDE2 Frontend - Paytm",
        shortName: "SDE2 Frontend - Paytm",
        description: "",
        tags: ["Machine Coding", "React", "Hiring manager", "Frontend"],
        slug: "intrvw-exp-pytm",
      },
    ],
  },
];
