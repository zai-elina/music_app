import { useState } from 'react'
import Menu from '../Menu/Menu'
import * as S from "./NavBurger.styles"

export default function NavBurger() {
  const [visible, setVisible] = useState(false)

  const toogleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <S.NavBurger onClick={toogleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && <Menu />}
    </div>
  )
}
