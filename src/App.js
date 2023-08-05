import { useState, useEffect } from 'react'
import * as S from './App.style'
import GlobalStyle from './App.style'
import { AppRoutes } from './routes'
import { getTracks } from './api/Api'
import { useDispatch } from 'react-redux'
import { setPlaylist } from './store/actions/creators/tracks'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [musicItems, setmusicItems] = useState([])
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(null)

  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracks) => {
        setmusicItems(tracks)
        dispatch(setPlaylist({...tracks}))
      })
      .catch((error) => alert(error))
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
