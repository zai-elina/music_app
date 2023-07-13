import NavBar from '../../layout/navigation/NavBar/NavBar'
import CenterBlock from '../CenterBlock/CenterBlock'
import Sidebar from '../Sidebar/Sidebar'
import * as S from './Main.styles'

export default function Main({loading}) {
  return (
    <S.Main>
      <NavBar />
      <CenterBlock loading={loading}/>
      <Sidebar loading={loading} />
    </S.Main>
  )
}
