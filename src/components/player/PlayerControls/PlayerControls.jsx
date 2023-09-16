import * as S from './PlayerControls.styles'
import Button from '../../../App.style'
import { PlayingTrack } from '../PlayingTrack/PlayingTrack'

export function PlayerControls({
  togglePlay,
  isPlaying,
  isLoop,
  setIsLoop,
  handleNext,
  handlePrev,
  isShuffle,
  toggleShuffle,
}) {
  return (
    <S.Player>
      <S.PlayerControls>
        <S.PlayerButton $value={'23px'}>
          <S.PlayerButtonSvg
            $width={'15px'}
            $height={'14px'}
            alt="prev"
            onClick={handlePrev}
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButton>
        <S.PlayerButton $value={'23px'}>
          <Button />
          {isPlaying ? (
            <S.PlayerButtonSvg
              $width={'15px'}
              $height={'19px'}
              $fill={'#d9d9d9'}
              alt="pause"
              onClick={togglePlay}
            >
              <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
            </S.PlayerButtonSvg>
          ) : (
            <S.PlayerButtonSvg
              $width={'22px'}
              $height={'20px'}
              $fill={'#d9d9d9'}
              alt="play"
              onClick={togglePlay}
            >
              <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
            </S.PlayerButtonSvg>
          )}
        </S.PlayerButton>
        <S.PlayerButton $value={'28px'} $fill={'#a53939'}>
          <S.PlayerButtonSvg
            $width={'15px'}
            $height={'14px'}
            $fill={'inherit'}
            $stoke={'#d9d9d9'}
            alt="next"
            onClick={handleNext}
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButton>
        <S.PlayerButtonRepeat
          className={isLoop ? 'active' : ''}
          onClick={() => (isLoop ? setIsLoop(false) : setIsLoop(true))}
        >
          <S.PlayerButtonSvg
            $width={'18px'}
            $height={'12px'}
            $fill={'transparent'}
            $stoke={'#696969'}
            alt="repeat"
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButtonRepeat>
        <S.PlayerButtonShuffle
          className={isShuffle ? 'active' : ''}
          onClick={toggleShuffle}
        >
          <S.PlayerButtonSvg
            $width={'19px'}
            $height={'12px'}
            $fill={'transparent'}
            $stoke={'#696969'}
            alt="shuffle"
          >
            <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButtonShuffle>

        <PlayingTrack />
      </S.PlayerControls>
    </S.Player>
  )
}
