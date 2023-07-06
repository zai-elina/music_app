import NavBar from '../../layout/navigation/NavBar/NavBar'
import CenterBlock from '../CenterBlock/CenterBlock'
import Sidebar from '../Sidebar/Sidebar'

export default function Main(props) {
  return (
    <main className="main">
      <NavBar />
      <CenterBlock loading={props.loading}/>
      <Sidebar loading={props.loading} />
    </main>
  )
}
