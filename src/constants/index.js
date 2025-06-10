import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mysql,
  git,
  angular,
  seagull,
  proj1,
  proj2,
  proj3,
  proj4,
  notely,
  sms
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Seagull Victsoft Pvt Ltd",
    icon: seagull,
    iconBg: "#383E56",
    date: "May 2023 - Current",
    points: [
      "Developing and maintaining web-pages using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other backend developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const socialmediaprofile = [
  {
    description:
      "LinkedIn is a business & employment-focused social media platform that works on websites and mobile apps.",
    name: "LinkedIn",
    me: "Prachit Pandit",
    image: "https://www.citypng.com/public/uploads/preview/hd-vector-flat-linkedin-in-round-icon-png-701751695046390m4phkuuiqm.png",
    link: "https://linkedin.com/in/itsprachit/"
  },
  {
    description:
      "Instagram is an American photo and short-form video sharing social networking service.",
    name: "Instagram",
    me: "Prachit Pandit",
    image: "https://i.pinimg.com/736x/ff/5a/e7/ff5ae72f423c7a1a2e6daf347ff1b5e2.jpg",
    link: "https://www.instagram.com/prachit.xo/"
  },
  {
    description:
      "GitHub is a proprietary developer platform that allows developers to create, store, manage, and share their code.",
    name: "GitHub",
    me: "Prachit Pandit",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8FV8SCzjlNqk2yzFPetRZbY7j258d8-MuA&s",
    link: "https://github.com/prachit082"
  },
];

const projects = [
  {
    name: "Notely",
    description:
      "A beautiful, minimalistic, and responsive Notes Manager with features like — Light/Dark Mode, View Modes: List/Tile, Image Support, Sorting, Delete & Restore",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Dexie",
        color: "blue-text-gradient",
      },
      {
        name: "Radix UI",
        color: "green-text-gradient",
      },
    ],
    image: notely,
    source_code_link: "https://notelynotes.vercel.app",
  },
  {
    name: "Healthcare Management",
    description:
      "Web-based platform with 5-user modules of Admin,Doctor,Receptionist,Lab-Technician & Pharmacist each with respective roles and unique features. It aims to help local clinics to manage activities & keep track of them.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
    ],
    image: proj1,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Simple Webpage",
  //   description:
  //     "A simple responsive webpage using Css & NextJs with impressive animations. It also has well-known Baby-Yoda from Star-Wars Franchise and Yoda's Galaxy Animation.",
  //   tags: [
  //     {
  //       name: "Nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: proj3,
  //   source_code_link: "https://prachit.pages.dev",
  // },
  {
    name: "Student Management System",
    description:
      "A web-based Student Management System built with Laravel 12 that allows to efficiently manage students, teachers, courses, batches, enrollments and payments.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel12",
        color: "green-text-gradient",
      },
      {
        name: "Php-8.2",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap4",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel-DomPDF",
        color: "green-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "hhttps://student02.up.railway.app",
  },
];

export { services, technologies, experiences, socialmediaprofile, projects };
