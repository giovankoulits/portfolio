//Router
import { Link, NavLink } from 'react-router-dom'
//Components
import { Cross as Hamburger } from 'hamburger-react'
import LogoG from '../../assets/images/portfolio-logo.png'
import Subbar from './SubBar/index.js'
import { useState } from 'react'
//styles
import './index.scss'
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHome,
  faEnvelope,
  faImage,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
//Social Icons
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Topbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="top-bar">
        <nav>
          <div className="nav-logo">
            <Link to="/">
              <img src={LogoG} alt="" />
            </Link>
          </div>

          <div className="nav-pages">
            <NavLink
              className="home-link"
              exact="true"
              activeclassname="active"
              to="/"
            >
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="work-link"
              to="../work"
            >
              <FontAwesomeIcon icon={faImage} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="progs-link "
              to="../progs"
            >
              <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link "
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </div>
          <div className="nav-social">
            <a
              className="anchor-icon"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/giovan-koulits-58a0501a6/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="anchor-icon"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/giovankoulits"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="anchor-icon"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jovankulic1985/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div onClick={() => setOpen((prev) => !prev)} className="hamburger">
            <Hamburger color="#00d86c" size={25} />
          </div>
        </nav>
      </div>
      <Subbar open={isOpen} />
    </>
  )
}

export default Topbar
