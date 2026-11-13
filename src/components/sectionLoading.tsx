import cn from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface SectionLayoutProps extends HTMLAttributes<HTMLElement> {
  screenName?: string
}

const SectionLoading = ({
  className = "",
  screenName="",
  ...rest
}: SectionLayoutProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-screen max-w-[1280px] hide-scrollbar overflow-y-auto overflow-x-hidden px-4 py-10 sm:px-10 sm:py-16 md:px-[100PX] md:py-20 md:h-screen flex items-center justify-center",
        className
      )}
      {...rest}
    >
      <p>Loading {screenName}...</p>
    </div>
  );
};

export default SectionLoading;
