import { IconType } from "react-icons";
import { SUBJECT_DATA } from "./constants/common";
import { FiExternalLink } from "react-icons/fi";

export const OPEN_TO_WORK =
  process.env.NEXT_PUBLIC_OPEN_TO_WORK === "true" || false;

export const SECTIONS = {
  Hero: "#",
  PROJECTS: "#projects",
  ABOUT: "#about",
  SKILLS: "#skills",
  EXPERIENCE: "#experience",
  CONTACT: "#contact",
};

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  ABOUT: "/about",
  SKILLS: "/skills",
  EXPERIENCES: "/experiences",
  CONTACT: "/contact",
};

export const LINKS: {
  name: string;
  href: string;
  icon?: IconType;
  asButton?: boolean;
  options?: Record<string, string>;
}[] = [
  {
    name: "Home",
    href: ROUTES.HOME,
  },
  {
    name: "Projects",
    href: ROUTES.PROJECTS,
  },
  {
    name: "About",
    href: ROUTES.ABOUT,
  },
  {
    name: "Skills",
    href: ROUTES.SKILLS,
  },
  {
    name: "Experience",
    href: ROUTES.EXPERIENCES,
  },
  {
    name: "Contact",
    href: ROUTES.CONTACT,
  },
  {
    name: "Resume",
    href: SUBJECT_DATA.resume,
    options: {
      target: "_blank",
      rel: "noreferrer",
    },
    asButton: true,
    icon: FiExternalLink,
  },
];
