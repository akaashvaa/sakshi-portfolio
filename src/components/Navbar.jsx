import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <motion.div
            initial={{ scale: 0, y: -10 }}
            animate={{ rotate: 180, scale: 1.1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-6 object-contain" />
          </motion.div>

          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Sakshi &nbsp;
            <span className="sm:block hidden">| Cloud Enthusiast</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[17px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => {
              setToggle(!toggle)
            }}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-1 flex-col gap-4 items-start justify-end ">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }font-poppins font-medium text-[17px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
