import RegisterHeader from "./RegisterHeader/RegisterHeader";
import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Register.css'
import { useFormValidation } from "../../hooks/useFormValidation";
import auth from "../../utils/Auth";

function Register(props) {

  const { values, handleChange, errors, isValid, isValidInput, setValues } = useFormValidation();
  const [registerError, setRegisterError] = useState("")

  // React.useEffect(() => {
  //  setValues({...values, name: values.name, email: values.email, password: values.password});
  // },[ ])
  function handleSubmit(e) {
    e.preventDefault()
    props.setDisableButton(true);
    auth.register(values.email, values.password, values.name)
      .then((res) => {
        console.log(res);
        auth.login(values.email, values.password).then((res) => {
          console.log(res);
          if(res?.jwt) {
            setValues({
              email: '',
              password: ''
            })
            localStorage.setItem('jwt', res?.jwt)
            props.handleLogin()
            props.history.push('/movies')
          }
        }).catch(err => {
          console.log(err)
        })
        // if (res.data.email) {
        //   props.history.push('/signin')
        // }
      }).catch(err => {
        console.log(err)
        setRegisterError("При регистрации произошла ошибка")
      })
      .finally(() => {
        props.setDisableButton(false);
      })
  }

  return (
    <>
      <RegisterHeader />

      <div className="register">
        <form className="register__form" onSubmit={handleSubmit} autoComplete="off" noValidate>
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
          <div className="refister__buttons">
            <button type="submit" className={`register__button ${(!isValid || props.disableButton) && "register__button_disablid"}`} disabled={!isValid || props.disableButton}>
              Зарегистрироваться
            </button>
            <span className="register__error-message">{registerError}</span>
            <div className="register__signin">
              <p>Уже зарегистрированы?</p>
              <Link to="signin" className="register__login-link">Войти</Link>
            </div>
          </div>
          {/* <button type="submit" className={`register__button ${!isValid && "register__button_disablid"}`} disabled={!isValid}>
            Зарегистрироваться
          </button>
          <span className="register__error-message">При регистрации произошла ошибка.</span>
          <div className="register__signin">
            <p>Уже зарегистрированы?</p>
            <Link to="signin" className="register__login-link">Войти</Link>
          </div> */}
        </form>
      </div>
    </>
  )

}
export default withRouter(Register);