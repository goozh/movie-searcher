import { NavLink } from 'react-router-dom';
import { MOVIES_DATA } from '../../utils/constants';

function Highlights() {
  return (
    <section className="highlights">
      <h2 className="highlights__title">Смотрите в кино</h2>
      <ul className="highlights__container">
        <li className="highlights__list-item">
          <NavLink to={`/movie/4`} className="highlights__card">
            <img className="highlights__card-image" alt={MOVIES_DATA[4].title} src={MOVIES_DATA[4].poster_min}></img>
            <h3 className="highlights__card-title">{MOVIES_DATA[4].title}</h3>
          </NavLink>
        </li>
        <li className="highlights__list-item">
          <NavLink to={`/movie/5`} className="highlights__card">
            <img className="highlights__card-image" alt={MOVIES_DATA[5].title} src={MOVIES_DATA[5].poster_min}></img>
            <h3 className="highlights__card-title">{MOVIES_DATA[5].title}</h3>
          </NavLink>
        </li>
        <li className="highlights__list-item">
          <NavLink to={`/movie/6`} className="highlights__card">
            <img className="highlights__card-image" alt={MOVIES_DATA[6].title} src={MOVIES_DATA[6].poster_min}></img>
            <h3 className="highlights__card-title">{MOVIES_DATA[6].title}</h3>
          </NavLink>
        </li>
        <li className="highlights__list-item">
          <NavLink to={`/movie/7`} className="highlights__card">
            <img className="highlights__card-image" alt={MOVIES_DATA[7].title} src={MOVIES_DATA[7].poster_min}></img>
            <h3 className="highlights__card-title">{MOVIES_DATA[7].title}</h3>
          </NavLink>
        </li>
      </ul>
    </section>
  )
}

export default Highlights;