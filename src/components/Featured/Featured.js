import { NavLink } from 'react-router-dom';
import { MOVIES_DATA } from '../../utils/constants';

function Featured() {
  return (
    <section className="featured" style={{ backgroundImage:  `linear-gradient(transparent, 70%, #252B42), url(${MOVIES_DATA[8].poster})`}}>
      <div className="featured__content-container">
        <h2 className="featured__title">{MOVIES_DATA[8].title}</h2>
        <p className="featured__text">{MOVIES_DATA[8].sinopsys}</p>
        <NavLink to={`/movie/8`} className="featured__more-button">Подробнее</NavLink>
      </div>
    </section>
  )
}

export default Featured;