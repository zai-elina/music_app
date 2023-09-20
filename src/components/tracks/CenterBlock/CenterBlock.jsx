import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import * as S from './CenterBlock.style'
import MusicList from '../Musics/Musics'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPlaylist } from '../../../store/slices/tracksSlice'
import { compare, createArrayOfAuthors, searchMusic } from '../../../utils/help'
import { useGetAllTracksQuery } from '../../../services/trackListService'

export default function CenterBlock({ setIsOpenPlayer, isAnimatePlayTrack }) {
  const dispatch = useDispatch()
  const [musicItems, setMusicItems] = useState([])
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
  const { data, isLoading, error } = useGetAllTracksQuery()

  useEffect(() => {
    if (!isLoading && !error) {
      setMusicItems(data)
      setDefaultPlaylist(data)
      setFilterAuthor(createArrayOfAuthors(data))
      dispatch(setPlaylist(data))
    }
  }, [data, isLoading, error])

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
        resultFilter.find(({ id }) => music.id === id)
      )
    }

    //Фильтр по исполнителю
    const activeFilterAuthorList = filterAuthor.filter((item) => item.isActive)
    if (activeFilterAuthorList.length !== 0) {
      newPlaylist = newPlaylist.filter((music) =>
        activeFilterAuthorList.find(({ author }) => music.author === author)
      )
    }

    setMusicItems(newPlaylist)
    dispatch(setPlaylist(newPlaylist))
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
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitle>
        </S.ContentTitle>
        {searchValue && searchMusic(searchValue, musicItems).length === 0 ? (
          <h2>Ничего не найдено</h2>
        ) : (
          <MusicList
            loading={isLoading}
            musicItems={
              searchValue ? searchMusic(searchValue, musicItems) : musicItems
            }
            setIsOpenPlayer={setIsOpenPlayer}
            isAnimatePlayTrack={isAnimatePlayTrack}
          />
        )}
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
