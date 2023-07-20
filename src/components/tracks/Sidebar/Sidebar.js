import SkeletonPlaylists from './SkeletonPlaylists'
import * as S from './Sidebar.style'
import { Link } from 'react-router-dom'

function Person({ name }) {
  return (
    <S.Personal>
      <S.PersonalName>{name}</S.PersonalName>
      <S.PersonalAvatar></S.PersonalAvatar>
    </S.Personal>
  )
}

function PlaylistsItem(props) {
  return (
    <S.PlaylistsItem>
      <Link to={`${props.path}/${props.id}`}>
        <S.PlaylistsItemLink>
          <S.PlaylistsItemImage src={props.imageUrl} alt="day's playlist" />
        </S.PlaylistsItemLink>
      </Link>
    </S.PlaylistsItem>
  )
}

function Playlists({ loading }) {
  const playlistItems = [
    { id: 1, path: '/category', imgUrl: 'img/playlist01.png' },
    { id: 2, path: '/category', imgUrl: 'img/playlist02.png' },
    { id: 3, path: '/category', imgUrl: 'img/playlist03.png' },
  ]
  return (
    <S.SidebarList>
      {loading && <SkeletonPlaylists />}
      {!loading &&
        playlistItems.map((playlist) => (
          <PlaylistsItem
            key={playlist.id}
            id={playlist.id}
            path={playlist.path}
            imageUrl={playlist.imgUrl}
          />
        ))}
    </S.SidebarList>
  )
}

export default function Sidebar({ loading }) {
  const user = { name: 'Sergey Ivanov' }
  return (
    <S.Sidebar>
      <Person name={user?.name} />
      <S.PlaylistsBlock>
        <Playlists loading={loading} />
      </S.PlaylistsBlock>
    </S.Sidebar>
  )
}
