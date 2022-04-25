import React from 'react'
import { Route } from 'react-router-dom'
import './MoviesCard.css'
// import Pic from '../../../images/pic 1.jpeg'


const MoviesCard = (props) => {

  const [isLiked, setIsLiked] = React.useState(false);

  function likeClick() {
    setIsLiked(true)
  }

  function deleteClick() {
    setIsLiked(false)
  }
  return (
    <div className="card">
      <Route path="/movies">
       { isLiked ? <button className="card__check-button"onClick={deleteClick}></button> : <button className="card__save-button "onClick={likeClick}>Сохранить</button>}
        {/* <button className="card__save-button "onClick={likeClick}>Сохранить</button> */}
        {/* <button className="card__check-button"onClick={likeClick}></button> */}
      </Route>
      <Route path="/saved-movies">
        <button className="card__delete-button">+</button>
      </Route>

      <img className="card__img"
        src={props.card.link}
        alt={props.card.name}
      />
      <div className="card__description">
        <h2 className="card__title">
          movie
        </h2>
        <p className="card__time-movie">22:22</p>
      </div>
    </div>
  )
};

export default MoviesCard
