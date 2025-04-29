"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles"
import { stages } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const StageCard = ({ stage }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={stage.date}
      iconStyle={{ background:  stage.iconBg }}
      icon={
        <div className="flex justify-center items-center   w-full h-full">
          <img
            src={stage.icon || "/placeholder.svg?height=60&width=60"}
            alt={stage.company_name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{stage.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {stage.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {stage.points.map((point, index) => (
          <li key={`stage-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Stages = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Mon expérience professionnelle</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Stages et Expériences.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {stages.map((stage, index) => (
            <StageCard key={`stage-${index}`} stage={stage} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Stages, "stages")
