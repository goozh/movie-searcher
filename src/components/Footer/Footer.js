function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Movies Searcher.</p>
      <div className="footer__container">
        <p className="footer__copyright">© 2021</p>
        <ul className="footer__nav">
          <li className="footer__nav-item"><a href="https://github.com/" className="footer__link">Github</a></li>
          <li className="footer__nav-item"><a href="https://facebook.com/" className="footer__link">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;