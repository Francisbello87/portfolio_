import { images } from "../constants";

export const Projects = [
  {
    id: 1,
    title: "OmniGPT Landing Page",
    description:
      "Landing Page for OmniGPT. Added sign in functionaility with Firebase. ",
    image: images.omni,
    demo: "https://omnigpt-new.vercel.app/",
    code: "https://github.com/Francisbello87/omnigpt",
    stack: "react, firebase, framer-motion, tailwind, context",
  },
  {
    id: 2,
    title: "Blog",
    description:
      "A blog app that was developed using React. GraphQL schemas were used as the CMS.",
    image: images.blog,
    demo: "https://couchandcoffee.blog",
    code: "https://github.com/Francisbello87/bee_blog",
    stack: "react, firebase, framer-motion, tailwind, GraphQl",
  },
  {
    id: 3,
    title: "Bee Portfolio",
    description:
      "A modern portfolio website for a Content writer.",
    image: images.portfolio,
    demo: "https://bee-portfolio-drab.vercel.app/",
    code: "https://github.com/Francisbello87/bee_portfolio",
    stack: "react, firebase, framer-motion, tailwind",
  },
  {
    id: 4,
    title: "Weather",
    description:
      "A weather app developed with vanilla Javascript.",
    image: images.weather,
    demo: "https://francisbello87.github.io/weather-app/",
    code: "https://github.com/Francisbello87/weather-app",
    stack: "react, firebase, framer-motion, tailwind",
  },
  {
    id: 5,
    title: "Quiz",
    description:
      "A quiz app that was developed using Open Trivia DB API.",
    image: images.quiz,
    demo: "https://quizzbee-new.vercel.app/",
    code: "https://github.com/Francisbello87/quizzbee",
    stack: "react, firebase, framer-motion, tailwind, redux, styled components, redux/toolkit",
  },
  {
    id: 6,
    title: "Raychills",
    description:
      "An e-commerce web app that allows users to order their favorite drinks.",
    image: images.raychills,
    demo: "https://raychills-new.vercel.app/",
    code: "https://github.com/Francisbello87/raychills",
    stack: "react, firebase, framer-motion, tailwind, context,",
  },

];

export const TechStacks = [
  { id: 1, image: images.HTML, title: 'HTML' },
  { id: 2, image: images.CSS, title: 'CSS'  },
  { id: 3, image: images.JAVASCRIPT, title: 'JavaScript' },
  { id: 4, image: images.Tailwind, title: 'Tailwind' },
  { id: 5, image: images.REACT, title: 'React' },
  { id: 6, image: images.Firebase, title: 'Firebase' },
  { id: 7, image: images.GITHUB, title: 'Github' },
  { id: 8, image: images.NODE, title: 'Node' },
  { id: 9, image: images.MONGO, title: 'Mongo>' },
];
