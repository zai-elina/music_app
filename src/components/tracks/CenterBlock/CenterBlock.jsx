import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import * as S from './CenterBlock.style'
import MusicList from '../Musics/Music'
import { useState, useEffect } from 'react'
import { getTracks } from '../../../api/Api'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '../../../store/slices/tracks'
import { compare, createArrayOfAuthors, searchMusic } from '../../../help'

export default function CenterBlock({
  setIsOpenPlayer,
  setCurrentTrack,
  isAnimatePlayTrack,
  isUserLikeInBar,
}) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [musicItems, setmusicItems] = useState([])
  const [defaultPlaylist, setDefaultPlaylist] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [activeSortYear, setAciveSortYear] = useState('По умолчанию')
  const [activeFilterGenre, setAciveFilterGenre] = useState([])
  const [isActiveFiltersGenre, setIsActiveFiltersGenre] = useState([
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
  ])
  const [filterAuthor, setFilterAuthor] = useState([])

  useEffect(() => {
    setLoading(true)
    getTracks()
      .then((tracks) => {
        setmusicItems(tracks)
        setDefaultPlaylist(tracks)
        setFilterAuthor(createArrayOfAuthors(tracks))
        dispatch(setPlaylist({ ...tracks }))
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let newPlaylist = defaultPlaylist.slice(0)
    //Сортировка по дате
    if (activeSortYear === 'Сначала новые') {
      newPlaylist = newPlaylist?.sort(compare).slice(0)
    } else if (activeSortYear === 'Сначала старые') {
      newPlaylist = newPlaylist?.sort(compare).reverse().slice(0)
    }

    //Фильтр по жанру
    if (activeFilterGenre.length !== 0) {
      let resultFilter = []
      activeFilterGenre.forEach((genre) => resultFilter.push(...genre.items))
      resultFilter = [...new Set(resultFilter)]
      newPlaylist = newPlaylist.filter((music) =>
        resultFilter.find((filter) => music.id === filter.id)
      )
    }

    //Фильтр по исполнителю
    const activeFilterAuthorList = filterAuthor.filter((item) => item.isActive)
    if (activeFilterAuthorList.length !== 0) {
      newPlaylist = newPlaylist.filter((music) =>
        activeFilterAuthorList.find((author) => music.author === author.author)
      )
    }

    setmusicItems(newPlaylist)
    dispatch(setPlaylist({ ...newPlaylist }))
  }, [activeSortYear, activeFilterGenre, filterAuthor])

  return (
    <S.Centerblock>
      <Search setSearchValue={setSearchValue} />
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      <Filter
        activeSortYear={activeSortYear}
        setAciveSortYear={setAciveSortYear}
        activeFilterGenre={activeFilterGenre}
        setAciveFilterGenre={setAciveFilterGenre}
        isActiveFiltersGenre={isActiveFiltersGenre}
        setIsActiveFiltersGenre={setIsActiveFiltersGenre}
        filterAuthor={filterAuthor}
        setFilterAuthor={setFilterAuthor}
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
            isUserLikeInBar={isUserLikeInBar}
          />
        )}
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
