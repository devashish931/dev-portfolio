import React, { useMemo } from "react";
import ProjectCard from "../projectCard";
import SectionLayout from "../sectionLayout";
import { SectionProps } from "@/lib/types";
import { SUBJECT_DATA } from "@/config/constants/common";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import Link from "next/link";

const ProjectSection = (props: SectionProps) => {
  const projects = useMemo(() => SUBJECT_DATA.projects.slice(0, 4), []);
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
        {projects.map((item, idx) => (
          <Link
            key={idx}
            className="h-full w-full"
            href={`/projects/${item.name}`}
          >
            <ProjectCard key={idx} item={item} />
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProjectSection;
