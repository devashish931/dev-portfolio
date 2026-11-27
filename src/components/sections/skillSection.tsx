import React from "react";
import SectionLayout from "../layout/sectionLayout";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import { SKILLS } from "@/config/constants/skills";
import { SectionProps } from "@/types/common";
import { Skill } from "@/types/skill";

const CORE_SKILLS = ["ReactJS", "NextJS", "TypeScript"];

const SkillSection = (props: SectionProps) => {
  const skills = SKILLS.filter(
    ({ hidden, featured }: Skill) => featured && !hidden,
  );

  const coreSkills = CORE_SKILLS.filter((name) =>
    skills.some((skill) => skill.name === name),
  );

  const otherSkills = skills.filter(
    (skill) => !CORE_SKILLS.includes(skill.name),
  );

  return (
    <SectionLayout
      title="Technical focus"
      titleProps={{
        linkText: "Explore all skills",
        href: ROUTES.SKILLS,
      }}
      id={SECTIONS.SKILLS}
      {...props}
    >
      <div className="space-y-5 py-3">
        {/* Core stack */}
        <div className="space-y-3">
          <p className="text-muted font-mono text-[10px] font-medium tracking-widest">
            CORE STACK
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {coreSkills.map((name, index) => (
              <React.Fragment key={name}>
                <span className="text-primary-text text-2xl font-semibold tracking-tight sm:text-3xl">
                  {name}
                </span>

                {index !== coreSkills.length - 1 && (
                  <span className="text-subtle text-xl font-normal">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Supporting skills */}
        {otherSkills.length > 0 && (
          <div className="border-brand/30 flex flex-wrap items-baseline gap-x-2 gap-y-2 border-t pt-4">
            <span className="text-muted mr-2 font-mono text-[10px] font-medium tracking-widest">
              ALSO WORK WITH
            </span>

            {otherSkills.map((skill, index) => (
              <React.Fragment key={skill.name}>
                <span className="text-muted text-sm font-medium">
                  {skill.name}
                </span>

                {index !== otherSkills.length - 1 && (
                  <span className="text-subtle">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default SkillSection;
