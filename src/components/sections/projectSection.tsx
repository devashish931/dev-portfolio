import React, { useMemo } from "react";
import ProjectCard from "../projectCard";
import SectionLayout from "../layout/sectionLayout";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import Link from "next/link";
import { PROJECTS } from "@/config/constants/projects";
import { SectionProps } from "@/types/common";

const ProjectSection = (props: SectionProps) => {
  const projects = useMemo(() => PROJECTS.slice(0, 4), []);
  return (
    <SectionLayout
      titleProps={{
        pretitle: "Selected Work",
        linkText: "See All Projects",
        href: ROUTES.PROJECTS,
      }}
      title="Featured Projects"
      id={SECTIONS.PROJECTS}
      {...props}
    >
      <div className="grid w-full grid-cols-1 place-items-center gap-6 pb-2 text-lg sm:grid-cols-2 md:grid-cols-1">
        {projects.map((item) => (
          <Link
            key={item.slug}
            className="h-full w-full"
            href={`/projects/${item.slug}`}
          >
            <ProjectCard item={item} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectSection;
