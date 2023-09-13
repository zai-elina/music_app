import * as S from './App.style'
import GlobalStyle from './App.style'
import { AppRoutes } from './routes'
import { useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import { setAuth } from './store/slices/auth'
import { useEffect } from 'react'

function App() {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const dispatch = useDispatch()

  const hadleLogin = () => {
    try {
      dispatch(
        setAuth({
          access: sessionStorage.getItem('access'),
          refresh: sessionStorage.getItem('refresh'),
          user: sessionStorage.getItem('user'),
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    hadleLogin()
  }, [])


  return (
    <>
      <GlobalStyle />
      <S.App>
        <AppRoutes
          isOpenPlayer={isOpenPlayer}
          setIsOpenPlayer={setIsOpenPlayer}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      </S.App>
    </>
  )
}

export default App
