import Link from "next/link";
import SectionLayout from "../sectionLayout";
import SectionTitle from "../sectionTitle";
import Button from "../button";
import { ROUTES } from "@/config/appConfig";

export default function AboutSection() {
  return (
    <SectionLayout id="about">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-20">
        <SectionTitle
          pretitle="About"
          className="!mb-0"
          titleClassName="!leading-normal"
        >
          Fast interfaces, clean code, calm delivery
        </SectionTitle>

        <div className="flex flex-col items-start justify-end">
          <p className="max-w-xl text-lg font-medium leading-[1.7]">
            Senior Frontend Developer with a Bachelor&apos;s degree in Computer
            Applications and 5+ years of hands-on experience building scalable
            web apps in agile, cross-functional teams.
          </p>

          <Button
            as="a"
            variant="ghost"
            href={ROUTES.ABOUT}
            disableHoverStyles
            className="-ml-4 mt-6 font-semibold"
            buttonClassName="font-semibold !text-accent gap-1 transition-all duration-200 hover:gap-3"
          >
            More about me
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
}
