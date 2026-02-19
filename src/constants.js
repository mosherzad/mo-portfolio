// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import jwtLogo from "./assets/tech_logo/jwt.png";
import prismaLogo from "./assets/tech_logo/prisma.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import shadcn from "./assets/tech_logo/shadcn.png";
import restApiLogo from "./assets/tech_logo/restAPI.png";
import apiIntegration from "./assets/tech_logo/apiIntegration.png";
import npmLogo from "./assets/tech_logo/npm.png";
import sqlLogo from "./assets/tech_logo/sql.png";
// Experience Section Logo's

import freelancerLogo from "./assets/company_logo/freelancer.png";

// Education Section Logo's

import uodLogo from "./assets/education_logo/uodLOGO.png";

// Project Section Logo's
import autoMarketLogo from "./assets/work_logo/autoMarket.png";
import foodRecipesLogo from "./assets/work_logo/foodRecipes.png";
import movieTvLogo from "./assets/work_logo/movieTv.png";
import ecommerceLogo from "./assets/work_logo/Ecommerce.png";
import tasklistLogo from "./assets/work_logo/tasklist.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "API Integration", logo: apiIntegration },
      { name: "Redux Toolkit", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Shadcn/UI", logo: shadcn },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "JWT Authentication", logo: jwtLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Prisma", logo: prismaLogo },
      { name: "Next.js API / REST", logo: restApiLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "SQL", logo: sqlLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "NPM", logo: npmLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: freelancerLogo,
    role: "Fullstack Developer (Frontend-Focused)",
    company: "Mostaql & Freelancer",
    date: "Nov 2025 - Present",
    desc: "Delivered web development projects for clients on platforms like Mostaql and Freelancer. Developed fullstack applications using React, Next.js, Node.js. Built responsive interfaces, integrated APIs, and implemented features based on client requirements. Managed project timelines and communicated effectively with clients to ensure high-quality deliverables.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Next JS",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: uodLogo,
    school: "University of Duhok",
    date: "Oct 2021 - Jun 2025",
    grade: "7.81 CGPA",
    desc: "Completed my Bachelor's degree in Computer Science from the University of Duhok. Studied subjects like Networking, Artificial Intelligence (AI), Network Security, Data Structures, and Object-Oriented Programming (OOP). Gained hands-on experience in programming, web development, databases, and software engineering principles, while participating in workshops and technical events to enhance practical skills.",
    degree: "Bachelor of Science in Computer Science (B.Sc.)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Auto Market Web App",
    description:
      "Auto Market is a vehicle marketplace web application that allows users to browse and search detailed car listings. It features dynamic routing, database integration, responsive design, and multilingual support (Kurdish, Arabic, and English), focusing on performance and clean UI.",
    image: autoMarketLogo,
    tags: [
      "TypeScript",
      "Next JS",
      "Tailwind CSS",
      "Shadcn/UI",
      "Prisma ORM",
      "PostgreSQL",
      "REST API",
      "JWT Authentication",
    ],
    github: "https://github.com/mosherzad/AutoMarket",
    webapp: "https://auto-market-xi.vercel.app/en",
  },
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A modern and responsive e-commerce web application built with React JS for selling PC components. The platform allows users to browse products, view detailed specifications, add items to the cart, and manage their purchases through a smooth and intuitive interface. The project focuses on clean UI design, dynamic product rendering, state management, and an optimized user experience.",
    image: ecommerceLogo,
    tags: ["React JS", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/mosherzad/motech-storee",
    webapp: "https://motech-storee.vercel.app/",
  },
  {
    id: 2,
    title: "Movies & TVs Reviews",
    description:
      "Developed a fully responsive Movies & TV Reviews web application using React.js, Redux Toolkit and Tailwind CSS, integrated with a REST API. Features include search functionality, providing a seamless and engaging user experience across all devices",
    image: movieTvLogo,
    tags: ["React JS", "Tailwind CSS", "API integration", "Axios"],
    github: "https://github.com/mosherzad/movie-tv-app",
    webapp: "https://mohammed-movie-tvv-review.vercel.app/",
  },
  {
    id: 3,
    title: "Food Recipes",
    description:
      "A Food Recipes web app built with React.js and Tailwind CSS, fetching data from a REST API. Users can search recipes, explore categories, and view detailed meal information. Fully responsive with a modern, interactive design.",
    image: foodRecipesLogo,
    tags: ["React JS", "Tailwind CSS", "API integration", "Axios"],
    github: "https://github.com/mosherzad/food-recipes",
    webapp: "https://food-recipes-coral.vercel.app/",
  },
  {
    id: 4,
    title: "Tasks List",
    description:
      "A responsive Task List web application built to manage daily tasks efficiently. The app allows users to add, edit, delete, and mark tasks as completed through a clean and intuitive interface. The project focuses on state management, component reusability, and providing a smooth user experience.",
    image: tasklistLogo,
    tags: ["Next JS", "Prisma ORM", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/mosherzad/full-stack-taskList-app",
    webapp: "https://full-stack-task-list-app.vercel.app/",
  },
];
