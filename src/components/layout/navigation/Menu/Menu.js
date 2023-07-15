import * as S from "./Menu.styles"

function MenuItem({name}) {
  return (
    <S.MenuItem>
      <S.MenuLink href="http://">
        {name}
      </S.MenuLink>
    </S.MenuItem>
  )
}
export default function Menu() {
  const links = ['Главное', 'Мой плейлист', 'Войти']
  return (
    <S.NavMenu>
      <S.MenuList>
        {links.map((link) => (
          <MenuItem key={link} name={link} />
        ))}
      </S.MenuList>
    </S.NavMenu>
  )
}
