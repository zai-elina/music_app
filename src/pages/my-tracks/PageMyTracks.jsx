import Search from '../../components/tracks/Search/Search'
import * as S from '../../components/tracks/CenterBlock/CenterBlock.style'
import MusicList from '../../components/tracks/Musics/Music'
import { useGetAllMyTracksQuery } from '../../services/myTracks'

export default function PageMyTracks({
  loading,
  setIsOpenPlayer,
  setCurrentTrack,
  isAnimatePlayTrack,
}) {
  
  const { data,error,isLoading } = useGetAllMyTracksQuery()
  return (
    <S.Centerblock>
      <Search />
      <S.CenterBlockTitle>Мои треки</S.CenterBlockTitle>
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
          loading={isLoading}
          musicItems={data}
          setIsOpenPlayer={setIsOpenPlayer}
          setCurrentTrack={setCurrentTrack}
          isAnimatePlayTrack={isAnimatePlayTrack}
        />
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
