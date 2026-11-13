import Slider from "@/components/slider";
import { SECTIONS } from "@/config/appConfig";
import { SliderBtnActions } from "@/lib/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import SectionLoading from "./sectionLoading";

const SECTIONS_COMPONENTS = [
  { path: SECTIONS.HOME, component: dynamic(()=>import("@/components/home"), { loading: ()=><SectionLoading screenName="Profile" />}) },
  { path: SECTIONS.ABOUT, component: dynamic(()=>import("@/components/about"), { loading: ()=><SectionLoading screenName="Details" />}) },
  { path: SECTIONS.PROJECTS, component: dynamic(()=>import("@/components/projects"), { loading: ()=><SectionLoading screenName="Projects" />}) },
  { path: SECTIONS.SKILLS, component: dynamic(()=>import("@/components/skills"), { loading: ()=><SectionLoading screenName="Skills" />}) },
  { path: SECTIONS.CONTACT, component: dynamic(()=>import("@/components/contact"), { loading: ()=><SectionLoading screenName="Contact Details" />}) },
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
