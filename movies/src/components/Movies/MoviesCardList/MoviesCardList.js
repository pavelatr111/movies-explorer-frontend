
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { initialCards } from '../../../utils/constants';

const MoviesCardList = () => {
    return (
        <>
        <section className="cards">
           {initialCards.map((card, index) =>{
               return(
                <MoviesCard  card={card} key={index}/>
               )
           })}
        </section>
        <button className="cards__more" >Ещё</button>
        </>
    )
};

export default MoviesCardList
