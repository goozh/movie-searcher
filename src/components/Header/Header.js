import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ isLoggedIn, handleMenuIconClick }) {

  let scrollPrev = 0;
  const [headerStickedClass, setHeaderStickedClass] = useState('');

  function handleScroll() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setHeaderStickedClass(' header_sticked');
    } else {
      setHeaderStickedClass('');
    }
    scrollPrev = scrolled;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={'header' + (isLoggedIn ? ' header_logged-in' : '') + (headerStickedClass)}>
      <div className="header__container">
        <NavLink to="/" className="header__logo"></NavLink>
        <div className="header__right-container">
          <ul className="header__nav-bar">
            {!isLoggedIn&&(
              <>
                <li><NavLink to="/signup" className="header__nav-link">Регистрация</NavLink></li>
                <li><NavLink to="/signin" className="header__nav-button">Войти</NavLink></li>
              </>
            )}
            {isLoggedIn&&(
              <>
                <li><NavLink to="/movies" className="header__nav-link header__nav-link_logged-in">Фильмы</NavLink></li>
                <li><NavLink to="/saved-movies" className="header__nav-link header__nav-link_logged-in">Сохраненные фильмы</NavLink></li>
              </>
            )}
          </ul>
          {isLoggedIn&&(
            <>
            <NavLink to="/profile" className="header__nav-link header__nav-link_account">Аккаунт</NavLink>
            <div className="header__profile-icon"></div>
            </>
          )}
        </div>
        <button className="header__menu-button" type="button" onClick={handleMenuIconClick}></button>
      </div>
    </header>
  );
}

export default Header;
