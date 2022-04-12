
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { initialCards } from '../../../utils/constants';
import { Route } from 'react-router-dom'

const MoviesCardList = () => {
    return (
        <>
            <section className="cards">
                {initialCards.map((card, index) => {
                    return (
                        <MoviesCard card={card} key={index} />
                    )
                })}
            </section>
            <Route path="/movies">
                <button className="cards__more" >Ещё</button>
            </Route>
        </>
    )
};

export default MoviesCardList
