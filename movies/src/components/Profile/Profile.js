// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Profile.css';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Павел!</h1>
          <form className="profile__form" autocomplete="off">
            <label className="profile__lable-input">Имя
              <input
                type="text"
                className="profile__form-input"
                name="name"
                minLength="2"
                maxLength="200"
                required
                placeholder="Введите Имя"
              />
            </label>
            <label className="profile__lable-input">E-mail
              <input
                type="email"
                className="profile__form-input"
                name="email"
                minLength="2"
                maxLength="40"
                required
                placeholder="Введите E-mail"
              />
            </label>
            <button type="submit" className="profile__button profile__button_edit">
              Редактировать
            </button>
            <button type="submit" className="profile__button profile__button_exit">Выйти из аккаунта</button>
          </form>
        </div>
      </section>
    </>
  )
}
export default Profile