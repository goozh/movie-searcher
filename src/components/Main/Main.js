import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import Highlights from '../Highlights/Highlights';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
      <Promo />
      <Header />
      <Highlights />
      <Featured />
      {/* <Header isLoggedIn={true} />
      <Movie /> */}
      <Footer />
    </>
  );
}

export default Main;
