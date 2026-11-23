import Link from "next/link";
import ProjectCard from "@/components/projectCard";
import PageLayout from "@/components/layout/pageLayout";
import { PROJECTS } from "@/config/constants/projects";
import SEO from "@/components/seo";
import { ROUTES } from "@/config/appConfig";

export default function ProjectsPage() {
  return (
    <>
      <SEO title="Projects" path={ROUTES.PROJECTS} />
      <PageLayout
        pretitle="Selected Work"
        title="All projects"
        description="A selection of production projects I've worked on, covering frontend applications, CMS platforms and digital experiences."
      >
        <div className="grid w-full grid-cols-1 flex-col gap-6 sm:grid-cols-2 md:grid-cols-1">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block w-full"
            >
              <ProjectCard item={project} />
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
