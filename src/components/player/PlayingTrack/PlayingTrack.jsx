import { useContext, useEffect, useState } from 'react'
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from '../../../services/trackListService'
import * as S from './PlayingTrack.styles'
import { useSelector } from 'react-redux'
import {
  playlistSelector,
  trackSelector,
} from '../../../store/selectors/tracksSelector'

export function PlayingTrack() {
  const currentTrack = useSelector(trackSelector)
  const authUser = JSON.parse(sessionStorage.getItem('user'))
  const [likeTrack] = useLikeTrackMutation()
  const [dislikeTrack] = useDislikeTrackMutation()
  const playlist = useSelector(playlistSelector)
  const currentTrackTrue = playlist.find((item) => item.id === currentTrack.id)
  const isLike = Boolean(
    currentTrack.staredUser.find(({ id }) => id === authUser.id)
  )
  const [isLiked, setIsLiked] = useState(isLike)

  useEffect(() => {
    setIsLiked(isLike)
  }, [currentTrack])

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
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            {currentTrack.name}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            {currentTrack.author}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
      </S.TrackPlayContain>

      <S.LikeAndDislikeContainer>
        <S.LikeAndDislike>
          <S.LikeAndDislikeSvg
            onClick={() => toogleLikeDislike(currentTrack.id)}
            $width={'14px'}
            $height={'12px'}
            alt="like"
          >
            {isLiked ? (
              <use
                xlinkHref="/img/icon/sprite.svg#icon-like"
                fill="#ad61ff"
              ></use>
            ) : (
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            )}
          </S.LikeAndDislikeSvg>
        </S.LikeAndDislike>
      </S.LikeAndDislikeContainer>
    </S.TrackPlay>
  )
}
