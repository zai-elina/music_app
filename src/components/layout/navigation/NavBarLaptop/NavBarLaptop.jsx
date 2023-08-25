import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import * as S from './NavBarLaptop.styles'

export const NavBarLaptop = () => {
  return (
    <S.NavBarLaptop>
      <Logo />
      <Menu isLaptop={true}/>
    </S.NavBarLaptop>
  )
}
