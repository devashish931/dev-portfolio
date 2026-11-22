import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/config/constants/projects";
import type { SubjectProject } from "@/lib/types";
import Button from "@/components/button";
import PageLayout from "@/components/pageLayout";
import SectionTitle from "@/components/sectionTitle";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { PROJECT_TAGS } from "@/config/constants/projectTags";

export function getStaticPaths() {
  return {
    paths: PROJECTS.map((project) => ({
      params: {
        slug: project.name,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((item) => item.name === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}

export default function ProjectPage({ project }: { project: SubjectProject }) {
  const currentIndex = PROJECTS.findIndex((item) => item.name === project.name);

  const nextProject = PROJECTS[currentIndex + 1];

  return (
    <PageLayout pretitle={project.category} title={project.title}>
      {/* Introduction */}
      <p className="mb-7 max-w-2xl text-lg leading-relaxed text-primary-text/80 md:text-xl">
        {project.shortDescription}
      </p>

      {/* Hero image */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-12">
        <div className="relative col-span-1 aspect-[1.91/1] overflow-hidden border border-brand/30 bg-brand/10 lg:col-span-3">
          <Image
            src={project.image.hero}
            alt={`${project.title} project preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-top"
          />
        </div>
        <div className="col-span-1 mb-16 grid grid-cols-1 border border-brand/30 bg-brand/10 md:grid-cols-4 lg:h-full lg:grid-cols-1">
          <MetadataItem label="Role" value={project.role} />
          <MetadataItem label="Year" value={"project.year"} />
          <MetadataItem label="Team" value={"project.team"} />
          <MetadataItem label="Domain" value={project.category} />
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
        <div className="col-span-1 space-y-10 lg:col-span-3">
          {/* Overview */}
          <ContentSection eyebrow="Overview" title="What it is">
            <p>{project.description}</p>
          </ContentSection>

          {/* Challenges */}
          {project.challenges?.length ? (
            <ContentSection eyebrow="Challenge" title="The problem to solve">
              <div className="space-y-5">
                {project.challenges.map((challenge, index) => (
                  <p key={index}>{challenge.problem}</p>
                ))}
              </div>
            </ContentSection>
          ) : null}

          {/* Approach */}
          {project.responsibilities?.length ||
          project.challenges?.some((item) => item.solution) ? (
            <ContentSection eyebrow="Approach" title="What I built">
              {project.challenges?.some((item) => item.solution) && (
                <div className="mb-5 space-y-4">
                  {project.challenges.map((challenge, index) =>
                    challenge.solution ? (
                      <p key={index}>{challenge.solution}</p>
                    ) : null,
                  )}
                </div>
              )}

              {project.responsibilities?.length ? (
                <ul className="space-y-3">
                  {project.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </ContentSection>
          ) : null}
        </div>

        {/* Sidebar */}
        <aside className="cols-span-1 space-y-5 lg:self-start">
          {/* Tech stack */}
          {project.tags?.length ? (
            <section className="border border-brand/30 bg-brand/10 p-5">
              <h2 className="mb-4 text-lg font-semibold text-white">
                Tech stack
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-brand-200 border border-brand/40 bg-brand/20 px-2.5 py-1 text-xs"
                  >
                    {PROJECT_TAGS[tag]}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          {/* Project link */}
          <Button
            as="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid-accent"
            className="w-full"
            buttonClassName="min-h-11 w-full justify-center font-semibold text-black"
          >
            Visit live site
            <FiExternalLink className="ml-2" />
          </Button>
        </aside>
      </div>

      {/* Next project */}
      {nextProject && (
        <section className="mt-20">
          <Link
            href={`/projects/${nextProject.name}`}
            className="group flex items-center justify-between border border-brand/30 bg-brand/10 p-5 transition-colors hover:border-accent/60 hover:bg-brand/20 sm:p-7"
          >
            <div>
              <p className="mb-2 text-sm text-primary-text/70">Next project</p>

              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                {nextProject.title}
              </h2>
            </div>

            <FiArrowRight className="h-6 w-6 text-accent transition-transform group-hover:translate-x-2" />
          </Link>
        </section>
      )}
    </PageLayout>
  );
}

function MetadataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border-b border-brand/30 p-4 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b lg:last:border-b-0">
      <p className="mb-1 text-xs text-primary-text/60">{label}</p>

      <p className="truncate text-sm font-semibold capitalize text-white">
        {value}
      </p>
    </div>
  );
}

function ContentSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <SectionTitle
        pretitle={eyebrow}
        className="mb-3"
        titleClassName="text-2xl sm:text-3xl"
      >
        {title}
      </SectionTitle>

      <div className="space-y-4 text-base leading-7 text-primary-text/80">
        {children}
      </div>
    </section>
  );
}
