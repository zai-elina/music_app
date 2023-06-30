import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import NavBurger from '../NavBurger/NavBurger'

export default function NavBar() {
  return (
    <nav className="main__nav nav">
      <Logo />
      <NavBurger />
      <Menu />
    </nav>
  )
}
