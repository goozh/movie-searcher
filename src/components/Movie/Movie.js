import { useParams } from 'react-router-dom';

function Movie({ moviesData }) {
  let { id } = useParams();

  return (
    <section className="movie">
      <div className="movie__container">
        <img className="movie__poster" src={moviesData[id].poster_min} alt="Постер фильма"></img>
        <div className="movie__info-container">
          <h2 className="movie__title">{moviesData[id].title}</h2>
          <p className="movie__synopsis">
            {moviesData[id].sinopsys}
          </p>
          <ul className="movie__specification-list">
            <li className="movie__specification-item">
              <p className="movie__specification-title">Продолжительность:</p>
              <p className="movie__specification">{moviesData[id].duration}</p>
            </li>
            <li className="movie__specification-item">
              <p className="movie__specification-title">Режиссер:</p>
              <p className="movie__specification">{moviesData[id].director}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="movie__trailer">
        <h3 className="movie__trailer-title">Трейлер фильма:</h3>
        <iframe
          className="movie__trailer-iframe"
          src={moviesData[id].trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Movie;
