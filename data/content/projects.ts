import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Pagination Sample",
    desc: "Just a simple pagination with typescript",
    img: "/static/projects/pagination.png",
    link: "https://bolajisegun.github.io/pagination/dist",
    github: "https://github.com/bolajiSegun/pagination",
    tags: ["Typescript", "CSS"],
  },
  {
    id: 1,
    title: "Laundry Website",
    desc: "Beautiful laundry website for a dry-cleaning company",
    img: "/static/projects/zillionaire.png",
    link: "https://github.com/bolajisegun/zillionaire-website/Html",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Basic Landing Page",
    desc: "Just a landing page design to practice your proficiency in web-development fundamentals",
    img: "/static/projects/balo.png",
    link: "https://bolajisegun.github.io/Balo-Project/Html",
    github: "https://github.com/bolajiSegun/Balo-Project",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "React",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/react.png",
    link: "react-project-green-zeta.vercel.app",
    github: "https://github.com/bolajiSegun/react-project",
    tags: ["React", "Tailwind", "API"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
