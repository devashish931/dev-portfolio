import React, { useMemo } from "react";
import ProjectCard from "../projectCard";
import SectionLayout from "../layout/sectionLayout";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import Link from "next/link";
import { PROJECTS } from "@/config/constants/projects";
import { SectionProps } from "@/types/common";
import cn from "@/lib/utils";

const ProjectSection = (props: SectionProps) => {
  const projects = useMemo(() => PROJECTS.slice(0, 6), []);
  return (
    <SectionLayout
      titleProps={{
        linkText: "See All Projects",
        href: ROUTES.PROJECTS,
      }}
      title="Featured Projects"
      id={SECTIONS.PROJECTS}
      {...props}
    >
      <div className="grid w-full grid-cols-1 place-items-center gap-6 pb-2 text-lg sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, index) => (
          <Link
            key={item.slug}
            className={cn(
              "h-full w-full",
              index >= 3 && "hidden sm:block",
              index >= 4 && "sm:hidden lg:block",
              index >= 6 && "lg:hidden xl:block",
            )}
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
