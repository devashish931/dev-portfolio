import AboutSection from "@/components/sections/aboutSection";
import ContactSection from "@/components/sections/contactSection";
import ExperienceSection from "@/components/sections/experienceSection";
import HeroSection from "@/components/sections/heroSection";
import ProjectSection from "@/components/sections/projectSection";
import SkillSection from "@/components/sections/skillSection";
import StatsSection from "@/components/sections/statsSection";
import { SUBJECT_DATA } from "@/config/constants/common";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>{SUBJECT_DATA.fullName}'s Portfolio</title>
      </Head>
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <ContactSection className="mb-12 md:mb-16 lg:mb-24" />
      </div>
    </>
  );
}
