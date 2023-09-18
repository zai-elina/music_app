import { useState } from 'react'
import Menu from '../Menu/Menu'
import * as S from './NavBurger.styles'

export default function NavBurger({ isTablet = false }) {
  const [visible, setVisible] = useState(false)

  const toogleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div
      style={
        isTablet
          ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }
          : {}
      }
    >
      <S.NavBurger onClick={toogleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && <Menu isTablet={isTablet} />}
    </div>
  )
}
