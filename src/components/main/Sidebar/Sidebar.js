import SkeletonPlaylists from './SkeletonPlaylists'

function Person({name}) {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{name}</p>
      <div className="sidebar__avatar"></div>
    </div>
  )
}

function PlaylistsItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.link}>
        <img
          className="sidebar__img"
          src={props.imageUrl}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}

function Playlists({loading}) {
  const playlistItems = [
    { link: '#', imgUrl: 'img/playlist01.png' },
    { link: '#', imgUrl: 'img/playlist02.png' },
    { link: '#', imgUrl: 'img/playlist03.png' },
  ]
  return (
    <div className="sidebar__list">
      {loading && <SkeletonPlaylists />}
      {!loading &&
        playlistItems.map((playlist) => (
          <PlaylistsItem
            key={playlist.link}
            link={playlist.link}
            imageUrl={playlist.imgUrl}
          />
        ))}
    </div>
  )
}

export default function Sidebar({loading}) {
  const user = { name: 'Sergey Ivanov' }
  return (
    <div className="main__sidebar sidebar">
      <Person name={user?.name} />
      <div className="sidebar__block">
        <Playlists loading = {loading}/>
      </div>
    </div>
  )
}
