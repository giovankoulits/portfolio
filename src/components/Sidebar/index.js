import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoG from '../../assets/images/portfolio-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHome,
  faEnvelope,
  faImage,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoG} alt="" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
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
      </nav>
      <ul>
        <li>
          <a
            className="anchor-icon"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/giovan-koulits-58a0501a6/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            className="anchor-icon"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/giovankoulits"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className="anchor-icon"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/jovankulic1985/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
