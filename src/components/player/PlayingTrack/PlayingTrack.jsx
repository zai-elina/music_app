import { useContext, useState } from 'react'
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from '../../../services/trackListService'
import * as S from './PlayingTrack.styles'

export function PlayingTrack({ currentTrack}) {
  const authUser = JSON.parse(sessionStorage.getItem('user'))
  const [likeTrack, { likeLoading }] = useLikeTrackMutation()
  const [dislikeTrack, { dislikeLoading }] = useDislikeTrackMutation()
  const [isLiked, setIsLiked] = useState(
    Boolean(currentTrack.staredUser.find(({ id }) => id === authUser.id))
  )

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
            {currentTrack.title}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            {currentTrack.author}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
      </S.TrackPlayContain>

      <S.LikeAndDislikeContainer>
        {/* <S.LikeAndDislike>
          <S.LikeAndDislikeSvg
            alt="like"
            onClick={() => toogleLikeDislike(currentTrack.id)}
          >
            {isLiked ? (
              <use
                xlinkHref="img/icon/sprite.svg#icon-like"
                fill="#ad61ff"
              ></use>
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            )}
          </S.LikeAndDislikeSvg>
        </S.LikeAndDislike> */}
        <S.LikeAndDislike>
          <S.LikeAndDislikeSvg
            onClick={() => toogleLikeDislike(currentTrack.id)}
            $width={'14px'}
            $height={'12px'}
            alt="like"
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </S.LikeAndDislikeSvg>
        </S.LikeAndDislike>
        <S.LikeAndDislike $left={'28.5px'}>
          <S.LikeAndDislikeSvg
            onClick={() => toogleLikeDislike(currentTrack.id)}
            $width={'14.34px'}
            $height={'13px'}
            alt="dislike"
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
          </S.LikeAndDislikeSvg>
        </S.LikeAndDislike>
      </S.LikeAndDislikeContainer>
    </S.TrackPlay>
  )
}
