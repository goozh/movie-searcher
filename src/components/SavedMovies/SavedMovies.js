import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { MessagePopupContext } from "../../contexts/MessagePopupContext";
import { FETCH_ERROR_TEXT, SHORT_DURATION } from '../../utils/constants';

function SavedMovies({ savedMovies, setSavedMovies }) {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const { openMessagePopup } = useContext(MessagePopupContext);

  useEffect(() => {
    setRenderedMovies(savedMovies);
  }, [savedMovies])

  function handleSearchButtonSubmit(searchInputValue, shoudSearchShort) {
    let filteredMovies = savedMovies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()));
    if (!shoudSearchShort) {
      filteredMovies = savedMovies.filter((movie) =>
        (movie.duration >= SHORT_DURATION))
    }
    setRenderedMovies(filteredMovies);
  }

  function handleSaveButtonClick(movieToDelete) {
    // удаляем из сохраненных
    mainApi
      .deleteMovieCard(movieToDelete._id)
      .then((res) => {
        if (res) {
          setSavedMovies(
            savedMovies.filter((movie) => movie._id !== movieToDelete._id)
          );
        }
      })
      .catch((err) => {
        openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
      });
  }

  return (
    <>
      <SearchForm handleSearchButtonSubmit={handleSearchButtonSubmit} />
      <MoviesCardList isSavedMovies={true} savedMovies={savedMovies} isMore={false}>
        {(renderedMovies.length === 0) ? 'Ничего не найдено' : ''}
        {renderedMovies && renderedMovies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
            isSavedMovies={true}
            handleSaveButtonClick={handleSaveButtonClick}
            savedMovies={savedMovies} />
        ))}
      </MoviesCardList>
    </>
  );
}

export default SavedMovies;