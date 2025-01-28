import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  
  {
    id: 0,
    title: "Animated Landing Page",
    desc: "A website that allow you track your progress",
    img: "/static/projects/trackit.png",
    link: "https://trackit-seven-phi.vercel.app/",
    tags: ["Next JS", "Tailwind CSS", "Framer-motion", "Typescript"],
  },
  {
    id: 1,
    title: "Getlinked",
    desc: "A simple eCommerce website that allows you to upload your product and display them for sale",
    img: "/static/projects/getlinked.png",
    link: "https://getlinked-opal-ten.vercel.app/",
    github: "https://github.com/bolajiSegun/Getlinked",
    tags: ["Next JS", "Tailwind CSS", "Framer-motion"],
  },
  {
    id: 2,
    title: "Blog Website",
    desc: "A simple blog website where you can create an account and add a blog post and view other blogs from other users",
    img: "/static/projects/blog.png",
    link: "https://sg-blog.vercel.app/",
    github: "https://github.com/bolajiSegun/sg-blog",
    tags: ["React", "Typescript", "Tailwind Css", "Node js"],
  },
  {
    id: 3,
    title: "React",
    desc: "Just a simple react website that encompasses the use of authentication and authorization functionality, no special concentration the ui.",
    img: "/static/projects/react.png",
    link: "react-project-green-zeta.vercel.app",
    github: "https://github.com/bolajiSegun/react-project",
    tags: ["React", "Tailwind", "API", "Node.js"],
  },
  {
    id: 4,
    title: "Laundry Website",
    desc: "Beautiful laundry website for a dry-cleaning company",
    img: "/static/projects/zillionaire.png",
    link: "https://github.com/bolajisegun/zillionaire-website/Html",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "Ecommerce Website",
    desc: "Beautiful Ecommerce website with full payment gateway integration for african bespoke wears",
    img: "/static/projects/kenzcouture.png",
    link: "https://kenzcouture.com",
    tags: ["Wordpress"],
  },
  {
    id: 6,
    title: "Basic Landing Page",
    desc: "Just a landing page design to practice your proficiency in web-development fundamentals",
    img: "/static/projects/balo.png",
    link: "https://bolajisegun.github.io/Balo-Project/Html",
    github: "https://github.com/bolajiSegun/Balo-Project",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 7,
    title: "eCommerce Website",
    desc: "A simple eCommerce website that allows you to upload your product and display them for sale",
    img: "/static/projects/sg-store.png",
    link: "https://sg-biz.vercel.app",
    github: "https://github.com/bolajiSegun/eCommerce-website",
    tags: ["Next JS", "Typescript", "Tailwind CSS", "Supabase", "Zod"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
