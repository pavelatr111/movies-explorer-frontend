import React from 'react';
import './Header.css'
import { Link} from 'react-router-dom';
import headLogo from '../../images/logo.svg';
import iconProfile from "../../images/icon__profile.svg";

function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={headLogo} alt="лого" /></Link>
            {/* <img className="header__logo" src={headLogo} alt="лого" /> */}
                <nav className="header__navigation">
                    <Link to="/movies"><button className="header__navigation-link"type="button">Фильмы</button></Link>
                    {/* <button className="header__navigation-link">Фильмы</button> */}
                    <Link to="/saved-movies"><button className="header__navigation-link" type="button">Сохранённые фильмы</button></Link>
                    {/* <button className="header__navigation-link">Сохранённые фильмы</button> */}
                </nav>
                <button className="header__profile-button">
                    <img className="header__icon-profile" src={iconProfile} alt="иконка профайла" />
                    <Link to="/profile" className="header__button-text">Аккаунт</Link>
                </button>
                <button className="header__sidebar" type="button" onClick={props.openNavigation}></button>
        </header>
    )

}
export default Header;