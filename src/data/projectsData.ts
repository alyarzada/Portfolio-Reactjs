import dashboardImg from "../assets/projects/vision-ui-react-dashboard.jpg";
import facebookApp from "../assets/projects/facebook.webp";
import ecommerceApp from "../assets/projects/e-commerce.jpg";
import whatsappApp from "../assets/projects/whatsapp.webp";

export interface DataTypes {
  id: number;
  title: string;
  status: string;
  about: string;
  img: string;
  techs: string[];
  liveDemo: boolean;
  srcLink: string;
  demoLink: string;
}

export const projectsData: DataTypes[] = [
  {
    id: 1,
    title: "Complex Dashboard app",
    about:
      "Front-End with React js integrated Laravel API which is not currently run",
    status: "Available",
    img: dashboardImg,
    techs: [
      "React js",
      "MUI",
      "Tailwind",
      "Redux Toolkit",
      "Async Thunk",
      "Full Calendar",
      "Apex Charts",
      "Formik/Yup",
      "I18next",
      "React-Dropzone",
      "Swiper",
    ],
    liveDemo: false,
    srcLink: "https://github.com/alyarzada/Dashboard-Nextjs-Fullstack",
    demoLink: "",
  },
  {
    id: 2,
    title: "E-commerce app",
    about: "Front-End with Next js 13",
    status: "Available",
    img: ecommerceApp,
    techs: [
      "Next js (pages directory)",
      "TypeScript",
      "Tailwind",
      "Ant Design",
      "Zustand",
      "Stripe",
      "React-Slick",
      "Complex Filtering and Sorting",
    ],
    liveDemo: true,
    srcLink: "https://github.com/alyarzada/Ecommerce-Nextjs",
    demoLink: "",
  },
  {
    id: 3,
    title: "Blog app with CMS",
    about: "Full-Stack with React js and GraphQL",
    status: "Not completed yet (currently working on..)",
    img: ecommerceApp,
    techs: [
      "React js",
      "TypeScript",
      "GraphQl",
      "Hygraph CMS",
      "Pagination",
      "UNO CSS",
      "Ant Design",
      "Zustand",
    ],
    liveDemo: true,
    srcLink: "https://github.com/alyarzada/blogapp-graphql-cms",
    demoLink: "https://graphql-bloggy.netlify.app/",
  },
  {
    id: 4,
    title: "Facebook clone app",
    about: "Full-Stack with Next js 13",
    status: "Not completed yet (currently working on..)",
    img: facebookApp,
    techs: [
      "React js",
      "Ant Design",
      "Tailwind",
      "TanStack Query",
      "Socket.io",
      "REST API",
      "IntersectionObserver API",
      "Infinite Scrolling",
    ],
    liveDemo: false,
    srcLink: "https://github.com/alyarzada/FacebookClone-Fullstack",
    demoLink: "",
  },

  {
    id: 5,
    title: "Whatsapp clone app",
    about: "Full-Stack with React js and GraphQL",
    status: "Not started yet",
    img: whatsappApp,
    techs: ["React js", "UNO CSS", "Ant Design", "SWR", "Firebase"],
    liveDemo: false,
    srcLink: "https://github.com/alyarzada/WhatsappClone-Nextjs-Fullstack",
    demoLink: "",
  },
];
