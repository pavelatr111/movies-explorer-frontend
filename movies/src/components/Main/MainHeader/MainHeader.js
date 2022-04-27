import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css'
import headLogo from '../../../images/logo.svg';

function MainHeader(props) {
  return (
    <header className="main-header">
      <div className="main-header__content">
        <Link to="/"><img className="main-header__logo" src={headLogo} alt="лого" /></Link>
        {props.loggedIn ? (
          <>
            <nav className="main-header__navigation">
              <Link to="/movies"><button className="main-header__navigation-link">Фильмы</button></Link>
              {/* <button className="header__navigation-link">Фильмы</button> */}
              <Link to="/saved-movies"><button className="main-header__navigation-link">Сохранённые фильмы</button></Link>
              {/* <button className="header__navigation-link">Сохранённые фильмы</button> */}
            </nav>
            <button className="main-header__sidebar" type="button" onClick={props.openNavigation}></button>
          </>
        ) : (
          <nav className="main-header_nav">
            <Link to="/signup" className="main-header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="main-header__button main-header__button_enter">
              Войти
            </Link>
          </nav>
        )}


      </div>

    </header>
  )
}

export default MainHeader