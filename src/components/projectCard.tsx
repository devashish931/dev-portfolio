import Image from "next/image";
import React from "react";
import { ProjectItem } from "@/lib/types";
import cn from "@/lib/utils";

interface ProjectCardProps {
  item: ProjectItem;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  const { image, shortDescription, title, category = "tech", tags } = item;

  return (
    <article
      className={cn(
        "group flex h-full w-full flex-col flex-nowrap overflow-hidden border border-brand/80 sm:flex-wrap md:flex-row md:flex-nowrap",
        "transition-colors duration-300 hover:border-primary",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-primary focus-visible:ring-offset-2",
        "cursor-pointer focus-visible:ring-offset-background",
      )}
    >
      <div className="aspect-[1.9/1] w-full min-w-[200px] shrink-0 p-1 md:w-[40%] lg:w-[33%]">
        <div className="relative h-full w-full overflow-hidden bg-primary/10 transition-transform duration-500 ease-in-out">
          <Image
            src={image.card}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-brand/0 transition-colors duration-500 ease-in-out group-hover:bg-brand/20">
            <span className="bg-bg-background/0 translate-y-3 border-x-2 border-y border-accent/0 px-4 py-2 text-xl text-white/0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:border-accent/100 group-hover:bg-background group-hover:text-white/100">
              See Details
            </span>
          </div>
        </div>
      </div>

      <div className="md:-5 flex grow flex-col justify-between gap-2 p-2 sm:p-3 md:shrink lg:p-8">
        <div className="flex flex-col justify-start gap-2">
          <span className="text-sm font-medium uppercase tracking-widest text-accent md:text-base">
            {category}
          </span>

          <h3 className="font-display text-2xl font-semibold text-white transition-colors duration-300 md:text-3xl lg:text-4xl">
            {title}
          </h3>

          {shortDescription && (
            <p className="text-brand-200/80 text-base md:text-lg xl:text-xl">
              {shortDescription}
            </p>
          )}
        </div>

        {tags && tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="text-brand-200 border border-brand/30 px-3 py-1 text-xs md:text-lg"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
