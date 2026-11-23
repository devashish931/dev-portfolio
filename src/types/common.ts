import { SectionLayoutProps } from "@/components/layout/sectionLayout";

export type ValueOf<T> = T[keyof T];

export interface SectionProps extends Omit<SectionLayoutProps, "children"> {}
