import SkeletonMusic from './SkeletonMusics'

function Music(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="{props.svgUrl}"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.title}{' '}
              {props.subtitle ? (
                <span className="track__title-span">{props.subtitle}</span>
              ) : (
                ''
              )}
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default function MusicItems(props) {
  const musicItems = [
    {
      svgUrl: 'img/icon/sprite.svg#icon-note',
      title: 'Guilt',
      author: 'Nero',
      album: 'Welcome Reality',
      time: '4:44',
    },
    {
      svgUrl: 'img/icon/sprite.svg#icon-note',
      title: 'Elektro',
      author: 'Dynoro, Outwork, Mr. Gee',
      album: 'Elektro',
      time: '2:22',
    },
    {
      svgUrl: 'img/icon/sprite.svg#icon-note',
      title: 'I’m Fire',
      author: 'Ali Bakgor',
      album: 'I’m Fire',
      time: '2:22',
    },
    {
      svgUrl: 'img/icon/sprite.svg#icon-note',
      title: 'Non Stop',
      subtitle: '(Remix)',
      author: 'Стоункат, Psychopath',
      album: 'Non Stop',
      time: '4:12',
    },
    {
      svgUrl: 'img/icon/sprite.svg#icon-note',
      title: 'Run Run',
      subtitle: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      album: 'Run Run',
      time: '2:54',
    },
    {
      svgUrl: 'img/icon/sprite.svg#icon-note',
      title: 'Eyes on Fire',
      subtitle: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      album: 'Eyes on Fire',
      time: '5:20',
    },
  ]

  return (
    <div className="content__playlist playlist">
      {props.loading && <SkeletonMusic />}
      {!props.loading &&
        musicItems.map((item) => (
          <Music
            key={item.title}
            svgUrl={item.svgUrl}
            title={item.title}
            subtitle={item.subtitle}
            author={item.author}
            album={item.album}
            time={item.time}
          />
        ))}
    </div>
  )
}
