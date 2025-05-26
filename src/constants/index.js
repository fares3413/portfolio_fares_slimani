import {
  certifcss,
  certifc,
  certifgoogle,
  certifhtml,
  certifjava,
  certifsql,
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
  meta,
  starbucks,
  expertpc,
  tesla,
  shopify,
  tictactoe,
  testris,
  qr,
  carrent,
  jobit,
  tripguide,
  threejs,
  qcm,
  front2,
  ecommercephp,
  clientleger,
  clientlourd,
  immobilier,
ts,
} 
from "../assets"



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
    id: "stages",
    title: "Stages",
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
    id: "certificates",
    title: "Certifications",
  },
  {
    id: "cv",
    title: "CV",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur Frontend",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Designer UI/UX",
    icon: creator,
  },
]

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
    name: "PHP",
    icon: typescript, // Replace with PHP icon
  },
  {
    name: "React JS",
    icon: reactjs,
  },
    {
      name: "TypeScript ",
    icon: ts,
  },

  {
    name: "Laravel",
    icon: redux, // Replace with Laravel icon
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
    name: "Bootstrap",
    icon: mongodb, // Replace with Bootstrap icon
  },
  {
    name: "Java",
    icon: threejs, // Replace with Java icon
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: figma, // Replace with MySQL icon
  },
]

const experiences = [
  {
    title: "BTS SIO option SLAM",
    company_name: "École F2i - Vincennes",
    icon: starbucks, // Replace with school icon
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
    icon: tesla, // Replace with school icon
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
    icon: shopify, // Replace with school icon
    iconBg: "#fff",
    date: "Sept 2020 - Juin 2021",
    points: [
      "Formation scientifique générale.",
      "Développement de compétences analytiques et méthodologiques.",
      "Préparation aux études supérieures.",
    ],
  },
]

// New section for internships (stages)
const stages = [
  {
    title: "Développeur Web",
    company_name: "Famility - Casablanca, Maroc",
    icon: meta, // Replace with company icon
    iconBg: "#FFF",
    date: "Décembre 2024 - Janvier 2025",
    points: [
      "Développement d'interfaces web front-end.",
      "Codage avec les langages de programmation HTML, Tailwind, JavaScript, Laravel.",
      "Gestion de la base de données des informations utilisateurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Famility - Casablanca, Maroc",
    icon: meta, // Replace with company icon
    iconBg: "#FFF",
    date: "Mai 2024 - Juillet 2024",
    points: [
      "Collaboration à l'élaboration de la maquette UX/UI du site avec l'équipe design.",
      "Création de wireframes et prototypes à l'aide de Figma .",
      "Contribution au choix des palettes de couleurs, typographies et éléments graphiques polyvalent.",
    ],
  },
  {
    title: "Assistant Commercial",
    company_name: "Expert PC - Oujda, Maroc",
    icon: expertpc, // Replace with company icon
    iconBg: "#FFF",
    date: "Janvier 2019 - Août 2020",
    points: [
      "Gestion des commandes clients et suivi des stocks pour assurer une disponibilité optimale des produits.",
      "Suivi des commandes clients, des livraisons et des facturations pour assurer un service clientèle efficace.",
    ],
  },
]

const testimonials = [
  {
    testimonial: "Fares a démontré une excellente capacité d'apprentissage et une grande motivation dans ses projets.",
    name: "Sarah Dupont",
    designation: "Professeur",
    company: "École F2i",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "J'ai rarement vu un étudiant aussi passionné par les nouvelles technologies et le développement web.",
    name: "Thomas Martin",
    designation: "Mentor",
    company: "Tech Academy",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Fares a su relever tous les défis techniques que nous lui avons proposés avec créativité et rigueur.",
    name: "Léa Moreau",
    designation: "Responsable de stage",
    company: "WebSolutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Portfolio 3D",
    description:
      "Portfolio interactif utilisant TS pour créer une expérience immersive et présenter mes compétences et projets de manière innovante.",
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
    image: tripguide,
    source_code_link: "https://github.com/fares3413/rental-cars",
  },
  {
    name: "Carousel Project",
    description:
      "Projet de carousel interactif avec animations fluides et responsive design, permettant de présenter des images ou du contenu de manière élégante.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce Platform",
    description:
      "Plateforme e-commerce complète avec gestion des produits, panier d'achat, paiement sécurisé et interface administrateur.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/fares3413/furni-web",
  },
 
{
  name: "Client Léger",
  description:
    "Site de vente de montres avec une interface d'administration, développé avec Laravel, JS et Tailwind CSS.",
  tags: [
    { name: "laravel", color: "blue-text-gradient" },
    { name: "javascript", color: "green-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
  ],
  image: clientleger,
  source_code_link: "https://github.com/", // Remplace par ton lien
},
{
  name: "Client Lourd",
  description:
    "Application de prise de rendez-vous développée en Python, visant à gérer efficacement les créneaux et les clients.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
  ],
  image: clientlourd,
  source_code_link: "https://github.com/", // Remplace par ton lien
},
{
  name: "Site Immobilier",
  description:
    "Plateforme immobilière avec interface d'administration complète, développée avec Laravel, Tailwind CSS, JavaScript et Filament pour une gestion efficace des biens.",
  tags: [
    { name: "laravel", color: "blue-text-gradient" },
    { name: "tailwind", color: "green-text-gradient" },
    { name: "javascript", color: "pink-text-gradient" },
    { name: "filament", color: "blue-text-gradient" },
  ],
  image: immobilier,
  source_code_link: "https://github.com/", // Remplace par ton lien
},

  {
    name: "Tic-Tac-Toe",
    description:
      "Un jeu de morpion interactif développé avec JavaScript, HTML et CSS. Ce jeu classique permet à deux joueurs de s'affronter tour à tour avec une interface intuitive et un suivi de l'historique des coups.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe, // You'll need to replace with actual image
    source_code_link: "https://github.com/fares3413/tic-tac-toe",
  },
  {
    name: "QR Code Generator",
    description:
      "Application web permettant de générer des QR codes personnalisés à partir de texte ou d'URLs. Idéal pour créer rapidement des codes QR pour des sites web, cartes de visite ou événements.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: qr, // You'll need to replace with actual image
    source_code_link: "https://github.com/fares3413/Qr-code-generater",
  },
  {
    name: "Tetris",
    description:
      "Recréation du célèbre jeu Tetris avec des fonctionnalités modernes. Ce projet implémente la logique complète du jeu, y compris la rotation des pièces, la détection de collision et le système de score.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: testris, 
    source_code_link: "https://github.com/fares3413/TESTRIS",
  },
  {
  name: "QCM App",
  description:
    "Application de questionnaire à choix multiples développée avec PHP, JavaScript et Bootstrap.",
  tags: [
    { name: "php", color: "blue-text-gradient" },
    { name: "javascript", color: "green-text-gradient" },
    { name: "bootstrap", color: "pink-text-gradient" },
  ],
  image: qcm,
  source_code_link: "https://github.com/", // Remplace par ton lien
},
{
  name: "Template Ecommerce",
  description:
    "Projet statique réalisé avec HTML, CSS et JavaScript, démontrant des compétences de base en frontend.",
  tags: [
    { name: "html", color: "blue-text-gradient" },
    { name: "css", color: "green-text-gradient" },
    { name: "javascript", color: "pink-text-gradient" },
  ],
  image: front2,
  source_code_link: "https://github.com/", // Remplace par ton lien
},
{
  name: "Ecommerce website",
  description:
    "Site e-commerce complet avec gestion de produits et interface utilisateur, réalisé avec PHP, JS et Bootstrap.",
  tags: [
    { name: "php", color: "blue-text-gradient" },
    { name: "javascript", color: "green-text-gradient" },
    { name: "bootstrap", color: "pink-text-gradient" },
  ],
  image: ecommercephp,
  source_code_link: "https://github.com/", // Remplace par ton lien
}
]

// Updated Tech Watch section
const techWatchItems = [
  {
    title: "Cybersécurité des Applications Web",
    description:
      "La cybersécurité est un enjeu majeur pour tout développeur d'applications web. Ma veille se concentre sur les vulnérabilités OWASP Top 10, les bonnes pratiques de sécurisation, et les dernières menaces émergentes. Je surveille particulièrement les injections SQL, XSS, CSRF et les failles d'authentification qui représentent les risques les plus courants.",
    tags: [
      {
        name: "owasp",
        color: "blue-text-gradient",
      },
      {
        name: "pentest",
        color: "green-text-gradient",
      },
      {
        name: "securité",
        color: "pink-text-gradient",
      },
    ],
    link: "https://owasp.org/www-project-top-ten/",
  },
  {
    title: "Méthodologie de veille",
    description:
      "Ma veille s'appuie sur plusieurs sources fiables : le site de l'OWASP, les bulletins du CERT-FR, les forums spécialisés comme HackTricks et PortSwigger, et des newsletters comme ZATAZ. J'utilise Google Alerts et Feedly pour suivre les mots-clés pertinents et je participe à des webinaires sur la sécurité web.",
    tags: [
      {
        name: "sources",
        color: "blue-text-gradient",
      },
      {
        name: "cert-fr",
        color: "green-text-gradient",
      },
      {
        name: "veille",
        color: "pink-text-gradient",
      },
    ],
    link: "https://www.cert.ssi.gouv.fr/",
  },
  {
    title: "Actualités et cas concrets",
    description:
      "Je suis attentivement les incidents de sécurité récents comme la faille MOVEit (2023-2024) qui a touché de nombreuses entreprises, la fuite de données chez France Travail (janvier 2024), et l'évolution des réglementations comme le RGPD qui impactent directement notre métier de développeur. Ces cas réels m'aident à comprendre les conséquences pratiques des vulnérabilités.",
    tags: [
      {
        name: "incidents",
        color: "blue-text-gradient",
      },
      {
        name: "rgpd",
        color: "green-text-gradient",
      },
      {
        name: "actualité",
        color: "pink-text-gradient",
      },
    ],
    link: "https://www.zataz.com/",
  },
  {
    title: "Outils et bonnes pratiques",
    description:
      "Dans le cadre de ma formation, j'ai appris à utiliser des outils comme OWASP ZAP et Burp Suite pour tester la sécurité de mes applications. J'applique systématiquement les bonnes pratiques : validation des entrées, paramétrage des requêtes SQL, utilisation de frameworks sécurisés, chiffrement des données sensibles et mise à jour régulière des dépendances.",
    tags: [
      {
        name: "outils",
        color: "blue-text-gradient",
      },
      {
        name: "zap",
        color: "green-text-gradient",
      },
      {
        name: "pratiques",
        color: "pink-text-gradient",
      },
    ],
    link: "https://www.zaproxy.org/",
  },
]

// New section for certificates
const certificates = [
  {
    title: "SQL Certification",
    image: certifsql,
    issuer: "Intellipaat",
    date: "2023",
    link: "https://intellipaat.com/academy/certificate-link/?Yz02MTkmdT0xNzI1MDUmZXh0PTE=",
  },
  {
    title: "Google IT Support",
    image: certifgoogle,
    issuer: "Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/verify/QUPQ2Z6JR8WY",
  },
  {
    title: "Java Certification",
    image: certifjava,
    issuer: "Intellipaat",
    date: "2023",
    link: "https://intellipaat.com/academy/certificate-link/?Yz05MjcmdT0xNzI1MDUmZXh0PTE=",
  },
  {
    title: "C Certification",
    image: certifc,
    issuer: "Intellipaat",
    date: "2025",
    link: "https://intellipaat.com/academy/certificate-link/?Yz0xMjQ0JnU9MTcyNTA1JmV4dD0x",
  },
  {
    title: "CSS Certification",
    image: certifcss,
    issuer: "Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/verify/BA7W964M9R3M",
  },
  {
    title: "HTML Certification",
    image: certifhtml,
    issuer: "Coursera",
    date: "2023",
    link: "https://www.coursera.org/account/accomplishments/verify/U4CPND5YPD5W",
  },
  
]

export { services, technologies, certificates, experiences, stages, testimonials, projects, techWatchItems }
