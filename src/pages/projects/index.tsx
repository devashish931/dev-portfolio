import Link from "next/link";
import ProjectCard from "@/components/projectCard";
import PageLayout from "@/components/pageLayout";
import { PROJECTS } from "@/config/constants/projects";

export default function ProjectsPage() {
  return (
    <PageLayout
      pretitle="Selected Work"
      title="All projects"
      description="A selection of production projects I've worked on, covering frontend applications, CMS platforms and digital experiences."
    >
      <div className="grid w-full grid-cols-1 flex-col gap-6 sm:grid-cols-2 md:grid-cols-1">
        {PROJECTS.map((project) => (
          <Link
            key={project.name}
            href={`/projects/${project.name}`}
            className="block w-full"
          >
            <ProjectCard item={project} />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
