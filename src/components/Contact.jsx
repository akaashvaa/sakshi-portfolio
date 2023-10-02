import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useRef, useState } from 'react'
// VYgqcJBqctNAhTE0v
//template_s1v41sg
// service_ggdgcy7
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    emailjs
      .send(
        'service_ggdgcy7',
        'template_s1v41sg',
        {
          from_name: form.name,
          to_name: 'Akash',
          from_email: form.email,
          to_email: 'ahmvaad@gmail.com',
          message: form.message,
        },
        'VYgqcJBqctNAhTE0v'
      )
      .then(
        () => {
          setLoading(false)
          alert(
            "Thank you for reaching out! I'm thrilled to hear from you and I'm eager to respond as quickly as possible."
          )
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('something went wrong!!!')
        }
      )
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-5 overflow-none">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="enter name"
              onChange={handleChange}
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="enter email"
              onChange={handleChange}
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="What do you want say?"
              onChange={handleChange}
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="  bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? 'sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
