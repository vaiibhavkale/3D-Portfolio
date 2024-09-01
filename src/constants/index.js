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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  capgemini,
  uniquemark,
  stsarc,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  musicnft,
  stockmarket,
  bulko,
  threejs,
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
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Java Developer",
    icon: backend,
  },
  {
    title: "Chess Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Unique Mark",
    icon: uniquemark,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Sahajananda Tech Services And Research Centre Private Limited",
    icon: stsarc,
    iconBg: "#383E56", //"#E6DEDD",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developing and maintaining Android and IOS applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Java Developer (Intern)",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "Feb 2023 - May 2023",
    points: [
      "Developed application for creating micro-services for Hotel Management system.",
      "User Spring Boot framework for Backend and Angular for Frontend.",
      "Created different micro-services and implemented them on a single port using APlgateway.",
      "Registered every service with eureka server.",
      "Used MYSQL at the backend to store the specific data in different documents which were stored in 2 different databases.",
      "Finally implemented FeignClient in order to smoothly and easily access the micro-services from one single service package. Completed internship with PPO."
    ],
  },
  {
    title: "Full stack Java Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using Java, Spring boot, Angular, Typescript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Music NFT Blockchain",
    description:
      "This is a Plotform that enables users to transact music NFT's on ethereum chain.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "Zepellin Smart Contract",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: musicnft,
    source_code_link: "https://github.com/vaiibhavkale/music_nft",
  },
  {
    name: "Stock Market trend prediction Model",
    description:
      "Encoded a model to forecasts the trend in the market by reducing the onscreen technical indicators and delivering detailed analysis to traders.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "green-text-gradient",
      },
      {
        name: "LSTM Model",
        color: "pink-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "StreamLit",
        color: "pink-text-gradient",
      },
    ],
    image: stockmarket,
    source_code_link: "https://github.com/vaiibhavkale/Stock_market_trend_prediction.py",
  },
  {
    name: "Bulko",
    description:
      "Built a full stack app for hotel to enhance customer experience in ordering and delivery.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      }
    ],
    image: bulko,
    source_code_link: "https://bulko.in",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
