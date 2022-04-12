import React from 'react'
import './SearchForm.css'

function SearchForm () {
    return (
        <div className="search">
            {/* <div className="form__container"> */}
                <form className="search__form" name="search-movie" autocomplete="off">
                    <input type="text"
                        className="search__form-input"
                        name="movie"
                        id="search-movie"
                        placeholder="фильм"
                        required
                    >
                    </input>
                    <button className="search__button" type="submit">Найти</button>
                </form>
                {/* <div className= "search__tumbler"> */}
                <div className="search__switch">
                    <input type="checkbox" id="movie"></input>
                    <label className="search__switch_text" for="movie">Короткометражка</label>
                </div>
                
                {/* </div> */}
            </div>
            // </div>

            )
};

            export default SearchForm