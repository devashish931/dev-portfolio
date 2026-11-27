import cn from "@/lib/utils";
import react, { forwardRef, HTMLAttributes, ReactNode } from "react";
import SectionTitle, { SectionTitleProps } from "../sectionTitle";

export interface SectionLayoutProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  title?: string;
  titleProps?: SectionTitleProps;
}

const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  ({ children, className = "", title, id, titleProps = {}, ...rest }, ref) => {
    return (
      <section
        className={cn("box-border scroll-mt-24", className)}
        id={id?.replace("#", "")}
        ref={ref}
        {...rest}
      >
        {title && <SectionTitle {...titleProps}>{title}</SectionTitle>}
        {children}
      </section>
    );
  },
);

SectionLayout.displayName = "SectionLayout";

export default SectionLayout;
