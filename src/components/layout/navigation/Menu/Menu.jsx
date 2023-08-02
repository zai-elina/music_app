import { NavLink } from 'react-router-dom'
import * as S from './Menu.styles'

function MenuItem({ name, path }) {
  return (
    <S.MenuItem>
      <NavLink to={`${path}`}>
        <S.MenuLink>{name}</S.MenuLink>
      </NavLink>
    </S.MenuItem>
  )
}
export default function Menu() {
  const links = [
    { id: 1, name: 'Главное', path: '/' },
    { id: 2, name: 'Мой плейлист', path: '/favorites' },
    { id: 3, name: 'Выйти', path: '/logout' },
  ]
  return (
    <S.NavMenu>
      <S.MenuList>
        {links.map((link) => (
          <MenuItem key={link.id} name={link.name} path={link.path} />
        ))}
      </S.MenuList>
    </S.NavMenu>
  )
}
