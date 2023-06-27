import { useEffect, useState } from 'react'

import './index.scss'

const Logo = () => {
  const [visible, setVisible] = useState('none')

  useEffect(() => {
    return setTimeout(() => {
      setVisible('flex')
    }, 4000)
  }, [])

  return (
    <div style={{ display: visible }} className="logo-container">
      <br />
      <div className="pulsating-circle"></div>
    </div>
  )
}

export default Logo
