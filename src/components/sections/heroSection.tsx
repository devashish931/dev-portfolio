import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SUBJECT_DATA } from "@/config/constants/common";
import SocialMediaButtons from "../socialMediaButtons";
import SectionLayout from "../sectionLayout";
import { SectionProps } from "@/lib/types";
import { ROUTES, SECTIONS } from "@/config/appConfig";
import Button from "../button";
import Tag from "../tag";
import StatsSection from "./statsSection";
import { FiChevronDown } from "react-icons/fi";
import cn from "@/lib/utils";

const threshold = 100;

const HeroSection = (props: SectionProps) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  const scrollDown = () => {
    if (typeof window === "undefined" || !heroRef.current) return;

    window.scroll({
      top: Math.min(heroRef.current.clientHeight, window.innerHeight) - 64, // navbar height,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry", entry);

        if (entry) setScrollIndicatorVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionLayout
      className="mx-auto flex h-full min-h-[min(calc(100vh_-_64px),1200px)] w-full flex-col justify-around gap-8 md:gap-16"
      id={SECTIONS.Hero}
      ref={heroRef}
      {...props}
    >
      <div
        ref={sentinelRef}
        aria-hidden="true"
        style={{ height: threshold }}
        className="pointer-events-none absolute left-0 top-0 w-px"
      />
      <div className="relative mt-2 grid grid-cols-1 items-center justify-center gap-8 md:mt-4 md:grid-cols-2 md:gap-16 lg:mt-8">
        <div className="order-2 flex flex-col gap-4 md:order-1 md:gap-6">
          <Tag size="sm">
            <span className="mr-1.5 h-2.5 w-2.5 rounded-full bg-green-500"></span>
            Open to new opportunities
          </Tag>
          <div className="mb-2">
            <h2 className="mb-1 flex items-center break-words text-3xl font-semibold text-white sm:mb-2 sm:text-5xl md:mb-4">
              {SUBJECT_DATA.fullName}
            </h2>
            <p className="text-lg font-medium text-accent">
              Senior Frontend Developer
            </p>
          </div>
          <p className="text-pretty text-lg">
            5+ years of experience building production-ready web applications
            React, Next.js, and TypeScript. Experienced in designing frontend
            architecture, making technical decisions, optimizing rendering and
            performance, and building reusable systems that improve code quality
            and long-term maintainability. I&nbsp;focus on solving complex
            frontend problems and delivering reliable, high-quality user
            experiences.
          </p>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="flex gap-3">
              <Button
                as="Link"
                href={ROUTES.PROJECTS}
                size="lg"
                variant="bordered-accent"
              >
                View My Work
              </Button>
              <Button
                as="Link"
                href={ROUTES.CONTACT}
                size="lg"
                variant="bordered-ghost-primary"
              >
                Contact Me
              </Button>
            </div>
            <SocialMediaButtons buttonClassName="!border-brand/50 !text-brand" />
          </div>
        </div>
        <div className="order-1 my-8 md:order-2">
          <div className="bevel-clip mx-auto flex w-[400px] max-w-full items-center justify-center bg-brand bg-opacity-20 p-3 md:w-fit">
            <div className="bevel-clip -translate-y-2 translate-x-2 overflow-hidden bg-background bg-opacity-80">
              <Image
                src={SUBJECT_DATA.image}
                alt="profile"
                draggable={false}
                width={600}
                height={600}
                priority
                className="scale-[1.02] brightness-75 drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        <span
          inert={true}
          onClick={scrollDown}
          className={cn(
            "fixed bottom-4 left-[50%] hidden -translate-x-[50%] cursor-pointer transition-opacity duration-300 ease-in-out lg:block xl:absolute xl:-bottom-8",
            scrollIndicatorVisible ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="flex h-12 animate-bounce flex-col items-center justify-center">
            <span className="text-sm font-bold text-brand/40">Scroll</span>
            <FiChevronDown className="-mt-1 h-6 w-6 animate-[color-switch_0.8s_linear_infinite]" />
            <FiChevronDown className="-mt-3.5 h-6 w-6 animate-[color-switch_0.8s_linear_infinite_reverse]" />
          </span>
        </span>
      </div>
      <StatsSection className="mb-2 py-0 md:mb-4 lg:mb-8" />
    </SectionLayout>
  );
};

export default HeroSection;
