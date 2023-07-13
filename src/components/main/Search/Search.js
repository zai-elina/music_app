import * as S from './Search.styles'

export default function Search() {
    return (
        <S.Search>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchInput
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.Search>
    )
  }
  