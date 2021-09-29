import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import Highlights from '../Highlights/Highlights';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';

function Main({ isLoggedIn, handleMenuIconClick }) {
  return (
    <>
      <Promo />
      <Header isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
      <Highlights />
      <Featured />
      <Footer />
    </>
  );
}

export default Main;
