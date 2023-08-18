import { useRef, useState, useEffect } from 'react'
import * as S from './Bar.styles'
import { PlayerControls } from '../PlayerControls/PlayerControls'
import { Volume } from '../Volume/Volume'
import { PlayerProgress } from '../PlayerProgress/PlayerProgress'
import { useDispatch, useSelector } from 'react-redux'
import {
  playlistSelector,
  shufflePlaylistSelector,
} from '../../../store/selectors/tracks'
import {
  nextTrack,
  prevTrack,
  setShufflePlaylist,
} from '../../../store/slices/tracks'

function formatTime(time) {
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - minutes * 60)

  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) seconds = `0${seconds}`

  return `${minutes}:${seconds}`
}

export default function Bar({
  currentTrack,
  setCurrentTrack,
  setIsAnimatePlayTrack,
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioElem = useRef(null)
  const [isLoop, setIsLoop] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [volume, setVolume] = useState(50)
  const [currentTrackTime, setCurrentTrackTime] = useState({})
  const playlist = useSelector(playlistSelector)
  const shufflePlaylist = useSelector(shufflePlaylistSelector)
  const dispatch = useDispatch()

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

  const handleNext = () => {
    const trackList = isShuffle ? { ...shufflePlaylist } : { ...playlist }
    let index = Object.keys(trackList).find(
      (key) => trackList[key].id === currentTrack.id
    )
    if (+index === Object.keys(trackList).length - 1) return
    index = +index + 1
    setCurrentTrack({
      id: trackList[index].id,
      author: trackList[index].author,
      title: trackList[index].name,
      trackFile: trackList[index].track_file,
      progress: 0,
      length: trackList[index].duration_in_seconds,
    })
    dispatch(nextTrack(trackList[index].id))
  }

  const handlePrev = () => {
    if (audioElem.current?.currentTime > 5) {
      audioElem.current.currentTime = 0
      return
    }
    const trackList = isShuffle ? { ...shufflePlaylist } : { ...playlist }
    let index = Object.keys(trackList).find(
      (key) => trackList[key].id === currentTrack.id
    )
    if (+index === 0) return
    index = +index - 1
    setCurrentTrack({
      id: trackList[index].id,
      author: trackList[index].author,
      title: trackList[index].name,
      trackFile: trackList[index].track_file,
      progress: 0,
      length: trackList[index].duration_in_seconds,
    })
    dispatch(prevTrack(trackList[index].id))
  }

  const playingTrack = () => {
    const duration = audioElem.current.duration
    const curTime = audioElem.current.currentTime
    setCurrentTrackTime({
      progress: (curTime / duration) * 100,
      length: duration,
    })
    if (duration === curTime) {
      handleNext()
    }
  }

  const handleShufflePlaylist = () => {
    const shuffleTracks = Object.values(playlist).sort(function () {
      return Math.round(Math.random()) - 0.5
    })
    setIsShuffle(true)
    dispatch(setShufflePlaylist({ ...shuffleTracks }))
  }

  const stopShufflePlaylist = () => {
    setIsShuffle(false)
    dispatch(setShufflePlaylist({}))
  }

  const toggleShuffle = isShuffle ? stopShufflePlaylist : handleShufflePlaylist

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
              handleNext={handleNext}
              handlePrev={handlePrev}
              isShuffle={isShuffle}
              toggleShuffle={toggleShuffle}
            />
            <Volume volume={volume} setVolume={setVolume} />
          </S.PlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}
