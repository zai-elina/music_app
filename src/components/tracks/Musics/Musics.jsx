import SkeletonMusic from './SkeletonMusics'
import * as S from './Musics.style'
import { MusicsItem } from './MusicsItem/MusicsItem'

export default function MusicList({
  loading,
  musicItems,
  setIsOpenPlayer,
  isAnimatePlayTrack,
}) {
  return (
    <S.MusicList>
      {loading && <SkeletonMusic />}
      {!loading && !musicItems ? (
        <h2>В этом плейлисте нет треков</h2>
      ) : (
        musicItems?.map((item) => (
          <MusicsItem
            key={item.id}
            setIsOpenPlayer={setIsOpenPlayer}
            isAnimatePlayTrack={isAnimatePlayTrack}
            musicItems={musicItems}
            musicData={item}
          />
        ))
      )}
    </S.MusicList>
  )
}
