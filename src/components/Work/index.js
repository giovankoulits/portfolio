import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import Image from './Image/Image'
const Work = () => {
  const [visible, setVisible] = useState('none')

  const imagesArray = [
    'boussias',
    'dei_bite',
    'egnatia_site',
    'kommerz_design',
    'ppdk_law',
    'restaurants',
    'super_werer',
    'miljkovic_foto',
    'ruckdeschel',
    'buendnis_21',
    'phonie_berlin',
    'sonnenkita',
  ]
  useEffect(
    () =>
      setTimeout(() => {
        setVisible('flex')
      }, 2000),
    []
  )

  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <div className="work-page fade-in" style={{ display: visible }}>
        {imagesArray.map((image, i) => (
          <Image bg key={i} src={image} />
        ))}
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Work
