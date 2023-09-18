import { NavBarDesktop } from '../../components/layout/navigation/NavBar/NavBar'
import Sidebar from '../../components/tracks/Sidebar/Sidebar'
import * as S from './PageLayout.styles'
import Bar from '../../components/player/Bar/Bar'
import Footer from '../../components/layout/footer/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { NavBarLaptop } from '../../components/layout/navigation/NavBarLaptop/NavBarLaptop'
import NavBarMobile from '../../components/layout/navigation/NavBarMobile/NavBarMobile'

export default function PageLayout({
  loading,
  isOpenPlayer,
  setIsAnimatePlayTrack,
}) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1896px)',
  })
  const isTablet = useMediaQuery({
    query: '(max-width: 800px)',
  })
  return (
    <S.Main>
      {isDesktop ? (
        <>
          <NavBarDesktop />
          <Outlet />
          <Sidebar loading={loading} />
        </>
      ) : isTablet ? (
        <>
          <NavBarMobile />
          <Outlet />
        </>
      ) : (
        <>
          <NavBarLaptop />
          <Outlet />
        </>
      )}
      {isOpenPlayer && <Bar setIsAnimatePlayTrack={setIsAnimatePlayTrack} />}
      <Footer />
    </S.Main>
  )
}
