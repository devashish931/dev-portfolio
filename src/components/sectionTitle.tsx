import Link from "next/link";
import React from "react";
import cn from "@/lib/utils";
import { FiArrowRight } from "react-icons/fi";

export interface SectionTitleProps {
  href?: string;
  linkText?: string;
  pretitle?: string;
  titleClassName?: string;
  className?: string;
  pretitleClassName?: string;
  children?: React.ReactNode;
  titleLevel?: 1 | 2 | 3;
}

const SectionTitle = ({
  href,
  linkText,
  pretitle,
  className,
  titleClassName,
  pretitleClassName,
  children,
  titleLevel = 2,
}: SectionTitleProps) => {
  const Title = `h${titleLevel}` as const;

  return (
    <div
      className={cn(
        "mb-4 flex flex-wrap items-end justify-between gap-5 md:mb-6 lg:mb-8",
        className,
      )}
    >
      <div>
        {pretitle && (
          <p
            className={cn(
              "mb-3 text-sm font-bold uppercase tracking-[0.12em] text-accent md:text-base lg:text-lg",
              pretitleClassName,
            )}
          >
            {pretitle}
          </p>
        )}

        <Title
          className={cn(
            "font-display text-brand-50 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl",
            titleClassName,
          )}
        >
          {children}
        </Title>
      </div>

      {href && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center font-semibold text-accent transition-colors hover:text-accent/90"
        >
          {linkText || "See all"}
          <FiArrowRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
