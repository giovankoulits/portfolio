import Sidebar from '../Sidebar'
import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import Script from './Script/Script'
import scriptsArray from './scriptsArray'
import Topbar from '../Topbar'

const Progs = () => {
  const [visible, setVisible] = useState('none')

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
      <div className="progs-page fade-in" style={{ display: visible }}>
        {scriptsArray.map((script, i) => (
          <Script bg key={i} src={script.src} link={script.link} />
        ))}
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Progs
