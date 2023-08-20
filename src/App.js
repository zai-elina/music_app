import * as S from './App.style'
import GlobalStyle from './App.style'
import { AppRoutes } from './routes'
import { useState } from 'react'
import './index.css'

function App() {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

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
