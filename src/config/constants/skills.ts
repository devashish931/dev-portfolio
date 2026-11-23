import { Skill } from "@/types/skill";

export const SKILL_CATEGORIES = [
  {
    name: "Frameworks",
    description: "Rendering, routing and app structure",
  },
  {
    name: "Languages",
    description: "The foundation under everything",
  },
  {
    name: "State and styling",
    description: "Predictable state, consistent UI",
  },
  {
    name: "Backend and CMS",
    description: "APIs and content management",
  },
  {
    name: "Quality and tooling",
    description: "Testing, builds and containers",
  },
  {
    name: "AI-assisted workflow",
    description: "Faster iteration with human review",
  },
] as const;

export const SKILLS = [
  // Frameworks
  {
    name: "ReactJS",
    category: "Frameworks",
    featured: true,
    value: "/images/techStack/ReactJS.svg",
    url: "https://react.dev/",
  },
  {
    name: "NextJS",
    category: "Frameworks",
    featured: true,
    value: "/images/techStack/NextJS.svg",
    url: "https://nextjs.org/",
  },
  {
    name: "VueJS",
    category: "Frameworks",
    featured: false,
    value: "/images/techStack/Vue.svg",
    url: "https://vuejs.org/",
  },
  {
    name: "NuxtJS",
    category: "Frameworks",
    featured: false,
    value: "/images/techStack/Nuxt.svg",
    url: "https://nuxt.com/",
  },

  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    featured: true,
    value: "/images/techStack/Javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    category: "Languages",
    featured: true,
    value: "/images/techStack/Typescript.svg",
    url: "https://www.typescriptlang.org/",
  },

  // State and styling
  {
    name: "Redux",
    category: "State and styling",
    featured: true,
    value: "/images/techStack/Redux.svg",
    url: "https://redux.js.org/",
  },
  {
    name: "Zustand",
    category: "State and styling",
    featured: true,
    value: "/images/techStack/Zustand.svg",
    url: "https://zustand.docs.pmnd.rs/",
  },
  {
    name: "Tailwind CSS",
    category: "State and styling",
    featured: true,
    value: "/images/techStack/TailwindCSS.svg",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    category: "State and styling",
    featured: false,
    value: "/images/techStack/MaterialUI.svg",
    url: "https://mui.com/",
  },

  // Backend and CMS
  {
    name: "Node.js",
    category: "Backend and CMS",
    featured: false,
    value: "/images/techStack/NodeJS.svg",
    url: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    category: "Backend and CMS",
    featured: false,
    value: "/images/techStack/ExpressJS.svg",
    url: "https://expressjs.com/",
  },
  {
    name: "Strapi",
    category: "Backend and CMS",
    featured: true,
    value: "/images/techStack/Strapi.svg",
    url: "https://strapi.io/",
  },

  // Quality and tooling
  {
    name: "Jest",
    category: "Quality and tooling",
    featured: false,
    value: "/images/techStack/Jest.svg",
    url: "https://jestjs.io/",
  },
  {
    name: "Playwright",
    category: "Quality and tooling",
    featured: false,
    value: "/images/techStack/Playwright.svg",
    url: "https://playwright.dev/",
  },
  {
    name: "Docker",
    category: "Quality and tooling",
    featured: false,
    value: "/images/techStack/Docker.svg",
    url: "https://www.docker.com/",
  },
  {
    name: "Vite",
    category: "Quality and tooling",
    featured: false,
    value: "/images/techStack/Vite.svg",
    url: "https://vite.dev/",
  },

  // AI-assisted workflow
  {
    name: "ChatGPT",
    category: "AI-assisted workflow",
    featured: false,
    value: "/images/techStack/ChatGPT.svg",
    url: "https://chatgpt.com/",
  },
  {
    name: "Claude Code",
    category: "AI-assisted workflow",
    featured: false,
    value: "/images/techStack/ClaudeCode.svg",
    url: "https://www.claude.com/product/claude-code",
  },
  {
    name: "GitHub Copilot",
    category: "AI-assisted workflow",
    featured: false,
    value: "/images/techStack/GithubCopilot.svg",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Bootstrap",
    category: "State and styling",
    hidden: true,
  },
  {
    name: "dnd-kit",
    category: "User Experience",
    hidden: true,
  },
  {
    name: "MySQL",
    category: "Database",
    hidden: true,
  },
  {
    name: "React Hook Form",
    category: "Form",
    hidden: true,
  },
  {
    name: "React Query",
    category: "Server State",
    hidden: true,
  },
] as const satisfies readonly Skill[];

export type SkillName = (typeof SKILLS)[number]["name"];
