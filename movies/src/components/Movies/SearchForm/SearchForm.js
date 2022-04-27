import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useFormValidation } from '../../../hooks/useFormValidation';
import './SearchForm.css'

function SearchForm(props) {
    const [errorText, setErrorText] = useState("");
    const [disabledSearch, setDisabledSearch] = useState(false)

    const { values, setValues, handleChange, isValid, setIsvalid } = useFormValidation();
    const location = useLocation();
    const storeKey = `search${location.pathname}`;

    useEffect(() => {
        const search = JSON.parse(localStorage.getItem(storeKey));
        if (search) {
            // setValues(search);
            props.searchMovies(search);
        }
    }, []);

    const handleSearchMovies = (e) => {
        e.preventDefault();
        if (!isValid) {
            // props.setIsLoading(false) 
            setErrorText("Нужно ввеcти ключевое слово.")
        } else {
            props.setIsLoading(true)
            setDisabledSearch(true)
            setTimeout(() => {
                props.setIsLoading(false)
                setDisabledSearch(false)
            }, 1000)

            props.searchMovies(values);
            localStorage.setItem(storeKey, JSON.stringify(values));
        }
    }

    // const handleSearchMovies = (e) => {
    //     e.preventDefault();
    //     if (isValid) {
    //       props.searchMovies(values.movie)
    //     } else {
    //       setErrorText("Нужно ввеcти ключевое слово.")
    //     }
    //   }

    return (
        <div className="search">
            <form className="search__form" name="search-movie" autoComplete="off" onSubmit={handleSearchMovies} noValidate>
                <label className="search__form-lable">
                    <input
                        type="text"
                        className="search__form-input"
                        name="text"
                        id="search-movie"
                        placeholder="фильм"
                        onChange={handleChange}
                        value={values.text || ""}
                        required
                    >
                    </input>
                    <span className="search__form-error" id="search-movies-error">{isValid ? "" : `${errorText}`}</span>
                </label>
                <button className={`search__button ${(!isValid || disabledSearch) && "search__button_disablid"}`} disabled={disabledSearch} type="submit">Найти</button>
            </form>
            <div className="search__switch">
                <input type="checkbox" id="movie" name="check" onChange={handleChange} checked={values.check || false}></input>
                <label className="search__switch_text">Короткометражка</label>
            </div>

            {/* </div> */}
        </div>
        // </div>

    )
};

export default SearchForm