import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useLocation, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Navigation from '../Navigation/Navigation';
import MessagePopup from '../MessagePopup/MessagePopup';
import Movie from '../Movie/Movie';
import { MessagePopupContext } from '../../contexts/MessagePopupContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import Logout from '../Logout/Logout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { FETCH_ERROR_TEXT } from '../../utils/constants';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', id: null});
  const [savedMovies, setSavedMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  // контекст всплывающего окна
  const [MessagePopupState, setMessagePopupState] = useState({
    isMessagePopupOpened: false,
    message: 'Нужно ввести ключевое слово',
    openMessagePopup: openMessagePopup,
    closeMessagePopup: closeMessagePopup,
  });


  useEffect(() => {
    let jwt;
    if (localStorage.getItem('jwt')){
      jwt = localStorage.getItem('jwt');
    }
    loginCheck(jwt);
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies()
    }
  }, [ isLoggedIn ])

  function loginCheck(token) {
    mainApi.getUserInfo(token)
      .then((res) => {
        if (res) {
          mainApi.setOptions({
            headers: {
              authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          setCurrentUser({
            ...currentUser,
            name: res.user.name,
            email: res.user.email,
            id: res.user._id,
          })
          setIsLoggedIn(true);
          history.replace(location.pathname);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        // console.log(`${FETCH_ERROR_TEXT} ${err}`);
      })
  }

  function getSavedMovies() {
    mainApi.getSavedMovies()
      .then((res) => {
        if (res.movies) {
          setSavedMovies(res.movies.filter((movie) => (movie.owner === currentUser.id)));
        }
      })
      .catch((err) => {
        openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
      })
  }

  function handleMenuIconClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  function handleMenuLinkClick() {
    setIsMenuOpened(false);
  }

  function openMessagePopup(message) {
    setMessagePopupState({ ...MessagePopupState, isMessagePopupOpened: true, message})
  }

  function closeMessagePopup() {
    setMessagePopupState({ ...MessagePopupState, isMessagePopupOpened: false})
  }

  // function setMessage(value) {
  //   setMessagePopupState({ ...MessagePopupState, message: value});
  // }
  // ***

  function handleRegisterFormSubmit({name, email, password}) {
    mainApi.register({ name, email, password })
      .then((res) => {
        if (res) {
          handleLoginFormSubmit({ email, password });
        }
      })
      .catch((err) => {
        openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
      })
  }

  function handleLoginFormSubmit({email, password}) {
    mainApi.login({ email, password })
      .then((res) => {
        if (res) {
          loginCheck(res.token)
        }
      })
      .catch((err) => {
        openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
      })
  }

  function handleProfileFormSubmit({ name, email }) {
    mainApi.setUserInfo({ name, email })
      .then((res) => {
        if (res) {
          setCurrentUser({ ...currentUser, name, email });
          openMessagePopup('Данные пользователя успешно изменены');
        }
      })
      .catch((err) => {
        openMessagePopup(`${FETCH_ERROR_TEXT} ${err}`);
      });
  }

  return (
    <div className="root">
      <div className="page">
        <MessagePopupContext.Provider value={MessagePopupState}>
          <CurrentUserContext.Provider value={currentUser}>
            <Switch>
              <Route exact path="/">
                <Main isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
              </Route>
              <Route exact path="/movie/:id">
                <Header isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
                <Movie isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
                <Footer />
              </Route>
              <ProtectedRoute exact path="/movies" isLoggedIn={isLoggedIn} loginCheck={loginCheck}>
                <Header isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
                <Movies savedMovies={savedMovies} setSavedMovies={setSavedMovies} />
                <Footer />
              </ProtectedRoute>
              <ProtectedRoute exact path="/saved-movies" isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
                <SavedMovies savedMovies={savedMovies} setSavedMovies={setSavedMovies} />
                <Footer />
              </ProtectedRoute>
              <ProtectedRoute exact path="/profile" isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} handleMenuIconClick={handleMenuIconClick} />
                <Profile setCurrentUser={setCurrentUser} handleProfileFormSubmit={handleProfileFormSubmit} />
              </ProtectedRoute>
              <Route exact path="/signin">
                {!isLoggedIn ?
                  <Login handleLoginFormSubmit={handleLoginFormSubmit} />
                  : <Redirect to="/movies" />}
              </Route>
              <Route exact path="/signup">
                {!isLoggedIn ?
                  <Register handleRegisterFormSubmit={handleRegisterFormSubmit} />
                  : <Redirect to="/movies" />}
              </Route>
              <Route path="/logout">
                <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
            <Navigation isLoggedIn={isLoggedIn} isMenuOpened={isMenuOpened} handleMenuIconClick={handleMenuIconClick} handleMenuLinkClick={handleMenuLinkClick} />
            <MessagePopup />
          </CurrentUserContext.Provider>
        </MessagePopupContext.Provider>
      </div>
    </div>
  );
}

export default App;