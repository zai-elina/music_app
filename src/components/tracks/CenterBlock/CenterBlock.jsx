import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import * as S from './CenterBlock.style'
import MusicList from '../Musics/Music'
import { useState, useEffect } from 'react'
import { getTracks } from '../../../api/Api'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '../../../store/actions/creators/tracks'

export default function CenterBlock({
  setIsOpenPlayer,
  setCurrentTrack,
  isAnimatePlayTrack,
}) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [musicItems, setmusicItems] = useState([])
  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracks) => {
        setmusicItems(tracks)
        dispatch(setPlaylist({ ...tracks }))
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <S.Centerblock>
      <Search />
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      <Filter />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlaylistTitle $width={'447px'}>Трек</S.PlaylistTitle>
          <S.PlaylistTitle $width={'321px'}>ИСПОЛНИТЕЛЬ</S.PlaylistTitle>
          <S.PlaylistTitle $width={'245px'}>АЛЬБОМ</S.PlaylistTitle>
          <S.PlaylistTitle $width={'60px'} $textAlign={'end'}>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitle>
        </S.ContentTitle>
        <MusicList
          loading={loading}
          musicItems={musicItems}
          setIsOpenPlayer={setIsOpenPlayer}
          setCurrentTrack={setCurrentTrack}
          isAnimatePlayTrack={isAnimatePlayTrack}
        />
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
