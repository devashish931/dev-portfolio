import Button from "@/components/button";
import { SUBJECT_DATA } from "@/config/constants/common";
import { SectionProps } from "@/lib/types";
import SectionLayout from "../sectionLayout";
import cn from "@/lib/utils";
import { ROUTES } from "@/config/appConfig";

export default function ContactSection({
  className,
  ...restProps
}: SectionProps) {
  return (
    <SectionLayout
      id="contact"
      className={cn("container mx-auto", className)}
      {...restProps}
    >
      <div className="grid items-center gap-10 border border-primary/70 bg-primary/10 px-7 py-12 sm:px-12 sm:py-16 md:grid-cols-2 md:gap-16 lg:px-16">
        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            Hiring for a frontend role or have a project in mind? Send a note
            and I will reply promptly.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          <Button
            as="Link"
            href={ROUTES.CONTACT}
            variant="solid-accent"
            size="lg"
            className="w-full"
            buttonClassName="min-h-[60px] w-full font-semibold"
          >
            Get in touch
          </Button>

          <Button
            as="Link"
            href={`mailto:${SUBJECT_DATA.email_id}`}
            variant="bordered-primary"
            size="lg"
            className="w-full"
            buttonClassName="min-h-[64px] w-full font-semibold"
          >
            {SUBJECT_DATA.email_id}
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
}
