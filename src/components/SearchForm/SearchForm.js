import { useState } from "react";

function SearchForm({ handleSearchButtonSubmit }) {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [shoudSearchShort, setShoudSearchShort] = useState(true);

  function handleSearchInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  function onSearchButtonSubmit(e) {
    e.preventDefault();
    handleSearchButtonSubmit(searchInputValue, shoudSearchShort);
  }

  function onChangeShortCheckbox(e) {
    setShoudSearchShort(e.target.checked);
    handleSearchButtonSubmit(searchInputValue, e.target.checked);
  }

  return (
    <form className="search-form" noValidate >
      <div className="search-form__input-line-container">
        <input
          type="text"
          className="search-form__input"
          placeholder="Фильм"
          value={searchInputValue || ''}
          onChange={handleSearchInputChange}
          required
        ></input>
        <button type="submit" className="search-form__button" onClick={onSearchButtonSubmit} >
          Найти
        </button>
      </div>
      <label
        className="search-form__checkbox-label"
      >
        <input
          type="checkbox"
          id="search-form__checkbox"
          className="search-form__checkbox-invisible"
          checked={shoudSearchShort || false}
          onChange={onChangeShortCheckbox}
        ></input>
        <span className="search-form__checkbox-visible">
          <div className="search-form__checkbox-circle"></div>
        </span>
        Короткометражки
      </label>
      <div className="search-form__line"></div>
    </form>
  );
}

export default SearchForm;
