import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологий</h2>
      <div className="techs__info">
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__items">
        <li className="techs__item">
          <p className="techs__item-kind">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-kind">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-kind">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-kind">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-kind">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-kind">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__item-kind">mongoDB</p>
        </li>
      </ul>
    </section>
  )
}

export default Techs
