import { useState } from 'react'

export default function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)

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
              ? 'filter__button button-author _btn-text active'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => toggleVisibleFilter('author')}
        >
          исполнителю
        </div>
        {visibleFilter === 'author' && (
          <div className="filter__selector">
            <ul className="filter__items">
              <li className="filter__item">Michael Jackson</li>
              <li className="filter__item">Frank Sinatra</li>
              <li className="filter__item">Calvin Harris</li>
              <li className="filter__item">Zhu</li>
              <li className="filter__item">Алла Пугачева</li>
              <li className="filter__item">Бузова</li>
              <li className="filter__item">Скриптонит</li>
            </ul>
          </div>
        )}
      </div>
      <div className="filter__wrapper">
        <div
          className={
            visibleFilter === 'year'
              ? ' filter__button button-year _btn-text active'
              : 'filter__button button-year _btn-text'
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
              ? 'filter__button button-genre _btn-text active'
              : 'filter__button button-genre _btn-text'
          }
          onClick={() => toggleVisibleFilter('genre')}
        >
          жанру
        </div>
        {visibleFilter === 'genre' && (
          <div className="filter__selector">
            <ul className="filter__items">
              <li className="filter__item">Рок</li>
              <li className="filter__item">Хип-хоп</li>
              <li className="filter__item">Поп-музыка</li>
              <li className="filter__item">Техно</li>
              <li className="filter__item">Инди</li>
              <li className="filter__item">Рэп</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
