import PageLayout from "@/components/layout/pageLayout";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import Image from "next/image";
import Button from "@/components/ui/button";
import { SKILL_CATEGORIES, SKILLS } from "@/config/constants/skills";
import { ROUTES } from "@/config/appConfig";
import { Skill } from "@/types/skill";
import SEO from "@/components/seo";

export default function SkillsPage() {
  const skills = SKILLS;
  const groupedSkills = skills.reduce<
    Record<string, (typeof skills)[number][]>
  >((groups, skill) => {
    if (!skill) return groups;

    (groups[skill.category] ??= []).push(skill);

    return groups;
  }, {});

  return (
    <>
      <SEO title="Skills" path={ROUTES.SKILLS} />
      <PageLayout
        pretitle="Toolkit"
        title="Skills"
        description="The tools I use to ship production frontends."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => {
            const skills = groupedSkills[category.name] ?? [];

            if (!skills.length) return null;

            return (
              <section
                key={category.name}
                className="border border-brand/30 bg-brand/10 p-5 sm:p-6"
              >
                <h2 className="text-xl font-semibold text-white">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm text-primary-text/70">
                  {category.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill: Skill) => {
                    if (skill.hidden) return null;

                    return (
                      <span
                        key={skill.value}
                        className="flex items-center justify-center border border-brand/40 bg-brand/20 px-3 py-2 text-sm"
                      >
                        <Image
                          src={skill.value}
                          width={28}
                          height={28}
                          alt=""
                          className="mr-2 h-7 w-7"
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                  <span className="flex aspect-square items-center justify-center border border-brand/30 p-3 text-sm">
                    <FiPlus className="h-4 w-4" />
                  </span>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-dashed border-brand/30 p-5 sm:p-6">
          <p className="text-sm text-primary-text/80">
            See these tools in real projects.
          </p>

          <Button
            as="Link"
            href={ROUTES.PROJECTS}
            variant={"ghost"}
            buttonClassName="text-accent!"
            disableHoverStyles
          >
            View projects
            <FiArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </PageLayout>
    </>
  );
}
