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
      <div className="promo__card promo__card_main" style={{ backgroundImage: `url(${MOVIES_DATA[0].poster})`}}>
        <div className="promo__content-container">
          <h2 className="promo__card-title promo__card-title_main">{MOVIES_DATA[0].title}</h2>
          <p className="promo__card-text">{MOVIES_DATA[0].sinopsys}</p>
          <NavLink to={`/movie/${MOVIES_DATA[0].id}`} className="promo__card-more-button">Подробнее</NavLink>
        </div>
      </div>
      <div className="promo__card promo__card_top-right" style={{ backgroundImage: `url(${MOVIES_DATA[1].poster})`}}>
        <div className="promo__content-container">
          <h2 className="promo__card-title promo__card-title_top-right">{MOVIES_DATA[1].title}</h2>
          <NavLink to={`/movie/${MOVIES_DATA[1].id}`} className="promo__card-more-button promo__card-more-button_top-right">Подробнее</NavLink>
        </div>
      </div>
      <div className="promo__card promo__card_small" style={{ backgroundImage: `url(${MOVIES_DATA[2].poster})`}}>
        <NavLink to={`/movie/${MOVIES_DATA[2].id}`} className="promo__card-title promo__card-title_small">{MOVIES_DATA[2].title}</NavLink>
      </div>
      <div className="promo__card promo__card_small" style={{ backgroundImage: `url(${MOVIES_DATA[3].poster})`}}>
        <NavLink to={`/movie/${MOVIES_DATA[3].id}`} className="promo__card-title promo__card-title_small">{MOVIES_DATA[3].title}</NavLink>
      </div>
    </section>
  );
}

export default Promo;