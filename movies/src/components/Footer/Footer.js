import React from 'react'
import './Footer.css'
const date = new Date().getFullYear('2021')
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__description">
                <p className="footer__paragraph">&copy; {date}</p>
                <nav className="footer__nav">
                    <ul className="footer__links">
                        <li className="footer__item">
                            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="https://github.com/pavelatr111" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="https://web.telegram.org" target="_blank" rel="noreferrer">Тедеграм</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </footer>
    )
};

export default Footer