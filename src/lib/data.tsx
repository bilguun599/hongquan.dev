import { Github } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import FPTSoftware from "/public/images/logos/fpt_software.png";
import YAS from "/public/images/logos/yas.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/shahLewism",
  GITHUB_REPO: "https://github.com/shahLewism/Lewisshah.dev",
  TWITTER: "https://twitter.com/shahLewism",
  FIGMA: "https://www.figma.com/@shahLewism",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/duong-hong-quan",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: YAS,
    logoAlt: "YAS logo",
    position: "Junior Full Stack Developer (Next.js & NestJS)",
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      "Developed and maintained web applications using Next.js and NestJS.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Integrated front-end components with back-end services to create seamless user experiences.",
      "Utilized TypeScript for type-safe development and improved code quality.",
      "Worked with PostgreSQL for database management and optimized queries for performance.",
      "Implemented responsive UI designs using TailwindCSS and Material-UI.",
      "Conducted end-to-end testing with Cypress and unit testing to ensure application reliability.",
      "Participated in code reviews and contributed to maintaining high coding standards.",
      "Assisted in deploying applications to cloud platforms and managing CI/CD pipelines.",
    ],
  },
  {
    logo: FPTSoftware,
    logoAlt: "FPT logo",
    position: "Fresher .NET Developer",
    startDate: new Date(2023, 9),
    endDate: new Date(2024, 2),
    summary: [
      "Developed and maintained web applications using .NET Core.",
      "Collaborated with front-end developers to integrate user-facing elements with server-side logic.",
      "Participated in code reviews and contributed to improving coding standards.",
      "Assisted in the design and implementation of RESTful APIs.",
      "Performed unit testing and debugging to ensure high-quality code.",
      "Worked closely with senior developers to learn best practices and industry standards.",
      "Contributed to project documentation and technical specifications.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [];

export const TESTIMONIALS: TestimonialDetails[] = [];
