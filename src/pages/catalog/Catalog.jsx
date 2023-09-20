import { useParams } from 'react-router-dom'
import Search from '../../components/tracks/Search/Search'
import * as S from '../../components/tracks/CenterBlock/CenterBlock.style'
import MusicList from '../../components/tracks/Musics/Musics'
import { useGetCatalogSectionTracksQuery } from '../../services/trackListService'
import { searchMusic } from '../../utils/help'
import { useState } from 'react'

export default function Catalog({ setIsOpenPlayer, isAnimatePlayTrack }) {
  const { id } = useParams()
  const { data, error, isLoading } = useGetCatalogSectionTracksQuery(id)
  const [searchValue, setSearchValue] = useState('')
  return (
    <S.Centerblock>
      <Search setSearchValue={setSearchValue} />
      <S.CenterBlockTitle>{data?.name}</S.CenterBlockTitle>
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
        {error ? (
          <h2>Не удалось загрузить треки</h2>
        ) : (
          <>
            {searchValue &&
            searchMusic(searchValue, data?.items).length === 0 ? (
              <h2>Ничего не найдено</h2>
            ) : (
              <MusicList
                loading={isLoading}
                musicItems={
                  searchValue
                    ? searchMusic(searchValue, data?.items)
                    : data?.items
                }
                setIsOpenPlayer={setIsOpenPlayer}
                isAnimatePlayTrack={isAnimatePlayTrack}
                isMyTrack={false}
              />
            )}
          </>
        )}
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
