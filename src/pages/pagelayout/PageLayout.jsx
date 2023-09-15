import { NavBarDesktop } from '../../components/layout/navigation/NavBar/NavBar'
import Sidebar from '../../components/tracks/Sidebar/Sidebar'
import * as S from './PageLayout.styles'
import Bar from '../../components/player/Bar/Bar'
import Footer from '../../components/layout/footer/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { NavBarLaptop } from '../../components/layout/navigation/NavBarLaptop/NavBarLaptop'

export default function PageLayout({
  loading,
  isOpenPlayer,
  currentTrack,
  setCurrentTrack,
  setIsAnimatePlayTrack,
}) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1896px)',
  })
  return (
    <S.Main>
      {isDesktop ? (
        <>
          <NavBarDesktop />
          <Outlet />
          <Sidebar loading={loading} />
        </>
      ) : (
        <>
          <NavBarLaptop />
          <Outlet />
        </>
      )}
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
