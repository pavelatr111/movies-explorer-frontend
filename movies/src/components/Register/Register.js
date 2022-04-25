import RegisterHeader from "./RegisterHeader/RegisterHeader";
import React from 'react';
import { Link } from "react-router-dom";
import  './Register.css'
import { useForm, useFormValidation } from "../../hooks/useFormValidation";

function Register(props) {

  const {values, handleChange, setValues, errors, isValid, isValidInput} = useFormValidation();

  // React.useEffect(() => {
  //  setValues({...values, name: values.name, email: values.email, password: values.password});
  // },[ ])

  function handleSubmit(e) {
    e.preventDefault()
    
    props.handleUpdateUser({
      name: values.name, 
      email: values.email,
      password: values.password
    })
  }

  return (
    <>
      <RegisterHeader />

      <div className="register">
        <form className="register__form" onSubmit={handleSubmit} autoComplete="off">
          <label className="register__lable-input">Имя
            <input
              id="name"
              type="text"
              className="register__form-input register__form-input_type_name"
              name="name"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
              onChange={handleChange}
              value={values.name || ""}
            />
            <span className="register__error" id="name-error">
              {errors.name || ""}
            </span>
          </label>
          <label className="register__lable-input">E-mail
            <input
              id="email"
              type="email"
              className="register__form-input register__form-input_type_email"
              name="email"
              minLength="2"
              maxLength="200"
              required
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email || ""}
            />
            <span className="register__error" id="email-error">
              {errors.email || ""}
            </span>
          </label>
          <label className="register__lable-input">Пароль
            <input
              id="password"
              type="password"
              className={`register__form-input ${!isValidInput && "register__form-input_unactiv"}`}
              name="password"
              minLength="6"
              maxLength="40"
              required
              placeholder="Пароль"
              onChange={handleChange}
              value={values.password || ""}
            />
            <span className="register__error" id="password-error">
              {errors.password || ""}
            </span>
          </label>
          <button type="submit" className={`register__button ${!isValid && "register__button_disablid"}`} disabled={!isValid}>
            Зарегистрироваться
          </button>
          <div className="register__signin">
            <p>Уже зарегистрированы?</p>
            <Link to="signin" className="register__login-link">Войти</Link>
          </div>
        </form>
      </div>
    </>
  )

}
export default Register;