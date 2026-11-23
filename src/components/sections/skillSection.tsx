import React, { useMemo } from "react";
import SectionLayout from "../layout/sectionLayout";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import Tag from "../ui/tag";
import { SKILLS } from "@/config/constants/skills";
import { SectionProps } from "@/types/common";

const SkillSection = (props: SectionProps) => {
  const skills = useMemo(() => SKILLS.filter(({ featured }) => featured), []);

  return (
    <SectionLayout
      title="What I build with"
      titleProps={{
        pretitle: "Toolkit",
        linkText: "All skills",
        href: ROUTES.SKILLS,
      }}
      id={SECTIONS.SKILLS}
      className="text-justify"
      {...props}
    >
      <div className="flex flex-wrap items-center gap-5 py-2">
        {skills.map((item, idx) => (
          <Tag
            className="!border-brand/70 px-5 py-3 !text-base font-medium tracking-wider !text-primary-text xl:grow"
            key={idx}
          >
            {item.name}
          </Tag>
        ))}
      </div>
    </SectionLayout>
  );
};

export default SkillSection;
