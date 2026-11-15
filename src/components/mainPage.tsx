import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Slider from "@/components/slider";
import { SECTIONS } from "@/config/appConfig";
import { SliderBtnActions } from "@/lib/types";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const SECTIONS_COMPONENTS = [
  { path: SECTIONS.HOME, component: Home },
  { path: SECTIONS.ABOUT, component: About },
  { path: SECTIONS.PROJECTS, component: Projects },
  { path: SECTIONS.SKILLS, component: Skills },
  { path: SECTIONS.CONTACT, component: Contact },
];

export default function MainPage() {
  const router = useRouter();
  const { sectionId } = router.query;

  const slideIdx = useMemo(() => {
    const idx = SECTIONS_COMPONENTS.findIndex(
      ({ path }) => path.substring(1) === sectionId
    );
    return idx > -1 ? idx : 0;
  }, [sectionId]);
  const [activeIndex, setActiveIndex] = useState(slideIdx);

  const onSlideChange = (action: SliderBtnActions) => {
    let newIdx = 0;
    switch (action) {
      case "next":
        newIdx =
          activeIndex === SECTIONS_COMPONENTS.length - 1 ? 0 : activeIndex + 1;
        break;
      case "prev":
        newIdx =
          activeIndex === 0 ? SECTIONS_COMPONENTS.length - 1 : activeIndex - 1;
        break;
      default:
        newIdx = 0;
    }
    const path = SECTIONS_COMPONENTS[newIdx]?.path;

    if (path && router.query.sectionId !== path.substring(1)) {
      router.push(path);
      setActiveIndex(newIdx);
    }
  };

  useEffect(() => {
    setActiveIndex(slideIdx);
  }, [slideIdx]);

  return (
    <Slider onSlideChange={onSlideChange} activeSlideIndex={activeIndex}>
      {SECTIONS_COMPONENTS?.map(
        ({ path, component: Component }) => (
          <Component key={path} id={path} />
        ),
        []
      )}
    </Slider>
  );
}
