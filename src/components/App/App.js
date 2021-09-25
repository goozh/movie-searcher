import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Highlights from '../Highlights/Highlights';
import Featured from '../Featured/Featured';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Promo />
        <Header isLoggedIn={true} />
        <Highlights />
        <Featured />
      </div>
    </div>
  );
}

export default App;
