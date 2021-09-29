import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useForm";

function Profile({ setCurrentUser, handleProfileFormSubmit }) {

  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormWithValidation();

  useEffect(() => {
    setValues({ ...values, ...currentUser})
    resetForm()
  }, [])

  useEffect(() => {
    setIsEditing(false);
  }, [currentUser])

  function handleEditClick(e) {
    e.preventDefault();
    setIsEditing(true);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    setIsValid(false);
    handleProfileFormSubmit({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    })
  }

  return (
    <section className="profile">
      <form className="profile__form-container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <label className="profile__input-label">
          Имя
          <label
            className={
              "profile__label-instead-of-input" +
              (isEditing ? " profile__label-instead-of-input_hidden" : "")
            }
          >
            {currentUser.name}
          </label>
          <input
            type="text"
            className={
              "profile__input" + (isEditing ? " profile__input_visible" : "") + (errors.name ? " profile__input_invalid" : "")
            }
            id="profile-input-name"
            placeholder=""
            name="name"
            value={(values.name === undefined) ? currentUser.name : values.name}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            required
          ></input>
        </label>
        <div className="profile__input-line"></div>
        <label className="profile__input-label">
          E-mail
          <label
            className={
              "profile__label-instead-of-input" +
              (isEditing ? " profile__label-instead-of-input_hidden" : "")
            }
          >
            {currentUser.email}
          </label>
          <input
            type="text"
            className={
              "profile__input" + (isEditing ? " profile__input_visible" : "") + (errors.email ? " profile__input_invalid" : "")
            }
            id="profile-input-email"
            name="email"
            value={(values.email === undefined) ? currentUser.email : values.email}
            onChange={handleChange}
            required
          ></input>
        </label>
        <span className="profile__errors">
          {(errors.name || '') + ' '  + (errors.email || '')}
        </span>
        <button
          type="button"
          className={
            "profile__button profile__button_edit" +
            (isEditing ? " profile__button_hidden" : "")
          }
          onClick={handleEditClick}
        >
          Редактировать
        </button>
        <NavLink
          to="/logout"
          className={
            "profile__button profile__button_logoff" +
            (isEditing ? " profile__button_hidden" : "")
          }
        >
          Выйти из аккаунта
        </NavLink>
        <button
          type="submit"
          disabled={!isValid}
          className={
            "profile__save-button" +
            (isEditing ? "" : " profile__button_hidden")
          }
          onClick={ handleSaveClick }
        >
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default Profile;
