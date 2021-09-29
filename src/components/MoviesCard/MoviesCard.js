import defaultImage from '../../images/picture_icon.png';

function MoviesCard({isSavedMovies, movie, handleSaveButtonClick, savedMovies}) {

  const isCardSaved = savedMovies.some(i => i.movieId === movie.id);

  function onSaveButtonClick() {
    // setIsCardSaved(true);
    handleSaveButtonClick(movie, isCardSaved);
  }

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
  }

  function culcDuration(duration) {
    let result = '',
      hour = Math.floor(+duration / 60);
    switch (hour) {
      case 0:
        break;
      case 1:
        result += '1 час';
        break;
      case 2:
      case 3:
      case 4:
        result += `${hour} часа`;
        break;
      default:
        result += `${hour} часов`;
        break;
    }
    result = result + ((+duration % 60) ? ` ${(+duration % 60)} ${declOfNum((+duration % 60), ['минута', 'минуты', 'минут'])}` : '');
    return result;
  }

  return (
    <div className="movies-card">
      <div className="movies-card__title-line-container">
        <p className="movies-card__title" title={movie.nameRU}>{movie.nameRU}</p>
        <p className="movies-card__duration">{culcDuration(movie.duration)}</p>
      </div>
      <a href={movie.trailerLink}  className="movies-card__trailer-link">
        <img src={isSavedMovies ? movie.image : ('https://api.nomoreparties.co' + movie.image.url)} alt={"Обложка фильма"} className="movies-card__image" onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}}></img>
      </a>
      <button
        type="button"
        className={`movies-card__save-button ${isCardSaved && 'movies-card__save-button_saved'} ${isSavedMovies && 'movies-card__save-button_delete'}`}
        onClick={onSaveButtonClick}>
          {!isCardSaved && !isSavedMovies && 'Сохранить'}
      </button>
    </div>
  );
}

export default MoviesCard;