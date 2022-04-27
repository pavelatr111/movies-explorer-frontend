
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { Route } from 'react-router-dom'

const MoviesCardList = (props) => {
  return (
    <>
      <section className="cards">
        {props.movies.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              key={movie.id  || movie.movieId}
              handleSaveMovie={props.handleSaveMovie}
              handleMovieDelete={props.handleMovieDelete}
              savedMovies={props.savedMovies}
            /> 
          )
        })}
      </section>
      <Route path="/movies">
        {(props.movies.length < props.total)?
        <button className="cards__more" onClick={props.showMoreMovies} >Ещё</button> : <></>
}
      </Route>
    </>
  )
};

export default MoviesCardList
