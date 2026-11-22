import { SectionLayoutProps } from "@/components/sectionLayout";
import { SLIDER_BTN_ACTIONS } from "@/components/slider";
import { PROJECT_TAGS } from "@/config/constants/projectTags";

export type ValueOf<T> = T[keyof T];

export interface SectionProps extends Omit<SectionLayoutProps, "children"> {}

export type SliderBtnActions = ValueOf<typeof SLIDER_BTN_ACTIONS>;

export type ProjectTag = keyof typeof PROJECT_TAGS;

export type SubjectProject = {
  title: string;
  name: string;
  link: string;
  image: {
    card: string;
    hero: string;
  };
  shortDescription: string;
  description: string;
  category: string;

  role: string;

  responsibilities?: string[];

  challenges?: {
    problem: string;
    solution: string;
  }[];

  technologies: string[];
  tags: ProjectTag[];
};

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}
