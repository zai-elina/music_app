import { useDispatch, useSelector } from 'react-redux'
import { trackSelector } from '../../../../store/selectors/tracksSelector'
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from '../../../../services/trackListService'
import { useEffect, useState } from 'react'
import { formatTime } from '../../../../utils/help'
import * as S from './MusicsItem.style'
import { setTrack, setPlaylist } from '../../../../store/slices/tracksSlice'

export function MusicsItem(props) {
  const {
    logo,
    name,
    subtitle,
    author,
    album,
    duration_in_seconds: time,
    track_file: trackFile,
    id,
    stared_user: staredUser,
  } = props.musicData

  const authUser = JSON.parse(sessionStorage.getItem('user'))

  const dispatch = useDispatch()
  const playingTrack = useSelector(trackSelector)
  const [likeTrack] = useLikeTrackMutation()
  const [dislikeTrack] = useDislikeTrackMutation()
  const isUserLike = Boolean(staredUser.find(({ id }) => id === authUser.id))
  const [isLiked, setIsLiked] = useState(isUserLike)

  useEffect(() => {
    setIsLiked(isUserLike)
  }, [isUserLike])

  const playTrack = () => {
    props.setIsOpenPlayer(true)
    dispatch(
      setTrack({
        logo,
        name,
        subtitle,
        author,
        album,
        time,
        trackFile,
        id,
        staredUser,
      })
    )
    dispatch(setPlaylist(props.musicItems))
  }

  const toogleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id)

  const handleLike = async (id) => {
    setIsLiked(true)
    await likeTrack({ id }).unwrap()
    dispatch(
      setTrack({
        logo,
        name,
        subtitle,
        author,
        album,
        time,
        trackFile,
        id,
        staredUser: [...staredUser, authUser],
      })
    )
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    await dislikeTrack({ id }).unwrap()
    dispatch(
      setTrack({
        logo,
        name,
        subtitle,
        author,
        album,
        time,
        trackFile,
        id,
        staredUser: staredUser.filter(({ id }) => id !== authUser.id),
      })
    )
  }

  return (
    <S.Music>
      <S.Track>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              {playingTrack?.id === id ? (
                <S.Circle
                  $isAnimate={props.isAnimatePlayTrack}
                  cx="10px"
                  cy="10px"
                  r="7.5"
                />
              ) : (
                <use
                  xlinkHref={logo ? logo : '/img/icon/sprite.svg#icon-note'}
                ></use>
              )}
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.Title>
            <S.TrackTitleLink
              onClick={() => {
                playTrack(
                  props.author,
                  props.title,
                  props.svgUrl,
                  props.trackFile,
                  props.time,
                  props.id,
                  props.staredUser
                )
              }}
            >
              {name}{' '}
              {subtitle ? <S.TrackSubtitle>{subtitle}</S.TrackSubtitle> : ''}
            </S.TrackTitleLink>
          </S.Title>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink
            onClick={() => {
              playTrack()
            }}
          >
            {author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div>
          <S.TrackLike alt="like" onClick={() => toogleLikeDislike(id)}>
            {isLiked ? (
              <use
                xlinkHref="/img/icon/sprite.svg#icon-like"
                fill="#ad61ff"
              ></use>
            ) : (
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            )}
          </S.TrackLike>
          <S.TrackTimeText>
            {formatTime(Math.floor((time % 3600) / 60))}:
            {formatTime(Math.floor((time % 3600) % 60))}
          </S.TrackTimeText>
        </div>
      </S.Track>
    </S.Music>
  )
}
