import { useState } from 'react'

function FilterSelector(props) {
  return (
    <div className="filter__selector">
      <ul className="filter__items">
        {props.list.map((item) => (
          <li className="filter__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__wrapper">
        <div
          className={
            visibleFilter === 'author'
              ? 'filter__button _btn-text active'
              : 'filter__button _btn-text'
          }
          onClick={() => toggleVisibleFilter('author')}
        >
          исполнителю
        </div>
        {visibleFilter === 'author' && <FilterSelector list={authorList} />}
      </div>
      <div className="filter__wrapper">
        <div
          className={
            visibleFilter === 'year'
              ? ' filter__button _btn-text active'
              : 'filter__button _btn-text'
          }
          onClick={() => toggleVisibleFilter('year')}
        >
          году выпуска
        </div>
        {visibleFilter === 'year' && (
          <div className="filter__selector--year">
            <div className="filter__radio-buttons form">
              <div className="form__radio">
                <input id="radio-1" type="radio" name="radio" value="0" />
                <label className="form__label" htmlFor="radio-1">
                  Более новые
                </label>
              </div>
              <div className="form__radio">
                <input id="radio-2" type="radio" name="radio" value="1" />
                <label className="form__label" htmlFor="radio-2">
                  Более старые
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="filter__wrapper">
        <div
          className={
            visibleFilter === 'genre'
              ? 'filter__button _btn-text active'
              : 'filter__button _btn-text'
          }
          onClick={() => toggleVisibleFilter('genre')}
        >
          жанру
        </div>
        {visibleFilter === 'genre' && <FilterSelector list={genreList} />}
      </div>
    </div>
  )
}
