import SkeletonPlaylists from './SkeletonPlaylists'
import * as S from './Sidebar.style'
import { NavLink } from 'react-router-dom'
import { PersonData } from '../../account/PersonData/PersonData'

function PlaylistsItem(props) {
  return (
    <S.PlaylistsItem>
      <NavLink to={`${props.path}/${props.id}`}>
        <S.PlaylistsItemLink>
          <S.PlaylistsItemImage src={props.imageUrl} alt="day's playlist" />
        </S.PlaylistsItemLink>
      </NavLink>
    </S.PlaylistsItem>
  )
}

function Playlists({ loading }) {
  const playlistItems = [
    { id: 1, path: '/catalog/selection', imgUrl: '/img/playlist01.png' },
    { id: 2, path: '/catalog/selection', imgUrl: '/img/playlist02.png' },
    { id: 3, path: '/catalog/selection', imgUrl: '/img/playlist03.png' },
  ]
  return (
    <S.SidebarList>
      {loading && <SkeletonPlaylists />}
      {!loading &&
        playlistItems.map((playlist) => {
          const { id, path, imgUrl } = playlist

          return (
            <PlaylistsItem key={id} id={id} path={path} imageUrl={imgUrl} />
          )
        })}
    </S.SidebarList>
  )
}

export default function Sidebar({ loading }) {
  return (
    <S.Sidebar>
      <PersonData />
      <S.PlaylistsBlock>
        <Playlists loading={loading} />
      </S.PlaylistsBlock>
    </S.Sidebar>
  )
}
