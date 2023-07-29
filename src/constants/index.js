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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
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

const projects = [
  {
    name: "Cryptocurrency Tracker",
    description:
      "It is created using React Js and an free API to fetch data from it.It shows live data of all the available cryptocurrency and comes with a search filter where you can search and find live data of any crypto currency.It includes a graph to show the current value compared to previous 24hrs or weeks or months and even a year.It also shows data like volume,exchanges.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CoinCapAPI",
        color: "green-text-gradient",
      },
      {
        name: "cryptocurrency",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://devmamgain.github.io/cryptocurrency-tracker//",
  },
  {
    name: "ChatMess",
    description:
      "COMPLETE Fullstack Chatting app that uses sockets.io for realtime messaging ,calling, video calling and notifications,javascript,mysql and it has great ui like whatsapp you can send audio message, images, emojis too , can search for contacts as well as any message and also can update your profile anytime.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://chat-mess-devmamgain.vercel.app/login",
  },
  {
    name: "Click Cart",
    description:
      "Full Stack E-Commerce Website That Uses React, Sanity, Stripe, & TailwindCSS.This project has every major feature you would expect from a modern e-commerce app, such as an attractive and accessible user interface, a powerful shopping cart, Customers will be able to choose products from a range of sizes and view different product images through a custom image gallery that you’ll create for each item. And when customers are ready to check out, they can review and manage items in their cart, see and change the running total with shipping costs, and then purchase their items through our own custom Stripe checkout page.And to top it off, our app will have a fully responsive design for any size device.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
      },
    ],
    image: carrent,
    source_code_link: "https://click-cart-devmamgain-fromgithub.vercel.app/",
  },
  
  
];

export { services, technologies, projects };
