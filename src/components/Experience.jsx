/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { experiences } from '../constants'

import { textVariant } from '../utils/motion'
import { ExperienceCard } from './helping/ExperienceCard'

function Experience() {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={styles.sectionSubText}>what i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
