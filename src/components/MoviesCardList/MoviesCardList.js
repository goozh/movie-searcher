import Preloader from '../Preloader/Preloader';

function MoviesCardList({ children, isLoading, isMore, handleMoreButtonClick }) {
  return (
    <section className={'movies-card-list' + (isLoading ? ' movies-card-list_loading' : '')}>
      <div className="movies-card-list__main">
        {children}
        <Preloader isLoading={isLoading} />
      </div>
      <button
        type="button"
        className={'movies-card-list__more-button' + (!isMore ? ' movies-card-list__more-button_hidden' : '')}
        onClick={handleMoreButtonClick}>
          Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;