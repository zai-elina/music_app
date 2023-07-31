import { useRef, useState, useEffect } from 'react'
import * as S from './Bar.styles'
import Button from '../../../App.style'

function formatTime(time) {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - minutes * 60)

  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) seconds = `0${seconds}`

  return `${minutes}:${seconds}`
}

function PlayerProgress({ currentTrack, audioElem }) {
  const progressRef = useRef(null)

  const changeTime = (e) => {
    const width = progressRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const divprogress = (offset / width) * 100
    audioElem.current.currentTime = (divprogress / 100) * currentTrack.length
  }

  return (
    <div
      onClick={changeTime}
      ref={progressRef}
      style={{ background: '#2E2E2E', cursor: 'pointer' }}
    >
      <S.PlayerProgressLine
        style={{ width: `${`${currentTrack.progress}%`}` }}
      ></S.PlayerProgressLine>
    </div>
  )
}

function VolumeBlock({ volume, setVolume }) {
  return (
    <S.VolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            volume={volume}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.VolumeBlock>
  )
}

function PlayTrack({ currentTrack }) {
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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

function Player({ currentTrack, togglePlay, isPlaying, isLoop, setIsLoop }) {
  return (
    <S.Player>
      <S.PlayerControls>
        <S.PlayerButton $value={'23px'}>
          <S.PlayerButtonSvg
            $width={'15px'}
            $height={'14px'}
            alt="prev"
            onClick={() => alert('Ещё не реализовано')}
          >
            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
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
              <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
            </S.PlayerButtonSvg>
          ) : (
            <S.PlayerButtonSvg
              $width={'22px'}
              $height={'20px'}
              $fill={'#d9d9d9'}
              alt="play"
              onClick={togglePlay}
            >
              <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
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
            onClick={() => alert('Ещё не реализовано')}
          >
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
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
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonSvg>
        </S.PlayerButtonRepeat>
        <S.PlayerButtonShuffle onClick={() => alert('Ещё не реализовано')}>
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

        <PlayTrack currentTrack={currentTrack} />
      </S.PlayerControls>
    </S.Player>
  )
}

export default function Bar({ currentTrack, setCurrentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioElem = useRef(null)
  const [isLoop, setIsLoop] = useState(false)
  const [volume, setVolume] = useState(50)

  const handleStart = () => {
    audioElem.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioElem.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    audioElem.current.src = currentTrack.trackFile
    if (isPlaying) handleStart()
    else handleStop()
  }, [currentTrack.trackFile])

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100
    }
  }, [volume, audioElem])

  const playingTrack = () => {
    const duration = audioElem.current.duration
    const curTime = audioElem.current.currentTime
    setCurrentTrack({
      ...currentTrack,
      progress: (curTime / duration) * 100,
      length: duration,
    })
  }

  return (
    <>
      <audio
        style={{ visibility: 'hidden' }}
        controls
        ref={audioElem}
        loop={isLoop}
        onTimeUpdate={playingTrack}
      >
        <source src={currentTrack.trackFile} type="audio/mpeg" />
        <track kind="captions" label="" />
      </audio>

      <S.Bar>
        <S.PlayerTime>
        <span className="current-time">
          {formatTime(audioElem.current?.currentTime || 0)}
        </span>{' '}
        /
        <span className="duration">
          {formatTime(audioElem.current?.duration || 0)}
        </span>
        </S.PlayerTime>
        <S.BarContent>
          <PlayerProgress currentTrack={currentTrack} audioElem={audioElem} />
          <S.PlayerBlock>
            <Player
              currentTrack={currentTrack}
              togglePlay={togglePlay}
              isPlaying={isPlaying}
              isLoop={isLoop}
              setIsLoop={setIsLoop}
            />
            <VolumeBlock volume={volume} setVolume={setVolume} />
          </S.PlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}
