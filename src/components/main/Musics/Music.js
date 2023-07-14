import SkeletonMusic from './SkeletonMusics'
import * as S from './Musics.style'

function Music(props) {
  return (
    <S.Music>
      <S.Track>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref={props.svgUrl}></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div>
            <S.TrackTitleLink href="http://">
              {props.title}{' '}
              {props.subtitle ? (
                <S.TrackSubtitle>{props.subtitle}</S.TrackSubtitle>
              ) : (
                ''
              )}
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time}</S.TrackTimeText>
        </div>
      </S.Track>
    </S.Music>
  )
}

export default function MusicList({ loading }) {
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
    <S.MusicList>
      {loading && <SkeletonMusic />}
      {!loading &&
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
    </S.MusicList>
  )
}
