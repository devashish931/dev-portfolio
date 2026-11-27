import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { ProjectItem } from "@/types/project";
import cn from "@/lib/utils";
import Tag from "./ui/tag";

interface ProjectCardProps {
  item: ProjectItem;
  titleLevel?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const ProjectCard = ({ item, titleLevel = 3, className }: ProjectCardProps) => {
  const { image, shortDescription, title, category = "tech", tags } = item;

  const Title = `h${titleLevel}` as const;

  return (
    <article
      className={cn(
        "group flex h-full min-w-0 flex-col overflow-hidden",
        "border-brand/30 bg-surface/70 border",
        "hover:border-primary/70 transition-colors duration-300",
        className,
      )}
    >
      {/* Project image */}
      <div className="bg-primary/10 relative aspect-[1.9/1] w-full overflow-hidden">
        <Image
          src={image.card}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        {/* Category label */}
        <Tag className="border-accent/70! absolute top-3 left-3 bg-black/70! px-2.5 py-1 font-mono text-[9px] tracking-widest text-white uppercase backdrop-blur-sm sm:top-4 sm:left-4 sm:text-[10px]">
          {category}
        </Tag>
      </div>

      {/* Project information */}
      <div className="flex grow flex-col gap-4 p-2 sm:p-3 md:p-4 lg:p-5">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-2">
            <Title
              className={cn(
                "font-display text-primary-text leading-tight font-semibold",
                "group-hover:text-accent transition-colors duration-300",
                "text-xl sm:text-2xl lg:text-3xl",
              )}
            >
              {title}
            </Title>

            {shortDescription && (
              <p className="text-muted max-w-2xl text-xs leading-5 sm:text-sm sm:leading-6 lg:text-base">
                {shortDescription}
              </p>
            )}
          </div>

          {/* Technologies */}
          {tags && tags.length > 0 && (
            <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag as="li" key={tag} size="sm" className="border-brand/30!">
                  {tag}
                </Tag>
              ))}
            </ul>
          )}
        </div>
        {/* Separate project link */}
        <div className="border-brand/20 mt-auto flex justify-end border-t pt-3 sm:pt-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5",
              "text-primary-text group-hover:text-accent text-xs font-medium transition-colors duration-300",
              "focus-visible:text-primary-text",
              "focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-4",
              "sm:text-sm",
            )}
          >
            View project
            <FiArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
