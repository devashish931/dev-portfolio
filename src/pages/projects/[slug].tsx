import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/config/constants/projects";

import Button from "@/components/ui/button";
import PageLayout from "@/components/layout/pageLayout";
import SectionTitle from "@/components/sectionTitle";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { PROJECT_TAGS } from "@/config/constants/projectTags";
import { ProjectItem } from "@/types/project";
import SEO from "@/components/seo";
import { ROUTES } from "@/config/appConfig";

export function getStaticPaths() {
  return {
    paths: PROJECTS.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}

export default function ProjectPage({ project }: { project: ProjectItem }) {
  const currentIndex = PROJECTS.findIndex((item) => item.slug === project.slug);

  const nextProject = PROJECTS[currentIndex + 1];

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        path={`${ROUTES.PROJECTS}/${project.slug}`}
        image={project.image.hero}
      />
      <PageLayout pretitle={project.category} title={project.title}>
        <p className="text-primary-text/80 mb-7 max-w-2xl text-lg leading-relaxed md:text-xl">
          {project.shortDescription}
        </p>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-12">
          <div className="border-brand/30 bg-brand/10 relative col-span-1 aspect-[1.91/1] overflow-hidden border lg:col-span-3">
            <Image
              src={project.image.hero}
              alt={`${project.title} project preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
          <div className="border-brand/30 bg-brand/10 col-span-1 mb-16 grid grid-cols-1 border md:grid-cols-4 lg:h-full lg:grid-cols-1">
            <MetadataItem label="Role" value={project.role} />
            <MetadataItem label="Year" value={project.year} />
            <MetadataItem label="Team" value={project.team} />
            <MetadataItem label="Domain" value={project.category} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-1 space-y-10 lg:col-span-3">
            <ContentSection eyebrow="Overview" title="What it is">
              <p>{project.description}</p>
            </ContentSection>

            {project.challenges?.length ? (
              <ContentSection eyebrow="Challenge" title="The problem to solve">
                <div className="space-y-5">
                  {project.challenges.map((challenge, index) => (
                    <p key={index}>{challenge.problem}</p>
                  ))}
                </div>
              </ContentSection>
            ) : null}

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
                        <span className="bg-accent mt-2 h-2 w-2 shrink-0 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </ContentSection>
            ) : null}
          </div>

          <aside className="cols-span-1 space-y-5 lg:self-start">
            {project.technologies?.length ? (
              <section className="border-brand/30 bg-brand/10 border p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Tech stack
                </h2>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border-brand/40 bg-brand/20 border px-2.5 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            {project.tags?.length ? (
              <section className="border-brand/30 bg-brand/10 border p-5">
                <h2 className="mb-4 text-lg font-semibold text-white">Tags</h2>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-brand/40 bg-brand/20 border px-2.5 py-1 text-xs"
                    >
                      {PROJECT_TAGS[tag]}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            <Button
              as="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid-accent"
              className="min-h-11 w-full justify-center font-semibold text-black"
            >
              Visit live site
              <FiExternalLink className="ml-2" />
            </Button>
          </aside>
        </div>

        {nextProject && (
          <section className="mt-20">
            <Link
              replace
              href={`/projects/${nextProject.slug}`}
              className="group border-brand/30 bg-brand/10 hover:border-accent/60 hover:bg-brand/20 flex items-center justify-between border p-5 transition-colors sm:p-7"
            >
              <div>
                <p className="text-primary-text/70 mb-2 text-sm">
                  Next project
                </p>

                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {nextProject.title}
                </h2>
              </div>

              <FiArrowRight className="text-accent h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </section>
        )}
      </PageLayout>
    </>
  );
}

function MetadataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-brand/30 min-w-0 border-b p-4 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b lg:last:border-b-0">
      <p className="text-primary-text/60 mb-1 text-xs">{label}</p>

      <p className="truncate text-sm font-semibold text-white capitalize">
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

      <div className="text-primary-text/80 space-y-4 text-base leading-7">
        {children}
      </div>
    </section>
  );
}
