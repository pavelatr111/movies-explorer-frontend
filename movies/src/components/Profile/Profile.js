// import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import Header from "../Header/Header";
import './Profile.css';


function Profile(props) {

  const { values, handleChange, errors, isValid, setValues} = useFormValidation();

  const currentContext = useContext(CurrentUserContext)
  console.log(currentContext);

  const [isSameUserData, setIsSameUserData] = useState(true);

  useEffect(() => {
    setIsSameUserData(values.name === currentContext.name && values.email === currentContext.email);
  }, [values.name, values.email, currentContext.name, currentContext.email]);

//   React.useEffect(() => {
//     setValues(currentContext)
// }, [currentContext]); 
  
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleUpdateUser(values.name, values.email);
}


  return (
    <>
      <Header openNavigation={props.openNavigation}/>
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет,{currentContext.name}!</h1>
          <form className="profile__form" autoComplete="off" onSubmit={handleSubmit} noValidate>
            <label className="profile__lable-input">Имя
              <input
                type="text"
                className="profile__form-input"
                name="name"
                minLength="2"
                maxLength="30"
                required
                placeholder="Введите Имя"
                onChange={handleChange}
                value={values.name || currentContext.name}
                // defaultValue={currentContext.name}

              />
            </label>
            <span className="profile__error" id="name-error">
              {errors.name || ""}
            </span>
            <label className="profile__lable-input">E-mail
              <input
                type="email"
                className="profile__form-input"
                name="email"
                minLength="2"
                maxLength="40"
                required
                placeholder="Введите E-mail"
                onChange={handleChange}
                value={values.email || currentContext.email}
                // defaultValue={currentContext.email}
              />
            </label>
            <span className="profile__error" id="name-error">
              {errors.email || ""}
            </span>
            <button type="submit" className={`profile__button profile__button_edit ${(!isValid || isSameUserData) && "profile__button_disablid"}`}  disabled={(!isValid || isSameUserData)}>
              Редактировать
            </button>
            <button type="submit" className="profile__button profile__button_exit" onClick={props.handleSignOut}>Выйти из аккаунта</button>
          </form>
        </div>
      </section>
    </>
  )
}
export default Profile