import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__text"> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__time">
        <div className="about-project__plan">
          <p className="about-project__plan-text">1 неделя</p>
          <p className="about-project__plan-text">4 недели</p>
        </div>
        <div className="about-project__plan-description">
          <p className="about-project__plan-description_text">Back-end</p>
          <p className="about-project__plan-description_text">Front-end</p>
        </div>
      </div>

    </section>
  )
}

export default AboutProject