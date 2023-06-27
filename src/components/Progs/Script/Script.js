import '../index.scss'
import { useState } from 'react'

const Script = ({ src, link }) => {
  const imagePath = require(`../../../assets/scripts/${src}.png`)

  return (
    <div className="box progs-box">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imagePath} />
        <h1 class="box-h1">Hi</h1>
        <button>Hello</button>
      </a>
    </div>
  )
}

export default Script
