import Image from "next/image";
import React from "react";
import { ProjectItem } from "@/types/project";
import cn from "@/lib/utils";

interface ProjectCardProps {
  item: ProjectItem;
  titleLevel?: 2 | 3 | 4 | 5 | 6;
}

const ProjectCard = ({ item, titleLevel = 3 }: ProjectCardProps) => {
  const { image, shortDescription, title, category = "tech", tags } = item;

  const Title = `h${titleLevel}` as const;

  return (
    <article
      className={cn(
        "group border-brand/80 flex h-full w-full flex-col flex-nowrap overflow-hidden border sm:flex-wrap md:flex-row md:flex-nowrap",
        "hover:border-primary transition-colors duration-300",
        "focus-visible:ring-2 focus-visible:outline-hidden",
        "focus-visible:ring-primary focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background cursor-pointer",
      )}
    >
      <div className="aspect-[1.9/1] w-full min-w-50 shrink-0 p-1 md:w-[40%] lg:w-[33%]">
        <div className="bg-primary/10 relative h-full w-full overflow-hidden transition-transform duration-500 ease-in-out">
          <Image
            src={image.card}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="bg-brand/0 group-hover:bg-brand/20 absolute top-0 left-0 flex h-full w-full items-center justify-center transition-colors duration-500 ease-in-out">
            <span className="bg-bg-background/0 border-accent/0 group-hover:border-accent group-hover:bg-background translate-y-3 border-x-2 border-y px-4 py-2 text-xl text-white/0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:text-white">
              See Details
            </span>
          </div>
        </div>
      </div>

      <div className="md:-5 flex grow flex-col justify-between gap-2 p-2 sm:p-3 md:shrink lg:p-8">
        <div className="flex flex-col justify-start gap-2">
          <span className="text-accent text-sm font-medium tracking-widest uppercase md:text-base">
            {category}
          </span>

          <Title className="font-display text-2xl font-semibold text-white transition-colors duration-300 md:text-3xl lg:text-4xl">
            {title}
          </Title>

          {shortDescription && (
            <p className="text-base md:text-lg xl:text-xl">
              {shortDescription}
            </p>
          )}
        </div>

        {tags && tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="border-brand/30 border px-3 py-1 text-xs md:text-lg"
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
