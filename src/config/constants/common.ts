import { EDUCATION } from "./education";
import { EXPERIENCES } from "./experiences";
import { PROJECTS } from "./projects";
import { SKILLS } from "./skills";

const EMAIL_ID = "devashishtrehan@gmail.com";

export const SUBJECT_DATA = {
  name: { firstName: "Devashish", lastName: "Trehan" },
  get fullName() {
    return `${this.name.firstName} ${this.name.lastName}`;
  },
  image: "/images/dev-1.webp",
  address: "",
  mobile_number: "9548727092",
  email_id: EMAIL_ID,
  resume: "/files/devashish_resume.pdf",
  social_media_links: {
    github: "https://github.com/devashish931",
    linkedin: "https://www.linkedin.com/in/devashish-trehan-9347a1173/",
    email: EMAIL_ID,
    buyMeCoffee: "https://www.buymeacoffee.com/devTrehan",
  },
  projects: PROJECTS,
  Skills: SKILLS,
  experiences: EXPERIENCES,
  education: EDUCATION,
} as const;
