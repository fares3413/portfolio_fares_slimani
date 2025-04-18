import React from "react";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { techWatchItems } from "../constants";

const TechWatchCard = ({ index, title, description, tags, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[400px] flex flex-col'
      >
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px] flex-grow'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        
        {link && (
          <div className='mt-4'>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-gradient font-medium cursor-pointer'
            >
              En savoir plus →
            </a>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const TechWatch = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Rester à jour</p>
        <h2 className={`${styles.sectionHeadText}`}>Veille Technologique.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          En tant qu'étudiant en BTS SIO SLAM, je maintiens une veille technologique active
          pour rester informé des dernières tendances et innovations dans le domaine du développement.
          Voici les principaux sujets que je surveille actuellement.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {techWatchItems.map((item, index) => (
          <TechWatchCard key={`techwatch-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechWatch, "techwatch");