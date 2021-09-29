import { NavLink } from 'react-router-dom';

function Navigation({ isLoggedIn, isMenuOpened, handleMenuIconClick, handleMenuLinkClick }) {

  return (
    <div className={'navigation' + (isMenuOpened ? ' navigation_opened' : '') + (!isLoggedIn ? ' navigation_logged-out' : '')}>
      <div className="navigation__close" onClick={handleMenuIconClick}></div>
      <ul className="navigation__nav-bar">
        {!isLoggedIn&&(
          <>
            <li><NavLink to="/" className="navigation__nav-link" onClick={handleMenuLinkClick}>Главная</NavLink></li>
            <li><NavLink to="/signup" className="navigation__nav-link" onClick={handleMenuLinkClick}>Регистрация</NavLink></li>
            <li><NavLink to="/signin" className="navigation__nav-link" onClick={handleMenuLinkClick}>Войти</NavLink></li>
          </>
        )}
        {isLoggedIn&&(
          <>
            <li><NavLink to="/" className="navigation__nav-link" onClick={handleMenuLinkClick}>Главная</NavLink></li>
            <li><NavLink to="/movies" className="navigation__nav-link" onClick={handleMenuLinkClick}>Фильмы</NavLink></li>
            <li><NavLink to="/saved-movies" className="navigation__nav-link" onClick={handleMenuLinkClick}>Сохраненные фильмы</NavLink></li>
          </>
        )}
      </ul>
      {isLoggedIn&&(
        <div className="navigation__account-link-container">
          <NavLink to="/profile" className="navigation__nav-link navigation__nav-link_account" onClick={handleMenuLinkClick}>Аккаунт</NavLink>
          <div className="navigation__profile-icon"></div>
        </div>
      )}
    </div>
  );
}

export default Navigation;