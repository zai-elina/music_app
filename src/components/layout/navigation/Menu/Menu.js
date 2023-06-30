function MenuItem(props) {
  return (
    <li className="menu__item">
      <a href="http://" className="menu__link">
        {props.name}
      </a>
    </li>
  )
}
export default function Menu() {
  const links = ['Главное', 'Мой плейлист', 'Войти']
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        {links.map((link) => (
          <MenuItem key={link} name={link} />
        ))}
      </ul>
    </div>
  )
}
