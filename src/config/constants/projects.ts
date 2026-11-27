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
      "Built a shared authentication module and cross-application communication layer to connect multiple micro-frontends.",
    description:
      "WPT Play is an online poker platform associated with the World Poker Tour brand. It provides a player-facing web experience for accessing poker games and related platform services.",
    role: "Senior Lead - Frontend Development",
    team: "4",
    responsibilities: [
      "Designed and implemented a communication layer between micro-frontends running inside iframes using the postMessage API.",
      "Developed a reusable authentication module that could be shared across multiple applications as a Git module.",
      "Integrated casino and promotional applications through iframes, establishing a common communication protocol and shared authentication flow.",
    ],
    technologies: [
      "ReactJS",
      "TypeScript",
      "Zustand",
      "Strapi",
      "NextJS",
      "Tailwind CSS",
    ],
    tags: ["poker", "gaming"],
  },
  {
    title: "World Poker Tour",
    slug: "wpt",
    year: "2022 - 2025",
    link: "https://www.worldpokertour.com",
    image: {
      card: `${projectCardImagesFolderPath}/wpt.webp`,
      hero: `${projectHeroImagesFolderPath}/wpt.webp`,
    },
    category: "content-platform",
    shortDescription:
      "Led the migration to Next.js, developed reusable page structures, integrated Strapi content, and improved loading performance.",
    description:
      "The official World Poker Tour website provides information about poker tournaments, events, players, news, and other WPT-related content. It serves as a central destination for visitors to explore the brand and its activities.",
    role: "Senior Associate Consultant",
    team: "A5Labs frontend Team",
    responsibilities: [
      "Led the frontend migration from a legacy implementation to Next.js, rebuilding key parts of the website.",
      "Developed dynamic page structures using reusable layouts and blog sections, making it easier to manage different content types.",
      "Integrated Strapi content with the frontend to support dynamic website pages and content updates.",
      "Improved page loading performance by implementing image optimization across the website.",
    ],
    technologies: ["ReactJS", "NextJS", "Zustand", "Strapi", "TypeScript"],
    tags: ["poker", "contentPlatform"],
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
      "Migrated a legacy PHP frontend to Next.js, defining its architecture and rendering strategy while improving performance by around 25%.",
    description:
      "An education and career guidance platform that helps students explore colleges, courses, and education-related information. It brings together resources to support students in making informed academic and career decisions.",
    role: "Web Developer",
    team: "1",
    responsibilities: [
      "Migrated the frontend from a legacy PHP codebase to Next.js, modernizing the application's frontend architecture.",
      "Designed the frontend structure and defined rendering strategies while preserving existing URL patterns and SEO requirements.",
      "Improved overall platform performance by around 25% through SSR, code splitting, and targeted frontend optimizations.",
    ],
    technologies: ["ReactJS", "Redux", "Material UI", "NextJS"],
    tags: ["education", "careerGuidance", "contentPlatform"],
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
    shortDescription:
      "Improved the existing application's UI and UX, completed key frontend features, and integrated backend APIs and blockchain services.",
    description:
      "A digital platform focused on NFTs associated to social media content, providing a web interface for users to generate, buy, sell NFT content (Thier own social media content).",
    role: "Senior Associate Consultant",
    team: "1",
    responsibilities: [
      "Developed a clean and accessible interface that simplified the NFT creation experience for users.",
      "Took an existing partially developed application forward by improving its UI and UX and completing key frontend features through delivery.",
      "Handled frontend integration with backend APIs and blockchain services to support the platform's core workflows.",
    ],
    technologies: ["ReactJS", "Redux", "Vite", "TypeScript"],
    tags: ["nft", "blockchain", "marketplace", "creatorEconomy"],
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
      "Developed a widget-based lobby architecture, integrated embedded application communication, and optimized API data handling.",
    description:
      "A casino lobby experience built to display dynamically configured content across different regions, locales, and devices. The frontend integrates with a custom Strapi-based CMS that allows content managers to configure lobby layouts using reusable blocks, games, and banners.",
    role: "Senior Associated Consultant",
    team: "2",
    responsibilities: [
      "Developed a widget-based frontend architecture that generates lobby pages dynamically from configurable widgets and layouts.",
      "Integrated the lobby with desktop and mobile applications, handling communication between the embedded experience and its parent application.",
      "Optimized data handling and API payloads using references for related content, along with image optimization to improve loading performance.",
    ],
    technologies: ["VueJS", "Strapi", "Vite", "Bootstrap"],
    tags: ["casino", "gaming", "cms", "poker"],
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
      "Built a drag-and-drop lobby builder with collection editing, localization workflows, bulk operations, and role-based access control.",
    description:
      "A customized Strapi CMS solution designed to simplify casino lobby creation and management. It provides a visual builder that allows content managers to create and update lobbies for different regions, locales, and devices by arranging reusable blocks, games, and banners through drag-and-drop interactions.",
    role: "Senior Associate Consultant",
    team: "2",
    responsibilities: [
      "Designed and developed a drag-and-drop lobby builder that allows content managers to assemble lobbies using games, banners, and reusable content blocks.",
      "Implemented in-builder collection editing, lobby creation, and translation management to simplify day-to-day content operations.",
      "Developed scripts for bulk database operations, including updating image references to use optimized assets.",
      "Implemented role-based access control to manage permissions across different builder features.",
    ],
    technologies: [
      "ReactJS",
      "Strapi",
      "dnd-kit",
      "TypeScript",
      "Zustand",
      "Node.js",
      "MySQL",
    ],
    tags: ["cms", "casino", "gaming", "adminDashboard", "contentPlatform"],
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
    shortDescription:
      "Built reusable frontend components, integrated analytics, and developed an internal tool to validate translation files.",
    description:
      "WPT Global is an online poker platform associated with the World Poker Tour brand. Its website provides users with information about the platform, poker offerings, promotions, and related services.",
    role: "Senior Lead - Frontend Development",
    team: "4",
    responsibilities: [
      "Developed an internal translation validation tool to identify missing keys and structural inconsistencies across localization files.",
      "Integrated Segment analytics to capture user interactions and support product analytics.",
      "Built reusable frontend components and responsive page layouts across the platform.",
      "Integrated website content and implemented frontend functionality to support platform requirements.",
      "Improved website loading performance through image optimization.",
    ],
    technologies: ["VueJS", "NuxtJS", "Node.js"],
    tags: ["poker", "contentPlatform", "analytics"],
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
      "Extended Strapi with custom content collections, locale duplication plugins, and application-specific API logic and validation.",
    description:
      "A Strapi-based CMS solution customized to support WPT Global's content management requirements. The project involved extending the CMS with custom content types, fields, business logic, validation, and plugins while improving API efficiency, security, and the content management experience.",
    role: "Senior Lead - Frontend Development",
    team: "4",
    responsibilities: [
      "Extended the CMS with new features and custom content collections to support evolving content management requirements.",
      "Developed custom plugins to duplicate collections and their entries across supported locales, reducing repetitive content creation and setup.",
      "Worked on API controllers and services to implement application-specific business logic and validation.",
    ],
    technologies: ["ReactJS", "Strapi", "Node.js", "TypeScript", "MySQL"],
    tags: ["cms", "contentPlatform", "poker"],
  },
  {
    title: "WPTG Promo",
    slug: "wptg-promo",
    year: "2022 - 2024",
    link: "https://play.wptgo.com/",
    image: {
      card: `${projectCardImagesFolderPath}/wptgPromo.webp`,
      hero: `${projectHeroImagesFolderPath}/wptgPromo.webp`,
    },
    category: "promotional-platform",
    shortDescription:
      "Developed a reusable widget-based page architecture and migrated the application from Vue.js to Next.js.",
    description:
      "A dedicated promotional web experience for WPT Global, built to present campaigns, offers, and marketing content through campaign-focused pages.",
    role: "Senior Associate Consultant",
    team: "1",
    responsibilities: [
      "Developed a widget-based frontend architecture to build promotional pages dynamically from reusable UI components.",
      "Integrated the promotional platform with desktop and mobile applications, including communication with the parent application.",
      "Migrated the entire application from Vue.js to Next.js, rebuilding the frontend while preserving existing functionality.",
    ],
    technologies: ["VueJS", "Vite", "Bootstrap", "ReactJS", "NextJS"],
    tags: ["promotionalPlatform", "poker", "contentPlatform", "cms"],
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
      "Customized Strapi content models and integrated CMS data with the frontend to support website content requirements.",
    description:
      "A Strapi-based content management solution configured to support the World Poker Tour website. The CMS was customized around frontend requirements to help content managers maintain and update website information.",
    role: "Senior Associate Consultant",
    team: "3",
    responsibilities: [
      "Customized Strapi CMS to support the website's frontend requirements and content management workflows.",
      "Worked on the integration between the CMS and website frontend to ensure content was delivered in the required structure.",
      "Implemented content management features and supported frontend data requirements.",
    ],
    technologies: ["ReactJS", "Strapi", "TypeScript", "NextJS"],
    tags: ["cms", "contentPlatform", "poker"],
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
      "Designed and developed my portfolio with reusable components, responsive layouts, and structured project and experience data.",
    description:
      "A personal portfolio website built to showcase my professional experience, selected projects, technical skills, and frontend development work. It focuses on reusable components, responsive layouts, and clear presentation of project information.",
    role: "Senior Frontend Developer",
    team: "1",
    responsibilities: [
      "Designed and developed the portfolio from scratch, covering its overall structure, layout, and visual presentation.",
      "Built reusable components and shared layouts to keep the codebase consistent and maintainable.",
      "Implemented responsive pages and interactive UI elements across screen sizes.",
      "Structured project and experience data to make content easier to manage and reuse.",
    ],
    technologies: ["NextJS", "ReactJS", "TypeScript", "Tailwind CSS"],
    tags: ["personalProject"],
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
    shortDescription:
      "Developed and maintained the marketing website, translating designs into responsive layouts and interactive frontend components.",
    description:
      "DISTINCT helps brands collect customer interaction data from live events, gain insights, and deliver personalized experiences through integrated CRM and marketing platforms.",
    role: "Associate Consultant",
    team: "3",
    responsibilities: [
      "Developed and maintained the company's marketing website, building responsive sections and interactive UI components.",
      "Worked on translating design requirements into polished frontend experiences across desktop, tablet, and mobile devices.",
      "Refined layouts and interactions to maintain a consistent experience across different screen sizes.",
    ],
    technologies: ["ReactJS", "Vite", "Redux"],
    tags: ["analytics", "dataIntelligence"],
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
      "Developed admin workflows for avatar management, user administration, CMS features, role-based access, and dashboard forms.",
    description:
      "A centralized administration dashboard for managing the operational aspects of a game avatar marketplace. It provides tools for avatar generation, manual assignment, user management, 3D NFT management, role-based access control, and content management.",
    role: "Associate Consultant",
    team: "2",
    responsibilities: [
      "Developed key dashboard workflows for avatar generation and manual assignment.",
      "Built admin modules for managing users, avatars, blogs, and marketplace content, including role-based access control.",
      "Implemented CMS functionality and rich-text editing workflows using CKEditor.",
      "Managed forms, API data, and dashboard visualizations across multiple modules.",
    ],
    technologies: [
      "ReactJS",
      "Bootstrap",
      "Redux",
      "React Hook Form",
      "Yup",
      "React Query",
    ],
    tags: ["adminDashboard", "nft", "marketplace", "gaming"],
  },
  {
    title: "Moments NFT",
    slug: "moment-nft",
    year: "2021 - 2023",
    link: "https://a5labsapp.co/moments-auction/about",
    image: {
      card: `${projectCardImagesFolderPath}/momentNft.webp`,
      hero: `${projectHeroImagesFolderPath}/momentNft.webp`,
    },
    category: "marketplace",
    shortDescription:
      "Developed core NFT auction workflows, reusable UI components, responsive layouts, and backend API integrations.",
    description:
      "A digital platform centered around NFT auctions, providing an experience for users to explore digital collectibles and participate in auction-related activities.",
    role: "Associate Consultant",
    team: "2",
    responsibilities: [
      "Developed frontend features for the NFT auction platform, supporting its core user workflows.",
      "Built reusable UI components and responsive layouts to maintain a consistent experience across the platform.",
      "Integrated frontend features with backend APIs to support platform functionality.",
    ],
    technologies: ["ReactJS", "Bootstrap", "Redux", "Yup", "React Query"],
    tags: ["nft", "auction", "marketplace", "blockchain"],
  },
];
