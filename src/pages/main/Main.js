import NavBar from '../../components/layout/navigation/NavBar/NavBar'
import CenterBlock from '../../components/tracks/CenterBlock/CenterBlock'
import Sidebar from '../../components/tracks/Sidebar/Sidebar'
import * as S from './Main.styles'
import Bar from '../../components/player/Bar/Bar'
import Footer from '../../components/layout/footer/Footer'

export default function Main({ loading }) {
  return (
    <S.Main>
      <NavBar />
      <CenterBlock loading={loading} />
      <Sidebar loading={loading} />
      <Bar />
      <Footer />
    </S.Main>
  )
}
