"use client"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon || "/placeholder.svg?height=64&width=64"}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>À propos.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Je suis Fares Slimani, étudiant en BTS SIO SLAM à l'école F2i de Vincennes. Passionné par le développement
        front-end et back-end, je me forme activement aux technologies du web afin de devenir un développeur polyvalent
        et compétent.
        <br />
        <br />
        Mes compétences couvrent plusieurs langages de programmation comme HTML/CSS, JavaScript, PHP et Python,
        ainsi que des frameworks comme React, Laravel, Bootstrap et Tailwind. Je maîtrise également
        différentes bases de données comme SQL/MySQL, MariaDB et PhpMyAdmin .
        <br />
        <br />
        Je parle couramment français et anglais, et l'arabe est ma langue maternelle. Je suis motivé, curieux et
        toujours en quête de nouvelles connaissances pour rester à jour avec les dernières technologies du développement web.
      </motion.p>



      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
