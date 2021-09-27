import poster from "../../images/hero.jpg";

function Movie() {
  return (
    <section className="movie">
      <div className="movie__container">
        <img className="movie__poster" src={poster} alt="Постер фильма"></img>
        <div className="movie__info-container">
          <h2 className="movie__title">Главный герой (2021)</h2>
          <p className="movie__synopsis">
            У сотрудника крупного банка всё идёт по накатанной, пока однажды он
            не выясняет, что окружающий его мир — это часть огромной видеоигры,
            а сам он в ней — всего лишь второстепенный персонаж. Хватит ли у
            него духу переписать свой код, обратить на себя внимание прекрасной
            девушки и, наконец, спасти мир? Одним словом, получится ли из него
            главный герой?
          </p>
          <ul className="movie__specification-list">
            <li className="movie__specification-item">
              <p className="movie__specification-title">Продолжительность:</p>
              <p className="movie__specification">115 мин. / 01:55</p>
            </li>
            <li className="movie__specification-item">
              <p className="movie__specification-title">Режиссер</p>
              <p className="movie__specification">Шон Леви</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="movie__trailer">
        <h3 className="movie__trailer-title">Трейлер фильма:</h3>
        <iframe
          className="movie__trailer-iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wnS4A5-vtFA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Movie;
