import NavBar from '../../layout/navigation/NavBar/NavBar'
import CenterBlock from '../CenterBlock/CenterBlock'
import Sidebar from '../Sidebar/Sidebar'

export default function Main({loading}) {
  return (
    <main className="main">
      <NavBar />
      <CenterBlock loading={loading}/>
      <Sidebar loading={loading} />
    </main>
  )
}
