import { Link } from 'react-router-dom'
import * as S from './AuthPage.styles'
import { useEffect, useState } from 'react'
import { getToken, loginUser, registerUser } from '../../api/Api'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/User'
import { useDispatch } from 'react-redux'
import { setAuthentication } from '../../store/slices/authenticationSlice'

export default function AuthPage({ isLoginMode = false }) {
  const { setAuthUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [registerLoading, setRegisterLoading] = useState(false)
  const dispatch = useDispatch()

  const handleLogin = async ({ email, password }) => {
    if (!email) {
      setError('Не заполнена почта')
      return
    } else if (!password) {
      setError('Не введён пароль')
      return
    }

    setLoginLoading(true)
    try {
      await loginUser({ email, password }).then((res) => {
        sessionStorage.setItem('user', JSON.stringify(res))
        setAuthUser(res)
        navigate('/')
      })
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoginLoading(false)
    }

    try {
      await getToken({ email, password }).then((token) => {
        dispatch(
          setAuthentication({
            access: token.access,
            refresh: token.refresh,
            user: JSON.parse(sessionStorage.getItem('user')),
          })
        )
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = async () => {
    if (!email) {
      setError('Не заполнена почта')
      return
    } else if (!password) {
      setError('Не введён пароль')
      return
    } else if (!repeatPassword) {
      setError('Не введён повторный пароль')
      return
    } else if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }

    setRegisterLoading(true)
    try {
      await registerUser({ email, password })
      navigate('/login')
    } catch (error) {
      setError(error.message)
    } finally {
      setRegisterLoading(false)
    }
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                onClick={() => handleLogin({ email, password })}
                disabled={loginLoading}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                onClick={handleRegister}
                disabled={registerLoading}
              >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
