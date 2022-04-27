import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import './MoviesCard.css'

const MoviesCard = (props) => {

  // useEffect(() => {
  //   checkIsSaved()
  // }, [])

  // const checkIsSaved = (props.movie) => {
  //   const searchMovie = props.movie.find(item => item.movieId === props.movie.id)
  //   searchMovie ? setIsLiked(true) : setIsLiked(false)
  // }

  function likeClick() {
    props.handleSaveMovie(props.movie)
    // setIsLiked(true)
  }

  // function deleteLike() {
  //   // setIsLiked(false)
  // }

  function deleteMovie() {
    props.handleMovieDelete(props.movie)
  }

  const handleTrailerOpenClick = () => {
    window.open(`${props.movie.trailerLink}`, 'trailer');
  }

  const movieTime = `${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`

  return (
    <div className="card">
      <Route path="/movies">
        {props.movie.saved
          ? <button className="card__check-button" onClick={deleteMovie}></button>
          : <button className="card__save-button " onClick={likeClick}>Сохранить</button>}
        {/* <button className="card__save-button "onClick={likeClick}>Сохранить</button> */}
        {/* <button className="card__check-button"onClick={likeClick}></button> */}
      </Route>
      <Route path="/saved-movies">
        <button className="card__delete-button" onClick={deleteMovie}>+</button>
      </Route>

      <img className="card__img"
        src={typeof props.movie.image === 'string' ? props.movie.image : `https://api.nomoreparties.co${props.movie.image.url}`}
        alt={props.movie.nameRU}
        onClick={handleTrailerOpenClick}
      />
      <div className="card__description">
        <h2 className="card__title">
          {props.movie.nameRU}
        </h2>
        <p className="card__time-movie">{movieTime}</p>
      </div>
    </div>
  )
};

export default MoviesCard
