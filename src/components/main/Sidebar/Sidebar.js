import SkeletonPlaylists from './SkeletonPlaylists'
import * as S from './Sidebar.style'

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
      <S.PlaylistsItemLink href={props.link}>
        <S.PlaylistsItemImage src={props.imageUrl} alt="day's playlist" />
      </S.PlaylistsItemLink>
    </S.PlaylistsItem>
  )
}

function Playlists({ loading }) {
  const playlistItems = [
    { link: '#', imgUrl: 'img/playlist01.png' },
    { link: '#', imgUrl: 'img/playlist02.png' },
    { link: '#', imgUrl: 'img/playlist03.png' },
  ]
  return (
    <S.SidebarList>
      {loading && <SkeletonPlaylists />}
      {!loading &&
        playlistItems.map((playlist) => (
          <PlaylistsItem
            key={playlist.link}
            link={playlist.link}
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
