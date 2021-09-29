import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useForm";

function Login({ handleLoginFormSubmit }) {

  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormWithValidation()

  useEffect(() => {
    resetForm()
  }, [])

  return (
    <section className="login">
      <form className="login__form-container">
        <NavLink to="/" className="login__logo"></NavLink>
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__input-label">
          E-mail
          <input
            className="login__input"
            type="text"
            placeholder=""
            id="login-email-input"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            required
          ></input>
        </label>
        <div className="login__input-line"></div>
        <span
          className="login__input-error"
          id="login-email-input-error"
        >{errors.email}</span>
        <label className="login__input-label">
          Пароль
          <input
            className="login__input"
            type="password"
            placeholder=""
            id="login-password-input"
            name="password"
            onChange={handleChange}
            value={values.password || ''}
            required>
          </input>
        </label>
        <div className="login__input-line"></div>
        <span className="login__input-error" id="login-password-input-error">
          {errors.password}
        </span>
        <button
          className="login__submit-button"
          type="submit"
          onClick={(e) => { e.preventDefault(); setIsValid(false); handleLoginFormSubmit(values)}}
          disabled={!isValid}
        >
          Войти
        </button>
        <p className="login__text">
          {"Ещё не зарегистрированы? "}
          <NavLink to="/signup" className="login__link">
            Регистрация
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Login;
