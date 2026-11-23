import { ROUTES } from "@/config/appConfig";
import { PROJECTS } from "@/config/constants/projects";
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://devtrehan.in";
const SITE_NAME = "Devashish Trehan";

const OUTPUT_DIR = path.join(process.cwd(), "public");

const staticPages = Object.values(ROUTES);

function generateSitemap() {
  const lastmod = new Date().toISOString();

  const projectPages = PROJECTS.map((project) => `/projects/${project.slug}`);

  const pages = [...staticPages, ...projectPages];

  const urls = pages
    .map(
      (pagePath) => `
  <url>
    <loc>${SITE_URL}${pagePath}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateLlmsTxt() {
  const projects = PROJECTS.map(
    (project) =>
      `- [${project.title}](${SITE_URL}/projects/${project.slug}): ${project.shortDescription}`,
  ).join("\n");

  return `# ${SITE_NAME}

> Senior Frontend Developer with 5+ years of experience building production-grade web applications.

## Skills

React.js, Next.js, TypeScript, JavaScript, frontend architecture, performance optimization, and responsive web development.

## Projects

${projects}

## Links

${Object.entries(ROUTES)
  .map(([name, routePath]) => {
    if (routePath === "/") {
      return `- [Portfolio](${SITE_URL})`;
    }
    return `- [${name}](${SITE_URL}${routePath})`;
  })
  .join("\n")}
`;
}

function writeFile(filename: string, content: string) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), content.trim() + "\n");
  console.log(`Generated public/${filename}`);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

writeFile("sitemap.xml", generateSitemap());
writeFile("llms.txt", generateLlmsTxt());
