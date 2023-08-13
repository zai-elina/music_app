import NavBar from '../../components/layout/navigation/NavBar/NavBar'
import Sidebar from '../../components/tracks/Sidebar/Sidebar'
import * as S from './PageLayout.styles'
import Bar from '../../components/player/Bar/Bar'
import Footer from '../../components/layout/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function PageLayout({
  loading,
  isOpenPlayer,
  currentTrack,
  setCurrentTrack,
  setIsAnimatePlayTrack
}) {
  return (
    <S.Main>
      <NavBar />
      <Outlet />
      <Sidebar loading={loading} />
      {isOpenPlayer && (
        <Bar
          currentTrack={currentTrack}
          setIsAnimatePlayTrack={setIsAnimatePlayTrack}
          setCurrentTrack={setCurrentTrack}
        />
      )}
      <Footer />
    </S.Main>
  )
}
