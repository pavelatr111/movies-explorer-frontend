import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a className="portfolio__url" href="https://github.com/pavelatr111/how-to-learn" target="_blank" rel="noreferer noreferrer">
                        <p className="portfolio__url-text">Статичный сайт</p>
                        <p className="portfolio__url-arrow">↗</p>
                    </a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__url" href="https://github.com/pavelatr111/russian-travel" target="_blank" rel="noreferer noreferrer">
                        <p className="portfolio__url-text">Адаптивный сайт</p>
                        <p className="portfolio__url-arrow">↗</p>
                    </a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__url" href="https://github.com/pavelatr111/react-mesto-api-full" target="_blank" rel="noreferer noreferrer">
                        <p className="portfolio__url-text">Одностраничное приложение</p>
                        <p className="portfolio__url-arrow">↗</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio