import { PROJECT_TAGS } from "@/config/constants/projectTags";

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

  technologies: string[];
  tags: ProjectTag[];
};
