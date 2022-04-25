
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import RegisterHeader from '../Register/RegisterHeader/RegisterHeader';
import './Login.css';
import { useFormValidation } from "../../hooks/useFormValidation";
import auth from '../../utils/Auth';

function Login(props) {
  const { values, handleChange, setValues, errors, isValid, isValidInput } = useFormValidation();

  // React.useEffect(() => {
  //  setValues({...values, name: values.name, email: values.email, password: values.password});
  // },[ ])

  function handleSubmit(e) {
    e.preventDefault()

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
  }

  return (
    <>
      <RegisterHeader />

      <div className="login">
        <form className="login__form" onSubmit={handleSubmit} autoComplete="off">
          <label className="login__lable-input">E-mail
            <input
              type="email"
              className="login__form-input"
              name="email"
              minLength="2"
              maxLength="200"
              required
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email || ""}
            />
            <span className="login__error" id="email-error">
              {errors.email || ""}
            </span>
          </label>
          <label className="login__lable-input">Пароль
            <input
              type="password"
              className={`login__form-input ${!isValidInput && "login__form-input_unactiv"}`}
              name="password"
              minLength="6"
              maxLength="40"
              required
              placeholder="Пароль"
              onChange={handleChange}
              value={values.password || ""}
            />
            <span className="login__error" id="password-error">
              {errors.password || ""}
            </span>
          </label>
          <button type="submit" className={`login__button ${!isValid && "login__button_disablid"}`} disabled={!isValid}>
            Войти
          </button>
          <div className="login__signin">
            <p>Ещё не зарегистрированы?</p>
            <Link to="signup" className="login__login-link">Регистрация</Link>
          </div>
        </form>
      </div>
    </>
  )

}
export default withRouter(Login);