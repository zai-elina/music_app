import SkeletonMusic from './SkeletonMusics'
import * as S from './Musics.style'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaylist, setTrack } from '../../../store/slices/tracks'
import { trackSelector } from '../../../store/selectors/tracks'
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from '../../../services/favoriteTracks'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/User'

function formatTime(number) {
  let str = String(number)
  if (str.length < 2) return `0${str}`
  return str
}

function Music(props) {
  const dispatch = useDispatch()
  const playingTrack = useSelector(trackSelector)
  const [likeTrack, { likeLoading }] = useLikeTrackMutation()
  const [dislikeTrack, { dislikeLoading }] = useDislikeTrackMutation()
  const isUserLike =
    props.isMyTrack ||
    Boolean(props.staredUser?.find((item) => item.id === props.user.id))
  const [isLiked, setIsLiked] = useState(isUserLike)

  const playTrack = (musicAuthor, musicTitle, svgUrl, trackFile, time, id) => {
    props.setIsOpenPlayer(true)
    props.setCurrentTrack({
      id: id,
      author: musicAuthor,
      title: musicTitle,
      svgUrl: svgUrl,
      trackFile: trackFile,
      progress: 0,
      length: time,
    })
    dispatch(setTrack(id))
    dispatch(setPlaylist({ ...props.musicItems }))
  }

  const toogleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id)

  const handleLike = async (id) => {
    setIsLiked(true)
    await likeTrack({ id }).unwrap()
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    await dislikeTrack({ id }).unwrap()
  }

  return (
    <S.Music>
      <S.Track>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              {playingTrack?.id === props.id ? (
                <S.Circle
                  $isAnimate={props.isAnimatePlayTrack}
                  cx="10px"
                  cy="10px"
                  r="7.5"
                />
              ) : (
                <use xlinkHref={props.svgUrl}></use>
              )}
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
                  props.time,
                  props.id
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
              playTrack(
                props.author,
                props.title,
                props.svgUrl,
                props.trackFile,
                props.time,
                props.id
              )
            }}
          >
            {props.author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div>
          <S.TrackLike alt="like" onClick={() => toogleLikeDislike(props.id)}>
            {isLiked ? (
              <use
                xlinkHref="img/icon/sprite.svg#icon-like"
                fill="#ad61ff"
              ></use>
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackLike>
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
  isAnimatePlayTrack,
  isMyTrack = false,
}) {
  const { authUser } = useContext(UserContext)
  return (
    <S.MusicList>
      {loading && <SkeletonMusic />}
      {!loading && musicItems?.length === 0 ? (
        <h2>В этом плейлисте нет треков</h2>
      ) : (
        musicItems?.map((item) => (
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
            id={item.id}
            staredUser={item.stared_user ? item.stared_user : []}
            isAnimatePlayTrack={isAnimatePlayTrack}
            musicItems={musicItems}
            user={authUser}
            isMyTrack={isMyTrack}
          />
        ))
      )}
    </S.MusicList>
  )
}
