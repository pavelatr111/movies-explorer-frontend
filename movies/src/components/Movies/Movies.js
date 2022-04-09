import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies (props) {
    return (
        <>
        <Header
         openNavigation={props.openNavigation} 
        />
        <main className="content">
            <SearchForm/>
            <MoviesCardList/>
        </main>
        <Footer/>
        </>
    )
};

export default Movies