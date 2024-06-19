import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Getlinked",
    desc: "Just a simple landing with a stylish design",
    img: "/static/projects/getlinked.png",
    link: "https://getlinked-opal-ten.vercel.app/",
    tags: ["next js", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "Food delivery",
    desc: "Just a simple food ordering web application that allow you make an order",
    img: "/static/projects/food-delivery-app.png",
    link: "https://bolajisegun.github.io/pagination/dist",
    github: "https://github.com/bolajiSegun/pagination",
    tags: ["Next js", "Prisma", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Pagination Sample",
    desc: "Just a simple pagination with typescript",
    img: "/static/projects/pagination.png",
    link: "https://bolajisegun.github.io/pagination/dist",
    github: "https://github.com/bolajiSegun/pagination",
    tags: ["Typescript", "CSS"],
  },
  {
    id: 3,
    title: "Laundry Website",
    desc: "Beautiful laundry website for a dry-cleaning company",
    img: "/static/projects/zillionaire.png",
    link: "https://github.com/bolajisegun/zillionaire-website/Html",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Basic Landing Page",
    desc: "Just a landing page design to practice your proficiency in web-development fundamentals",
    img: "/static/projects/balo.png",
    link: "https://bolajisegun.github.io/Balo-Project/Html",
    github: "https://bolajisegun.github.io/Balo-Project",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "React",
    desc: "A react project that allows a user to signup and login",
    img: "/static/projects/react.png",
    link: "https://bitcointemp.com",
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
