import { useState } from 'react'

export default function Filter() {
  const [visible, setVisible] = useState(false)

  const toogleVisibility = () => {
    setVisible(!visible)
  }
    return (
        <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
    )
  }
  