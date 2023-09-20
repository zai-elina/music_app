import * as S from './Search.styles'

export default function Search({ setSearchValue }) {
  return (
    <S.Search>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchInput
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
    </S.Search>
  )
}
