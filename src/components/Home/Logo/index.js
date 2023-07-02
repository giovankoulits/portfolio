import { useEffect, useState } from 'react'
import LogoG from './LogoG'
import LogoK from './LogoK'
import LogoSub from './LogoSub'
import './index.scss'

const Logo = () => {
  const [visible, setVisible] = useState(false)

  /*   useEffect(() => {
    setTimeout(() => setVisible(true), 3000)
  }, [])
 */
  return (
    <div className="logo-container">
      <div className="inner-container">
        <LogoG />
        <LogoK />
      </div>
      <LogoSub />
    </div>
  )
}

export default Logo
