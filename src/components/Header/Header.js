import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo"></NavLink>
    </header>
  );
}

export default Header;