import Image from "next/image";
import React from "react";
import cn from "@/lib/utils";

const ProjectCard = ({ item }: any) => {
  return (
    <div className="group h-full w-full cursor-pointer border-2 border-primary/30 p-2 sm:p-0 hover:border-primary">
      <div
        className={cn(
          "relative aspect-[1.98] w-full overflow-hidden transition-all duration-500",
          "group-hover:sm:-translate-y-3 group-hover:sm:translate-x-3"
        )}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="z-10 object-cover "
        />

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white opacity-0 transition-all duration-500 group-hover:opacity-100"
        >
          {item.title}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
