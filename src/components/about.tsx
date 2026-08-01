import React from "react";
import { SUBJECT_DATA } from "@/config/constants";
import Button from "./button";
import SectionLayout from "./sectionLayout";
import { SectionProps } from "@/lib/types";

const About = (props: SectionProps) => {
  return (
    <SectionLayout
      title="About"
      className="mx-auto h-full w-full p-3 text-justify"
      {...props}
    >
      <h2 className="py-4 text-2xl font-bold">Who I Am</h2>
      <div className="flex flex-col gap-4 py-2 text-lg">
        <p>
          As a Senior Frontend Developer, I am deeply passionate and
          enthusiastic about crafting exceptional web applications. With a solid
          background in web development spanning over 5+ years, I have
          successfully worked on a range of real-world projects, showcasing my
          proficiency in HTML, CSS, JavaScript, ReactJS, NextJS, TypeScript,
          Redux, Web3.js, React Context API and many more technologies.
          My expertise extends to server-side rendering (SSR), frontend performance optimization, SEO, reusable component architecture, and CMS customization. I have delivered production applications across Web3, gaming, and EdTech domains while collaborating with cross-functional teams in Agile environments.
        </p>
        <p>
          My educational foundation includes a Bachelors of Computer Applications,
          providing me with a well-rounded understanding of the field.
          Additionally. What sets me apart is my innate ability to quickly grasp new concepts,
          coupled with a keen problem-solving mindset. My focus is firmly fixed on achieving
          results, and I approach challenges with an unwavering determination to
          excel. My thirst for knowledge drives me to continually learn and
          adapt to emerging technologies, ensuring that my skillset remains
          up-to-date and relevant.
        </p>
        <p>
          I am excited about the opportunity to contribute my expertise and work
          collaboratively, always striving to exceed expectations and create
          innovative solutions. Let’s embark on this journey together and make
          remarkable strides in the world of web development! 🚀
        </p>
      </div>
      <Button
        as={"a"}
        download
        href={SUBJECT_DATA.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        Download Resume
      </Button>
    </SectionLayout>
  );
};

export default About;
