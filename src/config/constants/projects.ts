import { ProjectItem } from "@/types/project";

const projectCardImagesFolderPath = "/images/projects/card";
const projectHeroImagesFolderPath = "/images/projects/hero";

export const PROJECTS: ProjectItem[] = [
  {
    title: "WPT Play",
    slug: "wpt-play",
    year: "2025 - 2026",
    link: "https://play.wptgo.com/",
    image: {
      card: `${projectCardImagesFolderPath}/wptPlay.webp`,
      hero: `${projectHeroImagesFolderPath}/wptPlay.webp`,
    },
    category: "web-application",
    shortDescription:
      "A poker platform providing players with an online gaming experience.",
    description:
      "WPT Play is an online poker platform associated with the World Poker Tour brand. It provides a player-facing web experience for accessing poker games and related platform services.",
    role: "Frontend Developer",
    team: "WPT frontend team",
    responsibilities: [
      "Developed and maintained frontend application interfaces.",
      "Implemented reusable UI components and responsive layouts.",
      "Integrated frontend functionality with backend APIs.",
    ],
    technologies: [],
    tags: ["react", "typescript", "poker", "gaming"],
  },
  {
    title: "World Poker Tour",
    slug: "wpt",
    year: "2022 - 2026",
    link: "https://www.worldpokertour.com",
    image: {
      card: `${projectCardImagesFolderPath}/wpt.webp`,
      hero: `${projectHeroImagesFolderPath}/wpt.webp`,
    },
    category: "content-platform",
    shortDescription: "The official website of the World Poker Tour.",
    description:
      "The official World Poker Tour website provides information about poker tournaments, events, players, news, and other WPT-related content. It serves as a central destination for visitors to explore the brand and its activities.",
    role: "Frontend Developer",
    team: "WPT frontend team",
    responsibilities: [
      "Developed and maintained website frontend interfaces.",
      "Implemented reusable components and responsive page layouts.",
      "Worked on integrating website content and frontend functionality.",
    ],
    technologies: [],
    tags: ["react", "typescript", "poker", "contentPlatform"],
  },
  {
    title: "College Disha",
    slug: "college-disha",
    year: "2020 - 2021",
    link: "https://www.collegedisha.com/",
    image: {
      card: `${projectCardImagesFolderPath}/collegeDisha.webp`,
      hero: `${projectHeroImagesFolderPath}/collegeDisha.webp`,
    },
    category: "content-platform",
    shortDescription:
      "An education platform offering career and college guidance.",
    description:
      "An education and career guidance platform that helps students explore colleges, courses, and education-related information. It brings together resources to support students in making informed academic and career decisions.",
    role: "Web Developer",
    team: "College Disha team",
    responsibilities: [
      "Developed and maintained frontend website interfaces.",
      "Implemented responsive page layouts and reusable components.",
      "Integrated frontend pages with backend APIs and content.",
    ],
    technologies: [],
    tags: ["react", "education", "careerGuidance", "contentPlatform"],
  },
  {
    title: "Sosh Nft",
    slug: "sosh-nft",
    year: "2022 - 2023",
    link: "https://www.soshnft.io/",
    image: {
      card: `${projectCardImagesFolderPath}/soshNft.webp`,
      hero: `${projectHeroImagesFolderPath}/soshNft.webp`,
    },
    category: "marketplace",
    shortDescription: "An NFT-focused digital platform.",
    description:
      "A digital platform focused on NFTs, providing a web interface for users to explore and interact with NFT-related content and functionality.",
    role: "Frontend Developer",
    team: "Cross-functional team",
    responsibilities: [
      "Developed frontend interfaces and reusable UI components.",
      "Implemented responsive page layouts.",
      "Integrated frontend functionality with backend services.",
    ],
    technologies: [],
    tags: ["react", "nft", "blockchain", "marketplace"],
  },
  {
    title: "Casino Lobby",
    slug: "casino-lobby",
    year: "2022 - 2026",
    link: "https://play.wptgo.com/",
    image: {
      card: `${projectCardImagesFolderPath}/casinoLobby.webp`,
      hero: `${projectHeroImagesFolderPath}/casinoLobby.webp`,
    },
    category: "web-application",
    shortDescription:
      "A configurable casino lobby displaying games, banners, and dynamic content.",
    description:
      "A casino lobby experience built to display dynamically configured content across different regions, locales, and devices. The frontend integrates with a custom Strapi-based CMS that allows content managers to configure lobby layouts using reusable blocks, games, and banners.",
    role: "Senior Lead - Frontend",
    team: "3 frontend developers",
    responsibilities: [
      "Developed and maintained frontend components for the casino lobby.",
      "Integrated dynamically configured lobby content from Strapi.",
      "Worked on rendering configurable sections, games, and banners.",
      "Collaborated on the integration between the CMS and frontend application.",
    ],
    technologies: ["React", "Strapi"],
    tags: ["react", "strapi", "casino", "gaming"],
  },
  {
    title: "Casino CMS",
    slug: "casino-cms",
    year: "2022 - 2026",
    link: "https://docs.google.com/document/d/10PfbbCIEF0SC020m3R_vBd6C0EKNwCbul2E_X1dXxtw/",
    image: {
      card: `${projectCardImagesFolderPath}/casinoCms.webp`,
      hero: `${projectHeroImagesFolderPath}/casinoCms.webp`,
    },
    category: "cms",
    shortDescription:
      "A custom Strapi plugin for building and managing casino lobby layouts.",
    description:
      "A customized Strapi CMS solution designed to simplify casino lobby creation and management. It provides a visual builder that allows content managers to create and update lobbies for different regions, locales, and devices by arranging reusable blocks, games, and banners through drag-and-drop interactions.",
    role: "Senior Lead - Frontend",
    team: "3 frontend developers",
    responsibilities: [
      "Worked on the frontend implementation of the custom casino lobby builder.",
      "Implemented drag-and-drop interactions for arranging lobby content.",
      "Worked with configurable blocks, games, and banners.",
      "Integrated the CMS functionality with the casino frontend.",
    ],
    technologies: ["React", "Strapi", "DnD Kit"],
    tags: ["react", "strapi", "dndKit", "cms", "casino", "gaming"],
  },
  {
    title: "WPT Global",
    slug: "wpt-global",
    year: "2023 - 2026",
    link: "https://wptglobal.com",
    image: {
      card: `${projectCardImagesFolderPath}/wptGlobal.webp`,
      hero: `${projectHeroImagesFolderPath}/wptGlobal.webp`,
    },
    category: "web-application",
    shortDescription: "The official user-facing web platform of WPT Global.",
    description:
      "WPT Global is an online poker platform associated with the World Poker Tour brand. Its website provides users with information about the platform, poker offerings, promotions, and related services.",
    role: "Senior Lead - Frontend",
    team: "3 frontend developers",
    responsibilities: [
      "Developed and maintained frontend application interfaces.",
      "Implemented reusable components and responsive page layouts.",
      "Integrated frontend functionality with backend services.",
    ],
    technologies: [],
    tags: ["react", "typescript", "poker", "gaming"],
  },
  {
    title: "WPTG CMS",
    slug: "wptg-cms",
    year: "2023 - 2026",
    link: "https://docs.google.com/document/d/1QyWUGF8XigvNtZ_bsidATKtW4VsrUUhNhj3JsCe8F3w",
    image: {
      card: `${projectCardImagesFolderPath}/wptgCms.webp`,
      hero: `${projectHeroImagesFolderPath}/wptgCms.webp`,
    },
    category: "cms",
    shortDescription:
      "A customized Strapi CMS for managing WPT Global website content.",
    description:
      "A Strapi-based CMS solution customized to support WPT Global's content management requirements. The project involved extending the CMS with custom content types, fields, business logic, validation, and plugins while improving API efficiency, security, and the content management experience.",
    role: "Senior Lead - Frontend",
    team: "3 frontend developers",
    responsibilities: [
      "Worked on custom CMS content types and fields.",
      "Contributed to custom plugins and Strapi extensions.",
      "Worked with API controllers and services for business logic and validation.",
      "Contributed to frontend integration with CMS functionality.",
    ],
    technologies: ["React", "Strapi"],
    tags: ["react", "strapi", "cms", "contentPlatform", "poker"],
  },
  {
    title: "WPTG Promo",
    slug: "wptg-promo",
    year: "2022 - 2024",
    link: "https://app-promo.wptglobal.com/",
    image: {
      card: `${projectCardImagesFolderPath}/wptgPromo.webp`,
      hero: `${projectHeroImagesFolderPath}/wptgPromo.webp`,
    },
    category: "promotional-platform",
    shortDescription:
      "A promotional platform for presenting WPT Global campaigns and offers.",
    description:
      "A dedicated promotional web experience for WPT Global, built to present campaigns, offers, and marketing content through campaign-focused pages.",
    role: "Senior Lead - Frontend",
    team: "3 frontend developers",
    responsibilities: [
      "Developed and maintained promotional frontend pages.",
      "Implemented reusable UI components and responsive layouts.",
      "Worked on integrating dynamic content into promotional pages.",
    ],
    technologies: [],
    tags: ["react", "typescript", "promotionalPlatform", "poker"],
  },
  {
    title: "WPT CMS",
    slug: "wpt-cms",
    year: "2024 - 2025",
    link: "https://docs.google.com/document/d/1RKs9ZwEU126C4xaR1msbcbfrAhO3HX0LW7Uv7bhi-oA/",
    image: {
      card: `${projectCardImagesFolderPath}/wptCms.webp`,
      hero: `${projectHeroImagesFolderPath}/wptCms.webp`,
    },
    category: "cms",
    shortDescription:
      "A customized Strapi CMS for managing World Poker Tour website content.",
    description:
      "A Strapi-based content management solution configured to support the World Poker Tour website. The CMS was customized around frontend requirements to help content managers maintain and update website information.",
    role: "Frontend Developer",
    team: "WPT frontend team",
    responsibilities: [
      "Worked on CMS customization based on frontend requirements.",
      "Contributed to the integration between the CMS and website frontend.",
      "Worked on content management functionality and frontend data requirements.",
    ],
    technologies: ["React", "Strapi"],
    tags: ["react", "strapi", "cms", "contentPlatform", "poker"],
  },
  {
    title: "My Portfolio",
    slug: "dev-portfolio",
    year: "2025 - 2026",
    link: "/",
    image: {
      card: `${projectCardImagesFolderPath}/devPortfolio.webp`,
      hero: `${projectHeroImagesFolderPath}/devPortfolio.webp`,
    },
    category: "personal-project",
    shortDescription:
      "A personal portfolio showcasing my frontend development experience and projects.",
    description:
      "A personal portfolio website built to showcase my professional experience, selected projects, technical skills, and frontend development work. It focuses on reusable components, responsive layouts, and clear presentation of project information.",
    role: "Frontend Developer",
    team: "Solo",
    responsibilities: [
      "Designed and developed the portfolio website.",
      "Built reusable components and page layouts.",
      "Implemented responsive layouts and interactive UI elements.",
      "Structured project data and reusable content sections.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["nextjs", "react", "typescript", "tailwind", "personalProject"],
  },

  {
    title: "Distinct",
    slug: "distinct",
    year: "2022 - 2024",
    link: "https://distinct.so",
    image: {
      card: `${projectCardImagesFolderPath}/distinct.webp`,
      hero: `${projectHeroImagesFolderPath}/distinct.webp`,
    },
    category: "web-application",
    shortDescription: "A web-based digital product experience.",
    description:
      "A web application developed for Distinct, providing users with a dedicated interface to explore and interact with the platform's services.",
    role: "Frontend Developer",
    team: "Cross-functional team",
    responsibilities: [
      "Developed and maintained frontend interfaces.",
      "Built reusable UI components and responsive layouts.",
      "Integrated frontend functionality with backend APIs.",
    ],
    technologies: [],
    tags: ["react"],
  },
  {
    title: "GamaVrs",
    slug: "gamavrs",
    year: "2021 - 2023",
    link: "https://a5labsapp.co/",
    image: {
      card: `${projectCardImagesFolderPath}/gamaVrs.webp`,
      hero: `${projectHeroImagesFolderPath}/gamaVrs.webp`,
    },
    category: "admin-dashboard",
    shortDescription:
      "An administration dashboard for managing a game avatar marketplace.",
    description:
      "A centralized administration dashboard for managing the operational aspects of a game avatar marketplace. It provides tools for avatar generation, manual assignment, user management, 3D NFT management, role-based access control, and content management.",
    role: "Frontend Developer",
    team: "Cross-functional team",
    responsibilities: [
      "Developed frontend modules for avatar generation and manual assignment workflows.",
      "Built user management and 3D NFT management interfaces.",
      "Implemented role-based access control interfaces.",
      "Developed CMS functionality and rich-text editing workflows.",
      "Managed server state, forms, and data visualization across dashboard modules.",
    ],
    technologies: [
      "React",
      "Ant Design",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Yup",
      "TanStack Query",
      "Chart.js",
      "React Router",
      "JWT",
      "CKEditor",
    ],
    tags: [
      "react",
      "antd",
      "tailwind",
      "zustand",
      "tanstackQuery",
      "adminDashboard",
      "nft",
      "marketplace",
      "gaming",
    ],
  },
  {
    title: "Moments NFT",
    slug: "moment-nft",
    year: "2021 - 2023",
    link: "hhttps://a5labsapp.co/moments-auction/about",
    image: {
      card: `${projectCardImagesFolderPath}/momentNft.webp`,
      hero: `${projectHeroImagesFolderPath}/momentNft.webp`,
    },
    category: "marketplace",
    shortDescription: "An NFT auction platform for digital collectibles.",
    description:
      "A digital platform centered around NFT auctions, providing an experience for users to explore digital collectibles and participate in auction-related activities.",
    role: "Frontend Developer",
    team: "Cross-functional team",
    responsibilities: [
      "Developed frontend interfaces for the platform.",
      "Implemented reusable UI components and responsive layouts.",
      "Integrated frontend functionality with backend services.",
    ],
    technologies: [],
    tags: ["react", "nft", "auction", "marketplace", "blockchain"],
  },
];
