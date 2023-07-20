import { Link, Navigate } from 'react-router-dom'
import * as S from './Login.styles'

const Login = () => {
  return (
    <S.Login>
      <h1>Страница входа</h1>
      <Link to="/">
        <button
          style={{ width: '150px', height: '40px' }}
          onClick={() => {
            document.cookie = 'token=value;path=/'
          }}
        >
          Войти
        </button>
      </Link>
      <Link to="/register">Зарегистрироваться</Link>
    </S.Login>
  )
}

export default Login
