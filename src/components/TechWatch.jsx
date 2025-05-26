"use client"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import Carousel from "./Carousel"

const techWatchItems = [
  {
    title: "Zataz – Sécurité des applications web",
    description:
      "Zataz publie des articles sur les vulnérabilités des applications web, telles que les injections SQL, XSS et SSRF.",
    tags: [
      { name: "injection SQL", color: "pink-text-gradient" },
      { name: "XSS", color: "blue-text-gradient" },
    ],
    link: "https://www.zataz.com/comment-assurer-la-securite-de-son-application-web/",
    image: "tech/equipe-agence-web.jpg",
  },
  {
    title: "Zataz – Actualités cybersécurité",
    description:
      "Actualités sur les attaques récentes, les fuites de données et les campagnes de phishing ciblant les applications web.",
    tags: [
      { name: "phishing", color: "green-text-gradient" },
      { name: "fuite de données", color: "pink-text-gradient" },
    ],
    link: "https://www.zataz.com/",
    image: "tech/Endgame.jpg",
  },
  {
    title: "CERT-FR – Alertes de sécurité",
    description:
      "Le CERT-FR publie des bulletins techniques sur les vulnérabilités logicielles critiques et les mises à jour de sécurité.",
    tags: [
      { name: "CERT", color: "blue-text-gradient" },
      { name: "vulnérabilités", color: "green-text-gradient" },
    ],
    link: "https://cert.ssi.gouv.fr/alerte/",
    image: "tech/logo_cert_fr.svg",
  },
  {
    title: "CERT-FR – Sécurité applicative",
    description:
      "Recommandations de configuration sécurisée pour les serveurs web, API et bases de données.",
    tags: [
      { name: "serveurs", color: "blue-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
    ],
    link: "https://cert.ssi.gouv.fr/",
    image: "tech/logo_anssi.svg",
  },
  {
    title: "PortSwigger – Blog sécurité web",
    description:
      "Articles techniques sur la sécurité web, les tests avec Burp Suite, et les nouvelles vulnérabilités découvertes.",
    tags: [
      { name: "Burp Suite", color: "green-text-gradient" },
      { name: "AppSec", color: "blue-text-gradient" },
    ],
    link: "https://portswigger.net/blog",
    image: "tech/portswigger.png",
  },
  {
    title: "HackTricks – Méthodologie de pentest",
    description:
      "Documentation sur les techniques de test d’intrusion : XSS, CSRF, IDOR, et contournement d’authentification.",
    tags: [
      { name: "pentest", color: "pink-text-gradient" },
      { name: "CSRF", color: "blue-text-gradient" },
    ],
    link: "https://book.hacktricks.xyz/pentesting-web/web-vulnerabilities-methodology",
    image: "tech/hacktricks.png",
  },
]

const TechWatchCard = ({ index, title, description, tags, link, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="w-full bg-tertiary p-5 rounded-2xl sm:w-[500px]"
  >
    {image && (
      <img src={image} alt={title}  className="w-full h-32 object-cover rounded-md mb-4" />
    )}
    <h3 className="text-white font-bold text-[20px]">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-2 mb-2">
      {tags.map((tag) => (
        <p key={`${title}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
    <p className="text-secondary text-[15px] leading-[22px]">{description}</p>
    {link && (
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => window.open(link, "_blank")}
          className="bg-[#915EFF] py-2 px-4 rounded-xl text-white font-bold text-[14px]"
        >
          En savoir plus
        </button>
      </div>
    )}
  </motion.div>
)

const TechWatch = () => {
  const techWatchDescription =
    "Ma veille technologique est centrée sur la cybersécurité des applications web, un domaine crucial pour tout développeur. Je surveille activement les dernières vulnérabilités, les bonnes pratiques et les outils de sécurisation pour garantir que mes applications sont robustes et sécurisées."

  return (
    <div className="flex flex-col gap-10">
      <Carousel
        items={techWatchItems}
        renderItem={(item, index) => <TechWatchCard key={`techwatch-${index}`} index={index} {...item} />}
        title="Veille Technologique"
        subtitle="Rester à jour"
        description={techWatchDescription}
        itemsPerPage={2}
      />

      {/* Section CommaFeed */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="flex flex-col md:flex-row bg-tertiary rounded-2xl p-6 gap-6 items-center"
      >
        <img
          src="/tech/commafeed.svg"
          alt="CommaFeed"
          className="w-[200px] h-[200px] object-contain rounded-xl"
        />
        <div>
          <h3 className="text-white text-[22px] font-bold mb-2">Ma méthode de veille – CommaFeed</h3>
          <p className="text-secondary text-[15px] leading-[24px]">
            Pour recueillir de nouvelles informations, la méthode de veille automatique est utilisée. Pour cela,
            j'utilise <strong>CommaFeed</strong>, une application web qui permet de collecter automatiquement des
            articles sur la cybersécurité des applications web via des flux RSS. Les sites choisis sont spécialisés
            dans les vulnérabilités, les attaques récentes et les bonnes pratiques.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(TechWatch, "techwatch")
