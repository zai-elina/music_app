import { useState, useEffect } from 'react'
import * as S from './App.style'
import GlobalStyle from './App.style'
import { AppRoutes } from './routes'
import { getTracks } from './api/Api'

function App() {
  const [loading, setLoading] = useState(false)
  const [musicItems, setmusicItems] = useState([])
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const token = document.cookie.indexOf('token')

  useEffect(() => {
    setLoading(true)
    getTracks().then((tracks) => {
      setmusicItems(tracks)
    })
    .catch(error => alert(error))
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <S.App>
        <AppRoutes 
            loading={loading} 
            token={token} 
            musicItems={musicItems} 
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
