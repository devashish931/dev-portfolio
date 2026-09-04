import cn from "@/lib/utils";
import react, { HTMLAttributes, ReactNode } from "react";
import SectionTitle from "./sectionTitle";

export interface SectionLayoutProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  screenFit?: boolean;
  title?: string;
}

const SectionLayout = ({
  children,
  className = "",
  screenFit = true,
  title,
  ...rest
}: SectionLayoutProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-screen max-w-[1280px] hide-scrollbar overflow-y-auto overflow-x-hidden px-4 py-10 sm:px-10 sm:py-16 md:px-[100PX] md:py-20",
        { "md:h-screen": screenFit },
        className
      )}
      {...rest}
    >
      {title && <SectionTitle className="md:mt-8">{title}</SectionTitle>}
      {children}
    </div>
  );
};

export default SectionLayout;
