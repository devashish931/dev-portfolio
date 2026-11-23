import React from "react";
import PageLayout from "@/components/pageLayout";
import Button from "@/components/button";
import { FiArrowRight } from "react-icons/fi";
import { ROUTES } from "@/config/appConfig";

const PROFILE_DETAILS = [
  { label: "Role", value: "Senior Frontend Developer" },
  { label: "Experience", value: "5+ years" },
  { label: "Education", value: "BCA, Computer Applications" },
  { label: "Location", value: "Agra, India" },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Performance first",
    description:
      "I focus on rendering strategies, lean bundles and Core Web Vitals to build fast, responsive applications.",
  },
  {
    number: "02",
    title: "Reusable by design",
    description:
      "I build maintainable component architectures and shared systems that keep applications consistent as they grow.",
  },
  {
    number: "03",
    title: "Outcome driven",
    description:
      "I approach problems with a practical mindset, make informed technical decisions and focus on delivering meaningful results.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      pretitle="About"
      title="Fast interfaces, clean code, calm delivery."
      backHref="/"
    >
      {/* Introduction */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-16">
        <div className="max-w-2xl space-y-5 text-base leading-7 text-primary-text/80">
          <p>
            I am a Senior Frontend Developer with 5+ years of experience
            building scalable web applications with React, Next.js, TypeScript
            and other mordern frontend technologies. My work focuses on frontend
            architecture, performance optimization, reusable components and CMS
            integration.
          </p>

          <p>
            I have worked on production applications, collaborated with
            cross-functional teams and taken ownership of frontend development
            from technical planning to delivery.
          </p>

          <p>
            What sets me apart is my ability to understand complex requirements,
            pick up new technologies quickly and turn problems into maintainable
            solutions that work well as products grow.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              as="Link"
              href={ROUTES.CONTACT}
              variant="solid-accent"
              className="w-full sm:w-fit"
              disableHoverStyles
              buttonClassName="min-h-11 w-full justify-center px-6 font-semibold sm:w-auto"
            >
              Contact me
              <FiArrowRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Button>

            <Button
              as="Link"
              href={ROUTES.EXPERIENCES}
              variant="bordered-primary"
              className="w-full sm:w-fit"
              buttonClassName="min-h-11 w-full justify-center px-6 font-semibold sm:w-auto"
            >
              See experience
            </Button>
          </div>
        </div>

        {/* Profile details instead of repeating homepage photo */}
        <aside className="h-fit border border-brand/40 bg-primary/10">
          {PROFILE_DETAILS.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-wrap items-center justify-between gap-3 border-b border-brand/30 px-4 py-4 last:border-b-0 sm:px-5"
            >
              <span className="text-sm text-primary-text/90">
                {detail.label}
              </span>
              <span className="text-right text-sm font-semibold text-white">
                {detail.value}
              </span>
            </div>
          ))}
        </aside>
      </section>

      {/* Working principles */}
      <section className="mt-20">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-accent">
            How I work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Principles I bring to a team
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <article
              key={principle.number}
              className="border border-brand/40 bg-primary/10 p-5 sm:p-6"
            >
              <span className="text-2xl font-bold text-accent">
                {principle.number}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {principle.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-primary-text/75">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
