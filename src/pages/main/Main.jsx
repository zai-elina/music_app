import NavBar from '../../components/layout/navigation/NavBar/NavBar'
import CenterBlock from '../../components/tracks/CenterBlock/CenterBlock'
import Sidebar from '../../components/tracks/Sidebar/Sidebar'
import * as S from './Main.styles'
import Bar from '../../components/player/Bar/Bar'
import Footer from '../../components/layout/footer/Footer'
import { useState } from 'react'

export default function Main({
  loading,
  musicItems,
  isOpenPlayer,
  setIsOpenPlayer,
  currentTrack,
  setCurrentTrack,
}) {
  const [isAnimatePlayTrack, setIsAnimatePlayTrack] = useState(true)
  return (
    <S.Main>
      <NavBar />
      <CenterBlock
        loading={loading}
        musicItems={musicItems}
        setIsOpenPlayer={setIsOpenPlayer}
        setCurrentTrack={setCurrentTrack}
        isAnimatePlayTrack={isAnimatePlayTrack}
      />
      <Sidebar loading={loading} />
      {isOpenPlayer && (
        <Bar currentTrack={currentTrack} setIsAnimatePlayTrack={setIsAnimatePlayTrack} />
      )}
      <Footer />
    </S.Main>
  )
}
