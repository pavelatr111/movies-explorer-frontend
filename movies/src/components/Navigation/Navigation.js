import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';
import iconProfile from "../../images/icon__profile.svg";

function Navigation(props) {
    return (
        <div className={`navigation ${props.isOpenNavigation ? "navigation_open" : " "}`}>
            <div className="navigation__container">
                <button className="navigation__button-close" type="button" onClick={props.closeNavigation}></button>
                <nav className="navigation__nav">
                    <ul className="navigation__items">
                        <li className="navigation__item">
                            <Link to="/" className="navigation__item-url">Главная</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/movies" className="navigation__item-url">Фильмы</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/saved-movies" className="navigation__item-url">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                    <button className="navigation__profile-button">
                        <img className="navigation__icon-profile" src={iconProfile} alt="иконка профайла" />
                        <Link to="/profile" className="navigation__button-text">Аккаунт</Link>
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Navigation