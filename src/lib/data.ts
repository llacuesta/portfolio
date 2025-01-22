// Imports
import { FaGithub } from "react-icons/fa";

export const links = [
  {
    name: "home",
    path: "#home"
  },
  {
    name: "projects",
    path: "#projects"
  },
  {
    name: "skills",
    path: "#skills"
  },
  {
    name: "experience",
    path: "#experience"
  },
  {
    name: "contact",
    path: "#contact"
  }
] as const;

export const projects = [
  {
    title: "Personal Website",
    description: "A personal website that serves as my portfolio for my projects and current work experience.",
    stack: [
      {
        tech: "Next.js",
        icon: "/logos/next.svg",
      }, 
      {
        tech: "TypeScript",
        icon: "/logos/typescript.svg",
      },
      {
        tech: "Tailwind",
        icon: "/logos/tailwind.svg",
      }, 
      {
        tech: "Three.js",
        icon: "/logos/threejs.svg",
      },
      {
        tech: "Shadcn/UI",
        icon: "/logos/shadcn.svg",
      },
    ],
    imageUrl: "/projects/portfolio.png",
    image: true,
    links: [
      {
        tooltip: "You're Here!",
        link: "/",
        icon: "/logos/open.svg"
      },
      {
        tooltip: "GitHub",
        link: "https://github.com/llacuesta/portfolio",
        icon: "/logos/github.svg"
      },
    ],
  },
  {
    title: "Coachella Virtual Experience",
    description: "A free roam simulation that offers an immersive experience of Coachella Valley Music and Arts Festival. It features some of the notable landmarks that are usually associated with the music festival. The user may explore 5 key landmarks and points of interest in the Coachella grounds and interact with the music player and other interactive features.",
    stack: [
      {
        tech: "Three.js",
        icon: "/logos/threejs.svg",
      },
      {
        tech: "JavaScript",
        icon: "/logos/js.svg",
      }, 
      {
        tech: "Blender",
        icon: "/logos/blender.svg",
      }, 
      {
        tech: "WebGl 2.0",
        icon: "/logos/webgl.svg",
      }, 
      {
        tech: "Vite",
        icon: "/logos/vite.svg",
      },
    ],
    imageUrl: "/projects/coachella.png",
    image: true,
    links: [
      {
        tooltip: "GitHub",
        link: "https://github.com/sttkyle/CMSC161_Project",
        icon: "/logos/github.svg"
      },
    ],
  },
  {
    title: "Sprint",
    description: "A prototype of a To-Do List Aggregator that unifies multiple and separate Learning Management Systems (LMS) in universities as way to forgetting academic tasks. The app aims to simplify the workflow of students and find information easily through a single app. Case study and usability testing was done during the desgining process.",
    stack: [
      {
        tech: "Figma",
        icon: "/logos/figma.svg",
      }, 
      {
        tech: "Adobe Photoshop",
        icon: "/logos/ps.svg",
      }, 
    ],
    imageUrl: "/projects/sprint.png",
    image: true,
    links: [
      {
        tooltip: "Figma",
        link: "https://www.figma.com/proto/kc3ceXdUB790fGY9LNiDGd/Sprint---App-Prototype?page-id=0%3A1&node-id=2-2&viewport=561%2C391%2C0.17&t=lu4GVK4gQF70yZBN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1",
        icon: "/logos/figma.svg"
      },
    ],
  },
  {
    title: "ElBNB",
    description: "A Student Accommodation and Lodging System that allows students to find accommodation and lodging inside or wthin the vicinity the campus of University of the Philippines Los Baños. It also allows accommodation owners to create their own listings for visibility.",
    stack: [
      {
        tech: "MySQL",
        icon: "/logos/mysql.svg",
      }, 
      {
        tech: "Express.js",
        icon: "/logos/express.svg",
      }, 
      {
        tech: "React",
        icon: "/logos/react.svg",
      }, 
      {
        tech: "Node.js",
        icon: "/logos/node.svg",
      },
      {
        tech: "JavaScript",
        icon: "/logos/js.svg",
      }, 
    ],
    imageUrl: "/projects/elbnb.png",
    image: true,
    links: [
      {
        tooltip: "Open",
        link: "https://elbnb.netlify.app/",
        icon: "/logos/open.svg"
      },
      {
        tooltip: "GitHub",
        link: "https://github.com/gtopinio/elbnb-backend-128",
        icon: "/logos/github.svg"
      },
    ],
  },
  {
    title: "Bounce Prince",
    description: "A 2D vertical platforming game in which players race to reach the top the fastest either by sheer speed or by pushing other players down. Supports online play through a local network for up to 4 players. Uses Java for networking code and Swing for the GUI.",
    stack: [
      {
        tech: "Java Swing",
        icon: "/logos/java.svg",
      }, 
    ],
    imageUrl: "/projects/bounceprince.webm",
    image: false,
    links: [
      {
        tooltip: "GitHub",
        link: "https://github.com/llacuesta/bounce-prince",
        icon: "/logos/github.svg"
      },
    ],
  },
  {
    title: "Invasion",
    description: "A sprite-based 2D game in which players have to survive an alien invasion for 60 seconds. Made with Java and JavaFX for the GUI.",
    stack: [
      {
        tech: "Java",
        icon: "/logos/java.svg",
      }, 
      {
        tech: "JavaFX",
        icon: "/logos/javafx.svg",
      }, 
    ],
    imageUrl: "/projects/invasion.png",
    image: true,
    links: [
      {
        tooltip: "GitHub",
        link: "https://github.com/llacuesta/invasion",
        icon: "/logos/github.svg"
      },
    ],
  },
] as const;

export const skills = [
  { 
    section: "Languages", 
    skills: [
      { name: "C", icon: "/logos/c.svg" },
      { name: "Java", icon: "/logos/java.svg" },
      { name: "Python", icon: "/logos/python.svg" },
      { name: "JavaScript", icon: "/logos/js.svg" },
      { name: "TypeScript", icon: "/logos/typescript.svg" },
    ],
    span: false,
  },
  {
    section: "Front End Development", 
    skills: [
      { name: "HTML", icon: "/logos/html.svg" },
      { name: "CSS", icon: "/logos/css.svg" },
      { name: "React", icon: "/logos/react.svg" },
      { name: "Next.js", icon: "/logos/next.svg" },
      { name: "Tailwind", icon: "/logos/tailwind.svg" },
    ],
    span: false,
  },
  {
    section: "Design", 
    skills: [
      { name: "Photoshop", icon: "/logos/ps.svg" },
      { name: "Figma", icon: "/logos/figma.svg" },
      { name: "Canva", icon: "/logos/canva.svg" },
      { name: "Blender", icon: "/logos/blender.svg" },
    ],
    span: false,
  },
  {
    section: "Back End and Databases", 
    skills: [
      { name: "Express.js", icon: "/logos/express.svg" },
      { name: "Node.js", icon: "/logos/node.svg" },
      { name: "NestJS", icon: "/logos/nestjs.svg" },
      { name: "MySQL", icon: "/logos/mysql.svg" },
      { name: "MongoDB", icon: "/logos/mongodb.svg" },
    ],
    span: false,
  },
  {
    section: "Version Control", 
    skills: [
      { name: "Git", icon: "/logos/git.svg" },
      { name: "GitHub", icon: "/logos/github.svg" },
    ],
    span: true,
  },
] as const;

export const experience = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Old St. Labs",
    startYear: "Sept 2024",
    endYear: "Oct 2024",
    description: "Participated in an internship program where we were trained on Full Stack Web Development technologies such as NextJS, NestJS, and the AWS Platform. Worked on an internal web application that uses said technologies with AI integration as part of our project immersion."
  },
  {
    role: "Front End Web Developer Intern",
    company: "LoPhils Inc.",
    startYear: "July 2023",
    endYear: "Aug 2023",
    description: "Worked on the frontend of one of the company's web products (revamping the User Dashboard and translating the UI provided by the UI Designer for the Onboarding Experience)."
  },
  {
    role: "College Education",
    company: "University of The Philippines - Los Baños",
    startYear: "June 2020",
    endYear: "Dec 2024",
    description: "Graduated Bachelor of Science in Computer Science."
  },
]