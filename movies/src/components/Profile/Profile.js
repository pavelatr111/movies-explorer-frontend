// import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import Header from "../Header/Header";
import './Profile.css';


function Profile(props) {

  const currentContext = useContext(CurrentUserContext)
  const nameRef = useRef("")
  const emailRef = useRef("")

  const { values, handleChange, errors, isValid, resetFrom, setValues } = useFormValidation({
    name: nameRef.current.value,
    email: emailRef.current.value
  });

  // console.log(currentContext);
  const [isSameUserData, setIsSameUserData] = useState(true);

  useEffect(() => {
    setIsSameUserData(nameRef.current.value === currentContext.name && emailRef.current.value === currentContext.email);
  }, [values.name, values.email, currentContext.name, currentContext.email]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleUpdateUser(name, email);
    props.setCurrentUser(name, email)
    resetFrom()
  }


  return (
    <>
      <Header openNavigation={props.openNavigation} />
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
                ref={nameRef}
                onChange={handleChange}
                // value={values.name || ""}
                defaultValue={currentContext.name}
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
                ref={emailRef}
                onChange={handleChange}
                // value={values.email || ""}
                // value={emailRef.current.value}
                defaultValue={currentContext.email}
              />
            </label>
            <span className="profile__error" id="name-error">
              {errors.email || ""}
            </span>
            <div className="profile__buttons">
            <button type="submit" className={`profile__button profile__button_edit ${(!isValid || isSameUserData) && "profile__button_disablid"}`} disabled={(!isValid || isSameUserData)}>
              Редактировать
            </button>
            {props.profileRequest ?
              <span className="profile__edit-ok">Профиль успешно обновлен</span> : ""}
            <button type="submit" className="profile__button profile__button_exit" onClick={props.handleSignOut}>Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Profile