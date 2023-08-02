import { useRef } from 'react'
import * as S from './PlayerProgress.styles'

export function PlayerProgress({ currentTrackTime, audioElem }) {
  const progressRef = useRef(null)

  const changeTime = (e) => {
    const width = progressRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const divprogress = (offset / width) * 100
    audioElem.current.currentTime =
      (divprogress / 100) * currentTrackTime.length
  }

  return (
    <div
      onClick={changeTime}
      ref={progressRef}
      style={{ background: '#2E2E2E', cursor: 'pointer' }}
    >
      <S.PlayerProgressLine
        style={{ width: `${`${currentTrackTime.progress}%`}` }}
      ></S.PlayerProgressLine>
    </div>
  )
}
