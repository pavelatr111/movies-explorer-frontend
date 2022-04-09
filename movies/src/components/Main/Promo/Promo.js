import React from 'react';
import './Promo.css'
import promoLogo from '../../../images/promoLogo.svg'

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="promo__container"><img className="promo__img" src={promoLogo} alt="лого"></img></div>
            
        </section>
    )
}

export default Promo