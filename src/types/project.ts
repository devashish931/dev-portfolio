import { PROJECT_TAGS } from "@/config/constants/projectTags";
import { SkillName, SKILLS } from "@/config/constants/skills";

export type ProjectTag = keyof typeof PROJECT_TAGS;

export type ProjectItem = {
  title: string;
  slug: string;
  link: string;
  year: string;
  image: {
    card: string;
    hero: string;
  };
  shortDescription: string;
  description: string;
  category: string;

  role: string;
  team: string;
  responsibilities?: string[];

  challenges?: {
    problem: string;
    solution: string;
  }[];

  technologies: SkillName[];
  tags: ProjectTag[];
};
