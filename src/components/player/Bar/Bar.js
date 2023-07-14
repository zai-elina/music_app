import * as S from './Bar.styles'
import Button from '../../../App.style'

function VolumeBlock() {
  return (
    <S.VolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <input
            style={ {width:'109px'}}
            type="range"
            name="range"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.VolumeBlock>
  )
}

function PlayTrack() {
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">Ты та...</S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">Баста</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
      </S.TrackPlayContain>

      <S.LikeAndDislikeContainer>
        <S.LikeAndDislike>
          <S.LikeAndDislikeSvg $width={'14px'} $height={'12px'} alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.LikeAndDislikeSvg>
        </S.LikeAndDislike>
        <S.LikeAndDislike $left={'28.5px'}>
          <S.LikeAndDislikeSvg
            $width={'14.34px'}
            $height={'13px'}
            alt="dislike"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </S.LikeAndDislikeSvg>
        </S.LikeAndDislike>
      </S.LikeAndDislikeContainer>
    </S.TrackPlay>
  )
}

function Player() {
  return (
    <S.Player>
      <S.PlayerControls>
        <S.PlayerButton $value={'23px'}>
          <S.PlayerButtonSvg $width={'15px'} $height={'14px'} alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButton>
        <S.PlayerButton $value={'23px'}>
          <Button />
          <S.PlayerButtonSvg
            $width={'22px'}
            $height={'20px'}
            $fill={'#d9d9d9'}
            alt="play"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButton>
        <S.PlayerButton $value={'28px'} $fill={'#a53939'}>
          <S.PlayerButtonSvg
            $width={'15px'}
            $height={'14px'}
            $fill={'inherit'}
            $stoke={'#d9d9d9'}
            alt="next"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButton>
        <S.PlayerButtonRepeat>
          <S.PlayerButtonSvg
            $width={'18px'}
            $height={'12px'}
            $fill={'transparent'}
            $stoke={'#696969'}
            alt="repeat"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButtonRepeat>
        <S.PlayerButtonShuffle>
          <S.PlayerButtonSvg
            $width={'19px'}
            $height={'12px'}
            $fill={'transparent'}
            $stoke={'#696969'}
            alt="shuffle"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButtonShuffle>

        <PlayTrack />
      </S.PlayerControls>
    </S.Player>
  )
}

export default function Bar() {
  return (
    <S.Bar>
      <S.BarContent>
        <S.PlayerProgress />
        <S.PlayerBlock>
          <Player />
          <VolumeBlock />
        </S.PlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
