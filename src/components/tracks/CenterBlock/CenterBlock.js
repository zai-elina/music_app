import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import * as S from './CenterBlock.style'
import MusicList from '../Musics/Music'

export default function CenterBlock({ 
  loading, 
  musicItems,
  setIsOpenPlayer,
  setCurrentTrack
}) {
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
        />
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
