import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import './Movies.css'
import NotFound from '../NotFound/NotFound';
import Preloader from './Preloader/Preloader';

function Movies(props) {

    const [showMovies, setShowMovies] = useState(0);
    const [addMovies, setAddMovies] = useState(0);

    //стейт отфильтрованных фильмов
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filter, setFilter] = React.useState({ text: '', check: false });
    const [isLoading, setIsLoading] = useState(false);


    // useEffect(() => {
    //     const lastFoundMovie = JSON.parse(localStorage.getItem("foundMovies"));
    //     if (lastFoundMovie) {
    //         setFilteredMovies(lastFoundMovie || []);
    //     }
    // }, []);

    useEffect(() => {
        const { text, check } = filter;

        let result = props.showEmpty ? []: [...props.movies];
        
        if (text) {
            result = props.movies.filter(movie =>
                movie.nameRU.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                movie.nameEN?.toLowerCase().indexOf(text.toLowerCase()) > -1
            );
        }

        if (check === true) {
            result = result.filter(movie => movie.duration <= 40);
        }
        
        setFilteredMovies(result);
        // localStorage.setItem("foundMovies", JSON.stringify(result));
    }, [filter, props.movies]);

    useEffect(() => {
        if (props.width >= 1280) {
            setShowMovies(12);
            setAddMovies(3)
        } else if (props.width >= 768) {
            setShowMovies(8)
            setAddMovies(2)
        } else {
            setShowMovies(5)
            setAddMovies(2)
        }

    }, [props.width]);

    const moviesList = props.showMore ? filteredMovies.slice(0, showMovies) : filteredMovies;

    function showMoreMovies() {
        setShowMovies(prevState => prevState + addMovies);
    }

    return (
        <>
            <Header
                openNavigation={props.openNavigation}
            />
            <main className="content">
                <SearchForm
                    searchMovies={setFilter}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                />
                
               {isLoading ?
               <Preloader/> : 
               (filteredMovies.length === 0 && filter.text.length > 0) ?
                <NotFound/> :
                <MoviesCardList
                    total={filteredMovies.length}
                    movies={moviesList}
                    savedMovies={props.movies}
                    saved = {props.saved}
                    showMoreMovies={showMoreMovies}
                    handleSaveMovie={props.handleSaveMovie}
                    handleMovieDelete={props.handleMovieDelete}

                />}
            </main>
            <Footer />
        </>
    )
};

export default Movies