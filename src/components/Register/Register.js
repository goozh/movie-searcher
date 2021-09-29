import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useForm";

function Register({ handleRegisterFormSubmit }) {

  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormWithValidation()

  useEffect(() => {
    resetForm()
  }, [])

  return (
    <section className="register">
      <form className="register__form-container">
        <NavLink to="/" className="register__logo"></NavLink>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__input-label">
          Имя
          <input
            className="register__input"
            type="text"
            placeholder=""
            id="register-name-input"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            required
          ></input>
        </label>
        <div className="register__input-line"></div>
        <span
          className="register__input-error"
          id="register-name-input-error"
        >{errors.name}</span>
        <label className="register__input-label">
          E-mail
          <input
            className="register__input"
            type="text"
            placeholder=""
            id="register-email-input"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            required
          ></input>
        </label>
        <div className="register__input-line"></div>
        <span
          className="register__input-error"
          id="register-email-input-error"
        >{errors.email}</span>
        <label className="register__input-label">
          Пароль
          <input
            className="register__input"
            type="password"
            placeholder=""
            id="register-password-input"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            required
          ></input>
        </label>
        <div className="register__input-line"></div>
        <span
          className="register__input-error"
          id="register-password-input-error"
        >
          {errors.password}
        </span>
        <button
          className="register__submit-button"
          type="submit"
          onClick={(e) => { e.preventDefault(); setIsValid(false); handleRegisterFormSubmit(values)}}
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <p className="register__text">
          {"Уже зарегистрированы? "}
          <NavLink to="/signin" className="register__link">
            Войти
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Register;
