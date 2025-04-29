"use client"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import { certificates } from "../constants"
import Carousel from "./Carousel"

const CertificateCard = ({ index, title, image, issuer, date, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image || "/placeholder.svg?height=230&width=360"}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />

          {link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-1/2 h-1/2 object-contain text-white"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            Délivré par: {issuer} | {date}
          </p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Certificates = () => {
  const certificatesDescription =
    "Les certifications suivantes démontrent mon engagement à développer mes compétences et à rester à jour avec les technologies actuelles. Chaque certification représente un domaine de compétence spécifique que j'ai maîtrisé et validé par un organisme reconnu."

  return (
    <Carousel
      items={certificates}
      renderItem={(certificate, index) => (
        <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
      )}
      title="Certifications."
      subtitle="Mes qualifications"
      description={certificatesDescription}
      itemsPerPage={3}
    />
  )
}

export default SectionWrapper(Certificates, "certificates")
