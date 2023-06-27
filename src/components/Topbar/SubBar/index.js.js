import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

//Icons
import {
  faUser,
  faHome,
  faEnvelope,
  faImage,
  faCode,
} from '@fortawesome/free-solid-svg-icons'

const Subbar = ({ open }) => {
  const dis = useRef(null)

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        dis.current.style.display = 'none'
      }, 400)
    } else {
      dis.current.style.display = 'flex'
    }
  }, [open])

  return (
    <div className="hide" ref={dis}>
      <div className={`sub-bar ${open ? 'fade-in' : 'fade-out'}`}>
        <nav>
          <div className="sub-nav-pages">
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
        </nav>
      </div>
    </div>
  )
}

export default Subbar
