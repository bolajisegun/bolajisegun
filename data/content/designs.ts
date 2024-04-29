import { Project } from "types";

type Design = {
  label: string;
  img: string;
  link: string;
  id: number;
};

export const designs: Project[] = [
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
];
