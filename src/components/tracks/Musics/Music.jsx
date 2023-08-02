import SkeletonMusic from './SkeletonMusics'
import * as S from './Musics.style'

function formatTime(number) {
  let str = String(number)
  if (str.length < 2) return `0${str}`
  return str
}

function Music(props) {
  const playTrack = (musicAuthor, musicTitle, svgUrl, trackFile, time) => {
    props.setIsOpenPlayer(true)
    props.setCurrentTrack({
      author: musicAuthor,
      title: musicTitle,
      svgUrl: svgUrl,
      trackFile: trackFile,
      progress: 0,
      length: time,
    })
  }

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
            <S.TrackTitleLink
              onClick={() => {
                playTrack(
                  props.author,
                  props.title,
                  props.svgUrl,
                  props.trackFile,
                  props.time
                )
              }}
            >
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
          <S.TrackAuthorLink
            onClick={() => {
              playTrack(props.author, props.title)
            }}
          >
            {props.author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {formatTime(Math.floor((props.time % 3600) / 60))}:
            {formatTime(Math.floor((props.time % 3600) % 60))}
          </S.TrackTimeText>
        </div>
      </S.Track>
    </S.Music>
  )
}

export default function MusicList({
  loading,
  musicItems,
  setIsOpenPlayer,
  setCurrentTrack,
}) {
  return (
    <S.MusicList>
      {loading && <SkeletonMusic />}
      {!loading &&
        musicItems.map((item) => (
          <Music
            key={item.id}
            svgUrl={item.logo ? item.logo : 'img/icon/sprite.svg#icon-note'}
            title={item.name}
            subtitle={item.subtitle}
            author={item.author}
            album={item.album}
            time={item.duration_in_seconds}
            trackFile={item.track_file}
            setIsOpenPlayer={setIsOpenPlayer}
            setCurrentTrack={setCurrentTrack}
          />
        ))}
    </S.MusicList>
  )
}
