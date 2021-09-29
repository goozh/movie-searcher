import { useState, useEffect, useContext } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
// import { MessagePopupContext } from '../../contexts/MessagePopupContext';
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { MessagePopupContext } from "../../contexts/MessagePopupContext";
import {
  IMAGE_URL,
  FETCH_ERROR_TEXT,
  SHORT_DURATION,
  COUNT_MOVIES_1024,
  COUNT_MOVIES_768,
  COUNT_MOVIES_320,
  MORE_COUNT_MOVIES_1024,
  MORE_COUNT_MOVIES_768,
  MORE_COUNT_MOVIES_320,
} from "../../utils/constants";

function Movies({ savedMovies, setSavedMovies }) {
  const isSavedMovies = false;
  let moviesData = [];
  const { openMessagePopup } = useContext(MessagePopupContext);
  // стейт с массивом данных о фильмах
  const [moviesCards, setMoviesCards] = useState([]);
  // сейт для отображения прелоадера
  const [isLoading, setIsLoading] = useState(false);
  // стейт для сообщения в компоненте MoviesCardList
  const [message, setMessage] = useState("");
  //
  const [isMore, setIsMore] = useState(false);
  //
  const [filteredMovies, setFilteredMovies] = useState([]);

  // const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    moviesData = JSON.parse(localStorage.getItem("movies"));
  });

  useEffect(() => {
    if (localStorage.getItem("filtered-movies")) {
      renderFilteredMovies(JSON.parse(localStorage.getItem("filtered-movies")));
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  function handleWindowResize() {
    setTimeout(() => {
      if (localStorage.getItem("filtered-movies")) {
        renderFilteredMovies(JSON.parse(localStorage.getItem("filtered-movies")));
      }
    }, 1000);
  }

  function filterMovies(movies, searchInputValue, shoudSearchShort) {
    let filteredMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    if (!shoudSearchShort) {
      filteredMovies = filteredMovies.filter((movie) =>
        (movie.duration >= SHORT_DURATION))
    }
    renderFilteredMovies(filteredMovies);
    setFilteredMovies(filteredMovies);
  }

  function cardsCountToRender() {
    let windowWidth = document.documentElement.clientWidth
    if ((windowWidth <= 1103) && (windowWidth > 683)) {
      return COUNT_MOVIES_768;
    }
    if (windowWidth <= 683) {
      return COUNT_MOVIES_320;
    }
    return COUNT_MOVIES_1024;
  }

  function cardsCountToAdd() {
    if (cardsCountToRender() === COUNT_MOVIES_1024) {
      return MORE_COUNT_MOVIES_1024;
    }
    return MORE_COUNT_MOVIES_768;
  }

  function renderFilteredMovies(filteredMovies) {
    if (filteredMovies.length === 0) {
      setMessage("Ничего не найдено");
    } else {
      setMessage("");
    }
    if (filteredMovies.length > cardsCountToRender()) {
      setMoviesCards(filteredMovies.slice(0, cardsCountToRender()));
      setIsMore(true);
    } else {
      setMoviesCards(filteredMovies);
      setIsMore(false);
    }
    setFilteredMovies(filteredMovies);
    localStorage.setItem("filtered-movies", JSON.stringify(filteredMovies));
  }

  function handleSearchButtonSubmit(searchInputValue, shoudSearchShort) {
    if (searchInputValue === "") {
      setMessage("Нужно ввести ключевое слово");
      setMoviesCards([]);
    } else {
      if (!moviesData) {
        setIsLoading(true);
        moviesApi
          .getMovies()
          .then((movies) => {
            setIsLoading(false);
            filterMovies(movies, searchInputValue, shoudSearchShort);
            localStorage.setItem("movies", JSON.stringify(movies));
          })
          .catch((err) => {
            setMoviesCards([]);
            setIsLoading(false);
            openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
          });
      } else {
        filterMovies(moviesData, searchInputValue, shoudSearchShort);
      }
    }
  }

  function handleMoreButtonClick() {
    setMoviesCards((moviesCards) => {
      setIsMore(filteredMovies.length > moviesCards.length + cardsCountToAdd());
      return filteredMovies.slice(0, moviesCards.length + cardsCountToAdd())
    });
  }

  function handleSaveButtonClick(movie, isCardSaved) {
    if (!isCardSaved) {
      // добавляем в сохраненные
      const newSavedMovie = {
        ...movie,
        image: IMAGE_URL + movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: IMAGE_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        _id: movie,
      };
      mainApi
        .postMovieCard(newSavedMovie)
        .then((res) => {
          if (res) {
            setSavedMovies([
              ...savedMovies,
              { ...newSavedMovie, _id: res.movie._id },
            ]);
          }
        })
        .catch((err) => {
          openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
        });
    } else {
      // удаляем из сохраненных
      let deleteId;
      savedMovies.forEach((savedMovie, index) => {
        if (savedMovie.movieId === movie.id) {
          deleteId = savedMovie._id;
        }
      });
      mainApi
        .deleteMovieCard(deleteId)
        .then((res) => {
          if (res) {
            setSavedMovies(
              savedMovies.filter((movie) => movie._id !== deleteId)
            );
          }
        })
        .catch((err) => {
          openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
        });
    }
  }

  return (
    <>
      <SearchForm
        handleSearchButtonSubmit={handleSearchButtonSubmit}
      />
      <MoviesCardList
        isLoading={isLoading}
        isMore={isMore}
        handleMoreButtonClick={handleMoreButtonClick}
      >
        {message}
        {moviesCards &&
          moviesCards.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              isSavedMovies={isSavedMovies}
              handleSaveButtonClick={handleSaveButtonClick}
              savedMovies={savedMovies}
            />
          ))}
      </MoviesCardList>
    </>
  );
}

export default Movies;
