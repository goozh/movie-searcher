// import poster1 from '../../images/1.jpg';
// import poster2 from '../../images/6.jpg';
// import poster3 from '../../images/12.jpg';
// import poster4 from '../../images/7.jpg';
import { NavLink } from 'react-router-dom';
import { MOVIES_DATA } from '../../utils/constants';

function Promo() {
  return (
    <section className="promo">
      <NavLink to="/" className="promo__logo"></NavLink>
      <div className="promo__card promo__card_main">
        <div className="promo__content-container">
          <h2 className="promo__card-title promo__card-title_main">{MOVIES_DATA[0].title}</h2>
          <p className="promo__card-text">{MOVIES_DATA[0].sinopsys}</p>
          <NavLink to={`/movie/${MOVIES_DATA[0].id}`} className="promo__card-more-button">Подробнее</NavLink>
        </div>
        <img className="promo__card-image" src={MOVIES_DATA[0].poster} alt={MOVIES_DATA[0].title}></img>
      </div>
      <div className="promo__card promo__card_top-right">
        <div className="promo__content-container">
          <h2 className="promo__card-title promo__card-title_top-right">{MOVIES_DATA[1].title}</h2>
          <NavLink to={`/movie/${MOVIES_DATA[1].id}`} className="promo__card-more-button promo__card-more-button_top-right">Подробнее</NavLink>
        </div>
        <img className="promo__card-image" src={MOVIES_DATA[1].poster} alt={MOVIES_DATA[1].title}></img>
      </div>
      <div className="promo__card promo__card_small">
        <NavLink to={`/movie/${MOVIES_DATA[2].id}`} className="promo__card-title promo__card-title_small">{MOVIES_DATA[2].title}</NavLink>
        <img className="promo__card-image" src={MOVIES_DATA[2].poster} alt={MOVIES_DATA[2].title}></img>
      </div>
      <div className="promo__card promo__card_small">
        <NavLink to={`/movie/${MOVIES_DATA[3].id}`} className="promo__card-title promo__card-title_small">{MOVIES_DATA[3].title}</NavLink>
        <img className="promo__card-image" src={MOVIES_DATA[3].poster} alt={MOVIES_DATA[3].title}></img>
      </div>
    </section>
  );
}

export default Promo;