/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { github } from '../../assets'
import { fadeIn } from '../../utils/motion'

export function ProjectCard({ project }) {
  const { index, name, description, tags, image, source_code_link } = project
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full  "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img src={github} alt="github" className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(({ name, color }) => (
            <p key={name} className={`${color} text-[14px]`}>
              #{name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
