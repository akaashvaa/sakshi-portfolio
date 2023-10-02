/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { ProjectCard } from './helping/ProjectCard'

function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn('right', '', 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Text is not allowed in the R3F tree! This could be stray whitespace
            or characters. at mesh at Computers
            (http://localhost:5173/src/components/canvas/Computers.jsx:23:3) at
            Suspense at Suspense at ErrorBoundary
            (http://localhost:5173/node_modules/.vite/deps/chunk-LZ7J3XZE.js?v=aafdf0f3:47054:5)
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, '')
