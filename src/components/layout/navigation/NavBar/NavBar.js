import Logo from '../Logo/Logo'
import NavBurger from '../NavBurger/NavBurger'
import * as S from "./NavBar.styles"

export default function NavBar() {
  return (
    <S.MainNav>
      <Logo />
      <NavBurger />
    </S.MainNav>
  )
}
