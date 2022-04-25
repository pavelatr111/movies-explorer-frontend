import React from 'react';
import './RegisterHeader.css'
import { Link, Switch, Route } from 'react-router-dom';
import headLogo from '../../../images/logo.svg';

function RegisterHeader(props) {
    return (
        <header className="header-register">
            <Link to="/">
                <img className="header-register__logo" src={headLogo} alt="лого" />
            </Link>
            <Switch>
                <Route path="/signup">
                   <h2 className="header-register__title ">Добро пожаловать!</h2>
                </Route>
                <Route path="/signin">
                <h2 className="header-register__title ">Рады видеть!</h2>
                </Route>
            </Switch>
        </header>
    )

}
export default RegisterHeader;