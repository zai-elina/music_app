import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import * as S from './CenterBlock.style'
import MusicList from '../Musics/Music'
import { useState, useEffect } from 'react'
import { getTracks } from '../../../api/Api'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '../../../store/slices/tracks'
import { compare, searchMusic } from '../../../help'

export default function CenterBlock({
  setIsOpenPlayer,
  setCurrentTrack,
  isAnimatePlayTrack,
}) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [musicItems, setmusicItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [activeSortYear, setAciveSortYear] = useState('По умолчанию')
  const [defaultPlaylist, setDefaultPlaylist] = useState([])

  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracks) => {
        setmusicItems(tracks)
        setDefaultPlaylist(tracks)
        dispatch(setPlaylist({ ...tracks }))
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let newPlaylist = defaultPlaylist.slice(0)
    if (activeSortYear === 'По умолчанию') {
      newPlaylist = newPlaylist?.slice(0)
    } else if (activeSortYear === 'Сначала новые') {
      newPlaylist = newPlaylist?.sort(compare).slice(0)
    } else {
      newPlaylist = newPlaylist?.sort(compare).reverse().slice(0)
    }
    setmusicItems(newPlaylist)
    dispatch(setPlaylist({ ...newPlaylist }))
  }, [activeSortYear])

  return (
    <S.Centerblock>
      <Search setSearchValue={setSearchValue} />
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      <Filter
        activeSortYear={activeSortYear}
        setAciveSortYear={setAciveSortYear}
      />
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
        {searchValue && searchMusic(searchValue, musicItems).length === 0 ? (
          <h2>Ничего не найдено</h2>
        ) : (
          <MusicList
            loading={loading}
            musicItems={
              searchValue ? searchMusic(searchValue, musicItems) : musicItems
            }
            setIsOpenPlayer={setIsOpenPlayer}
            setCurrentTrack={setCurrentTrack}
            isAnimatePlayTrack={isAnimatePlayTrack}
          />
        )}
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
