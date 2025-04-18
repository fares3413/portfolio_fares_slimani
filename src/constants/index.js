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
    title: "À propos",
  },
  {
    id: "education",
    title: "Formation",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "techwatch",
    title: "Veille",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur React",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Intégrateur 3D",
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
    title: "BTS SIO option SLAM",
    company_name: "École F2i - Vincennes",
    icon: starbucks, // You may want to replace this with a school icon
    iconBg: "#fff",
    date: "Sept 2023 - En cours",
    points: [
      "Formation en développement d'applications et services informatiques.",
      "Apprentissage des langages de programmation et frameworks modernes.",
      "Conception et développement d'applications web et mobiles.",
      "Participation à des projets d'équipe et mise en pratique des connaissances.",
    ],
  },
  {
    title: "Technicien Spécialisé en Développement",
    company_name: "OFPPT - Maroc",
    icon: tesla, // You may want to replace this with a school icon
    iconBg: "#fff",
    date: "Sept 2021 - Juin 2022",
    points: [
      "Formation aux fondamentaux du développement informatique.",
      "Apprentissage des bases de données et de la programmation orientée objet.",
      "Développement de projets web et applications.",
      "Travail en équipe sur des projets concrets.",
    ],
  },
  {
    title: "Baccalauréat Sciences de la Vie et de la Terre",
    company_name: "Riad School - Maroc",
    icon: shopify, // You may want to replace this with a school icon
    iconBg: "#fff",
    date: "Sept 2020 - Juin 2021",
    points: [
      "Formation scientifique générale.",
      "Développement de compétences analytiques et méthodologiques.",
      "Préparation aux études supérieures.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Fares a démontré une excellente capacité d'apprentissage et une grande motivation dans ses projets.",
    name: "Sarah Dupont",
    designation: "Professeur",
    company: "École F2i",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "J'ai rarement vu un étudiant aussi passionné par les nouvelles technologies et le développement web.",
    name: "Thomas Martin",
    designation: "Mentor",
    company: "Tech Academy",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Fares a su relever tous les défis techniques que nous lui avons proposés avec créativité et rigueur.",
    name: "Léa Moreau",
    designation: "Responsable de stage",
    company: "WebSolutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio 3D",
    description:
      "Portfolio interactif utilisant Three.js pour créer une expérience immersive et présenter mes compétences et projets de manière innovante.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Application de Gestion",
    description:
      "Application web permettant de gérer des ressources, suivre des projets et analyser des données avec des visualisations interactives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce Platform",
    description:
      "Plateforme e-commerce complète avec gestion des produits, panier d'achat, paiement sécurisé et interface administrateur.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

// New section for Veille Technologique
const techWatchItems = [
  {
    title: "Intelligence Artificielle",
    description: "Suivi des avancées en IA générative et des applications pratiques dans le développement web. Exploration des frameworks comme TensorFlow.js et des services cloud d'IA.",
    tags: [
      {
        name: "ia",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "chatgpt",
        color: "pink-text-gradient",
      },
    ],
    link: "https://openai.com",
  },
  {
    title: "Développement Web 3D",
    description: "Exploration des technologies Three.js et React Three Fiber pour créer des expériences web immersives. Étude des performances et optimisations pour les applications 3D sur le web.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "webgl",
        color: "green-text-gradient",
      },
      {
        name: "3d",
        color: "pink-text-gradient",
      },
    ],
    link: "https://threejs.org",
  },
  {
    title: "Cybersécurité",
    description: "Veille sur les meilleures pratiques de sécurité pour les applications web modernes. Étude des vulnérabilités courantes et des méthodes de protection des données utilisateur.",
    tags: [
      {
        name: "securité",
        color: "blue-text-gradient",
      },
      {
        name: "owasp",
        color: "green-text-gradient",
      },
      {
        name: "auth",
        color: "pink-text-gradient",
      },
    ],
    link: "https://owasp.org",
  },
];

export { services, technologies, experiences, testimonials, projects, techWatchItems };