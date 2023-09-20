import { NavLink } from 'react-router-dom'
import * as S from './Menu.styles'

const links = [
  { id: 1, name: 'Главное', path: '/' },
  { id: 2, name: 'Мой треки', path: '/favorite' },
  { id: 3, name: 'Выйти', path: '/logout' },
]
const playlistItems = [
  {
    id: 1,
    path: '/catalog/selection',
    name: 'Классическая музыка',
  },
  {
    id: 2,
    path: '/catalog/selection',
    name: 'Электронная музыка',
  },
  {
    id: 3,
    path: '/catalog/selection',
    name: 'Рок',
  },
]

function MenuItem({ name, path }) {
  return (
    <S.MenuItem>
      <NavLink to={`${path}`}>
        <S.MenuLink>{name}</S.MenuLink>
      </NavLink>
    </S.MenuItem>
  )
}

export default function Menu({ isLaptop = false, isTablet = false }) {
  return (
    <S.NavMenu>
      <S.MenuList>
        {links.map((link) => {
          const { id, name, path } = link

          return id !== links[links.length - 1].id ? (
            <MenuItem key={id} name={name} path={path} />
          ) : (
            ''
          )
        })}
        {isLaptop || isTablet
          ? playlistItems.map((playlist) => {
              const { id, name, path } = playlist

              return <MenuItem key={id} name={name} path={`${path}/${id}`} />
            })
          : ''}
        <MenuItem
          key={links[links.length - 1].id}
          name={links[links.length - 1].name}
          path={links[links.length - 1].path}
        />
      </S.MenuList>
    </S.NavMenu>
  )
}
