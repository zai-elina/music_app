import React from 'react'
import Logo from '../Logo/Logo'
import * as S from './NavBarMobile.style'
import NavBurger from '../NavBurger/NavBurger'

const NavBarMobile = () => {
  return (
    <S.NavBarMobile>
      <Logo />
      <NavBurger isTablet={true}/>
    </S.NavBarMobile>
  )
}

export default NavBarMobile
