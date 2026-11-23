import React from "react";
import SectionLayout from "@/components/layout/sectionLayout";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import { EXPERIENCES } from "@/config/constants/experiences";
import { SectionProps } from "@/types/common";

const ExperienceSection = (props: SectionProps) => {
  const experience = EXPERIENCES[0];
  return (
    <SectionLayout
      titleProps={{
        pretitle: "Experience",
        linkText: "Full Experience",
        href: ROUTES.EXPERIENCES,
      }}
      title="Current Role"
      id={SECTIONS.EXPERIENCE}
      {...props}
    >
      <div className="flex flex-wrap gap-4 border-y border-primary/70 py-8 md:flex-nowrap md:gap-8 md:py-10 lg:py-12">
        <div className="shrink-0">
          <p className="font-bold text-accent">
            {experience?.startDate} - {experience?.endDate || "present"}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">
            {experience?.position}, {experience?.company}
          </p>
          <p className="mt-2 text-lg">{experience?.responsibilities[0]}</p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ExperienceSection;
