"use client"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const CV = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Mon parcours</p>
        <h2 className={`${styles.sectionHeadText}`}>Curriculum Vitae.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="bg-tertiary p-5 rounded-2xl w-full md:w-1/2"
        >
          <div className="w-full flex justify-center mb-5">
            <a
              href="/cv.pdf"
              download
              className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="w-full h-[500px] bg-black-100 rounded-lg overflow-hidden">
            <iframe src="/cv.pdf" className="w-full h-full" title="CV Preview"></iframe>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="bg-tertiary p-5 rounded-2xl w-full md:w-1/2"
        >
          <h3 className="text-white font-bold text-[24px] mb-5">Résumé</h3>

          <div className="text-secondary text-[17px]">
            <div className="mb-5">
              <h4 className="text-white text-[18px] font-semibold">Formation</h4>
              <p>BTS SIO option SLAM - F2i Vincennes (2023-En cours)</p>
              <p>Technicien Spécialisé en Développement - OFPPT Maroc (2021-2022)</p>
              <p>Baccalauréat Sciences de la Vie et de la Terre - Riad School Maroc (2020-2021)</p>
            </div>

            <div className="mb-5">
              <h4 className="text-white text-[18px] font-semibold">Compétences techniques</h4>
              <p>Langages: HTML/CSS, JavaScript, PHP, Java, Python</p>
              <p>Frameworks: React, Laravel, Bootstrap, SpringBoot, Tailwind</p>
              <p>Bases de données: SQL/MySQL, MariaDB, PhpMyAdmin, Oracle</p>
            </div>

            <div className="mb-5">
              <h4 className="text-white text-[18px] font-semibold">Expérience professionnelle</h4>
              <p>Développeur Web - Famility, Casablanca (Déc 2024-Jan 2025)</p>
              <p>Développeur Web - Famility, Casablanca (Mai 2024-Juil 2024)</p>
              <p>Assistant Commercial - Expert PC, Oujda (Jan 2019-Août 2020)</p>
            </div>

            <div>
              <h4 className="text-white text-[18px] font-semibold">Langues</h4>
              <p>Français: Courant</p>
              <p>Anglais: Courant</p>
              <p>Arabe: Langue maternelle</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(CV, "cv")
