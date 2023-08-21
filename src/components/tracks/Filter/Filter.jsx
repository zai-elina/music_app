import { useState } from 'react'
import * as S from './Filter.styles'

function FilterForYear({ activeSortYear, setAciveSortYear, $height }) {
  const yearList = ['По умолчанию', 'Сначала новые', 'Сначала старые']

  const toogleSort = (filter) => {
    setAciveSortYear(filter)
  }
  return (
    <S.FilterSelector $height={$height}>
      <S.FilterItems>
        {yearList.map((item) =>
          activeSortYear === item ? (
            <S.FilterItem
              onClick={() => toogleSort(item)}
              className="active"
              key={item}
            >
              {item}
            </S.FilterItem>
          ) : (
            <S.FilterItem onClick={() => toogleSort(item)} key={item}>
              {item}
            </S.FilterItem>
          )
        )}
      </S.FilterItems>
    </S.FilterSelector>
  )
}

function FilterSelector({ list, $height }) {
  return (
    <S.FilterSelector $height={$height}>
      <S.FilterItems>
        {list.map((item) => (
          <S.FilterItem key={item}>{item}</S.FilterItem>
        ))}
      </S.FilterItems>
    </S.FilterSelector>
  )
}

export default function Filter({ activeSortYear, setAciveSortYear }) {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const authorList = [
    'Michael Jackson',
    'Frank Sinatra',
    'Calvin Harris',
    'Zhu',
    'Алла Пугачева',
    'Скриптонит',
    'Бузова',
  ]
  const genreList = ['Рок', 'Хип-хоп', 'Поп-музыка', 'Техно', 'Инди', 'Рэп']

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <S.FilterContainer>
      <S.Filter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterWrapper>
          <S.FilterButton
            $active={visibleFilter === 'author' ? 'active' : 'notActive'}
            onClick={() => toggleVisibleFilter('author')}
          >
            исполнителю
          </S.FilterButton>
          {visibleFilter === 'author' && (
            <FilterSelector $height={'305px'} list={authorList} />
          )}
        </S.FilterWrapper>

        <S.FilterWrapper>
          <S.FilterButton
            $active={visibleFilter === 'genre' ? 'active' : 'notActive'}
            onClick={() => toggleVisibleFilter('genre')}
          >
            жанру
          </S.FilterButton>
          {visibleFilter === 'genre' && (
            <FilterSelector $height={'305px'} list={genreList} />
          )}
        </S.FilterWrapper>
      </S.Filter>
      <S.SortYear>
        Сортировка:
        <S.FilterWrapper>
          <S.FilterButton
            $active={visibleFilter === 'year' ? 'active' : 'notActive'}
            onClick={() => toggleVisibleFilter('year')}
          >
            году выпуска
          </S.FilterButton>
          {activeSortYear !== 'По умолчанию' ? (
            <S.FilterButtonActive>1</S.FilterButtonActive>
          ) : (
            ''
          )}
          {visibleFilter === 'year' && (
            <FilterForYear
              activeSortYear={activeSortYear}
              setAciveSortYear={setAciveSortYear}
              $height={'200px'}
            />
          )}
        </S.FilterWrapper>
      </S.SortYear>
    </S.FilterContainer>
  )
}
