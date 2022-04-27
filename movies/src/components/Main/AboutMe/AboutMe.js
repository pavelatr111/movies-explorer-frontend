import React from 'react';
import './AboutMe.css'
import Face from '../../../images/face.jpg'

function AboutMe() {
    return(
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__info">
                <div className="about-me__about">
                    <h3 className="about-me__about-name">
                        Павел
                    </h3>
                    <h4 className="about-me__about-proffesion">Фронтенд-разработчик, 31 год</h4>
                    <p className="about-me__obout-text">Я родился и живу в Санкт-Петербурге, закончил СПБГУТД. Я люблю слушать музыку, а ещё хочу в спорт зал. Недавно начал кодить. 
В данный момент работаю Кондитером. Начал проходить курс в 2021 и меня это безумно затянуло.  </p>
                    <ul className="about-me__links">
                        <li className="about-me__link">
                            <a className="about-me__url" href="https://web.telegram.org/" target="_blank" rel="noreferer noreferrer">Telegram</a>
                        </li>
                        <li className="about-me__link">
                        <a className="about-me__url" href="https://github.com/pavelatr111" target="_blank" rel="noreferer noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                {/* <div className="about-me__photo-container"> */}
                <img src={Face}  className="about-me__photo" alt="моё фото"></img>
                {/* </div> */}
            </div>
        </section>
    )
}
export default AboutMe