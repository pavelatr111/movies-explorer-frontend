import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">
                Страница не найдена
            </p>
            <Link className="not-found__button" to="/">Назад</Link>
        </div>
    )
};

export default PageNotFound