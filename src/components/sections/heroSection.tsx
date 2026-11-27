import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiArrowDownRight } from "react-icons/fi";
import { SUBJECT_DATA } from "@/config/constants/common";
import SocialMediaButtons from "../socialMediaButtons";
import SectionLayout from "../layout/sectionLayout";
import { OPEN_TO_WORK, ROUTES, SECTIONS } from "@/config/appConfig";
import Button from "../ui/button";
import Tag from "../ui/tag";
import cn from "@/lib/utils";
import { SectionProps } from "@/types/common";

const threshold = 100;

const HeroSection = (props: SectionProps) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  const scrollDown = () => {
    if (typeof window === "undefined" || !heroRef.current) return;

    window.scroll({
      top: Math.min(heroRef.current.clientHeight, window.innerHeight) - 64,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setScrollIndicatorVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionLayout
      className={cn(
        "mx-auto flex h-full min-h-[min(calc(100vh-64px),760px)]",
        "w-full flex-col justify-around gap-8 md:gap-12",
        props.className,
      )}
      id={SECTIONS.Hero}
      ref={heroRef}
      {...props}
    >
      <div
        ref={sentinelRef}
        aria-hidden="true"
        style={{ height: threshold }}
        className="pointer-events-none absolute top-0 left-0 w-px"
      />

      <div className="relative mt-2 grid grid-cols-1 items-center justify-center gap-10 md:mt-8 md:grid-cols-5 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-5 md:col-span-3 md:gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-muted font-mono text-xs tracking-[0.2em]">
              FRONTEND ENGINEERING / 05+ YEARS
            </span>

            {OPEN_TO_WORK && (
              <Tag size="sm">
                <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                Open to new opportunities
              </Tag>
            )}
          </div>

          <div className="space-y-3">
            <p className="text-accent font-mono text-sm tracking-wider">
              HELLO, I&apos;M
            </p>

            <h1 className="text-primary-text mb-1 text-4xl leading-[1.08] font-semibold tracking-tight break-words sm:text-6xl lg:text-7xl xl:text-8xl">
              {SUBJECT_DATA.fullName}
              <span className="text-accent">.</span>
            </h1>

            <h2 className="text-primary-text text-xl font-medium sm:text-2xl">
              Senior Frontend Developer
            </h2>
          </div>

          <p className="text-muted max-w-2xl text-base leading-8 sm:text-lg">
            I build reliable, high-performance web applications with React,
            Next.js, and TypeScript. My work spans frontend architecture,
            technical decisions, performance optimization, and reusable systems
            — with a focus on making complex interfaces easier to build and
            maintain.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              as="Link"
              href={ROUTES.PROJECTS}
              size="lg"
              variant="bordered-accent"
            >
              Explore my work
              <FiArrowDownRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              as="Link"
              href={ROUTES.CONTACT}
              size="lg"
              variant="bordered-ghost-primary"
            >
              Get in touch
            </Button>
          </div>

          <SocialMediaButtons buttonClassName="border-brand/50! text-brand!" />
        </div>

        <div className="@container relative my-4 md:col-span-2 md:my-0">
          <div className="border-brand/20 bg-surface/60 relative overflow-hidden border p-5 sm:p-7">
            <div className="border-brand/15 relative flex min-h-40 items-center justify-between overflow-hidden border-b pb-6">
              <div>
                <p className="text-muted font-mono text-xs tracking-widest">
                  SPECIALIZATION
                </p>
                <p className="text-primary-text mt-2 text-3xl leading-tight font-semibold sm:text-4xl">
                  Frontend
                  <br />
                  Engineering
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-brand/10 hidden font-mono text-8xl leading-none font-bold select-none sm:text-9xl @min-[350px]:block md:@min-[430px]:block"
              >
                01
              </span>
            </div>

            <div className="divide-brand/15 divide-y">
              <div className="py-5">
                <p className="text-muted mb-3 font-mono text-[11px] tracking-widest">
                  CORE TECHNOLOGIES
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "JavaScript"].map(
                    (item) => (
                      <span
                        key={item}
                        className="border-brand/20 bg-background/60 text-primary-text border px-2.5 py-1.5 text-sm"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="py-5">
                <p className="text-muted mb-3 font-mono text-[11px] tracking-widest">
                  AREAS OF FOCUS
                </p>

                <div className="text-primary-text space-y-2.5 text-sm">
                  {[
                    "Frontend architecture",
                    "Performance & rendering",
                    "Reusable design systems",
                    "Accessibility & usability",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-accent font-mono text-xs">
                        0{index + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-5">
              <span className="text-muted font-mono text-[10px] tracking-widest">
                BUILT WITH INTENT
              </span>
              <span className="bg-accent h-2 w-2 rounded-full" />
            </div>
          </div>

          <span
            aria-hidden="true"
            className="border-accent/70 absolute -top-3 -right-3 h-6 w-6 border-t border-r"
          />
          <span
            aria-hidden="true"
            className="border-accent/70 absolute -bottom-3 -left-3 h-6 w-6 border-b border-l"
          />
        </div>

        <span
          aria-hidden={true}
          onClick={scrollDown}
          className={cn(
            "fixed bottom-4 left-[50%] hidden translate-x-[-50%] cursor-pointer transition-opacity duration-300 ease-in-out lg:block xl:absolute xl:-bottom-8",
            scrollIndicatorVisible ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="flex h-12 animate-bounce flex-col items-center justify-center">
            <span className="text-brand/40 text-sm font-bold">Scroll</span>
            <FiChevronDown className="-mt-1 h-6 w-6 animate-[color-switch_0.8s_linear_infinite]" />
            <FiChevronDown className="-mt-3.5 h-6 w-6 animate-[color-switch_0.8s_linear_infinite_reverse]" />
          </span>
        </span>
      </div>
    </SectionLayout>
  );
};

export default HeroSection;
