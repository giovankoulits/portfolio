import React from 'react'
import '../index.scss'
import { useState } from 'react'
import MyModal from './Modal/MyModal'

const Image = ({ src }) => {
  const [modalOpen, setModalOpen] = useState(false)

  function closeModal() {
    setModalOpen(false)
  }

  const imagePath = require(`../../../assets/sites/${src}.png`)

  return (
    <>
      <div onClick={() => setModalOpen(true)} className="box work-box">
        <img src={imagePath} />
      </div>
      <MyModal src={src} openModal={modalOpen} closeModal={closeModal} />
    </>
  )
}

export default Image
