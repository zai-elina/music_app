import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import MusicItems from '../Musics/Music'
import * as S from './CenterBlock.style'

export default function CenterBlock({ loading }) {
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
        <MusicItems loading={loading} />
      </S.CenterBlockContent>
    </S.Centerblock>
  )
}
