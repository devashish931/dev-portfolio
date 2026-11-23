import React from "react";
import PageLayout from "@/components/layout/pageLayout";
import Button from "@/components/ui/button";
import { SUBJECT_DATA } from "@/config/constants/common";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { ROUTES } from "@/config/appConfig";
import { EXPERIENCES } from "@/config/constants/experiences";
import { EDUCATION } from "@/config/constants/education";

export default function ExperiencePage() {
  return (
    <PageLayout
      pretitle="Experience"
      title="Where I have worked"
      description="5+ years building production frontends, designing scalable interfaces and delivering reliable web applications."
      backHref="/"
    >
      <div className="w-full">
        {/* Work experience */}
        <section aria-label="Work experience">
          <div className="divide-y divide-brand/40 border-y border-brand/40">
            {EXPERIENCES.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.position}`}
                className="grid gap-4 py-7 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10"
              >
                {/* Date and location */}
                <div className="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-1 md:block">
                  <p className="text-sm font-semibold text-accent">
                    {experience.startDate} – {experience.endDate}
                  </p>

                  <p className="text-xs text-primary-text/70 md:mt-2">
                    {experience.location}
                  </p>
                </div>

                {/* Role details */}
                <div className="min-w-0">
                  <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                    {experience.position}
                  </h2>

                  <p className="mt-1 font-medium text-primary-text/80">
                    {experience.company}
                  </p>

                  {experience.responsibilities?.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-primary-text/80 sm:text-base">
                      {experience.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {experience.technologies?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-brand-200 border border-brand/40 px-2.5 py-1 text-xs"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-20" aria-label="Education">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-accent">
            Education
          </p>

          <div className="divide-y divide-brand/40 border-y border-brand/40">
            {EDUCATION.map((education) => (
              <article
                key={education.institution}
                className="grid gap-3 py-7 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10"
              >
                <p className="text-sm font-semibold text-accent">
                  {education.startYear} – {education.endYear}
                </p>

                <div>
                  <h2 className="text-lg font-bold text-white sm:text-xl">
                    {education.degree}
                  </h2>

                  <p className="mt-1 text-sm text-primary-text/80 sm:text-base">
                    {education.institution}
                  </p>

                  <p className="mt-1 text-sm text-primary-text/60">
                    {education.field}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            as="Link"
            href={ROUTES.CONTACT}
            variant="solid-accent"
            className="w-full sm:w-fit"
            buttonClassName="min-h-11 w-full justify-center px-6 font-semibold sm:w-auto"
          >
            Work with me
            <FiArrowRight className="ml-2" />
          </Button>

          <Button
            as="a"
            download
            href={SUBJECT_DATA.resume}
            target="_blank"
            rel="noopener noreferrer"
            variant="bordered-primary"
            className="w-full sm:w-fit"
            buttonClassName="min-h-11 w-full justify-center px-6 font-semibold sm:w-auto"
          >
            Download resume
            <FiDownload className="ml-2" />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
