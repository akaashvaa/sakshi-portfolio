/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const SeviceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1.1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary 
        rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-center "
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white mt-4 text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        className="m-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex   justify-center items-center  "
        variants={fadeIn('', '', 0.1, 1)}
      >
        I&#39;m a skilled developer.Vow is the winter of our discontent Made
        glorious summer by this sun of York; And all the clouds that lour&#39;d
        upon our house In the deep bosom of the ocean buried. Now are our brows
        bound with victorious wreaths; Our bruised arms hung up for monuments;
        Our stern alarums changed to merry meetings, Our dreadful marches to
        delightful measures. Grim-visaged war hath smooth&#39;d his wrinkled
        front;
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <SeviceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
