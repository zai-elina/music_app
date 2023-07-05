import { useState } from 'react'
import Menu from '../Menu/Menu'

export default function NavBurger() {
  const [visible, setVisible] = useState(false)

  const toogleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className="nav__burger burger" onClick={toogleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && <Menu />}
    </div>
  )
}
