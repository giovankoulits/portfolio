import React from 'react'
import './Button.css'

const Button = ({ close }) => {
  return (
    <ul onClick={() => close()} className="navmenu">
      <li>
        <a href="#">Close</a>
      </li>
    </ul>
  )
}

export default Button
