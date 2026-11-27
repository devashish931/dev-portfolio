import AboutSection from "@/components/sections/aboutSection";
import ContactSection from "@/components/sections/contactSection";
import ExperienceSection from "@/components/sections/experienceSection";
import HeroSection from "@/components/sections/heroSection";
import ProjectSection from "@/components/sections/projectSection";
import SkillSection from "@/components/sections/skillSection";
import SEO from "@/components/seo";

export default function App() {
  return (
    <>
      <SEO />
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
