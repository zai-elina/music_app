import { useState } from 'react'
import * as S from './Filter.styles'

function FilterSelector({ list }) {
  return (
    <S.FilterSelector>
      <S.FilterItems>
        {list.map((item) => (
          <S.FilterItem key={item}>{item}</S.FilterItem>
        ))}
      </S.FilterItems>
    </S.FilterSelector>
  )
}

export default function Filter() {
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
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterWrapper>
        <S.FilterButton
          $active={visibleFilter === 'author' ? 'active' : 'notActive'}
          onClick={() => toggleVisibleFilter('author')}
        >
          исполнителю
        </S.FilterButton>
        {visibleFilter === 'author' && <FilterSelector list={authorList} />}
      </S.FilterWrapper>

      <S.FilterWrapper>
        <S.FilterButton
          $active={visibleFilter === 'year' ? 'active' : 'notActive'}
          onClick={() => toggleVisibleFilter('year')}
        >
          году выпуска
        </S.FilterButton>
        {visibleFilter === 'year' && (
          <S.FilterSelectorYear>
            <S.FilterRadioButtons>
              <div>
                <S.FilterRadioButton id="radio-1" type="radio" name="radio" value="0" />
                <S.FilterRadioButtonLabel htmlFor="radio-1">
                  Более новые
                </S.FilterRadioButtonLabel>
              </div>
              <div>
                <S.FilterRadioButton id="radio-2" type="radio" name="radio" value="1" />
                <S.FilterRadioButtonLabel htmlFor="radio-2">
                  Более старые
                </S.FilterRadioButtonLabel>
              </div>
            </S.FilterRadioButtons>
          </S.FilterSelectorYear>
        )}
      </S.FilterWrapper>

      <S.FilterWrapper>
        <S.FilterButton
          $active={visibleFilter === 'genre' ? 'active' : 'notActive'}
          onClick={() => toggleVisibleFilter('genre')}
        >
          жанру
        </S.FilterButton>
        {visibleFilter === 'genre' && <FilterSelector list={genreList} />}
      </S.FilterWrapper>
    </S.Filter>
  )
}
