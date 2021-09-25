import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Highlights from '../Highlights/Highlights';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Promo />
        <Header isLoggedIn={true} />
        <Highlights />
      </div>
    </div>
  );
}

export default App;
