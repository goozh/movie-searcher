import { BASE_URL } from '../utils/constants';

class MainApi {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  setOptions(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(token) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(this._baseUrl + '/movies', this._options)
      .then(this._checkResponse);
  }

  setUserInfo({ email, name }) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({ email, name })
    })
      .then(this._checkResponse);
  }

  postMovieCard({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId }) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId })
    })
      .then(this._checkResponse);
  }

  deleteMovieCard(movieCardId) {
    return fetch(this._baseUrl + '/movies/' + movieCardId, {
      method: 'DELETE',
      headers: this._options.headers
    })
      .then(this._checkResponse);
  }

  register({ name, email, password }) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.status === 200){
          return response.json();
        }
        if (response.status === 400){
          console.log('Ошибка регистрации. Некорректно заполнено одно из полей');
        }
      })
  }

  login({ email, password }) {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }),
    })
    .then((res) => {
      if (res.status === 200){
        return res.json();
      }
      if (res.status === 400){
        console.log('Ошибка входа. Некорректно заполнено одно из полей');
      }
      if (res.status === 401){
        console.log('Ошибка входа. Пользователь с данным email не найден');
      }
    })
    .then((res) => {
      if (res) {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          return res;
        }
      }
    })
  }

  logout() {
    return fetch(this._baseUrl + '/signout', {
      method: 'POST',
      headers: this._options.headers,
    })
      .then((response) => {
        if (response.status === 200){
          return response.json();
        }
      })
  }

  // getInitialData() {
  //   return Promise.all([this.getUserInfo(), this.getSavedMovies()]);
  // }

}

export const mainApi = new MainApi(BASE_URL);
// export const mainApi = new MainApi('http://api.movies-explorer.gzzzh.nomoredomains.monster');
//   , {
//   headers: {
//     authorization: '18efd0cc-5a90-47e0-a265-11c194742f4a',
//     'Content-Type': 'application/json',
//   },
// });
