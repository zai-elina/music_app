import { useRef, useState, useEffect } from 'react'
import * as S from './Bar.styles'
import { PlayerControls } from '../PlayerControls/PlayerControls'
import { Volume } from '../Volume/Volume'
import { PlayerProgress } from '../PlayerProgress/PlayerProgress'

function formatTime(time) {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - minutes * 60)

  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) seconds = `0${seconds}`

  return `${minutes}:${seconds}`
}

export default function Bar({ currentTrack, setIsAnimatePlayTrack }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioElem = useRef(null)
  const [isLoop, setIsLoop] = useState(false)
  const [volume, setVolume] = useState(50)
  const [currentTrackTime, setCurrentTrackTime] = useState({})

  const handleStart = () => {
    audioElem.current.play()
    setIsPlaying(true)
    setIsAnimatePlayTrack(true)
  }

  const handleStop = () => {
    audioElem.current.pause()
    setIsPlaying(false)
    setIsAnimatePlayTrack(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
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
    setCurrentTrackTime({
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
        src={currentTrack.trackFile}
      ></audio>

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
          <PlayerProgress
            currentTrackTime={currentTrackTime}
            audioElem={audioElem}
          />
          <S.PlayerBlock>
            <PlayerControls
              currentTrack={currentTrack}
              togglePlay={togglePlay}
              isPlaying={isPlaying}
              isLoop={isLoop}
              setIsLoop={setIsLoop}
            />
            <Volume volume={volume} setVolume={setVolume} />
          </S.PlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}
