"use client"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import { techWatchItems } from "../constants"
import Carousel from "./Carousel"

const TechWatchCard = ({ index, title, description, tags, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full">
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full h-full">
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <div className="mt-4 flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <p key={`${title}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <p className="mt-2 text-secondary text-[16px] leading-[24px]">{description}</p>
        </div>

        {link && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-[#915EFF] py-2 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[14px]"
            >
              En savoir plus
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const TechWatch = () => {
  const techWatchDescription =
    "Ma veille technologique est centrée sur la cybersécurité des applications web, un domaine crucial pour tout développeur. Je surveille activement les dernières vulnérabilités, les bonnes pratiques et les outils de sécurisation pour garantir que mes applications sont robustes et sécurisées."

  return (
    <Carousel
      items={techWatchItems}
      renderItem={(item, index) => <TechWatchCard key={`techwatch-${index}`} index={index} {...item} />}
      title="Veille Technologique."
      subtitle="Rester à jour"
      description={techWatchDescription}
      itemsPerPage={2} // Show 2 cards as requested
    />
  )
}

export default SectionWrapper(TechWatch, "techwatch")
