import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Highlights from '../Highlights/Highlights';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import Movie from '../Movie/Movie';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Promo />
        <Header isLoggedIn={true} />
        <Highlights />
        <Featured />
        {/* <Header isLoggedIn={true} />
        <Movie /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
