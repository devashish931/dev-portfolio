import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  ReactElement,
  useCallback,
} from "react";
import cn from "@/lib/utils";
import { useRouter } from "next/router";
import isFinite from "lodash/isFinite";
import { SliderBtnActions } from "@/lib/types";

export const SLIDER_BTN_ACTIONS = { NEXT: "next", PREV: "prev" } as const;

type BaseSliderPros = {
  children: React.ReactNode[];
  slideInitialIndex?: number;
};

type SliderProps =
  | (BaseSliderPros & {
      onSlideChange?: (slideIdx: number) => void;
      activeSlideIndex?: undefined;
    })
  | (BaseSliderPros & {
      activeSlideIndex: number;
      onSlideChange: (action: SliderBtnActions) => void;
    });

const getInitialIndex = (activeIndex?: number, initialIndex?: number) =>
  activeIndex && isFinite(activeIndex)
    ? activeIndex
    : initialIndex && isFinite(initialIndex)
    ? initialIndex
    : 0;

const Slider: React.FC<SliderProps> = ({
  children,
  onSlideChange,
  slideInitialIndex = 0,
  activeSlideIndex,
}) => {
  const router = useRouter();
  const { sectionId } = router.query;

  const isControlled = typeof activeSlideIndex === "number";

  const [slides] = useMemo(() => {
    const _slides = React.Children.toArray(children)?.map((child) => ({
      Slide: child,
      id: (child as ReactElement)?.props?.id?.replace("/", ""),
    }));

    const currentIndex = _slides?.findIndex((item) => item?.id === sectionId);

    if (currentIndex === -1) return [_slides, 0];
    return [_slides, currentIndex];
  }, [children, sectionId]);

  const [currentSlide, setCurrentSlide] = useState<number>(() =>
    getInitialIndex(activeSlideIndex, slideInitialIndex)
  );
  const [visibleSlide, setVisibleSlide] = useState<number>(() =>
    getInitialIndex(activeSlideIndex, slideInitialIndex)
  );
  const visibleSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    if (isControlled) {
      onSlideChange?.("next");
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }
  };

  const handlePrev = () => {
    if (isControlled) {
      onSlideChange?.("prev");
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    }
  };

  const clearVisibleTimerRef = useCallback(() => {
    if (visibleSlideTimerRef.current) {
      clearTimeout(visibleSlideTimerRef.current);
      visibleSlideTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearVisibleTimerRef();
    visibleSlideTimerRef.current = setTimeout(
      () => setVisibleSlide(currentSlide),
      500
    );

    if (!isControlled) {
      onSlideChange?.(currentSlide);
    }
  }, [currentSlide, clearVisibleTimerRef, onSlideChange, isControlled]);

  useEffect(() => {
    if (isControlled) {
      setCurrentSlide(activeSlideIndex);
    }
  }, [activeSlideIndex, isControlled]);

  useEffect(() => clearVisibleTimerRef, []);

  return (
    <div className="w-screen overflow-hidden pt-20 md:relative md:h-screen">
      <div
        className="top-0 h-full transition-all duration-500 ease-anticipate md:absolute md:flex"
        style={{
          left: `calc(-${currentSlide} * 100vw)`,
        }}
      >
        {slides.map(({ Slide }, index) => (
          <div
            key={index}
            className={cn(
              "duration-250 h-full w-screen overflow-hidden bg-gray-800 transition-all ease-anticipate md:blur-lg",
              { "!blur-[0px]": visibleSlide === index }
            )}
          >
            {Slide}
          </div>
        ))}
      </div>

      <div
        onClick={handlePrev}
        className="cursor-arrow cursor-arrow-left absolute left-0 top-0 z-50 hidden h-full w-[calc(50vw_-(min(50vw,640px)_-_100px))] md:block"
      ></div>
      <div
        onClick={handleNext}
        className="cursor-arrow cursor-arrow-right absolute right-0 top-0 z-50 hidden h-full w-[calc(50vw_-(min(50vw,640px)_-_100px))] md:block"
      ></div>
    </div>
  );
};

export default Slider;
